Pokémon Colosseum v7.5

Certificate fix:
- Completely rebuilt trainer panel positioning.
- Removed the overlapping League Certification text.
- Trainer sprite/avatar now sits clearly next to the trainer name.
- Final score now has its own row and no longer collides with labels.
- Rank and Team Concept panel has more vertical spacing.
- If the remote trainer sprite fails, a small trainer-style avatar is drawn instead of a plain letter box.


Pokémon Colosseum v7.6
- Fixed celebrationShown ReferenceError by restoring global state variables.
- Certificate now tries to use the live trainer sprite from the game before any fallback.
- Shiny Pokémon evolved with Evolution Stone keep shiny status and use the evolved shiny art.
- Shiny Mega Evolutions now use shiny mega artwork when available.
- Custom A-Z Mega forms now support dedicated sprite paths in assets/custom-mega/ and shiny variants in assets/custom-mega/shiny/.


Pokémon Colosseum v7.7
- Fixed trainer certificate icon by bundling local trainer sprite assets used by the selectable trainer models.
- Reduced normal draft legendary/mythical frequency.
- Raised Champion requirement to 3800 and Hidden Legendary Trainer to 4000; Elite Four now tops out at 3600.
- Added persistent High Score panels saved in localStorage.
- Unique type flat bonus now requires 8 unique types for +100.


Pokémon Colosseum v7.8
- Replaced local fake trainer placeholders with the actual trainer sprites supplied in PokemonTrainers_V2.zip.
- Added a SPRITE_FILE_MAP so game trainer IDs like Wallace, Ash-Johto variants, or Leaf Gen 3 map to the correct uploaded sprite file.
- Expanded the starting trainer selection with many extra trainer models from the uploaded sprite pack.
- Trainer certificate now uses the same uploaded sprite mapping as the in-game trainer display.
- Packed 404 uploaded trainer sprite files into assets/trainers/.


Pokémon Colosseum v7.9
- Champion and Hidden Legendary Trainer can no longer be the same character in one run.
- Trainer sprites with multiple uploaded variants now rotate randomly per run/selection.
- Certificate trainer sprite loading now uses the actual selected local sprite first and avoids crossOrigin on local files.
- Trainer selection display names were cleaned up: no more Ace F / Punk Guy / Veteran F / Battle Girl labels; they now use names like Sascha, Kim, Mika, Alex, Morgan, Robin, Casey, and Taylor while still mapping to the correct sprites.


Pokémon Colosseum v8.0
- Fixed Copy Image button with a robust browser-safe fallback.
- Copy Image now tries ClipboardItem only when supported/secure, otherwise downloads the PNG.
- Download fallback now appends the link to the document and delays URL cleanup, improving reliability for local HTML files.
- Share buttons now use the same safer certificate generation/download logic.


Pokémon Colosseum v8.1
- Fixed certificate creation failures caused by browser canvas export restrictions.
- Copy Image now retries certificate generation without remote images if the full image export fails.
- Added a final text-only certificate fallback so Copy Image/Download does not simply fail.
- Wrapped canvas.toBlob in try/catch to catch SecurityError from tainted canvases.


Pokémon Colosseum v8.2
- Restored the rich celebration certificate layout.
- Certificate now attempts to fetch remote Pokémon sprites as data URLs before drawing them, reducing canvas taint/export failures.
- Celebration certificate now includes trainer name, trainer sprite, rank, score, team concept, and the full certified team with sprites.
- Mega+Shiny combinations are now labeled more clearly on certificate cards.
- Added a small Pokémon-style trophy to the certificate footer.
- Highlighted the rank phrase in the congratulations text.


Pokémon Colosseum v8.3
- Fixed the certificate export falling back too aggressively to the text-only certificate.
- Remote Pokémon sprites are no longer drawn directly if they cannot be fetched safely.
- The full certificate layout is preserved even when some sprite images cannot be exported.
- Missing/blocked sprites now become small in-card placeholders, not a destroyed certificate.
- The emergency fallback is now also full-height and keeps trainer/rank/team structure.


Pokémon Colosseum v8.5
- Show Celebration now displays the canvas-rendered certificate preview, not the old DOM certificate.
- Copy Image and the visible celebration preview now use the same renderer.
- Added preview-mode layout for the celebration modal and cleanup for preview object URLs.


Pokémon Colosseum v8.7
- Fixed visible celebration preview to render an actual canvas instead of exporting a blob image first.
- Preview mode draws the exact selected trainer sprite and Pokémon sprites directly, so remote images can appear visually even if export would be tainted.
- Copy/Download still uses the export-safe blob renderer separately.
- Added separate preview/export rendering modes to stop image export issues from destroying the visible preview.


Pokémon Colosseum v8.8
- Fixed celebration certificate preview being too large for the viewport.
- Celebration modal is now scrollable instead of clipping off-screen.
- Certificate preview canvas scales to available screen height.
- Buttons/status area should remain reachable below the preview.


Pokémon Colosseum v8.9
- Added persistent Run History page.
- History stores completed runs in localStorage.
- Each history entry includes trainer name/sprite, rank, score, team concept, selected item, unique types and full selected Pokémon team.
- Added History button in the header.
- Added Clear History and Export JSON actions.


Pokémon Colosseum v9.0
- Fixed front page trainer selection disappearing.
- Removed accidental standalone `async` token that stopped the script at runtime.
- Added fallback trainer selection buttons directly in the initial HTML so the front page is not blank even before render runs.


