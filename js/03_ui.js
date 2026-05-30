function renderTrainerBox(){
 let box=document.getElementById("playerSpriteBox"), name=document.getElementById("playerName"), genderBox=document.getElementById("genderButtons"), quick=document.getElementById("trainerQuickButtons");
 if(!trainer){
  box.innerHTML='<div class="fallback f76">?</div>';
  name.textContent="Not selected";
  if(genderBox) genderBox.innerHTML=`<button type="button" class="mini" onclick="chooseTrainerType('boy')">Boy</button><button type="button" class="mini" onclick="chooseTrainerType('girl')">Girl</button><button type="button" class="mini" onclick="chooseTrainerType('nonbinary')">Nonbinary</button>`;
  if(quick) quick.innerHTML='<span class="tscore">Choose a gender first.</span>';
  renderDifficultyButtons();
  return;
 }
 box.innerHTML=imgTag({name:trainer.label,sprite:trainer.sprite},"playerimg");
 const liveTrainerImg=box.querySelector('img');
 trainer.currentSpriteSrc=(liveTrainerImg&&liveTrainerImg.getAttribute('src'))||trainer.sprite||'';
 name.textContent=displayTrainerName();
 const customInput=document.getElementById("customTrainerNameInput");
 if(customInput&&customInput.value!==customTrainerName)customInput.value=customTrainerName;
 if(genderBox) genderBox.innerHTML=`<button type="button" class="mini ${trainerType==='boy'?'active':''}" onclick="chooseTrainerType('boy')">Boy</button><button type="button" class="mini ${trainerType==='girl'?'active':''}" onclick="chooseTrainerType('girl')">Girl</button><button type="button" class="mini ${trainerType==='nonbinary'?'active':''}" onclick="chooseTrainerType('nonbinary')">Nonbinary</button>`;
 if(quick) quick.innerHTML=(TRAINERS[trainerType]||[]).map((t,i)=>`<button type="button" class="mini ${trainer.modelName===t[0]?'active':''}" onclick="chooseTrainerModel(${i})">${t[0]}</button>`).join("");
 let itemBox=document.getElementById("selectedItemBox");
 if(itemBox)itemBox.textContent=selectedItem?`${selectedItem.icon} ${itemDisplayName()}`:"Choose before draft";
 let itemIconBox=document.getElementById("selectedItemIconBox");
 if(itemIconBox){
  itemIconBox.innerHTML=itemDisplayIcon();
  itemIconBox.title=selectedItem?`${itemDisplayName()}: ${itemDescription()}`:"No item selected";
 }
 let inlineIcon=document.getElementById("selectedItemInlineIcon");
 let inlineName=document.getElementById("selectedItemInlineName");
 let hover=document.getElementById("selectedItemHover");
 if(inlineIcon)inlineIcon.innerHTML=itemDisplayIcon();
 if(inlineName)inlineName.textContent=selectedItem?itemDisplayName():"No item";
 if(hover)hover.setAttribute("data-desc",itemDescription());
 renderDifficultyButtons();
}
async function generateOptions(){
 if(isDraftComplete()){currentOptions=[];render();return;}
 if(selectedItem&&selectedItem.id==="elemental_plate"&&!elementalPlateType){render();return;}
 if(!trainer)return;generating=true;render();
 try{
  let available=poolNames.filter(n=>!usedNames.has(n)&&n!=="giratina-origin");
  let names;let itemPhase=false;
  if(selectedItem&&selectedItem.id==="master_ball"&&masterBallReady&&!masterBallUsed){let legendaries=MASTER_BALL_LEGENDARY_POOL.filter(n=>!usedNames.has(n));names=sample(legendaries,OPTIONS_PER_ROUND);masterBallUsed=true;masterBallReady=false;itemPhase=true;}
  else if(selectedItem&&selectedItem.id==="dna_splicers"&&!specialItemDraftUsed){names=sampleDraftNames(available.filter(n=>n!=="kyurem"));names[0]="kyurem";if(Math.random()<0.75)names[rand(1,Math.max(1,names.length-1))]=Math.random()<0.5?"reshiram":"zekrom";specialItemDraftUsed=true;itemPhase="dna_splicers";}
  else if(selectedItem&&selectedItem.id==="fossil"&&!specialItemDraftUsed){names=sample([...FOSSIL_FAMILIES].filter(n=>!usedNames.has(n)),OPTIONS_PER_ROUND);specialItemDraftUsed=true;itemPhase=true;}
  else if(selectedItem&&selectedItem.id==="lucky_egg"&&!specialItemDraftUsed){names=sample([...BABY_SET].filter(n=>!usedNames.has(n)),OPTIONS_PER_ROUND);specialItemDraftUsed=true;itemPhase=true;}
  else if(regigigasGuaranteedNext&&!usedNames.has("regigigas")){names=sampleDraftNames(available.filter(n=>n!=="regigigas"));names[0]="regigigas";regigigasGuaranteedNext=false;}
  else names=sampleDraftNames(available);
  while(names.length<OPTIONS_PER_ROUND)names.push(sample(available,1)[0]||"pikachu");
  let base=await Promise.all(names.map(fetchPokemon));
  currentOptions=await Promise.all(base.map(enrichMega));
  window.__specialRollSeen=new Set();
currentOptions=currentOptions.map(p=>{let out=(itemPhase==="dna_splicers"&&p.name==="kyurem")?p:((eternalFloetteRoll()&&!usedSpecialPokemonIds().has("eternal-floette"))?makeEternalFloette():maybeReplaceWithSpecialPokemon(p));out=addMegaFormsForSpecial(out);if(out&&out.specialId)window.__specialRollSeen.add(out.specialId);if(out&&out.eternalFloette)window.__specialRollSeen.add("eternal-floette");if(out&&out.glitchPokemon)window.__specialRollSeen.add("missingno");if(itemPhase===true)out.itemGuaranteed=true;if(itemPhase==="dna_splicers"&&out.name==="kyurem")out.itemGuaranteed=true;return out;});
window.__specialRollSeen=null;
  apiIssue=false;warn("");
 }catch(e){apiIssue=true;warn("PokeAPI did not answer, so the game switched to a smaller demo pool. You can retry the API roll.");let av=FALLBACK_POOL.filter(p=>!usedNames.has(p.name));currentOptions=sample(av.length?av:FALLBACK_POOL,OPTIONS_PER_ROUND).map(normalizeFallback).map(p=>maybeReplaceWithSpecialPokemon(p));}
 generating=false;certificateAssetPreparationPromise=null;render()
}

const GRUNT_TEAM_POOLS={
 "Team Rocket Grunt":["rattata","ekans","zubat","koffing","meowth","raticate","golbat","arbok","weezing"],
 "Team Magma Grunt":["poochyena","zubat","numel","mightyena","golbat","camerupt"],
 "Team Aqua Grunt":["poochyena","zubat","carvanha","mightyena","golbat","sharpedo"],
 "Team Galactic Grunt":["stunky","glameow","zubat","bronzor","croagunk","skuntank","purugly","golbat"],
 "Team Plasma Grunt":["patrat","purrloin","sandile","trubbish","watchog","liepard","garbodor"],
 "Team Skull Grunt":["zubat","rattata-alola","salandit","mareanie","raticate-alola","golbat","toxapex"],
 "Team Yell Grunt":["zigzagoon-galar","nickit","linoone-galar","thievul","scrafty","obstagoon"],
 "Team Star Grunt":["charcadet","pawniard","varoom","shroodle","torkoal","revavroom","bisharp"]
};
function generateGruntTeam(grunt,difficulty){
 const pool=GRUNT_TEAM_POOLS[grunt.name]||["zubat","rattata","koffing"];
 const count=difficulty>=2400?5:difficulty>=1850?4:difficulty>=1200?3:2;
 return sample(pool,count).map(pretty);
}

