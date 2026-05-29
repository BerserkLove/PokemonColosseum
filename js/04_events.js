function renderResults(area,title,res){
 title.textContent="League Result";
 area.className="";
 const gyms=res.battles.filter(b=>b.stage==="Gym");
 const elite=res.battles.filter(b=>b.stage==="Elite Four");
 const champ=res.battles.find(b=>b.stage==="Champion");
 const concept=teamConcept();
 area.innerHTML=`<div class="rankpanel"><div class="ball ${res.rank.ball}"></div><div><h2 class="ranktitle">${res.rank.name}</h2><p class="ranksub">${res.rank.note}</p><div class="chips"><span class="chip">${res.gyms}/16 Gyms</span><span class="chip">${res.elite}/4 Elite Four</span><span class="chip">${res.champ?"Champion defeated":"Champion not defeated"}</span><span class="chip">${res.legend?"GS Ball cleared":"GS Ball not cleared"}</span></div></div></div>
 <div class="final-box">
  <h3 style="font-size:30px;font-weight:1000;margin:0 0 8px">Score Reveal</h3>
  <p class="tscore">Team score: ${baseTotal()}. Type bonus: ${getTypes().length>=TYPE_BONUS_THRESHOLD?"+100":"+0"}. Item bonus: +${itemBonusTotal()}. Quest bonus: +${questBonusTotal()}. Concept bonus: +${conceptBonus()}. Final League Power: ${finalScore()}.</p>
  ${questBreakdown().length?`<div class="card" style="margin:14px 0;box-shadow:none"><div class="label">Quest Bonuses</div>${questBreakdown().map(q=>`<div class="tscore"><b>${q.name}</b>: +${q.points}. ${q.reason}</div>`).join("")}</div>`:""}
  <button class="btn btn-ghost" style="margin:10px 10px 10px 0" onclick="openEventLogPage()">Open Event Log</button>
  <button class="btn btn-ghost" style="margin:10px 10px 10px 0" onclick="reopenScoreBreakdown()">Score Breakdown</button>
  <button class="btn btn-ghost" style="margin:10px 10px 10px 0" onclick="battleSimulationShown=false;startBattleSimulation()">Show Battle Simulation</button><button class="btn btn-ghost" style="margin:10px 10px 10px 0" onclick="showCertificateAgain()">Show Certificate</button>
  ${selectedItem&&((selectedItem.id==="evolution_stone"&&!evolutionUsed)||(selectedItem.id==="link_cable"&&!linkCableUsed)||(selectedItem.id==="rainbow_feather"&&!rainbowFeatherResolved))?`<button class="btn btn-ghost" style="margin:10px 0" onclick="openPostDraftItemModal()">Use ${selectedItem.name}</button>`:""}

  <div class="card" style="margin:14px 0;box-shadow:none">
    <div class="label">Team Concept</div>
    <div class="name" style="font-size:22px">${concept.name}</div>
    <div class="tscore">${concept.reason} ${conceptBonus()?`+${conceptBonus()} bonus awarded.`:"No concept bonus."}</div>
    ${amuletConceptTag()}
  </div>

  <div class="revealteam">
   ${team.map((p,i)=>`<div class="reveal ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}"><div><div class="tname">${i+1}. ${p.shiny?'✨ ':''}${activePokemonName(p,i)}</div><div class="tscore">${lightBallAppliesTo(i)?scoreBaseFor(p,i):scoreBaseDisplayFor(p,i)} BST${lightBallAppliesTo(i)?` (${lightBallEffectText(p,i)})`:""}${p.activeUnbound?` as ${p.activeUnbound.name}`:""}${selectedMegaIndex===i&&p.activeMega?` → ${p.activeMega.scoreBst} as ${p.activeMega.name}`:""}${p.shiny?` + ${SHINY_BONUS} shiny bonus`:""}${p.eternalBonus?` + ${p.eternalBonus} Eternal Flower bonus`:""}${p.extraShinyBonus?` + ${p.extraShinyBonus} second shiny bonus`:""}${p.name==="arceus"&&arceusPlateBonus()?` +300 Arceus Plate quest`:""}${p.activePrimal?` → ${p.activePrimal.scoreBst} as ${p.activePrimal.name}`:""}${p.fusedWith?` + DNA fusion with ${pretty(p.fusedWith)}`:""}${selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType)?` +50 ${elementalPlateType} plate`:""}</div><div class="types" style="margin-top:6px">${activeTypes(p,i).map(typePill).join("")}</div>${pokemonItemBadges(p,i)}${pokemonSpecialBadges(p)}</div><div class="rscore">${pScore(p,i)}</div></div>`).join("")}
  </div>

  ${eventLog?`<h3 style="font-size:24px;font-weight:1000;margin:20px 0 10px">Draft Event</h3><div class="battle ${eventLog.won?'win':'loss'}"><div class="trainerrow">${imgTag(eventLog.grunt)}<div><div class="label">Grunt Encounter</div><div class="name" style="font-size:16px">${eventLog.grunt.name}</div><div class="tscore">${eventLog.won?`Protected the team. ${eventLog.orbHint||""}`:`Lost ${eventLog.stolen?eventLog.stolen.displayName:"a Pokémon"}.`}${renderOpponentTeam(eventLog.team)}</div></div><div class="result ${eventLog.won?'win':'loss'}">${eventLog.won?'Win':'Loss'}</div></div></div>`:""}

  <h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">16 Canon Gym Challenge</h3>
  <div class="leaguegrid">${gyms.map(battleCard).join("")}</div>

  <h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">Canon Elite Four</h3>
  <div class="leaguegrid">${elite.map(battleCard).join("")}</div>

  <h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">Champion</h3>
  <div class="leaguegrid">${battleCard(champ)}</div>

  ${res.legendaryResult?`<h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">Hidden Legendary Trainer</h3><div class="leaguegrid">${legendCard(res.legendaryResult)}</div>`:""}
 </div>`;
}

function renderEvent(){let b=document.getElementById("eventBanner");if(!eventLog){b.innerHTML="";return}b.innerHTML=`<div class="eventbox"><div style="display:flex;gap:12px;align-items:center">${imgTag(eventLog.grunt)}<div><h3 style="margin:0;font-size:22px">${eventLog.won?eventLog.grunt.name+" defeated!":eventLog.grunt.name+" got away!"}</h3><p>${eventLog.choice==="escape"?"You used Escape Rope.":eventLog.choice==="run"?"You ran.":`You battled the grunt.`} ${eventLog.won?`No Pokémon stolen. ${eventLog.orbHint||""}`:`${eventLog.stolen?eventLog.stolen.displayName:"A Pokémon"} was stolen. Draft again to refill the slot.`}${renderOpponentTeam(eventLog.team)}</p></div></div></div>`}
function battleCard(b){return`<div class="battle ${b.won?'win':'loss'}"><div class="trainerrow">${imgTag(b.trainer)}<div><div class="label">${b.stage} ${b.stage==="Champion"?"":b.number}</div><div class="name" style="font-size:16px">${b.name}</div><div class="types" style="margin-top:6px">${typePill(b.theme)}</div>${b.badge?`<div class="tscore">${b.badge}</div>`:""}</div>${b.stage==="Champion"?winnerTrophyBadge():badgeImg(b.badge,b.theme,b.stage)}</div>${renderOpponentTeam(b.team)}<div class="top"><div class="tscore">Required: ${b.required}</div><div class="result ${b.won?'win':'loss'}">${b.sash?'Sash Save':b.won?'Cleared':'Stopped'}</div></div></div>`}
function legendCard(b){
 return `<div class="battle secret ${b.won?'win':'loss'}"><div class="trainerrow">${imgTag(b)}<div><div class="label">Secret Challenge</div><div class="name" style="font-size:16px">${b.name}</div><div class="tscore">${b.title}</div></div><div class="badge" title="GS Ball"><img class="gsball-img" src="assets/GS_Ball_artwork.webp" alt="GS Ball"></div></div>${renderOpponentTeam(b.team)}<div class="top"><div class="tscore">Required: ${b.required}</div><div class="result ${b.won?'win':'loss'}">${b.won?'GS Cleared':'Legend Stands'}</div></div></div>`
}

const RUN_HISTORY_KEY="pokemon_colosseum_run_history_v1";
let currentRunHistoryId=null;

function getRunHistory(){
 try{return JSON.parse(localStorage.getItem(RUN_HISTORY_KEY)||"[]")||[]}catch(e){return []}
}
function saveRunHistory(list){
 try{localStorage.setItem(RUN_HISTORY_KEY,JSON.stringify(list.slice(0,100)))}catch(e){console.warn("Could not save run history",e)}
}


const COLLECTION_LOG_KEY="pokemon_colosseum_collection_log_v1";
function emptyCollectionLog(){
 return {version:1,updatedAt:null,quests:{},concepts:{},specialPokemon:{},shinyPokemon:{},trainerAchievements:{},difficultyAchievements:{}};
}
function getCollectionLog(){
 try{
  const raw=JSON.parse(localStorage.getItem(COLLECTION_LOG_KEY)||"null");
  return raw&&typeof raw==="object"?{...emptyCollectionLog(),...raw}:emptyCollectionLog();
 }catch(e){return emptyCollectionLog()}
}
function saveCollectionLog(log){
 try{
  log.updatedAt=new Date().toISOString();
  localStorage.setItem(COLLECTION_LOG_KEY,JSON.stringify(log));
 }catch(e){console.warn("Could not save collection log",e)}
}
function collectionSet(log,section,key,data){
 if(!key)return;
 if(!log[section])log[section]={};
 const prev=log[section][key]||{};
 log[section][key]={...prev,...data,key,firstSeen:prev.firstSeen||new Date().toISOString(),seen:(prev.seen||0)+1};
}
function collectionNameKey(x){return String(x||"").toLowerCase().replace(/^✨\s*/,"").replace(/_/g,"-").replace(/\s+/g,"-").trim()}
function collectionIsShinyMon(p){
 if(!p)return false;
 if(p.shiny||p.isShiny)return true;
 const n=String(p.name||p.displayName||"");
 if(/^✨/.test(n)||/\bshiny\b/i.test(n))return true;
 if((p.tags||[]).includes("shiny")||(p.specialTags||[]).includes("shiny"))return true;
 return false;
}
function currentSpecialMonKey(p){
 if(!p)return "";
 if(p.specialId)return p.specialId;
 if(p.eternalFloette)return "eternal-floette";
 if(p.glitchPokemon||p.internalName==="missingno"||p.name==="MissingNo.")return "missingno";
 const keys=[p.internalName,p.name,p.displayName,p.baseName,p.baseSpecies].map(collectionNameKey);
 const registry=(typeof SPECIAL_POKEMON_REGISTRY!=="undefined")?SPECIAL_POKEMON_REGISTRY:{};
 for(const k of keys){if(registry[k])return k;}
 if(keys.some(k=>k.includes("crystal")))return keys.find(k=>k.includes("crystal"))||keys[0];
 if(p.special)return keys[0]||"special-pokemon";
 return "";
}
function recordCollectionFromRun(entry){
 if(!entry)return;
 const log=getCollectionLog();
 (entry.events||[]).forEach(e=>{
  if(e.kind==="Quest"){
   const name=String(e.text||"").split(" completed:")[0].trim();
   if(name)collectionSet(log,"quests",name,{name,meta:"Quest completed"});
  }
 });
 if(entry.concept&&entry.concept.name&&entry.concept.name!=="Random Survivors"&&(entry.concept.bonus||0)>0){
  collectionSet(log,"concepts",entry.concept.name,{name:entry.concept.name,meta:`+${entry.concept.bonus} base concept`});
 }
 (entry.team||[]).forEach(p=>{
  if(collectionIsShinyMon(p)){
   const shinyKey=collectionNameKey(p.internalName||p.name||p.displayName||"shiny-pokemon");
   collectionSet(log,"shinyPokemon",shinyKey,{name:String(p.name||p.displayName||p.internalName||shinyKey).replace(/^✨\s*/,""),meta:"Shiny Pokémon",sprite:p.shinySprite||p.sprite||""});
  }
  const sk=currentSpecialMonKey(p);
  if(sk)collectionSet(log,"specialPokemon",sk,{name:p.name||p.internalName||sk,meta:"Special Pokémon",sprite:p.sprite||""});
 });
 if(entry.rank&&entry.rank.name)collectionSet(log,"trainerAchievements",entry.rank.name,{name:entry.rank.name,meta:`Best seen score: ${entry.score||0}`});
 if(entry.difficultyLabel)collectionSet(log,"difficultyAchievements",entry.difficultyLabel,{name:entry.difficultyLabel,meta:`Completed run on ${entry.difficultyLabel}`});
 saveCollectionLog(log);
}
function collectionQuestCatalog(){
 const base=(typeof QUEST_CATALOG!=="undefined"?QUEST_CATALOG:[]).map(q=>({key:q.name,name:q.name,meta:q.rarity||"Quest"}));
 const discovered=Object.values(getCollectionLog().quests||{}).map(x=>({key:x.key||x.name,name:x.name||x.key,meta:x.meta||"Discovered"}));
 return mergeCollectionCatalog(base,discovered);
}
function collectionConceptCatalog(){
 const known=[
  "Bond Phenomenon Team","Alola Protector Team","All Legendary Team","Ultra Beast Containment Unit","Regi Seal Team","Paradox Rift Team","Starter Squad","Forces of Nature Team","Clone Army","A World Before Our Time","Pikachu Parade","Anime Legends Team","Pay Day","Kitty Dream","Almost Legendary","Myth Cabinet","Dog Park","Horse Stable","Baby Daycare","Grunt Squad","Shiny Showcase","Illegal Power Stack",
  "Kanto Team","Johto Team","Hoenn Team","Sinnoh Team","Unova Team","Kalos Team","Alola Team","Galar Team","Paldea Team",
  "Normal Core","Fire Core","Water Core","Electric Core","Grass Core","Ice Core","Fighting Core","Poison Core","Ground Core","Flying Core","Psychic Core","Bug Core","Rock Core","Ghost Core","Dragon Core","Dark Core","Steel Core","Fairy Core"
 ];
 const base=known.map(n=>({key:n,name:n,meta:"Team concept"}));
 const discovered=Object.values(getCollectionLog().concepts||{}).map(x=>({key:x.key||x.name,name:x.name||x.key,meta:x.meta||"Discovered"}));
 return mergeCollectionCatalog(base,discovered);
}
function collectionSpecialCatalog(){
 const reg=typeof SPECIAL_POKEMON_REGISTRY!=="undefined"?SPECIAL_POKEMON_REGISTRY:{};
 const base=Object.entries(reg).map(([k,v])=>({key:k,name:v.displayName||pretty(k),meta:`Special Pokémon${v.bonus?` +${v.bonus}`:""}`,sprite:v.sprite?specialAsset(v.sprite):""}));
 const extras=[
  {key:"eternal-floette",name:"Eternal Floette",meta:"Rare event Pokémon +300",sprite:specialAsset("220px-0670Floette-Eternal.png")},
  {key:"missingno",name:"MissingNo.",meta:"Glitch Pokémon"},
 ];
 const discovered=Object.values(getCollectionLog().specialPokemon||{}).map(x=>({key:x.key||x.name,name:x.name||x.key,meta:x.meta||"Discovered",sprite:x.sprite||""}));
 return mergeCollectionCatalog([...base,...extras],discovered);
}
function collectionShinyCatalog(){
 const discovered=Object.values(getCollectionLog().shinyPokemon||{}).map(x=>({key:x.key||x.name,name:x.name||x.key,meta:x.meta||"Shiny",sprite:x.sprite||""}));
 return mergeCollectionCatalog(discovered,discovered);
}
function collectionTrainerCatalog(){
 const known=["Poké Ball Rookie","Great Ball Challenger","Ultra Ball Contender","Premier Ball Ace","Luxury Ball Gym Conqueror","Champion Ball Master","GS Ball Legend","Master Ball Myth"];
 const base=known.map(n=>({key:n,name:n,meta:"Trainer achievement"}));
 const discovered=Object.values(getCollectionLog().trainerAchievements||{}).map(x=>({key:x.key||x.name,name:x.name||x.key,meta:x.meta||"Unlocked"}));
 return mergeCollectionCatalog(base,discovered);
}
function collectionDifficultyCatalog(){
 const base=["Easy Mode","Normal Mode","Master Mode"].map(n=>({key:n,name:n,meta:"Difficulty achievement"}));
 const discovered=Object.values(getCollectionLog().difficultyAchievements||{}).map(x=>({key:x.key||x.name,name:x.name||x.key,meta:x.meta||"Unlocked"}));
 return mergeCollectionCatalog(base,discovered);
}
function mergeCollectionCatalog(base,extra){
 const map=new Map();
 [...base,...extra].forEach(x=>{if(x&&x.key&&!map.has(x.key))map.set(x.key,x)});
 return [...map.values()];
}
function collectionSections(){
 return [
  {id:"quests",title:"Quests",emoji:"🧩",catalog:collectionQuestCatalog(),found:getCollectionLog().quests,quote:"Hidden gears are still gears. Pull enough of them and the machine sings."},
  {id:"concepts",title:"Concepts",emoji:"🧠",catalog:collectionConceptCatalog(),found:getCollectionLog().concepts,quote:"A team is not six monsters. It is one argument told six ways."},
  {id:"specialPokemon",title:"Special Pokémon",emoji:"🌟",catalog:collectionSpecialCatalog(),found:getCollectionLog().specialPokemon,quote:"Rare forms are field notes with teeth."},
  {id:"shinyPokemon",title:"Shiny Pokémon",emoji:"✨",catalog:collectionShinyCatalog(),found:getCollectionLog().shinyPokemon,quote:"Sparkle is not strategy, but it does make the notebook prettier."},
  {id:"trainerAchievements",title:"Trainer Achievements",emoji:"🏅",catalog:collectionTrainerCatalog(),found:getCollectionLog().trainerAchievements,quote:"Badges measure victory. Records measure stubbornness."},
  {id:"difficultyAchievements",title:"Difficulty Achievements",emoji:"⛰️",catalog:collectionDifficultyCatalog(),found:getCollectionLog().difficultyAchievements,quote:"Difficulty is just the mountain introducing itself."}
 ];
}
function collectionTotals(){
 const sections=collectionSections();
 let found=0,total=0;
 sections.forEach(sec=>{
  const keys=new Set(sec.catalog.map(x=>x.key));
  Object.keys(sec.found||{}).forEach(k=>keys.add(k));
  total+=keys.size;
  found+=[...keys].filter(k=>sec.found&&sec.found[k]).length;
 });
 return {found,total,percent:total?Math.round((found/total)*100):0};
}
function randomProfessor(){
 return PROFESSORS[Math.floor(Math.random()*PROFESSORS.length)]||PROFESSORS[0];
}
function collectionQuoteHtml(text){
 const p=randomProfessor();
 return `<div class="collectionQuote"><img src="${p.sprite}" alt=""><span><b>${p.name.replace("Professor ","")}:</b> “${text}”</span></div>`;
}
function collectionEntryHtml(item,foundMap){
 const got=!!(foundMap&&foundMap[item.key]);
 const data=got?foundMap[item.key]:null;
 const sprite=(data&&data.sprite)||item.sprite||"";
 const meta=(data&&data.meta)||item.meta||"Undiscovered";
 return `<div class="collectionEntry ${got?"":"locked"}"><div class="collectionIcon">${sprite?`<img src="${sprite}" onerror="this.style.display='none'">`:(got?"✓":"?")}</div><div><div class="collectionName">${got?(data.name||item.name):"???"}</div><div class="collectionMeta">${got?meta:"Not discovered yet"}</div></div><div class="collectionPill">${got?"Seen":"Locked"}</div></div>`;
}

function syncCollectionFromHistory(){
 const list=getRunHistory?getRunHistory():[];
 if(!list||!list.length)return;
 list.forEach(r=>recordCollectionFromRun(r));
}

function renderCollectionPage(){
 const progress=document.getElementById("collectionProgress");
 const content=document.getElementById("collectionContent");
 if(!progress||!content)return;
 const t=collectionTotals();
 progress.innerHTML=`<div><div class="collectionPercent">${t.percent}%</div><div class="collectionMeta">${t.found} / ${t.total} entries discovered</div></div><div><div class="collectionBar"><span style="width:${t.percent}%"></span></div><div class="collectionMeta" style="margin-top:8px">Completion Tracker updates automatically when new catalog entries or discoveries are added.</div></div>`;
 content.innerHTML=collectionSections().map(sec=>{
  const keys=new Set(sec.catalog.map(x=>x.key));
  Object.keys(sec.found||{}).forEach(k=>keys.add(k));
  const catalog=[...keys].map(k=>sec.catalog.find(x=>x.key===k)||{key:k,name:(sec.found[k]&&sec.found[k].name)||k,meta:(sec.found[k]&&sec.found[k].meta)||"Discovered",sprite:(sec.found[k]&&sec.found[k].sprite)||""});
  const foundCount=catalog.filter(x=>sec.found&&sec.found[x.key]).length;
  return `<section class="collectionSection"><h3><span>${sec.emoji}</span>${sec.title}<span class="collectionPill">${foundCount}/${catalog.length}</span></h3>${collectionQuoteHtml(sec.quote)}<div class="collectionList">${catalog.length?catalog.map(x=>collectionEntryHtml(x,sec.found)).join(""):`<div class="collectionEmpty">No entries yet. Complete runs to discover this section.</div>`}</div></section>`;
 }).join("");
}
function openCollectionPage(){syncCollectionFromHistory();renderCollectionPage();const el=document.getElementById("collectionOverlay");if(el)el.style.display="block";}
function closeCollectionPage(){const el=document.getElementById("collectionOverlay");if(el)el.style.display="none";}
function resetCollectionLog(){
 if(!confirm("Reset Collection Log? Run History will remain untouched."))return;
 saveCollectionLog(emptyCollectionLog());
 renderCollectionPage();
}
function exportCollectionJson(){
 const blob=new Blob([JSON.stringify(getCollectionLog(),null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");a.href=url;a.download="pokemon-colosseum-collection-log.json";a.style.display="none";
 document.body.appendChild(a);a.click();
 setTimeout(()=>{URL.revokeObjectURL(url);a.remove()},500);
}

function historyImg(src,alt="",cls=""){
 if(!src)return `<div class="fallback f58">?</div>`;
 return `<img class="${cls}" src="${src}" alt="${alt}" onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'fallback f58',textContent:'?' }))">`;
}
function currentItemSnapshot(){
 if(!selectedItem)return {name:"No item",icon:"🎒",id:null};
 let icon=selectedItem.icon||"🎒";
 if(selectedItem.id==="elemental_plate"&&elementalPlateType)icon=plateSprite(elementalPlateType);
 return {name:itemDisplayName(),icon,id:selectedItem.id||null};
}
function buildRunHistoryEntry(){
 const res=leagueResult();
 const concept=teamConcept();
 const item=currentItemSnapshot();
 const types=getTypes();
 const trainerSrc=(trainer&&trainer.certificateRenderSprite)||(document.querySelector("#playerSpriteBox img")?.getAttribute("src"))||(trainer&&trainer.currentSpriteSrc)||"";
 return {
  id:currentRunHistoryId||`run_${Date.now()}_${Math.random().toString(16).slice(2)}`,
  date:new Date().toISOString(),
  trainer:{name:certificateTrainerName(),model:trainer?.modelName||trainer?.label||"",sprite:trainerSrc,type:trainerType||""},
  rank:{name:res.rank.name,note:res.rank.note||""},
  score:finalScore(),
  difficulty:difficultyMode,
  difficultyLabel:difficultyLabel(),
  baseScore:baseTotal(),
  typeBonus:types.length>=TYPE_BONUS_THRESHOLD?TYPE_BONUS_POINTS:0,
  itemBonus:itemBonusTotal(),
  concept:{name:concept.name,reason:concept.reason||"",bonus:concept.bonus||0},
  item,
  uniqueTypes:types,
  events:[...runEventLog,...questBreakdown().map(q=>({round:ROUNDS,kind:"Quest",text:`${q.name} completed: +${q.points}. ${q.reason}`,time:Date.now()}))],
  team:(team||[]).map((p,i)=>({
   slot:i+1,
   name:activePokemonName(p,i)||p.displayName||pretty(p.name||"Pokemon"),
   internalName:p.name||"",
   sprite:p.certificateRenderSprite||currentSprite(p,i)||p.sprite||"",
   types:activeTypes(p,i),
   bst:scoreBaseFor(p,i),
   score:pScore(p,i),
   shiny:!!p.shiny,
   shinySprite:p.shinySprite||"",
   mega:!!(selectedMegaIndex===i&&p.activeMega),
   megaLabel:(selectedMegaIndex===i&&p.activeMega)?(p.activeMega.name||"Mega Evolution"):"",
   primal:!!p.activePrimal,
   primalLabel:p.activePrimal?p.activePrimal.name:"",
   fusedWith:p.fusedWith||"",
   rainbowFeather:!!p.rainbowFeather,
   extraShinyBonus:p.extraShinyBonus||0,
   arceusPlate:p.name==="arceus"&&!!arceusPlateBonus(),
   eternalFloette:!!p.eternalFloette,
   eternalBonus:p.eternalBonus||0,
   lightBall:!!p.lightBall,
   special:!!p.special,
   specialId:p.specialId||"",
   specialTags:[...(p.specialTags||[])],
   specialBonus:p.specialBonus||0,
   purified:!!p.purified,
   purifiedBonus:p.purifiedBonus||0,
   glitchMod:p.glitchMod||0,
   gigantamax:!!p.activeGmax,
   origin:!!p.activeOrigin,
   unbound:!!p.activeUnbound
  }))
 };
}
function recordRunHistory(){
 if(!isDraftComplete())return;
 try{
  const entry=buildRunHistoryEntry();
  currentRunHistoryId=entry.id;
  let list=getRunHistory();
  const idx=list.findIndex(r=>r.id===entry.id);
  if(idx>=0)list[idx]=entry;
  else list.unshift(entry);
  saveRunHistory(list);
  recordCollectionFromRun(entry);
 }catch(e){console.warn("Could not record run history",e)}
}
function historyItemIcon(item){
 if(!item)return "🎒";
 const icon=item.icon||"🎒";
 if(/^https?:\/\//.test(icon)||/^assets\//.test(icon)||/^data:/.test(icon))return `<img src="${icon}" alt="${item.name||'item'}" style="width:20px;height:20px;object-fit:contain">`;
 return icon;
}
function formatHistoryDate(iso){
 try{
  const d=new Date(iso);
  return d.toLocaleString([], {year:"numeric",month:"short",day:"2-digit",hour:"2-digit",minute:"2-digit"});
 }catch(e){return "-"}
}

function historyQuestList(r){
 const qs=[...new Set((r.events||[]).filter(e=>e.kind==="Quest").map(e=>String(e.text||"").split(" completed:")[0]).filter(Boolean))];
 if(!qs.length)return `<div class="historySub">Quests: none discovered</div>`;
 return `<div class="historySub">Quests: ${qs.join(", ")}</div>`;
}
function discoveredQuestNames(){
 const names=new Set();
 getRunHistory().forEach(r=>(r.events||[]).forEach(e=>{
  if(e.kind==="Quest"){
   const name=String(e.text||"").split(" completed:")[0].trim();
   if(name)names.add(name);
  }
 }));
 (runEventLog||[]).forEach(e=>{
  if(e.kind==="Quest"){
   const name=String(e.text||"").split(" completed:")[0].trim();
   if(name)names.add(name);
  }
 });
 return [...names];
}
function discoveredQuestCodex(){
 const names=discoveredQuestNames();
 const found=QUEST_CATALOG.filter(q=>names.includes(q.name));
 const hidden=QUEST_CATALOG.length-found.length;
 const lines=found.map(q=>`<li><b>${q.name}</b> <span class="historyPill">${q.rarity}</span>: ${q.desc}</li>`);
 for(let i=0;i<hidden;i++)lines.push(`<li><b>???</b> <span class="historyPill">Undiscovered</span>: Complete this hidden quest to reveal it.</li>`);
 return `<li><b>Hidden Quests Discovered:</b> ${found.length} / ${QUEST_CATALOG.length}</li>`+lines.join("");
}

function renderHistoryPage(){
 const list=getRunHistory();
 const best=list.reduce((m,r)=>Math.max(m,Number(r.score)||0),0);
 const bestRun=list.find(r=>Number(r.score)===best);
 const set=(id,v)=>{const el=document.getElementById(id);if(el)el.textContent=v};
 set("historyRuns",list.length);
 set("historyBestScore",best||0);
 set("historyBestRank",bestRun?bestRun.rank.name:"-");
 set("historyRecent",list[0]?formatHistoryDate(list[0].date).split(",")[0]:"-");
 const box=document.getElementById("historyList");
 if(!box)return;
 if(!list.length){
  box.innerHTML=`<div class="historyEmpty">No completed runs yet. Go draft chaos into shape first.</div>`;
  return;
 }
 box.innerHTML=list.map(r=>`
  <article class="historyRun">
   <div class="historyRunTop">
    <div class="historyTrainerSprite">${historyImg(r.trainer?.sprite,r.trainer?.name||"trainer")}</div>
    <div>
     <div class="historyTitle">${r.trainer?.name||"Trainer"} · ${r.rank?.name||"Rank"}</div>
     <div class="historySub">${formatHistoryDate(r.date)} · ${r.concept?.name||"No concept"}</div>
     <span class="historyPill">${historyItemIcon(r.item)} ${r.item?.name||"No item"}</span><span class="historyPill">${r.difficulty?pretty(r.difficulty)+" Mode":"Normal Mode"}</span>
     <span class="historyPill">${(r.uniqueTypes||[]).length} unique types</span>
    </div>
    <div>
     <div class="historySub">Team Concept</div>
     <div class="historyTitle" style="font-size:18px">${r.concept?.name||"-"}</div>
     <div class="historySub">${r.concept?.bonus?`+${r.concept.bonus} concept bonus`:"No concept bonus"}</div>
     ${historyQuestList(r)}
    </div>
    <div>
     <div class="historySub">Final Score</div>
     <div class="historyScore">${r.score||0}</div>
    </div>
   </div>
   ${renderHistoryProfessorQuote(r)}
   <div class="historyTeam">
    ${(r.team||[]).map(p=>`
     <div class="historyMon">
      ${p.sprite?`<img src="${p.sprite}" alt="${p.name}" onerror="this.style.display='none'">`:""}
      <div class="historyMonName">${p.slot}. ${p.name}</div>
      <div class="historySub" style="font-size:10px;margin-top:2px">${(p.types||[]).map(pretty).join(" / ")}</div>
      <div class="historyMonTags">${p.eternalFloette?"Eternal Flower":(p.primal?p.primalLabel:(p.rainbowFeather?"Rainbow Feather":(p.fusedWith?"Fusion":(p.shiny&&p.mega?"✨ Shiny Mega":p.shiny?"✨ Shiny":p.mega?`Mega`:p.lightBall?"Light Ball":""))))}</div>
     </div>`).join("")}
   </div>
  </article>
 `).join("");
}
function openHistoryPage(){
 const b=document.getElementById("historyProfessorBanner"); if(b)b.innerHTML=professorIconRow(["Oak","Birch","Juniper","Kukui","Sonia","Laventon"]);
 renderHistoryPage();
 const el=document.getElementById("historyOverlay");
 if(el)el.style.display="block";
}
function closeHistoryPage(){
 const el=document.getElementById("historyOverlay");
 if(el)el.style.display="none";
}
function clearHistory(){
 if(!confirm("Clear all saved run history?"))return;
 saveRunHistory([]);
 renderHistoryPage();
}
function exportHistoryJson(){
 const blob=new Blob([JSON.stringify(getRunHistory(),null,2)],{type:"application/json"});
 const url=URL.createObjectURL(blob);
 const a=document.createElement("a");
 a.href=url;a.download="pokemon-colosseum-history.json";a.style.display="none";
 document.body.appendChild(a);a.click();
 setTimeout(()=>{URL.revokeObjectURL(url);a.remove()},500);
}

function restartGame(){
 usedNames=new Set();
 team=[];
 currentOptions=[];
 league=createLeague();
 gruntRound=rand(1,6);
 gruntResolved=false;
 pendingGrunt=null;
 eventLog=null;
 runEventLog=[];
 postDraftPipelineRunning=false;regigigasQuestOffered=false;regigigasGuaranteedNext=false;
 selectedMegaIndex=null;
 megaPromptShown=false;
 celebrationShown=false;
 scoreBreakdownShown=false;
 currentRunHistoryId=null;
 runEventLog=[];postDraftPipelineRunning=false;regigigasQuestOffered=false;regigigasGuaranteedNext=false;
 pokedexUsed=false;pokedexRevealRound=null;rotomPokedexQuestCompleted=false;
 certificateAssetPreparationPromise=null;
 initItemChoices();
 document.getElementById("megaModal").style.display="none";
 document.getElementById("gruntModal").style.display="none";
 document.getElementById("itemModal").style.display="none";
 celebrationShown=false;
 warn("");
 closeCelebration();
 render();maybeShowIntroOnNewRun();
}
async function boot(){
 applyUiTheme();
 if(difficultyMode==="master"&&!isMasterUnlocked())difficultyMode="normal";
 if(!league)league=createLeague();
 initItemChoices();
 refreshHighScorePanels(getHighScore());
 render();
 try{
  poolNames=await loadPool();
 }catch(e){
  poolNames=FALLBACK_POOL.map(p=>p.name);
  warn("Could not connect to PokeAPI, so this is running with a smaller demo pool.");
 }
 render();
 maybeShowIntroOnNewRun();
}
window.addEventListener('error',e=>{
 console.error(e.error||e.message);
 const w=document.getElementById("warning");
 if(w){w.textContent="Game error: "+(e.message||"unknown error")+". Please send a screenshot.";w.style.display="block";}
});


/* ===== Canvas certificate renderer v2 ===== */
function certificateTrainerName(){
 return displayTrainerName();
}
function certificateTrainerSpriteSrc(){
 const live=document.querySelector("#playerSpriteBox img");
 if(live&&live.getAttribute("src")) return live.getAttribute("src");
 if(trainer&&trainer.sprite){
  const cands=trainerSpriteCandidates(trainer.sprite);
  if(cands&&cands.length) return cands[0];
 }
 return "";
}
function buildCertificateData(){
 const res=leagueResult();
 const concept=teamConcept();
 return {
  trainerName: certificateTrainerName(),
  trainerSprite: (trainer&&trainer.certificateRenderSprite) || certificateTrainerSpriteSrc(),
  rankName: res.rank.name,
  rankNote: res.rank.note,
  score: finalScore(),
  difficultyLabel: difficultyLabel(),
  conceptName: concept.name,
  conceptReason: concept.reason || "",
  conceptBonus: concept.bonus || 0,
  team: (team||[]).map((p,i)=>({
   slot:i+1,
   name:p.displayName||p.name,
   bst:(selectedMegaIndex===i&&p.activeMega&&p.activeMega.scoreBst)?p.activeMega.scoreBst:p.bst,
   sprite: p.certificateRenderSprite || currentSprite(p,i)||"",
   types: activeTypes(p,i)||[],
   shiny: !!p.shiny,
   mega: !!(selectedMegaIndex===i&&p.activeMega),
   megaLabel: (selectedMegaIndex===i&&p.activeMega)?(p.activeMega.name||"Mega Evolution"):"",
   primal:!!p.activePrimal,
   primalLabel:p.activePrimal?p.activePrimal.name:"",
   fusedWith:p.fusedWith||"",
   extraShinyBonus:p.extraShinyBonus||0,
   arceusPlate:p.name==="arceus"&&!!arceusPlateBonus(),
   eternalFloette:!!p.eternalFloette,
   eternalBonus:p.eternalBonus||0,
   lightBall: !!p.lightBall,
   plateBonus: !!(selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType)),
  }))
 };
}
async function loadImageForCertificate(src){
 if(!src) return null;
 const s=String(src).trim();
 if(!s) return null;
 const loadDirect=(url)=>new Promise(resolve=>{
  const img=new Image();
  img.onload=()=>resolve(img);
  img.onerror=()=>resolve(null);
  if(/^https?:\/\//i.test(url)) img.crossOrigin="anonymous";
  img.src=url;
 });
 // Local/data/blob/file paths: load directly so local-file usage works.
 if(!/^https?:\/\//i.test(s)) return await loadDirect(s);
 // Remote paths: try safe fetch->data URL first to avoid tainting.
 const fetched=await fetchImageAsDataUrl(s);
 if(fetched){
  const img=await loadDirect(fetched);
  if(img) return img;
 }
 if(window.CERTIFICATE_EXPORT_NO_REMOTE) return null;
 return await loadDirect(s);
}
function measureWrappedLines(ctx,text,maxWidth,maxLines=10){
 const words=String(text||"").split(/\s+/).filter(Boolean);
 if(!words.length) return [""];
 const lines=[];
 let line="";
 for(const word of words){
  const test=line?line+" "+word:word;
  if(ctx.measureText(test).width<=maxWidth||!line){ line=test; }
  else { lines.push(line); line=word; }
 }
 if(line) lines.push(line);
 if(lines.length>maxLines){
  const out=lines.slice(0,maxLines);
  let last=out[out.length-1];
  while(last.length>1 && ctx.measureText(last+"…").width>maxWidth) last=last.slice(0,-1);
  out[out.length-1]=last+"…";
  return out;
 }
 return lines;
}
function drawLines(ctx,lines,x,y,lineHeight,align="left"){
 const old=ctx.textAlign;
 ctx.textAlign=align;
 lines.forEach((ln,idx)=>ctx.fillText(ln,x,y+idx*lineHeight));
 ctx.textAlign=old;
}
function fitTextWidth(ctx,text,maxWidth,startSize,minSize=16,weight="900",font="Arial"){
 let size=startSize;
 while(size>minSize){
  ctx.font=`${weight} ${size}px ${font}`;
  if(ctx.measureText(text).width<=maxWidth) return size;
  size-=1;
 }
 return minSize;
}
function drawImageContain(ctx,img,x,y,w,h){
 if(!img) return;
 const iw=img.naturalWidth||img.width||1, ih=img.naturalHeight||img.height||1;
 const ratio=Math.min(w/iw,h/ih);
 const dw=iw*ratio, dh=ih*ratio;
 const dx=x+(w-dw)/2, dy=y+(h-dh)/2;
 ctx.drawImage(img,dx,dy,dw,dh);
}
function drawCertBadge(ctx,text,x,y,bg,border,color){
 ctx.save();
 ctx.font="800 18px Arial";
 const padX=14, h=30;
 const w=Math.max(52,ctx.measureText(text).width+padX*2);
 drawRoundedRect(ctx,x,y,w,h,15,bg,border,2);
 ctx.fillStyle=color;
 ctx.textAlign="center";
 ctx.textBaseline="middle";
 ctx.fillText(text,x+w/2,y+h/2+1);
 ctx.restore();
 return w;
}
function drawTypePillsCanvas(ctx,types,x,y){
 let cx=x;
 (types||[]).forEach(t=>{
  ctx.save();
  ctx.font="800 18px Arial";
  const w=Math.max(54,ctx.measureText(t).width+24);
  drawRoundedRect(ctx,cx,y,w,30,15,"#e2e8f0","#cbd5e1",2);
  ctx.fillStyle="#334155";
  ctx.textAlign="center";
  ctx.textBaseline="middle";
  ctx.fillText(t,cx+w/2,y+16);
  ctx.restore();
  cx+=w+10;
 });
 return cx;
}
function drawCertificatePlaceholderSprite(ctx,x,y,w,h,label){
 drawRoundedRect(ctx,x,y,w,h,18,"#f8fafc","#dbe4f0",2);
 ctx.fillStyle="#94a3b8";
 ctx.font="800 16px Arial";
 ctx.textAlign="center";
 ctx.fillText("No image",x+w/2,y+h/2-6);
 if(label){
  const short=String(label).slice(0,10);
  ctx.fillText(short,x+w/2,y+h/2+18);
 }
 ctx.textAlign="left";
}
function drawCertificateTrophy(ctx,x,y,size){
 ctx.save();
 ctx.translate(x,y);
 ctx.strokeStyle="#a16207";
 ctx.fillStyle="#fbbf24";
 ctx.lineWidth=5;
 drawRoundedRect(ctx,0,24,size*0.78,size*0.34,12,"#fcd34d","#a16207",4);
 ctx.beginPath(); ctx.moveTo(size*0.18,24); ctx.lineTo(size*0.30,0); ctx.lineTo(size*0.48,0); ctx.lineTo(size*0.60,24); ctx.closePath(); ctx.fill(); ctx.stroke();
 ctx.beginPath(); ctx.arc(size*0.10,38,16,-Math.PI/2,Math.PI/2); ctx.stroke();
 ctx.beginPath(); ctx.arc(size*0.68,38,16,Math.PI/2,-Math.PI/2); ctx.stroke();
 ctx.beginPath(); ctx.arc(size*0.39,23,12,0,Math.PI*2); ctx.fillStyle="#fff7ed"; ctx.fill(); ctx.stroke();
 ctx.beginPath(); ctx.arc(size*0.39,23,6,0,Math.PI*2); ctx.fillStyle="#fbbf24"; ctx.fill(); ctx.stroke();
 ctx.fillStyle="#f59e0b"; ctx.fillRect(size*0.30,58,size*0.18,18);
 drawRoundedRect(ctx,size*0.18,76,size*0.42,14,7,"#f59e0b","#a16207",4);
 ctx.restore();
}
async function preloadCertificateAssets(data){
 const assets={trainer:null, team:[], footerBall:null};
 assets.trainer=await loadImageForCertificate(data.trainerSprite);
 for(const mon of data.team){
  assets.team.push(await loadImageForCertificate(mon.sprite));
 }
 return assets;
}
function drawCertificateBackground(ctx){
 const bg=ctx.createLinearGradient(0,0,1600,2200);
 bg.addColorStop(0,"#fff9eb");
 bg.addColorStop(0.58,"#fef3c7");
 bg.addColorStop(1,"#fde68a");
 ctx.fillStyle=bg; ctx.fillRect(0,0,1600,2200);
 ctx.strokeStyle="#92400e"; ctx.lineWidth=28; ctx.strokeRect(38,38,1524,2124);
 ctx.strokeStyle="#facc15"; ctx.lineWidth=8; ctx.strokeRect(82,82,1436,2036);
 ctx.strokeStyle="rgba(15,23,42,.12)"; ctx.lineWidth=3; ctx.strokeRect(102,102,1396,1996);
 const flourish=(x,y,sx,sy)=>{ctx.save();ctx.translate(x,y);ctx.scale(sx,sy);ctx.strokeStyle="rgba(146,64,14,.35)";ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,0);ctx.quadraticCurveTo(28,-8,56,18);ctx.quadraticCurveTo(76,34,98,26);ctx.moveTo(8,24);ctx.quadraticCurveTo(24,8,46,10);ctx.quadraticCurveTo(62,12,72,30);ctx.stroke();ctx.restore();};
 flourish(130,130,1,1); flourish(1470,130,-1,1); flourish(130,2075,1,-1); flourish(1470,2075,-1,-1);
}
function drawCertificateHeader(ctx,data){
 ctx.textAlign="center";
 ctx.fillStyle="#0f172a";
 ctx.font="900 58px Arial";
 ctx.fillText("POKÉMON COLOSSEUM CERTIFICATE",800,175);
 ctx.font="900 88px Georgia";
 ctx.fillText("Congratulations!",800,300);
 ctx.fillStyle="#475569";
 ctx.font="900 28px Arial";
 const line1='Congrats you are a';
 ctx.fillText(line1,800,385);
 const rankLine=`${data.rankName} Trainer`;
 const rankSize=fitTextWidth(ctx,rankLine,1100,58,32,"900","Arial");
 ctx.fillStyle="#0f172a";
 ctx.font=`900 ${rankSize}px Arial`;
 ctx.fillText(rankLine,800,438);
 ctx.fillStyle="#475569";
 ctx.font="900 28px Arial";
 ctx.fillText(`You reached a score of ${data.score}. · ${data.difficultyLabel}`,800,490);
 ctx.strokeStyle="rgba(146,64,14,.18)"; ctx.lineWidth=3;
 ctx.beginPath(); ctx.moveTo(150,530); ctx.lineTo(1450,530); ctx.stroke();
}
function drawCertificateInfoPanels(ctx,data,assets){
 const y=570, h=250;
 drawRoundedRect(ctx,150,y,580,h,28,"rgba(255,255,255,.93)","#d6d3d1",6);
 drawRoundedRect(ctx,870,y,580,h,28,"rgba(255,255,255,.93)","#d6d3d1",6);
 // trainer panel
 ctx.fillStyle="#64748b"; ctx.textAlign="left"; ctx.font="900 24px Arial";
 ctx.fillText("TRAINER",185,y+44);
 const spriteX=185, spriteY=y+72, spriteSize=132;
 if(assets.trainer){
  drawRoundedRect(ctx,spriteX,spriteY,spriteSize,spriteSize,20,"#f8fafc","#e2e8f0",2);
  drawImageContain(ctx,assets.trainer,spriteX+10,spriteY+10,spriteSize-20,spriteSize-20);
 }else drawCertificatePlaceholderSprite(ctx,spriteX,spriteY,spriteSize,spriteSize,data.trainerName);
 const textX=340;
 let trainerNameSize=fitTextWidth(ctx,data.trainerName,340,54,28,"900","Arial");
 ctx.fillStyle="#0f172a"; ctx.font=`900 ${trainerNameSize}px Arial`; ctx.fillText(data.trainerName,textX,y+132);
 ctx.fillStyle="#64748b"; ctx.font="900 22px Arial"; ctx.fillText("SCORE",textX,y+188);
 ctx.fillStyle="#0f172a"; ctx.font="900 52px Arial"; ctx.fillText(String(data.score),textX,y+226);
 ctx.fillStyle="#64748b"; ctx.font="900 20px Arial"; ctx.fillText(data.difficultyLabel||"Normal Mode",textX,y+252);
 // rank panel
 ctx.fillStyle="#64748b"; ctx.font="900 24px Arial"; ctx.fillText("RANK",905,y+44);
 let rankSize=fitTextWidth(ctx,data.rankName,500,56,28,"900","Arial");
 ctx.fillStyle="#0f172a"; ctx.font=`900 ${rankSize}px Arial`; ctx.fillText(data.rankName,905,y+132);
 ctx.fillStyle="#64748b"; ctx.font="900 22px Arial"; ctx.fillText("TEAM CONCEPT",905,y+188);
 let conceptSize=fitTextWidth(ctx,data.conceptName,500,32,20,"900","Arial");
 ctx.fillStyle="#0f172a"; ctx.font=`900 ${conceptSize}px Arial`; ctx.fillText(data.conceptName,905,y+225);
 if(data.conceptReason){
  ctx.fillStyle="#475569"; ctx.font="800 19px Arial";
  const reasonLines=measureWrappedLines(ctx,`${data.conceptReason}${data.conceptBonus?` (+${data.conceptBonus})`:""}`,500,2);
  drawLines(ctx,reasonLines,905,y+253,24,"left");
 }
}
function drawCertificateTeamTitle(ctx){
 ctx.strokeStyle="rgba(146,64,14,.18)"; ctx.lineWidth=3;
 ctx.beginPath(); ctx.moveTo(150,880); ctx.lineTo(1450,880); ctx.stroke();
 ctx.fillStyle="#0f172a"; ctx.font="900 56px Georgia"; ctx.textAlign="left";
 ctx.fillText("Certified Team",150,940);
}
function drawCertificateTeamCard(ctx,mon,img,x,y,w,h){
 drawRoundedRect(ctx,x,y,w,h,28,"rgba(255,255,255,.95)","#dbe4f0",6);
 const spriteX=x+24, spriteY=y+28, spriteSize=118;
 if(img){
  drawRoundedRect(ctx,spriteX,spriteY,spriteSize,spriteSize,18,"#f8fafc","#dbe4f0",2);
  drawImageContain(ctx,img,spriteX+8,spriteY+8,spriteSize-16,spriteSize-16);
 }else drawCertificatePlaceholderSprite(ctx,spriteX,spriteY,spriteSize,spriteSize,mon.name);
 const textX=x+170;
 ctx.textAlign="left";
 ctx.fillStyle="#0f172a";
 const nameSize=fitTextWidth(ctx,`${mon.slot}. ${mon.name}`,w-200,28,18,"900","Arial");
 ctx.font=`900 ${nameSize}px Arial`;
 const nameLines=measureWrappedLines(ctx,`${mon.slot}. ${mon.name}`,w-200,2);
 drawLines(ctx,nameLines,textX,y+62,34,"left");
 let currentY=y+62+(nameLines.length-1)*34+18;
 ctx.fillStyle="#475569"; ctx.font="800 22px Arial"; ctx.fillText(`${mon.bst} BST`,textX,currentY); currentY+=24;
 drawTypePillsCanvas(ctx,mon.types,textX,currentY);
 currentY+=42;
 let badgeX=textX;
 const badges=[];
 if(mon.shiny&&mon.mega) badges.push({text:"Shiny Mega",bg:"#faf5ff",border:"#a855f7",color:"#7e22ce"});
 else {
  if(mon.shiny) badges.push({text:"Shiny",bg:"#fff7ed",border:"#f59e0b",color:"#b45309"});
  if(mon.mega) badges.push({text:mon.megaLabel||"Mega Evolution",bg:"#faf5ff",border:"#a855f7",color:"#7e22ce"});
 }
 if(mon.eternalFloette) badges.push({text:"Eternal Flower +300",bg:"#fdf2f8",border:"#ec4899",color:"#9d174d"});
 if(mon.extraShinyBonus) badges.push({text:"Double Shiny",bg:"#fef3c7",border:"#f59e0b",color:"#92400e"});
 if(mon.arceusPlate) badges.push({text:"Plate Power +300",bg:"#eff6ff",border:"#3b82f6",color:"#1d4ed8"});
 if(mon.primal) badges.push({text:mon.primalLabel||"Primal",bg:"#fff7ed",border:"#f97316",color:"#9a3412"});
 if(mon.fusedWith) badges.push({text:"Fusion",bg:"#ecfeff",border:"#06b6d4",color:"#0e7490"});
 if(mon.rainbowFeather) badges.push({text:"Rainbow Feather",bg:"#fef9c3",border:"#f59e0b",color:"#92400e"});
 if(mon.name==="Rotom Pokédex") badges.push({text:"Pokédex Quest",bg:"#eff6ff",border:"#3b82f6",color:"#1d4ed8"});
 if(mon.lightBall) badges.push({text:"Light Ball",bg:"#eff6ff",border:"#60a5fa",color:"#1d4ed8"});
 if(mon.plateBonus) badges.push({text:"+50 Plate",bg:"#ecfdf5",border:"#34d399",color:"#047857"});
 badges.forEach(b=>{ const bw=drawCertBadge(ctx,b.text,badgeX,currentY,b.bg,b.border,b.color); badgeX+=bw+10;});
}
function drawCertificateTeamGrid(ctx,data,assets){
 const left=150, right=810, top=980, gapY=34, cardW=640, cardH=235;
 data.team.forEach((mon,idx)=>{
  const col=idx%2, row=Math.floor(idx/2);
  const x=col===0?left:right;
  const y=top + row*(cardH+gapY);
  drawCertificateTeamCard(ctx,mon,assets.team[idx],x,y,cardW,cardH);
 });
}
function drawCertificateFooter(ctx){
 drawRoundedRect(ctx,150,1910,1300,140,26,"rgba(255,255,255,.92)","#d6d3d1",6);
 drawCertificateTrophy(ctx,205,1948,84);
 ctx.fillStyle="#0f172a"; ctx.textAlign="center";
 ctx.font="900 34px Georgia"; ctx.fillText("Official Colosseum Seal",800,1985);
 ctx.fillStyle="#475569"; ctx.font="900 18px Arial"; ctx.fillText("Draft blind. Build smart. Rule the League.",800,2035);
 drawPokeball(ctx,1360,1985,42);
}
async function createCertificateBlob(){
 await prepareCertificateAssetsForCurrentRun();
 const data=buildCertificateData();
 const assets=await preloadCertificateAssets(data);
 const canvas=document.createElement("canvas");
 canvas.width=1600; canvas.height=2200;
 const ctx=canvas.getContext("2d");
 drawCertificateBackground(ctx);
 drawCertificateHeader(ctx,data);
 drawCertificateInfoPanels(ctx,data,assets);
 drawCertificateTeamTitle(ctx);
 drawCertificateTeamGrid(ctx,data,assets);
 drawCertificateFooter(ctx);
 return await new Promise((resolve,reject)=>{
  canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("Could not render certificate blob.")),"image/png");
 });
}
async function safeCreateCertificateBlob(){
 try{ return await createCertificateBlob(); }
 catch(e){ console.warn("Primary certificate renderer failed, using minimal fallback.",e); return await createMinimalCertificateBlob(); }
}
/* ===== End canvas certificate renderer v2 ===== */