Pokémon Colosseum v9.1
- Fixed Evolution Stone split evolutions.
- Eevee, Nincada, Poliwhirl, Slowpoke, Gloom, Tyrogue, Kirlia, Snorunt, Clamperl, Wurmple, Applin, Charcadet, Kubfu, Scyther and similar branching Pokémon now show all available paths.
- Evolution Stone no longer auto-picks the first mapped evolution like Vaporeon.


Pokémon Colosseum v9.2
- Added Cosmog -> Cosmoem to the Evolution Stone map.
- Added Cosmoem split evolution choice: Solgaleo or Lunala.
- Cosmoem now opens the same branch-selection menu as Eevee/Nincada/Poliwhirl.


Pokémon Colosseum v9.3
- Reordered post-draft choices: Evolution Stone/Link Cable item choices now happen before Mega Evolution selection.
- This lets Grovyle evolve into Sceptile first, then allows Sceptile to be chosen as the team Mega.
- Added a broad missing evolution patch for newer/special evolutions, including Gimmighoul -> Gholdengo.
- Added dynamic PokeAPI evolution-chain fallback. If a Pokémon is not in the static evolution map, the game tries to look up its next evolution paths online.
- Evolution Stone now checks normal, split, trade, stone, friendship and other evolution paths as long as the Pokémon has a next stage in PokeAPI or the static patch.


Pokémon Colosseum v9.4
- Added Primal Groudon and Primal Kyogre as hidden quest forms. They unlock only if the Grunt encounter was beaten and the orbs are retrieved. They are not treated as Mega Evolutions.
- Primal Groudon/Kyogre use 770 BST and add a +300 hidden quest bonus once awakened.
- Added Elemental Plate + Arceus hidden quest: if Arceus is selected while Elemental Plate is active, +300 bonus is added.
- Added Kyurem DNA Splicers hidden quest. Kyurem can fuse with Reshiram or Zekrom into White/Black Kyurem, gains +300 quest bonus, and reopens one team slot.
- Added Zygarde forms: 10%, 50%, Complete. Evolution Stone upgrades 10% -> 50% -> Complete. Complete can use the custom Mega Zygarde Complete.
- Added Ultra Beast team concept: 3+ Ultra Beasts grant +100 per Ultra Beast.
- Added Alola Protector Team concept: all four Tapus grant +1000 bonus.
- Added regional form pool for Alolan, Galarian, Hisuian, Paldean and Zygarde forms.
- Added opponent teams to Gym Leader, Elite Four, Champion and Hidden Legendary Trainer cards.


Pokémon Colosseum v9.5
- Fixed trainer selection screen not rendering after v9.4.
- Root cause: league=createLeague() was executing before the opponent team pool constants were initialized.
- League creation now happens safely inside boot/render after constants are loaded.


Pokémon Colosseum v9.6
- Added Rotom form change step after Evolution Stone/hidden quests and before Mega Evolution.
- Rotom can freely stay normal or change into Heat, Wash, Frost, Fan, or Mow Rotom.
- Added Pokédex starting item. It can normally be used once during the draft to reveal BST values for all six options in that round.
- Added Rotom Pokédex hidden quest. If Pokédex is selected and Rotom is on the team, Rotom becomes Rotom Pokédex, adds +300 bonus, and Pokédex scanning becomes reusable every round until the run ends.


Pokémon Colosseum v9.7
- Added post-Grunt orb hint: “You retrieve a strange glowing orb. What could it do?”
- Fixed final-round Grunt race condition.
- If the Grunt ambush happens on pick 6, Evolution Stone / hidden quests / Rotom form / Mega Evolution now wait until the Grunt battle is resolved.
- This allows Kyogre/Groudon to receive the Primal Orb quest correctly after a final-round Grunt victory.


Pokémon Colosseum update
- Rotom Pokédex and Kyurem fusion now trigger immediately during draft when their conditions are met, not only at the end.
- Rotom Pokédex preserves shiny status and shiny +300.
- Kyurem fusion preserves shiny if either partner is shiny; if both partners are shiny, the fusion receives two shiny bonuses.
- Arceus + Elemental Plate quest is now visualized on the team/reveal/certificate.
- Score Reveal now separates Item bonus, Quest bonus, and Concept bonus, with quest breakdown lines.
- Primal Orb quest now only allows one Primal awakening, even if both Groudon and Kyogre are on the team.
- Battle simulation now displays opponent Pokémon teams.
- Grunt encounter now displays a fitting attacking team based on the crime organization and difficulty.


Pokémon Colosseum v10.0 Foundation Pass
- Added custom trainer name personalization.
- Added Event / Quest Log page.
- Added Rules / Codex page.
- Added quest-completed toast animation.
- Cleaned post-draft event pipeline into a central flow.
- Battle simulation and League cards now show challenger team sprites.
- Adjusted score thresholds: Gyms 2100–3300, Elite Four 3400–3900, Champion 4250, Legendary Trainer 4500.
- Improved score reveal by separating item, quest and concept bonuses.


Patch: bug fixes
- Fixed final-form Pokémon like Bombirdier being offered as evolving into themselves.
- Fixed Mega Garchomp Z typing to Dragon only.
- Imported uploaded MegaEvolutions_AZ sprites into local custom-mega assets.
- Arceus now visually changes form/type when Elemental Plate is selected.
- History entries now show completed quests.
- Codex no longer reveals hidden quests until they have been completed at least once.
- Removed duplicate Event Log button/quest section in Score Reveal.
- Added rare Eternal Floette encounter at 1/1024 with +300 Eternal Flower bonus.


