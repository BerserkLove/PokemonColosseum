function createLeague(){
 let gyms=sample(GYM_LEADERS,16).map((l,i)=>{let tr=withRandomTrainerSprite(l);return{stage:"Gym",number:i+1,trainer:tr,name:tr.name,theme:tr.type,badge:tr.badge,required:Math.round(2100+i*(1200/15))+difficultyOffset(),team:generateTrainerTeam(tr.type,"Gym")}});
 let eliteReq=[3400,3565,3730,3900].map(x=>x+difficultyOffset());
 let e=sample(ELITE_FOUR,4).map((m,i)=>{let tr=withRandomTrainerSprite(m);return{stage:"Elite Four",number:i+1,trainer:tr,name:tr.name,theme:tr.type,required:eliteReq[i]||3600,team:generateTrainerTeam(tr.type,"Elite Four")}});
 let c=withRandomTrainerSprite(sample(CHAMPIONS,1)[0]);
 let champ={stage:"Champion",number:1,trainer:c,name:c.name,theme:c.type,required:4250+difficultyOffset(),team:generateTrainerTeam(c.type,"Champion")};
 let legendPool=LEGENDS.filter(l=>l.name!==c.name);
 let legend=withRandomTrainerSprite(sample(legendPool.length?legendPool:LEGENDS,1)[0]);
 legend.required=4500+difficultyOffset();
 legend.team=(LEGENDARY_TRAINER_TEAMS[legend.name]||generateTrainerTeam(legend.type||"dragon","Champion"));
 return{gyms,eliteFour:e,champion:champ,legendary:legend}
}

function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms))}
async function fetchWithRetry(url, attempts=3, delay=350){
 let lastError;
 for(let i=0;i<attempts;i++){
  try{
   const res=await fetch(url);
   if(res.ok)return res;
   lastError=new Error(`HTTP ${res.status}`);
  }catch(e){
   lastError=e;
  }
  if(i<attempts-1)await sleep(delay*(i+1));
 }
 throw lastError;
}


function pokemonEndpointName(name){
 const n=String(name||"").trim().toLowerCase().replace(/\s+/g,"-").replace(/_/g,"-");
 const aliases={
  "giratina":"giratina-altered",
  "shaymin":"shaymin-land",
  "basculin":"basculin-red-striped",
  "darmanitan":"darmanitan-standard",
  "tornadus":"tornadus-incarnate",
  "thundurus":"thundurus-incarnate",
  "landorus":"landorus-incarnate",
  "enamorus":"enamorus-incarnate",
  "keldeo":"keldeo-ordinary",
  "meloetta":"meloetta-aria",
  "meowstic":"meowstic-male",
  "toxtricity":"toxtricity-amped",
  "urshifu":"urshifu-single-strike",
  "zygarde":"zygarde-50",
  "eiscue":"eiscue-ice",
  "indeedee":"indeedee-male",
  "basculegion":"basculegion-male",
  "oinkologne":"oinkologne-male",
  "maushold":"maushold-family-of-four",
  "dudunsparce":"dudunsparce-two-segment",
  "palafin":"palafin-zero",
  "tatsugiri":"tatsugiri-curly",
  "squawkabilly":"squawkabilly-green-plumage",
  "ogerpon":"ogerpon",
  "terapagos":"terapagos-normal"
 };
 return aliases[n]||n;
}