/* ===== Canvas certificate renderer v3: preview canvas + export blob ===== */
async function loadImageForCertificate(src){
 if(!src) return null;
 const s=String(src).trim();
 if(!s) return null;

 const directLoad=(url, useCors=false)=>new Promise(resolve=>{
  const img=new Image();
  img.onload=()=>resolve(img);
  img.onerror=()=>resolve(null);
  if(useCors && /^https?:\/\//i.test(url)) img.crossOrigin="anonymous";
  img.src=url;
 });

 // Preview mode: do NOT export the canvas, so remote sprites may be drawn directly.
 // This is the important fix for visible certificate preview images.
 if(window.CERTIFICATE_PREVIEW_MODE){
  const direct=await directLoad(s,false);
  if(direct)return direct;
  const fetched=await fetchImageAsDataUrl(s);
  return fetched?await directLoad(fetched,false):null;
 }

 // Export mode: use local/data URLs directly. For remote, try fetch->dataURL first.
 if(!/^https?:\/\//i.test(s)) return await directLoad(s,false);

 const fetched=await fetchImageAsDataUrl(s);
 if(fetched){
  const img=await directLoad(fetched,false);
  if(img)return img;
 }

 // Last attempt: CORS image. If it taints, toBlob will fail and safe fallback handles it.
 if(window.CERTIFICATE_EXPORT_NO_REMOTE)return null;
 return await directLoad(s,true);
}

async function createCertificateCanvas(){
 await prepareCertificateAssetsForCurrentRun();
 const data=buildCertificateData();
 const assets=await preloadCertificateAssets(data);
 const canvas=document.createElement("canvas");
 canvas.width=1600;
 canvas.height=2200;
 const ctx=canvas.getContext("2d");

 drawCertificateBackground(ctx);
 drawCertificateHeader(ctx,data);
 drawCertificateInfoPanels(ctx,data,assets);
 drawCertificateTeamTitle(ctx);
 drawCertificateTeamGrid(ctx,data,assets);
 drawCertificateFooter(ctx);
 return canvas;
}

async function createCertificatePreviewCanvas(){
 window.CERTIFICATE_PREVIEW_MODE=true;
 try{
  const canvas=await createCertificateCanvas();
  canvas.className="certificatePreviewCanvas";
  canvas.style.width="auto";
  canvas.style.maxWidth="100%";
  canvas.style.maxHeight="calc(100vh - 230px)";
  canvas.style.height="auto";
  canvas.style.display="block";
  canvas.style.margin="0 auto";
  canvas.style.borderRadius="18px";
  canvas.style.boxShadow="0 20px 60px rgba(15,23,42,.28)";
  return canvas;
 }finally{
  window.CERTIFICATE_PREVIEW_MODE=false;
 }
}

async function createCertificateBlob(){
 window.CERTIFICATE_PREVIEW_MODE=false;
 const canvas=await createCertificateCanvas();
 return await new Promise((resolve,reject)=>{
  try{
   canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("Could not render certificate blob.")),"image/png");
  }catch(e){reject(e)}
 });
}