v10.2 patch
- Fixed Evolution Stone skip loop by marking the item as resolved when Skip is pressed.
- Added Rainbow Feather item: Vaporeon -> Suicune, Flareon -> Entei, Jolteon -> Raikou, +300 quest bonus.
- Added Regi Quest: 3+ Regi Pokémon, +100 per Regi.
- Added Weather Trio Quest: Kyogre + Groudon + Rayquaza, +300.
- Added Paradox / Ancient Quest: 3+ Paradox Pokémon, +100 each.
- Added Starter Squad Quest: +50 per starter-family Pokémon.
- Added Lake Guardians Quest: Uxie + Mesprit + Azelf, +300.
- Added Creation Gods Quest: Arceus + Dialga + Palkia + Giratina, +600.
- Added Forces of Nature Quest: 3+ Tornadus/Thundurus/Landorus/Enamorus, +100 each.
- Added Kingly Fusion Quest: Calyrex + Glastrier/Spectrier -> Ice Rider/Shadow Rider Calyrex, +300 and opens one team slot.


v10.3 patch
- Fixed Starter Squad quest: it now only activates at 3+ starter-family Pokémon, then grants +50 per starter.
- Added a hard guarantee that Giratina, Giratina Altered, and Giratina Origin are available in the draft pool.
- Giratina forms count correctly as Giratina for Creation Gods.


v10.4 mapping integration
- Added data/evolution_mapping.json.
- Embedded evolution mapping v1.1 as EVOLUTION_MAPPING_DATA.
- Evolution Stone now uses only the mapping categories normalEvolutions, splitEvolutions, and formUpgrades.
- Evolution Stone no longer queries PokéAPI evolution chains or mutates evolution rules at runtime.
- Pokémon sprites, BST, types, shiny sprites, and Mega availability are still fetched/enriched through the existing Pokémon fetch flow after a target is chosen.
- Mega Evolution lookup now uses the mapping's megaEvolutions category as source of truth, while still fetching canonical Mega stats/sprites from PokéAPI and local custom sprites from assets/custom-mega.


v10.5 Rainbow Feather fix
- Split Rainbow Feather state into resolved vs completed.
- Skipping/closing Rainbow Feather no longer grants the quest bonus.
- Successful Rainbow Feather use now always updates the team object, BST, name, sprite fallback, types, used-name tracking and quest bonus flag together.
- Rainbow Feather uses specialQuestEvolutions.rainbowFeather as lookup source, but still fetches Pokémon data normally for sprite/BST/type enrichment.


v10.6 visibility + Eternal Floette Mega patch
- Team panel and reveal now display the active transformed name after Evolution Stone, Mega Evolution, Primal forms and special item transformations.
- Transformation handlers clear certificate sprite cache and render immediately after changing a Pokémon.
- Eternal Floette now has Mega Eternal Floette.
- Mega Eternal Floette uses Mega Floette-style stats/sprite (651 BST) while keeping the Eternal Flower +300 bonus.


v10.7 backlog implementation
- Fixed Mega Zygarde Complete missing sprite by falling back to the current Zygarde Complete sprite.
- Added difficulty toggle: Normal / Master. Master adds +1000 to all League requirements.
- Moved Starter Squad, Regi Core, Paradox Team and Forces of Nature out of Quest bonuses and into Team Concepts.
- Reworked Regi Quest into Regigigas Awakening: 3+ Regi Pokémon guarantee Regigigas next draft or allow final team replacement.
- Added Hidden Quests Discovered tracker with ??? undiscovered entries.
- Added rarity labels for discovered hidden quests.


v10.8 Master unlock patch
- Fixed difficulty buttons by rendering them explicitly and using type="button".
- Master Mode is now locked until the player defeats the Legendary Trainer once on Normal Mode.
- Master Mode unlock persists in localStorage.
- Unlock displays a toast: Master Mode unlocked.
- Codex now explains the Master unlock condition.


v10.9 evolution mapping / endpoint alias patch
- Added missing Tyrunt -> Tyrantrum to the evolution mapping.
- Added missing Amaura -> Aurorus to the evolution mapping.
- Added Pokémon endpoint aliases so species names like Giratina resolve to valid PokéAPI endpoints.
- In Test Tools, typing "Giratina" now resolves to "giratina-altered"; "giratina-origin" still works for Origin Form.
- Removed raw "giratina" from the forced draft pool to avoid species-endpoint fetch failures; Giratina Altered and Origin remain available.


v11.0 introduction / onboarding patch
- Added a Welcome / Introduction popup for new runs.
- Popup explains goal, run flow, items, quests, team concepts, shiny/special Pokémon, difficulty, History and Codex.
- Added a persistent "Do not show this introduction on new runs" checkbox saved in localStorage.
- Added an Intro button in the header so the introduction can be reopened anytime.
- Added controls in the Codex to switch the intro preference true/false.
- Intro background shows Gym Leaders, Elite Four, Champions and Legendary Trainers.


v11.1 intro bug fix
- Fixed front-page crash: introduction backdrop now uses existing randomTrainerSprite() instead of missing trainerSprite().
- Intro now also opens on first page load, not only after pressing New Draft.


v11.2 professor / intro polish
- Updated intro wording to avoid spoiling the hidden Legendary Trainer.
- Updated difficulty wording.
- Imported official Professor sprites: Oak, Elm, Birch, Rowan, Juniper, Sycamore, Kukui, Magnolia, Sonia, Laventon, Sada, Turo.
- Added professor visual strips/banners to Welcome, Codex, Event Log and History.
- Increased intro background character visibility.
- Added Professor Oak, Professor Sycamore, Professor Kukui, Professor Sada and Professor Turo as late-game very-best challengers.