async function fetchPokemon(name){
 name=String(name||"").trim().toLowerCase().replace(/\s+/g,"-");
 if(SPECIAL_POKEMON_REGISTRY[name])return addMegaFormsForSpecial(makeSpecialPokemon(name));
 name=pokemonEndpointName(name);
 let r=await fetchWithRetry(`https://pokeapi.co/api/v2/pokemon/${name}`,4,300);let d=await r.json();
 let stats=d.stats||[];let hpStat=(stats.find(s=>s.stat&&s.stat.name==="hp")||{}).base_stat||0;
 let p={name:d.name,displayName:pretty(d.name),dexId:d.id,types:(d.types||[]).map(t=>t.type.name),bst:bst(stats),hp:hpStat,megaForms:[],activeMega:null,sprite:d.sprites.other?.["official-artwork"]?.front_default||d.sprites.front_default,shinySprite:d.sprites.other?.["official-artwork"]?.front_shiny||d.sprites.front_shiny,shiny:shinyRoll()};
 if(!p.shiny)p.shinyBonus=0;else p.shinyBonus=SHINY_BONUS;
 return addMegaFormsForSpecial(p);
}
async function enrichMega(p){
 const key=evolutionMappingKey(p);
 const entries=(EVOLUTION_MAPPING_DATA.megaEvolutions&&EVOLUTION_MAPPING_DATA.megaEvolutions[key])||[];
 let fetched=[];
 const targetEntries=entries.filter(m=>m.target);
 if(targetEntries.length){
  let res=await Promise.allSettled(targetEntries.map(m=>fetchPokemon(m.target)));
  fetched=res.map((r,idx)=>{
   const m=targetEntries[idx];
   if(r.status==="fulfilled"){
    return {name:m.name||r.value.displayName,scoreBst:m.scoreBst||r.value.bst,sprite:r.value.sprite,shinySprite:r.value.shinySprite||r.value.sprite,types:m.types||r.value.types,source:m.source||"mapping-pokeapi"};
   }
   return null;
  }).filter(Boolean);
 }
 let custom=customMegaFormsFor(p);
 p.megaForms=dedupeMegaForms([...fetched,...custom]);
 return p
}
async function loadPool(){let r=await fetchWithRetry("https://pokeapi.co/api/v2/pokemon-species?limit=1025",4,400);let d=await r.json();return [...new Set([...d.results.map(p=>p.name),...REGIONAL_FORM_POOL,"giratina-altered"])]}
function normalizeFallback(p){return{...p,activeMega:null,shiny:shinyRoll(),shinyBonus:0}}
function sampleDraftNames(available){
 let regular=available.filter(n=>!LEGENDARY_NAMES.has(n));
 let legendary=available.filter(n=>LEGENDARY_NAMES.has(n));
 let basePool=regular.length>=OPTIONS_PER_ROUND?regular:available;
 let names=sample(basePool,OPTIONS_PER_ROUND);
 if(legendary.length&&regular.length>=OPTIONS_PER_ROUND&&Math.random()<0.35){
  let leg=sample(legendary,1)[0];
  let slot=rand(0,Math.max(0,names.length-1));
  names[slot]=leg;
 }
 return names;
}
function renderTrainerSelection(){
 document.getElementById("mainTitle").textContent="Choose Your Trainer";
 let area=document.getElementById("gameArea");
 if(!area)return;
 area.className="options";
 const card=(type,label,sprite)=>{
  return `<button type="button" class="card" onclick="chooseTrainerType('${type}')"><div class="top"><h3 class="name">${label}</h3><div class="mystery">Trainer</div></div><div class="spritebox">${imgTag({name:label,sprite:sprite},"playerimg")}</div><div class="hidden">Pick this trainer category, then choose a model.</div></button>`;
 };
 area.innerHTML=card("boy","Boy","red")+card("girl","Girl","may")+card("nonbinary","Nonbinary","benga");
}