async function safeCreateCertificateBlob(){
 window.CERTIFICATE_EXPORT_NO_REMOTE=false;
 try{
  const blob=await createCertificateBlob();
  if(blob instanceof Blob && blob.size>0)return blob;
 }catch(e){
  console.warn("Certificate export failed with full image set, retrying without remote images.",e);
 }
 window.CERTIFICATE_EXPORT_NO_REMOTE=true;
 try{
  const blob=await createCertificateBlob();
  if(blob instanceof Blob && blob.size>0)return blob;
 }finally{
  window.CERTIFICATE_EXPORT_NO_REMOTE=false;
 }
 return await createMinimalCertificateBlob();
}
/* ===== End canvas certificate renderer v3 ===== */





/* ===== Economy Patch v13.3.0: Coin Pouches ===== */
const COIN_POUCH_KEY="pokemon_colosseum_coin_pouches_v1";
const COIN_AWARDED_KEY="pokemon_colosseum_coin_awarded_runs_v1";
function coinModeKey(){return difficultyMode==="master"?"master":difficultyMode==="easy"?"easy":"normal"}
function getCoinPouches(){
 try{
  const raw=JSON.parse(localStorage.getItem(COIN_POUCH_KEY)||"null")||{};
  return {easy:Number(raw.easy)||0,normal:Number(raw.normal)||0,master:Number(raw.master)||0};
 }catch(e){return {easy:0,normal:0,master:0}}
}
function saveCoinPouches(p){try{localStorage.setItem(COIN_POUCH_KEY,JSON.stringify({easy:Math.max(0,Math.floor(p.easy||0)),normal:Math.max(0,Math.floor(p.normal||0)),master:Math.max(0,Math.floor(p.master||0))}))}catch(e){}}
function getAwardedCoinRuns(){try{return JSON.parse(localStorage.getItem(COIN_AWARDED_KEY)||"[]")||[]}catch(e){return []}}
function saveAwardedCoinRuns(list){try{localStorage.setItem(COIN_AWARDED_KEY,JSON.stringify([...new Set(list)].slice(-300)))}catch(e){}}
function awardCoinsForRun(entry){
 if(!entry||!entry.id)return 0;
 const done=getAwardedCoinRuns();
 if(done.includes(entry.id))return 0;
 const mode=(entry.difficulty||coinModeKey()).replace(" Mode","").toLowerCase();
 const key=mode==="master"?"master":mode==="easy"?"easy":"normal";
 const earned=Math.floor((Number(entry.score)||0)*0.10);
 if(earned>0){
  const pouch=getCoinPouches();
  pouch[key]=(pouch[key]||0)+earned;
  saveCoinPouches(pouch);
  done.push(entry.id);
  saveAwardedCoinRuns(done);
  addRunEvent("Coins",`Earned ${earned} ${key} coins from final score.`,ROUNDS);
  warn(`Coin Case: +${earned} ${key} coins earned.`);
 }
 renderCoinCase();
 return earned;
}
function coinPouchLabel(key){return key==="easy"?"Easy":key==="master"?"Master":"Normal"}
function renderCoinCase(){
 const el=document.getElementById("coinCaseBox");
 if(!el)return;
 const p=getCoinPouches();
 const key=coinModeKey();
 el.innerHTML=`<div class="label">Coin Case</div><div class="coinRow"><span class="coinPill active">🪙 ${coinPouchLabel(key)}: ${p[key]||0}</span><span class="coinPill">Easy ${p.easy||0}</span><span class="coinPill">Normal ${p.normal||0}</span><span class="coinPill">Master ${p.master||0}</span></div>`;
}
function ensureEconomyUi(){
 if(!document.getElementById("coinCaseBox")){
  const target=document.getElementById("warning");
  if(target)target.insertAdjacentHTML("beforebegin",`<div id="coinCaseBox" class="coinCaseBox"></div>`);
 }
 renderCoinCase();
}
const __recordRunHistory_coin_base=recordRunHistory;
recordRunHistory=function(){
 __recordRunHistory_coin_base();
 if(currentRunHistoryId){
  const entry=(getRunHistory()||[]).find(r=>r.id===currentRunHistoryId);
  if(entry)awardCoinsForRun(entry);
 }
};
const __render_coin_base=render;
render=function(){__render_coin_base();renderCoinCase();};
const __boot_coin_base=boot;
boot=async function(){await __boot_coin_base();ensureEconomyUi();renderCoinCase();};