v11.3 professor polish
- Added professor sprites directly into Welcome card titles next to the section icons.
- Added professor sprites directly into Codex card titles.
- Codex, Event Log and History professor banners now use sprite-only rows instead of text labels.
- Added a professor quote to each History run based on score, team concept or discovered quests.


v11.4 intro cleanup
- Removed the professor chip-list from the Welcome Message.
- Kept professor sprites inside the intro information boxes, Codex, Event Log and History.


v12.0 integrated UI themes
- Integrated all visual branches into one game:
  - Standard
  - Dark Mode
  - Battle Stadium
  - Research Lab
  - Pokédex League
- Added a UI style selector in the header.
- Added a UI style selector in the Welcome Message.
- Added UI style controls in the Codex.
- Selected UI style is saved in localStorage, like the Welcome Message toggle.
- Mechanics remain based on stable v11.4.


v12.1 clarity / score breakdown patch
- Added Easy Mode: all League requirements reduced by 500.
- Renamed difficulty labels to Easy Mode / Normal Mode / Master Mode.
- Master Mode hover now says: Master Mode: Beat Normal once to unlock.
- Added Ways to Win help popup next to Trainer section with professor sprite.
- Added hidden quest expectation text: players are not expected to know all hidden quests at the start.
- Added Score Breakdown popup after Battle Simulation and before Certificate.
- Score Breakdown shows active team total, unique type bonus, item bonus, quest bonus, concept bonus and final League Power.
- History entries now show selected difficulty mode.
- Certificate now displays selected difficulty mode.


v12.2 Score Breakdown polish
- Score Breakdown modal is smaller, centered with margins, and scrollable.
- Removed Open Event Log button from the Score Breakdown modal.
- Added Score Breakdown button to the summary screen to reopen the breakdown.
- Summary certificate button now says Show Certificate and regenerates the certificate preview.


v12.3 undefined.map defensive patch
- Fixed a test-build crash where a renderer could receive an incomplete object and call .map on undefined.
- activeTypes now always returns an array.
- Test Tools and trainer rendering now guard against missing arrays.
- Opponent team rendering and event rendering now tolerate missing team lists.
- Test Force Grunt Won now creates a valid grunt team list.
- Pokémon option rendering now tolerates missing type/mega arrays.

v13.0 Special Pokémon and Item Update
- Added Special Pokémon spawn system, MissingNo., new item sprites, new items, Origin/Hoopa/Gigantamax transformations, and new quests/concepts.
- Crystal Onix/Steelix keep original typing.
- Giratina Origin removed from standard pool and only appears via Origin Orb.

v13.1 Hotfix
- Fixed front-page freeze caused by ITEM_POOL using image helper functions before those helpers were defined.
- Moved v13 asset registry/helper block before ITEM_POOL initialization.
- Added a defensive simplified trainer selection renderer.

v13.1.1 Stable Base
- Built from v13.1 Hotfix, selected as Base Stable Version.
- Core flow fix only: choosing a trainer no longer starts draft generation before item selection.
- No listed gameplay bug fixes were applied yet.
- Parked for later: fallback undefined, Winner Trophy badge, item labels, Light Ball targeting, DNA Splicers label, Purification modal, Rotom Pokédex sprite, Jackpot check, Origin Forme visibility.

v13.1.2 Winner Trophy Badge
- Built from v13.1.1 Stable Base.
- Isolated bugfix: Champion League Result card now uses Winner Trophy badge.
- No item, quest, draft, fallback, or transformation logic changed.

v13.1.3 Rotom Pokédex Sprite
- Built from v13.1.2 Winner Trophy.
- Isolated bugfix: Rotom Pokédex now keeps and displays assets/special/RotomPokedex.png after the hidden quest.
- No item, quest, draft, fallback, Light Ball, Purification, Origin Forme, or scoring logic changed.

v13.1.4 DNA Splicers Label
- Built from v13.1.3 Rotom Pokédex Sprite.
- Isolated bugfix: DNA Splicers "Guaranteed through selected item" label now appears only on Kyurem.
- Kyurem is protected from special replacement during the DNA Splicers guaranteed draft.
- No other item, quest, draft, fallback, Light Ball, Purification, Origin Forme, or scoring logic changed.

v13.1.5 Light Ball Target
- Built from v13.1.4 DNA Splicers Label.
- Isolated bugfix: Light Ball is now assigned to exactly one Electric Pokémon after the draft.
- Pikachu variants holding Light Ball have their BST doubled.
- Other Electric Pokémon holding Light Ball gain +150.
- The Light Ball holder/effect is visible on team cards, result cards, and certificate text.
- No DNA Splicers, Rotom, Purification, Origin Forme, fallback/API, or non-Light-Ball item logic changed.

v13.1.6 Light Ball Pikachu Fix
- Built from v13.1.5 Light Ball Target.
- Isolated hotfix: Light Ball holder flag is now authoritative, so Pikachu variants reliably double BST.
- Pikachu detection now checks name, displayName, baseName, baseSpecies, base and specialId.
- Result reveal line now shows the effective Light Ball BST for the holder.
- No non-Light-Ball item, quest, draft, fallback/API, Purification, Origin Forme, or DNA logic changed.

v13.1.7 Item Card Labels
- Built from v13.1.6 Light Ball Pikachu Fix.
- Removed the generic item-modal "Skip" button while the Light Ball modal is open; only "Skip Light Ball" remains.
- Added Pokémon-card item labels for targeted/item-specific bonuses:
  - Light Ball holder
  - Lucky Egg baby Pokémon +300
  - Fossil Pokémon +100
  - Elemental Plate matching Pokémon +50
- Added Lucky Egg/Fossil labels to certificate tags.
- No scoring formula changes were made except display/label visibility.