function displayTrainerName(){
 return (customTrainerName&&customTrainerName.trim()) || (trainer&&(trainer.label||trainer.name)) || "Trainer";
}
function setCustomTrainerName(v){
 customTrainerName=String(v||"").trim().slice(0,24);
 const n=document.getElementById("playerName");
 if(n)n.textContent=trainer?displayTrainerName():"Not selected";
}
function addRunEvent(kind,text,roundOverride=null){
 const round=roundOverride??Math.min(ROUNDS,Math.max(1,team.length||1));
 runEventLog.push({round,kind,text,time:Date.now()});
 if(runEventLog.length>80)runEventLog=runEventLog.slice(-80);
}
function renderEventLogPage(){
 const box=document.getElementById("eventLogList");
 if(!box)return;
 if(!runEventLog.length){box.innerHTML='<div class="historyEmpty">No events yet. The goblins are quiet.</div>';return;}
 box.innerHTML=runEventLog.map(e=>`<div class="logEntry"><div class="round">Round ${e.round} · ${e.kind}</div><div class="text">${e.text}</div></div>`).join("");
}
function openEventLogPage(){const b=document.getElementById("eventLogProfessorBanner"); if(b)b.innerHTML=professorIconRow(["Oak","Elm","Sonia","Laventon"]); renderEventLogPage();document.getElementById("eventLogOverlay").style.display="block"}
function closeEventLogPage(){document.getElementById("eventLogOverlay").style.display="none"}
function clearEventLog(){runEventLog=[];renderEventLogPage();render()}
function showQuestToast(msg){
 const t=document.getElementById("questToast");
 if(!t)return;
 t.textContent=msg||"Quest completed!";
 t.classList.add("show");
 setTimeout(()=>t.classList.remove("show"),2200);
}
function markQuest(name,points,reason){
 addRunEvent("Quest",`${name} completed: +${points}. ${reason||""}`);
 showQuestToast(`Quest completed: ${name} +${points}`);
}
function codexHtml(){
 const itemLines=ITEM_POOL.map(i=>`<li><b>${i.name}</b>: ${i.desc}</li>`).join("");
 return `
 <section class="codexCard"><h3>${profTitle("Oak","Core Flow")}</h3><ul>
  <li>Draft 6 Pokémon from blind random rolls.</li>
  <li>After each pick, immediate quests and events are checked.</li>
  <li>Post-draft order: item checks → hidden quests → Rotom form → Mega Evolution → battle simulation → certificate.</li>
  <li>One Mega Evolution per team. Primals are not Mega Evolutions.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Rowan","Scoring")}</h3><ul>
  <li>Team score = active BST + shiny bonuses + form changes.</li>
  <li>8+ unique active types grants +100.</li>
  <li>Item bonus, quest bonus and concept bonus are shown separately.</li><li>PokéMart coins are earned after completed runs: 10% of your final score goes into the current difficulty pouch.</li>
  <li>Easy: every challenger requires 500 fewer points. Normal: standard climb. Master: ultimate challenge after beating Normal once.</li><li>Some quests are hidden. You are not expected to know all of them at the start. Discover them by experimenting.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Juniper","PokéMart & Coins")}</h3><ul>
  <li><b>Coins:</b> After a completed run, you earn coins equal to 10% of your final League Power.</li>
  <li><b>Separate pouches:</b> Easy, Normal and Master each have their own Coin Pouch. Easy coins cannot be spent in Normal or Master.</li>
  <li><b>PokéMart visits:</b> You can visit the PokéMart once per pick phase. The last chance is before choosing the sixth Pokémon.</li>
  <li><b>Backpack:</b> Bought PokéMart items go into your Backpack. It holds 2 items and starts empty on every new run.</li>
  <li><b>X-Items:</b> Most X-Items now target one eligible Pokémon. X All is the team-wide exception. Ability Capsule doubles PokéMart point bonuses, but not X Accuracy or Guard Spec.</li>
  <li><b>One-run tools:</b> PokéMart items are not permanent upgrades. Coins persist, Backpack items do not.</li>
 </ul></section>

 <section class="codexCard"><h3>${profTitle("Elm","Items")}</h3><ul>${itemLines}<li><b>PokéMart:</b> Buy one-run X-Items with coins. Each difficulty has its own pouch, and Backpack items do not carry into a new run.</li><li><b>Backpack:</b> Holds up to 2 PokéMart items. Use activatable items during pick phases or in the pre-Mega cleanup phase after the sixth pick.</li></ul></section>
 <section class="codexCard"><h3>${profTitle("Sycamore","Discovered Quests")}</h3><ul>${discoveredQuestCodex()}</ul></section>
 <section class="codexCard"><h3>${profTitle("Birch","Team Concepts")}</h3><ul>
  <li>Strong type concepts grant +50 per fitting Pokémon at 3+ matches.</li>
  <li>Ultra Beasts, Regi Core, Paradox teams and Forces of Nature are team concepts.</li><li>Starter Squad is a team concept at 3+ starter-family Pokémon.</li><li>All four Tapus trigger Alola Protector Team for +1000.</li><li>Regional, legendary, baby, dog, horse, grunt-like and other concepts can appear.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Sonia","Events")}</h3><ul>
  <li>One crime organization Grunt can ambush during the draft.</li>
  <li>Battle, run, or use Escape Rope if available.</li>
  <li>Defeating the Grunt retrieves a strange glowing orb.</li>
  <li>Opponent teams are shown in League and Grunt encounters.</li>
 </ul></section>`;
}
function openCodexPage(){const b=document.getElementById("codexProfessorBanner"); if(b)b.innerHTML=professorIconRow(["Oak","Elm","Birch","Rowan","Juniper","Sycamore","Kukui","Sada","Turo"]); document.getElementById("codexContent").innerHTML=codexHtml();document.getElementById("codexOverlay").style.display="block"}
function closeCodexPage(){document.getElementById("codexOverlay").style.display="none"}
async function continuePostDraftPipeline(delay=150){
 if(postDraftPipelineRunning)return;
 postDraftPipelineRunning=true;
 await sleep(delay);
 try{
  if(pendingGrunt){postDraftPendingAfterGrunt=true;return;}
  const itemOpened=await openPostDraftItemModal();
  if(itemOpened)return;
  const hidden=await openHiddenQuestModal();
  if(hidden)return;
  const rotomOpened=await openRotomFormModal();
  if(rotomOpened)return;
  const megaOpened=openMegaModal();
  if(megaOpened)return;
  finishPostDraftChoices(900);
 }finally{
  postDraftPipelineRunning=false;
 }
}
function resumePostDraftPipeline(){postDraftPipelineRunning=false;continuePostDraftPipeline(150)}
function showdownSpriteName(name){
 const raw=String(name||"").toLowerCase().trim();
 const aliases={
  "ash-greninja":"greninja-ash",
  "arcanine hisui":"arcanine-hisui",
  "hisuian arcanine":"arcanine-hisui",
  "ninetales alola":"ninetales-alola",
  "vulpix alola":"vulpix-alola"
 };
 if(aliases[raw])return aliases[raw];
 return raw.replace(/♀/g,"f").replace(/♂/g,"m").replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"");
}
function opponentSprite(name){return `https://play.pokemonshowdown.com/sprites/dex/${showdownSpriteName(name)}.png`}
function renderOpponentTeamSprites(teamNames){
 teamNames=Array.isArray(teamNames)?teamNames:[];
 if(!teamNames.length)return "";
 return `<div class="oppTeam spriteTeam">${teamNames.map(n=>`<span class="oppMonSprite"><img src="${opponentSprite(n)}" onerror="this.style.display='none'">${n}</span>`).join("")}</div>`;
}