/* ===== PokéMart + X Items Patch v13.3.1 ===== */
const BACKPACK_KEY="pokemon_colosseum_backpack_v1";
let pokeMartVisitedThisRound=false;
let currentShopRoundKey="";
const POKEMART_ITEMS=[
 {id:"x_attack",name:"X Attack",icon:"⚔️",price:220,desc:"One Pokémon below 500 BST gains +100. Choose carefully during the draft."},
 {id:"x_sp_atk",name:"X Sp. Atk",icon:"🔮",price:220,desc:"Psychic, Ghost, Fairy or Electric Pokémon gain +75 each."},
 {id:"x_defense",name:"X Defense",icon:"🛡️",price:220,desc:"Steel, Rock or Ground Pokémon gain +75 each."},
 {id:"x_speed",name:"X Speed",icon:"💨",price:220,desc:"Flying or Electric Pokémon gain +75 each."},
 {id:"x_accuracy",name:"X Accuracy",icon:"🎯",price:180,desc:"Reroll all current draft options once."},
 {id:"dire_hit",name:"Dire Hit",icon:"💥",price:250,desc:"One selected Pokémon below 500 BST gains +100."},
 {id:"guard_spec",name:"Guard Spec.",icon:"🧿",price:260,desc:"Protects the first Pokémon that would be stolen by a Grunt."},
 {id:"x_all",name:"X All",icon:"✨",price:500,desc:"All six team members gain +25 once the team is complete."}
];
function getBackpack(){try{return JSON.parse(localStorage.getItem(BACKPACK_KEY)||"[]")||[]}catch(e){return []}}
function saveBackpack(items){try{localStorage.setItem(BACKPACK_KEY,JSON.stringify((items||[]).slice(0,2)))}catch(e){}}
function backpackItemDef(id){return POKEMART_ITEMS.find(x=>x.id===id)}
function backpackLabel(id){const d=backpackItemDef(id);return d?`${d.icon} ${d.name}`:id}
function spendCoins(amount){
 const key=coinModeKey(), p=getCoinPouches();
 if((p[key]||0)<amount)return false;
 p[key]-=amount;saveCoinPouches(p);renderCoinCase();return true;
}
function addBackpackItem(id){
 let bag=getBackpack();
 if(bag.length>=2)return false;
 bag.push(id);saveBackpack(bag);renderBackpack();return true;
}
function trashBackpackItem(index){
 let bag=getBackpack();bag.splice(index,1);saveBackpack(bag);renderBackpack();renderPokeMart();
}
function consumeBackpackItem(id){
 let bag=getBackpack();const idx=bag.indexOf(id);
 if(idx>=0){bag.splice(idx,1);saveBackpack(bag);renderBackpack();return true}
 return false;
}
function renderBackpack(){
 const el=document.getElementById("backpackBox");
 if(!el)return;
 const bag=getBackpack();
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div><div class="backpackItems">${bag.length?bag.map((id,i)=>`<span class="backpackItem">${backpackLabel(id)} <button onclick="trashBackpackItem(${i})" title="Trash item">×</button></span>`).join(""):`<span class="tscore">Empty. Buy PokéMart items to manipulate future picks.</span>`}</div>`;
}
function ensureMartUi(){
 if(!document.getElementById("pokeMartOverlay")){
  document.body.insertAdjacentHTML("beforeend",`
<div class="martOverlay" id="pokeMartOverlay">
  <div class="martPanel">
    <div class="martHead">
      <div><h2>PokéMart</h2><p>Spend this difficulty’s coins on one-time Backpack items. You can visit the Mart once per pick phase.</p></div>
      <div class="martActions"><button class="btn btn-dark" onclick="closePokeMart()">Close Shop</button></div>
    </div>
    <div id="martCoinInfo" class="coinCaseBox"></div>
    <div id="martBackpackInfo" class="backpackBox"></div>
    <div id="martLockInfo"></div>
    <div id="martItems" class="martGrid"></div>
  </div>
</div>
`);
 }
 if(!document.getElementById("backpackBox")){
  const side=document.querySelector(".side.card");
  if(side)side.insertAdjacentHTML("beforeend",`<div id="backpackBox" class="backpackBox"></div><button id="pokeMartBtn" class="btn btn-dark" style="width:100%;margin-top:10px" onclick="openPokeMart()">🛒 Visit PokéMart</button><div id="pokeMartRoundNote" class="tscore" style="margin-top:8px"></div>`);
 }
 renderBackpack();renderMartButton();
}
function currentPickPhaseKey(){return `${currentRunHistoryId||"run"}-${difficultyMode}-${team.length+1}-${usedNames.size}`}
function refreshShopRoundLock(){
 const key=currentPickPhaseKey();
 if(key!==currentShopRoundKey){currentShopRoundKey=key;pokeMartVisitedThisRound=false;}
}
function renderMartButton(){
 refreshShopRoundLock();
 const btn=document.getElementById("pokeMartBtn"), note=document.getElementById("pokeMartRoundNote");
 if(!btn||!note)return;
 const locked=pokeMartVisitedThisRound||isDraftComplete()||!trainer||!selectedItem||generating;
 btn.classList.toggle("shopBtnLocked",locked);
 btn.disabled=locked;
 note.textContent=isDraftComplete()?"PokéMart closed: run complete.":!trainer||!selectedItem?"Choose trainer and starting item first.":pokeMartVisitedThisRound?"PokéMart already visited this pick phase. Pick a Pokémon to refresh it.":"You may visit the PokéMart once this pick phase.";
}
function renderPokeMart(){
 const p=getCoinPouches(), key=coinModeKey(), bag=getBackpack();
 const coin=document.getElementById("martCoinInfo");
 const binfo=document.getElementById("martBackpackInfo");
 const lock=document.getElementById("martLockInfo");
 const items=document.getElementById("martItems");
 if(coin)coin.innerHTML=`<div class="label">${coinPouchLabel(key)} Coin Pouch</div><div class="coinRow"><span class="coinPill active">🪙 ${p[key]||0}</span><span class="coinPill">Easy ${p.easy||0}</span><span class="coinPill">Normal ${p.normal||0}</span><span class="coinPill">Master ${p.master||0}</span></div>`;
 if(binfo)binfo.innerHTML=`<div class="label">Backpack ${bag.length}/2</div><div class="backpackItems">${bag.length?bag.map((id,i)=>`<span class="backpackItem">${backpackLabel(id)} <button onclick="trashBackpackItem(${i});renderPokeMart()" title="Trash item">×</button></span>`).join(""):`<span class="tscore">Empty.</span>`}</div>${bag.length>=2?`<div class="martLockNotice">Backpack full. Trash one item before buying another.</div>`:""}`;
 if(lock)lock.innerHTML=pokeMartVisitedThisRound?`<div class="martLockNotice">This visit is your only PokéMart visit for the current pick phase. Closing locks the shop until after you pick.</div>`:"";
 if(items)items.innerHTML=POKEMART_ITEMS.map(item=>{
  const affordable=(p[key]||0)>=item.price, space=bag.length<2;
  return `<div class="martItem"><div class="martIcon">${item.icon}</div><div><div class="martName">${item.name}</div><div class="martDesc">${item.desc}</div><div class="martPrice">${item.price} ${coinPouchLabel(key)} Coins</div></div><button class="btn ${affordable&&space?"btn-dark":"btn-ghost"}" ${affordable&&space?"":"disabled"} onclick="buyPokeMartItem('${item.id}')">${space?(affordable?"Buy":"Too Poor"):"Bag Full"}</button></div>`;
 }).join("");
}
function openPokeMart(){
 ensureMartUi();refreshShopRoundLock();
 if(pokeMartVisitedThisRound||isDraftComplete()||!trainer||!selectedItem||generating){warn("PokéMart is unavailable right now.");renderMartButton();return}
 pokeMartVisitedThisRound=true;
 renderPokeMart();
 document.getElementById("pokeMartOverlay").style.display="block";
 renderMartButton();
}
function closePokeMart(){const el=document.getElementById("pokeMartOverlay");if(el)el.style.display="none";renderMartButton()}
function buyPokeMartItem(id){
 const item=backpackItemDef(id);if(!item)return;
 const bag=getBackpack();
 if(bag.length>=2){warn("Backpack full. Trash one item first.");renderPokeMart();return}
 if(!spendCoins(item.price)){warn("Not enough coins in this difficulty pouch.");renderPokeMart();return}
 addBackpackItem(id);warn(`${item.name} added to Backpack.`);renderPokeMart();renderBackpack();
}
function xItemBonusForPokemon(p,i){
 let b=0, bag=getBackpack(), types=activeTypes(p,i).map(t=>t.toLowerCase());
 if(bag.includes("x_sp_atk")&&types.some(t=>["psychic","ghost","fairy","electric"].includes(t)))b+=75;
 if(bag.includes("x_defense")&&types.some(t=>["steel","rock","ground"].includes(t)))b+=75;
 if(bag.includes("x_speed")&&types.some(t=>["flying","electric"].includes(t)))b+=75;
 if(bag.includes("x_all")&&isDraftComplete())b+=25;
 if(p.xAttackBonus)b+=p.xAttackBonus;
 if(p.direHitBonus)b+=p.direHitBonus;
 return b;
}
const __pScore_xitem_base=pScore;
pScore=function(p,i){return __pScore_xitem_base(p,i)+xItemBonusForPokemon(p,i)}
const __pokemonItemLabels_x_base=pokemonItemLabels;
pokemonItemLabels=function(p,i){
 const labels=__pokemonItemLabels_x_base(p,i);
 const b=xItemBonusForPokemon(p,i);
 if(b)labels.push(`PokéMart X-Item: +${b}`);
 return labels;
}
function useBackpackItem(id,index=null){
 if(!getBackpack().includes(id))return warn("Item not in Backpack.");
 if(id==="x_accuracy"){
  consumeBackpackItem(id);warn("X Accuracy used: rerolling this draft.");generateOptions();return;
 }
 if(id==="guard_spec"){warn("Guard Spec. is passive and protects against the next theft.");return}
 if(id==="x_attack"||id==="dire_hit"){
  const eligible=team.map((p,i)=>(p.bst||0)<500&&!p.xAttackBonus&&!p.direHitBonus?i:null).filter(i=>i!==null);
  if(!eligible.length)return warn("No eligible selected Pokémon below 500 BST.");
  const i=eligible[eligible.length-1]; // newest eligible by default
  if(id==="x_attack")team[i].xAttackBonus=100; else team[i].direHitBonus=100;
  consumeBackpackItem(id);warn(`${backpackItemDef(id).name} used on ${activePokemonName(team[i],i)}: +100.`);render();return;
 }
 warn(`${backpackLabel(id)} is passive and applies automatically while held.`);
}
function renderBackpackActions(){
 const el=document.getElementById("backpackBox");if(!el)return;
 const bag=getBackpack();
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div><div class="backpackItems">${bag.length?bag.map((id,i)=>`<span class="backpackItem">${backpackLabel(id)} <button onclick="useBackpackItem('${id}',${i})" title="Use item">Use</button><button onclick="trashBackpackItem(${i})" title="Trash item">×</button></span>`).join(""):`<span class="tscore">Empty. Buy PokéMart items to manipulate future picks.</span>`}</div>`;
}
renderBackpack=renderBackpackActions;
const __maybeGrunt_guard_base=maybeGrunt;
maybeGrunt=function(){
 if(getBackpack().includes("guard_spec")){
  // Let original decide if encounter exists. If a theft would occur later, this is hard to intercept safely here,
  // so Guard Spec. currently acts as an insurance tag used by run feedback. Full theft-prevention stays conservative.
 }
 return __maybeGrunt_guard_base();
}
const __pickPokemon_mart_base=pickPokemon;
pickPokemon=async function(i){
 refreshShopRoundLock();
 await __pickPokemon_mart_base(i);
 pokeMartVisitedThisRound=false;
 refreshShopRoundLock();
 renderMartButton();
}
const __render_mart_base=render;
render=function(){__render_mart_base();ensureMartUi();renderBackpack();renderMartButton();};
const __boot_mart_base=boot;
boot=async function(){await __boot_mart_base();ensureMartUi();renderBackpack();renderMartButton();};


/* ===== Guard Spec. Insurance Fix v13.3.2 ===== */
const __pickPokemon_guard_fix_base=pickPokemon;
pickPokemon=async function(i){
 await __pickPokemon_guard_fix_base(i);
 if(pendingGrunt&&getBackpack().includes("guard_spec")){
  consumeBackpackItem("guard_spec");
  addRunEvent("Item","Guard Spec. blocked the Grunt theft.",team.length||1);
  warn("Guard Spec. activated: Grunt theft prevented.");
  pendingGrunt=null;
  eventLog={won:true,choice:"guard_spec",grunt:{name:"Guarded Grunt",sprite:"rocketgrunt"},team:[],orbHint:"Guard Spec. protected your team."};
  if(postDraftPendingAfterGrunt){postDraftPendingAfterGrunt=false;continuePostDraftPipeline(150)}
  else await generateOptions();
  render();
 }
};


/* ===== Starter Choice Patch v13.3.3 ===== */
let starterChoiceResolved=false;
let starterOptions=[];
const STARTER_STAGE_POOL=[
 "bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise",
 "chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr",
 "treecko","grovyle","sceptile","torchic","combusken","blaziken","mudkip","marshtomp","swampert",
 "turtwig","grotle","torterra","chimchar","monferno","infernape","piplup","prinplup","empoleon",
 "snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott",
 "chespin","quilladin","chesnaught","fennekin","braixen","delphox","froakie","frogadier","greninja",
 "rowlet","dartrix","decidueye","litten","torracat","incineroar","popplio","brionne","primarina",
 "grookey","thwackey","rillaboom","scorbunny","raboot","cinderace","sobble","drizzile","inteleon",
 "sprigatito","floragato","meowscarada","fuecoco","crocalor","skeledirge","quaxly","quaxwell","quaquaval"
];
function starterProfessorWelcome(){
 const p=randomProfessor?randomProfessor():PROFESSORS[rand(0,PROFESSORS.length-1)];
 const quotes=[
  "Every great run begins with a first footprint. Choose a partner, or walk in empty-handed and take an X-Item.",
  "A starter is not always optimal, but it gives the run a heartbeat.",
  "Strategy blooms early. Pick a partner, or take a tool and trust the draft."
 ];
 return {prof:p,quote:sample(quotes,1)[0]};
}
async function buildStarterOptions(){
 const names=sample(STARTER_STAGE_POOL.filter(n=>!usedNames.has(n)),6);
 starterOptions=[];
 for(let n of names){
  try{starterOptions.push(await fetchPokemon(n))}
  catch(e){starterOptions.push(FALLBACK_POOL.find(x=>x.name===n)||{name:n,displayName:pretty(n),types:["normal"],bst:300,sprite:"",megaForms:[]})}
 }
 // Partner rarity rolls, without forcing duplicates.
 if(rand(1,SPECIAL_POKEMON_ODDS)===1&&!usedSpecialPokemonIds().has("partner-pikachu"))starterOptions[rand(0,starterOptions.length-1)]=makeSpecialPokemon("partner-pikachu");
 if(rand(1,SPECIAL_POKEMON_ODDS)===1&&!usedSpecialPokemonIds().has("partner-eevee"))starterOptions[rand(0,starterOptions.length-1)]=makeSpecialPokemon("partner-eevee");
 starterOptions=starterOptions.map(p=>{if(!p.shiny&&shinyRoll()){p.shiny=true;p.shinyBonus=SHINY_BONUS}return p});
}
async function openStarterChoice(){
 if(starterChoiceResolved)return generateOptions();
 document.getElementById("mainTitle").textContent="Choose a Starter Pokémon";
 let area=document.getElementById("gameArea");
 area.className="";
 area.innerHTML=`<div class="card"><span class="loader"></span>Professor is preparing starter choices...</div>`;
 await buildStarterOptions();
 const intro=starterProfessorWelcome();
 area.className="";
 area.innerHTML=`<div class="starterIntro"><img src="${intro.prof.sprite}" onerror="this.style.display='none'"><div><div class="label">${intro.prof.name}</div><div class="tname">Round Zero: Pick a Starter or Leave It</div><div class="tscore">“${intro.quote}”</div></div></div><div class="starterChoices">${starterOptions.map((p,i)=>`<button class="card option ${p.shiny?"shiny":""}" onclick="chooseStarterPokemon(${i})"><div class="top"><h3 class="name">${p.shiny?"✨ ":""}${p.displayName||pretty(p.name)}</h3><div class="mystery">${p.bst||"?"} BST</div></div><div class="spritebox"><img src="${currentSprite(p,i)||p.sprite||""}" onerror="this.style.display='none'"></div><div class="types">${(p.types||[]).map(typePill).join("")}</div><div class="hidden">Choose this starter. It fills slot 1 and the draft continues at 2/6.</div></button>`).join("")}</div><div style="margin-top:14px"><button class="btn btn-ghost" onclick="declineStarterPokemon()">Leave it. Give me a free random X-Item instead.</button></div>`;
}
async function chooseStarterPokemon(i){
 const p=starterOptions[i];
 if(!p)return;
 starterChoiceResolved=true;
 team.push(p);usedNames.add(p.name);
 addRunEvent("Starter",`Selected starter ${p.shiny?"shiny ":""}${p.displayName||pretty(p.name)}.`,1);
 warn(`${p.displayName||pretty(p.name)} joined as your starter. Draft continues at 2/6.`);
 await openImmediateDraftQuestModal();
 await generateOptions();
}
function randomXItemId(){return sample(POKEMART_ITEMS.map(x=>x.id),1)[0]}
function declineStarterPokemon(){
 starterChoiceResolved=true;
 const id=randomXItemId();
 let bag=getBackpack();
 if(bag.length<2){bag.push(id);saveBackpack(bag);warn(`Starter skipped. Free ${backpackItemDef(id).name} added to Backpack.`);}
 else warn(`Starter skipped. Backpack is full, so the free ${backpackItemDef(id).name} could not be added.`);
 addRunEvent("Starter",`Skipped starter choice and received ${backpackItemDef(id).name}.`,1);
 renderBackpack();
 generateOptions();
}
const __selectItem_starter_base=selectItem;
selectItem=function(id){
 selectedItem=itemChoices.find(x=>x.id===id);
 if(selectedItem&&selectedItem.id==="master_ball"){masterBallReady=true;masterBallPhase=null;}
 if(selectedItem&&selectedItem.id==="elemental_plate"){
  elementalPlateType=null;
  render();
  return;
 }
 render();
 openStarterChoice();
}
const __chooseElementalPlateType_starter_base=chooseElementalPlateType;
chooseElementalPlateType=function(type){
 elementalPlateType=type;
 document.getElementById("itemModal").style.display="none";
 const bs=document.getElementById("battleSimOverlay"); if(bs)bs.style.display="none";
 document.getElementById("celebrationOverlay").style.display="none";
 render();
 openStarterChoice();
}
const __restart_starter_base=restartGame;
restartGame=function(){starterChoiceResolved=false;starterOptions=[];__restart_starter_base();}


/* ===== MissingNo. Hidden Glitch UI Patch v13.3.5 ===== */
function hasMissingNoOnTeam(){
 return (team||[]).some(p=>p&&(p.glitchPokemon||p.specialId==="missingno"||p.internalName==="missingno"||p.name==="missingno"||p.name==="MissingNo."));
}
function applyMissingNoGlitchTheme(){
 document.body.classList.toggle("missingno-glitch",hasMissingNoOnTeam());
}
const __render_glitch_base=render;
render=function(){__render_glitch_base();applyMissingNoGlitchTheme();};
const __boot_glitch_base=boot;
boot=async function(){await __boot_glitch_base();applyMissingNoGlitchTheme();};


/* ===== Stabilization Patch v13.3.6 ===== */
function xItemLongDescription(id){
 const d={
  x_attack:"Use: gives +100 to one already selected Pokémon below 500 BST.",
  x_sp_atk:"Passive while held: Psychic, Ghost, Fairy and Electric Pokémon each gain +75.",
  x_defense:"Passive while held: Steel, Rock and Ground Pokémon each gain +75.",
  x_speed:"Passive while held: Flying and Electric Pokémon each gain +75.",
  x_accuracy:"Use: rerolls all current draft options once, then is removed.",
  dire_hit:"Use: gives +100 to one already selected Pokémon below 500 BST.",
  guard_spec:"Passive insurance: blocks one Grunt theft, then is removed.",
  x_all:"Passive while held: when your team is complete, all six Pokémon gain +25."
 };
 return d[id]||"PokéMart item.";
}
function renderBackpackActions(){
 const el=document.getElementById("backpackBox");if(!el)return;
 const bag=getBackpack();
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div><div class="backpackItems">${bag.length?bag.map((id,i)=>`<span class="backpackItem" title="${xItemLongDescription(id)}">${backpackLabel(id)} <button onclick="useBackpackItem('${id}',${i})" title="Use item">Use</button><button onclick="trashBackpackItem(${i})" title="Trash item">×</button><span class="backpackItemInfo">${xItemLongDescription(id)}</span></span>`).join(""):`<span class="tscore">Empty. Buy PokéMart items to manipulate future picks.</span>`}</div><div class="backpackHelp">X-Items from the PokéMart are one-time Backpack tools. Passive X-Items work while held; Use-items disappear after activation.</div>`;
}
renderBackpack=renderBackpackActions;

function canOpenPokeMartNow(){
 return !!trainer && !!selectedItem && !isDraftComplete() && !generating && !pendingGrunt;
}
function renderMartButton(){
 refreshShopRoundLock();
 const btn=document.getElementById("pokeMartBtn"), note=document.getElementById("pokeMartRoundNote");
 if(!btn||!note)return;
 const unavailable=!canOpenPokeMartNow();
 const locked=pokeMartVisitedThisRound||unavailable;
 btn.classList.toggle("shopBtnLocked",locked);
 btn.disabled=locked;
 note.textContent=isDraftComplete()?"PokéMart closed: run complete.":!trainer||!selectedItem?"Choose trainer and starting item first.":pendingGrunt?"Finish the Grunt encounter first.":generating?"Wait for the draft roll to finish.":pokeMartVisitedThisRound?"PokéMart already visited this pick phase. Pick a Pokémon to refresh it.":"You may visit the PokéMart once this pick phase.";
}
function openPokeMart(){
 ensureMartUi();refreshShopRoundLock();
 const overlay=document.getElementById("pokeMartOverlay");
 if(!canOpenPokeMartNow()){warn("PokéMart is unavailable right now.");renderMartButton();return}
 if(pokeMartVisitedThisRound){warn("PokéMart already visited this pick phase. Pick a Pokémon to refresh it.");renderMartButton();return}
 pokeMartVisitedThisRound=true;
 renderPokeMart();
 if(overlay)overlay.style.display="block";
 renderMartButton();
}
function closePokeMart(){const el=document.getElementById("pokeMartOverlay");if(el)el.style.display="none";renderMartButton()}

function showGruntModal(){
 if(!pendingGrunt)return;
 document.getElementById("modalSprite").innerHTML=imgTag(pendingGrunt.grunt);
 document.getElementById("modalTitle").textContent=pendingGrunt.grunt.name+" ambushes you!";
 const gruntText=(pendingGrunt.grunt.text||"A crime organization Grunt appears.").trim();
 document.getElementById("modalText").textContent=gruntText+" Battle to protect your team, or run and lose one random selected Pokémon.";
 const power=baseTotal();
 const canWin=power>=pendingGrunt.difficulty;
 document.getElementById("modalDifficulty").innerHTML=`<div class="gruntPowerBox ${canWin?"win":""}">Your current team power: ${power}. Required to win: ${pendingGrunt.difficulty}. ${canWin?"You can win this battle.":"Battle will probably fail unless an item protects you."}</div>${renderOpponentTeam(pendingGrunt.team)}`;
 let actions="";
 if(selectedItem&&selectedItem.id==="escape_rope"&&!itemUsed)actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('escape')\">Escape Safely</button>";
 actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('run')\">Run</button><button class=\"btn btn-danger\" onclick=\"resolveGrunt('battle')\">Battle</button>";
 document.getElementById("gruntActions").innerHTML=actions;
 document.getElementById("gruntModal").style.display="flex";
}

function resolveGrunt(choice){
 if(!pendingGrunt){document.getElementById("gruntModal").style.display="none";return}
 let won=false,stolen=null,power=baseTotal();
 const guardActive=getBackpack().includes("guard_spec");
 if(choice==="escape"){won=true;itemUsed=true}
 else if(choice==="battle")won=power>=pendingGrunt.difficulty;
 if(!won&&guardActive){
  consumeBackpackItem("guard_spec");
  won=true;
  eventLog={grunt:pendingGrunt.grunt,won:true,stolen:null,difficulty:pendingGrunt.difficulty,power,choice:"guard_spec",team:pendingGrunt.team,orbHint:"Guard Spec. protected your team from theft."};
  addRunEvent("Item","Guard Spec. blocked the Grunt theft.",team.length||1);
 }else{
  if(!won)stolen=stealRandom();
  eventLog={grunt:pendingGrunt.grunt,won,stolen,difficulty:pendingGrunt.difficulty,power,choice,team:pendingGrunt.team,orbHint:won?"You retrieve a strange glowing orb. What could it do?":""};
  addRunEvent("Grunt",won?`${pendingGrunt.grunt.name} defeated. Strange glowing orb retrieved.`:`${pendingGrunt.grunt.name} stole ${stolen?stolen.displayName:"a Pokémon"}.`);
 }
 pendingGrunt=null;
 document.getElementById("gruntModal").style.display="none";
 document.getElementById("itemModal").style.display="none";
 render();

 if(postDraftPendingAfterGrunt&&isDraftComplete()){
  postDraftPendingAfterGrunt=false;
  currentOptions=[];
  setTimeout(()=>continuePostDraftPipeline(150),250);
  return;
 }
 if(team.length<ROUNDS){
  postDraftPendingAfterGrunt=false;
  generateOptions();
 }
}

async function openStarterChoice(){
 if(starterChoiceResolved)return generateOptions();
 document.getElementById("mainTitle").textContent="Choose a Starter Pokémon";
 let area=document.getElementById("gameArea");
 area.className="";
 area.innerHTML=`<div class="card"><span class="loader"></span>Professor is preparing starter choices...</div>`;
 await buildStarterOptions();
 const intro=starterProfessorWelcome();
 area.className="options starterDraftLike";
 area.innerHTML=`<div class="starterIntro" style="grid-column:1/-1"><img src="${intro.prof.sprite}" onerror="this.style.display='none'"><div><div class="label">${intro.prof.name}</div><div class="tname">Round Zero: Pick a Starter or Leave It</div><div class="tscore">“${intro.quote}”</div></div></div>${starterOptions.map((p,i)=>`<button class="card option ${p.shiny?"shiny":""}" onclick="chooseStarterPokemon(${i})"><div class="top"><h3 class="name">${p.shiny?"✨ ":""}${p.displayName||pretty(p.name)}</h3><div class="mystery">${p.bst||"?"} BST</div></div><div class="spritebox"><img src="${currentSprite(p,i)||p.sprite||""}" onerror="this.style.display='none'"></div><div class="types">${(p.types||[]).map(typePill).join("")}</div><div class="hidden">Starter choice: fills slot 1 and continues at 2/6.</div></button>`).join("")}<div class="card" style="grid-column:1/-1"><h3 class="name">Leave it</h3><p class="hidden">Skip starter choice and receive a random free X-Item in your Backpack instead.</p><button class="btn btn-ghost" onclick="declineStarterPokemon()">Give me a free random X-Item</button></div>`;
}


/* ===== v13.3.7 Economy / Mart Stabilization Patch ===== */
function closePokeMart(){
 const el=document.getElementById("pokeMartOverlay");
 if(el)el.style.display="none";
 renderMartButton&&renderMartButton();
}
function forceClosePokeMart(){const el=document.getElementById("pokeMartOverlay");if(el)el.style.display="none";}
function resetRunBackpack(){saveBackpack([]); if(typeof renderBackpack==="function")renderBackpack();}
function currentRunCoinsKey(){
 if(!currentRunHistoryId)currentRunHistoryId=`run_${Date.now()}_${Math.random().toString(16).slice(2)}`;
 return currentRunHistoryId;
}
function finalizeRunProgressAndCoins(){
 if(!isDraftComplete())return 0;
 try{
  if(!currentRunHistoryId)currentRunHistoryId=`run_${Date.now()}_${Math.random().toString(16).slice(2)}`;
  const entry=buildRunHistoryEntry();
  entry.id=currentRunHistoryId;
  let list=getRunHistory();
  const idx=list.findIndex(r=>r.id===entry.id);
  if(idx>=0)list[idx]=entry;
  else list.unshift(entry);
  saveRunHistory(list);
  recordCollectionFromRun(entry);
  return awardCoinsForRun(entry);
 }catch(e){console.warn("Could not finalize run rewards",e);return 0}
}
recordRunHistory=function(){finalizeRunProgressAndCoins();};

const __renderResults_rewards_v137=renderResults;
renderResults=function(area,title,res){
 forceClosePokeMart();
 finalizeRunProgressAndCoins();
 return __renderResults_rewards_v137(area,title,res);
};

const __startBattleSimulation_closeMart_v137=startBattleSimulation;
startBattleSimulation=function(){
 forceClosePokeMart();
 finalizeRunProgressAndCoins();
 return __startBattleSimulation_closeMart_v137();
};

const __showScoreBreakdown_rewards_v137=showScoreBreakdown;
showScoreBreakdown=function(force=false){
 finalizeRunProgressAndCoins();
 return __showScoreBreakdown_rewards_v137(force);
};

const __showCelebration_rewards_v137=showCelebration;
showCelebration=function(rankName,score,force=false){
 forceClosePokeMart();
 finalizeRunProgressAndCoins();
 return __showCelebration_rewards_v137(rankName,score,force);
};

const __restartGame_backpack_v137=restartGame;
restartGame=function(){
 resetRunBackpack();
 forceClosePokeMart();
 pokeMartVisitedThisRound=false;
 currentShopRoundKey="";
 return __restartGame_backpack_v137();
};

function xItemLongDescription(id){
 const d={
  x_attack:"Use now: choose one selected Pokémon below 500 BST and give it +100.",
  x_sp_atk:"Passive while held: Psychic, Ghost, Fairy and Electric Pokémon each gain +75.",
  x_defense:"Passive while held: Steel, Rock and Ground Pokémon each gain +75.",
  x_speed:"Passive while held: Flying and Electric Pokémon each gain +75.",
  x_accuracy:"Use now: reroll all current draft options once, then remove this item.",
  dire_hit:"Use now: choose one selected Pokémon below 500 BST and give it +100.",
  guard_spec:"Use before a Grunt: choose one selected Pokémon. That Pokémon cannot be stolen once.",
  x_all:"Passive while held: when the team is complete, all six Pokémon gain +25."
 };
 return d[id]||"PokéMart item.";
}
function renderBackpackActions(){
 const el=document.getElementById("backpackBox");if(!el)return;
 const bag=getBackpack();
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div><div class="backpackItems">${bag.length?bag.map((id,i)=>`<span class="backpackItem" title="${xItemLongDescription(id)}"><span class="backpackButtonLine">${backpackLabel(id)} <button onclick="useBackpackItem('${id}',${i})" title="Use item">Use</button><button onclick="trashBackpackItem(${i})" title="Trash item">×</button></span><span class="backpackItemInfo">${xItemLongDescription(id)}</span></span>`).join(""):`<span class="tscore">Empty. Buy PokéMart items during the draft to manipulate this run.</span>`}</div><div class="backpackHelp">Backpack starts empty on every new run. PokéMart items are one-run tools and can be used during pick phases.</div>`;
}
renderBackpack=renderBackpackActions;