v13.1.8 Gigantamax Label
- Built from v13.1.7 Item Card Labels.
- Isolated bugfix: Gigantamax Pokémon now show their Gigantamax bonus on team/result cards.
- Gigantamax bonus also appears as a certificate tag.
- No score formula, item pipeline, draft, fallback/API, quest, or other transformation logic changed.

v13.1.9 Jackpot Fix
- Built from v13.1.8 Gigantamax Label.
- Isolated bugfix: Jackpot quest now requires Gimmighoul or Gholdengo specifically.
- Pay Day concept still uses the broader coin Pokémon list.
- No Amulet Coin concept-doubling logic changed.
- No item pipeline, draft, fallback/API, transformation, or scoring logic changed.

v13.1.10 Purification + Amulet Tag
- Built from v13.1.9 Jackpot Fix.
- Shadow Purification modal cleanup:
  - removed duplicate Skip button
  - already purified Pokémon are removed from the selection
  - modal stays open while another Shadow Pokémon can still be purified
  - modal closes and continues only after all eligible Shadow Pokémon are purified
  - repeat purification on the same Pokémon is guarded
- Added visible Amulet Coin tag when it doubles an active concept bonus.
- No draft, fallback/API, Light Ball, Origin Forme, Jackpot, or scoring formula logic changed.

v13.1.11 Origin Forme Visibility
- Built from v13.1.10 Purification + Amulet Tag.
- Origin Orb modal now removes Pokémon already transformed into Origin Forme.
- Repeat Origin transformation on the same Pokémon is guarded.
- Modal stays open while another deity can still transform, then closes automatically after all eligible Pokémon are transformed.
- Origin Forme bonus is now visible on team/result cards as "Origin Forme: +300".
- Origin Forme bonus is also shown as a certificate tag.
- No draft, fallback/API, Light Ball, Purification, Jackpot, or non-Origin scoring logic changed.

v13.1.12 Collection Log
- Built from v13.1.11 Origin Forme Visibility.
- Added persistent Collection Log separate from Run History.
- Collection sections: Quests, Concepts, Special Pokémon, Shiny Pokémon, Trainer Achievements, Difficulty Achievements.
- Each section has randomized Professor commentary.
- Completion tracker uses discovered entries divided by current dynamic catalog size.
- New discovered entries are recorded automatically when a completed run is saved.
- Clearing Run History does not clear Collection Log.

v13.1.13 Collection Shiny + Shadow Fix
- Built from v13.1.12 Collection Log.
- Collection Log now backfills discoveries from existing Run History when opened.
- Shiny Pokémon detection is more robust and checks shiny flags, names, tags, and history data.
- History snapshots now retain specialId, specialTags, shinySprite and active score.
- Shadow Pokémon bonuses now have visible labels on cards: Shadow +300.
- Certificate tags now show Shadow/Special bonus labels.
- No draft, item pipeline, quest trigger, or scoring formula logic changed.

v13.1.14 Legendary Trainer Teams
- Built from v13.1.13 Collection Shiny + Shadow Fix.
- Inspection result: there is only one active Legendary Trainer pool: LEGENDS.
- Professors are currently in the PROFESSORS utility/commentary list, not in the active LEGENDS pool.
- Added fixed thematic teams for active Legendary Trainers: Red, Ash, Cynthia, Blue, N and Volo.
- Legendary Trainers no longer fall back to generic Dragon-type teams.
- Added sprite aliases for Ash-Greninja and Arcanine Hisui in opponent team display.

v13.1.15 Professors as Legendary Trainers
- Built from v13.1.14 Legendary Trainer Teams.
- Added Professors to the active Legendary Trainer pool:
  Professor Oak, Professor Sycamore, Professor Kukui, Professor Sada, Professor Turo.
- These Professors are now true Legendary Trainers in the active LEGENDS pool.
- Added/confirmed fixed themed teams for all 11 Legendary Trainers.

v13.1.16 Unique Special Pokémon
- Built from v13.1.15 Professors as Legendary Trainers.
- Special Pokémon are now unique per run.
- MissingNo. can only appear once per run.
- Eternal Floette is also guarded as unique.
- Special replacement avoids IDs already in the team or current draft options.
- If a special roll hits an already-used special and no unused special is available, the original Pokémon remains.
- No scoring, quest, item, trainer, or Collection Log logic changed.

v13.2.0 Split Files
- Built from v13.1.16 Unique Special Pokémon.
- Blueprint: split the inline script into ordered external JS files to reduce single-file overhead.
- Created:
  - js/01_data.js: constants, registries and early state
  - js/02_game.js: league/draft/data-fetch/game helpers
  - js/03_ui.js: trainer/item/draft UI and post-draft pipeline
  - js/04_events.js: results, battle simulation, history, collection and boot
- Preserved original execution order and moved boot() to final script.
- No gameplay/logic changes intentionally applied in this checkpoint.

v13.2.1 Split Tested
- Deep testing checkpoint.
- Split-file runtime smoke test passed.
- No bugfixes were required after the split smoke test.

v13.3.0 Coin Mechanic
- Added coin pouches by difficulty: Easy, Normal, Master.
- Completed runs earn floor(final score × 10%) into the current difficulty pouch.
- Coin rewards are only granted once per saved run ID.
- Added visible Coin Case bar.
- No PokéMart purchases yet in this checkpoint.

v13.3.1 PokéMart + Backpack
- Added PokéMart with one-time X-Items.
- Added Backpack with 2-slot capacity.
- Buying uses the current difficulty's coin pouch only.
- Backpack full blocks purchases until an item is trashed.
- PokéMart can be visited once per pick phase.
- Added passive X-Item score bonuses and use buttons for reroll/targeted bonuses.