function chooseTrainerType(type){
 trainerType=type;
 const firstTrainer=(TRAINERS[type]&&TRAINERS[type][0])||TRAINERS.boy[0];
 trainer={label:firstTrainer[0],modelName:firstTrainer[0],sprite:randomTrainerSprite(firstTrainer[0],firstTrainer[1])};

 // If the player changes trainer after a draft has started, reset the active run state.
 // If no draft has started yet, keep item choices stable.
 if(team.length>0||currentOptions.length>0){
  usedNames=new Set();
  team=[];
  currentOptions=[];
  league=createLeague();
  gruntRound=rand(1,6);
  gruntResolved=false;
  pendingGrunt=null;
  eventLog=null;
  selectedMegaIndex=null;
  megaPromptShown=false;
  celebrationShown=false;
  cachedConceptKey='';
  cachedConceptResult=null;
  initItemChoices();
  document.getElementById("megaModal").style.display="none";
  document.getElementById("gruntModal").style.display="none";
  document.getElementById("itemModal").style.display="none";
 }

 // Important: selecting a trainer must show item selection only.
 // Draft generation starts after selecting an item, not here.
 render();
}
function chooseTrainerModel(i){const list=TRAINERS[trainerType]||TRAINERS.boy;const picked=list[i]||list[0];trainer={label:picked[0],modelName:picked[0],sprite:randomTrainerSprite(picked[0],picked[1])};addRunEvent('Trainer',`Trainer model set to ${trainer.label}.`);render()}

function renderDifficultyButtons(){
 const diff=document.getElementById("difficultyButtons");
 if(!diff)return;
 const locked=!isMasterUnlocked();
 diff.innerHTML=`<button type="button" class="mini ${difficultyMode==="easy"?"active":""}" onclick="setDifficultyMode('easy')" title="Easy Mode: League requirements are reduced by 500.">Easy Mode</button><button type="button" class="mini ${difficultyMode==="normal"?"active":""}" onclick="setDifficultyMode('normal')" title="Normal Mode: Standard climb.">Normal Mode</button><button type="button" class="mini ${difficultyMode==="master"?"active":""}" onclick="setDifficultyMode('master')" title="${locked?"Master Mode: Beat Normal once to unlock.":"Master Mode: Ultimate challenge."}">${locked?"🔒 ":""}Master Mode</button>`;
}