function guardedPokemonIndexes(){
 return team.map((p,i)=>p&&p.guardedByGuardSpec?i:null).filter(i=>i!==null);
}
function applyGuardSpecToNewestEligible(){
 const eligible=team.map((p,i)=>p&&!p.guardedByGuardSpec?i:null).filter(i=>i!==null);
 if(!eligible.length){warn("No selected Pokémon can be guarded right now.");return false}
 const i=eligible[eligible.length-1];
 team[i].guardedByGuardSpec=true;
 consumeBackpackItem("guard_spec");
 addRunEvent("Item",`${activePokemonName(team[i],i)} is guarded by Guard Spec.`,team.length||1);
 warn(`${activePokemonName(team[i],i)} is guarded through Guard Spec.`);
 render();
 return true;
}
const __useBackpackItem_v137=useBackpackItem;
useBackpackItem=function(id,index=null){
 if(id==="guard_spec")return applyGuardSpecToNewestEligible();
 return __useBackpackItem_v137(id,index);
};

const __stealRandom_guard_v137=stealRandom;
stealRandom=function(){
 if(team.length===0)return null;
 const candidates=team.map((p,i)=>p&&p.guardedByGuardSpec?null:i).filter(i=>i!==null);
 if(!candidates.length){warn("Guard Spec. protected every steal target.");return null}
 const idx=candidates[rand(0,candidates.length-1)];
 const stolen=team.splice(idx,1)[0];
 usedNames.delete(stolen.name);
 if(selectedMegaIndex===idx)selectedMegaIndex=null;
 else if(selectedMegaIndex!==null&&selectedMegaIndex>idx)selectedMegaIndex--;
 return stolen;
};

function pokemonSpecialBadges(p){
 const labels=pokemonSpecialLabels(p).map(t=>`<div class="shinylabel">⭐ ${t}</div>`);
 if(p&&p.guardedByGuardSpec)labels.push(`<div class="guardedTag">🧿 Guarded through Guard Spec</div>`);
 return labels.join("");
}
function pokemonItemLabels(p,i){
 const labels=[];
 if(lightBallAppliesTo(i))labels.push(lightBallEffectText(p,i));
 if(p.activeGmax)labels.push(`Gigantamax: +${gigantamaxBonus(p)}`);
 if(p.activeOrigin)labels.push("Origin Forme: +300");
 if(p.activeUnbound)labels.push("Prison Bottle: +80 BST");
 const b=xItemBonusForPokemon(p,i);
 if(b)labels.push(`PokéMart X-Item: +${b}`);
 if(p&&p.guardedByGuardSpec)labels.push("Guarded through Guard Spec");
 return labels;
}

function canOpenPokeMartNow(){
 return !!trainer && !!selectedItem && !isDraftComplete() && !generating && !pendingGrunt && team.length<ROUNDS;
}
function renderMartButton(){
 refreshShopRoundLock();
 const btn=document.getElementById("pokeMartBtn"), note=document.getElementById("pokeMartRoundNote");
 if(!btn||!note)return;
 const unavailable=!canOpenPokeMartNow();
 const locked=pokeMartVisitedThisRound||unavailable;
 btn.classList.toggle("shopBtnLocked",locked);
 btn.disabled=locked;
 note.textContent=isDraftComplete()||team.length>=ROUNDS?"PokéMart closed: the last shop chance was before the final pick.":!trainer||!selectedItem?"Choose trainer and starting item first.":pendingGrunt?"Finish the Grunt encounter first.":generating?"Wait for the draft roll to finish.":pokeMartVisitedThisRound?"PokéMart already visited this pick phase. Pick a Pokémon to refresh it.":"You may visit the PokéMart once this pick phase.";
}
function ensureMartUi(){
 let el=document.getElementById("pokeMartOverlay");
 if(!el){
  document.body.insertAdjacentHTML("beforeend",`<div class="martOverlay" id="pokeMartOverlay"><div class="martPanel"><div class="martHead"><div><h2>PokéMart</h2><p>Spend this difficulty’s coins on one-run Backpack items. You can visit the Mart once per pick phase.</p></div><div class="martActions"><button class="btn btn-dark" onclick="closePokeMart()">Close Shop</button></div></div><div id="martCoinInfo" class="coinCaseBox"></div><div id="martBackpackInfo" class="backpackBox"></div><div id="martLockInfo"></div><div id="martItems" class="martGrid"></div></div></div>`);
 }else{
  document.body.appendChild(el);
  el.className="martOverlay";
 }
 if(!document.getElementById("backpackBox")){
  const side=document.querySelector(".side.card");
  if(side)side.insertAdjacentHTML("beforeend",`<div id="backpackBox" class="backpackBox"></div><button id="pokeMartBtn" class="btn btn-dark" style="width:100%;margin-top:10px" onclick="openPokeMart()">🛒 Visit PokéMart</button><div id="pokeMartRoundNote" class="tscore" style="margin-top:8px"></div>`);
 }
 renderBackpack();renderMartButton();
}
function openPokeMart(){
 ensureMartUi();refreshShopRoundLock();
 const overlay=document.getElementById("pokeMartOverlay");
 if(!canOpenPokeMartNow()){warn("PokéMart is unavailable right now.");renderMartButton();return}
 if(pokeMartVisitedThisRound){warn("PokéMart already visited this pick phase. Pick a Pokémon to refresh it.");renderMartButton();return}
 pokeMartVisitedThisRound=true;
 renderPokeMart();
 if(overlay){
  document.body.appendChild(overlay);
  overlay.style.display="block";
  overlay.scrollTop=0;
 }
 renderMartButton();
}

function showGruntModal(){
 if(!pendingGrunt)return;
 document.getElementById("modalSprite").innerHTML=imgTag(pendingGrunt.grunt);
 document.getElementById("modalTitle").textContent=pendingGrunt.grunt.name+" ambushes you!";
 const gruntText=(pendingGrunt.grunt.text||"A crime organization Grunt appears.").trim();
 document.getElementById("modalText").textContent=gruntText+" Battle if you believe your current team is strong enough, or run and risk losing one random unguarded selected Pokémon.";
 const thought=baseTotal()>=pendingGrunt.difficulty?"Your team looks ready for this fight.":"Your team may not be strong enough yet.";
 document.getElementById("modalDifficulty").innerHTML=`<div class="gruntPowerBox secret">Trainer instinct: ${thought}</div>${renderOpponentTeam(pendingGrunt.team)}`;
 let actions="";
 if(selectedItem&&selectedItem.id==="escape_rope"&&!itemUsed)actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('escape')\">Escape Safely</button>";
 actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('run')\">Run</button><button class=\"btn btn-danger\" onclick=\"resolveGrunt('battle')\">Battle</button>";
 document.getElementById("gruntActions").innerHTML=actions;
 document.getElementById("gruntModal").style.display="flex";
}

function resolveGrunt(choice){
 if(!pendingGrunt){document.getElementById("gruntModal").style.display="none";return}
 let won=false,stolen=null,power=baseTotal();
 if(choice==="escape"){won=true;itemUsed=true}
 else if(choice==="battle")won=power>=pendingGrunt.difficulty;
 if(!won)stolen=stealRandom();
 eventLog={grunt:pendingGrunt.grunt,won,stolen,difficulty:pendingGrunt.difficulty,power,choice,team:pendingGrunt.team,orbHint:won?"You retrieve a strange glowing orb. What could it do?":""};
 addRunEvent("Grunt",won?`${pendingGrunt.grunt.name} defeated. Strange glowing orb retrieved.`:stolen?`${pendingGrunt.grunt.name} stole ${stolen.displayName}.`:`${pendingGrunt.grunt.name} failed to steal a guarded Pokémon.`);
 pendingGrunt=null;
 document.getElementById("gruntModal").style.display="none";
 document.getElementById("itemModal").style.display="none";
 render();
 if(postDraftPendingAfterGrunt&&isDraftComplete()){
  postDraftPendingAfterGrunt=false;currentOptions=[];setTimeout(()=>continuePostDraftPipeline(150),250);return;
 }
 if(team.length<ROUNDS){postDraftPendingAfterGrunt=false;generateOptions();}
}

async function openStarterChoice(){
 if(starterChoiceResolved)return generateOptions();
 document.getElementById("mainTitle").textContent="Choose a Starter Pokémon";
 let area=document.getElementById("gameArea");
 area.className="";
 area.innerHTML=`<div class="card"><span class="loader"></span>Professor is preparing starter choices...</div>`;
 await buildStarterOptions();
 const prof=PROFESSORS[rand(0,PROFESSORS.length-1)];
 const quotes=[
  "Every great run begins with a first footprint. Choose a partner, or walk in empty-handed and take an X-Item.",
  "A starter is not always optimal, but it gives the run a heartbeat.",
  "Strategy blooms early. Pick a partner, or take a tool and trust the draft."
 ];
 const quote=sample(quotes,1)[0];
 area.className="options starterDraftLike";
 area.innerHTML=`<div class="starterIntro" style="grid-column:1/-1"><img src="${prof.sprite}" onerror="this.style.display='none'"><div><div class="label">${prof.name}</div><div class="tname">Round Zero: Pick a Starter or Leave It</div><div class="tscore">“${quote}”</div></div></div>${starterOptions.map((p,i)=>`<button class="card option ${p.shiny?"shiny":""}" onclick="chooseStarterPokemon(${i})"><div class="top"><h3 class="name">${p.shiny?"✨ ":""}${p.displayName||pretty(p.name)}</h3><div class="mystery">???</div></div><div class="spritebox"><img src="${currentSprite(p,i)||p.sprite||""}" onerror="this.style.display='none'"></div><div class="types">${(p.types||[]).map(typePill).join("")}</div><div class="hidden">Starter choice: fills slot 1 and continues at 2/6.</div></button>`).join("")}<div class="card" style="grid-column:1/-1"><h3 class="name">Leave it</h3><p class="hidden">Skip starter choice and receive a random free X-Item in your Backpack instead.</p><button class="btn btn-ghost" onclick="declineStarterPokemon()">Give me a free random X-Item</button></div>`;
}


/* ===== v13.3.8 Form Stack + Grunt Text Patch ===== */
function showGruntModal(){
 if(!pendingGrunt)return;
 document.getElementById("modalSprite").innerHTML=imgTag(pendingGrunt.grunt);
 document.getElementById("modalTitle").textContent=pendingGrunt.grunt.name+" ambushes you!";
 const gruntText=(pendingGrunt.grunt.text||"A crime organization Grunt appears.").trim();
 document.getElementById("modalText").textContent=gruntText+" Can you take them on and protect your Pokémon?";
 document.getElementById("modalDifficulty").innerHTML=`<div class="gruntPowerBox secret">Can you take them on and protect your Pokémon?</div>${renderOpponentTeam(pendingGrunt.team)}`;
 let actions="";
 if(selectedItem&&selectedItem.id==="escape_rope"&&!itemUsed)actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('escape')\">Escape Safely</button>";
 actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('run')\">Run</button><button class=\"btn btn-danger\" onclick=\"resolveGrunt('battle')\">Battle</button>";
 document.getElementById("gruntActions").innerHTML=actions;
 document.getElementById("gruntModal").style.display="flex";
}

function usePrisonBottle(i){
 const p=team[i];
 if(!p)return;
 const unboundBst=(p.activeUnbound&&p.activeUnbound.scoreBst)||((p.bst||600)+80);
 p.activeUnbound={name:"Hoopa Unbound",scoreBst:unboundBst,types:["psychic","dark"],sprite:specialAsset("HoopaUnbound.png")};
 p.displayName="Hoopa Unbound";
 p.unbound=true;
 p.bst=unboundBst;
 p.formBaseBst=unboundBst;
 prisonBottleResolved=true;
 certificateAssetPreparationPromise=null;
 addRunEvent("Quest","Hoopa Unbound completed: +500. Prison Bottle opened Hoopa's true form.",ROUNDS);
 const modal=document.getElementById("itemModal"); if(modal)modal.style.display="none";
 continueAfterItemChoice();
 render();
}

const __pokemonItemLabels_stack_v138=pokemonItemLabels;
pokemonItemLabels=function(p,i){
 const labels=__pokemonItemLabels_stack_v138(p,i);
 if(p&&p.activeUnbound&&!labels.some(x=>String(x).includes("Prison Bottle")))labels.push("Prison Bottle: +80 BST");
 return labels;
};

function scoreBaseDisplayFor(p,i){
 if(!p)return 0;
 if(p.activeUnbound&&p.activeUnbound.scoreBst)return p.activeUnbound.scoreBst;
 if(p.activeOrigin&&p.activeOrigin.scoreBst)return p.activeOrigin.scoreBst;
 if(p.activePrimal&&p.activePrimal.scoreBst)return p.activePrimal.scoreBst;
 if(selectedMegaIndex===i&&p.activeMega&&p.activeMega.scoreBst)return p.activeMega.scoreBst;
 return p.bst||0;
}


/* ===== v13.3.9 Grunt Lines + X-Item Canonical Cleanup ===== */
const GRUNT_QUOTES_V139={
 "Team Rocket Grunt":["Pokémon are business. Business means money, and money means world domination!","Hand over the rare ones. Boss likes profit with teeth.","A strong team belongs in a Rocket vault, not in your pockets."],
 "Team Magma Grunt":["Land expands. Ambition expands. Your Pokéballs are next.","The world needs more land, and I need more Pokémon to stand on it!","This team looks useful for a volcano-brained operation."],
 "Team Aqua Grunt":["The sea takes what it wants. Today, so do we.","Your team would look better surfing under our flag.","More ocean, fewer ownership problems. Hand over the Pokémon."],
 "Team Galactic Grunt":["Your Pokémon have statistical value for a better universe.","Emotion is inefficient. Theft is merely accelerated redistribution.","The boss needs specimens. You brought specimens."],
 "Team Plasma Grunt":["We will liberate your Pokémon directly into our custody.","Your Pokéballs are cages. Our pockets are... temporary sanctuaries.","For the freedom of Pokémon, surrender them immediately."],
 "Team Skull Grunt":["Yo, your team got swagger. Shame if someone borrowed it forever.","We came sideways, we leave with prizes.","Your Pokéballs look lonely. Team Skull can make them worse."],
 "Team Yell Grunt":["OI! Your team is distracting from our extremely loud support agenda!","We are not stealing. We are aggressively cheering your Pokémon away.","That Pokémon has fan potential. Give it here!"],
 "Team Star Grunt":["Operation Snatch-Squad is live. Try looking cooler than us.","Your team has style. We are repossessing it for dramatic reasons.","Boss says your Pokémon pass the vibe check. Now hand one over."]
};
gruntQuoteFor=function(grunt){const lines=GRUNT_QUOTES_V139[(grunt&&grunt.name)||""]||["A crime syndicate Grunt sizes up your team."];return sample(lines,1)[0];};
showGruntModal=function(){
 if(!pendingGrunt)return;
 document.getElementById("modalSprite").innerHTML=imgTag(pendingGrunt.grunt);
 document.getElementById("modalTitle").textContent=pendingGrunt.grunt.name+" ambushes you!";
 document.getElementById("modalText").textContent="“"+gruntQuoteFor(pendingGrunt.grunt)+"”";
 document.getElementById("modalDifficulty").innerHTML=`<div class="gruntPowerBox secret">Can you take them on and protect your Pokémon?</div>${renderOpponentTeam(pendingGrunt.team)}`;
 let actions="";
 if(selectedItem&&selectedItem.id==="escape_rope"&&!itemUsed)actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('escape')\">Escape Safely</button>";
 actions+="<button class=\"btn btn-ghost\" onclick=\"resolveGrunt('run')\">Run</button><button class=\"btn btn-danger\" onclick=\"resolveGrunt('battle')\">Battle</button>";
 document.getElementById("gruntActions").innerHTML=actions;
 document.getElementById("gruntModal").style.display="flex";
};

uniqueBackpackItems=function(){return [...new Set(getBackpack())];};
const PASSIVE_X_ITEMS_V139=new Set(["x_sp_atk","x_defense","x_speed","x_all"]);
xItemBonusForPokemon=function(p,i){
 let b=0, bag=uniqueBackpackItems(), types=activeTypes(p,i).map(t=>t.toLowerCase());
 if(bag.includes("x_sp_atk")&&types.some(t=>["psychic","ghost","fairy","electric"].includes(t)))b+=75;
 if(bag.includes("x_defense")&&types.some(t=>["steel","rock","ground"].includes(t)))b+=75;
 if(bag.includes("x_speed")&&types.some(t=>["flying","electric"].includes(t)))b+=75;
 if(bag.includes("x_all")&&isDraftComplete())b+=25;
 if(p&&p.xAttackBonus)b+=p.xAttackBonus;
 if(p&&p.direHitBonus)b+=p.direHitBonus;
 return b;
};
activeXItemLabelsForPokemon=function(p,i){
 const labels=[], bag=uniqueBackpackItems(), types=activeTypes(p,i).map(t=>t.toLowerCase());
 if(bag.includes("x_sp_atk")&&types.some(t=>["psychic","ghost","fairy","electric"].includes(t)))labels.push("X Sp. Atk: +75");
 if(bag.includes("x_defense")&&types.some(t=>["steel","rock","ground"].includes(t)))labels.push("X Defense: +75");
 if(bag.includes("x_speed")&&types.some(t=>["flying","electric"].includes(t)))labels.push("X Speed: +75");
 if(bag.includes("x_all")&&isDraftComplete())labels.push("X All: +25");
 if(p&&p.xAttackBonus)labels.push("X Attack: +100");
 if(p&&p.direHitBonus)labels.push("Dire Hit: +100");
 return labels;
};
pokemonItemLabels=function(p,i){
 const labels=[];
 if(lightBallAppliesTo(i))labels.push(isPikachuVariant(p)?"Light Ball: BST x2":"Light Ball: +150");
 if(p&&p.activeGmax)labels.push(`Gigantamax: +${p.activeGmax.bonus||(p.hp?Number(p.hp):150)}`);
 if(p&&p.activeOrigin)labels.push("Origin Forme: +300");
 if(p&&p.activeUnbound)labels.push("Prison Bottle: +80 BST");
 if(selectedItem&&selectedItem.id==="lucky_egg"&&isBabyPokemon(p))labels.push("Lucky Egg: +300");
 if(selectedItem&&selectedItem.id==="fossil"&&isFossilPokemon(p))labels.push("Fossil: +100");
 if(selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType))labels.push(elementalPlateType==="legend"?"Legend Plate: +50":"Plate: +50");
 activeXItemLabelsForPokemon(p,i).forEach(x=>labels.push(`PokéMart ${x}`));
 if(p&&p.guardedByGuardSpec)labels.push("Guarded through Guard Spec");
 return [...new Set(labels)].filter(x=>!String(x).includes("X-Item"));
};
pokemonItemBadges=function(p,i){return pokemonItemLabels(p,i).map(t=>`<div class="shinylabel">🎒 ${t}</div>`).join("");};