v13.3.2 PokéMart Tested
- Deep tested PokéMart, Backpack capacity, coin spending, X-Item scoring and once-per-round lock.
- Added Guard Spec. theft prevention fix: if a Grunt triggers, Guard Spec. is consumed and blocks the theft.

v13.3.3 Starter Choice
- Added Round Zero Starter Choice after starting item selection.
- Random Professor welcome text appears.
- Player can choose 1 of 6 random starter-family Pokémon from any evolution stage.
- Partner Pikachu and Partner Eevee can appear through special rarity rolls.
- Starter shiny odds use normal shiny logic and respect Shiny Charm.
- If the player declines, they receive a random free X-Item in the Backpack if space is available.

v13.3.4 Starter Tested
- Deep testing checkpoint.
- Starter choice, choose-starter and decline-for-X-Item smoke tests passed.
- No bugfixes were required after the split smoke test.

v13.3.5 MissingNo. Glitch Optional
- Optional hidden MissingNo. glitch UI added. It activates automatically when MissingNo. is on the team and is not selectable from the UI dropdown.

v13.3.6 Stabilized
- Stabilization/polish pass after v13.3.5.
- Rebuilt Grunt modal clarity and Grunt resolution flow.
- Guard Spec. theft protection is handled directly in resolveGrunt.
- PokéMart button now uses a clearer availability check and direct overlay open.
- Backpack entries now explain what each X-Item does.
- Starter choice now uses the same draft-card grid language as normal draft choices.
- No new scoring concepts or Pokémon pools added.

v13.3.7 Economy / Mart Stabilized
- Fixed coin payout: completed runs now finalize history/collection and award 10% score coins on the final result screen, score breakdown and certificate paths.
- Backpack now resets on New Draft.
- PokéMart overlay CSS was missing; added real fixed modal styling and forces overlay into document.body.
- PokéMart closes after draft completion / final summary.
- Last possible PokéMart interaction is before the final Pokémon is selected.
- Grunt modal no longer reveals exact required score; it gives only an instinct-style hint.
- Starter Round Zero now hides BST as ??? and uses draft-style cards.
- Starter Professor is randomized directly.
- Intro and Codex now explain PokéMart, coins, pouches and Backpack.
- Guard Spec is now used before the Grunt: it tags one selected Pokémon as guarded and prevents that Pokémon from being stolen.

v13.3.8 Stack Fix
- Grunt modal no longer gives ambiguous strength feedback. It only asks whether you can take them on and protect your Pokémon.
- Prison Bottle now updates Hoopa's visible BST to Hoopa Unbound's 680.
- Prison Bottle form value stacks with PokéMart X-Items instead of being hidden by them.
- Added Prison Bottle item badge on transformed Hoopa.
- Result cards use active form base display for Unbound/Origin/Primal/Mega form text.

v13.3.9 Grunt + X-Item Cleanup
- Added several random crime-syndicate-specific Grunt lines per team.
- Grunt modal now shows a Grunt quote plus one neutral prompt: "Can you take them on and protect your Pokémon?"
- Rebuilt X-Item scoring canonically, preventing passive X-Items from double-applying through older wrapper layers.
- Rebuilt X-Item labels canonically with assignment overrides, preventing duplicate passive item badges.
- Passive X-Item scoring uses unique Backpack item IDs only.
- Buying a duplicate passive X-Item is blocked with a warning.
- Backpack clears on new draft and on boot when there is no active team, preventing old run items from leaking into new runs.

v13.3.10 Intro/Codex PokéMart
- Added a visible Intro card: PokéMart & Coins.
- Added a dedicated Codex card: PokéMart & Coins.
- Explains 10% coin payout, separate difficulty pouches, once-per-pick-phase shop visits, 2-slot Backpack, X-Items, and that Backpack items reset each run.

v13.4.0 Item System Rework
- Implemented Trainer Item / PokéMart Item redesign.
- Added PokéMart item sprites from PokeMart_Items.zip into assets/pokemart.
- Ability Capsule now doubles PokéMart point bonuses only; X Accuracy and Guard Spec are unaffected.
- Soothe Bell now grants +200 final League Power, triples Shadow Pokémon special-roll chance, and still supports purification.
- Pokédex keeps its scan function, triples Rotom encounter chance, and Rotom Pokédex still enables repeated scans.
- Link Cable can now be used during the draft and after the draft, with 2 trade uses per run.
- PokéMart items are now targeted one-Pokémon tools except X All.
- Added X Sp. Def.
- Added pre-Mega PokéMart item use phase so unused activatable items can be used after the sixth pick.

v13.4.1 Item System Rework Fixed
- Follow-up patch ensuring the new targeted PokéMart item functions override older assignment-based wrappers.
- Corrected Backpack Use behavior and X-Item labels for the item-system rework.

v13.4.2 Layout + Item Text Polish
- Corrected starting item descriptions in item pick phase and Codex, including Ability Capsule, Soothe Bell, Pokédex and Link Cable.
- Added starting item sprites to Codex entries.
- Added PokéMart item sprites to a dedicated Codex PokéMart Items section.
- Moved Difficulty Mode into the top header controls as a dropdown.
- Removed the difficulty button block from the trainer panel.
- Moved Coin Case into the Trainer panel and shows only the active difficulty pouch.
- Moved Backpack above the Team panel into the Trainer panel area.