function maybeGrunt(){
 if(gruntResolved||team.length!==gruntRound)return;gruntResolved=true;let grunt=sample(GRUNTS,1)[0];let table={1:550,2:950,3:1400,4:1950,5:2400,6:2805};let difficulty=table[team.length]||900;pendingGrunt={grunt,difficulty,phase:team.length,team:generateGruntTeam(grunt,difficulty)};showGruntModal()
}
function showGruntModal(){
 document.getElementById("modalSprite").innerHTML=imgTag(pendingGrunt.grunt);
 document.getElementById("modalTitle").textContent=pendingGrunt.grunt.name+" ambushes you!";
 document.getElementById("modalText").textContent=pendingGrunt.grunt.text+" Battle to protect your team, or run and lose one random selected Pokémon.";
 document.getElementById("modalDifficulty").innerHTML=`Running will lose the fight.${renderOpponentTeam(pendingGrunt.team)}`;
 document.getElementById("gruntActions").innerHTML=`${selectedItem&&selectedItem.id==="escape_rope"&&!itemUsed?'<button class="btn btn-ghost" onclick="resolveGrunt(\'escape\')">Escape Safely</button>':''}<button class="btn btn-ghost" onclick="resolveGrunt('run')">Run</button><button class="btn btn-danger" onclick="resolveGrunt('battle')">Battle</button>`;
 document.getElementById("gruntModal").style.display="flex";
}
function stealRandom(){
 if(team.length===0)return null;let idx=rand(0,team.length-1);let stolen=team.splice(idx,1)[0];usedNames.delete(stolen.name);if(selectedMegaIndex===idx)selectedMegaIndex=null;else if(selectedMegaIndex!==null&&selectedMegaIndex>idx)selectedMegaIndex--;return stolen
}
function resolveGrunt(choice){
 let won=false,stolen=null,power=baseTotal();
 if(choice==="escape"){won=true;itemUsed=true}
 else if(choice==="battle")won=power>=pendingGrunt.difficulty;
 if(!won)stolen=stealRandom();
 eventLog={grunt:pendingGrunt.grunt,won,stolen,difficulty:pendingGrunt.difficulty,power,choice,team:pendingGrunt.team,orbHint:won?"You retrieve a strange glowing orb. What could it do?":""};
 addRunEvent("Grunt",won?`${pendingGrunt.grunt.name} defeated. Strange glowing orb retrieved.`:`${pendingGrunt.grunt.name} stole ${stolen?stolen.displayName:"a Pokémon"}.`);
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
function selectMega(index,formIndex){
 if(team[index].megaForms.length===0)return;
 if(selectedMegaIndex===index&&team[index].activeMega&&team[index].activeMega.name===team[index].megaForms[formIndex].name){team[index].activeMega=null;selectedMegaIndex=null}
 else{selectedMegaIndex=index;team[index].activeMega=team[index].megaForms[formIndex]}
 render()
}


function shadowPurificationEligibleIndexes(){
 return team.map((p,i)=>(p&&(p.specialTags||[]).includes("shadow")&&!p.purified)?i:null).filter(i=>i!==null);
}
function originFormeEligibleIndexes(){
 return team.map((p,i)=>(p&&ORIGIN_FORMS[p.name]&&!p.activeOrigin)?i:null).filter(i=>i!==null);
}
async function openPostDraftItemModal(){
 const defaultSkip=document.getElementById("itemDefaultSkip"); if(defaultSkip){defaultSkip.style.display=""; defaultSkip.textContent="Skip";}
 if(!selectedItem)return false;
 if(selectedItem.id==="light_ball"&&lightBallTargetIndex===null){
  const defaultSkip=document.getElementById("itemDefaultSkip"); if(defaultSkip)defaultSkip.style.display="none";
  const eligible=lightBallEligibleIndexes();
  if(!eligible.length){lightBallTargetIndex=-1;return false;}
  document.getElementById("itemModalTitle").textContent="Use Light Ball";
  document.getElementById("itemModalText").textContent="Choose one Electric Pokémon to hold the Light Ball. Pikachu variants have their BST doubled; other Electric Pokémon gain +150.";
  document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${activePokemonName(team[i],i)}</div><div class="tscore">${isPikachuVariant(team[i])?"BST will be doubled":"+150 Light Ball bonus"}.</div></div><button type="button" class="btn btn-dark" onclick="useLightBall(${i})">Give Light Ball</button></div>`).join("")+`<div class="modalactions"><button class="btn btn-ghost" onclick="closeItemModal()">Skip Light Ball</button></div>`;
  document.getElementById("itemModal").style.display="flex";
  return true;
 }
 if(selectedItem.id==="origin_orb"&&!originOrbResolved){const eligible=originFormeEligibleIndexes();if(eligible.length){const defaultSkip=document.getElementById("itemDefaultSkip"); if(defaultSkip)defaultSkip.style.display="none";document.getElementById("itemModalTitle").textContent="Use Origin Orb";document.getElementById("itemModalText").textContent="Transform Dialga, Palkia or Giratina into Origin Forme. Already transformed Pokémon are removed from this list.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Origin Forme, +300 bonus.</div></div><button type="button" class="btn btn-dark" onclick="useOriginOrb(${i})">Transform</button></div>`).join("")+`<div class="modalactions"><button class="btn btn-ghost" onclick="originOrbResolved=true;closeItemModal()">Done</button></div>`;document.getElementById("itemModal").style.display="flex";return true;}originOrbResolved=true;}
 if(selectedItem.id==="prison_bottle"&&!prisonBottleResolved){const eligible=team.map((p,i)=>p.name==="hoopa"?i:null).filter(i=>i!==null);if(eligible.length){document.getElementById("itemModalTitle").textContent="Use Prison Bottle";document.getElementById("itemModalText").textContent="Unlock Hoopa Unbound and complete its hidden quest.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Hoopa Unbound, +80 BST and +500 quest.</div></div><button type="button" class="btn btn-dark" onclick="usePrisonBottle(${i})">Open Bottle</button></div>`).join("");document.getElementById("itemModal").style.display="flex";return true;}prisonBottleResolved=true;}
 if(selectedItem.id==="gigantamax_potion"&&!gigantamaxUsed){const eligible=team.map((p,i)=>GMAX_FORMS[specialBaseKey(p)]?i:null).filter(i=>i!==null);if(eligible.length){document.getElementById("itemModalTitle").textContent="Use Gigantamax Potion";document.getElementById("itemModalText").textContent="Choose one eligible Pokémon to Gigantamax. Not a Mega Evolution.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Doubles HP contribution. Fallback +150.</div></div><button type="button" class="btn btn-dark" onclick="useGigantamax(${i})">Gigantamax</button></div>`).join("");document.getElementById("itemModal").style.display="flex";return true;}gigantamaxUsed=true;}
 if(selectedItem.id==="soothe_bell"){const eligible=shadowPurificationEligibleIndexes();if(eligible.length){const defaultSkip=document.getElementById("itemDefaultSkip"); if(defaultSkip){defaultSkip.style.display=""; defaultSkip.textContent="Skip Purification";}document.getElementById("itemModalTitle").textContent="Shadow Purification";document.getElementById("itemModalText").textContent="Soothe Bell can purify Shadow Lugia or Shadow Mewtwo. Already purified Pokémon are removed from this list.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Removes Shadow state, adds Purified +300 and quest +500.</div></div><button type="button" class="btn btn-dark" onclick="purifyShadow(${i})">Purify</button></div>`).join("");document.getElementById("itemModal").style.display="flex";return true;}}
 if(selectedItem.id==="evolution_stone"&&!evolutionUsed){document.getElementById("itemModalTitle").textContent="Use Evolution Stone";document.getElementById("itemModalText").textContent="Checking evolution paths...";document.getElementById("itemChoicesBox").innerHTML='<div class="card">Looking up every possible evolution path...</div>';document.getElementById("itemModal").style.display="flex";const choiceMap=await Promise.all(team.map(async(p,i)=>({i,choices:await evolutionChoicesForAsync(p)})));let eligible=choiceMap.filter(x=>x.choices&&x.choices.length);if(!eligible.length){document.getElementById("itemModalText").textContent="None of your current Pokémon can evolve further.";document.getElementById("itemChoicesBox").innerHTML='<div class="card">No eligible Pokémon found.</div>';return true;}document.getElementById("itemModalText").textContent="Choose one eligible Pokémon, then choose the exact evolution path.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(({i,choices})=>{const choiceHtml=choices.length>1?`<div class="quick evoChoiceWrap">${choices.map(t=>evolutionChoiceCard(i,t)).join("")}</div>`:`<button type="button" class="btn btn-dark" onclick="useEvolutionStone(${i},'${choices[0]}')">Evolve into ${evolutionChoiceLabel(choices[0])}</button>`;return `<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">${choices.length>1?`${choices.length} evolution paths available`:`Evolves into ${evolutionChoiceLabel(choices[0])}`}</div>${choiceHtml}</div></div>`}).join("");return true;}
 if(selectedItem.id==="rainbow_feather"&&!rainbowFeatherResolved){const eligible=team.map((p,i)=>RAINBOW_FEATHER_FORMS[p.name]?i:null).filter(i=>i!==null);if(!eligible.length){document.getElementById("itemModalTitle").textContent="Use Rainbow Feather";document.getElementById("itemModalText").textContent="None of your current Pokémon can follow the rainbow yet.";document.getElementById("itemChoicesBox").innerHTML='<div class="card">Eligible: Vaporeon, Flareon, or Jolteon.</div>';document.getElementById("itemModal").style.display="flex";return true;}document.getElementById("itemModalTitle").textContent="Use Rainbow Feather";document.getElementById("itemModalText").textContent="Choose one Eeveelution to become a legendary beast.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>{const form=RAINBOW_FEATHER_FORMS[team[i].name];return `<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Becomes ${form.name} (${form.scoreBst} BST), +300 Rainbow Feather bonus.</div></div><button type="button" class="btn btn-dark" onclick="useRainbowFeather(${i})">Use Feather</button></div>`}).join("");document.getElementById("itemModal").style.display="flex";return true;}
 if(selectedItem.id==="link_cable"&&!linkCableUsed){document.getElementById("itemModalTitle").textContent="Use Link Cable";document.getElementById("itemModalText").textContent="Trade one selected Pokémon for a random different one.";document.getElementById("itemChoicesBox").innerHTML=team.map((p,i)=>`<div class="teamitem"><img src="${currentSprite(p,i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${p.displayName}</div><div class="tscore">Trade this Pokémon away.</div></div><button type="button" class="btn btn-danger" onclick="useLinkCable(${i})">Trade</button></div>`).join("");document.getElementById("itemModal").style.display="flex";return true;}
 return false;
}
function closeItemModal(){
 if(selectedItem){
  if(selectedItem.id==="evolution_stone")evolutionUsed=true;
  if(selectedItem.id==="link_cable")linkCableUsed=true;
  if(selectedItem.id==="rainbow_feather")rainbowFeatherResolved=true;
  if(selectedItem.id==="origin_orb")originOrbResolved=true;
  if(selectedItem.id==="prison_bottle")prisonBottleResolved=true;
  if(selectedItem.id==="gigantamax_potion")gigantamaxUsed=true;
  if(selectedItem.id==="light_ball"&&lightBallTargetIndex===null)lightBallTargetIndex=-1;
 }
 const defaultSkip=document.getElementById("itemDefaultSkip"); if(defaultSkip){defaultSkip.style.display=""; defaultSkip.textContent="Skip";}
 document.getElementById("itemModal").style.display="none";
 continueAfterItemChoice();
}
function useLightBall(i){
 i=Number(i);
 lightBallTargetIndex=i;
 team.forEach(p=>{delete p.lightBall});
 if(team[i])team[i].lightBall=true;
 certificateAssetPreparationPromise=null;
 addRunEvent("Item",`Light Ball was given to ${activePokemonName(team[i],i)}.`,ROUNDS);
 document.getElementById("itemModal").style.display="none";
 render();
 continueAfterItemChoice();
}
function useElementalPlate(type){elementalPlateType=type;document.getElementById("itemModal").style.display="none";render()}
async function useEvolutionStone(i,targetName){
 const source=team[i];
 const choices=await evolutionChoicesForAsync(source);
 if(!targetName&&choices.length>1){
  document.getElementById("itemModalTitle").textContent=`Choose ${source.displayName}'s evolution`;
  document.getElementById("itemModalText").textContent="This Pokémon has multiple evolution paths. Pick the one you want.";
  document.getElementById("itemChoicesBox").innerHTML=`<div class="teamitem"><img src="${currentSprite(source,i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${source.displayName}</div><div class="quick evoChoiceWrap">${choices.map(t=>evolutionChoiceCard(i,t)).join("")}</div></div></div>`;
  document.getElementById("itemModal").style.display="flex";
  return;
 }
 evolutionUsed=true;
 try{
  const target=targetName||choices[0];
  let evolved=(SPECIAL_POKEMON_REGISTRY[target]?makeSpecialPokemon(target,!!source.shiny):await fetchPokemon(target));
  evolved=await enrichMega(evolved);
  evolved=addMegaFormsForSpecial(evolved);
  evolved.shiny=!!source.shiny;
  evolved.shinyBonus=source.shinyBonus||0;
  evolved.activeMega=null;
  evolved.displayName=evolved.displayName+" (Evolved)";
  evolved.evolvedFrom=source.displayName||source.name;
  if((source.name==="crystal-onix"&&target==="crystal-steelix")||target==="crystal-steelix"){evolved.crystalEvolution=true;}
  if(selectedMegaIndex===i)selectedMegaIndex=null;
  team[i]=evolved;
  certificateAssetPreparationPromise=null;
  render();
 }catch(e){warn("Evolution failed because the API did not answer.")}
 document.getElementById("itemModal").style.display="none";continueAfterItemChoice()
}

async function useRainbowFeather(i){
 const source=team[i];
 const sourceKey=String(source&&source.name||"").toLowerCase().replace(/_/g,"-");
 const mappingPath=EVOLUTION_MAPPING_DATA?.specialQuestEvolutions?.rainbowFeather?.paths?.[sourceKey];
 const localForm=RAINBOW_FEATHER_FORMS[sourceKey];
 const target=mappingPath?.target || localForm?.pokeapi;
 if(!target||!localForm){warn("Rainbow Feather cannot react to this Pokémon.");return;}
 try{
  let beast=null;
  try{beast=await fetchPokemon(target)}catch(e){console.warn("Rainbow Feather fetch fallback used",e)}
  if(beast)beast=await enrichMega(beast);
  const spriteFallback=`https://play.pokemonshowdown.com/sprites/dex/${target}.png`;
  const shinySpriteFallback=`https://play.pokemonshowdown.com/sprites/dex-shiny/${target}.png`;
  const transformed={
   ...source,
   name:target,
   displayName:localForm.name || (beast?beast.displayName:pretty(target)),
   types:(beast&&beast.types)||localForm.types||source.types,
   bst:localForm.scoreBst || (beast&&beast.bst) || 580,
   sprite:(beast&&beast.sprite)||spriteFallback,
   shinySprite:(beast&&beast.shinySprite)||shinySpriteFallback,
   activeMega:null,
   activePrimal:null,
   megaForms:(beast&&beast.megaForms)||[],
   rainbowFeather:true,
   rainbowFeatherFrom:source.displayName||source.name
  };
  team[i]=transformed;
  certificateAssetPreparationPromise=null;
  usedNames.delete(source.name);
  usedNames.add(target);
  if(selectedMegaIndex===i)selectedMegaIndex=null;
  rainbowFeatherCompleted=true;
  rainbowFeatherResolved=true;
  certificateAssetPreparationPromise=null;
  markQuest("Rainbow Feather",300,`${source.displayName} became ${transformed.displayName}.`);
  addRunEvent("Item",`Rainbow Feather transformed ${source.displayName} into ${transformed.displayName}.`);
 }catch(e){
  console.error(e);
  warn("Rainbow Feather failed unexpectedly.");
 }
 document.getElementById("itemModal").style.display="none";
 render();
 continueAfterItemChoice();
}

async function useLinkCable(i){
 linkCableUsed=true;
 try{
  let available=poolNames.filter(n=>!usedNames.has(n)&&n!==team[i].name);
  let replacement=await fetchPokemon(sample(available,1)[0]);
  replacement=await enrichMega(replacement);
  usedNames.delete(team[i].name);
  usedNames.add(replacement.name);
  if(selectedMegaIndex===i)selectedMegaIndex=null;
  team[i]=replacement;
 }catch(e){warn("Trade failed because the API did not answer.")}
 document.getElementById("itemModal").style.display="none";render();setTimeout(()=>startBattleSimulation(),1000)
}


function randomProfessorForAdvice(){
 const keys=["Oak","Elm","Birch","Rowan","Juniper","Sycamore","Kukui","Sonia","Laventon","Sada","Turo"];
 return keys[rand(0,keys.length-1)];
}
function openWaysToWinHelp(){
 const prof=randomProfessorForAdvice();
 const p=document.getElementById("waysHelpProfessor");
 if(p)p.innerHTML=profImg(prof);
 const c=document.getElementById("waysHelpContent");
 if(c)c.innerHTML=`
  <div class="helpProfessor">${profImg(prof)}<div><h3>${prof==="Kukui"?"Battle advice, cousin!":"Professor advice"}</h3><p>There is not one correct way to win. Pick a path and let the draft bend around it.</p></div></div>
  <div class="scoreBreakDetails">
   <div class="scoreBreakMini"><h4>Raw Power</h4><ul><li>High BST Pokémon carry runs.</li><li>Mega, Primal and fusion forms can push the ceiling.</li></ul></div>
   <div class="scoreBreakMini"><h4>Items</h4><ul><li>Items reveal, evolve, reroll, protect or transform.</li><li>Build around your item early.</li></ul></div>
   <div class="scoreBreakMini"><h4>Team Concepts</h4><ul><li>Strong themes grant concept points.</li><li>Types, regions, starters, Regis, Paradox Pokémon and more can matter.</li></ul></div>
   <div class="scoreBreakMini"><h4>Hidden Quests</h4><ul><li>Some Pokémon/item combinations trigger secrets.</li><li>Some quests are hidden. You are not expected to know all of them at the start.</li></ul></div>
   <div class="scoreBreakMini"><h4>Rare Pokémon</h4><ul><li>Shinies add bonus points.</li><li>Special finds like Eternal Floette or Light Ball Pikachu can reshape a run.</li></ul></div>
   <div class="scoreBreakMini"><h4>Difficulty</h4><ul><li>Easy lowers requirements by 500.</li><li>Normal is the standard climb.</li><li>Master Mode unlocks after beating Normal once.</li></ul></div>
  </div>`;
 const m=document.getElementById("waysHelpModal");
 if(m)m.style.display="flex";
}
function closeWaysToWinHelp(){const m=document.getElementById("waysHelpModal"); if(m)m.style.display="none";}
function scoreBreakdownRows(){
 const typeBonus=getTypes().length>=TYPE_BONUS_THRESHOLD?TYPE_BONUS_POINTS:0;
 const rows=[
  {label:"Active Team Total",points:baseTotal(),note:"Current Pokémon BST with active forms, special bonuses and glitch modifiers."},
  {label:"Unique Type Bonus",points:typeBonus,note:typeBonus?`${getTypes().length} unique types.`:`Need ${TYPE_BONUS_THRESHOLD} unique types.`},
  {label:"Item Bonus",points:itemBonusTotal(),note:selectedItem?itemDisplayName():"No item selected."},
  {label:"Quest Bonus",points:questBonusTotal(),note:questBreakdown().length?`${questBreakdown().length} quest bonus source(s).`:"No quest bonus."},
  {label:"Team Concept Bonus",points:conceptBonus(),note:amuletConceptDoubled()?`${teamConcept().name} · Amulet Coin doubled concept bonus`:teamConcept().name||"No concept."}
 ];
 rows.push({label:"Final League Power",points:finalScore(),note:difficultyLabel(),final:true});
 return rows;
}
function showScoreBreakdown(force=false){
 if(scoreBreakdownShown&&!force)return scheduleCelebration(500);
 scoreBreakdownShown=true;
 const prof=randomProfessorForAdvice();
 const p=document.getElementById("scoreBreakdownProfessor");
 if(p)p.innerHTML=profImg(prof);
 const rows=scoreBreakdownRows();
 const q=questBreakdown();
 const concept=teamConcept();
 const c=document.getElementById("scoreBreakdownContent");
 if(c)c.innerHTML=`
  <div class="helpProfessor">${profImg(prof)}<div><h3>${difficultyLabel()}</h3><p>Here is the complete score calculation before your certificate is printed.</p><div class="scoreBreakMode">${difficultyLabel()}</div></div></div>
  <table class="scoreBreakTable"><thead><tr><th>Source</th><th>Note</th><th>Points</th></tr></thead><tbody>
   ${rows.map(r=>`<tr class="${r.final?"scoreBreakFinal":""}"><td>${r.label}</td><td>${r.note||""}</td><td>${r.final?"=":"+"}${r.points}</td></tr>`).join("")}
  </tbody></table>
  <div class="scoreBreakDetails">
   <div class="scoreBreakMini"><h4>Quest Details</h4>${q.length?`<ul>${q.map(x=>`<li><b>${x.name}</b>: +${x.points}. ${x.reason||""}</li>`).join("")}</ul>`:"<ul><li>No quest bonus this run.</li></ul>"}</div>
   <div class="scoreBreakMini"><h4>Concept Details</h4><ul><li><b>${concept.name}</b>: +${concept.bonus||0}${amuletConceptDoubled()?` → +${conceptBonus()} with Amulet Coin`:""}.</li><li>${concept.reason||"No concept reason."}</li>${amuletConceptDoubled()?`<li>🪙 Amulet Coin: Concept bonus doubled.</li>`:""}</ul></div>
  </div>`;
 const m=document.getElementById("scoreBreakdownModal");
 if(m)m.style.display="flex";
}

function reopenScoreBreakdown(){
 showScoreBreakdown(true);
}
function showCertificateAgain(){
 showCelebration(leagueResult().rank.name,finalScore(),true);
}

function closeScoreBreakdownAndCelebrate(){
 const m=document.getElementById("scoreBreakdownModal");
 if(m)m.style.display="none";
 scheduleCelebration(500);
}

function finishPostDraftChoices(delay=1200){
 prepareCertificateAssetsForCurrentRun(true).catch(console.warn);
 setTimeout(()=>startBattleSimulation(),delay);
}
async function continueAfterItemChoice(){
 resumePostDraftPipeline();
}


async function hydrateSpecialForm(form){
 try{
  const p=await fetchPokemon(form.pokeapi);
  return {...form,sprite:p.sprite,shinySprite:p.shinySprite,types:p.types,scoreBst:form.scoreBst||p.bst};
 }catch(e){
  return form;
 }
}
function eligiblePrimalIndexes(){
 if(!eventLog||!eventLog.won)return [];
 return team.map((p,i)=>(PRIMAL_FORMS[p.name]&&!p.activePrimal)?i:null).filter(i=>i!==null);
}
async function openPrimalQuestModal(){
 if(primalQuestCompleted)return false;
 const eligible=eligiblePrimalIndexes();
 if(!eligible.length)return false;
 document.getElementById("itemModalTitle").textContent="Hidden Quest: The Ancient Orbs";
 document.getElementById("itemModalText").textContent="You defeated the crime organization and retrieved one strange ancient orb. Choose only one Primal awakening.";
 document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>{
  const p=team[i], form=PRIMAL_FORMS[p.name];
  return `<div class="teamitem"><img src="${currentSprite(p,i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${p.displayName}</div><div class="tscore">Awaken into ${form.name} (${form.scoreBst} BST)</div></div><button type="button" class="btn btn-dark" onclick="usePrimalForm(${i})">Use Orb</button></div>`;
 }).join("");
 document.getElementById("itemModal").style.display="flex";
 return true;
}
async function usePrimalForm(i){
 const p=team[i];
 if(!PRIMAL_FORMS[p.name])return;
 p.activePrimal=await hydrateSpecialForm(PRIMAL_FORMS[p.name]);
 p.displayName=p.activePrimal.name;
 primalQuestCompleted=true;
 markQuest(p.activePrimal.name,300,'Ancient orb awakened one Primal form.');
 document.getElementById("itemModal").style.display="none";
 continueAfterHiddenQuest();
}
function kyuremFusionOptions(){
 const kyuremIndex=team.findIndex(p=>p.name==="kyurem");
 if(kyuremIndex<0||kyuremFusionCompleted)return [];
 return ["reshiram","zekrom"].map(partner=>({partner,partnerIndex:team.findIndex(p=>p.name===partner)})).filter(x=>x.partnerIndex>=0);
}
async function openKyuremFusionModal(){
 const opts=kyuremFusionOptions();
 if(!opts.length)return false;
 document.getElementById("itemModalTitle").textContent="Hidden Quest: DNA Splicers";
 document.getElementById("itemModalText").textContent="Kyurem can fuse with Reshiram or Zekrom. The two Pokémon become one, and you reopen one draft slot.";
 document.getElementById("itemChoicesBox").innerHTML=opts.map(o=>{
  const form=KYUREM_FUSIONS[o.partner];
  return `<div class="teamitem"><img src="${currentSprite(team[o.partnerIndex],o.partnerIndex)||''}"><div style="flex:1"><div class="tname">Fuse Kyurem + ${team[o.partnerIndex].displayName}</div><div class="tscore">Creates ${form.name} (${form.scoreBst} BST), +300 quest bonus, opens one slot. If one fusion partner is shiny, the fusion is shiny. If both are shiny, both shiny bonuses count.</div></div><button type="button" class="btn btn-dark" onclick="useKyuremFusion('${o.partner}')">Fuse</button></div>`;
 }).join("");
 document.getElementById("itemModal").style.display="flex";
 return true;
}
async function useKyuremFusion(partnerName){
 const kyuremIndex=team.findIndex(p=>p.name==="kyurem");
 const partnerIndex=team.findIndex(p=>p.name===partnerName);
 if(kyuremIndex<0||partnerIndex<0)return;
 const kyurem=team[kyuremIndex], partner=team[partnerIndex];
 const form=await hydrateSpecialForm(KYUREM_FUSIONS[partnerName]);
 const fusionShiny=!!(kyurem.shiny||partner.shiny);
 const doubleShiny=!!(kyurem.shiny&&partner.shiny);
 team[kyuremIndex]={...kyurem,name:form.pokeapi,displayName:form.name,types:form.types,bst:form.scoreBst,sprite:form.sprite||kyurem.sprite,shinySprite:form.shinySprite||kyurem.shinySprite,shiny:fusionShiny,shinyBonus:fusionShiny?SHINY_BONUS:0,extraShinyBonus:doubleShiny?SHINY_BONUS:0,activePrimal:null,activeMega:null,fusedWith:partnerName,megaForms:[]};
 usedNames.delete(partner.name);
 team.splice(partnerIndex,1);
 if(selectedMegaIndex!==null){
  if(selectedMegaIndex===partnerIndex)selectedMegaIndex=null;
  else if(selectedMegaIndex>partnerIndex)selectedMegaIndex--;
 }
 kyuremFusionCompleted=true;
 markQuest(form.name,300,'DNA Splicers fused Kyurem and opened one team slot.');
 document.getElementById("itemModal").style.display="none";
 render();
 if(team.length<ROUNDS){await generateOptions();return}
 continueAfterHiddenQuest();
}


function calyrexFusionOptions(){
 const calyrexIndex=team.findIndex(p=>p.name==="calyrex");
 if(calyrexIndex<0||kinglyFusionCompleted)return [];
 return ["glastrier","spectrier"].map(partner=>({partner,partnerIndex:team.findIndex(p=>p.name===partner)})).filter(x=>x.partnerIndex>=0);
}
async function openCalyrexFusionModal(){
 const opts=calyrexFusionOptions();
 if(!opts.length)return false;
 document.getElementById("itemModalTitle").textContent="Hidden Quest: Kingly Fusion";
 document.getElementById("itemModalText").textContent="Calyrex can fuse with Glastrier or Spectrier. The two Pokémon become one, and you reopen one draft slot.";
 document.getElementById("itemChoicesBox").innerHTML=opts.map(o=>{
  const form=CALYREX_FUSIONS[o.partner];
  return `<div class="teamitem"><img src="${currentSprite(team[o.partnerIndex],o.partnerIndex)||''}"><div style="flex:1"><div class="tname">Fuse Calyrex + ${team[o.partnerIndex].displayName}</div><div class="tscore">Creates ${form.name} (${form.scoreBst} BST), +300 quest bonus, opens one slot.</div></div><button type="button" class="btn btn-dark" onclick="useCalyrexFusion('${o.partner}')">Fuse</button></div>`;
 }).join("");
 document.getElementById("itemModal").style.display="flex";
 return true;
}
async function useCalyrexFusion(partnerName){
 const calyrexIndex=team.findIndex(p=>p.name==="calyrex");
 const partnerIndex=team.findIndex(p=>p.name===partnerName);
 if(calyrexIndex<0||partnerIndex<0)return;
 const calyrex=team[calyrexIndex], partner=team[partnerIndex];
 const form=await hydrateSpecialForm(CALYREX_FUSIONS[partnerName]);
 const fusionShiny=!!(calyrex.shiny||partner.shiny);
 const doubleShiny=!!(calyrex.shiny&&partner.shiny);
 team[calyrexIndex]={...calyrex,name:form.pokeapi,displayName:form.name,types:form.types,bst:form.scoreBst,sprite:form.sprite||calyrex.sprite,shinySprite:form.shinySprite||calyrex.shinySprite,shiny:fusionShiny,shinyBonus:fusionShiny?SHINY_BONUS:0,extraShinyBonus:doubleShiny?SHINY_BONUS:0,activePrimal:null,activeMega:null,fusedWith:partnerName,megaForms:[]};
 usedNames.delete(partner.name);
 team.splice(partnerIndex,1);
 if(selectedMegaIndex!==null){
  if(selectedMegaIndex===partnerIndex)selectedMegaIndex=null;
  else if(selectedMegaIndex>partnerIndex)selectedMegaIndex--;
 }
 kinglyFusionCompleted=true;
 markQuest(form.name,300,'Kingly Fusion united Calyrex and its steed, opening one team slot.');
 document.getElementById("itemModal").style.display="none";
 render();
 if(team.length<ROUNDS){await generateOptions();return}
 continueAfterHiddenQuest();
}


async function openRegigigasQuestModal(){
 if(!isRegigigasQuestEligible())return false;
 regigigasQuestOffered=true;
 if(team.length<ROUNDS){
  regigigasGuaranteedNext=true;
  markQuest("Regigigas Awakening",0,"The ancient titan will appear in the next draft.");
  addRunEvent("Quest","Regigigas Awakening completed: Regigigas guaranteed in the next draft.");
  showQuestToast("Quest discovered: Regigigas guaranteed next draft");
  return false;
 }
 document.getElementById("itemModalTitle").textContent="Hidden Quest: Regigigas Awakening";
 document.getElementById("itemModalText").textContent="Three Regi Pokémon awaken the sleeping titan. Replace one team member with Regigigas?";
 document.getElementById("itemChoicesBox").innerHTML=team.map((p,i)=>`<div class="teamitem"><img src="${currentSprite(p,i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${activePokemonName(p,i)}</div><div class="tscore">Replace this Pokémon with Regigigas.</div></div><button type="button" class="btn btn-dark" onclick="useRegigigasReplacement(${i})">Replace</button></div>`).join("")+`<button class="btn btn-ghost" onclick="skipRegigigasReplacement()">Keep Team</button>`;
 document.getElementById("itemModal").style.display="flex";
 return true;
}
async function useRegigigasReplacement(i){
 try{
  let giga=await fetchPokemon("regigigas");
  giga=await enrichMega(giga);
  usedNames.delete(team[i].name);
  team[i]=giga;
  usedNames.add("regigigas");
  if(selectedMegaIndex===i)selectedMegaIndex=null;
  markQuest("Regigigas Awakening",0,"Regigigas replaced a team member.");
  addRunEvent("Quest","Regigigas Awakening completed: Regigigas joined the team.");
  certificateAssetPreparationPromise=null;
 }catch(e){warn("Regigigas did not awaken because the API did not answer.")}
 document.getElementById("itemModal").style.display="none";
 render();
 resumePostDraftPipeline();
}
function skipRegigigasReplacement(){
 addRunEvent("Quest","Regigigas Awakening discovered, but replacement was skipped.");
 document.getElementById("itemModal").style.display="none";
 resumePostDraftPipeline();
}

function rotomIndex(){
 return team.findIndex(p=>String(p.name||"").startsWith("rotom"));
}
async function openRotomFormModal(){
 const idx=rotomIndex();
 if(idx<0)return false;
 const p=team[idx];
 if(p.rotomFormChosen)return false;
 document.getElementById("itemModalTitle").textContent="Free Form Change: Rotom";
 document.getElementById("itemModalText").textContent="Rotom can enter an appliance form for free. You may also keep the original form.";
 const forms=["rotom","heat","wash","frost","fan","mow"];
 document.getElementById("itemChoicesBox").innerHTML=`<div class="teamitem"><img src="${currentSprite(p,idx)||''}"><div style="flex:1"><div class="tname">${idx+1}. ${p.displayName}</div><div class="tscore">Choose a Rotom form.</div><div class="quick questChoiceWrap">${forms.map(f=>`<button type="button" class="mini questChoiceBtn" onclick="useRotomForm(${idx},'${f}')">${ROTOM_FORMS[f].name}</button>`).join("")}</div></div></div>`;
 document.getElementById("itemModal").style.display="flex";
 return true;
}
async function useRotomForm(i,formKey){
 const p=team[i];
 const form=ROTOM_FORMS[formKey]||ROTOM_FORMS.rotom;
 const hydrated=await hydrateSpecialForm(form);
 team[i]={...p,name:hydrated.pokeapi||"rotom",displayName:hydrated.name,types:hydrated.types||form.types,bst:hydrated.scoreBst||form.scoreBst,sprite:hydrated.sprite||p.sprite,shinySprite:hydrated.shinySprite||p.shinySprite,rotomFormChosen:true,rotomForm:formKey,megaForms:[],activeMega:null};
 document.getElementById("itemModal").style.display="none";
 continueAfterRotomForm();
}
function hasRotomPokedexQuest(){
 return selectedItem&&selectedItem.id==="pokedex"&&team.some(p=>String(p.name||"").startsWith("rotom"));
}
async function openRotomPokedexQuestModal(){
 if(rotomPokedexQuestCompleted||!hasRotomPokedexQuest())return false;
 const idx=rotomIndex();
 if(idx<0)return false;
 document.getElementById("itemModalTitle").textContent="Hidden Quest: Rotom Pokédex";
 document.getElementById("itemModalText").textContent="Rotom jumps into your Pokédex. Gain +300 bonus points and your Pokédex can scan every draft round until the end.";
 document.getElementById("itemChoicesBox").innerHTML=`<div class="teamitem"><img src="${currentSprite(team[idx],idx)||''}"><div style="flex:1"><div class="tname">${idx+1}. ${team[idx].displayName}</div><div class="tscore">Become Rotom Pokédex. +300 quest bonus. Unlimited Pokédex scans.</div></div><button type="button" class="btn btn-dark" onclick="useRotomPokedex(${idx})">Enter Pokédex</button></div>`;
 document.getElementById("itemModal").style.display="flex";
 return true;
}
async function useRotomPokedex(i){
 const p=team[i];
 const form=ROTOM_FORMS.pokedex;
 team[i]={...p,name:"rotom-pokedex",displayName:"Rotom Pokédex",
   sprite:specialAsset("RotomPokedex.png"),
   shinySprite:specialAsset("RotomPokedex.png"),
   rotomPokedex:true,types:form.types,bst:form.scoreBst,shiny:p.shiny,shinyBonus:p.shiny?SHINY_BONUS:0,rotomFormChosen:true,rotomForm:"pokedex",megaForms:[],activeMega:null};
 rotomPokedexQuestCompleted=true;
 markQuest('Rotom Pokédex',300,'Pokédex scans are now reusable.');
 pokedexUsed=false;
 pokedexRevealRound=null;
 document.getElementById("itemModal").style.display="none";
 render();
 if(team.length<ROUNDS){await generateOptions();return}
 continueAfterRotomForm();
}
function continueAfterRotomForm(){
 render();
 resumePostDraftPipeline();
}

async function openHiddenQuestModal(){
 if(await openPrimalQuestModal())return true;
 if(await openKyuremFusionModal())return true;
 if(await openCalyrexFusionModal())return true;
 if(await openRegigigasQuestModal())return true;
 if(await openRotomPokedexQuestModal())return true;
 return false;
}
function continueAfterHiddenQuest(){
 render();
 resumePostDraftPipeline();
}

function openPostDraftChoices(){
 continuePostDraftPipeline(150);
}

function eligibleMegaIndexes(){return team.map((p,i)=>p.activePrimal?null:(p.megaForms&&p.megaForms.length?i:null)).filter(i=>i!==null)}
function openMegaModal(){
 let eligible=eligibleMegaIndexes();
 if(!eligible.length)return false;
 megaPromptShown=true;
 let box=document.getElementById("megaChoices");
 box.innerHTML=eligible.map(i=>{
  let p=team[i];
  return `<div class="teamitem"><img src="${p.sprite||''}" alt="${p.displayName}"><div style="min-width:0;flex:1"><div class="tname">${i+1}. ${p.displayName}</div><div class="tscore">Choose one form:</div><div class="megaBtns">${p.megaForms.map((m,mi)=>`<button class="megaBtn" onclick="selectMegaFromModal(${i},${mi})">${m.name}</button>`).join("")}</div></div></div>`;
 }).join("");
 document.getElementById("megaModal").style.display="flex";
 return true;
}
function selectMegaFromModal(index,formIndex){
 selectedMegaIndex=index;
 team[index].activeMega=team[index].megaForms[formIndex];
 document.getElementById("megaModal").style.display="none";
 continueAfterMegaChoice();
}
function skipMegaChoice(){
 selectedMegaIndex=null;
 team.forEach(p=>p.activeMega=null);
 document.getElementById("megaModal").style.display="none";
 continueAfterMegaChoice();
}
function closeMegaModal(){
 document.getElementById("megaModal").style.display="none";
 continueAfterMegaChoice();
}





async function useRepel(){if(!(selectedItem&&selectedItem.id==="repel")||repelUsed||generating||isDraftComplete()||!currentOptions.length)return;repelUsed=true;const lows=currentOptions.map((p,i)=>({i,score:p.bst||0})).sort((a,b)=>a.score-b.score).slice(0,3).map(x=>x.i);let available=poolNames.filter(n=>!usedNames.has(n)&&!currentOptions.some(p=>p.name===n)&&n!=="giratina-origin");const replacements=await Promise.all(sampleDraftNames(available).slice(0,3).map(fetchPokemon));const enriched=await Promise.all(replacements.map(enrichMega));lows.forEach((idx,j)=>{currentOptions[idx]=addMegaFormsForSpecial(maybeReplaceWithSpecialPokemon(enriched[j]||currentOptions[idx]));currentOptions[idx].repelReplacement=true;});addRunEvent("Item","Repel replaced the three lowest-BST draft options.",team.length+1);warn("Repel used. Three low-BST options were replaced.");render();}
function useGigantamax(i){const p=team[i];const key=specialBaseKey(p);const file=GMAX_FORMS[key];if(!file)return;p.activeGmax={name:`Gigantamax ${p.displayName||pretty(p.name)}`,sprite:gmaxAsset(file),bonus:p.hp?Number(p.hp):150};p.gigantamax=true;gigantamaxUsed=true;certificateAssetPreparationPromise=null;addRunEvent("Item",`${p.displayName} became Gigantamax.`,ROUNDS);document.getElementById("itemModal").style.display="none";continueAfterItemChoice();render();}
function useOriginOrb(i){
 const p=team[i];
 if(!p||p.activeOrigin||!ORIGIN_FORMS[p.name]){
  openPostDraftItemModal();
  return;
 }
 const form=ORIGIN_FORMS[p.name];
 p.activeOrigin={name:form.displayName,scoreBst:form.bst||p.bst,types:form.types||p.types,sprite:specialAsset(form.sprite)};
 p.originBonus=300;
 p.displayName=form.displayName;
 certificateAssetPreparationPromise=null;
 addRunEvent("Quest",`${form.displayName} awakened through the Origin Orb: +300.`,ROUNDS);
 render();
 if(originFormeEligibleIndexes().length){
  openPostDraftItemModal();
 }else{
  originOrbResolved=true;
  const defaultSkip=document.getElementById("itemDefaultSkip"); if(defaultSkip){defaultSkip.style.display=""; defaultSkip.textContent="Skip";}
  document.getElementById("itemModal").style.display="none";
  continueAfterItemChoice();
 }
}
function usePrisonBottle(i){const p=team[i];p.activeUnbound={name:"Hoopa Unbound",scoreBst:(p.bst||600)+80,types:["psychic","dark"],sprite:specialAsset("HoopaUnbound.png")};p.displayName="Hoopa Unbound";p.unbound=true;prisonBottleResolved=true;certificateAssetPreparationPromise=null;addRunEvent("Quest","Hoopa Unbound completed: +500. Prison Bottle opened Hoopa's true form.",ROUNDS);document.getElementById("itemModal").style.display="none";continueAfterItemChoice();render();}
function purifyShadow(i){
 const p=team[i];
 if(!p||p.purified||!(p.specialTags||[]).includes("shadow")){
  openPostDraftItemModal();
  return;
 }
 p.purified=true;
 p.purifiedBonus=300;
 p.specialBonus=Math.max(0,(p.specialBonus||0)-300);
 p.specialTags=(p.specialTags||[]).filter(t=>t!=="shadow");
 if(p.name==="shadow-lugia"){
  p.name="lugia";p.displayName="Purified Lugia";
  p.sprite=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png`;
  p.types=["psychic","flying"];p.bst=680;
 }
 if(p.name==="shadow-mewtwo"){
  p.name="mewtwo";p.displayName="Purified Mewtwo";
  p.sprite=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png`;
  p.types=["psychic"];p.bst=680;
 }
 certificateAssetPreparationPromise=null;
 addRunEvent("Quest",`${p.displayName} purified with Soothe Bell: +500 quest, +300 purified label.`,ROUNDS);
 render();
 if(shadowPurificationEligibleIndexes().length){
  openPostDraftItemModal();
 }else{
  const defaultSkip=document.getElementById("itemDefaultSkip"); if(defaultSkip){defaultSkip.style.display=""; defaultSkip.textContent="Skip";}
  document.getElementById("itemModal").style.display="none";
  continueAfterItemChoice();
 }
}

async function retryApiRoll(){
 if(generating||isDraftComplete())return;
 warn("Retrying PokéAPI...");
 apiIssue=false;
 await generateOptions();
}

async function useMasterBallNextRoll(){
 if(!(selectedItem&&selectedItem.id==="master_ball")||masterBallUsed||generating||isDraftComplete())return;
 masterBallReady=true;
 await generateOptions();
}

async function rerollCurrentOptions(){
 if(!(selectedItem&&selectedItem.id==="ability_capsule")||abilityCapsuleUsed||generating||isDraftComplete())return;
 abilityCapsuleUsed=true;
 await generateOptions();
}


function canUsePokedex(){
 return selectedItem&&selectedItem.id==="pokedex"&&currentOptions.length&&!isDraftComplete()&&(rotomPokedexQuestCompleted||!pokedexUsed);
}
async function usePokedex(){
 if(!canUsePokedex())return;
 pokedexUsed=true;
 pokedexRevealRound=team.length+1;
 warn(rotomPokedexQuestCompleted?"Rotom Pokédex scanned the round. BST values revealed.":"Pokédex used. BST values revealed for this round.");
 render();
}


async function openImmediateDraftQuestModal(){
 // During the draft, pop hidden quests immediately when the required Pokémon meet.
 if(await openKyuremFusionModal())return true;
 if(await openCalyrexFusionModal())return true;
 if(await openRegigigasQuestModal())return true;
 if(await openRotomPokedexQuestModal())return true;
 return false;
}

async function pickPokemon(i){
 if(generating||isDraftComplete()||pendingGrunt)return;
 let p=currentOptions[i];
 team.push(p);
 usedNames.add(p.name);
 addRunEvent("Pick",`Selected ${p.shiny?"shiny ":""}${p.displayName}.`,team.length);
 maybeGrunt();

 if(pendingGrunt){
  if(isDraftComplete()){
   currentOptions=[];
   postDraftPendingAfterGrunt=true;
  }
  render();
  return;
 }

 const immediateQuest=await openImmediateDraftQuestModal();
 if(immediateQuest){render();return;}

 if(isDraftComplete()){
  currentOptions=[];
  addRunEvent("Draft","Team completed. Starting post-draft checks.");
  render();
  continuePostDraftPipeline(150);
  return;
 }

 await generateOptions();
}
function leagueResult(){
 if(!league)league=createLeague(); let score=finalScore(), stopped=false, sashAvailable=selectedItem&&selectedItem.id==="focus_sash", battles=[...(league.gyms||[]),...(league.eliteFour||[]),league.champion].filter(Boolean).map(b=>{
 let won=!stopped&&score>=b.required;
 let sash=false;
 if(!won&&!stopped&&sashAvailable&&(b.required-score)<=100){won=true;sash=true;sashAvailable=false}
 if(!won)stopped=true;
 return{...b,won,sash}
});
 let gyms=battles.filter(b=>b.stage==="Gym"&&b.won).length, elite=battles.filter(b=>b.stage==="Elite Four"&&b.won).length, champ=battles.some(b=>b.stage==="Champion"&&b.won);
 let legendaryResult=null, legend=false;if(champ){legend=score>=league.legendary.required;legendaryResult={...league.legendary,won:legend}}
 return{score,battles,gyms,elite,champ,legend,legendaryResult,rank:getRank(gyms,elite,champ,legend)}
}
function getRank(g,e,c,l){if(l)return{name:"GS Ball Tier",ball:"gs",note:"You cleared the hidden legendary trainer challenge."};if(c)return{name:"Master Ball Champion",ball:"master",note:"You beat the Champion. The hidden legend still stands."};if(e===4)return{name:"Cherish Ball Finalist",ball:"cherish",note:"Elite Four cleared, Champion survived."};if(e>=1)return{name:"Beast Ball Elite",ball:"beast",note:`You beat ${e} Elite Four member${e>1?"s":""}.`};if(g===16)return{name:"Luxury Ball Gym Conqueror",ball:"luxury",note:"All 16 badges secured."};if(g>=13)return{name:"Premier Ball Ace",ball:"premier",note:"Almost at the League gates."};if(g>=9)return{name:"Ultra Ball Contender",ball:"ultra",note:"A serious run."};if(g>=5)return{name:"Great Ball Challenger",ball:"great",note:"Respectable climb."};return{name:"Poké Ball Rookie",ball:"",note:"The journey starts rough."}}

async function showCelebration(rankName,score,force=false){
 if(force)celebrationShown=false;
 if(celebrationShown&&!force)return;
 celebrationShown=true;
 window.lastCelebrationText=`Congrats you are a ${rankName} Trainer. You reached a score of ${score}.`;
 const celebrationResult=leagueResult();
 if(difficultyMode==="normal"&&celebrationResult.legend)unlockMasterMode();
 recordRunHistory();
 const overlay=document.getElementById("celebrationOverlay");
 const text=document.getElementById("celebrationText");
 const layer=document.getElementById("confettiLayer");
 const card=document.querySelector("#celebrationOverlay .celebrationCard");
 const teamBox=document.getElementById("celebrationTeam");
 if(!overlay||!text||!layer||!teamBox){alert(window.lastCelebrationText);return;}
 if(card)card.classList.add("previewMode");
 text.textContent="";
 teamBox.className="";
 teamBox.style.margin="0";
 teamBox.innerHTML='<div class="certificateLoading">Rendering certificate...</div>';
 const status=document.getElementById("shareStatus");
 if(status)status.textContent="Rendering certificate preview...";
 const colors=["#facc15","#ec4899","#22c55e","#38bdf8","#a78bfa","#fb7185","#f97316"];
 let bits="";
 for(let i=0;i<130;i++){
  const left=Math.random()*100, delay=Math.random()*2.3, duration=2.2+Math.random()*1.8, color=colors[Math.floor(Math.random()*colors.length)];
  bits+=`<span class="confetti" style="left:${left}%;background:${color};animation-delay:${delay}s;animation-duration:${duration}s"></span>`;
 }
 for(let i=0;i<36;i++){
  bits+=`<span class="sparkle" style="left:${Math.random()*100}%;top:${Math.random()*100}%;animation-delay:${Math.random()}s"></span>`;
 }
 layer.innerHTML=bits;
 overlay.style.display="flex";
 try{
  await prepareCertificateAssetsForCurrentRun(true);
  if(window.currentCertificatePreviewUrl){URL.revokeObjectURL(window.currentCertificatePreviewUrl);window.currentCertificatePreviewUrl=null;}
  const canvas=await createCertificatePreviewCanvas();
  teamBox.innerHTML="";
  teamBox.appendChild(canvas);
  if(status)status.textContent="Certificate preview ready. Copy Image will copy/download the exported certificate.";
 }catch(e){
  console.error(e);
  teamBox.className="revealteam";
  teamBox.style.margin="18px 0";
  teamBox.innerHTML=team.map((p,i)=>`<div class="reveal ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}"><div><div class="tname">${p.shiny?'✨ ':''}${p.displayName}</div><div class="tscore">${activeTypes(p,i).join(" / ")}</div></div></div>`).join("");
  if(status)status.textContent="Certificate preview failed, but Copy Image can still try to export.";
 }
}
function closeCelebration(){
 const overlay=document.getElementById("celebrationOverlay");
 if(overlay)overlay.style.display="none";
 const card=document.querySelector("#celebrationOverlay .celebrationCard");
 if(card)card.classList.remove("previewMode");
 if(window.currentCertificatePreviewUrl){URL.revokeObjectURL(window.currentCertificatePreviewUrl);window.currentCertificatePreviewUrl=null;}
}


function drawRoundedRect(ctx,x,y,w,h,r,fill,stroke,lineWidth=2){
 ctx.beginPath();
 ctx.moveTo(x+r,y);
 ctx.lineTo(x+w-r,y);
 ctx.quadraticCurveTo(x+w,y,x+w,y+r);
 ctx.lineTo(x+w,y+h-r);
 ctx.quadraticCurveTo(x+w,y+h,x+w-r,y+h);
 ctx.lineTo(x+r,y+h);
 ctx.quadraticCurveTo(x,y+h,x,y+h-r);
 ctx.lineTo(x,y+r);
 ctx.quadraticCurveTo(x,y,x+r,y);
 ctx.closePath();
 if(fill){ctx.fillStyle=fill;ctx.fill();}
 if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=lineWidth;ctx.stroke();}
}
const CERTIFICATE_IMAGE_CACHE=new Map();
async function fetchImageAsDataUrl(src){
 const s=String(src||"");
 if(!s)return null;
 if(!/^https?:\/\//i.test(s))return s;
 if(CERTIFICATE_IMAGE_CACHE.has(s))return CERTIFICATE_IMAGE_CACHE.get(s);
 try{
  const res=await fetch(s,{mode:"cors",cache:"force-cache"});
  if(!res.ok)throw new Error("HTTP "+res.status);
  const blob=await res.blob();
  const dataUrl=await new Promise((resolve,reject)=>{
   const fr=new FileReader();
   fr.onload=()=>resolve(fr.result);
   fr.onerror=()=>reject(new Error("FileReader failed"));
   fr.readAsDataURL(blob);
  });
  CERTIFICATE_IMAGE_CACHE.set(s,dataUrl);
  return dataUrl;
 }catch(e){
  console.warn("Certificate image fetch failed:", s, e);
  // Never return the original remote URL during certificate export.
  // Returning it can taint the canvas and force the ugly emergency certificate.
  return null;
 }
}
async function loadImageForCertificate(src){
 return await new Promise(async resolve=>{
  if(!src){resolve(null);return;}
  const s=String(src);
  if(window.CERTIFICATE_EXPORT_NO_REMOTE && /^https?:\/\//i.test(s)){resolve(null);return;}
  const resolved=await fetchImageAsDataUrl(s);
  if(!resolved){resolve(null);return;}
  const img=new Image();
  img.onload=()=>resolve(img);
  img.onerror=()=>resolve(null);
  img.src=resolved;
 });
}
function fitCanvasText(ctx,text,maxWidth,startSize,minSize=18,weight="900",font="Arial"){
 let size=startSize;
 do{
  ctx.font=`${weight} ${size}px ${font}`;
  if(ctx.measureText(text).width<=maxWidth)return size;
  size-=2;
 }while(size>=minSize);
 return minSize;
}
function drawWrappedText(ctx,text,x,y,maxWidth,lineHeight,maxLines=99,align="left"){
 const words=String(text||"").split(/\s+/).filter(Boolean);
 let line="",lines=[];
 for(let n=0;n<words.length;n++){
  let test=line+words[n]+" ";
  if(ctx.measureText(test).width>maxWidth&&line){
   lines.push(line.trim());
   line=words[n]+" ";
  }else line=test;
 }
 if(line.trim())lines.push(line.trim());
 if(lines.length>maxLines){
  lines=lines.slice(0,maxLines);
  let last=lines[lines.length-1];
  while(ctx.measureText(last+"…").width>maxWidth&&last.length>1)last=last.slice(0,-1);
  lines[lines.length-1]=last+"…";
 }
 const oldAlign=ctx.textAlign;
 ctx.textAlign=align;
 lines.forEach((ln,i)=>ctx.fillText(ln,x,y+i*lineHeight));
 ctx.textAlign=oldAlign;
 return y+Math.max(0,lines.length-1)*lineHeight;
}
function drawPokeball(ctx,x,y,r){
 ctx.beginPath();ctx.arc(x,y,r,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();ctx.lineWidth=Math.max(5,r*.1);ctx.strokeStyle="#111827";ctx.stroke();
 ctx.beginPath();ctx.arc(x,y,r,Math.PI,0);ctx.fillStyle="#ef4444";ctx.fill();ctx.stroke();
 ctx.beginPath();ctx.moveTo(x-r,y);ctx.lineTo(x+r,y);ctx.lineWidth=Math.max(6,r*.13);ctx.strokeStyle="#111827";ctx.stroke();
 ctx.beginPath();ctx.arc(x,y,r*.32,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();ctx.lineWidth=Math.max(5,r*.1);ctx.strokeStyle="#111827";ctx.stroke();
}



function drawCertificateTrainerAvatar(ctx,x,y,size,label){
 drawRoundedRect(ctx,x,y,size,size,22,"#f8fafc","#e2e8f0",2);
 const cx=x+size/2;
 const top=y+12;
 // cap/hair
 ctx.fillStyle="#111827";
 ctx.beginPath();ctx.arc(cx,top+24,24,Math.PI,0);ctx.fill();
 ctx.fillRect(cx-25,top+23,50,12);
 ctx.fillStyle="#ef4444";
 ctx.fillRect(cx-20,top+18,40,8);
 // face
 ctx.fillStyle="#f1c27d";
 ctx.beginPath();ctx.arc(cx,top+43,20,0,Math.PI*2);ctx.fill();
 // body
 ctx.fillStyle="#6366f1";
 drawRoundedRect(ctx,cx-24,y+70,48,46,12,"#6366f1",null,0);
 ctx.fillStyle="#0f172a";
 ctx.fillRect(cx-20,y+116,14,34);
 ctx.fillRect(cx+6,y+116,14,34);
 // pokeball hand
 ctx.beginPath();ctx.arc(cx+35,y+82,10,0,Math.PI*2);ctx.fillStyle="#fff";ctx.fill();ctx.lineWidth=3;ctx.strokeStyle="#111827";ctx.stroke();
 ctx.beginPath();ctx.arc(cx+35,y+82,10,Math.PI,0);ctx.fillStyle="#ef4444";ctx.fill();ctx.stroke();
 // small initial badge
 ctx.fillStyle="#0f172a";
 ctx.font="900 18px Arial";
 ctx.textAlign="center";
 ctx.fillText(String(label||"?").slice(0,1).toUpperCase(),cx,y+size-10);
 ctx.textAlign="left";
}

async function createCertificateBlob(){
 const canvas=document.createElement("canvas");
 canvas.width=1600;
 canvas.height=2200;
 const ctx=canvas.getContext("2d");

 const bg=ctx.createLinearGradient(0,0,1600,2200);
 bg.addColorStop(0,"#fffaf0");
 bg.addColorStop(0.55,"#fff2bd");
 bg.addColorStop(1,"#fde68a");
 ctx.fillStyle=bg;
 ctx.fillRect(0,0,1600,2200);

 ctx.strokeStyle="#92400e"; ctx.lineWidth=30; ctx.strokeRect(38,38,1524,2124);
 ctx.strokeStyle="#facc15"; ctx.lineWidth=10; ctx.strokeRect(78,78,1444,2044);
 ctx.strokeStyle="rgba(15,23,42,.14)"; ctx.lineWidth=3; ctx.strokeRect(104,104,1392,1992);

 function flourish(x,y,flipX=false,flipY=false){
  ctx.save(); ctx.translate(x,y); ctx.scale(flipX?-1:1, flipY?-1:1);
  ctx.strokeStyle="rgba(146,64,14,.42)"; ctx.lineWidth=4;
  ctx.beginPath();
  ctx.moveTo(0,0); ctx.quadraticCurveTo(26,-6,54,20); ctx.quadraticCurveTo(72,36,94,30);
  ctx.moveTo(8,24); ctx.quadraticCurveTo(22,8,42,10); ctx.quadraticCurveTo(58,12,68,30);
  ctx.stroke(); ctx.restore();
 }
 flourish(128,120,false,false);
 flourish(1472,120,true,false);
 flourish(128,2082,false,true);
 flourish(1472,2082,true,true);

 // Header
 ctx.textAlign="center";
 drawPokeball(ctx,160,165,42);
 ctx.fillStyle="#f59e0b"; ctx.font="900 22px Arial";
 ctx.fillText("✦",305,170); ctx.fillText("✦",1295,170);

 let titleSize=fitCanvasText(ctx,"POKÉMON COLOSSEUM CERTIFICATE",1020,44,28,"900");
 ctx.font=`900 ${titleSize}px Arial`;
 ctx.fillStyle="#0f172a";
 ctx.fillText("POKÉMON COLOSSEUM CERTIFICATE",850,178);

 ctx.font="900 78px Georgia";
 ctx.fillText("Congratulations!",800,300);

 
 const concept=teamConcept();
 const rank=leagueResult().rank.name;
 const trainerLabel=(trainer&&trainer.label)?trainer.label:"Trainer";
 const score=finalScore();

 // Main title with highlighted rank
 ctx.textAlign="center";
 ctx.fillStyle="#475569";
 ctx.font="900 30px Arial";
 ctx.fillText("Congrats you are a", 570, 390);
 let rankLine=`${rank} Trainer`;
 let rankTextSize=fitCanvasText(ctx,rankLine,560,52,28,"900");
 ctx.fillStyle="#0f172a";
 ctx.font=`900 ${rankTextSize}px Arial`;
 ctx.fillText(rankLine, 980, 390);

 ctx.fillStyle="#475569";
 ctx.font="900 30px Arial";
 ctx.fillText(`You reached a score of ${score}.`,800,438);


 // Info panels
 const panelY=490, panelH=250;
 drawRoundedRect(ctx,150,panelY,610,panelH,32,"rgba(255,255,255,.90)","#d6d3d1",6);
 drawRoundedRect(ctx,840,panelY,610,panelH,32,"rgba(255,255,255,.90)","#d6d3d1",6);

 // Trainer panel: big sprite left, clean text rows right
 ctx.textAlign="left";
 ctx.fillStyle="#64748b";
 ctx.font="900 23px Arial";
 ctx.fillText("TRAINER",190,panelY+48);

 const avatarX=190, avatarY=panelY+70, avatarSize=138;
 async function loadTrainerCertSprite(){
  if(trainer&&trainer.sprite){
   const sources=trainerSpriteCandidates(trainer.sprite);
   for(const src of sources){
    const img=await loadImageForCertificate(src);
    if(img)return img;
   }
  }
  const liveImg=document.querySelector("#playerSpriteBox img");
  if(liveImg&&liveImg.src){
   const live=await loadImageForCertificate(liveImg.src);
   if(live)return live;
  }
  return null;
 }
 const timg=await loadTrainerCertSprite();
 if(timg){
  drawRoundedRect(ctx,avatarX,avatarY,avatarSize,avatarSize,22,"#f8fafc","#e2e8f0",2);
  ctx.drawImage(timg,avatarX+12,avatarY+10,avatarSize-24,avatarSize-20);
 }else{
  drawCertificateTrainerAvatar(ctx,avatarX,avatarY,avatarSize,trainerLabel);
 }

 ctx.fillStyle="#0f172a";
 let trainerSize=fitCanvasText(ctx,trainerLabel,350,42,26,"900");
 ctx.font=`900 ${trainerSize}px Arial`;
 ctx.fillText(trainerLabel,360,panelY+105);

 ctx.fillStyle="#64748b";
 ctx.font="800 22px Arial";
 ctx.fillText("LEAGUE CERTIFICATION",360,panelY+130);
 ctx.font="900 23px Arial";
 ctx.fillText("FINAL SCORE",360,panelY+170);

 ctx.fillStyle="#0f172a";
 ctx.font="900 54px Arial";
 ctx.fillText(String(score),360,panelY+223);

 // Rank / Concept panel: more room, no overlap
 ctx.fillStyle="#64748b";
 ctx.font="900 23px Arial";
 ctx.fillText("RANK",880,panelY+48);
 ctx.fillText("TEAM CONCEPT",880,panelY+124);

 ctx.fillStyle="#0f172a";
 let rankSize=fitCanvasText(ctx,rank,520,36,22,"900");
 ctx.font=`900 ${rankSize}px Arial`;
 ctx.fillText(rank,880,panelY+86);

 ctx.fillStyle="#0f172a";
 ctx.font="900 23px Arial";
 drawWrappedText(ctx,concept.name,880,panelY+162,520,27,2,"left");

 ctx.fillStyle="#475569";
 ctx.font="800 19px Arial";
 drawWrappedText(ctx,`${concept.reason} ${concept.bonus?`(+${concept.bonus})`:""}`,880,panelY+218,520,23,2,"left");

 // Divider
 ctx.strokeStyle="rgba(146,64,14,.22)";
 ctx.lineWidth=3;
 ctx.beginPath(); ctx.moveTo(150,800); ctx.lineTo(1450,800); ctx.stroke();

 ctx.textAlign="left";
 ctx.fillStyle="#0f172a";
 ctx.font="900 46px Georgia";
 ctx.fillText("Certified Team",150,860);

 // Team grid
 const cardW=625, cardH=250, gapX=70, gapY=42;
 const startX=150, startY=905;

 for(let i=0;i<team.length;i++){
  const col=i%2;
  const row=Math.floor(i/2);
  const x=startX+col*(cardW+gapX);
  const y=startY+row*(cardH+gapY);

  drawRoundedRect(ctx,x,y,cardW,cardH,34,"rgba(255,255,255,.94)","#dbeafe",7);

  const p=team[i];
  const spriteSrc=currentSprite(p,i)||p.sprite||"";
  const img=await loadImageForCertificate(spriteSrc);

  drawRoundedRect(ctx,x+24,y+30,150,150,26,"#f8fafc","#e2e8f0",2);
  if(img){
   ctx.drawImage(img,x+34,y+38,130,130);
  }else{
   drawSpritePlaceholder(ctx,x+24,y+30,150,150,p.displayName,"POKÉ");
  }

  ctx.fillStyle="#0f172a";
  const fullName=`${i+1}. ${p.displayName}`;
  const nameSize=fitCanvasText(ctx,fullName,390,38,24,"900");
  ctx.font=`900 ${nameSize}px Arial`;
  ctx.fillText(fullName,x+200,y+58);

  ctx.fillStyle="#475569";
  const activeBst=scoreBaseFor(p,i);
  const bstText=`${activeBst} BST${lightBallAppliesTo(i)?` • ${lightBallEffectText(p,i)}`:""}`;
  let bstSize=fitCanvasText(ctx,bstText,385,28,18,"900");
  ctx.font=`900 ${bstSize}px Arial`;
  ctx.fillText(bstText,x+200,y+96);

  const types=activeTypes(p,i);
  let tx=x+200, ty=y+126;
  ctx.font="900 20px Arial";
  for(const t of types.slice(0,2)){
   const label=pretty(t);
   const tw=ctx.measureText(label).width+34;
   drawRoundedRect(ctx,tx,ty,tw,38,19,"#e2e8f0","#cbd5e1",2);
   ctx.fillStyle="#334155";
   ctx.fillText(label,tx+17,ty+26);
   tx+=tw+12;
  }

  let tagX=x+200, tagY=y+185;
  const tags=[];
  if(selectedMegaIndex===i&&p.activeMega&&p.shiny)tags.push({text:`${p.activeMega.name} ✨`,bg:"#fdf4ff",fg:"#86198f",border:"#d946ef"});
  else if(selectedMegaIndex===i&&p.activeMega)tags.push({text:p.activeMega.name,bg:"#ede9fe",fg:"#5b21b6",border:"#8b5cf6"});
  if(p.shiny && !(selectedMegaIndex===i&&p.activeMega))tags.push({text:"Shiny +300",bg:"#fef3c7",fg:"#92400e",border:"#f59e0b"});
  if(selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&types.map(t=>t.toLowerCase()).includes(elementalPlateType))tags.push({text:"+50 Plate",bg:"#ecfdf5",fg:"#047857",border:"#34d399"});
  if(lightBallAppliesTo(i))tags.push({text:isPikachuVariant(p)?"Light Ball: BST x2":"Light Ball: +150",bg:"#fff7ed",fg:"#9a3412",border:"#fb923c"});
  if(selectedItem&&selectedItem.id==="lucky_egg"&&isBabyPokemon(p))tags.push({text:"Lucky Egg +300",bg:"#f0fdf4",fg:"#166534",border:"#86efac"});
  if(selectedItem&&selectedItem.id==="fossil"&&isFossilPokemon(p))tags.push({text:"Fossil +100",bg:"#fefce8",fg:"#854d0e",border:"#fde047"});
  if(p.activeGmax)tags.push({text:`Gigantamax +${p.activeGmax.bonus||(p.hp?Number(p.hp):150)}`,bg:"#eff6ff",fg:"#1d4ed8",border:"#93c5fd"});
  if(p.activeOrigin)tags.push({text:"Origin Forme +300",bg:"#f5f3ff",fg:"#6d28d9",border:"#a78bfa"});
  if((p.specialTags||[]).includes("shadow")&&p.specialBonus)tags.push({text:`Shadow +${p.specialBonus}`,bg:"#f3f4f6",fg:"#111827",border:"#9ca3af"});
  else if(p.special&&p.specialBonus)tags.push({text:`Special +${p.specialBonus}`,bg:"#fff7ed",fg:"#9a3412",border:"#fdba74"});

  ctx.font="900 18px Arial";
  tags.slice(0,2).forEach(tag=>{
   let txt=tag.text;
   let w=Math.min(250,ctx.measureText(txt).width+30);
   while(ctx.measureText(txt).width>w-24&&txt.length>4)txt=txt.slice(0,-2)+"…";
   w=Math.min(250,Math.max(86,ctx.measureText(txt).width+30));
   drawRoundedRect(ctx,tagX,tagY,w,34,17,tag.bg,tag.border,2);
   ctx.fillStyle=tag.fg;
   ctx.fillText(txt,tagX+15,tagY+23);
   tagX+=w+12;
  });
 }

 // Footer
 const footerY=1935;
 drawRoundedRect(ctx,150,footerY,1300,145,34,"rgba(255,255,255,.82)","#e5e7eb",6);
 ctx.textAlign="center";
 ctx.fillStyle="#0f172a";
 ctx.font="900 36px Georgia";
 ctx.fillText("Official Colosseum Seal",800,footerY+55);
 ctx.fillStyle="#475569";
 ctx.font="800 24px Arial";
 ctx.fillText("Draft blind. Build smart. Rule the League.",800,footerY+94);
 drawPokemonTrophy(ctx,260,footerY+74,0.9);
 drawPokeball(ctx,1340,footerY+72,44);

 return new Promise((resolve,reject)=>{try{canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("Canvas export failed")),"image/png")}catch(e){reject(e)}});
}


function drawSpritePlaceholder(ctx,x,y,w,h,label,tag="SPRITE"){
 drawRoundedRect(ctx,x,y,w,h,24,"#f8fafc","#dbe4f0",2);
 ctx.fillStyle="#e2e8f0";
 ctx.beginPath(); ctx.arc(x+w/2,y+h/2-8,Math.min(w,h)*0.28,0,Math.PI*2); ctx.fill();
 ctx.fillStyle="#64748b";
 ctx.font="900 14px Arial";
 ctx.textAlign="center";
 ctx.fillText(tag,x+w/2,y+h/2-2);
 ctx.font="900 18px Arial";
 let short=String(label||"?");
 if(short.length>10)short=short.slice(0,9)+"…";
 ctx.fillText(short,x+w/2,y+h-18);
 ctx.textAlign="left";
}

function drawPokemonTrophy(ctx,cx,cy,scale=1){
 ctx.save();
 ctx.translate(cx,cy);
 ctx.scale(scale,scale);
 ctx.lineWidth=6;
 ctx.strokeStyle="#92400e";
 ctx.fillStyle="#fbbf24";
 // cup
 ctx.beginPath();
 ctx.moveTo(-38,-28);
 ctx.lineTo(38,-28);
 ctx.quadraticCurveTo(34,6,18,24);
 ctx.lineTo(-18,24);
 ctx.quadraticCurveTo(-34,6,-38,-28);
 ctx.closePath();
 ctx.fill(); ctx.stroke();
 // handles
 ctx.beginPath(); ctx.moveTo(-38,-18); ctx.quadraticCurveTo(-62,-18,-58,4); ctx.quadraticCurveTo(-56,18,-34,14); ctx.stroke();
 ctx.beginPath(); ctx.moveTo(38,-18); ctx.quadraticCurveTo(62,-18,58,4); ctx.quadraticCurveTo(56,18,34,14); ctx.stroke();
 // stem and base
 ctx.fillStyle="#f59e0b";
 ctx.fillRect(-10,24,20,22);
 ctx.fillRect(-32,46,64,12);
 ctx.strokeRect(-10,24,20,22);
 ctx.strokeRect(-32,46,64,12);
 // pokeball emblem
 ctx.fillStyle="#fff";
 ctx.beginPath(); ctx.arc(0,-2,16,0,Math.PI*2); ctx.fill(); ctx.stroke();
 ctx.fillStyle="#ef4444";
 ctx.beginPath(); ctx.arc(0,-6,16,Math.PI,0); ctx.arc(0,-2,16,0,Math.PI,true); ctx.fill();
 ctx.beginPath(); ctx.moveTo(-16,-2); ctx.lineTo(16,-2); ctx.stroke();
 ctx.fillStyle="#fff";
 ctx.beginPath(); ctx.arc(0,-2,5,0,Math.PI*2); ctx.fill(); ctx.stroke();
 ctx.restore();
}

function wrapCanvasText(ctx,text,x,y,maxWidth,lineHeight){
 const words=text.split(" ");let line="";
 for(let n=0;n<words.length;n++){
  let test=line+words[n]+" ";
  if(ctx.measureText(test).width>maxWidth&&n>0){ctx.fillText(line,x,y);line=words[n]+" ";y+=lineHeight}
  else line=test;
 }
 ctx.fillText(line,x,y);
}


function setShareStatus(msg){
 const el=document.getElementById("shareStatus");
 if(el)el.textContent=msg;
}
function blobToObjectDownload(blob,filename="pokemon-colosseum-certificate.png"){
 return new Promise(resolve=>{
  const url=URL.createObjectURL(blob);
  const a=document.createElement("a");
  a.href=url;
  a.download=filename;
  a.rel="noopener";
  a.style.display="none";
  document.body.appendChild(a);
  a.click();
  setTimeout(()=>{
   try{document.body.removeChild(a)}catch(e){}
   URL.revokeObjectURL(url);
   resolve();
  },800);
 });
}

async function createMinimalCertificateBlob(){
 const canvas=document.createElement("canvas");
 canvas.width=1600;
 canvas.height=2200;
 const ctx=canvas.getContext("2d");

 const bg=ctx.createLinearGradient(0,0,1600,2200);
 bg.addColorStop(0,"#fffaf0");
 bg.addColorStop(.55,"#fff2bd");
 bg.addColorStop(1,"#fde68a");
 ctx.fillStyle=bg; ctx.fillRect(0,0,1600,2200);

 ctx.strokeStyle="#92400e";ctx.lineWidth=30;ctx.strokeRect(38,38,1524,2124);
 ctx.strokeStyle="#facc15";ctx.lineWidth=10;ctx.strokeRect(78,78,1444,2044);
 ctx.strokeStyle="rgba(15,23,42,.14)";ctx.lineWidth=3;ctx.strokeRect(104,104,1392,1992);

 const concept=teamConcept();
 const rank=leagueResult().rank.name;
 const trainerLabel=(trainer&&trainer.label)?trainer.label:"Trainer";
 const score=finalScore();

 ctx.textAlign="center";
 ctx.fillStyle="#0f172a";
 ctx.font="900 54px Arial";
 ctx.fillText("POKÉMON COLOSSEUM CERTIFICATE",800,180);
 ctx.font="900 82px Georgia";
 ctx.fillText("Congratulations!",800,300);
 ctx.fillStyle="#475569";
 ctx.font="900 34px Arial";
 ctx.fillText("Congrats you are a",560,390);
 ctx.fillStyle="#0f172a";
 ctx.font="900 44px Arial";
 ctx.fillText(`${rank} Trainer`,950,390);
 ctx.fillStyle="#475569";
 ctx.font="900 30px Arial";
 ctx.fillText(`You reached a score of ${score}.`,800,440);

 drawRoundedRect(ctx,150,520,610,220,32,"rgba(255,255,255,.90)","#d6d3d1",6);
 drawRoundedRect(ctx,840,520,610,220,32,"rgba(255,255,255,.90)","#d6d3d1",6);
 ctx.textAlign="left";
 ctx.fillStyle="#64748b"; ctx.font="900 24px Arial";
 ctx.fillText("TRAINER",190,570);
 ctx.fillText("SCORE",190,655);
 ctx.fillText("RANK",880,570);
 ctx.fillText("TEAM CONCEPT",880,655);
 ctx.fillStyle="#0f172a"; ctx.font="900 42px Arial";
 ctx.fillText(trainerLabel,190,615);
 ctx.fillText(String(score),190,705);
 ctx.fillText(rank,880,615);
 let conceptSize=fitCanvasText(ctx,concept.name,520,34,22,"900");
 ctx.font=`900 ${conceptSize}px Arial`;
 ctx.fillText(concept.name,880,705);

 ctx.fillStyle="#0f172a"; ctx.font="900 46px Georgia";
 ctx.fillText("Certified Team",150,840);

 const cardW=625, cardH=210, gapX=70, gapY=36;
 const startX=150, startY=890;
 for(let i=0;i<team.length;i++){
  const col=i%2,row=Math.floor(i/2);
  const x=startX+col*(cardW+gapX), y=startY+row*(cardH+gapY);
  const p=team[i];
  drawRoundedRect(ctx,x,y,cardW,cardH,34,"rgba(255,255,255,.94)","#dbeafe",7);
  drawSpritePlaceholder(ctx,x+24,y+30,130,130,p.displayName,"POKÉ");
  ctx.fillStyle="#0f172a";
  const nameSize=fitCanvasText(ctx,`${i+1}. ${p.displayName}`,390,36,22,"900");
  ctx.font=`900 ${nameSize}px Arial`;
  ctx.fillText(`${i+1}. ${p.displayName}`,x+180,y+62);
  ctx.fillStyle="#475569"; ctx.font="900 24px Arial";
  const flags=[];
  if(p.shiny)flags.push("Shiny");
  if(selectedMegaIndex===i&&p.activeMega)flags.push(p.activeMega.name);
  ctx.fillText(activeTypes(p,i).map(pretty).join(" / "),x+180,y+102);
  if(flags.length){
   ctx.fillStyle="#7c3aed"; ctx.font="900 20px Arial";
   drawWrappedText(ctx,flags.join(" • "),x+180,y+140,390,24,2,"left");
  }
 }

 const footerY=1935;
 drawRoundedRect(ctx,150,footerY,1300,145,34,"rgba(255,255,255,.82)","#e5e7eb",6);
 ctx.textAlign="center";
 ctx.fillStyle="#0f172a";ctx.font="900 36px Georgia";
 ctx.fillText("Official Colosseum Seal",800,footerY+55);
 ctx.fillStyle="#475569";ctx.font="800 24px Arial";
 ctx.fillText("Draft blind. Build smart. Rule the League.",800,footerY+94);
 drawPokemonTrophy(ctx,260,footerY+74,0.9);
 drawPokeball(ctx,1340,footerY+72,44);

 return new Promise((resolve,reject)=>{try{canvas.toBlob(blob=>blob?resolve(blob):reject(new Error("Fallback canvas export failed")),"image/png")}catch(e){reject(e)}});
}

async function safeCreateCertificateBlob(){
 // Full layout, with every image fetched as a safe data URL first.
 window.CERTIFICATE_EXPORT_NO_REMOTE=false;
 window.CERTIFICATE_EXPORT_STRICT_SAFE=false;
 try{
  const blob=await createCertificateBlob();
  if(blob instanceof Blob && blob.size>0)return blob;
 }catch(e){
  console.warn("Full certificate export failed. Retrying same layout in strict safe mode.", e);
 }

 // Same full certificate layout, but all remote images that cannot be fetched are replaced
 // with in-card placeholders. This keeps trainer/rank/team layout intact.
 window.CERTIFICATE_EXPORT_NO_REMOTE=true;
 window.CERTIFICATE_EXPORT_STRICT_SAFE=true;
 try{
  const blob=await createCertificateBlob();
  if(blob instanceof Blob && blob.size>0)return blob;
 }catch(e){
  console.warn("Strict safe full certificate export failed.", e);
 }finally{
  window.CERTIFICATE_EXPORT_NO_REMOTE=false;
  window.CERTIFICATE_EXPORT_STRICT_SAFE=false;
 }

 // Last resort remains, but should almost never be reached.
 const fallback=await createMinimalCertificateBlob();
 if(fallback instanceof Blob && fallback.size>0)return fallback;
 throw new Error("Certificate image could not be created.");
}

async function copyCertificateImage(){
 setShareStatus("Creating certificate image...");
 let blob;
 try{
  blob=await safeCreateCertificateBlob();
 }catch(e){
  console.error(e);
  setShareStatus("Could not create the certificate image. The browser blocked canvas export.");
  alert("Could not create the certificate image. The browser blocked canvas export.");
  return;
 }

 // Clipboard image copy only works in supported browsers and usually only in secure contexts.
 try{
  if(window.isSecureContext && navigator.clipboard && window.ClipboardItem){
   await navigator.clipboard.write([new ClipboardItem({"image/png":blob})]);
   setShareStatus("Certificate image copied to clipboard.");
   alert("Certificate image copied to clipboard.");
   return;
  }
 }catch(e){
  console.warn("Image clipboard copy failed, downloading instead.",e);
 }

 // Reliable fallback for local HTML/file usage.
 try{
  await blobToObjectDownload(blob);
  setShareStatus("Clipboard image copy was blocked by the browser, so the certificate PNG was downloaded instead.");
  alert("Clipboard image copy was blocked by the browser, so the certificate PNG was downloaded instead.");
 }catch(e){
  console.error(e);
  setShareStatus("Could not copy or download the certificate image.");
  alert("Could not copy or download the certificate image.");
 }
}

async function shareCelebration(platform){
 const text=window.lastCelebrationText||"I completed a Pokémon Colosseum run!";
 const msg=`${text} #PokemonColosseum`;
 setShareStatus(`Preparing certificate for ${platform}...`);
 let blob;
 try{
  blob=await safeCreateCertificateBlob();
 }catch(e){
  console.error(e);
  setShareStatus("Could not create the certificate image.");
  alert("Could not create the certificate image.");
  return;
 }
 const file=new File([blob],"pokemon-colosseum-certificate.png",{type:"image/png"});
 if(navigator.canShare&&navigator.canShare({files:[file]})&&navigator.share){
  try{
   await navigator.share({title:"Pokémon Colosseum Result",text:msg,files:[file]});
   setShareStatus(`Shared with ${platform}.`);
   return;
  }catch(e){}
 }
 if(navigator.share){
  try{
   await navigator.share({title:"Pokémon Colosseum Result",text:msg});
   setShareStatus(`Shared text with ${platform}.`);
   return;
  }catch(e){}
 }
 try{await navigator.clipboard?.writeText(msg)}catch(e){}
 await blobToObjectDownload(blob);
 setShareStatus(`Certificate downloaded and result text copied for ${platform}.`);
 alert(`Certificate image downloaded and result text copied for ${platform}.`);
}

function getBattleSequence(){
 const res=leagueResult();
 const seq=[...res.battles];
 if(res.legendaryResult)seq.push({
  stage:"Secret Challenge",
  number:1,
  trainer:res.legendaryResult,
  name:res.legendaryResult.name,
  theme:res.legendaryResult.title,
  badge:null,
  required:res.legendaryResult.required,
  won:res.legendaryResult.won,
  secret:true
 });
 const visible=[];
 for(let b of seq){
  visible.push(b);
  if(!b.won)break;
 }
 return visible;
}
function startBattleSimulation(){
 if(battleSimulationShown){scheduleCelebration(500);return}
 battleSimulationShown=true;
 battleSimulationBattles=getBattleSequence();
 battleSimulationIndex=0;
 const overlay=document.getElementById("battleSimOverlay");
 if(!overlay||!battleSimulationBattles.length){scheduleCelebration(500);return}
 overlay.style.display="flex";
 renderBattleSimulationStep();
}
function renderBattleSimulationStep(){
 const b=battleSimulationBattles[battleSimulationIndex];
 const score=finalScore();
 const header=document.getElementById("battleSimHeader");
 const title=document.getElementById("battleSimTitle");
 const sub=document.getElementById("battleSimSub");
 const opp=document.getElementById("battleSimOpponent");
 const result=document.getElementById("battleSimResult");
 const next=document.getElementById("battleSimNextBtn");
 const dots=document.getElementById("battleSimDots");
 if(!b)return finishBattleSimulation();

 header.textContent=`Battle ${battleSimulationIndex+1} of ${battleSimulationBattles.length}`;
 title.textContent=b.won?"Victory!":"Defeated!";
 sub.textContent=b.won
  ? `Your score ${score} overcame ${b.name}'s requirement of ${b.required}.`
  : `${b.name} stopped your run. Required: ${b.required}. Your score: ${score}.`;

 const badgeMarkup=b.stage==='Champion'?`<div class="battleSimBadge"><img class="gsball-img" src="assets/items/WinnerTrophy.jfif" alt="Winner Trophy"></div>`:b.secret
  ? `<div class="battleSimBadge" title="GS Ball"><img class="gsball-img" src="assets/GS_Ball_artwork.webp" alt="GS Ball"></div>`
  : `<div class="battleSimBadge">${badgeImg(b.badge,b.theme,b.stage).replace('class="badge"','class="badge"')}</div>`;

 opp.innerHTML=`${imgTag(b.trainer||b)}<div><div class="label">${b.stage} ${b.stage==="Champion"||b.secret?"":b.number}</div><div class="name" style="font-size:26px">${b.name}</div><div class="types" style="margin-top:8px">${b.secret?`<span class="type">${b.theme}</span>`:typePill(b.theme)}</div><div class="tscore" style="margin-top:8px">Required: ${b.required}</div>${renderOpponentTeamSprites(b.team)}</div>${badgeMarkup}`;

 result.className=`battleSimResult ${b.won?'win':'loss'}`;
 result.textContent=b.won?"🏆 Victory Screen":"💀 Defeated Screen";

 dots.innerHTML=battleSimulationBattles.map((x,i)=>`<span class="progressDot ${i<battleSimulationIndex?(x.won?'win':'loss'):i===battleSimulationIndex?'current':''}"></span>`).join("");
 next.textContent=(battleSimulationIndex>=battleSimulationBattles.length-1)?"Finish":"Next Battle";
}
function nextBattleSimulationStep(){
 battleSimulationIndex++;
 if(battleSimulationIndex>=battleSimulationBattles.length)return finishBattleSimulation();
 renderBattleSimulationStep();
}
function finishBattleSimulation(){
 const overlay=document.getElementById("battleSimOverlay");
 if(overlay)overlay.style.display="none";
 setTimeout(()=>showScoreBreakdown(),500);
}
function skipBattleSimulation(){
 const overlay=document.getElementById("battleSimOverlay");
 if(overlay)overlay.style.display="none";
 setTimeout(()=>showScoreBreakdown(),300);
}

function scheduleCelebration(delay=2000){
 if(celebrationShown)return;
 setTimeout(()=>{
  if(isDraftComplete()){
   const res=leagueResult();
   showCelebration(res.rank.name,finalScore());
  }
 },delay);
}
function continueAfterMegaChoice(){
 render();
 finishPostDraftChoices(1400);
}


function render(){
 if(!league)league=createLeague();
 renderTrainerBox();let types=getTypes(),over=isDraftComplete(),res=over?leagueResult():null;
 const highScore=syncHighScore();
 if(!trainer){renderTrainerSelection();}
 document.getElementById("roundBox").textContent=!trainer?"-":over?"Done":`${team.length+1}/${ROUNDS}`;
 document.getElementById("scoreBox").textContent=over?finalScore():"???";
 document.getElementById("typeBox").textContent=types.length;
 document.getElementById("rankBox").textContent=over?res.rank.name.split(" ")[0]:(trainer?"Drafting":"Trainer");
 document.getElementById("rankNote").textContent=over?res.rank.name:(trainer?"A crime organization is active.":"Choose trainer first.");
 const scoreNoteMain=document.getElementById("scoreNoteMain"); if(scoreNoteMain) scoreNoteMain.textContent=over?`Final League Power: ${finalScore()}`:"Revealed after draft";
 const typeBoxNote=document.getElementById("typeBoxNote"); if(typeBoxNote) typeBoxNote.textContent=types.length>=TYPE_BONUS_THRESHOLD?"Type bonus secured: +100":`Need ${TYPE_BONUS_THRESHOLD} for +100`;
 renderEvent();
 let teamList=document.getElementById("teamList");
 teamList.innerHTML=team.length?team.map((p,i)=>`<div class="teamitem ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}" alt="${p.displayName}"><div style="min-width:0;flex:1"><div class="tname">${i+1}. ${p.shiny?'✨ ':''}${activePokemonName(p,i)}</div><div class="tscore">${over?`${pScore(p,i)} pts${p.activePrimal?` as ${p.activePrimal.name}`:""}${p.activeMega&&selectedMegaIndex===i?` as ${p.activeMega.name}`:""}${p.fusedWith?` fused with ${pretty(p.fusedWith)}`:""}${p.shiny?` incl. +${SHINY_BONUS} shiny`:""}${p.extraShinyBonus?` +${p.extraShinyBonus} second shiny`:""}${p.eternalBonus?` +${p.eternalBonus} Eternal Flower`:""}${p.name==="arceus"&&arceusPlateBonus()?` +300 Plate Power`:""}${lightBallAppliesTo(i)?` • ${lightBallEffectText(p,i)}`:""}`:"Score hidden"}</div><div class="types" style="margin-top:6px">${activeTypes(p,i).map(typePill).join("")}</div>${pokemonItemBadges(p,i)}${pokemonSpecialBadges(p)}${over&&p.megaForms&&p.megaForms.length?`<div class="megaBtns">${p.megaForms.map((m,mi)=>`<button class="megaBtn ${selectedMegaIndex===i&&p.activeMega&&p.activeMega.name===m.name?'active':''}" onclick="selectMega(${i},${mi})">Mega: ${m.name.replace('Mega ','')}</button>`).join("")}</div>`:""}</div></div>`).join(""):'<div class="card">No Pokémon drafted yet. The Pokéball is hungry.</div>';
 document.getElementById("typesCovered").innerHTML=types.length?types.map(typePill).join(""):'<span style="color:#cbd5e1;font-weight:900">None yet</span>';
 document.getElementById("typeNeed").textContent=types.length>=TYPE_BONUS_THRESHOLD?"Type bonus secured: +100.":`${Math.max(0,TYPE_BONUS_THRESHOLD-types.length)} more unique type(s) needed.`;
 if(!trainer){renderTrainerSelection();return}
 if(!selectedItem){renderItemSelection();return}
 if(selectedItem.id==="elemental_plate"&&!elementalPlateType){renderPlateSelectionScreen();return}
 let area=document.getElementById("gameArea"), title=document.getElementById("mainTitle");
 if(generating){title.textContent="Rolling wild options...";area.className="";area.innerHTML='<div class="card"><span class="loader"></span>Loading six Pokémon...</div>';return}
 if(over){currentOptions=[];renderResults(area,title,res);return}
 if(isDraftComplete()){currentOptions=[];renderResults(area,title,leagueResult());return}
 title.innerHTML=`Choose One ${apiIssue?'<button class="btn btn-danger" style="margin-left:12px" onclick="retryApiRoll()">Retry API Roll</button>':''}${selectedItem&&selectedItem.id==="master_ball"&&!masterBallUsed?'<button class="btn btn-ghost" style="margin-left:12px" onclick="useMasterBallNextRoll()">Use Master Ball</button>':''}${selectedItem&&selectedItem.id==="repel"&&!repelUsed?'<button class="btn btn-ghost" style="margin-left:12px" onclick="useRepel()">Use Repel</button>':''}`;
 area.className="options";const dexActive=selectedItem&&selectedItem.id==="pokedex"&&pokedexRevealRound===team.length+1;
 area.innerHTML=(canUsePokedex()?`<div class="card" style="grid-column:1/-1"><div class="top"><div><h3 class="name">📘 Use Pokédex</h3><div class="hidden">${rotomPokedexQuestCompleted?"Rotom Pokédex can scan every round.":"Reveal BST values for this draft round."}</div></div><button class="btn btn-dark" onclick="event.stopPropagation();usePokedex()">Scan Options</button></div></div>`:"")+currentOptions.map((p,i)=>`<button class="card ${p.shiny?'shiny-card':''}" onclick="pickPokemon(${i})"><div class="top"><div><h3 class="name">${p.shiny?'✨ ':''}${p.displayName}</h3>${p.shiny?'<div class="shinylabel">✨ Shiny spotted! +300 later</div>':''}${lightBallBadge(p,i)}${p.eternalFloette?`<div class="shinylabel">🌸 Eternal Flower! +${ETERNAL_FLOETTE_BONUS}</div>`:""}${p.special?`<div class="speciallabel">Special +${p.specialBonus||0}</div>`:""}${draftOptionItemBadgesV13514(p,i)}${p.repelReplacement?`<div class="itemlabel">Repel replacement</div>`:""}<div class="hidden">${dexActive?`Pokédex scan: ${p.bst} BST`:"BST hidden until the League test."}</div></div><div class="mystery">${dexActive?p.bst:"???"}</div></div><div class="spritebox"><img src="${(p.shiny&&p.shinySprite?p.shinySprite:p.sprite)||''}" alt="${p.displayName}"></div><div class="types">${(p.types||[]).map(typePill).join("")}</div><div class="hidden">${draftOptionBottomNoteV13514(p)|| (MASTER_BALL_LEGENDARY_POOL.includes(p.name)?"Master Ball roll: legendary-tier option.":(p.megaForms&&p.megaForms.length)?"Can Mega Evolve if chosen.":"No visible Mega option.")}</div></button>`).join("");
}