/* Rebuild pScore canonically instead of chaining older wrappers, so passive X-Items cannot double-apply. */
pScore=function(p,i){
 ensureMissingNoGlitch();
 return scoreBaseFor(p,i)+(p&&p.shiny?SHINY_BONUS:0)+(p&&p.extraShinyBonus||0)+pokemonSpecialBonus(p)+pokemonItemBonus(p,i)+(p&&p.glitchMod||0)+xItemBonusForPokemon(p,i);
};

const __buyPokeMartItem_v139=buyPokeMartItem;
buyPokeMartItem=function(id){
 const bag=getBackpack();
 if(PASSIVE_X_ITEMS_V139.has(id)&&bag.includes(id)){
  warn(`${backpackItemDef(id).name} is already in your Backpack. Passive X-Items do not stack.`);
  renderPokeMart();
  return;
 }
 return __buyPokeMartItem_v139(id);
};

const __boot_backpack_clear_v139=boot;
boot=async function(){
 await __boot_backpack_clear_v139();
 if(!team||team.length===0){
  saveBackpack([]);
  if(typeof renderBackpack==="function")renderBackpack();
 }
};

const __restart_backpack_clear_v139=restartGame;
restartGame=function(){
 saveBackpack([]);
 return __restart_backpack_clear_v139();
};


/* ===== v13.4.0 Item System Rework ===== */
const POKEMART_ITEMS_V134=[
 {id:"x_attack",name:"X Attack",sprite:"assets/pokemart/X_Attack.png",price:220,types:["normal","fighting","dark","dragon"],bonus:75,desc:"Choose one Normal, Fighting, Dark or Dragon Pokémon. It gains +75 points."},
 {id:"x_defense",name:"X Defense",sprite:"assets/pokemart/X_Defense.png",price:220,types:["rock","ground","steel"],bonus:75,desc:"Choose one Rock, Ground or Steel Pokémon. It gains +75 points."},
 {id:"x_sp_atk",name:"X Sp. Atk",sprite:"assets/pokemart/X_SP_Attack.png",price:220,types:["psychic","ghost","fairy","poison","fire"],bonus:75,desc:"Choose one Psychic, Ghost, Fairy, Poison or Fire Pokémon. It gains +75 points."},
 {id:"x_sp_def",name:"X Sp. Def",sprite:"assets/pokemart/X_SP_Defense.png",price:220,types:["grass","water","ice"],bonus:75,desc:"Choose one Grass, Water or Ice Pokémon. It gains +75 points."},
 {id:"x_speed",name:"X Speed",sprite:"assets/pokemart/X_Speed.png",price:220,types:["flying","electric","bug"],bonus:75,desc:"Choose one Flying, Electric or Bug Pokémon. It gains +75 points."},
 {id:"x_accuracy",name:"X Accuracy",sprite:"assets/pokemart/X_Accuracy.png",price:300,utility:true,desc:"Reroll all current draft options once."},
 {id:"guard_spec",name:"Guard Spec.",sprite:"assets/pokemart/Guard_Spec.png",price:250,utility:true,desc:"Choose one selected Pokémon. That Pokémon cannot be stolen by a Grunt."},
 {id:"dire_hit",name:"Dire Hit",sprite:"assets/pokemart/Dire_Hit.png",price:300,bonus:150,lowBst:true,postDraft:true,desc:"At draft end, choose one Pokémon below 500 BST. It gains +150 points."},
 {id:"x_all",name:"X All",sprite:"assets/pokemart/X_Accuracy.png",price:500,bonus:25,teamwide:true,desc:"When the team is complete, all six team members gain +25 points."}
];
let pokeMartUsePhaseResolved=false;
let linkCableUsesRemainingV134=2;
function pokeMartBonusMultiplier(){return selectedItem&&selectedItem.id==="ability_capsule"?2:1}
function pokeMartItemDef(id){return POKEMART_ITEMS_V134.find(x=>x.id===id)}
backpackItemDef=function(id){return pokeMartItemDef(id)}
function pokeMartIcon(item,small=false){return item&&item.sprite?`<img class="${small?'pmTinyIcon':'pmSpriteIcon'}" src="${item.sprite}" onerror="this.style.display='none'">`:(item&&item.icon)||"🎒"}
backpackLabel=function(id){const d=pokeMartItemDef(id);return d?`${pokeMartIcon(d,true)} ${d.name}`:id}
function pokeMartPointValue(item){return (item&&item.bonus?item.bonus:0)*pokeMartBonusMultiplier()}
function itemTypeText(item){return item&&item.types?item.types.map(t=>pretty(t)).join(", "):""}
function getAppliedPokeMartBonuses(p){return Array.isArray(p&&p.pokeMartBonuses)?p.pokeMartBonuses:[]}
function addPokeMartBonusToPokemon(i,item){
 const p=team[i]; if(!p||!item)return false;
 p.pokeMartBonuses=p.pokeMartBonuses||[];
 if(p.pokeMartBonuses.some(b=>b.itemId===item.id))return false;
 const bonus=pokeMartPointValue(item);
 p.pokeMartBonuses.push({itemId:item.id,label:item.name,bonus});
 addRunEvent("PokéMart",`${item.name} used on ${activePokemonName(p,i)}: +${bonus}.`,team.length||1);
 consumeBackpackItem(item.id);
 warn(`${item.name} used on ${activePokemonName(p,i)}: +${bonus}.`);
 render();
 return true;
}
function pokeMartBonusForPokemon(p,i){
 let b=getAppliedPokeMartBonuses(p).reduce((s,x)=>s+(Number(x.bonus)||0),0);
 if(uniqueBackpackItems().includes("x_all")&&isDraftComplete())b+=pokeMartPointValue(pokeMartItemDef("x_all"));
 return b;
}
function activeXItemLabelsForPokemon(p,i){
 const labels=getAppliedPokeMartBonuses(p).map(b=>`${b.label}: +${b.bonus}`);
 if(uniqueBackpackItems().includes("x_all")&&isDraftComplete())labels.push(`X All: +${pokeMartPointValue(pokeMartItemDef("x_all"))}`);
 return labels;
}
function eligibleForPokeMartItem(item){
 if(!item)return [];
 if(item.id==="x_accuracy")return currentOptions.length&&!isDraftComplete()?[-99]:[];
 if(item.id==="guard_spec")return team.map((p,i)=>p&&!p.guardedByGuardSpec?i:null).filter(i=>i!==null);
 if(item.lowBst)return isDraftComplete()?team.map((p,i)=>p&&(scoreBaseFor(p,i)<500)&&!(p.pokeMartBonuses||[]).some(b=>b.itemId===item.id)?i:null).filter(i=>i!==null):[];
 if(item.teamwide)return [];
 if(item.types)return team.map((p,i)=>{
  const types=activeTypes(p,i).map(t=>t.toLowerCase());
  return p&&types.some(t=>item.types.includes(t))&&!(p.pokeMartBonuses||[]).some(b=>b.itemId===item.id)?i:null;
 }).filter(i=>i!==null);
 return [];
}
function useBackpackItem(id,index=null){
 const item=pokeMartItemDef(id);
 if(!item||!getBackpack().includes(id))return warn("Item not in Backpack.");
 if(id==="x_accuracy"){
  if(!currentOptions.length||isDraftComplete())return warn("X Accuracy can only be used while draft options are visible.");
  consumeBackpackItem(id);
  warn("X Accuracy used: rerolling this draft.");
  generateOptions();
  return;
 }
 if(id==="x_all")return warn("X All is passive. It applies automatically once your team is complete.");
 openPokeMartUseModal(id,false);
}
function ensurePokeMartUseOverlay(){
 if(document.getElementById("pokeMartUseOverlay"))return;
 document.body.insertAdjacentHTML("beforeend",`<div id="pokeMartUseOverlay" class="useItemOverlay"><div class="useItemPanel"><div class="martHead"><div><h2 id="pokeMartUseTitle">Use Item</h2><p id="pokeMartUseText"></p></div><button class="btn btn-dark" onclick="closePokeMartUseModal()">Close</button></div><div id="pokeMartUseChoices" class="useItemGrid"></div><div class="martActions"><button class="btn btn-ghost" onclick="skipPokeMartUsePhase()">Skip Remaining PokéMart Items</button></div></div></div>`);
}
function closePokeMartUseModal(){const el=document.getElementById("pokeMartUseOverlay");if(el)el.style.display="none"}
function openPokeMartUseModal(id,phaseMode=false){
 const item=pokeMartItemDef(id); if(!item)return false;
 ensurePokeMartUseOverlay();
 const eligible=eligibleForPokeMartItem(item);
 const title=document.getElementById("pokeMartUseTitle"), text=document.getElementById("pokeMartUseText"), choices=document.getElementById("pokeMartUseChoices");
 title.innerHTML=`${pokeMartIcon(item,true)} Use ${item.name}`;
 if(id==="x_accuracy"){
  text.textContent="Reroll all current draft options once.";
  choices.innerHTML=`<button class="useTarget" onclick="useBackpackItem('x_accuracy')"><span>${pokeMartIcon(item)}</span><span><b>Reroll current options</b><br><span class="tscore">Consumes X Accuracy.</span></span></button>`;
 }else if(!eligible.length){
  text.textContent=phaseMode?"No eligible Pokémon for this item right now.":"No eligible Pokémon for this item right now.";
  choices.innerHTML=`<div class="card" style="grid-column:1/-1;box-shadow:none">No eligible target. Keep it for later or close this window.</div>`;
 }else{
  const val=pokeMartPointValue(item);
  text.textContent=item.id==="guard_spec"?"Choose one selected Pokémon to protect from Grunts.":item.lowBst?`Choose one Pokémon below 500 BST for +${val}.`:`Choose one eligible Pokémon for +${val}. Eligible types: ${itemTypeText(item)}.`;
  choices.innerHTML=eligible.map(i=>`<button class="useTarget" onclick="applyPokeMartItemToTarget('${item.id}',${i})"><img src="${currentSprite(team[i],i)||''}"><span><b>${i+1}. ${activePokemonName(team[i],i)}</b><br><span class="tscore">${activeTypes(team[i],i).join(" / ")} · ${scoreBaseFor(team[i],i)} BST</span></span></button>`).join("");
 }
 document.getElementById("pokeMartUseOverlay").style.display="block";
 return true;
}
function applyPokeMartItemToTarget(id,i){
 const item=pokeMartItemDef(id); if(!item)return;
 if(id==="guard_spec"){
  if(!team[i])return;
  team[i].guardedByGuardSpec=true;
  consumeBackpackItem(id);
  addRunEvent("PokéMart",`${activePokemonName(team[i],i)} is guarded through Guard Spec.`,team.length||1);
  warn(`${activePokemonName(team[i],i)} is guarded through Guard Spec.`);
  closePokeMartUseModal(); render(); return;
 }
 if(addPokeMartBonusToPokemon(i,item))closePokeMartUseModal();
}
function hasUsablePostDraftPokeMartItems(){
 const bag=uniqueBackpackItems();
 return bag.some(id=>{
  const item=pokeMartItemDef(id);
  return item && id!=="x_accuracy" && id!=="guard_spec" && !item.teamwide && eligibleForPokeMartItem(item).length;
 });
}
function openPokeMartUsePhase(){
 if(pokeMartUsePhaseResolved||!isDraftComplete())return false;
 if(!hasUsablePostDraftPokeMartItems()){pokeMartUsePhaseResolved=true;return false;}
 ensurePokeMartUseOverlay();
 const bag=uniqueBackpackItems().filter(id=>{
  const item=pokeMartItemDef(id);
  return item && id!=="x_accuracy" && id!=="guard_spec" && !item.teamwide && eligibleForPokeMartItem(item).length;
 });
 document.getElementById("pokeMartUseTitle").textContent="Use remaining PokéMart items";
 document.getElementById("pokeMartUseText").textContent="Before Mega Evolution, you may use unused activatable PokéMart items.";
 document.getElementById("pokeMartUseChoices").innerHTML=bag.map(id=>{
  const item=pokeMartItemDef(id);
  return `<button class="useTarget" onclick="openPokeMartUseModal('${id}',true)">${pokeMartIcon(item)}<span><b>${item.name}</b><br><span class="tscore">${item.desc}</span></span></button>`;
 }).join("");
 document.getElementById("pokeMartUseOverlay").style.display="block";
 return true;
}
function skipPokeMartUsePhase(){
 pokeMartUsePhaseResolved=true;
 closePokeMartUseModal();
 resumePostDraftPipeline();
}
continuePostDraftPipeline=async function(delay=150){
 if(postDraftPipelineRunning)return;
 postDraftPipelineRunning=true;
 await sleep(delay);
 try{
  if(pendingGrunt){postDraftPendingAfterGrunt=true;return;}
  if(openPokeMartUsePhase())return;
  const itemOpened=await openPostDraftItemModal();
  if(itemOpened)return;
  const hidden=await openHiddenQuestModal();
  if(hidden)return;
  const rotomOpened=await openRotomFormModal();
  if(rotomOpened)return;
  const megaOpened=openMegaModal();
  if(megaOpened)return;
  finishPostDraftChoices(900);
 }finally{postDraftPipelineRunning=false;}
};