v13.4.3 Trainer Panel + Link Cable
- Reordered Trainer panel:
  1. Trainer sprite/name/start item
  2. Gender, trainer model/name, custom trainer name
  3. Activatable trainer item actions such as Link Cable
  4. Coin Case, Backpack, and Visit PokéMart
- Link Cable with remaining uses now appears in the pre-Mega item cleanup phase after the sixth Pokémon is drafted.
- Using Link Cable after the draft returns to the pre-Mega item cleanup phase so the player can use the second remaining trade or continue.

v13.4.4 Backpack Toolbox Layout
- Reworked the Trainer side panel into a toolbox layout:
  1. Trainer info
  2. Trainer setup
  3. Backpack panel
     - Coin Case inside Backpack
     - Trainer Item action inside Backpack when usable
     - PokéMart items
  4. Visit PokéMart
  5. Your Team / Types Covered
- Trainer Items shown inside Backpack do not count toward Backpack capacity.
- Removed the separate visible Coin Case and separate visible Trainer Item cards.

v13.4.5 Toolbox Order Fix
- Fixed the Backpack toolbox visual order.
- Root cause: older #backpackBox / #pokeMartBtn ID-order CSS had higher specificity than the newer .backpackBox class rule.
- Also gave the Your Team heading and Types Covered panel explicit flex order, so they no longer float above the Backpack.
- Final side order: Trainer info → Trainer setup → Backpack toolbox → Visit PokéMart → Your Team → Types Covered.

v13.4.6 Compact Trainer + Team Columns
- Added collapsible Trainer Setup panel.
- Trainer Setup auto-collapses after Trainer + Starting Item are selected, before the Starter/first draft flow.
- Collapsed panel shows a compact summary such as "Boy · Red".
- Added a Change/Collapse toggle so players can still edit gender/model/custom name.
- On wide desktop layouts, Your Team and Types Covered move into a second column next to the Trainer/Backpack toolbox.
- On smaller screens, the panel falls back to vertical stacking.

v13.4.7 Safe Side Breakpoint Fix
- Fixed side-panel overlap caused by the two-column trainer/team layout activating too early.
- Normal desktop widths now use the safe stacked side panel.
- Two-column Trainer/Team side layout now activates only at 1700px+ viewport width.
- This prevents the Trainer panel from covering starter/draft cards.

v13.4.8 Wider + Compact Side Layout
- Increased desktop wrap max-width so the draft area and side panel have enough horizontal room.
- Reworked wide desktop layout to use a compact side panel from 1500px+.
- Kept normal desktop widths on the safe stacked side layout.
- Reduced side panel padding, font sizes, team cards, Backpack text and trainer item controls in wide mode.
- Added an ultra-wide expansion rule for very large screens.

v13.4.9 Stable Layout Recovery
- Recovery build after v13.4.8 layout issue.
- Disabled the experimental two-column Trainer/Team side panel.
- Kept wider desktop canvas and compact side panel styling.
- Restored safe stacked side panel order: Trainer → Trainer Setup → Backpack → PokéMart → Your Team → Types Covered.
- Added a small runtime error guard so future JavaScript errors appear in the status area instead of silently freezing the UI.

v13.5.1 Real HTML Side Columns
- Rebuilt the side layout by changing the actual HTML skeleton.
- Adds a real static trainerTeamShell with:
  - trainerToolsColumn: Trainer info, Trainer Setup, Backpack, PokéMart
  - teamColumn: Your Team, Team List, Types Covered
- Removed the fragile live DOM-moving approach from v13.5.0.
- Built from v13.4.9 stable recovery.
- Wide desktop uses true side-by-side columns; medium/small layouts collapse safely.

v13.5.2 Trainer Edit + Multi Item Fix
- Changing gender/trainer model/custom trainer name from the collapsed Trainer Setup no longer resets the run.
- Selected starting item, drafted Pokémon, coins and Backpack are preserved when editing trainer identity.
- After using one item in the pre-Mega remaining-items phase, the modal now reopens if another usable item remains.
- If no usable remaining item is left, the modal closes and the post-draft pipeline continues automatically.

v13.5.3 Backpack Item Eligibility Fix
- PokéMart items now show a Use button only when they are currently usable.
- X Items with no eligible selected Pokémon show "No target" instead of opening a modal.
- Passive items such as X All show "Passive" instead of a Use button.
- Dire Hit shows as draft-end until the team is complete.
- Manual item modals no longer show "Skip Remaining PokéMart Items"; that button is only used in the actual pre-Mega post-draft item phase.
- Pressing skip/keep during a manual item use can no longer trigger Mega Evolution, Battle Simulation or Score Breakdown during an unfinished draft.

v13.5.4 No Score Reveal Text
- Removed the redundant "Score Reveal" heading from the league result section.
- Removed the redundant score summary sentence from the league result section.
- Kept the action buttons, Quest Bonus box, Team Concept, battle simulation, certificate and detailed team cards.
- Score remains visible in the top Visible Score card and in the Score Breakdown modal.

v13.5.5 Collection Concepts Locked Names
- Collection Log Concepts now show all known concept names even while locked.
- Locked concepts stay greyed out and marked with a lock.
- Locked concept details remain hidden until the concept is triggered in a run.
- Other Collection Log sections keep the old hidden "???" behavior for locked entries.

v13.5.6 Collection Concept Hints
- Locked Collection Log concept entries now show an unlock hint.
- The concept name remains visible while locked.
- Detailed discovered meta/reward text still appears only after the concept has been triggered in a run.
- Other Collection Log sections remain unchanged.

v13.5.7 Concept Expansion Pack
- Added 10 new team concepts:
  Lake Guardian Team, Eevee Ensemble, Royal Court, Ancient Kings, Artificial Lifeforms,
  Cosmic Visitors, Nightmare Team, Partner Power, Loyal Three, Legendary Wings.