const __oldRenderPokeMart_v134=renderPokeMart;
renderPokeMart=function(){
 const p=getCoinPouches(), key=coinModeKey(), bag=getBackpack();
 const coin=document.getElementById("martCoinInfo");
 const binfo=document.getElementById("martBackpackInfo");
 const lock=document.getElementById("martLockInfo");
 const items=document.getElementById("martItems");
 if(coin)coin.innerHTML=`<div class="label">${coinPouchLabel(key)} Coin Pouch</div><div class="coinRow"><span class="coinPill active">🪙 ${p[key]||0}</span><span class="coinPill">Easy ${p.easy||0}</span><span class="coinPill">Normal ${p.normal||0}</span><span class="coinPill">Master ${p.master||0}</span></div>`;
 if(binfo)binfo.innerHTML=`<div class="label">Backpack ${bag.length}/2</div><div class="backpackItems">${bag.length?bag.map((id,i)=>{const it=pokeMartItemDef(id);return `<span class="backpackItem"><span class="backpackButtonLine">${backpackLabel(id)} <button onclick="useBackpackItem('${id}',${i})">Use</button><button onclick="trashBackpackItem(${i});renderPokeMart()">×</button></span><span class="backpackItemInfo">${it?it.desc:""}</span></span>`}).join(""):`<span class="tscore">Empty.</span>`}</div>${bag.length>=2?`<div class="martLockNotice">Backpack full. Trash one item before buying another.</div>`:""}`;
 if(lock)lock.innerHTML=pokeMartVisitedThisRound?`<div class="martLockNotice">This visit is your only PokéMart visit for the current pick phase. Closing locks the shop until after you pick.</div>`:"";
 if(items)items.innerHTML=POKEMART_ITEMS_V134.map(item=>{
  const affordable=(p[key]||0)>=item.price, space=bag.length<2;
  const doubled=(selectedItem&&selectedItem.id==="ability_capsule"&&item.bonus)?` Ability Capsule: +${item.bonus*2}.`:"";
  return `<div class="martItem"><div class="martIcon">${pokeMartIcon(item)}</div><div><div class="martName">${item.name}</div><div class="martDesc">${item.desc}${doubled}</div><div class="martPrice">${item.price} ${coinPouchLabel(key)} Coins</div></div><button class="btn ${affordable&&space?"btn-dark":"btn-ghost"}" ${affordable&&space?"":"disabled"} onclick="buyPokeMartItem('${item.id}')">${space?(affordable?"Buy":"Too Poor"):"Bag Full"}</button></div>`;
 }).join("");
};
renderBackpack=function(){
 const el=document.getElementById("backpackBox"); if(!el)return;
 const bag=getBackpack();
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div><div class="backpackItems">${bag.length?bag.map((id,i)=>{const it=pokeMartItemDef(id);return `<span class="backpackItem"><span class="backpackButtonLine">${backpackLabel(id)} <button onclick="useBackpackItem('${id}',${i})">Use</button><button onclick="trashBackpackItem(${i})">×</button></span><span class="backpackItemInfo">${it?it.desc:""}</span></span>`}).join(""):`<span class="tscore">Empty. Buy PokéMart items during the draft to manipulate this run.</span>`}</div><div class="backpackHelp">Backpack starts empty on every new run. Ability Capsule doubles PokéMart point bonuses.</div>`;
};
buyPokeMartItem=function(id){
 const item=pokeMartItemDef(id); if(!item)return;
 const bag=getBackpack();
 if(bag.length>=2){warn("Backpack full. Trash one item first.");renderPokeMart();return}
 if(!spendCoins(item.price)){warn("Not enough coins in this difficulty pouch.");renderPokeMart();return}
 addBackpackItem(id);warn(`${item.name} added to Backpack.`);renderPokeMart();renderBackpack();
};

xItemBonusForPokemon=function(p,i){return pokeMartBonusForPokemon(p,i)};
pScore=function(p,i){ensureMissingNoGlitch();return scoreBaseFor(p,i)+(p&&p.shiny?SHINY_BONUS:0)+(p&&p.extraShinyBonus||0)+pokemonSpecialBonus(p)+pokemonItemBonus(p,i)+(p&&p.glitchMod||0)+pokeMartBonusForPokemon(p,i)};
pokemonItemLabels=function(p,i){
 const labels=[];
 if(lightBallAppliesTo(i))labels.push(isPikachuVariant(p)?"Light Ball: BST x2":"Light Ball: +150");
 if(p&&p.activeGmax)labels.push(`Gigantamax: +${p.activeGmax.bonus||(p.hp?Number(p.hp):150)}`);
 if(p&&p.activeOrigin)labels.push("Origin Forme: +300");
 if(p&&p.activeUnbound)labels.push("Prison Bottle: +80 BST");
 if(selectedItem&&selectedItem.id==="lucky_egg"&&isBabyPokemon(p))labels.push("Lucky Egg: +300");
 if(selectedItem&&selectedItem.id==="fossil"&&isFossilPokemon(p))labels.push("Fossil: +100");
 if(selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType))labels.push(elementalPlateType==="legend"?"Legend Plate: +50":"Plate: +50");
 activeXItemLabelsForPokemon(p,i).forEach(x=>labels.push(`PokéMart ${x}`));
 if(p&&p.guardedByGuardSpec)labels.push("Guarded through Guard Spec");
 return [...new Set(labels)];
};
pokemonItemBadges=function(p,i){return pokemonItemLabels(p,i).map(t=>`<div class="shinylabel">🎒 ${t}</div>`).join("")};
itemBonusTotal=function(){
 let bonus=0;
 if(selectedItem&&selectedItem.id==="soothe_bell")bonus+=200;
 if(selectedItem&&selectedItem.id==="expert_belt")bonus+=getTypes().length*20;
 bonus+=elementalPlateBonus();
 team.forEach((p,i)=>{bonus+=pokemonItemBonus(p,i)});
 return bonus;
};

const __maybeReplace_v134=maybeReplaceWithSpecialPokemon;
maybeReplaceWithSpecialPokemon=function(p){
 const used=usedSpecialPokemonIds();
 if(selectedItem&&selectedItem.id==="soothe_bell"&&rand(1,Math.max(1,Math.floor(SPECIAL_POKEMON_ODDS/3)))===1){
  const shadows=["shadow-lugia","shadow-mewtwo"].filter(id=>!used.has(id));
  if(shadows.length)return makeSpecialPokemon(sample(shadows,1)[0]);
 }
 if(selectedItem&&selectedItem.id==="pokedex"&&rand(1,Math.max(1,Math.floor(SPECIAL_POKEMON_ODDS/3)))===1&&!usedNames.has("rotom")){
  return {name:"rotom",displayName:"Rotom",types:["electric","ghost"],bst:440,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/479.png",megaForms:[]};
 }
 return __maybeReplace_v134(p);
};

async function tradePokemonWithLinkCable(i){
 if(!(selectedItem&&selectedItem.id==="link_cable")||linkCableUsesRemainingV134<=0||!team[i])return;
 const old=team[i];
 let available=poolNames.filter(n=>!usedNames.has(n)&&n!==old.name&&n!=="giratina-origin");
 let replacement=normalizeFallback(FALLBACK_POOL.find(p=>!usedNames.has(p.name))||FALLBACK_POOL[0]);
 try{replacement=await enrichMega(await fetchPokemon(sample(available,1)[0]||"pikachu"));}catch(e){}
 usedNames.delete(old.name);
 team[i]=addMegaFormsForSpecial(maybeReplaceWithSpecialPokemon(replacement));
 usedNames.add(team[i].name);
 linkCableUsesRemainingV134--;
 addRunEvent("Item",`Link Cable traded ${old.displayName} for ${team[i].displayName}.`,team.length||1);
 warn(`Link Cable trade complete: ${old.displayName} → ${team[i].displayName}.`);
 closePokeMartUseModal();
 certificateAssetPreparationPromise=null;
 render();
 if(team.length<ROUNDS&&!currentOptions.length)await generateOptions();
}
function openLinkCableUseModal(){
 if(!(selectedItem&&selectedItem.id==="link_cable")||linkCableUsesRemainingV134<=0||!team.length)return false;
 ensurePokeMartUseOverlay();
 document.getElementById("pokeMartUseTitle").textContent="Use Link Cable";
 document.getElementById("pokeMartUseText").textContent=`Trade up to two selected Pokémon for random different Pokémon. Uses remaining: ${linkCableUsesRemainingV134}.`;
 document.getElementById("pokeMartUseChoices").innerHTML=team.map((p,i)=>`<button class="useTarget" onclick="tradePokemonWithLinkCable(${i})"><img src="${currentSprite(p,i)||''}"><span><b>${i+1}. ${activePokemonName(p,i)}</b><br><span class="tscore">Trade for a random different Pokémon.</span></span></button>`).join("");
 document.getElementById("pokeMartUseOverlay").style.display="block";
 return true;
}
function ensureTrainerItemActionsV134(){
 let side=document.querySelector(".side.card");
 if(!side)return;
 let panel=document.getElementById("trainerActionPanel");
 if(!panel){side.insertAdjacentHTML("beforeend",`<div id="trainerActionPanel" class="trainerActionPanel"></div>`);panel=document.getElementById("trainerActionPanel");}
 let html="";
 if(selectedItem&&selectedItem.id==="link_cable"&&team.length&&linkCableUsesRemainingV134>0)html+=`<div class="label">Trainer Item</div><button class="btn btn-ghost" onclick="openLinkCableUseModal()">🔌 Use Link Cable (${linkCableUsesRemainingV134} left)</button>`;
 if(html)panel.innerHTML=html;else panel.innerHTML="";
}
const __render_v134=render;
render=function(){__render_v134();ensureTrainerItemActionsV134();renderBackpack&&renderBackpack();};

const __restart_v134=restartGame;
restartGame=function(){pokeMartUsePhaseResolved=false;linkCableUsesRemainingV134=2;return __restart_v134();};


/* ===== v13.4.1 Item Rework Override Fix ===== */
activeXItemLabelsForPokemon=function(p,i){
 const labels=getAppliedPokeMartBonuses(p).map(b=>`${b.label}: +${b.bonus}`);
 if(uniqueBackpackItems().includes("x_all")&&isDraftComplete())labels.push(`X All: +${pokeMartPointValue(pokeMartItemDef("x_all"))}`);
 return labels;
};
useBackpackItem=function(id,index=null){
 const item=pokeMartItemDef(id);
 if(!item||!getBackpack().includes(id))return warn("Item not in Backpack.");
 if(id==="x_accuracy"){
  if(!currentOptions.length||isDraftComplete())return warn("X Accuracy can only be used while draft options are visible.");
  consumeBackpackItem(id);
  warn("X Accuracy used: rerolling this draft.");
  generateOptions();
  return;
 }
 if(id==="x_all")return warn("X All is passive. It applies automatically once your team is complete.");
 openPokeMartUseModal(id,false);
};
pokemonItemLabels=function(p,i){
 const labels=[];
 if(lightBallAppliesTo(i))labels.push(isPikachuVariant(p)?"Light Ball: BST x2":"Light Ball: +150");
 if(p&&p.activeGmax)labels.push(`Gigantamax: +${p.activeGmax.bonus||(p.hp?Number(p.hp):150)}`);
 if(p&&p.activeOrigin)labels.push("Origin Forme: +300");
 if(p&&p.activeUnbound)labels.push("Prison Bottle: +80 BST");
 if(selectedItem&&selectedItem.id==="lucky_egg"&&isBabyPokemon(p))labels.push("Lucky Egg: +300");
 if(selectedItem&&selectedItem.id==="fossil"&&isFossilPokemon(p))labels.push("Fossil: +100");
 if(selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType))labels.push(elementalPlateType==="legend"?"Legend Plate: +50":"Plate: +50");
 activeXItemLabelsForPokemon(p,i).forEach(x=>labels.push(`PokéMart ${x}`));
 if(p&&p.guardedByGuardSpec)labels.push("Guarded through Guard Spec");
 return [...new Set(labels)];
};
pokemonItemBadges=function(p,i){return pokemonItemLabels(p,i).map(t=>`<div class="shinylabel">🎒 ${t}</div>`).join("")};


/* ===== v13.4.2 Item Text / Codex / Player Layout Patch ===== */
const STARTING_ITEM_UPDATES_V1342={
 ability_capsule:"All PokéMart items grant double bonus points for this run. Does not affect X Accuracy or Guard Spec.",
 soothe_bell:"Adds +200 to final League Power. Triples the chance to encounter Shadow Pokémon. Can purify Shadow Pokémon for the purification quest.",
 pokedex:"Once during the draft, reveal the BST of all six Pokémon options. Triple the chance to encounter Rotom. After the Rotom Pokédex quest, usable every round.",
 link_cable:"Trade up to two selected Pokémon for random different Pokémon during the draft or before Mega Evolution.",
 shiny_charm:"Triples shiny odds. Shiny chance becomes 1/256 instead of 1/1024.",
 evolution_stone:"After the draft, evolve one eligible selected Pokémon. The evolved Pokémon's BST counts.",
 escape_rope:"During a Grunt ambush, unlocks Escape Safely. No Pokémon is stolen.",
 master_ball:"One random draft phase becomes legendary-only options.",
 elemental_plate:"Choose one Pokémon type, or Legend Plate. Matching Pokémon add +50 League Power, capped at +300.",
 focus_sash:"Once, if you fail a League battle by 100 points or less, you still clear it.",
 expert_belt:"Adds +20 per unique active type. Mega Evolution type changes count.",
 rainbow_feather:"Transforms Vaporeon, Flareon, or Jolteon into Suicune, Entei, or Raikou. Grants +300 quest bonus.",
 gigantamax_potion:"After the draft, turn one eligible Pokémon into its Gigantamax form. Doubles HP contribution, fallback +150.",
 amulet_coin:"Doubles the activated Team Concept bonus. Can trigger Jackpot with Gimmighoul or Gholdengo.",
 repel:"One time: replace the three lowest-BST options from the current draft with new rolls.",
 dna_splicers:"One draft phase guarantees Kyurem and boosts Reshiram/Zekrom odds.",
 fossil:"One draft phase becomes fossil-only. Fossil Pokémon grant +100 each.",
 lucky_egg:"One draft phase becomes baby-only. Baby Pokémon grant +300 each.",
 light_ball:"Choose one Electric Pokémon. Non-Pikachu Electric Pokémon gain +150; Pikachu variants have their BST doubled.",
 origin_orb:"Dialga, Palkia and Giratina can transform into Origin Forme. +300 each.",
 prison_bottle:"Hoopa unlocks Hoopa Unbound, gains +80 BST, and completes a hidden quest."
};
function applyStartingItemTextUpdatesV1342(){
 if(typeof ITEM_POOL==="undefined")return;
 ITEM_POOL.forEach(i=>{if(STARTING_ITEM_UPDATES_V1342[i.id])i.desc=STARTING_ITEM_UPDATES_V1342[i.id];});
}
applyStartingItemTextUpdatesV1342();

function itemIconForCodex(i){
 return i&&i.icon?`<span class="itemIconInline">${i.icon}</span>`:"";
}
function pokeMartIconForCodex(item){
 return item&&item.sprite?`<img class="codexPmIcon" src="${item.sprite}" onerror="this.style.display='none'">`:"";
}
codexHtml=function(){
 applyStartingItemTextUpdatesV1342();
 const itemLines=ITEM_POOL.map(i=>`<li>${itemIconForCodex(i)}<b>${i.name}</b>: ${i.desc}</li>`).join("");
 const martList=(typeof POKEMART_ITEMS_V134!=="undefined"?POKEMART_ITEMS_V134:[]).map(i=>`<li>${pokeMartIconForCodex(i)}<b>${i.name}</b> (${i.price} coins): ${i.desc}${selectedItem&&selectedItem.id==="ability_capsule"&&i.bonus?` Ability Capsule bonus: +${i.bonus*2}.`:""}</li>`).join("");
 return `
 <section class="codexCard"><h3>${profTitle("Oak","Core Flow")}</h3><ul>
  <li>Draft 6 Pokémon from blind random rolls.</li>
  <li>After each pick, immediate quests and events are checked.</li>
  <li>Post-draft order: PokéMart item cleanup → trainer item checks → hidden quests → Rotom form → Mega Evolution → battle simulation → certificate.</li>
  <li>One Mega Evolution per team. Primals are not Mega Evolutions.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Rowan","Scoring")}</h3><ul>
  <li>Team score = active BST + shiny bonuses + form changes + applied PokéMart bonuses.</li>
  <li>8+ unique active types grants +100.</li>
  <li>Item bonus, quest bonus and concept bonus are shown separately.</li>
  <li>PokéMart coins are earned after completed runs: 10% of your final score goes into the current difficulty pouch.</li>
  <li>Easy: every challenger requires 500 fewer points. Normal: standard climb. Master: ultimate challenge after beating Normal once.</li>
  <li>Some quests are hidden. You are not expected to know all of them at the start. Discover them by experimenting.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Juniper","PokéMart & Coins")}</h3><ul>
  <li><b>Coins:</b> After a completed run, you earn coins equal to 10% of your final League Power.</li>
  <li><b>Separate pouches:</b> Easy, Normal and Master each have their own Coin Pouch. Only the active difficulty pouch is shown in the trainer panel.</li>
  <li><b>PokéMart visits:</b> You can visit the PokéMart once per pick phase. The last chance is before choosing the sixth Pokémon.</li>
  <li><b>Backpack:</b> Bought PokéMart items go into your Backpack. It holds 2 items and starts empty on every new run.</li>
  <li><b>X-Items:</b> Most X-Items target one eligible Pokémon. X All is the team-wide exception. Ability Capsule doubles PokéMart point bonuses, but not X Accuracy or Guard Spec.</li>
  <li><b>One-run tools:</b> PokéMart items are not permanent upgrades. Coins persist, Backpack items do not.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Elm","Trainer Items")}</h3><ul>${itemLines}</ul></section>
 <section class="codexCard"><h3>${profTitle("Kukui","PokéMart Items")}</h3><ul>${martList}</ul></section>
 <section class="codexCard"><h3>${profTitle("Sycamore","Discovered Quests")}</h3><ul>${discoveredQuestCodex()}</ul></section>
 <section class="codexCard"><h3>${profTitle("Birch","Team Concepts")}</h3><ul>
  <li>Strong type concepts grant +50 per fitting Pokémon at 3+ matches.</li>
  <li>Ultra Beasts, Regi Core, Paradox teams and Forces of Nature are team concepts.</li><li>Starter Squad is a team concept at 3+ starter-family Pokémon.</li><li>All four Tapus trigger Alola Protector Team for +1000.</li><li>Regional, legendary, baby, dog, horse, grunt-like and other concepts can appear.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Sonia","Events")}</h3><ul>
  <li>One crime organization ambush may occur during the draft.</li>
  <li>Battle and win to protect your team. Run and you may lose one random unguarded selected Pokémon.</li>
  <li>Guard Spec. can protect a chosen Pokémon from theft.</li>
  <li>Escape Rope can bypass the theft safely.</li>
 </ul></section>
 `;
};

function renderTopDifficultyControlV1342(){
 const sel=document.getElementById("difficultyTopSelect");
 if(!sel)return;
 const locked=!isMasterUnlocked();
 sel.innerHTML=`<option value="easy">Easy Mode</option><option value="normal">Normal Mode</option><option value="master" ${locked?"disabled":""}>${locked?"🔒 ":""}Master Mode</option>`;
 sel.value=difficultyMode;
 sel.title=locked?"Master Mode: Beat Normal once to unlock.":"Difficulty Mode";
}
const __setDifficultyMode_v1342=setDifficultyMode;
setDifficultyMode=function(mode){
 __setDifficultyMode_v1342(mode);
 renderTopDifficultyControlV1342();
 renderCoinCase();
};
renderDifficultyButtons=function(){
 const legacy=document.getElementById("difficultyButtons");
 if(legacy)legacy.innerHTML="";
 renderTopDifficultyControlV1342();
};

function ensureTrainerPanelEconomyLayoutV1342(){
 const side=document.querySelector(".side.card");
 if(!side)return;
 const trainerBox=side.querySelector(".trainerbox");
 if(!trainerBox)return;

 let coin=document.getElementById("coinCaseBox");
 if(!coin){
  coin=document.createElement("div");
  coin.id="coinCaseBox";
 }
 coin.className="coinCaseBox sideUtilityPanel";
 if(coin.parentElement!==side || trainerBox.nextSibling!==coin){
  side.insertBefore(coin, trainerBox.nextSibling);
 }

 let backpack=document.getElementById("backpackBox");
 if(!backpack){
  backpack=document.createElement("div");
  backpack.id="backpackBox";
 }
 backpack.className="backpackBox sideUtilityPanel";
 if(backpack.parentElement!==side || coin.nextSibling!==backpack){
  side.insertBefore(backpack, coin.nextSibling);
 }

 let btn=document.getElementById("pokeMartBtn");
 let note=document.getElementById("pokeMartRoundNote");
 if(!btn){
  btn=document.createElement("button");
  btn.id="pokeMartBtn";
  btn.className="btn btn-dark";
  btn.style.width="100%";
  btn.style.marginTop="10px";
  btn.setAttribute("onclick","openPokeMart()");
  btn.textContent="🛒 Visit PokéMart";
 }
 if(!note){
  note=document.createElement("div");
  note.id="pokeMartRoundNote";
  note.className="tscore";
  note.style.marginTop="8px";
 }
 if(btn.parentElement!==side || backpack.nextSibling!==btn)side.insertBefore(btn, backpack.nextSibling);
 if(note.parentElement!==side || btn.nextSibling!==note)side.insertBefore(note, btn.nextSibling);

 renderCoinCase();
 renderBackpack();
 renderMartButton&&renderMartButton();
}
renderCoinCase=function(){
 const el=document.getElementById("coinCaseBox");
 if(!el)return;
 const p=getCoinPouches();
 const key=coinModeKey();
 el.innerHTML=`<div class="label">Coin Case</div><div class="coinRow"><span class="coinPill active">🪙 ${coinPouchLabel(key)}: ${p[key]||0}</span></div>`;
};
ensureEconomyUi=function(){
 ensureTrainerPanelEconomyLayoutV1342();
 renderCoinCase();
};
const __ensureMartUi_v1342=ensureMartUi;
ensureMartUi=function(){
 __ensureMartUi_v1342();
 ensureTrainerPanelEconomyLayoutV1342();
};
const __render_layout_v1342=render;
render=function(){
 applyStartingItemTextUpdatesV1342();
 __render_layout_v1342();
 ensureTrainerPanelEconomyLayoutV1342();
 renderTopDifficultyControlV1342();
};
const __boot_layout_v1342=boot;
boot=async function(){
 await __boot_layout_v1342();
 applyStartingItemTextUpdatesV1342();
 ensureTrainerPanelEconomyLayoutV1342();
 renderTopDifficultyControlV1342();
};

const __renderItemSelection_v1342=renderItemSelection;
renderItemSelection=function(){
 applyStartingItemTextUpdatesV1342();
 __renderItemSelection_v1342();
};


/* ===== v13.4.3 Trainer Panel Order + Link Cable Post-Draft ===== */
function trainerConfigPanelV1343(){
 const side=document.querySelector(".side.card");
 if(!side)return null;
 let panel=document.getElementById("trainerConfigPanel");
 if(panel)return panel;
 const trainerBox=side.querySelector(".trainerbox");
 if(trainerBox){
  let node=trainerBox.nextElementSibling;
  while(node){
   if(node.classList&&node.classList.contains("card")){
    node.id="trainerConfigPanel";
    return node;
   }
   node=node.nextElementSibling;
  }
 }
 return null;
}

function linkCablePostDraftAvailableV1343(){
 return selectedItem&&selectedItem.id==="link_cable"&&linkCableUsesRemainingV134>0&&team.length>0&&isDraftComplete();
}

function ensureTrainerItemActionsV134(){
 const side=document.querySelector(".side.card");
 if(!side)return;
 const config=trainerConfigPanelV1343();
 let panel=document.getElementById("trainerActionPanel");
 if(!panel){
  panel=document.createElement("div");
  panel.id="trainerActionPanel";
  panel.className="trainerActionPanel";
 }
 let html="";
 if(selectedItem&&selectedItem.id==="link_cable"&&team.length&&linkCableUsesRemainingV134>0){
  const phase=isDraftComplete()?"Before Mega Evolution":"Trainer Item";
  html+=`<div class="label">${phase}</div><button class="btn btn-ghost" onclick="openLinkCableUseModal()">🔌 Use Link Cable (${linkCableUsesRemainingV134} left)</button>`;
 }
 panel.innerHTML=html;
 panel.style.display=html?"block":"none";
 const anchor=config||side.querySelector(".trainerbox");
 if(anchor&&panel.parentElement!==side)side.insertBefore(panel,anchor.nextSibling);
 else if(anchor&&anchor.nextSibling!==panel)side.insertBefore(panel,anchor.nextSibling);
}

function ensureTrainerPanelEconomyLayoutV1342(){
 const side=document.querySelector(".side.card");
 if(!side)return;
 const trainerBox=side.querySelector(".trainerbox");
 if(!trainerBox)return;
 const config=trainerConfigPanelV1343();
 ensureTrainerItemActionsV134();

 let action=document.getElementById("trainerActionPanel");
 let coin=document.getElementById("coinCaseBox");
 if(!coin){coin=document.createElement("div");coin.id="coinCaseBox";}
 coin.className="coinCaseBox sideUtilityPanel";
 const coinAnchor=(action&&action.parentElement===side&&action.style.display!=="none")?action:(config||trainerBox);
 if(coin.parentElement!==side || coinAnchor.nextSibling!==coin)side.insertBefore(coin, coinAnchor.nextSibling);

 let backpack=document.getElementById("backpackBox");
 if(!backpack){backpack=document.createElement("div");backpack.id="backpackBox";}
 backpack.className="backpackBox sideUtilityPanel";
 if(backpack.parentElement!==side || coin.nextSibling!==backpack)side.insertBefore(backpack, coin.nextSibling);

 let btn=document.getElementById("pokeMartBtn");
 let note=document.getElementById("pokeMartRoundNote");
 if(!btn){
  btn=document.createElement("button");
  btn.id="pokeMartBtn";
  btn.className="btn btn-dark";
  btn.style.width="100%";
  btn.style.marginTop="10px";
  btn.setAttribute("onclick","openPokeMart()");
  btn.textContent="🛒 Visit PokéMart";
 }
 if(!note){
  note=document.createElement("div");
  note.id="pokeMartRoundNote";
  note.className="tscore";
  note.style.marginTop="8px";
 }
 if(btn.parentElement!==side || backpack.nextSibling!==btn)side.insertBefore(btn, backpack.nextSibling);
 if(note.parentElement!==side || btn.nextSibling!==note)side.insertBefore(note, btn.nextSibling);

 renderCoinCase();
 renderBackpack();
 if(typeof renderMartButton==="function")renderMartButton();
}

function hasUsablePostDraftPokeMartItems(){
 const bag=uniqueBackpackItems();
 const martUsable=bag.some(id=>{
  const item=pokeMartItemDef(id);
  return item && id!=="x_accuracy" && id!=="guard_spec" && !item.teamwide && eligibleForPokeMartItem(item).length;
 });
 return martUsable || linkCablePostDraftAvailableV1343();
}

function openPokeMartUsePhase(){
 if(pokeMartUsePhaseResolved||!isDraftComplete())return false;
 if(!hasUsablePostDraftPokeMartItems()){pokeMartUsePhaseResolved=true;return false;}
 ensurePokeMartUseOverlay();
 const bag=uniqueBackpackItems().filter(id=>{
  const item=pokeMartItemDef(id);
  return item && id!=="x_accuracy" && id!=="guard_spec" && !item.teamwide && eligibleForPokeMartItem(item).length;
 });
 const linkHtml=linkCablePostDraftAvailableV1343()?`<button class="useTarget" onclick="openLinkCableUseModal()"><span style="font-size:32px">🔌</span><span><b>Link Cable</b><br><span class="tscore">Trade one selected Pokémon before Mega Evolution. Uses remaining: ${linkCableUsesRemainingV134}.</span></span></button>`:"";
 document.getElementById("pokeMartUseTitle").textContent="Use remaining items";
 document.getElementById("pokeMartUseText").textContent="Before Mega Evolution, you may use remaining activatable PokéMart items and Link Cable trades.";
 document.getElementById("pokeMartUseChoices").innerHTML=linkHtml+bag.map(id=>{
  const item=pokeMartItemDef(id);
  return `<button class="useTarget" onclick="openPokeMartUseModal('${id}',true)">${pokeMartIcon(item)}<span><b>${item.name}</b><br><span class="tscore">${item.desc}</span></span></button>`;
 }).join("");
 document.getElementById("pokeMartUseOverlay").style.display="block";
 return true;
}

const __tradePokemonWithLinkCable_v1343=tradePokemonWithLinkCable;
tradePokemonWithLinkCable=async function(i){
 await __tradePokemonWithLinkCable_v1343(i);
 if(isDraftComplete()){
  setTimeout(()=>openPokeMartUsePhase(),180);
 }
};

const __render_layout_order_v1343=render;
render=function(){
 __render_layout_order_v1343();
 ensureTrainerItemActionsV134();
 ensureTrainerPanelEconomyLayoutV1342();
};
const __boot_layout_order_v1343=boot;
boot=async function(){
 await __boot_layout_order_v1343();
 ensureTrainerItemActionsV134();
 ensureTrainerPanelEconomyLayoutV1342();
};


/* ===== v13.4.4 Backpack Toolbox Layout ===== */
trainerItemToolHtmlV1344=function(){
 if(selectedItem&&selectedItem.id==="link_cable"&&team.length&&linkCableUsesRemainingV134>0){
  return `<div class="backpackToolSection">
    <div class="label">Trainer Item</div>
    <div class="backpackTrainerItem">
      <div>
        <div class="toolName">🔌 Link Cable</div>
        <div class="toolDesc">Trade one selected Pokémon for a random different Pokémon. Uses remaining: ${linkCableUsesRemainingV134}.</div>
      </div>
      <button class="btn btn-ghost" onclick="openLinkCableUseModal()">Use</button>
    </div>
  </div>`;
 }
 return "";
};
activeCoinCaseHtmlV1344=function(){
 const p=getCoinPouches();
 const key=coinModeKey();
 return `<div class="backpackToolSection">
   <div class="label">Coin Case</div>
   <div class="backpackCoinLine"><span class="coinPill active">🪙 ${coinPouchLabel(key)}: ${p[key]||0}</span></div>
 </div>`;
};
renderBackpack=function(){
 const el=document.getElementById("backpackBox"); if(!el)return;
 const bag=getBackpack();
 const itemsHtml=bag.length?bag.map((id,i)=>{
  const it=pokeMartItemDef(id);
  return `<span class="backpackItem">
    <span class="backpackButtonLine">${backpackLabel(id)} <button onclick="useBackpackItem('${id}',${i})">Use</button><button onclick="trashBackpackItem(${i})">×</button></span>
    <span class="backpackItemInfo">${it?it.desc:""}</span>
  </span>`;
 }).join(""):`<span class="tscore">Empty. Buy PokéMart items during the draft to manipulate this run.</span>`;
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div>
 ${activeCoinCaseHtmlV1344()}
 ${trainerItemToolHtmlV1344()}
 <div class="backpackSubLabel">PokéMart Items</div>
 <div class="backpackItems">${itemsHtml}</div>
 <div class="backpackHelp">Backpack capacity only counts bought PokéMart items. Trainer Items do not use Backpack slots. Backpack starts empty on every new run. Ability Capsule doubles PokéMart point bonuses.</div>`;
};
renderCoinCase=function(){
 const el=document.getElementById("coinCaseBox");
 if(el)el.innerHTML="";
 renderBackpack();
};
ensureTrainerItemActionsV134=function(){
 const panel=document.getElementById("trainerActionPanel");
 if(panel){panel.innerHTML="";panel.style.display="none";}
 renderBackpack();
};
ensureTrainerPanelEconomyLayoutV1342=function(){
 const side=document.querySelector(".side.card");
 if(!side)return;
 const trainerBox=side.querySelector(".trainerbox");
 if(!trainerBox)return;
 const config=(typeof trainerConfigPanelV1343==="function")?trainerConfigPanelV1343():document.getElementById("trainerConfigPanel");
 let backpack=document.getElementById("backpackBox");
 if(!backpack){backpack=document.createElement("div");backpack.id="backpackBox";}
 backpack.className="backpackBox sideUtilityPanel";
 const anchor=config||trainerBox;
 if(backpack.parentElement!==side || anchor.nextSibling!==backpack)side.insertBefore(backpack, anchor.nextSibling);

 let btn=document.getElementById("pokeMartBtn");
 let note=document.getElementById("pokeMartRoundNote");
 if(!btn){
  btn=document.createElement("button");
  btn.id="pokeMartBtn";
  btn.className="btn btn-dark";
  btn.style.width="100%";
  btn.style.marginTop="10px";
  btn.setAttribute("onclick","openPokeMart()");
  btn.textContent="🛒 Visit PokéMart";
 }
 if(!note){
  note=document.createElement("div");
  note.id="pokeMartRoundNote";
  note.className="tscore";
  note.style.marginTop="8px";
 }
 if(btn.parentElement!==side || backpack.nextSibling!==btn)side.insertBefore(btn, backpack.nextSibling);
 if(note.parentElement!==side || btn.nextSibling!==note)side.insertBefore(note, btn.nextSibling);

 const coin=document.getElementById("coinCaseBox");
 if(coin)coin.style.display="none";
 const action=document.getElementById("trainerActionPanel");
 if(action)action.style.display="none";

 renderBackpack();
 if(typeof renderMartButton==="function")renderMartButton();
};
const __render_backpack_toolbox_v1344=render;
render=function(){
 __render_backpack_toolbox_v1344();
 ensureTrainerPanelEconomyLayoutV1342();
};
const __boot_backpack_toolbox_v1344=boot;
boot=async function(){
 await __boot_backpack_toolbox_v1344();
 ensureTrainerPanelEconomyLayoutV1342();
};


/* ===== v13.4.6 Compact Trainer + Side Team Column ===== */
let trainerConfigManualExpandedV1346=false;

function trainerSetupSummaryV1346(){
 const gender=trainerType?pretty(trainerType):"No gender";
 const model=trainer?trainer.label:"No trainer";
 const custom=(customTrainerName||"").trim();
 return `${gender} · ${model}${custom?` · ${custom}`:""}`;
}
function ensureTrainerConfigCollapsibleV1346(){
 const panel=document.getElementById("trainerConfigPanel");
 if(!panel || panel.dataset.collapsibleReady==="1")return;
 const kids=[...panel.childNodes];
 const body=document.createElement("div");
 body.className="trainerConfigBody";
 kids.forEach(k=>body.appendChild(k));
 const top=document.createElement("div");
 top.className="trainerSetupTop";
 top.innerHTML=`<div><div class="label">Trainer Setup</div><div id="trainerSetupSummary" class="trainerSetupSummary"></div></div><button type="button" id="trainerSetupToggle" class="trainerSetupToggle" onclick="toggleTrainerSetupV1346()">Collapse</button>`;
 panel.appendChild(top);
 panel.appendChild(body);
 panel.dataset.collapsibleReady="1";
}
function updateTrainerSetupCollapseV1346(){
 const panel=document.getElementById("trainerConfigPanel");
 if(!panel)return;
 ensureTrainerConfigCollapsibleV1346();
 const summary=document.getElementById("trainerSetupSummary");
 if(summary)summary.textContent=trainerSetupSummaryV1346();
 const shouldCollapse=!!(trainer&&selectedItem)&&!trainerConfigManualExpandedV1346;
 panel.classList.toggle("collapsed",shouldCollapse);
 const btn=document.getElementById("trainerSetupToggle");
 if(btn)btn.textContent=shouldCollapse?"Change":"Collapse";
}
function toggleTrainerSetupV1346(){
 const panel=document.getElementById("trainerConfigPanel");
 if(!panel)return;
 const isCollapsed=panel.classList.contains("collapsed");
 trainerConfigManualExpandedV1346=isCollapsed;
 panel.classList.toggle("collapsed",!isCollapsed);
 const btn=document.getElementById("trainerSetupToggle");
 if(btn)btn.textContent=!isCollapsed?"Change":"Collapse";
 updateTrainerSetupCollapseV1346();
}

const __selectItem_compact_v1346=selectItem;
selectItem=function(idx){
 __selectItem_compact_v1346(idx);
 trainerConfigManualExpandedV1346=false;
 setTimeout(updateTrainerSetupCollapseV1346,0);
};
const __chooseTrainerType_compact_v1346=chooseTrainerType;
chooseTrainerType=function(t){
 __chooseTrainerType_compact_v1346(t);
 setTimeout(updateTrainerSetupCollapseV1346,0);
};
if(typeof chooseTrainerName==="function"){
 const __chooseTrainerName_compact_v1346=chooseTrainerName;
 chooseTrainerName=function(label){
  __chooseTrainerName_compact_v1346(label);
  setTimeout(updateTrainerSetupCollapseV1346,0);
 };
}
const __setCustomTrainerName_compact_v1346=setCustomTrainerName;
setCustomTrainerName=function(v){
 __setCustomTrainerName_compact_v1346(v);
 setTimeout(updateTrainerSetupCollapseV1346,0);
};
const __restart_compact_v1346=restartGame;
restartGame=function(){
 trainerConfigManualExpandedV1346=false;
 return __restart_compact_v1346();
};
const __render_compact_v1346=render;
render=function(){
 __render_compact_v1346();
 ensureTrainerConfigCollapsibleV1346();
 updateTrainerSetupCollapseV1346();
};
const __boot_compact_v1346=boot;
boot=async function(){
 await __boot_compact_v1346();
 ensureTrainerConfigCollapsibleV1346();
 updateTrainerSetupCollapseV1346();
};


/* ===== v13.4.9 Runtime Recovery Guard ===== */
/* If an older layout wrapper throws inside render, this keeps the game interactive instead of dying silently. */
window.addEventListener("error", function(e){
  try{
    const status=document.getElementById("status");
    if(status && !String(status.innerText||"").includes("Game error")){
      status.innerText="Game error: "+(e.message||"Unknown error")+". Please send a screenshot.";
    }
  }catch(_){}
});


/* ===== v13.5.1 Real HTML Side Columns Runtime ===== */
sideToolsColumnV1351=function(){
 return document.getElementById("trainerToolsColumn") || document.querySelector(".trainerToolsColumn") || document.querySelector(".side.card");
};
renderBackpack=function(){
 const el=document.getElementById("backpackBox"); if(!el)return;
 const bag=getBackpack();
 const itemsHtml=bag.length?bag.map((id,i)=>{
  const it=pokeMartItemDef(id);
  return `<span class="backpackItem">
    <span class="backpackButtonLine">${backpackLabel(id)} <button onclick="useBackpackItem('${id}',${i})">Use</button><button onclick="trashBackpackItem(${i})">×</button></span>
    <span class="backpackItemInfo">${it?it.desc:""}</span>
  </span>`;
 }).join(""):`<span class="tscore">Empty. Buy PokéMart items during the draft to manipulate this run.</span>`;
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div>
 ${activeCoinCaseHtmlV1344()}
 ${trainerItemToolHtmlV1344()}
 <div class="backpackSubLabel">PokéMart Items</div>
 <div class="backpackItems">${itemsHtml}</div>
 <div class="backpackHelp">Backpack capacity only counts bought PokéMart items. Trainer Items do not use Backpack slots. Backpack starts empty on every new run. Ability Capsule doubles PokéMart point bonuses.</div>`;
};
ensureTrainerPanelEconomyLayoutV1342=function(){
 const side=document.querySelector(".side.card");
 if(!side)return;
 const tools=sideToolsColumnV1351();
 if(!tools)return;

 let backpack=document.getElementById("backpackBox");
 if(!backpack){
  backpack=document.createElement("div");
  backpack.id="backpackBox";
 }
 backpack.className="backpackBox sideUtilityPanel";

 let btn=document.getElementById("pokeMartBtn");
 let note=document.getElementById("pokeMartRoundNote");
 if(!btn){
  btn=document.createElement("button");
  btn.id="pokeMartBtn";
  btn.className="btn btn-dark";
  btn.style.width="100%";
  btn.style.marginTop="10px";
  btn.setAttribute("onclick","openPokeMart()");
  btn.textContent="🛒 Visit PokéMart";
 }
 if(!note){
  note=document.createElement("div");
  note.id="pokeMartRoundNote";
  note.className="tscore";
  note.style.marginTop="8px";
 }

 if(backpack.parentElement!==tools)tools.appendChild(backpack);
 if(btn.parentElement!==tools)tools.appendChild(btn);
 if(note.parentElement!==tools)tools.appendChild(note);

 const coin=document.getElementById("coinCaseBox");
 if(coin)coin.style.display="none";
 const action=document.getElementById("trainerActionPanel");
 if(action)action.style.display="none";

 renderBackpack();
 if(typeof renderMartButton==="function")renderMartButton();
};
ensureTrainerItemActionsV134=function(){
 const panel=document.getElementById("trainerActionPanel");
 if(panel){panel.innerHTML="";panel.style.display="none";}
 renderBackpack();
};
renderCoinCase=function(){
 const el=document.getElementById("coinCaseBox");
 if(el)el.innerHTML="";
 renderBackpack();
};
const __render_side_html_v1351=render;
render=function(){
 __render_side_html_v1351();
 ensureTrainerPanelEconomyLayoutV1342();
};
const __boot_side_html_v1351=boot;
boot=async function(){
 await __boot_side_html_v1351();
 ensureTrainerPanelEconomyLayoutV1342();
};


/* ===== v13.5.2 Trainer Edit State + Multi Item Phase Fix ===== */
safeTrainerRenderV1352=function(){
 render();
 setTimeout(()=>{try{updateTrainerSetupCollapseV1346()}catch(e){}},0);
};
chooseTrainerType=function(type){
 trainerType=type;
 const list=(TRAINERS[type]&&TRAINERS[type].length)?TRAINERS[type]:TRAINERS.boy;
 const firstTrainer=list[0];
 trainer={label:firstTrainer[0],modelName:firstTrainer[0],sprite:randomTrainerSprite(firstTrainer[0],firstTrainer[1])};
 if(typeof addRunEvent==="function")addRunEvent("Trainer",`Trainer setup changed to ${pretty(type)} / ${trainer.label}.`,team.length||1);
 safeTrainerRenderV1352();
};
chooseTrainerModel=function(i){
 const list=(TRAINERS[trainerType]&&TRAINERS[trainerType].length)?TRAINERS[trainerType]:TRAINERS.boy;
 const picked=list[i]||list[0];
 trainer={label:picked[0],modelName:picked[0],sprite:randomTrainerSprite(picked[0],picked[1])};
 if(typeof addRunEvent==="function")addRunEvent("Trainer",`Trainer model changed to ${trainer.label}.`,team.length||1);
 safeTrainerRenderV1352();
};
setCustomTrainerName=function(v){
 customTrainerName=String(v||"").trim().slice(0,24);
 const input=document.getElementById("customTrainerNameInput");
 if(input&&input.value!==customTrainerName)input.value=customTrainerName;
 const nameEl=document.getElementById("playerName");
 if(nameEl)nameEl.textContent=trainer?displayTrainerName():"Not selected";
 setTimeout(()=>{try{updateTrainerSetupCollapseV1346()}catch(e){}},0);
};

finishOrContinuePokeMartUsePhaseV1352=function(){
 if(isDraftComplete()&&!pokeMartUsePhaseResolved){
  if(hasUsablePostDraftPokeMartItems()){
   setTimeout(()=>openPokeMartUsePhase(),120);
  }else{
   pokeMartUsePhaseResolved=true;
   closePokeMartUseModal();
   setTimeout(()=>resumePostDraftPipeline(),120);
  }
 }else{
  closePokeMartUseModal();
 }
};

applyPokeMartItemToTarget=function(id,i){
 const item=pokeMartItemDef(id); if(!item)return;
 if(id==="guard_spec"){
  if(!team[i])return;
  team[i].guardedByGuardSpec=true;
  consumeBackpackItem(id);
  addRunEvent("PokéMart",`${activePokemonName(team[i],i)} is guarded through Guard Spec.`,team.length||1);
  warn(`${activePokemonName(team[i],i)} is guarded through Guard Spec.`);
  render();
  finishOrContinuePokeMartUsePhaseV1352();
  return;
 }
 if(addPokeMartBonusToPokemon(i,item)){
  finishOrContinuePokeMartUsePhaseV1352();
 }
};


/* ===== v13.5.3 Backpack Item Eligibility + Manual Skip Fix ===== */
let pokeMartUseModalPhaseModeV1353=false;

isBackpackItemUsableNowV1353=function(id){
 const item=pokeMartItemDef(id);
 if(!item)return false;
 if(id==="x_accuracy")return !!(currentOptions&&currentOptions.length&&!isDraftComplete());
 if(id==="x_all")return false;
 if(item.teamwide)return false;
 if(id==="guard_spec")return eligibleForPokeMartItem(item).length>0;
 if(item.lowBst)return isDraftComplete()&&eligibleForPokeMartItem(item).length>0;
 return eligibleForPokeMartItem(item).length>0;
};

backpackItemStateLabelV1353=function(id){
 const item=pokeMartItemDef(id);
 if(!item)return "Unknown";
 if(id==="x_all"||item.teamwide)return "Passive";
 if(id==="x_accuracy"&&isDraftComplete())return "Draft only";
 if(item.lowBst&&!isDraftComplete())return "Draft-end";
 if(!isBackpackItemUsableNowV1353(id))return "No target";
 return "Ready";
};

renderBackpack=function(){
 const el=document.getElementById("backpackBox"); if(!el)return;
 const bag=getBackpack();
 const itemsHtml=bag.length?bag.map((id,i)=>{
  const it=pokeMartItemDef(id);
  const usable=isBackpackItemUsableNowV1353(id);
  const state=backpackItemStateLabelV1353(id);
  const useButton=usable?`<button onclick="useBackpackItem('${id}',${i})">Use</button>`:`<span class="miniTag">${state}</span>`;
  return `<span class="backpackItem">
    <span class="backpackButtonLine">${backpackLabel(id)} ${useButton}<button onclick="trashBackpackItem(${i})">×</button></span>
    <span class="backpackItemInfo">${it?it.desc:""}</span>
  </span>`;
 }).join(""):`<span class="tscore">Empty. Buy PokéMart items during the draft to manipulate this run.</span>`;
 el.innerHTML=`<div class="label">Backpack ${bag.length}/2</div>
 ${activeCoinCaseHtmlV1344()}
 ${trainerItemToolHtmlV1344()}
 <div class="backpackSubLabel">PokéMart Items</div>
 <div class="backpackItems">${itemsHtml}</div>
 <div class="backpackHelp">Backpack capacity only counts bought PokéMart items. Trainer Items do not use Backpack slots. Backpack starts empty on every new run. Ability Capsule doubles PokéMart point bonuses.</div>`;
};

ensurePokeMartUseOverlay=function(){
 if(document.getElementById("pokeMartUseOverlay"))return;
 document.body.insertAdjacentHTML("beforeend",`<div id="pokeMartUseOverlay" class="useItemOverlay"><div class="useItemPanel"><div class="martHead"><div><h2 id="pokeMartUseTitle">Use Item</h2><p id="pokeMartUseText"></p></div><button class="btn btn-dark" onclick="closePokeMartUseModal()">Close</button></div><div id="pokeMartUseChoices" class="useItemGrid"></div><div class="martActions" id="pokeMartUseActions"></div></div></div>`);
};

setPokeMartUseActionsV1353=function(phaseMode){
 const actions=document.getElementById("pokeMartUseActions");
 if(!actions)return;
 actions.innerHTML=phaseMode?`<button class="btn btn-ghost" onclick="skipPokeMartUsePhase()">Skip Remaining PokéMart Items</button>`:`<button class="btn btn-ghost" onclick="closePokeMartUseModal()">Keep Item For Later</button>`;
};

openPokeMartUseModal=function(id,phaseMode=false){
 const item=pokeMartItemDef(id); if(!item)return false;
 pokeMartUseModalPhaseModeV1353=!!phaseMode;
 ensurePokeMartUseOverlay();
 const eligible=eligibleForPokeMartItem(item);
 const title=document.getElementById("pokeMartUseTitle"), text=document.getElementById("pokeMartUseText"), choices=document.getElementById("pokeMartUseChoices");
 title.innerHTML=`${pokeMartIcon(item,true)} Use ${item.name}`;
 setPokeMartUseActionsV1353(phaseMode);

 if(id==="x_accuracy"){
  if(!isBackpackItemUsableNowV1353(id)){
   text.textContent="X Accuracy can only be used while draft options are visible.";
   choices.innerHTML=`<div class="card" style="grid-column:1/-1;box-shadow:none">No current draft options to reroll.</div>`;
  }else{
   text.textContent="Reroll all current draft options once.";
   choices.innerHTML=`<button class="useTarget" onclick="useBackpackItem('x_accuracy')"><span>${pokeMartIcon(item)}</span><span><b>Reroll current options</b><br><span class="tscore">Consumes X Accuracy.</span></span></button>`;
  }
 }else if(item.teamwide||id==="x_all"){
  text.textContent="This item is passive and applies automatically at the right time.";
  choices.innerHTML=`<div class="card" style="grid-column:1/-1;box-shadow:none">No manual target needed.</div>`;
 }else if(!eligible.length){
  text.textContent=phaseMode?"No eligible Pokémon for this item right now.":"No eligible Pokémon for this item right now.";
  choices.innerHTML=`<div class="card" style="grid-column:1/-1;box-shadow:none">No eligible target. Keep it for later or close this window.</div>`;
 }else{
  const val=pokeMartPointValue(item);
  text.textContent=item.id==="guard_spec"?"Choose one selected Pokémon to protect from Grunts.":item.lowBst?`Choose one Pokémon below 500 BST for +${val}.`:`Choose one eligible Pokémon for +${val}. Eligible types: ${itemTypeText(item)}.`;
  choices.innerHTML=eligible.map(i=>`<button class="useTarget" onclick="applyPokeMartItemToTarget('${item.id}',${i})"><img src="${currentSprite(team[i],i)||''}"><span><b>${i+1}. ${activePokemonName(team[i],i)}</b><br><span class="tscore">${activeTypes(team[i],i).join(" / ")} · ${scoreBaseFor(team[i],i)} BST</span></span></button>`).join("");
 }
 document.getElementById("pokeMartUseOverlay").style.display="block";
 return true;
};

useBackpackItem=function(id,index=null){
 const item=pokeMartItemDef(id);
 if(!item||!getBackpack().includes(id))return warn("Item not in Backpack.");
 if(!isBackpackItemUsableNowV1353(id)){
  return warn(`${item.name} has no eligible target right now.`);
 }
 if(id==="x_accuracy"){
  consumeBackpackItem(id);
  warn("X Accuracy used: rerolling this draft.");
  generateOptions();
  return;
 }
 openPokeMartUseModal(id,false);
};

skipPokeMartUsePhase=function(){
 if(!isDraftComplete()){
  closePokeMartUseModal();
  renderBackpack();
  warn("Item kept for later.");
  return;
 }
 pokeMartUsePhaseResolved=true;
 closePokeMartUseModal();
 resumePostDraftPipeline();
};


/* ===== v13.5.4 Remove Redundant Score Reveal Text ===== */
const __renderResults_noScoreReveal_v1354=renderResults;
renderResults=function(area,title,res){
 __renderResults_noScoreReveal_v1354(area,title,res);
 const box=area.querySelector&&area.querySelector(".final-box");
 if(box){
  const h=[...box.querySelectorAll("h3")].find(x=>(x.textContent||"").trim()==="Score Reveal");
  if(h)h.remove();
  const p=[...box.querySelectorAll("p.tscore")].find(x=>(x.textContent||"").includes("Team score:")&&(x.textContent||"").includes("Final League Power:"));
  if(p)p.remove();
 }
};

boot();