- Added locked Collection Log names and hints for all new concepts.
- No quest, item, trainer, battle simulation, certificate or PokéMart flow changed.

v13.5.8 Quest Expansion Pack
- Lake Guardian Team concept changed to flat +500.
- Added quest expansion: Mew Project, Dream Duo, Lake Guardians: Mind/Emotion/Will, Darkest Day, Treasures Unsealed, Type: Full Memory, The Power of One, Sacred Fire.
- Treasures Unsealed awards +1000 active difficulty coins immediately when completed.
- Type: Full Memory changes Silvally's active type to the selected Elemental Plate type and grants +300 quest points.
- Lake Guardians quest grants no points; it opens a creation rift for next draft option or final replacement.

v13.5.9 Lake Guardian Rift Fix
- Fixed Lake Guardians: Mind, Emotion, Will rift timing.
- If the third Lake Guardian is picked as Pokémon #6, post-draft checks are paused and the replacement modal opens first.
- Player can replace one non-Lake Guardian with random Dialga/Palkia/Giratina or skip.
- If the trio completes before pick 6, the next/current draft options receive the guaranteed creation dragon immediately.

v13.5.10 Lake Guardian Pending Rift Fix
- Fixed Lake Guardians rift being consumed by stale draft options.
- If an item/quest modal interrupts option generation, the rift stays pending.
- Dialga/Palkia/Giratina is injected only into fresh draft options.
- Added re-checks after Evolution Stone, Rainbow Feather and closing item modals.

v13.5.11 Heavy Quest Items
- Added Starting Items: Colress Machine and Hero Relics with item sprites.
- Colress Machine guarantees Necrozma in the next draft and strongly boosts Solgaleo/Lunala appearance odds.
- Hero Relics guarantees Zacian or Zamazenta in the next draft and strongly boosts the other hero.
- Hero Relics can transform Zacian into Crowned Sword and Zamazenta into Crowned Shield using upgraded 720 BST stats.
- Darkest Day now counts Crowned Sword and Crowned Shield.
- Lake Guardian Rift Pokémon now receive a visible "Lake Guardian Rift opened" label.

v13.5.12 Heavy Item Labels + Crowned Sprites
- Draft labels for guaranteed heavy-item Pokémon are now specific:
  Colress Machine: guaranteed Necrozma
  Hero Relics: guaranteed Zacian
  Hero Relics: guaranteed Zamazenta
- Crowned Zacian and Crowned Zamazenta now use custom uploaded sprites:
  assets/special/Zacian_CrownedSword.png
  assets/special/Zamazenta_CrownedShield.png
- Necrozma Dusk Mane and Dawn Wings sprites were copied for later mechanics:
  assets/special/Necrozma_Dusk_Mane.png
  assets/special/Necrozma_Dawn_Wings.png

v13.5.14 Hero Relics Immediate + Legendary Heroes
- Draft option cards now show specific heavy-item guarantee labels:
  Colress Machine: guaranteed Necrozma
  Hero Relics: guaranteed Zacian / Zamazenta
- Hero Relics now crowns Zacian/Zamazenta immediately during draft selection.
- Crowned forms now display a calculated "Hero awakened: +X" label explaining the score jump.
- Added Legendary Heroes quest: Crowned Sword + Crowned Shield = +300 points.

v13.5.15 Hero Relics Double Awakening Fix
- Fixed Hero Relics only awakening one hero.
- If Zacian or Zamazenta appears later in the same run, Hero Relics now crowns that hero too.
- Broadened Zacian/Zamazenta detection to catch base, hero and crowned internal names.
- Added render-time safety pass so an already drafted un-crowned hero is corrected.

v13.5.16 Necrozma Twilight
- Added Necrozma Twilight hidden quest.
- Necrozma can fuse with Solgaleo into Dusk Mane Necrozma or Lunala into Dawn Wings Necrozma.
- Fusion opens one team slot, mirrors DNA Splicers behavior, and grants +300 quest bonus.
- Fused Necrozma uses the uploaded Dusk Mane / Dawn Wings sprites.
- Fused Necrozma has +80 Twilight fusion power visible on cards and result details.
- Colress Machine is only a helper; natural Necrozma + Solgaleo/Lunala also triggers the quest.

v13.5.17 Necrozma Twilight Immediate Fix
- Fixed Necrozma Twilight only triggering at the end of the run.
- After every pick, the game now checks whether Necrozma + Solgaleo/Lunala are both selected.
- If the pair exists, the fusion modal opens immediately before the run continues.
- Post-draft hidden quest behavior remains as a fallback.

v13.5.18 Battle Reward Coins
- Added battle reward coins based on League progress.
- Easy: Gym +5 each, Elite Four +10 each, Champion +100, Legendary Trainer +500.
- Normal: Gym +10 each, Elite Four +20 each, Champion +200, Legendary Trainer +750.
- Master: Gym +20 each, Elite Four +40 each, Champion +400, Legendary Trainer +1000.
- Rewards are added to the matching difficulty coin pouch and protected against duplicate payouts per run.
- Existing 10% final-score coin payout remains unchanged; battle rewards are additional.

v13.5.20 Quest Locked Names Direct Fix
- Locked quests show quest names instead of ???.
- Locked quest descriptions remain hidden as Quest details locked.

v13.5.21 Quest Names Actual Renderer Fix
- Fixed the actual Collection Log renderer used by the locked concept system.
- Locked quests now reveal quest names.
- Locked quest details show "Quest details locked".
- Locked concepts keep their hints.
