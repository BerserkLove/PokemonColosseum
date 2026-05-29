
const ROUNDS=6, OPTIONS_PER_ROUND=6, TYPE_BONUS_THRESHOLD=8, TYPE_BONUS_POINTS=100, SHINY_ODDS=1024, SHINY_BONUS=300;
const TRAINER_BASE="https://play.pokemonshowdown.com/sprites/trainers/";
const LOCAL_TRAINER_BASE="assets/trainers/";
const HIGH_SCORE_KEY="pokemon_colosseum_high_score";
const SPRITE_VARIANTS={"aaron": ["aaron.png"], "aarune": ["aarune.png"], "acerola": ["acerola.png", "acerola-masters3.png"], "acerola-masters3": ["acerola-masters3.png", "acerola.png"], "acetrainer": ["acetrainer-gen4.png", "acetrainer-gen6xy.png"], "acetrainer-gen4": ["acetrainer-gen4.png", "acetrainer-gen6xy.png"], "acetrainer-gen6": ["acetrainer-gen6xy.png", "acetrainer-gen4.png"], "acetrainer-gen6xy": ["acetrainer-gen6xy.png", "acetrainer-gen4.png"], "acetrainercouple": ["acetrainercouple.png"], "acetrainerf": ["acetrainerf-gen4dp.png", "acetrainerf-gen6xy.png"], "acetrainerf-gen4dp": ["acetrainerf-gen4dp.png", "acetrainerf-gen6xy.png"], "acetrainerf-gen6xy": ["acetrainerf-gen6xy.png", "acetrainerf-gen4dp.png"], "adaman": ["adaman.png"], "aetherfoundation2": ["aetherfoundation2.png"], "aetherfoundationf": ["aetherfoundationf.png"], "agatha": ["agatha-gen3.png", "agatha-lgpe.png", "agatha-gen3-1.png"], "agatha-gen3": ["agatha-gen3.png", "agatha-lgpe.png", "agatha-gen3-1.png"], "agatha-gen3-1": ["agatha-gen3-1.png", "agatha-gen3.png", "agatha-lgpe.png"], "agatha-lgpe": ["agatha-lgpe.png", "agatha-gen3.png", "agatha-gen3-1.png"], "akari": ["akari.png"], "alder": ["alder.png"], "allister": ["allister.png", "allister-masters.png"], "allister-masters": ["allister-masters.png", "allister.png"], "amelia": ["amelia-shuffle.png"], "amelia-shuffle": ["amelia-shuffle.png"], "aquagrunt": ["aquagrunt-rse.png"], "aquagrunt-rse": ["aquagrunt-rse.png"], "aquagruntf": ["aquagruntf.png", "aquagruntf-rse.png"], "aquagruntf-rse": ["aquagruntf-rse.png", "aquagruntf.png"], "archie": ["archie-usum.png"], "archie-usum": ["archie-usum.png"], "arezu": ["arezu.png"], "ariana": ["ariana.png"], "aromalady": ["aromalady-gen3.png"], "aromalady-gen3": ["aromalady-gen3.png"], "artist": ["acetrainer-gen6xy.png", "acetrainer-gen4.png"], "ash": ["ash.png", "ash-johto.png", "ash-unova.png", "ash-sinnoh.png"], "ash-johto": ["ash-johto.png", "ash.png", "ash-unova.png", "ash-sinnoh.png"], "ash-sinnoh": ["ash-sinnoh.png", "ash.png", "ash-johto.png", "ash-unova.png"], "ash-unova": ["ash-unova.png", "ash.png", "ash-johto.png", "ash-sinnoh.png"], "az": ["az.png", "az-lza.png"], "az-lza": ["az-lza.png", "az.png"], "barry": ["barry.png"], "battlegirl": ["battlegirl-gen3.png"], "battlegirl-gen3": ["battlegirl-gen3.png"], "bea": ["bea.png"], "beauty": ["beauty.png", "beauty-gen3.png", "beauty-gen5bw2.png"], "beauty-gen3": ["beauty-gen3.png", "beauty.png", "beauty-gen5bw2.png"], "beauty-gen5bw2": ["beauty-gen5bw2.png", "beauty.png", "beauty-gen3.png"], "bede": ["bede-masters.png"], "bede-masters": ["bede-masters.png"], "benga": ["benga.png"], "bertha": ["bertha.png"], "bianca": ["bianca.png", "bianca-masters.png"], "bianca-masters": ["bianca-masters.png", "bianca.png"], "biker": ["biker.png", "biker-gen3.png"], "biker-gen3": ["biker-gen3.png", "biker.png"], "bill": ["bill.png"], "birch": ["birch.png", "birch-gen3.png"], "birch-gen3": ["birch-gen3.png", "birch.png"], "birdkeeper": ["birdkeeper-gen4dp.png"], "birdkeeper-gen4dp": ["birdkeeper-gen4dp.png"], "blackbelt": ["blackbelt-gen4dp.png"], "blackbelt-gen4dp": ["blackbelt-gen4dp.png"], "blaine": ["blaine.png"], "blanche": ["blanche.png"], "blue": ["blue.png", "blue-masters.png"], "blue-masters": ["blue-masters.png", "blue.png"], "boarder": ["boarder.png"], "brassius": ["brassius.png"], "brawly": ["brawly.png", "brawly-gen3.png"], "brawly-gen3": ["brawly-gen3.png", "brawly.png"], "brendan": ["brendan.png", "brendan-rs.png"], "brendan-rs": ["brendan-rs.png", "brendan.png"], "brock": ["brock.png"], "bruno": ["bruno.png"], "brycen": ["brycen.png"], "bugcatcher": ["bugcatcher-gen3.png"], "bugcatcher-gen3": ["bugcatcher-gen3.png"], "bugsy": ["bugsy.png"], "burgh": ["burgh.png"], "burnet": ["burnet.png"], "byron": ["byron.png"], "caitlin": ["caitlin.png"], "calaba": ["calaba.png"], "calem": ["calem.png"], "cameraman": ["cameraman-gen8.png"], "cameraman-gen8": ["cameraman-gen8.png"], "candela": ["candela.png"], "candice": ["candice.png"], "chase": ["chase.png"], "cheren": ["cheren-gen5bw2.png"], "cheren-gen5bw2": ["cheren-gen5bw2.png"], "cheryl": ["cheryl.png"], "chili": ["chili.png"], "chuck": ["chuck.png"], "cilan": ["cilan.png"], "clair": ["clair.png"], "clavell": ["clavell-s.png"], "clavell-s": ["clavell-s.png"], "clay": ["clay.png"], "clemont": ["clemont.png"], "collector": ["collector.png"], "colza": ["colza.png"], "crasherwake": ["crasherwake.png", "crasherwake-1.png"], "crasherwake-1": ["crasherwake-1.png", "crasherwake.png"], "cress": ["cress.png"], "crushkin": ["crushkin-gen3.png"], "crushkin-gen3": ["crushkin-gen3.png"], "cynthia": ["cynthia-gen7.png", "cynthia-anime.png", "cynthia-masters.png", "cynthia-masters-1.png"], "cynthia-anime": ["cynthia-anime.png", "cynthia-gen7.png", "cynthia-masters.png", "cynthia-masters-1.png"], "cynthia-gen7": ["cynthia-gen7.png", "cynthia-anime.png", "cynthia-masters.png", "cynthia-masters-1.png"], "cynthia-masters": ["cynthia-masters.png", "cynthia-gen7.png", "cynthia-anime.png", "cynthia-masters-1.png"], "cynthia-masters-1": ["cynthia-masters-1.png", "cynthia-gen7.png", "cynthia-anime.png", "cynthia-masters.png"], "cyrus": ["cyrus.png"], "dawn": ["dawn.png", "dawn-contest.png"], "dawn-contest": ["dawn-contest.png", "dawn.png"], "diantha": ["diantha.png"], "dragon": ["dragontamer.png"], "dragontamer": ["dragontamer.png"], "drake": ["drake-gen3.png", "drake-gen3-1.png"], "drake-gen3": ["drake-gen3.png", "drake-gen3-1.png"], "drake-gen3-1": ["drake-gen3-1.png", "drake-gen3.png"], "drasna": ["drasna.png"], "drayden": ["drayden.png"], "elesa": ["elesa.png", "elesa-masters.png", "elesa-masters3.png"], "elesa-masters": ["elesa-masters.png", "elesa.png", "elesa-masters3.png"], "elesa-masters3": ["elesa-masters3.png", "elesa.png", "elesa-masters.png"], "elio": ["elio.png"], "elm": ["elm.png"], "emmet": ["emmet.png"], "erika": ["erika.png"], "ethan": ["ethan.png"], "falkner": ["falkner.png"], "fantina": ["fantina.png"], "fisherman": ["fisherman-gen3.png"], "fisherman-gen3": ["fisherman-gen3.png"], "flannery": ["flannery.png", "flannery-gen6.png"], "flannery-gen6": ["flannery-gen6.png", "flannery.png"], "flaregrunt": ["flaregrunt.png"], "flaregruntf": ["flaregruntf.png"], "flint": ["flint.png"], "florian": ["florian-bb.png"], "florian-bb": ["florian-bb.png"], "flying": ["miku-flying.png"], "furisodegirl": ["furisodegirl-black.png", "furisodegirl-white.png"], "furisodegirl-black": ["furisodegirl-black.png", "furisodegirl-white.png"], "furisodegirl-white": ["furisodegirl-white.png", "furisodegirl-black.png"], "galacticgrunt": ["galacticgrunt.png"], "galacticgruntf": ["galacticgruntf.png"], "gardenia": ["gardenia.png", "gardenia-masters.png"], "gardenia-masters": ["gardenia-masters.png", "gardenia.png"], "geeta": ["geeta.png"], "gentleman": ["gentleman-gen4.png"], "gentleman-gen4": ["gentleman-gen4.png"], "ghetsis": ["ghetsis.png", "ghetsis-gen5bw.png"], "ghetsis-gen5bw": ["ghetsis-gen5bw.png", "ghetsis.png"], "giovanni": ["giovanni.png", "giovanni-lgpe.png"], "giovanni-lgpe": ["giovanni-lgpe.png", "giovanni.png"], "girl": ["punkgirl.png", "punkgirl-masters.png"], "glacia": ["glacia.png"], "gladion": ["gladion.png"], "gloria": ["gloria.png"], "grant": ["grant.png"], "grimsley": ["grimsley.png"], "grusha": ["grusha.png"], "guzma": ["guzma.png", "guzma-masters.png"], "guzma-masters": ["guzma-masters.png", "guzma.png"], "gwynn": ["gwynn.png"], "hala": ["hala.png"], "hassel": ["hassel.png"], "hau": ["hau.png", "hau-masters.png"], "hau-masters": ["hau-masters.png", "hau.png"], "hex-maniac": ["punkgirl.png", "punkgirl-masters.png"], "hexmaniac": ["punkgirl.png", "punkgirl-masters.png"], "hilbert": ["hilbert.png", "hilbert-wonderlauncher.png", "hilbert-masters.png"], "hilbert-masters": ["hilbert-masters.png", "hilbert.png", "hilbert-wonderlauncher.png"], "hilbert-wonderlauncher": ["hilbert-wonderlauncher.png", "hilbert.png", "hilbert-masters.png"], "hilda": ["hilda.png", "hilda-masters3.png"], "hilda-masters3": ["hilda-masters3.png", "hilda.png"], "hop": ["hop.png"], "hugh": ["hugh.png"], "ingo": ["ingo.png"], "iono": ["iono.png", "iono-masters.png"], "iono-masters": ["iono-masters.png", "iono.png"], "irida": ["irida.png"], "iris": ["iris.png", "iris-gen5bw2.png"], "iris-gen5bw2": ["iris-gen5bw2.png", "iris.png"], "jacinthe": ["jacinthe.png"], "janine": ["janine.png"], "jasmine": ["jasmine.png", "jasmine-contest.png"], "jasmine-contest": ["jasmine-contest.png", "jasmine.png"], "jessiejames": ["jessiejames-gen1.png"], "jessiejames-gen1": ["jessiejames-gen1.png"], "juan": ["juan.png"], "juniper": ["juniper.png"], "jupiter": ["jupiter.png"], "kabu": ["kabu.png"], "kahili": ["kahili.png"], "kamado": ["kamado.png"], "karen": ["karen.png"], "katy": ["katy.png"], "kiawe": ["kiawe.png"], "kimonogirl": ["kimonogirl.png"], "klara": ["klara.png"], "kofu": ["kofu.png"], "koga": ["koga.png"], "korrina": ["korrina.png"], "kris": ["kris.png"], "kukui": ["kukui.png"], "kunoichi2": ["kunoichi2-conquest.png"], "kunoichi2-conquest": ["kunoichi2-conquest.png"], "lana": ["lana.png", "lana-masters.png"], "lana-masters": ["lana-masters.png", "lana.png"], "lance": ["lance.png"], "lanette": ["lanette.png"], "larry": ["larry.png"], "leaf": ["leaf-gen3.png", "leaf-masters.png"], "leaf-gen3": ["leaf-gen3.png", "leaf-masters.png"], "leaf-masters": ["leaf-masters.png", "leaf-gen3.png"], "lebanne": ["lebanne.png"], "lenora": ["lenora.png"], "leon": ["leon.png", "leon-masters.png"], "leon-masters": ["leon-masters.png", "leon.png"], "lida": ["lida.png"], "liko": ["liko.png"], "lillie": ["lillie-masters.png", "lillie-z.png"], "lillie-masters": ["lillie-masters.png", "lillie-z.png"], "lillie-z": ["lillie-z.png", "lillie-masters.png"], "lisia": ["lisia.png", "lisia-masters.png"], "lisia-masters": ["lisia-masters.png", "lisia.png"], "lorelei": ["lorelei-gen3.png", "lorelei-lgpe.png", "lorelei-gen3-1.png", "lorelei-lgpe-1.png"], "lorelei-gen3": ["lorelei-gen3.png", "lorelei-lgpe.png", "lorelei-gen3-1.png", "lorelei-lgpe-1.png"], "lorelei-gen3-1": ["lorelei-gen3-1.png", "lorelei-gen3.png", "lorelei-lgpe.png", "lorelei-lgpe-1.png"], "lorelei-lgpe": ["lorelei-lgpe.png", "lorelei-gen3.png", "lorelei-gen3-1.png", "lorelei-lgpe-1.png"], "lorelei-lgpe-1": ["lorelei-lgpe-1.png", "lorelei-gen3.png", "lorelei-lgpe.png", "lorelei-gen3-1.png"], "ltsurge": ["ltsurge.png", "ltsurge-gen3.png"], "ltsurge-gen3": ["ltsurge-gen3.png", "ltsurge.png"], "lucas": ["lucas.png", "lucas-gen4pt.png"], "lucas-gen4pt": ["lucas-gen4pt.png", "lucas.png"], "lucian": ["lucian.png"], "lucy": ["lucy.png"], "lusamine": ["lusamine.png", "lusamine-masters.png"], "lusamine-masters": ["lusamine-masters.png", "lusamine.png"], "lyra": ["lyra.png"], "lysandre": ["lysandre.png", "lysandre-masters.png"], "lysandre-masters": ["lysandre-masters.png", "lysandre.png"], "magmagrunt": ["magmagrunt.png", "magmagrunt-rse.png"], "magmagrunt-rse": ["magmagrunt-rse.png", "magmagrunt.png"], "magmagruntf": ["magmagruntf.png", "magmagruntf-rse.png"], "magmagruntf-rse": ["magmagruntf-rse.png", "magmagruntf.png"], "malva": ["malva.png"], "marnie": ["marnie.png", "marnie-league.png", "marnie-masters3.png"], "marnie-league": ["marnie-league.png", "marnie.png", "marnie-masters3.png"], "marnie-masters3": ["marnie-masters3.png", "marnie.png", "marnie-league.png"], "mars": ["mars.png"], "marshal": ["marshal.png"], "matt": ["matt.png"], "maxie": ["maxie-gen6.png"], "maxie-gen6": ["maxie-gen6.png"], "may": ["may-rs.png", "may-gen3rs.png", "may-contest.png", "may-nonbinary.png"], "may-contest": ["may-contest.png", "may-rs.png", "may-gen3rs.png", "may-nonbinary.png"], "may-gen3rs": ["may-gen3rs.png", "may-rs.png", "may-contest.png", "may-nonbinary.png"], "may-nonbinary": ["may-nonbinary.png", "may-rs.png", "may-gen3rs.png", "may-contest.png"], "may-rs": ["may-rs.png", "may-gen3rs.png", "may-contest.png", "may-nonbinary.png"], "maylene": ["maylene.png"], "melony": ["melony.png"], "miku": ["miku-flying.png"], "miku-flying": ["miku-flying.png"], "milo": ["milo.png"], "mina": ["mina.png"], "mirror": ["mirror.png"], "misty": ["misty.png", "misty-lgpe.png"], "misty-lgpe": ["misty-lgpe.png", "misty.png"], "mom": ["mom-johto.png"], "mom-johto": ["mom-johto.png"], "morty": ["morty.png", "morty-masters2.png"], "morty-masters2": ["morty-masters2.png", "morty.png"], "musician": ["musician.png"], "mustard": ["mustard.png"], "n": ["n.png", "n-masters.png"], "n-masters": ["n-masters.png", "n.png"], "nate": ["nate.png"], "nemona": ["nemona-s.png", "nemona-v.png", "nemona-s-1.png", "nemona-v-1.png"], "nemona-s": ["nemona-s.png", "nemona-v.png", "nemona-s-1.png", "nemona-v-1.png"], "nemona-s-1": ["nemona-s-1.png", "nemona-s.png", "nemona-v.png", "nemona-v-1.png"], "nemona-v": ["nemona-v.png", "nemona-s.png", "nemona-s-1.png", "nemona-v-1.png"], "nemona-v-1": ["nemona-v-1.png", "nemona-s.png", "nemona-v.png", "nemona-s-1.png"], "nessa": ["nessa.png", "nessa-masters.png"], "nessa-masters": ["nessa-masters.png", "nessa.png"], "norman": ["norman.png"], "nyx": ["nyx.png"], "oak": ["oak.png", "oak-gen3.png"], "oak-gen3": ["oak-gen3.png", "oak.png"], "oleana": ["oleana.png"], "olivia": ["olivia.png"], "olympia": ["olympia.png"], "opal": ["opal.png"], "ortega": ["ortega.png"], "palmer": ["palmer.png"], "paxton": ["paxton.png"], "peony": ["peony.png"], "perrin": ["perrin.png"], "petrel": ["petrel.png"], "phoebe": ["phoebe-gen6.png", "phoebe-masters.png", "phoebe-masters-1.png"], "phoebe-gen6": ["phoebe-gen6.png", "phoebe-masters.png", "phoebe-masters-1.png"], "phoebe-masters": ["phoebe-masters.png", "phoebe-gen6.png", "phoebe-masters-1.png"], "phoebe-masters-1": ["phoebe-masters-1.png", "phoebe-gen6.png", "phoebe-masters.png"], "phorus": ["phorus-unite.png"], "phorus-unite": ["phorus-unite.png"], "piers": ["piers.png"], "plasmagrunt": ["plasmagrunt.png", "plasmagrunt-gen5bw.png"], "plasmagrunt-gen5bw": ["plasmagrunt-gen5bw.png", "plasmagrunt.png"], "plasmagruntf": ["plasmagruntf.png", "plasmagruntf-gen5bw.png"], "plasmagruntf-gen5bw": ["plasmagruntf-gen5bw.png", "plasmagruntf.png"], "plumeria": ["plumeria.png", "plumeria-league.png"], "plumeria-league": ["plumeria-league.png", "plumeria.png"], "pokefan": ["pokefan.png"], "pokemaniac": ["pokemaniac-gen6.png"], "pokemaniac-gen6": ["pokemaniac-gen6.png"], "pokemoncenterlady": ["pokemoncenterlady.png"], "pokemonranger": ["pokemonranger.png"], "pokemonrangerf": ["pokemonrangerf.png"], "pokemontrainer": ["red.png", "red-gen3.png", "red-masters.png", "red-masters3.png"], "poppy": ["poppy.png"], "proton": ["proton.png"], "pryce": ["pryce.png"], "psychic": ["acetrainer-gen4.png", "acetrainer-gen6xy.png"], "punkgirl": ["punkgirl.png", "punkgirl-masters.png"], "punkgirl-masters": ["punkgirl-masters.png", "punkgirl.png"], "punkguy": ["punkguy.png"], "raihan": ["raihan.png", "raihan-masters.png"], "raihan-masters": ["raihan-masters.png", "raihan.png"], "rainbowrocketgrunt": ["rainbowrocketgrunt.png"], "rainbowrocketgruntf": ["rainbowrocketgruntf.png"], "ramos": ["ramos.png"], "red": ["red.png", "red-gen3.png", "red-masters.png", "red-masters3.png"], "red-gen3": ["red-gen3.png", "red.png", "red-masters.png", "red-masters3.png"], "red-masters": ["red-masters.png", "red.png", "red-gen3.png", "red-masters3.png"], "red-masters3": ["red-masters3.png", "red.png", "red-gen3.png", "red-masters.png"], "rei": ["rei.png"], "rika": ["rika.png"], "riley": ["riley.png"], "roark": ["roark.png"], "rocketgrunt": ["rocketgrunt.png"], "rocketgruntf": ["rocketgruntf.png"], "rood": ["rood.png"], "rosa": ["rosa.png", "rosa-wonderlauncher.png", "rosa-masters3.png"], "rosa-masters3": ["rosa-masters3.png", "rosa.png", "rosa-wonderlauncher.png"], "rosa-wonderlauncher": ["rosa-wonderlauncher.png", "rosa.png", "rosa-masters3.png"], "rose": ["rose.png"], "rowan": ["rowan.png"], "roxanne": ["roxanne-gen3.png", "roxanne-gen6.png", "roxanne-masters.png"], "roxanne-gen3": ["roxanne-gen3.png", "roxanne-gen6.png", "roxanne-masters.png"], "roxanne-gen6": ["roxanne-gen6.png", "roxanne-gen3.png", "roxanne-masters.png"], "roxanne-masters": ["roxanne-masters.png", "roxanne-gen3.png", "roxanne-gen6.png"], "roxie": ["roxie.png", "roxie-masters.png"], "roxie-masters": ["roxie-masters.png", "roxie.png"], "roy": ["roy.png"], "rune": ["rune.png"], "ryme": ["ryme.png"], "ryuki": ["ryuki.png"], "sabrina": ["sabrina.png", "sabrina-frlg.png", "sabrina-lgpe.png"], "sabrina-frlg": ["sabrina-frlg.png", "sabrina.png", "sabrina-lgpe.png"], "sabrina-lgpe": ["sabrina-lgpe.png", "sabrina.png", "sabrina-frlg.png"], "sanqua": ["sanqua.png"], "selene": ["selene.png", "selene-masters.png"], "selene-masters": ["selene-masters.png", "selene.png"], "serena": ["serena.png", "serena-anime.png", "serena-masters3.png"], "serena-anime": ["serena-anime.png", "serena.png", "serena-masters3.png"], "serena-masters3": ["serena-masters3.png", "serena.png", "serena-anime.png"], "shauna": ["shauna.png"], "shauntal": ["shauntal.png"], "shelly": ["shelly.png", "shelly-gen3.png"], "shelly-gen3": ["shelly-gen3.png", "shelly.png"], "sidney": ["sidney-gen3.png", "sidney-gen3-1.png"], "sidney-gen3": ["sidney-gen3.png", "sidney-gen3-1.png"], "sidney-gen3-1": ["sidney-gen3-1.png", "sidney-gen3.png"], "siebold": ["siebold-masters.png"], "siebold-masters": ["siebold-masters.png"], "silver": ["silver.png", "silver-masters.png"], "silver-masters": ["silver-masters.png", "silver.png"], "skullgrunt": ["skullgrunt.png"], "skullgruntf": ["skullgruntf.png"], "skyla": ["skyla.png", "skyla-masters.png"], "skyla-masters": ["skyla-masters.png", "skyla.png"], "sonia": ["sonia.png", "sonia-professor.png"], "sonia-professor": ["sonia-professor.png", "sonia.png"], "stargrunt": ["stargrunt-s.png", "stargrunt-v.png"], "stargrunt-s": ["stargrunt-s.png", "stargrunt-v.png"], "stargrunt-v": ["stargrunt-v.png", "stargrunt-s.png"], "stargruntf": ["stargruntf-s.png", "stargruntf-v.png"], "stargruntf-s": ["stargruntf-s.png", "stargruntf-v.png"], "stargruntf-v": ["stargruntf-v.png", "stargruntf-s.png"], "steven": ["steven.png", "steven-masters2.png"], "steven-masters2": ["steven-masters2.png", "steven.png"], "swimmer": ["swimmer-gen8.png"], "swimmer-gen8": ["swimmer-gen8.png"], "swimmerf": ["swimmerf.png", "swimmerf-gen4.png"], "swimmerf-gen4": ["swimmerf-gen4.png", "swimmerf.png"], "sycamore": ["sycamore.png", "sycamore-masters.png"], "sycamore-masters": ["sycamore-masters.png", "sycamore.png"], "tabitha": ["tabitha.png", "tabitha-gen3.png"], "tabitha-gen3": ["tabitha-gen3.png", "tabitha.png"], "taohua": ["taohua.png"], "tate": ["tate.png", "tate-and-liza-gen3.png", "tate-masters.png"], "tate-and-liza-gen3": ["tate-and-liza-gen3.png", "tate.png", "tate-masters.png"], "tate-liza": ["tate.png", "tate-and-liza-gen3.png", "tate-masters.png"], "tate-masters": ["tate-masters.png", "tate.png", "tate-and-liza-gen3.png"], "tateandliza": ["tateandliza-gen6.png"], "tateandliza-gen6": ["tateandliza-gen6.png"], "taunie": ["taunie.png"], "teamaquabeta": ["teamaquabeta-gen3.png"], "teamaquabeta-gen3": ["teamaquabeta-gen3.png"], "teammagmagruntf": ["teammagmagruntf-gen3.png"], "teammagmagruntf-gen3": ["teammagmagruntf-gen3.png"], "teamrocket": ["teamrocket.png"], "teamstargrunt": ["stargrunt-s.png", "stargrunt-v.png"], "thorton": ["thorton.png"], "tierno": ["tierno.png"], "tina": ["tina-masters.png"], "tina-masters": ["tina-masters.png"], "trace": ["trace.png"], "trevor": ["trevor.png"], "tulip": ["tulip.png"], "turo": ["turo.png", "turo-ai.png"], "turo-ai": ["turo-ai.png", "turo.png"], "valerie": ["valerie.png"], "veteran": ["veteran.png"], "veteranf": ["veteranf-gen7.png"], "veteranf-gen7": ["veteranf-gen7.png"], "victor": ["victor.png"], "viola": ["viola.png", "viola-masters.png"], "viola-masters": ["viola-masters.png", "viola.png"], "volkner": ["volkner.png", "volkner-masters.png"], "volkner-masters": ["volkner-masters.png", "volkner.png"], "volo": ["volo.png", "volo-ginkgo.png"], "volo-ginkgo": ["volo-ginkgo.png", "volo.png"], "wake": ["crasherwake.png", "crasherwake-1.png"], "wallace": ["wallace.png", "wallace-gen3.png", "wallace-gen6.png", "wallace-masters.png"], "wallace-gen3": ["wallace-gen3.png", "wallace.png", "wallace-gen6.png", "wallace-masters.png"], "wallace-gen6": ["wallace-gen6.png", "wallace.png", "wallace-gen3.png", "wallace-masters.png"], "wallace-masters": ["wallace-masters.png", "wallace.png", "wallace-gen3.png", "wallace-gen6.png"], "wally": ["wally-rse.png"], "wally-rse": ["wally-rse.png"], "wattson": ["wattson.png"], "whitney": ["whitney.png"], "wicke": ["wicke.png"], "wikstrom": ["wikstrom.png"], "will": ["will.png"], "willow": ["willow.png"], "winona": ["winona.png", "winona-gen6.png"], "winona-gen6": ["winona-gen6.png", "winona.png"], "wulfric": ["wulfric.png"], "xerosic": ["xerosic.png"], "yancy": ["yancy.png"], "yellgrunt": ["yellgrunt.png"], "yellgruntf": ["yellgruntf.png"], "yellow": ["yellow.png"], "youngn": ["youngn.png"], "zinnia": ["zinnia.png"], "zinzolin": ["zinzolin.png"], "zisu": ["zisu.png"]};
const SPRITE_FILE_MAP={"aaron": "aaron.png", "aarune": "aarune.png", "acerola": "acerola.png", "acerola-masters3": "acerola-masters3.png", "acetrainer": "acetrainer-gen4.png", "acetrainer-gen4": "acetrainer-gen4.png", "acetrainer-gen6": "acetrainer-gen6xy.png", "acetrainer-gen6xy": "acetrainer-gen6xy.png", "acetrainercouple": "acetrainercouple.png", "acetrainerf": "acetrainerf-gen4dp.png", "acetrainerf-gen4dp": "acetrainerf-gen4dp.png", "acetrainerf-gen6xy": "acetrainerf-gen6xy.png", "adaman": "adaman.png", "aetherfoundation2": "aetherfoundation2.png", "aetherfoundationf": "aetherfoundationf.png", "agatha": "agatha-gen3.png", "agatha-gen3": "agatha-gen3.png", "agatha-gen3-1": "agatha-gen3-1.png", "agatha-lgpe": "agatha-lgpe.png", "akari": "akari.png", "alder": "alder.png", "allister": "allister.png", "allister-masters": "allister-masters.png", "amelia": "amelia-shuffle.png", "amelia-shuffle": "amelia-shuffle.png", "aquagrunt": "aquagrunt-rse.png", "aquagrunt-rse": "aquagrunt-rse.png", "aquagruntf": "aquagruntf.png", "aquagruntf-rse": "aquagruntf-rse.png", "archie": "archie-usum.png", "archie-usum": "archie-usum.png", "arezu": "arezu.png", "ariana": "ariana.png", "aromalady": "aromalady-gen3.png", "aromalady-gen3": "aromalady-gen3.png", "artist": "acetrainer-gen6xy.png", "ash": "ash.png", "ash-johto": "ash-johto.png", "ash-sinnoh": "ash-sinnoh.png", "ash-unova": "ash-unova.png", "az": "az.png", "az-lza": "az-lza.png", "barry": "barry.png", "battlegirl": "battlegirl-gen3.png", "battlegirl-gen3": "battlegirl-gen3.png", "bea": "bea.png", "beauty": "beauty.png", "beauty-gen3": "beauty-gen3.png", "beauty-gen5bw2": "beauty-gen5bw2.png", "bede": "bede-masters.png", "bede-masters": "bede-masters.png", "benga": "benga.png", "bertha": "bertha.png", "bianca": "bianca.png", "bianca-masters": "bianca-masters.png", "biker": "biker.png", "biker-gen3": "biker-gen3.png", "bill": "bill.png", "birch": "birch.png", "birch-gen3": "birch-gen3.png", "birdkeeper": "birdkeeper-gen4dp.png", "birdkeeper-gen4dp": "birdkeeper-gen4dp.png", "blackbelt": "blackbelt-gen4dp.png", "blackbelt-gen4dp": "blackbelt-gen4dp.png", "blaine": "blaine.png", "blanche": "blanche.png", "blue": "blue.png", "blue-masters": "blue-masters.png", "boarder": "boarder.png", "brassius": "brassius.png", "brawly": "brawly.png", "brawly-gen3": "brawly-gen3.png", "brendan": "brendan.png", "brendan-rs": "brendan-rs.png", "brock": "brock.png", "bruno": "bruno.png", "brycen": "brycen.png", "bugcatcher": "bugcatcher-gen3.png", "bugcatcher-gen3": "bugcatcher-gen3.png", "bugsy": "bugsy.png", "burgh": "burgh.png", "burnet": "burnet.png", "byron": "byron.png", "caitlin": "caitlin.png", "calaba": "calaba.png", "calem": "calem.png", "cameraman": "cameraman-gen8.png", "cameraman-gen8": "cameraman-gen8.png", "candela": "candela.png", "candice": "candice.png", "chase": "chase.png", "cheren": "cheren-gen5bw2.png", "cheren-gen5bw2": "cheren-gen5bw2.png", "cheryl": "cheryl.png", "chili": "chili.png", "chuck": "chuck.png", "cilan": "cilan.png", "clair": "clair.png", "clavell": "clavell-s.png", "clavell-s": "clavell-s.png", "clay": "clay.png", "clemont": "clemont.png", "collector": "collector.png", "colza": "colza.png", "crasherwake": "crasherwake.png", "crasherwake-1": "crasherwake-1.png", "cress": "cress.png", "crushkin": "crushkin-gen3.png", "crushkin-gen3": "crushkin-gen3.png", "cynthia": "cynthia-gen7.png", "cynthia-anime": "cynthia-anime.png", "cynthia-gen7": "cynthia-gen7.png", "cynthia-masters": "cynthia-masters.png", "cynthia-masters-1": "cynthia-masters-1.png", "cyrus": "cyrus.png", "dawn": "dawn.png", "dawn-contest": "dawn-contest.png", "diantha": "diantha.png", "dragon": "dragontamer.png", "dragontamer": "dragontamer.png", "drake": "drake-gen3.png", "drake-gen3": "drake-gen3.png", "drake-gen3-1": "drake-gen3-1.png", "drasna": "drasna.png", "drayden": "drayden.png", "elesa": "elesa.png", "elesa-masters": "elesa-masters.png", "elesa-masters3": "elesa-masters3.png", "elio": "elio.png", "elm": "elm.png", "emmet": "emmet.png", "erika": "erika.png", "ethan": "ethan.png", "falkner": "falkner.png", "fantina": "fantina.png", "fisherman": "fisherman-gen3.png", "fisherman-gen3": "fisherman-gen3.png", "flannery": "flannery.png", "flannery-gen6": "flannery-gen6.png", "flaregrunt": "flaregrunt.png", "flaregruntf": "flaregruntf.png", "flint": "flint.png", "florian": "florian-bb.png", "florian-bb": "florian-bb.png", "flying": "miku-flying.png", "furisodegirl": "furisodegirl-black.png", "furisodegirl-black": "furisodegirl-black.png", "furisodegirl-white": "furisodegirl-white.png", "galacticgrunt": "galacticgrunt.png", "galacticgruntf": "galacticgruntf.png", "gardenia": "gardenia.png", "gardenia-masters": "gardenia-masters.png", "geeta": "geeta.png", "gentleman": "gentleman-gen4.png", "gentleman-gen4": "gentleman-gen4.png", "ghetsis": "ghetsis.png", "ghetsis-gen5bw": "ghetsis-gen5bw.png", "giovanni": "giovanni.png", "giovanni-lgpe": "giovanni-lgpe.png", "girl": "punkgirl.png", "glacia": "glacia.png", "gladion": "gladion.png", "gloria": "gloria.png", "grant": "grant.png", "grimsley": "grimsley.png", "grusha": "grusha.png", "guzma": "guzma.png", "guzma-masters": "guzma-masters.png", "gwynn": "gwynn.png", "hala": "hala.png", "hassel": "hassel.png", "hau": "hau.png", "hau-masters": "hau-masters.png", "hex-maniac": "punkgirl.png", "hexmaniac": "punkgirl.png", "hilbert": "hilbert.png", "hilbert-masters": "hilbert-masters.png", "hilbert-wonderlauncher": "hilbert-wonderlauncher.png", "hilda": "hilda.png", "hilda-masters3": "hilda-masters3.png", "hop": "hop.png", "hugh": "hugh.png", "ingo": "ingo.png", "iono": "iono.png", "iono-masters": "iono-masters.png", "irida": "irida.png", "iris": "iris.png", "iris-gen5bw2": "iris-gen5bw2.png", "jacinthe": "jacinthe.png", "janine": "janine.png", "jasmine": "jasmine.png", "jasmine-contest": "jasmine-contest.png", "jessiejames": "jessiejames-gen1.png", "jessiejames-gen1": "jessiejames-gen1.png", "juan": "juan.png", "juniper": "juniper.png", "jupiter": "jupiter.png", "kabu": "kabu.png", "kahili": "kahili.png", "kamado": "kamado.png", "karen": "karen.png", "katy": "katy.png", "kiawe": "kiawe.png", "kimonogirl": "kimonogirl.png", "klara": "klara.png", "kofu": "kofu.png", "koga": "koga.png", "korrina": "korrina.png", "kris": "kris.png", "kukui": "kukui.png", "kunoichi2": "kunoichi2-conquest.png", "kunoichi2-conquest": "kunoichi2-conquest.png", "lana": "lana.png", "lana-masters": "lana-masters.png", "lance": "lance.png", "lanette": "lanette.png", "larry": "larry.png", "leaf": "leaf-gen3.png", "leaf-gen3": "leaf-gen3.png", "leaf-masters": "leaf-masters.png", "lebanne": "lebanne.png", "lenora": "lenora.png", "leon": "leon.png", "leon-masters": "leon-masters.png", "lida": "lida.png", "liko": "liko.png", "lillie": "lillie-masters.png", "lillie-masters": "lillie-masters.png", "lillie-z": "lillie-z.png", "lisia": "lisia.png", "lisia-masters": "lisia-masters.png", "lorelei": "lorelei-gen3.png", "lorelei-gen3": "lorelei-gen3.png", "lorelei-gen3-1": "lorelei-gen3-1.png", "lorelei-lgpe": "lorelei-lgpe.png", "lorelei-lgpe-1": "lorelei-lgpe-1.png", "ltsurge": "ltsurge.png", "ltsurge-gen3": "ltsurge-gen3.png", "lucas": "lucas.png", "lucas-gen4pt": "lucas-gen4pt.png", "lucian": "lucian.png", "lucy": "lucy.png", "lusamine": "lusamine.png", "lusamine-masters": "lusamine-masters.png", "lyra": "lyra.png", "lysandre": "lysandre.png", "lysandre-masters": "lysandre-masters.png", "magmagrunt": "magmagrunt.png", "magmagrunt-rse": "magmagrunt-rse.png", "magmagruntf": "magmagruntf.png", "magmagruntf-rse": "magmagruntf-rse.png", "malva": "malva.png", "marnie": "marnie.png", "marnie-league": "marnie-league.png", "marnie-masters3": "marnie-masters3.png", "mars": "mars.png", "marshal": "marshal.png", "matt": "matt.png", "maxie": "maxie-gen6.png", "maxie-gen6": "maxie-gen6.png", "may": "may-rs.png", "may-contest": "may-contest.png", "may-gen3rs": "may-gen3rs.png", "may-nonbinary": "may-nonbinary.png", "may-rs": "may-rs.png", "maylene": "maylene.png", "melony": "melony.png", "miku": "miku-flying.png", "miku-flying": "miku-flying.png", "milo": "milo.png", "mina": "mina.png", "mirror": "mirror.png", "misty": "misty.png", "misty-lgpe": "misty-lgpe.png", "mom": "mom-johto.png", "mom-johto": "mom-johto.png", "morty": "morty.png", "morty-masters2": "morty-masters2.png", "musician": "musician.png", "mustard": "mustard.png", "n": "n.png", "n-masters": "n-masters.png", "nate": "nate.png", "nemona": "nemona-s.png", "nemona-s": "nemona-s.png", "nemona-s-1": "nemona-s-1.png", "nemona-v": "nemona-v.png", "nemona-v-1": "nemona-v-1.png", "nessa": "nessa.png", "nessa-masters": "nessa-masters.png", "norman": "norman.png", "nyx": "nyx.png", "oak": "oak.png", "oak-gen3": "oak-gen3.png", "oleana": "oleana.png", "olivia": "olivia.png", "olympia": "olympia.png", "opal": "opal.png", "ortega": "ortega.png", "palmer": "palmer.png", "paxton": "paxton.png", "peony": "peony.png", "perrin": "perrin.png", "petrel": "petrel.png", "phoebe": "phoebe-gen6.png", "phoebe-gen6": "phoebe-gen6.png", "phoebe-masters": "phoebe-masters.png", "phoebe-masters-1": "phoebe-masters-1.png", "phorus": "phorus-unite.png", "phorus-unite": "phorus-unite.png", "piers": "piers.png", "plasmagrunt": "plasmagrunt.png", "plasmagrunt-gen5bw": "plasmagrunt-gen5bw.png", "plasmagruntf": "plasmagruntf.png", "plasmagruntf-gen5bw": "plasmagruntf-gen5bw.png", "plumeria": "plumeria.png", "plumeria-league": "plumeria-league.png", "pokefan": "pokefan.png", "pokemaniac": "pokemaniac-gen6.png", "pokemaniac-gen6": "pokemaniac-gen6.png", "pokemoncenterlady": "pokemoncenterlady.png", "pokemonranger": "pokemonranger.png", "pokemonrangerf": "pokemonrangerf.png", "pokemontrainer": "red.png", "poppy": "poppy.png", "proton": "proton.png", "pryce": "pryce.png", "psychic": "acetrainer-gen4.png", "punkgirl": "punkgirl.png", "punkgirl-masters": "punkgirl-masters.png", "punkguy": "punkguy.png", "raihan": "raihan.png", "raihan-masters": "raihan-masters.png", "rainbowrocketgrunt": "rainbowrocketgrunt.png", "rainbowrocketgruntf": "rainbowrocketgruntf.png", "ramos": "ramos.png", "red": "red.png", "red-gen3": "red-gen3.png", "red-masters": "red-masters.png", "red-masters3": "red-masters3.png", "rei": "rei.png", "rika": "rika.png", "riley": "riley.png", "roark": "roark.png", "rocketgrunt": "rocketgrunt.png", "rocketgruntf": "rocketgruntf.png", "rood": "rood.png", "rosa": "rosa.png", "rosa-masters3": "rosa-masters3.png", "rosa-wonderlauncher": "rosa-wonderlauncher.png", "rose": "rose.png", "rowan": "rowan.png", "roxanne": "roxanne-gen3.png", "roxanne-gen3": "roxanne-gen3.png", "roxanne-gen6": "roxanne-gen6.png", "roxanne-masters": "roxanne-masters.png", "roxie": "roxie.png", "roxie-masters": "roxie-masters.png", "roy": "roy.png", "rune": "rune.png", "ryme": "ryme.png", "ryuki": "ryuki.png", "sabrina": "sabrina.png", "sabrina-frlg": "sabrina-frlg.png", "sabrina-lgpe": "sabrina-lgpe.png", "sanqua": "sanqua.png", "selene": "selene.png", "selene-masters": "selene-masters.png", "serena": "serena.png", "serena-anime": "serena-anime.png", "serena-masters3": "serena-masters3.png", "shauna": "shauna.png", "shauntal": "shauntal.png", "shelly": "shelly.png", "shelly-gen3": "shelly-gen3.png", "sidney": "sidney-gen3.png", "sidney-gen3": "sidney-gen3.png", "sidney-gen3-1": "sidney-gen3-1.png", "siebold": "siebold-masters.png", "siebold-masters": "siebold-masters.png", "silver": "silver.png", "silver-masters": "silver-masters.png", "skullgrunt": "skullgrunt.png", "skullgruntf": "skullgruntf.png", "skyla": "skyla.png", "skyla-masters": "skyla-masters.png", "sonia": "sonia.png", "sonia-professor": "sonia-professor.png", "stargrunt": "stargrunt-s.png", "stargrunt-s": "stargrunt-s.png", "stargrunt-v": "stargrunt-v.png", "stargruntf": "stargruntf-s.png", "stargruntf-s": "stargruntf-s.png", "stargruntf-v": "stargruntf-v.png", "steven": "steven.png", "steven-masters2": "steven-masters2.png", "swimmer": "swimmer-gen8.png", "swimmer-gen8": "swimmer-gen8.png", "swimmerf": "swimmerf.png", "swimmerf-gen4": "swimmerf-gen4.png", "sycamore": "sycamore.png", "sycamore-masters": "sycamore-masters.png", "tabitha": "tabitha.png", "tabitha-gen3": "tabitha-gen3.png", "taohua": "taohua.png", "tate": "tate.png", "tate-and-liza-gen3": "tate-and-liza-gen3.png", "tate-liza": "tate.png", "tate-masters": "tate-masters.png", "tateandliza": "tateandliza-gen6.png", "tateandliza-gen6": "tateandliza-gen6.png", "taunie": "taunie.png", "teamaquabeta": "teamaquabeta-gen3.png", "teamaquabeta-gen3": "teamaquabeta-gen3.png", "teammagmagruntf": "teammagmagruntf-gen3.png", "teammagmagruntf-gen3": "teammagmagruntf-gen3.png", "teamrocket": "teamrocket.png", "teamstargrunt": "stargrunt-s.png", "thorton": "thorton.png", "tierno": "tierno.png", "tina": "tina-masters.png", "tina-masters": "tina-masters.png", "trace": "trace.png", "trevor": "trevor.png", "tulip": "tulip.png", "turo": "turo.png", "turo-ai": "turo-ai.png", "valerie": "valerie.png", "veteran": "veteran.png", "veteranf": "veteranf-gen7.png", "veteranf-gen7": "veteranf-gen7.png", "victor": "victor.png", "viola": "viola.png", "viola-masters": "viola-masters.png", "volkner": "volkner.png", "volkner-masters": "volkner-masters.png", "volo": "volo.png", "volo-ginkgo": "volo-ginkgo.png", "wake": "crasherwake.png", "wallace": "wallace.png", "wallace-gen3": "wallace-gen3.png", "wallace-gen6": "wallace-gen6.png", "wallace-masters": "wallace-masters.png", "wally": "wally-rse.png", "wally-rse": "wally-rse.png", "wattson": "wattson.png", "whitney": "whitney.png", "wicke": "wicke.png", "wikstrom": "wikstrom.png", "will": "will.png", "willow": "willow.png", "winona": "winona.png", "winona-gen6": "winona-gen6.png", "wulfric": "wulfric.png", "xerosic": "xerosic.png", "yancy": "yancy.png", "yellgrunt": "yellgrunt.png", "yellgruntf": "yellgruntf.png", "yellow": "yellow.png", "youngn": "youngn.png", "zinnia": "zinnia.png", "zinzolin": "zinzolin.png", "zisu": "zisu.png"};


const LOCAL_BADGE_MAP={"Boulder Badge": "Boulder_Badge.webp", "Cascade Badge": "Cascade_Badge.webp", "Thunder Badge": "Thunder_Badge.webp", "Rainbow Badge": "Rainbow_Badge.webp", "Soul Badge": "Soul_Badge.webp", "Marsh Badge": "Marsh_Badge.webp", "Volcano Badge": "Volcano_Badge.webp", "Earth Badge": "Earth_Badge.webp", "Zephyr Badge": "Zephyrbadge.webp", "Hive Badge": "Hivebadge.webp", "Plain Badge": "Plainbadge.webp", "Fog Badge": "Fogbadge.webp", "Storm Badge": "Stormbadge.webp", "Mineral Badge": "Mineralbadge.webp", "Glacier Badge": "Glacierbadge.webp", "Rising Badge": "Risingbadge.webp", "Stone Badge": "Stonebadge.webp", "Knuckle Badge": "Knuckle_Badge.webp", "Dynamo Badge": "Dynamobadge.webp", "Heat Badge": "Heatbadge.webp", "Balance Badge": "Balancebadge.webp", "Feather Badge": "Featherbadge.webp", "Mind Badge": "Mindbadge.webp", "Rain Badge": "Rainbadge.webp", "Coal Badge": "Coalbadge.webp", "Forest Badge": "Forestbadge.webp", "Cobble Badge": "Cobblebadge.webp", "Fen Badge": "Fenbadge.webp", "Relic Badge": "Relicbadge.webp", "Mine Badge": "Minebadge.webp", "Icicle Badge": "Iciclebadge.webp", "Basic Badge": "Basicbadge.webp", "Insect Badge": "Insectbadge.webp", "Bolt Badge": "Boltbadge.webp", "Quake Badge": "Quakebadge.webp", "Jet Badge": "Jetbadge.webp", "Legend Badge": "Legendbadge.webp", "Bug Badge": "Bug_Badge_Viola.webp", "Cliff Badge": "Cliff_Badge.webp", "Rumble Badge": "Rumble_Badge.webp", "Plant Badge": "Plant_Badge.webp", "Voltage Badge": "Voltage_Badge.webp", "Fairy Badge": "Fairy_Badge_XY.webp", "Psychic Badge": "Psychic_Badge.webp", "Iceberg Badge": "Iceberg_Badge.webp", "Grass Badge": "Grass_Badge.webp", "Water Badge": "Water_Badge.webp", "Fire Badge": "Fire_Badge.webp", "Fighting Badge": "Fighting_Badge.webp", "Ghost Badge": "Ghost_Badge_SV.webp", "Rock Badge": "Rock_Badge.webp", "Dragon Badge": "Dragon_Badge.webp", "Normal Badge": "Normal_Badge_SV.webp", "Electric Badge": "Electric_Badge_SV.webp", "Ice Badge": "Ice_Badge_SV.webp", "Dark Badge": "Dark_Badge.webp"};
const LOCAL_TYPE_BADGE_MAP={"Normal": "Normal_Badge_SV.webp", "Fire": "Fire_Badge.webp", "Water": "Water_Badge.webp", "Electric": "Electric_Badge_SV.webp", "Grass": "Grass_Badge.webp", "Ice": "Ice_Badge_SV.webp", "Fighting": "Fighting_Badge.webp", "Poison": "Soul_Badge.webp", "Ground": "Quakebadge.webp", "Flying": "Featherbadge.webp", "Psychic": "Psychic_Badge.webp", "Bug": "Bug_Badge_Viola.webp", "Rock": "Rock_Badge.webp", "Ghost": "Ghost_Badge_SV.webp", "Dragon": "Dragon_Badge.webp", "Dark": "Dark_Badge.webp", "Steel": "Mineralbadge.webp", "Fairy": "Fairy_Badge_XY.webp", "Balanced": "Rainbow_Badge.webp"};
const ORANGE_ISLAND_BADGES=["SeaRuby_Badge.webp", "SpikeShell_Badge.webp", "JadeStar_Badge.webp", "Coral-Eye_Badge.webp"];
function localBadgePath(file){return file?"PokemonGymBadges/"+file:null}
function badgeUrl(badgeName,typeName,stageName){
 if(stageName==="Champion"){
  let f=ORANGE_ISLAND_BADGES[Math.floor(Math.random()*ORANGE_ISLAND_BADGES.length)];
  return localBadgePath(f);
 }
 if(badgeName&&LOCAL_BADGE_MAP[badgeName])return localBadgePath(LOCAL_BADGE_MAP[badgeName]);
 if(typeName&&LOCAL_TYPE_BADGE_MAP[typeName])return localBadgePath(LOCAL_TYPE_BADGE_MAP[typeName]);
 return localBadgePath(LOCAL_TYPE_BADGE_MAP.Balanced);
}
function badgeImg(badgeName,typeName,stageName){
 let label=stageName==="Champion"?"Orange Island Badge":(badgeName||typeName||"Badge");
 let url=badgeUrl(badgeName,typeName,stageName);
 return `<div class="badge" title="${label}"><img src="${url}" alt="${label}" onerror="this.outerHTML='<div class=&quot;badge&quot; title=&quot;${label}&quot;><span style=&quot;font-size:24px&quot;>🏅</span></div>'"></div>`;
}

const LEGENDARY_NAMES=new Set(["articuno","zapdos","moltres","mewtwo","mew","raikou","entei","suicune","lugia","ho-oh","celebi","regirock","regice","registeel","latias","latios","kyogre","groudon","rayquaza","jirachi","deoxys","uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina","cresselia","phione","manaphy","darkrai","shaymin","arceus","victini","cobalion","terrakion","virizion","tornadus","thundurus","reshiram","zekrom","landorus","kyurem","keldeo","meloetta","genesect","xerneas","yveltal","zygarde","diancie","hoopa","volcanion","type-null","silvally","tapu-koko","tapu-lele","tapu-bulu","tapu-fini","cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","necrozma","magearna","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","meltan","melmetal","zacian","zamazenta","eternatus","kubfu","urshifu","zarude","regieleki","regidrago","glastrier","spectrier","calyrex","enamorus","wo-chien","chien-pao","ting-lu","chi-yu","koraidon","miraidon","walking-wake","iron-leaves","ogerpon","terapagos","pecharunt"]);

const MASTER_BALL_LEGENDARY_POOL=[
 "articuno","zapdos","moltres","mewtwo","mew","raikou","entei","suicune","lugia","ho-oh","celebi",
 "regirock","regice","registeel","latias","latios","kyogre","groudon","rayquaza","jirachi","deoxys-normal",
 "uxie","mesprit","azelf","dialga","palkia","heatran","regigigas","giratina-altered","cresselia","darkrai",
 "shaymin-land","arceus","victini","cobalion","terrakion","virizion","tornadus-incarnate","thundurus-incarnate",
 "reshiram","zekrom","landorus-incarnate","kyurem","keldeo-ordinary","meloetta-aria","genesect","xerneas","yveltal",
 "zygarde-50","diancie","hoopa","volcanion","type-null","silvally","tapu-koko","tapu-lele","tapu-bulu","tapu-fini",
 "cosmog","cosmoem","solgaleo","lunala","nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord",
 "necrozma","magearna","marshadow","poipole","naganadel","stakataka","blacephalon","zeraora","meltan","melmetal",
 "zacian","zamazenta","eternatus","kubfu","urshifu-single-strike","zarude","regieleki","regidrago","glastrier","spectrier",
 "calyrex","enamorus-incarnate","wo-chien","chien-pao","ting-lu","chi-yu","koraidon","miraidon","walking-wake","iron-leaves",
 "ogerpon","terapagos","pecharunt"
];
let masterBallReady=false;
let masterBallUsed=false;

const EVOLUTION_MAPPING_DATA={"$schema":"pokemon-colosseum.evolution-mapping.v1","version":"1.1.1","notes":["Evolution Stone reads only normalEvolutions, splitEvolutions and formUpgrades.","Evolution Stone must not read megaEvolutions or specialQuestEvolutions.","specialQuestEvolutions are triggered only by quest/item systems.","megaEvolutions are triggered only by the Mega Evolution selection step.","This file is intended to be the single source of truth for future evolution behavior."],"evolutionStoneEnabledCategories":["normalEvolutions","splitEvolutions","formUpgrades"],"normalEvolutions":{"abra":"kadabra","aipom":"ambipom","alola":"alola vacation gone wrong team","amaura":"aurorus","anorith":"armaldo","archen":"archeops","arctibax":"baxcalibur","aron":"lairon","arrokuda":"barraskewda","axew":"fraxure","azurill":"marill","bagon":"shelgon","baltoy":"claydol","barboach":"whiscash","bayleef":"meganium","beldum":"metang","bellsprout":"weepinbell","bidoof":"bibarel","bisharp":"kingambit","blipbug":"dottler","blitzle":"zebstrika","boldore":"gigalith","bonsly":"sudowoodo","bounsweet":"steenee","bramblin":"brambleghast","bronzor":"bronzong","budew":"roselia","bug":"https:\n rock:","buizel":"floatzel","bulbasaur":"ivysaur","buneary":"lopunny","cacnea":"cacturne","capsakid":"scovillain","carkol":"coalossal","carvanha":"sharpedo","cascoon":"dustox","caterpie":"metapod","cetoddle":"cetitan","chansey":"blissey","charjabug":"vikavolt","charmander":"charmeleon","charmeleon":"charizard","cherubi":"cherrim","chewtle":"drednaw","chikorita":"bayleef","chimchar":"monferno","chinchou":"lanturn","clefairy":"clefable","cleffa":"clefairy","clobbopus":"grapploct","combusken":"blaziken","corphish":"crawdaunt","corsola-galar":"cursola","corvisquire":"corviknight","cosmog":"cosmoem","cottonee":"whimsicott","crabrawler":"crabominable","cranidos":"rampardos","croagunk":"toxicroak","crocalor":"skeledirge","croconaw":"feraligatr","cubchoo":"beartic","cufant":"copperajah","cutiefly":"ribombee","cyndaquil":"quilava","dark":"https:\n steel:","darumaka":"darmanitan","darumaka-galar":"darmanitan-galar-standard","deerling":"sawsbuck","deino":"zweilous","desc":"transforms vaporeon, flareon, or jolteon into suicune, entei, or raikou. grants +300 quest bonus.","dewpider":"araquanid","diglett":"dugtrio","diglett-alola":"dugtrio-alola","dipplin":"hydrapple","displayname":"eternal floette","doduo":"dodrio","dolliv":"arboliva","dottler":"orbeetle","dragonair":"dragonite","drakloak":"dragapult","dratini":"dragonair","dreepy":"drakloak","drifloon":"drifblim","drilbur":"excadrill","drowzee":"hypno","ducklett":"swanna","duosion":"reuniclus","duraludon":"archaludon","dusclops":"dusknoir","duskull":"dusclops","dwebble":"crustle","eelektrik":"eelektross","ekans":"arbok","electabuzz":"electivire","electric":"https:\n grass:","electrike":"manectric","elekid":"electabuzz","elgyem":"beheeyem","fairy":"https:\n};\nfunction platesprite(type){return plate-sprites[type]||plate-sprites.normal}\nfunction itemdisplayname(){\n if(!selecteditem)return ","farfetchd-galar":"sirfetchd","feebas":"milotic","ferroseed":"ferrothorn","fidough":"dachsbun","finizen":"palafin","finneon":"lumineon","fire":"https:\n water:","flaaffy":"ampharos","flittle":"espathra","floragato":"meowscarada","flying":"https:\n psychic:","fomantis":"lurantis","foongus":"amoonguss","fraxure":"haxorus","frigibax":"arctibax","frillish":"jellicent","fuecoco":"crocalor","gabite":"garchomp","galar":"galar stadium noise complaint team","gastly":"haunter","geodude":"graveler","geodude-alola":"graveler-alola","ghost":"https:\n dragon:","gible":"gabite","gimmighoul":"gholdengo","gimmighoul-chest":"gholdengo","gimmighoul-roaming":"gholdengo","girafarig":"farigiraf","glameow":"purugly","gligar":"gliscor","glimmet":"glimmora","golbat":"crobat","goldeen":"seaking","golett":"golurk","gossifleur":"eldegoss","gothita":"gothorita","gothorita":"gothitelle","graveler":"golem","graveler-alola":"golem-alola","greavard":"houndstone","grimer":"muk","grimer-alola":"muk-alola","grotle":"torterra","grovyle":"sceptile","growlithe":"arcanine","growlithe-hisui":"arcanine-hisui","grubbin":"charjabug","gulpin":"swalot","gurdurr":"conkeldurr","hakamo-o":"kommo-o","happiny":"chansey","hatenna":"hattrem","hattrem":"hatterene","haunter":"gengar","herdier":"stoutland","hippopotas":"hippowdon","hoenn":"hoenn weather crimes team","hoothoot":"noctowl","hoppip":"skiploom","horsea":"seadra","houndour":"houndoom","ice":"https:\n fighting:","icon":"🎒","id":"rainbow-feather","igglybuff":"jigglypuff","impidimp":"morgrem","ivysaur":"venusaur","jangmo-o":"hakamo-o","jigglypuff":"wigglytuff","johto":"johto bell tower brawlers","joltik":"galvantula","kabuto":"kabutops","kadabra":"alakazam","kakuna":"beedrill","kalos":"kalos fashionably violent team","kanto":"kanto mayhem team","karrablast":"escavalier","klang":"klinklang","klink":"klang","krabby":"kingler","kricketot":"kricketune","krokorok":"krookodile","label":"world cap pikachu","lairon":"aggron","lampent":"chandelure","larvesta":"volcarona","larvitar":"pupitar","lechonk":"oinkologne","ledyba":"ledian","lickitung":"lickilicky","lileep":"cradily","lillipup":"herdier","linoone-galar":"obstagoon","litwick":"lampent","lombre":"ludicolo","lotad":"lombre","loudred":"exploud","luxio":"luxray","machoke":"machamp","machop":"machoke","magby":"magmar","magikarp":"gyarados","magmar":"magmortar","magnemite":"magneton","magneton":"magnezone","makuhita":"hariyama","mankey":"primeape","mantyke":"mantine","mareanie":"toxapex","mareep":"flaaffy","marill":"azumarill","marshtomp":"swampert","maschiff":"mabosstiff","meditite":"medicham","meltan":"melmetal","meowth":"persian","meowth-alola":"persian-alola","meowth-galar":"perrserker","metang":"metagross","metapod":"butterfree","mienfoo":"mienshao","milcery":"alcremie","minccino":"cinccino","misdreavus":"mismagius","monferno":"infernape","morelull":"shiinotic","morgrem":"grimmsnarl","mr-mime-galar":"mr-rime","mudbray":"mudsdale","mudkip":"marshtomp","munchlax":"snorlax","munna":"musharna","murkrow":"honchkrow","nacli":"naclstack","naclstack":"garganacl","name":"floette-eternal","natu":"xatu","nickit":"thievul","nidoran-f":"nidorina","nidoran-m":"nidorino","nidorina":"nidoqueen","nidorino":"nidoking","nosepass":"probopass","numel":"camerupt","nuzleaf":"shiftry","nymble":"lokix","oddish":"gloom","omanyte":"omastar","onix":"steelix","oshawott":"dewott","paldea":"paldea lunchbox riot team","palpitoad":"seismitoad","panpour":"simipour","pansage":"simisage","pansear":"simisear","paras":"parasect","patrat":"watchog","pawmi":"pawmo","pawmo":"pawmot","pawniard":"bisharp","phanpy":"donphan","pichu":"pikachu","pidgeotto":"pidgeot","pidgey":"pidgeotto","pidove":"tranquill","pignite":"emboar","pikachu":"raichu","pikipek":"trumbeak","piloswine":"mamoswine","pineco":"forretress","piplup":"prinplup","poipole":"naganadel","poison":"https:\n ground:","pokeapi":"raikou","poliwag":"poliwhirl","poltchageist":"sinistcha","ponyta":"rapidash","ponyta-galar":"rapidash-galar","poochyena":"mightyena","porygon":"porygon2","porygon2":"porygon-z","primeape":"annihilape","prinplup":"empoleon","psyduck":"golduck","pupitar":"tyranitar","purrloin":"liepard","quaxly":"quaxwell","quaxwell":"quaquaval","qwilfish-hisui":"overqwil","ralts":"kirlia","rattata":"raticate","rattata-alola":"raticate-alola","rellor":"rabsca","remoraid":"octillery","rhydon":"rhyperior","rhyhorn":"rhydon","riolu":"lucario","roggenrola":"boldore","rolycoly":"carkol","rookidee":"corvisquire","roselia":"roserade","salandit":"salazzle","sandile":"krokorok","sandshrew":"sandslash","sandshrew-alola":"sandslash-alola","sandygast":"palossand","scraggy":"scrafty","seadra":"kingdra","sealeo":"walrein","seedot":"nuzleaf","seel":"dewgong","sentret":"furret","servine":"serperior","sewaddle":"swadloon","shelgon":"salamence","shellder":"cloyster","shellos":"gastrodon","shieldon":"bastiodon","shinx":"luxio","shinysprite":"assets/special/eternal-floette.png","shroodle":"grafaiai","shroomish":"breloom","shuppet":"banette","silcoon":"beautifly","silicobra":"sandaconda","sinistea":"polteageist","sinnoh":"sinnoh myth crunch team","sizzlipede":"centiskorch","skiploom":"jumpluff","skitty":"delcatty","skorupi":"drapion","skwovet":"greedent","slakoth":"vigoroth","sliggoo":"goodra","sliggoo-hisui":"goodra-hisui","slugma":"magcargo","smoliv":"dolliv","smoochum":"jynx","sneasel":"weavile","sneasel-hisui":"sneasler","snivy":"servine","snom":"frosmoth","snover":"abomasnow","snubbull":"granbull","solosis":"duosion","spearow":"fearow","spheal":"sealeo","spinarak":"ariados","spoink":"grumpig","sprigatito":"floragato","sprite":"assets/special/eternal-floette.png","squirtle":"wartortle","stantler":"wyrdeer","staravia":"staraptor","starly":"staravia","staryu":"starmie","steenee":"tsareena","stufful":"bewear","stunky":"skuntank","sunkern":"sunflora","surskit":"masquerain","swablu":"altaria","swadloon":"leavanny","swinub":"piloswine","tadbulb":"bellibolt","taillow":"swellow","tangela":"tangrowth","tarountula":"spidops","teddiursa":"ursaring","tentacool":"tentacruel","tepig":"pignite","timburr":"gurdurr","tinkatink":"tinkatuff","tinkatuff":"tinkaton","tirtouga":"carracosta","toedscool":"toedscruel","togepi":"togetic","togetic":"togekiss","torchic":"combusken","totodile":"croconaw","tranquill":"unfezant","trapinch":"vibrava","treecko":"grovyle","trubbish":"garbodor","trumbeak":"toucannon","turtwig":"grotle","tympole":"palpitoad","tynamo":"eelektrik","type-null":"silvally","tyrunt":"tyrantrum","unova":"unova subway incident team","ursaring":"ursaluna","vanillish":"vanilluxe","vanillite":"vanillish","varoom":"revavroom","venipede":"whirlipede","venonat":"venomoth","vibrava":"flygon","vigoroth":"slaking","voltorb":"electrode","voltorb-hisui":"electrode-hisui","vullaby":"mandibuzz","vulpix":"ninetales","vulpix-alola":"ninetales-alola","wailmer":"wailord","wartortle":"blastoise","wattrel":"kilowattrel","weedle":"kakuna","weepinbell":"victreebel","whirlipede":"scolipede","whismur":"loudred","wiglett":"wugtrio","wimpod":"golisopod","wingull":"pelipper","woobat":"swoobat","wooloo":"dubwool","wooper":"quagsire","wooper-paldea":"clodsire","wynaut":"wobbuffet","yamask":"cofagrigus","yamask-galar":"runerigus","yamper":"boltund","yanma":"yanmega","yungoos":"gumshoos","zigzagoon":"linoone","zigzagoon-galar":"linoone-galar","zorua":"zoroark","zorua-hisui":"zoroark-hisui","zubat":"golbat","zweilous":"hydreigon"},"splitEvolutions":{"applin":["flapple","appletun","dipplin"],"basculin-white-striped":["basculegion"],"bergmite":["avalugg","avalugg-hisui"],"burmy":["wormadam-plant","wormadam-sandy","wormadam-trash","mothim"],"charcadet":["armarouge","ceruledge"],"clamperl":["huntail","gorebyss"],"cosmoem":["solgaleo","lunala"],"cubone":["marowak","marowak-alola"],"dartrix":["decidueye","decidueye-hisui"],"dewott":["samurott","samurott-hisui"],"dunsparce":["dudunsparce"],"eevee":["vaporeon","jolteon","flareon","espeon","umbreon","leafeon","glaceon","sylveon"],"espurr":["meowstic-male","meowstic-female"],"exeggcute":["exeggutor","exeggutor-alola"],"gloom":["vileplume","bellossom"],"goomy":["sliggoo","sliggoo-hisui"],"kirlia":["gardevoir","gallade"],"koffing":["weezing","weezing-galar"],"kubfu":["urshifu-single-strike","urshifu-rapid-strike"],"mime-jr":["mr-mime","mr-mime-galar"],"nincada":["ninjask","shedinja"],"petilil":["lilligant","lilligant-hisui"],"pichu-spiky-eared":["pikachu"],"poliwhirl":["poliwrath","politoed"],"quilava":["typhlosion","typhlosion-hisui"],"rockruff":["lycanroc-midday","lycanroc-midnight","lycanroc-dusk"],"rufflet":["braviary","braviary-hisui"],"scyther":["scizor","kleavor"],"slowpoke":["slowbro","slowking"],"slowpoke-galar":["slowbro-galar","slowking-galar"],"snorunt":["glalie","froslass"],"tandemaus":["maushold"],"toxel":["toxtricity-amped","toxtricity-low-key"],"tyrogue":["hitmonlee","hitmonchan","hitmontop"],"wurmple":["silcoon","cascoon"]},"formUpgrades":{"zygarde-10":["zygarde-50"],"zygarde-50":["zygarde-complete"]},"specialQuestEvolutions":{"rainbowFeather":{"enabledBy":"item:rainbow_feather","notTriggeredBy":["evolution_stone"],"paths":{"vaporeon":{"target":"suicune","bonus":300},"flareon":{"target":"entei","bonus":300},"jolteon":{"target":"raikou","bonus":300}}},"dnaSplicersKyurem":{"trigger":"kyurem + reshiram OR kyurem + zekrom","notTriggeredBy":["evolution_stone"],"paths":{"kyurem+reshiram":{"target":"kyurem-white","displayName":"White Kyurem","bonus":300,"opensTeamSlot":true},"kyurem+zekrom":{"target":"kyurem-black","displayName":"Black Kyurem","bonus":300,"opensTeamSlot":true}}},"kinglyFusion":{"trigger":"calyrex + glastrier OR calyrex + spectrier","notTriggeredBy":["evolution_stone"],"paths":{"calyrex+glastrier":{"target":"calyrex-ice","displayName":"Ice Rider Calyrex","bonus":300,"opensTeamSlot":true},"calyrex+spectrier":{"target":"calyrex-shadow","displayName":"Shadow Rider Calyrex","bonus":300,"opensTeamSlot":true}}},"ancientOrbPrimals":{"trigger":"grunt defeated + groudon OR kyogre","notTriggeredBy":["evolution_stone","mega_evolution"],"oneChoiceOnly":true,"paths":{"groudon":{"target":"groudon-primal","displayName":"Primal Groudon","bonus":300},"kyogre":{"target":"kyogre-primal","displayName":"Primal Kyogre","bonus":300}}},"rotomPokedex":{"trigger":"item:pokedex + rotom","notTriggeredBy":["evolution_stone"],"paths":{"rotom":{"target":"rotom-pokedex","displayName":"Rotom Pokédex","bonus":300,"pokedexReusable":true}}},"arceusPlatePower":{"trigger":"item:elemental_plate + arceus","notTriggeredBy":["evolution_stone"],"paths":{"arceus":{"target":"arceus-{selectedPlateType}","bonus":300}}}},"megaEvolutions":{"abomasnow":[{"name":"Abomasnow Mega","target":"abomasnow-mega","source":"pokeapi"}],"absol":[{"name":"Absol Mega","target":"absol-mega","source":"pokeapi"},{"name":"Mega Absol Z","target":null,"types":["dark"],"asset":"assets/custom-mega/mega-absol-z.png","shinyAsset":"assets/custom-mega/shiny/mega-absol-z.png","source":"custom-local"}],"aerodactyl":[{"name":"Aerodactyl Mega","target":"aerodactyl-mega","source":"pokeapi"}],"aggron":[{"name":"Aggron Mega","target":"aggron-mega","source":"pokeapi"}],"alakazam":[{"name":"Alakazam Mega","target":"alakazam-mega","source":"pokeapi"}],"altaria":[{"name":"Altaria Mega","target":"altaria-mega","source":"pokeapi"}],"ampharos":[{"name":"Ampharos Mega","target":"ampharos-mega","source":"pokeapi"}],"audino":[{"name":"Audino Mega","target":"audino-mega","source":"pokeapi"}],"banette":[{"name":"Banette Mega","target":"banette-mega","source":"pokeapi"}],"barbaracle":[{"name":"Mega Barbaracle","target":null,"types":["rock","water"],"asset":"assets/custom-mega/mega-barbaracle.png","shinyAsset":"assets/custom-mega/shiny/mega-barbaracle.png","source":"custom-local"}],"baxcalibur":[{"name":"Mega Baxcalibur","target":null,"types":["dragon","ice"],"asset":"assets/custom-mega/mega-baxcalibur.png","shinyAsset":"assets/custom-mega/shiny/mega-baxcalibur.png","source":"custom-local"}],"beedrill":[{"name":"Beedrill Mega","target":"beedrill-mega","source":"pokeapi"}],"blastoise":[{"name":"Blastoise Mega","target":"blastoise-mega","source":"pokeapi"}],"blaziken":[{"name":"Blaziken Mega","target":"blaziken-mega","source":"pokeapi"}],"camerupt":[{"name":"Camerupt Mega","target":"camerupt-mega","source":"pokeapi"}],"chandelure":[{"name":"Mega Chandelure","target":null,"types":["ghost","fire"],"asset":"assets/custom-mega/mega-chandelure.png","shinyAsset":"assets/custom-mega/shiny/mega-chandelure.png","source":"custom-local"}],"charizard":[{"name":"Charizard Mega X","target":"charizard-mega-x","source":"pokeapi"},{"name":"Charizard Mega Y","target":"charizard-mega-y","source":"pokeapi"}],"chesnaught":[{"name":"Mega Chesnaught","target":null,"types":["grass","fighting"],"asset":"assets/custom-mega/mega-chesnaught.png","shinyAsset":"assets/custom-mega/shiny/mega-chesnaught.png","source":"custom-local"}],"chimecho":[{"name":"Mega Chimecho","target":null,"types":["psychic"],"asset":"assets/custom-mega/mega-chimecho.png","shinyAsset":"assets/custom-mega/shiny/mega-chimecho.png","source":"custom-local"}],"clefable":[{"name":"Mega Clefable","target":null,"types":["fairy"],"asset":"assets/custom-mega/mega-clefable.png","shinyAsset":"assets/custom-mega/shiny/mega-clefable.png","source":"custom-local"}],"crabominable":[{"name":"Mega Crabominable","target":null,"types":["fighting","ice"],"asset":"assets/custom-mega/mega-crabominable.png","shinyAsset":"assets/custom-mega/shiny/mega-crabominable.png","source":"custom-local"}],"darkrai":[{"name":"Mega Darkrai","target":null,"types":["dark"],"asset":"assets/custom-mega/mega-darkrai.png","shinyAsset":"assets/custom-mega/shiny/mega-darkrai.png","source":"custom-local"}],"delphox":[{"name":"Mega Delphox","target":null,"types":["fire","psychic"],"asset":"assets/custom-mega/mega-delphox.png","shinyAsset":"assets/custom-mega/shiny/mega-delphox.png","source":"custom-local"}],"diancie":[{"name":"Diancie Mega","target":"diancie-mega","source":"pokeapi"}],"dragalge":[{"name":"Mega Dragalge","target":null,"types":["poison","dragon"],"asset":"assets/custom-mega/mega-dragalge.png","shinyAsset":"assets/custom-mega/shiny/mega-dragalge.png","source":"custom-local"}],"dragonite":[{"name":"Mega Dragonite","target":null,"types":["dragon","flying"],"asset":"assets/custom-mega/mega-dragonite.png","shinyAsset":"assets/custom-mega/shiny/mega-dragonite.png","source":"custom-local"}],"drampa":[{"name":"Mega Drampa","target":null,"types":["normal","dragon"],"asset":"assets/custom-mega/mega-drampa.png","shinyAsset":"assets/custom-mega/shiny/mega-drampa.png","source":"custom-local"}],"eelektross":[{"name":"Mega Eelektross","target":null,"types":["electric"],"asset":"assets/custom-mega/mega-eelektross.png","shinyAsset":"assets/custom-mega/shiny/mega-eelektross.png","source":"custom-local"}],"emboar":[{"name":"Mega Emboar","target":null,"types":["fire","fighting"],"asset":"assets/custom-mega/mega-emboar.png","shinyAsset":"assets/custom-mega/shiny/mega-emboar.png","source":"custom-local"}],"excadrill":[{"name":"Mega Excadrill","target":null,"types":["ground","steel"],"asset":"assets/custom-mega/mega-excadrill.png","shinyAsset":"assets/custom-mega/shiny/mega-excadrill.png","source":"custom-local"}],"falinks":[{"name":"Mega Falinks","target":null,"types":["fighting"],"asset":"assets/custom-mega/mega-falinks.png","shinyAsset":"assets/custom-mega/shiny/mega-falinks.png","source":"custom-local"}],"feraligatr":[{"name":"Mega Feraligatr","target":null,"types":["water","dragon"],"asset":"assets/custom-mega/mega-feraligatr.png","shinyAsset":"assets/custom-mega/shiny/mega-feraligatr.png","source":"custom-local"}],"floette":[{"name":"Mega Floette","target":null,"types":["fairy"],"asset":"assets/custom-mega/mega-floette.png","shinyAsset":"assets/custom-mega/shiny/mega-floette.png","source":"custom-local"}],"froslass":[{"name":"Mega Froslass","target":null,"types":["ice","ghost"],"asset":"assets/custom-mega/mega-froslass.png","shinyAsset":"assets/custom-mega/shiny/mega-froslass.png","source":"custom-local"}],"gallade":[{"name":"Gallade Mega","target":"gallade-mega","source":"pokeapi"}],"garchomp":[{"name":"Garchomp Mega","target":"garchomp-mega","source":"pokeapi"},{"name":"Mega Garchomp Z","target":null,"types":["dragon"],"asset":"assets/custom-mega/mega-garchomp-z.png","shinyAsset":"assets/custom-mega/shiny/mega-garchomp-z.png","source":"custom-local"}],"gardevoir":[{"name":"Gardevoir Mega","target":"gardevoir-mega","source":"pokeapi"}],"gengar":[{"name":"Gengar Mega","target":"gengar-mega","source":"pokeapi"}],"glalie":[{"name":"Glalie Mega","target":"glalie-mega","source":"pokeapi"}],"glimmora":[{"name":"Mega Glimmora","target":null,"types":["rock","poison"],"asset":"assets/custom-mega/mega-glimmora.png","shinyAsset":"assets/custom-mega/shiny/mega-glimmora.png","source":"custom-local"}],"golisopod":[{"name":"Mega Golisopod","target":null,"types":["bug","water"],"asset":"assets/custom-mega/mega-golisopod.png","shinyAsset":"assets/custom-mega/shiny/mega-golisopod.png","source":"custom-local"}],"golurk":[{"name":"Mega Golurk","target":null,"types":["ground","ghost"],"asset":"assets/custom-mega/mega-golurk.png","shinyAsset":"assets/custom-mega/shiny/mega-golurk.png","source":"custom-local"}],"greninja":[{"name":"Mega Greninja","target":null,"types":["water","dark"],"asset":"assets/custom-mega/mega-greninja.png","shinyAsset":"assets/custom-mega/shiny/mega-greninja.png","source":"custom-local"}],"gyarados":[{"name":"Gyarados Mega","target":"gyarados-mega","source":"pokeapi"}],"hawlucha":[{"name":"Mega Hawlucha","target":null,"types":["fighting","flying"],"asset":"assets/custom-mega/mega-hawlucha.png","shinyAsset":"assets/custom-mega/shiny/mega-hawlucha.png","source":"custom-local"}],"heatran":[{"name":"Mega Heatran","target":null,"types":["fire","steel"],"asset":"assets/custom-mega/mega-heatran.png","shinyAsset":"assets/custom-mega/shiny/mega-heatran.png","source":"custom-local"}],"heracross":[{"name":"Heracross Mega","target":"heracross-mega","source":"pokeapi"}],"houndoom":[{"name":"Houndoom Mega","target":"houndoom-mega","source":"pokeapi"}],"kangaskhan":[{"name":"Kangaskhan Mega","target":"kangaskhan-mega","source":"pokeapi"}],"latias":[{"name":"Latias Mega","target":"latias-mega","source":"pokeapi"}],"latios":[{"name":"Latios Mega","target":"latios-mega","source":"pokeapi"}],"lopunny":[{"name":"Lopunny Mega","target":"lopunny-mega","source":"pokeapi"}],"lucario":[{"name":"Lucario Mega","target":"lucario-mega","source":"pokeapi"},{"name":"Mega Lucario Z","target":null,"types":["fighting","steel"],"asset":"assets/custom-mega/mega-lucario-z.png","shinyAsset":"assets/custom-mega/shiny/mega-lucario-z.png","source":"custom-local"}],"magearna":[{"name":"Mega Magearna","target":null,"types":["steel","fairy"],"asset":"assets/custom-mega/mega-magearna.png","shinyAsset":"assets/custom-mega/shiny/mega-magearna.png","source":"custom-local"},{"name":"Mega Magearna Original","target":null,"types":["steel","fairy"],"asset":"assets/custom-mega/mega-magearna-original.png","shinyAsset":"assets/custom-mega/shiny/mega-magearna-original.png","source":"custom-local"}],"malamar":[{"name":"Mega Malamar","target":null,"types":["dark","psychic"],"asset":"assets/custom-mega/mega-malamar.png","shinyAsset":"assets/custom-mega/shiny/mega-malamar.png","source":"custom-local"}],"manectric":[{"name":"Manectric Mega","target":"manectric-mega","source":"pokeapi"}],"mawile":[{"name":"Mawile Mega","target":"mawile-mega","source":"pokeapi"}],"medicham":[{"name":"Medicham Mega","target":"medicham-mega","source":"pokeapi"}],"meganium":[{"name":"Mega Meganium","target":null,"types":["grass","fairy"],"asset":"assets/custom-mega/mega-meganium.png","shinyAsset":"assets/custom-mega/shiny/mega-meganium.png","source":"custom-local"}],"meowstic":[{"name":"Mega Meowstic","target":null,"types":["psychic"],"asset":"assets/custom-mega/mega-meowstic.png","shinyAsset":"assets/custom-mega/shiny/mega-meowstic.png","source":"custom-local"}],"metagross":[{"name":"Metagross Mega","target":"metagross-mega","source":"pokeapi"}],"mewtwo":[{"name":"Mewtwo Mega X","target":"mewtwo-mega-x","source":"pokeapi"},{"name":"Mewtwo Mega Y","target":"mewtwo-mega-y","source":"pokeapi"}],"pidgeot":[{"name":"Pidgeot Mega","target":"pidgeot-mega","source":"pokeapi"}],"pinsir":[{"name":"Pinsir Mega","target":"pinsir-mega","source":"pokeapi"}],"pyroar":[{"name":"Mega Pyroar","target":null,"types":["fire","normal"],"asset":"assets/custom-mega/mega-pyroar.png","shinyAsset":"assets/custom-mega/shiny/mega-pyroar.png","source":"custom-local"}],"raichu":[{"name":"Mega Raichu X","target":null,"types":["electric"],"asset":"assets/custom-mega/mega-raichu-x.png","shinyAsset":"assets/custom-mega/shiny/mega-raichu-x.png","source":"custom-local"},{"name":"Mega Raichu Y","target":null,"types":["electric"],"asset":"assets/custom-mega/mega-raichu-y.png","shinyAsset":"assets/custom-mega/shiny/mega-raichu-y.png","source":"custom-local"}],"rayquaza":[{"name":"Rayquaza Mega","target":"rayquaza-mega","source":"pokeapi"}],"sableye":[{"name":"Sableye Mega","target":"sableye-mega","source":"pokeapi"}],"salamence":[{"name":"Salamence Mega","target":"salamence-mega","source":"pokeapi"}],"sceptile":[{"name":"Sceptile Mega","target":"sceptile-mega","source":"pokeapi"}],"scizor":[{"name":"Scizor Mega","target":"scizor-mega","source":"pokeapi"}],"scolipede":[{"name":"Mega Scolipede","target":null,"types":["bug","poison"],"asset":"assets/custom-mega/mega-scolipede.png","shinyAsset":"assets/custom-mega/shiny/mega-scolipede.png","source":"custom-local"}],"scovillain":[{"name":"Mega Scovillain","target":null,"types":["grass","fire"],"asset":"assets/custom-mega/mega-scovillain.png","shinyAsset":"assets/custom-mega/shiny/mega-scovillain.png","source":"custom-local"}],"scrafty":[{"name":"Mega Scrafty","target":null,"types":["dark","fighting"],"asset":"assets/custom-mega/mega-scrafty.png","shinyAsset":"assets/custom-mega/shiny/mega-scrafty.png","source":"custom-local"}],"sharpedo":[{"name":"Sharpedo Mega","target":"sharpedo-mega","source":"pokeapi"}],"skarmory":[{"name":"Mega Skarmory","target":null,"types":["steel","flying"],"asset":"assets/custom-mega/mega-skarmory.png","shinyAsset":"assets/custom-mega/shiny/mega-skarmory.png","source":"custom-local"}],"slowbro":[{"name":"Slowbro Mega","target":"slowbro-mega","source":"pokeapi"}],"staraptor":[{"name":"Mega Staraptor","target":null,"types":["normal","flying"],"asset":"assets/custom-mega/mega-staraptor.png","shinyAsset":"assets/custom-mega/shiny/mega-staraptor.png","source":"custom-local"}],"starmie":[{"name":"Mega Starmie","target":null,"types":["water","psychic"],"asset":"assets/custom-mega/mega-starmie.png","shinyAsset":"assets/custom-mega/shiny/mega-starmie.png","source":"custom-local"}],"steelix":[{"name":"Steelix Mega","target":"steelix-mega","source":"pokeapi"}],"swampert":[{"name":"Swampert Mega","target":"swampert-mega","source":"pokeapi"}],"tatsugiri":[{"name":"Mega Tatsugiri","target":null,"types":["dragon","water"],"asset":"assets/custom-mega/mega-tatsugiri.png","shinyAsset":"assets/custom-mega/shiny/mega-tatsugiri.png","source":"custom-local"}],"tyranitar":[{"name":"Tyranitar Mega","target":"tyranitar-mega","source":"pokeapi"}],"venusaur":[{"name":"Venusaur Mega","target":"venusaur-mega","source":"pokeapi"}],"victreebel":[{"name":"Mega Victreebel","target":null,"types":["grass","poison"],"asset":"assets/custom-mega/mega-victreebel.png","shinyAsset":"assets/custom-mega/shiny/mega-victreebel.png","source":"custom-local"}],"zeraora":[{"name":"Mega Zeraora","target":null,"types":["electric"],"asset":"assets/custom-mega/mega-zeraora.png","shinyAsset":"assets/custom-mega/shiny/mega-zeraora.png","source":"custom-local"}],"zygarde":[{"name":"Mega Zygarde","target":null,"types":["dragon","ground"],"asset":"assets/custom-mega/mega-zygarde.png","shinyAsset":"assets/custom-mega/shiny/mega-zygarde.png","source":"custom-local"}],"zygarde-complete":[{"name":"Mega Zygarde Complete","target":null,"types":["dragon","ground"],"asset":"assets/custom-mega/mega-zygarde-complete.png","shinyAsset":"assets/custom-mega/shiny/mega-zygarde-complete.png","source":"custom-local"}]},"audit":{"method":"Manual audit pass because PokeAPI network access was unavailable in the sandbox. Checked against all generational families, special split cases, and regional form evolution cases.","majorFixesAdded":["Alolan regional evolutions","Galarian regional evolutions","Hisuian regional evolutions","Paldean Wooper and Gimmighoul forms","Gen 9 DLC evolutions: Dipplin -> Hydrapple, Duraludon -> Archaludon, Poltchageist -> Sinistcha","Poipole -> Naganadel","Corrected regional-only evolutions: base Farfetch'd, Corsola, Qwilfish, and Basculin no longer evolve into regional-only evolutions","Added split choices for Petilil, Rufflet, Bergmite, Dartrix, Quilava, Dewott, Scyther, Goomy, Mime Jr., Exeggcute, Cubone, Koffing, Espurr, Burmy"],"remainingDesignNotes":["Some split choices are region-context choices made available to the player for fun, even where official games require being in a specific region.","Evolution Stone uses only normalEvolutions, splitEvolutions and formUpgrades.","Mega evolutions and special quest transformations remain intentionally excluded from Evolution Stone behavior."],"v1_1_1_patch":["Added missing Tyrunt -> Tyrantrum.","Added missing Amaura -> Aurorus.","Added Pokémon endpoint aliases so species-form names like Giratina resolve to valid PokéAPI Pokémon endpoints."]}};
const EVOLUTION_MAP={
 // Kanto
 bulbasaur:"ivysaur",ivysaur:"venusaur",charmander:"charmeleon",charmeleon:"charizard",squirtle:"wartortle",wartortle:"blastoise",
 caterpie:"metapod",metapod:"butterfree",weedle:"kakuna",kakuna:"beedrill",pidgey:"pidgeotto",pidgeotto:"pidgeot",rattata:"raticate",
 spearow:"fearow",ekans:"arbok",pichu:"pikachu",pikachu:"raichu",sandshrew:"sandslash",nidoran_f:"nidorina",nidorina:"nidoqueen",
 nidoran_m:"nidorino",nidorino:"nidoking",cleffa:"clefairy",clefairy:"clefable",vulpix:"ninetales",igglybuff:"jigglypuff",jigglypuff:"wigglytuff",
 zubat:"golbat",golbat:"crobat",oddish:"gloom",gloom:"vileplume",paras:"parasect",venonat:"venomoth",diglett:"dugtrio",
 meowth:"persian",psyduck:"golduck",mankey:"primeape",growlithe:"arcanine",poliwag:"poliwhirl",poliwhirl:"poliwrath",
 abra:"kadabra",kadabra:"alakazam",machop:"machoke",machoke:"machamp",bellsprout:"weepinbell",weepinbell:"victreebel",
 tentacool:"tentacruel",geodude:"graveler",graveler:"golem",ponyta:"rapidash",slowpoke:"slowbro",magnemite:"magneton",magneton:"magnezone",
 doduo:"dodrio",seel:"dewgong",grimer:"muk",shellder:"cloyster",gastly:"haunter",haunter:"gengar",onix:"steelix",
 drowzee:"hypno",krabby:"kingler",voltorb:"electrode",exeggcute:"exeggutor",cubone:"marowak",tyrogue:"hitmonlee",
 lickitung:"lickilicky",koffing:"weezing",rhyhorn:"rhydon",rhydon:"rhyperior",happiny:"chansey",chansey:"blissey",tangela:"tangrowth",
 horsea:"seadra",seadra:"kingdra",goldeen:"seaking",staryu:"starmie",mime_jr:"mr-mime",scyther:"scizor",smoochum:"jynx",
 elekid:"electabuzz",electabuzz:"electivire",magby:"magmar",magmar:"magmortar",magikarp:"gyarados",eevee:"vaporeon",
 porygon:"porygon2",porygon2:"porygon-z",cosmog:"cosmoem",omanyte:"omastar",kabuto:"kabutops",munchlax:"snorlax",dratini:"dragonair",dragonair:"dragonite",

 // Johto
 chikorita:"bayleef",bayleef:"meganium",cyndaquil:"quilava",quilava:"typhlosion",totodile:"croconaw",croconaw:"feraligatr",
 sentret:"furret",hoothoot:"noctowl",ledyba:"ledian",spinarak:"ariados",chinchou:"lanturn",togepi:"togetic",togetic:"togekiss",
 natu:"xatu",mareep:"flaaffy",flaaffy:"ampharos",azurill:"marill",marill:"azumarill",bonsly:"sudowoodo",hoppip:"skiploom",skiploom:"jumpluff",
 aipom:"ambipom",sunkern:"sunflora",yanma:"yanmega",wooper:"quagsire",murkrow:"honchkrow",misdreavus:"mismagius",
 wynaut:"wobbuffet",pineco:"forretress",gligar:"gliscor",snubbull:"granbull",qwilfish:"overqwil",shuckle:"shuckle",
 sneasel:"weavile",teddiursa:"ursaring",ursaring:"ursaluna",slugma:"magcargo",swinub:"piloswine",piloswine:"mamoswine",
 remoraid:"octillery",houndour:"houndoom",phanpy:"donphan",larvitar:"pupitar",pupitar:"tyranitar",

 // Hoenn
 treecko:"grovyle",grovyle:"sceptile",torchic:"combusken",combusken:"blaziken",mudkip:"marshtomp",marshtomp:"swampert",
 poochyena:"mightyena",zigzagoon:"linoone",wurmple:"silcoon",silcoon:"beautifly",cascoon:"dustox",lotad:"lombre",lombre:"ludicolo",
 seedot:"nuzleaf",nuzleaf:"shiftry",taillow:"swellow",wingull:"pelipper",ralts:"kirlia",kirlia:"gardevoir",
 surskit:"masquerain",shroomish:"breloom",slakoth:"vigoroth",vigoroth:"slaking",nincada:"ninjask",whismur:"loudred",loudred:"exploud",
 makuhita:"hariyama",nosepass:"probopass",skitty:"delcatty",aron:"lairon",lairon:"aggron",meditite:"medicham",
 electrike:"manectric",budew:"roselia",roselia:"roserade",gulpin:"swalot",carvanha:"sharpedo",wailmer:"wailord",
 numel:"camerupt",spoink:"grumpig",trapinch:"vibrava",vibrava:"flygon",cacnea:"cacturne",swablu:"altaria",
 barboach:"whiscash",corphish:"crawdaunt",baltoy:"claydol",lileep:"cradily",anorith:"armaldo",feebas:"milotic",
 shuppet:"banette",duskull:"dusclops",dusclops:"dusknoir",chimecho:"chimecho",snorunt:"glalie",spheal:"sealeo",sealeo:"walrein",
 clamperl:"huntail",bagon:"shelgon",shelgon:"salamence",beldum:"metang",metang:"metagross",

 // Sinnoh onward, common lines
 turtwig:"grotle",grotle:"torterra",chimchar:"monferno",monferno:"infernape",piplup:"prinplup",prinplup:"empoleon",
 starly:"staravia",staravia:"staraptor",bidoof:"bibarel",kricketot:"kricketune",shinx:"luxio",luxio:"luxray",
 cranidos:"rampardos",shieldon:"bastiodon",burmy:"wormadam",buizel:"floatzel",cherubi:"cherrim",shellos:"gastrodon",
 drifloon:"drifblim",buneary:"lopunny",glameow:"purugly",stunky:"skuntank",bronzor:"bronzong",gible:"gabite",gabite:"garchomp",
 riolu:"lucario",hippopotas:"hippowdon",skorupi:"drapion",croagunk:"toxicroak",finneon:"lumineon",mantyke:"mantine",
 snover:"abomasnow",snivy:"servine",servine:"serperior",tepig:"pignite",pignite:"emboar",oshawott:"dewott",dewott:"samurott",
 patrat:"watchog",lillipup:"herdier",herdier:"stoutland",purrloin:"liepard",pansage:"simisage",pansear:"simisear",panpour:"simipour",
 munna:"musharna",pidove:"tranquill",tranquill:"unfezant",blitzle:"zebstrika",roggenrola:"boldore",boldore:"gigalith",
 woobat:"swoobat",drilbur:"excadrill",timburr:"gurdurr",gurdurr:"conkeldurr",tympole:"palpitoad",palpitoad:"seismitoad",
 sewaddle:"swadloon",swadloon:"leavanny",venipede:"whirlipede",whirlipede:"scolipede",cottonee:"whimsicott",petilil:"lilligant",
 sandile:"krokorok",krokorok:"krookodile",darumaka:"darmanitan",dwebble:"crustle",scraggy:"scrafty",yamask:"cofagrigus",
 tirtouga:"carracosta",archen:"archeops",trubbish:"garbodor",zorua:"zoroark",minccino:"cinccino",gothita:"gothorita",gothorita:"gothitelle",
 solosis:"duosion",duosion:"reuniclus",ducklett:"swanna",vanillite:"vanillish",vanillish:"vanilluxe",deerling:"sawsbuck",
 karrablast:"escavalier",foongus:"amoonguss",frillish:"jellicent",joltik:"galvantula",ferroseed:"ferrothorn",klink:"klang",klang:"klinklang",
 tynamo:"eelektrik",eelektrik:"eelektross",elgyem:"beheeyem",litwick:"lampent",lampent:"chandelure",axew:"fraxure",fraxure:"haxorus",
 cubchoo:"beartic",mienfoo:"mienshao",golett:"golurk",pawniard:"bisharp",bisharp:"kingambit",rufflet:"braviary",vullaby:"mandibuzz",
 deino:"zweilous",zweilous:"hydreigon",larvesta:"volcarona"
};
/* ===== v13 Special Pokémon + Item Registry ===== */
const ASSET_SPECIAL="assets/special/";
const ASSET_ITEMS="assets/items/";
const ASSET_GMAX="assets/gigantamax/";
const ASSET_MEGA_AZ="assets/mega-az/";
const imgIcon=(src,alt)=>`<img src="${src}" alt="${alt||''}" style="width:34px;height:34px;object-fit:contain;image-rendering:pixelated">`;
const itemAsset=(file)=>ASSET_ITEMS+file;
const specialAsset=(file)=>ASSET_SPECIAL+file;
const gmaxAsset=(file)=>ASSET_GMAX+file;
const megaAzAsset=(file)=>ASSET_MEGA_AZ+file;
const STONE_ITEM_ASSETS=["SunStone.png","FireStone.png","LeafStone.png","LightningStone.png","WaterStone.png","IceStone.png","DawnStone.png","DarkStone.png","MoonStone.png","ShinyStone.png"].map(itemAsset);
const SPECIAL_POKEMON_ODDS=512;
const MISSINGNO_ODDS=1024;
const ITEM_DRAFT_LABEL="Guaranteed through selected item";
const SPECIAL_POKEMON_REGISTRY={
 "cosplay-pikachu-belle":{displayName:"Cosplay Pikachu Belle",baseName:"pikachu",types:["electric"],bst:320,bonus:100,sprite:"Pikachu_Belle.png",tags:["special","anime","pikachu","cosplay"]},
 "cosplay-pikachu-libre":{displayName:"Cosplay Pikachu Libre",baseName:"pikachu",types:["electric"],bst:320,bonus:100,sprite:"Pikachu_Libre.png",tags:["special","anime","pikachu","cosplay"]},
 "cosplay-pikachu-phd":{displayName:"Cosplay Pikachu PhD",baseName:"pikachu",types:["electric"],bst:320,bonus:100,sprite:"Pikachu_PhD.png",tags:["special","anime","pikachu","cosplay"]},
 "cosplay-pikachu-pop-star":{displayName:"Cosplay Pikachu Pop Star",baseName:"pikachu",types:["electric"],bst:320,bonus:100,sprite:"Pikachu_Pop_Star.png",tags:["special","anime","pikachu","cosplay"]},
 "cosplay-pikachu-rock-star":{displayName:"Cosplay Pikachu Rock Star",baseName:"pikachu",types:["electric"],bst:320,bonus:100,sprite:"Pikachu_Rock_Star.png",tags:["special","anime","pikachu","cosplay"]},
 "pikachu-original-cap":{displayName:"Pikachu Original Cap",baseName:"pikachu",types:["electric"],bst:320,bonus:100,sprite:"Pikachu_Original_Cap.png",tags:["special","anime","pikachu","cap"]},
 "flying-pikachu":{displayName:"Flying Pikachu",baseName:"pikachu",types:["electric","flying"],bst:320,bonus:100,sprite:"FlyingPikachu.png",tags:["special","anime","pikachu"]},
 "surfing-pikachu":{displayName:"Surfing Pikachu",baseName:"pikachu",types:["electric","water"],bst:320,bonus:100,sprite:"SurfingPikachu.png",tags:["special","anime","pikachu"]},
 "partner-pikachu":{displayName:"Partner Pikachu",baseName:"pikachu",types:["electric"],bst:430,bonus:100,sprite:"Pikachu_Partner.png",tags:["special","partner","pikachu"]},
 "partner-eevee":{displayName:"Partner Eevee",baseName:"eevee",types:["normal"],bst:435,bonus:100,sprite:"Eevee_Partner.png",tags:["special","partner"]},
 "sunglasses-squirtle":{displayName:"Sunglasses Squirtle",baseName:"squirtle",types:["water","dark"],bst:314,bonus:100,sprite:"squirtle-sunglasses.png",tags:["special","anime"]},
 "shadow-lugia":{displayName:"Shadow Lugia",baseName:"lugia",types:["psychic","flying"],bst:680,bonus:300,sprite:"Lugia-Shadow.png",tags:["special","shadow","anime","legendary"]},
 "shadow-mewtwo":{displayName:"Shadow Mewtwo",baseName:"mewtwo",types:["psychic"],bst:680,bonus:300,sprite:"Shadow_Mewtwo.png",tags:["special","shadow","anime","mewtwo","legendary"],megaForms:[{name:"Mega Shadow Mewtwo X",scoreBst:780,types:["psychic","fighting"],sprite:"Mega_Shadow_Mewtwo_X.png",source:"shadow"}]},
 "armored-mewtwo":{displayName:"Armored Mewtwo",baseName:"mewtwo",types:["psychic"],bst:680,bonus:100,sprite:"mewtwo-armored.png",shinySprite:"mewtwo-armored_shiny.png",tags:["special","anime","mewtwo","legendary"]},
 "crystal-onix":{displayName:"Crystal Onix",baseName:"onix",types:["rock","ground"],bst:385,bonus:300,sprite:"CrystalOnix.webp",tags:["special","crystal","anime"],evolvesTo:"crystal-steelix"},
 "crystal-steelix":{displayName:"Crystal Steelix",baseName:"steelix",types:["steel","ground"],bst:510,bonus:300,sprite:"CrystalSteelix.webp",tags:["special","crystal","anime"],megaForms:[{name:"Mega Crystal Steelix",scoreBst:610,types:["steel","ground"],sprite:"MetgaCrystalSteelix.webp",source:"crystal"}]},
 "clone-pikachu":{displayName:"Clone Pikachu",baseName:"pikachu",types:["electric"],bst:320,bonus:100,sprite:"Clone_Pikachu.png",tags:["special","clone","anime","pikachu"]},
 "clone-venusaur":{displayName:"Clone Venusaur",baseName:"venusaur",types:["grass","poison"],bst:525,bonus:100,sprite:"Clone_Venusaur.png",tags:["special","clone","anime"]},
 "clone-charizard":{displayName:"Clone Charizard",baseName:"charizard",types:["fire","flying"],bst:534,bonus:100,sprite:"Clone_Charizard.png",tags:["special","clone","anime"]},
 "clone-blastoise":{displayName:"Clone Blastoise",baseName:"blastoise",types:["water"],bst:530,bonus:100,sprite:"Clone_Blastoise.png",tags:["special","clone","anime"]},
 "ash-greninja":{displayName:"Ash-Greninja",baseName:"greninja",types:["water","dark"],bst:640,bonus:300,sprite:"Greninja_Ash.png",tags:["special","anime","ashbond"]},
 "missingno":{displayName:"MissingNo.",baseName:"missingno",types:["normal"],bst:600,bonus:0,sprite:"MissingNo.png",tags:["special","glitch"]},
 "eternal-floette":{displayName:"Eternal Floette",baseName:"floette",types:["fairy"],bst:371,bonus:300,sprite:"220px-0670Floette-Eternal.png",tags:["special","event"]}
};
const SPECIAL_SPAWN_POOL=Object.keys(SPECIAL_POKEMON_REGISTRY).filter(k=>k!=="missingno"&&k!=="eternal-floette");
const ORIGIN_FORMS={dialga:{displayName:"Dialga Origin Forme",types:["steel","dragon"],bst:680,sprite:"Dialga_Origin.png"},palkia:{displayName:"Palkia Origin Forme",types:["water","dragon"],bst:680,sprite:"Palkia_Origin.png"},giratina:{displayName:"Giratina Origin Forme",types:["ghost","dragon"],bst:680,sprite:"Giratina_Origin.png"},"giratina-altered":{displayName:"Giratina Origin Forme",types:["ghost","dragon"],bst:680,sprite:"Giratina_Origin.png"}};
const GMAX_FORMS={venusaur:"200px-0003Venusaur-Gigantamax.png",charizard:"200px-0006Charizard-Gigantamax.png",blastoise:"200px-0009Blastoise-Gigantamax.png",butterfree:"200px-0012Butterfree-Gigantamax.png",pikachu:"200px-0025Pikachu-Gigantamax.png",meowth:"200px-0052Meowth-Gigantamax.png",machamp:"200px-0068Machamp-Gigantamax.png",gengar:"200px-0094Gengar-Gigantamax.png",kingler:"200px-0099Kingler-Gigantamax.png",lapras:"200px-0131Lapras-Gigantamax.png",eevee:"200px-0133Eevee-Gigantamax.png",snorlax:"200px-0143Snorlax-Gigantamax.png",garbodor:"200px-0569Garbodor-Gigantamax.png",melmetal:"200px-0809Melmetal-Gigantamax.png",rillaboom:"200px-0812Rillaboom-Gigantamax.png",cinderace:"200px-0815Cinderace-Gigantamax.png",inteleon:"200px-0818Inteleon-Gigantamax.png",corviknight:"200px-0823Corviknight-Gigantamax.png",orbeetle:"200px-0826Orbeetle-Gigantamax.png",drednaw:"200px-0834Drednaw-Gigantamax.png",coalossal:"200px-0839Coalossal-Gigantamax.png",flapple:"200px-0841Flapple-Gigantamax.png",sandaconda:"200px-0844Sandaconda-Gigantamax.png",toxtricity:"200px-0849Toxtricity-Gigantamax.png",centiskorch:"200px-0851Centiskorch-Gigantamax.png",hatterene:"200px-0858Hatterene-Gigantamax.png",grimmsnarl:"200px-0861Grimmsnarl-Gigantamax.png",alcremie:"200px-0869Alcremie-Gigantamax.png",copperajah:"200px-0879Copperajah-Gigantamax.png",duraludon:"200px-0884Duraludon-Gigantamax.png","urshifu-single-strike":"200px-0892Urshifu-Gigantamax_Single_Strike.png","urshifu-rapid-strike":"200px-0892Urshifu-Gigantamax_Rapid_Strike.png",urshifu:"200px-0892Urshifu-Gigantamax_Single_Strike.png"};
const FOSSIL_FAMILIES=new Set(["omanyte","omastar","kabuto","kabutops","aerodactyl","lileep","cradily","anorith","armaldo","cranidos","rampardos","shieldon","bastiodon","tirtouga","carracosta","archen","archeops","tyrunt","tyrantrum","amaura","aurorus","dracozolt","arctozolt","dracovish","arctovish"]);
const BABY_SET=new Set(["pichu","cleffa","igglybuff","togepi","tyrogue","smoochum","elekid","magby","azurill","wynaut","budew","chingling","bonsly","mime-jr","happiny","munchlax","riolu","mantyke","toxel"]);
const CAT_NAMES=new Set(["meowth","meowth-alola","meowth-galar","persian","persian-alola","perrserker","skitty","delcatty","glameow","purugly","purrloin","liepard","litten","torracat","incineroar","espurr","meowstic-male","meowstic-female","sprigatito","floragato","meowscarada"]);
const COIN_NAMES=new Set(["meowth","meowth-alola","meowth-galar","persian","persian-alola","perrserker","gimmighoul","gholdengo"]);
const PSEUDO_FAMILY=new Set(["dratini","dragonair","dragonite","larvitar","pupitar","tyranitar","bagon","shelgon","salamence","beldum","metang","metagross","gible","gabite","garchomp","deino","zweilous","hydreigon","goomy","sliggoo","goodra","sliggoo-hisui","goodra-hisui","jangmo-o","hakamo-o","kommo-o","dreepy","drakloak","dragapult","frigibax","arctibax","baxcalibur"]);
const CAP_PIKACHU_NAMES=new Set(["pikachu-original-cap","original-cap-pikachu","partner-cap-pikachu","world-cap-pikachu","hoenn-cap-pikachu","sinnoh-cap-pikachu","unova-cap-pikachu","kalos-cap-pikachu","alola-cap-pikachu"]);
function specialBaseKey(p){return String(p?.baseName||p?.baseSpecies||p?.base||p?.name||"").toLowerCase().replace(/_/g,"-");}
function isPikachuVariant(p){const n=String(p?.name||"").toLowerCase();const b=specialBaseKey(p);return b==="pikachu"||n.includes("pikachu");}
function makeSpecialPokemon(id,forceShiny=false){const def=SPECIAL_POKEMON_REGISTRY[id];if(!def)return null;const shiny=!!forceShiny||shinyRoll();const p={name:id,baseName:def.baseName||id,displayName:def.displayName||pretty(id),types:[...(def.types||["normal"])],bst:def.bst||300,hp:def.hp||0,dexId:def.dexId||0,sprite:specialAsset(def.sprite),shinySprite:def.shinySprite?specialAsset(def.shinySprite):specialAsset(def.sprite),shiny,shinyBonus:shiny?SHINY_BONUS:0,special:true,specialId:id,specialBonus:def.bonus||0,specialTags:[...(def.tags||["special"])],activeMega:null,activePrimal:null,megaForms:[]};if(def.megaForms){p.megaForms=def.megaForms.map(m=>({name:m.name,scoreBst:m.scoreBst||((def.bst||p.bst)+100),types:m.types||p.types,sprite:(m.source==="shadow")?megaAzAsset(m.sprite):specialAsset(m.sprite),shinySprite:(m.source==="shadow")?megaAzAsset(m.sprite):specialAsset(m.sprite),custom:true,source:m.source||"special"}));}if(id==="crystal-onix")p.evolvesTo="crystal-steelix";if(id==="missingno")p.glitchPokemon=true;return p;}
function maybeReplaceWithSpecialPokemon(p){if(rand(1,MISSINGNO_ODDS)===1)return makeSpecialPokemon("missingno");if(rand(1,SPECIAL_POKEMON_ODDS)===1)return makeSpecialPokemon(sample(SPECIAL_SPAWN_POOL,1)[0]);return p;}
function addMegaFormsForSpecial(p){if(!p)return p;if(p.name==="zygarde-complete"){p.megaForms=[{name:"Mega Zygarde Complete",scoreBst:(p.bst||708)+100,types:["dragon","ground"],sprite:megaAzAsset("220px-0718Zygarde-Mega.png"),shinySprite:megaAzAsset("220px-0718Zygarde-Mega.png"),custom:true,source:"zygarde-complete"}];}if(p.name==="crystal-steelix"&&!p.megaForms?.length){p.megaForms=[{name:"Mega Crystal Steelix",scoreBst:610,types:["steel","ground"],sprite:specialAsset("MetgaCrystalSteelix.webp"),shinySprite:specialAsset("MetgaCrystalSteelix.webp"),custom:true,source:"crystal"}];}if(p.name==="shadow-mewtwo"&&!p.megaForms?.length){p.megaForms=[{name:"Mega Shadow Mewtwo X",scoreBst:780,types:["psychic","fighting"],sprite:megaAzAsset("Mega_Shadow_Mewtwo_X.png"),shinySprite:megaAzAsset("Mega_Shadow_Mewtwo_X.png"),custom:true,source:"shadow"}];}return p;}
function isSpecialAnime(p){return (p.specialTags||[]).includes("anime")||(p.specialTags||[]).includes("ashbond")||(p.specialTags||[]).includes("clone");}
function isClonePokemon(p){return (p.specialTags||[]).includes("clone");}
function isFossilPokemon(p){return FOSSIL_FAMILIES.has(specialBaseKey(p))||FOSSIL_FAMILIES.has(String(p?.name||"").toLowerCase());}
function isBabyPokemon(p){return BABY_SET.has(specialBaseKey(p))||BABY_SET.has(String(p?.name||"").toLowerCase());}
function isCatPokemon(p){return CAT_NAMES.has(specialBaseKey(p))||CAT_NAMES.has(String(p?.name||"").toLowerCase());}
function isCoinPokemon(p){return COIN_NAMES.has(specialBaseKey(p))||COIN_NAMES.has(String(p?.name||"").toLowerCase());}
function isPseudoFamilyPokemon(p){return PSEUDO_FAMILY.has(specialBaseKey(p))||PSEUDO_FAMILY.has(String(p?.name||"").toLowerCase());}
function hasCapPikachu(){return team.some(p=>CAP_PIKACHU_NAMES.has(String(p.name||"").toLowerCase())||String(p.displayName||"").toLowerCase().includes("cap pikachu"))}
function hasAshGreninja(){return team.some(p=>String(p.name||"").toLowerCase()==="ash-greninja"||String(p.displayName||"").toLowerCase().includes("ash-greninja"))}
function hasAnyMewtwoForm(){return team.some(p=>specialBaseKey(p)==="mewtwo"||String(p.name||"").toLowerCase().includes("mewtwo"))}
function ensureMissingNoGlitch(){if(!isDraftComplete()||!team.some(p=>p.glitchPokemon||p.name==="missingno"))return;team.forEach(p=>{if(p.glitchMod===undefined)p.glitchMod=rand(-100,100);});}
function scoreBaseFor(p,i){let base=(p.activePrimal&&p.activePrimal.scoreBst)?p.activePrimal.scoreBst:(selectedMegaIndex===i&&p.activeMega)?p.activeMega.scoreBst:(p.activeOrigin&&p.activeOrigin.scoreBst)?p.activeOrigin.scoreBst:(p.activeUnbound&&p.activeUnbound.scoreBst)?p.activeUnbound.scoreBst:p.bst;if(selectedItem&&selectedItem.id==="light_ball"&&isPikachuVariant(p))base=(base||0)*2;if(p.activeGmax)base=(base||0)+(p.hp?Number(p.hp):150);return base||0;}
function pokemonItemBonus(p,i){let b=0;if(selectedItem&&selectedItem.id==="light_ball"&&!isPikachuVariant(p)&&activeTypes(p,i).map(t=>t.toLowerCase()).includes("electric"))b+=150;if(selectedItem&&selectedItem.id==="fossil"&&isFossilPokemon(p))b+=100;if(selectedItem&&selectedItem.id==="lucky_egg"&&isBabyPokemon(p))b+=300;return b;}
function pokemonSpecialBonus(p){return (p.specialBonus||0)+(p.purifiedBonus||0)+(p.eternalBonus||0)+(p.originBonus||0);}

const ITEM_POOL=[
 {id:"shiny_charm",name:"Shiny Charm",icon:imgIcon(itemAsset("Shiny_Charm.png"),"Shiny Charm"),desc:"Triples shiny odds. Shiny chance becomes 1/256 instead of 1/1024."},
 {id:"soothe_bell",name:"Soothe Bell",icon:imgIcon(itemAsset("Soothe_Bell.png"),"Soothe Bell"),desc:"Adds +100 to your final League Power. Can purify Shadow Pokémon."},
 {id:"evolution_stone",name:"Evolution Stone",icon:imgIcon(STONE_ITEM_ASSETS[rand(0,STONE_ITEM_ASSETS.length-1)],"Evolution Stone"),desc:"After the draft, evolve one eligible selected Pokémon. The evolved Pokémon's BST counts."},
 {id:"escape_rope",name:"Escape Rope",icon:imgIcon(itemAsset("Escape_Rope.png"),"Escape Rope"),desc:"During a grunt ambush, unlocks Escape Safely. No Pokémon is stolen."},
 {id:"master_ball",name:"Master Ball",icon:imgIcon(itemAsset("MasterBall.png"),"Master Ball"),desc:"One random draft phase becomes legendary-only options."},
 {id:"link_cable",name:"Link Cable",icon:imgIcon(itemAsset("Link_Cable.png"),"Link Cable"),desc:"After the draft, trade one selected Pokémon for a random different Pokémon."},
 {id:"elemental_plate",name:"Elemental Plate",icon:imgIcon(itemAsset("Legend_Plate.png"),"Legend Plate"),desc:"Choose one Pokémon type, or Legend Plate. Matching Pokémon add +50 League Power, capped at +300."},
 {id:"focus_sash",name:"Focus Sash",icon:imgIcon(itemAsset("Focus_Sash.png"),"Focus Sash"),desc:"Once, if you fail a League battle by 100 points or less, you still clear it."},
 {id:"ability_capsule",name:"Ability Capsule",icon:imgIcon(itemAsset("AbilityCapsule.png"),"Ability Capsule"),desc:"Once during the draft, reroll the current six Pokémon options."},
 {id:"expert_belt",name:"Expert Belt",icon:imgIcon(itemAsset("Expert_Belt.png"),"Expert Belt"),desc:"Adds +20 per unique active type. Mega Evolution type changes count."},
 {id:"pokedex",name:"Pokédex",icon:imgIcon(itemAsset("Pokédex.png"),"Pokédex"),desc:"Once during the draft, reveal the BST of all six Pokémon options for the current round."},
 {id:"rainbow_feather",name:"Rainbow Feather",icon:imgIcon(itemAsset("Rainbow_Feather.png"),"Rainbow Feather"),desc:"Transforms Vaporeon, Flareon, or Jolteon into Suicune, Entei, or Raikou. Grants +300 quest bonus."},
 {id:"gigantamax_potion",name:"Gigantamax Potion",icon:imgIcon(itemAsset("Gigantamix_Potion.png"),"Gigantamax Potion"),desc:"After the draft, turn one eligible Pokémon into its Gigantamax form. Doubles HP contribution, fallback +150."},
 {id:"amulet_coin",name:"Amulet Coin",icon:imgIcon(itemAsset("Amulet_Coin.png"),"Amulet Coin"),desc:"Doubles the activated Team Concept bonus. Can trigger Jackpot with Gimmighoul or Gholdengo."},
 {id:"repel",name:"Repel",icon:imgIcon(itemAsset("Repel.png"),"Repel"),desc:"One time: replace the three lowest-BST options from the current draft with new rolls."},
 {id:"dna_splicers",name:"DNA Splicers",icon:imgIcon(itemAsset("DNA_Splicers.png"),"DNA Splicers"),desc:"One draft phase guarantees Kyurem and boosts Reshiram/Zekrom odds."},
 {id:"fossil",name:"Fossil",icon:imgIcon(itemAsset("Fossil.png"),"Fossil"),desc:"One draft phase becomes fossil-only. Fossil Pokémon grant +100 each."},
 {id:"lucky_egg",name:"Lucky Egg",icon:imgIcon(itemAsset("LuckyEgg.png"),"Lucky Egg"),desc:"One draft phase becomes baby-only. Baby Pokémon grant +300 each."},
 {id:"light_ball",name:"Light Ball",icon:imgIcon(itemAsset("Light_Ball.png"),"Light Ball"),desc:"Electric Pokémon gain +150. Pikachu variants instead have their BST doubled."},
 {id:"origin_orb",name:"Origin Orb",icon:imgIcon(itemAsset("Origin_Orb.png"),"Origin Orb"),desc:"Dialga, Palkia and Giratina can transform into Origin Forme. +300 each."},
 {id:"prison_bottle",name:"Prison Bottle",icon:imgIcon(itemAsset("Prison_Bottle.png"),"Prison Bottle"),desc:"Hoopa unlocks Hoopa Unbound, gains +80 BST, and completes a hidden quest."}
];

const SPECIAL_PIKACHU_ODDS=1024;
const ETERNAL_FLOETTE_ODDS=1024;
const ETERNAL_FLOETTE_BONUS=300;

const PRIMAL_FORMS={
 groudon:{name:"Primal Groudon",scoreBst:770,types:["ground","fire"],pokeapi:"groudon-primal"},
 kyogre:{name:"Primal Kyogre",scoreBst:770,types:["water"],pokeapi:"kyogre-primal"}
};
const KYUREM_FUSIONS={
 reshiram:{name:"White Kyurem",scoreBst:700,types:["dragon","ice"],pokeapi:"kyurem-white"},
 zekrom:{name:"Black Kyurem",scoreBst:700,types:["dragon","ice"],pokeapi:"kyurem-black"}
};

const ROTOM_FORMS={
 rotom:{name:"Rotom",pokeapi:"rotom",types:["electric","ghost"],scoreBst:440},
 heat:{name:"Rotom Heat",pokeapi:"rotom-heat",types:["electric","fire"],scoreBst:520},
 wash:{name:"Rotom Wash",pokeapi:"rotom-wash",types:["electric","water"],scoreBst:520},
 frost:{name:"Rotom Frost",pokeapi:"rotom-frost",types:["electric","ice"],scoreBst:520},
 fan:{name:"Rotom Fan",pokeapi:"rotom-fan",types:["electric","flying"],scoreBst:520},
 mow:{name:"Rotom Mow",pokeapi:"rotom-mow",types:["electric","grass"],scoreBst:520},
 pokedex:{name:"Rotom Pokédex",pokeapi:"rotom",types:["electric","ghost"],scoreBst:740}
};


const CALYREX_FUSIONS={
 glastrier:{name:"Ice Rider Calyrex",scoreBst:680,types:["psychic","ice"],pokeapi:"calyrex-ice"},
 spectrier:{name:"Shadow Rider Calyrex",scoreBst:680,types:["psychic","ghost"],pokeapi:"calyrex-shadow"}
};
const RAINBOW_FEATHER_FORMS={
 vaporeon:{name:"Suicune",scoreBst:580,types:["water"],pokeapi:"suicune"},
 flareon:{name:"Entei",scoreBst:580,types:["fire"],pokeapi:"entei"},
 jolteon:{name:"Raikou",scoreBst:580,types:["electric"],pokeapi:"raikou"}
};
const REGI_NAMES=new Set(["regirock","regice","registeel","regigigas","regieleki","regidrago"]);
const WEATHER_TRIO=new Set(["kyogre","groudon","rayquaza"]);
const LAKE_GUARDIANS=new Set(["uxie","mesprit","azelf"]);
const CREATION_GODS=new Set(["arceus","dialga","palkia","giratina"]);
const FORCES_OF_NATURE=new Set(["tornadus","thundurus","landorus","enamorus"]);
const ANCIENT_PARADOX=new Set(["great-tusk","scream-tail","brute-bonnet","flutter-mane","slither-wing","sandy-shocks","roaring-moon","walking-wake","gouging-fire","raging-bolt","koraidon"]);
const FUTURE_PARADOX=new Set(["iron-treads","iron-bundle","iron-hands","iron-jugulis","iron-moth","iron-thorns","iron-valiant","iron-leaves","iron-boulder","iron-crown","miraidon"]);
const STARTER_FAMILIES=new Set([
 "bulbasaur","ivysaur","venusaur","charmander","charmeleon","charizard","squirtle","wartortle","blastoise",
 "chikorita","bayleef","meganium","cyndaquil","quilava","typhlosion","totodile","croconaw","feraligatr",
 "treecko","grovyle","sceptile","torchic","combusken","blaziken","mudkip","marshtomp","swampert",
 "turtwig","grotle","torterra","chimchar","monferno","infernape","piplup","prinplup","empoleon",
 "snivy","servine","serperior","tepig","pignite","emboar","oshawott","dewott","samurott",
 "chespin","quilladin","chesnaught","fennekin","braixen","delphox","froakie","frogadier","greninja",
 "rowlet","dartrix","decidueye","litten","torracat","incineroar","popplio","brionne","primarina",
 "grookey","thwackey","rillaboom","scorbunny","raboot","cinderace","sobble","drizzile","inteleon",
 "sprigatito","floragato","meowscarada","fuecoco","crocalor","skeledirge","quaxly","quaxwell","quaquaval",
 "pikachu","eevee"
]);
function baseSpeciesName(p){
 let n=String(p&&p.name||"").toLowerCase();
 if(n.startsWith("kyogre"))return "kyogre";
 if(n.startsWith("groudon"))return "groudon";
 if(n.startsWith("rayquaza"))return "rayquaza";
 if(n.startsWith("dialga"))return "dialga";
 if(n.startsWith("palkia"))return "palkia";
 if(n.startsWith("giratina"))return "giratina";
 if(n.startsWith("tornadus"))return "tornadus";
 if(n.startsWith("thundurus"))return "thundurus";
 if(n.startsWith("landorus"))return "landorus";
 if(n.startsWith("enamorus"))return "enamorus";
 return n;
}

const ULTRA_BEASTS=new Set(["nihilego","buzzwole","pheromosa","xurkitree","celesteela","kartana","guzzlord","poipole","naganadel","stakataka","blacephalon"]);
const TAPUS=new Set(["tapu-koko","tapu-lele","tapu-bulu","tapu-fini"]);
const REGIONAL_FORM_POOL=[
 "rattata-alola","raticate-alola","raichu-alola","sandshrew-alola","sandslash-alola","vulpix-alola","ninetales-alola","diglett-alola","dugtrio-alola","meowth-alola","persian-alola","geodude-alola","graveler-alola","golem-alola","grimer-alola","muk-alola","exeggutor-alola","marowak-alola",
 "meowth-galar","ponyta-galar","rapidash-galar","slowpoke-galar","slowbro-galar","farfetchd-galar","weezing-galar","mr-mime-galar","corsola-galar","zigzagoon-galar","linoone-galar","darumaka-galar","darmanitan-galar-standard","yamask-galar","stunfisk-galar","slowking-galar","articuno-galar","zapdos-galar","moltres-galar",
 "growlithe-hisui","arcanine-hisui","voltorb-hisui","electrode-hisui","typhlosion-hisui","qwilfish-hisui","sneasel-hisui","samurott-hisui","lilligant-hisui","zorua-hisui","zoroark-hisui","braviary-hisui","sliggoo-hisui","goodra-hisui","avalugg-hisui","decidueye-hisui",
 "tauros-paldea-combat-breed","tauros-paldea-blaze-breed","tauros-paldea-aqua-breed","wooper-paldea",
 "zygarde-10","zygarde-50","zygarde-complete"
];

const SPECIAL_PIKACHU_FORMS=[
 {name:"pikachu-rock-star",label:"Rock Star Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png"},
 {name:"pikachu-belle",label:"Belle Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png"},
 {name:"pikachu-pop-star",label:"Pop Star Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png"},
 {name:"pikachu-phd",label:"Ph.D. Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png"},
 {name:"pikachu-libre",label:"Libre Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png"},
 {name:"pikachu-cosplay",label:"Cosplay Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png"},
 {name:"pikachu-original-cap",label:"Original Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png"},
 {name:"pikachu-hoenn-cap",label:"Hoenn Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png"},
 {name:"pikachu-sinnoh-cap",label:"Sinnoh Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png"},
 {name:"pikachu-unova-cap",label:"Unova Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png"},
 {name:"pikachu-kalos-cap",label:"Kalos Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png"},
 {name:"pikachu-alola-cap",label:"Alola Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png"},
 {name:"pikachu-partner-cap",label:"Partner Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png"},
 {name:"pikachu-world-cap",label:"World Cap Pikachu",sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10160.png"}
];
const MEGA_FORMS={venusaur:["venusaur-mega"],charizard:["charizard-mega-x","charizard-mega-y"],blastoise:["blastoise-mega"],beedrill:["beedrill-mega"],pidgeot:["pidgeot-mega"],alakazam:["alakazam-mega"],slowbro:["slowbro-mega"],gengar:["gengar-mega"],kangaskhan:["kangaskhan-mega"],pinsir:["pinsir-mega"],gyarados:["gyarados-mega"],aerodactyl:["aerodactyl-mega"],mewtwo:["mewtwo-mega-x","mewtwo-mega-y"],ampharos:["ampharos-mega"],steelix:["steelix-mega"],scizor:["scizor-mega"],heracross:["heracross-mega"],houndoom:["houndoom-mega"],tyranitar:["tyranitar-mega"],sceptile:["sceptile-mega"],blaziken:["blaziken-mega"],swampert:["swampert-mega"],gardevoir:["gardevoir-mega"],sableye:["sableye-mega"],mawile:["mawile-mega"],aggron:["aggron-mega"],medicham:["medicham-mega"],manectric:["manectric-mega"],sharpedo:["sharpedo-mega"],camerupt:["camerupt-mega"],altaria:["altaria-mega"],banette:["banette-mega"],absol:["absol-mega"],glalie:["glalie-mega"],salamence:["salamence-mega"],metagross:["metagross-mega"],latias:["latias-mega"],latios:["latios-mega"],rayquaza:["rayquaza-mega"],lopunny:["lopunny-mega"],garchomp:["garchomp-mega"],lucario:["lucario-mega"],abomasnow:["abomasnow-mega"],gallade:["gallade-mega"],audino:["audino-mega"],diancie:["diancie-mega"]};

const CUSTOM_MEGA_FORMS={
 absol:[{name:"Mega Absol Z",types:["dark"]}],
 barbaracle:[{name:"Mega Barbaracle",types:["rock","water"]}],
 baxcalibur:[{name:"Mega Baxcalibur",types:["dragon","ice"]}],
 chandelure:[{name:"Mega Chandelure",types:["ghost","fire"]}],
 chesnaught:[{name:"Mega Chesnaught",types:["grass","fighting"]}],
 chimecho:[{name:"Mega Chimecho",types:["psychic"]}],
 clefable:[{name:"Mega Clefable",types:["fairy"]}],
 crabominable:[{name:"Mega Crabominable",types:["fighting","ice"]}],
 darkrai:[{name:"Mega Darkrai",types:["dark"]}],
 delphox:[{name:"Mega Delphox",types:["fire","psychic"]}],
 dragalge:[{name:"Mega Dragalge",types:["poison","dragon"]}],
 dragonite:[{name:"Mega Dragonite",types:["dragon","flying"]}],
 drampa:[{name:"Mega Drampa",types:["normal","dragon"]}],
 eelektross:[{name:"Mega Eelektross",types:["electric"]}],
 emboar:[{name:"Mega Emboar",types:["fire","fighting"]}],
 excadrill:[{name:"Mega Excadrill",types:["ground","steel"]}],
 falinks:[{name:"Mega Falinks",types:["fighting"]}],
 feraligatr:[{name:"Mega Feraligatr",types:["water","dragon"]}],
 floette:[{name:"Mega Floette",types:["fairy"]}],
 froslass:[{name:"Mega Froslass",types:["ice","ghost"]}],
 garchomp:[{name:"Mega Garchomp Z",types:["dragon"]}],
 glimmora:[{name:"Mega Glimmora",types:["rock","poison"]}],
 golurk:[{name:"Mega Golurk",types:["ground","ghost"]}],
 golisopod:[{name:"Mega Golisopod",types:["bug","water"]}],
 greninja:[{name:"Mega Greninja",types:["water","dark"]}],
 hawlucha:[{name:"Mega Hawlucha",types:["fighting","flying"]}],
 heatran:[{name:"Mega Heatran",types:["fire","steel"]}],
 lucario:[{name:"Mega Lucario Z",types:["fighting","steel"]}],
 magearna:[{name:"Mega Magearna",types:["steel","fairy"]}],
 malamar:[{name:"Mega Malamar",types:["dark","psychic"]}],
 meganium:[{name:"Mega Meganium",types:["grass","fairy"]}],
 meowstic:[{name:"Mega Meowstic",types:["psychic"]}],
 pyroar:[{name:"Mega Pyroar",types:["fire","normal"]}],
 raichu:[{name:"Mega Raichu X",types:["electric"]},{name:"Mega Raichu Y",types:["electric"]}],
 scrafty:[{name:"Mega Scrafty",types:["dark","fighting"]}],
 scolipede:[{name:"Mega Scolipede",types:["bug","poison"]}],
 scovillain:[{name:"Mega Scovillain",types:["grass","fire"]}],
 skarmory:[{name:"Mega Skarmory",types:["steel","flying"]}],
 staraptor:[{name:"Mega Staraptor",types:["normal","flying"]}],
 starmie:[{name:"Mega Starmie",types:["water","psychic"]}],
 tatsugiri:[{name:"Mega Tatsugiri",types:["dragon","water"]}],
 victreebel:[{name:"Mega Victreebel",types:["grass","poison"]}],
 zeraora:[{name:"Mega Zeraora",types:["electric"]}],
 zygarde:[{name:"Mega Zygarde",types:["dragon","ground"]}]
};

CUSTOM_MEGA_FORMS["zygarde-complete"]=[
 {name:"Mega Zygarde Complete",scoreBst:808,types:["dragon","ground"],sprite:customMegaAsset("Mega Zygarde Complete",false),shinySprite:customMegaAsset("Mega Zygarde Complete",true)}
];

function customMegaFormsFor(p){
 const key=evolutionMappingKey(p);
 let forms=(EVOLUTION_MAPPING_DATA.megaEvolutions&&EVOLUTION_MAPPING_DATA.megaEvolutions[key])||[];
 if(key==="floette-eternal"){forms=[{name:"Mega Eternal Floette",types:["fairy"],asset:"assets/custom-mega/mega-floette.png",shinyAsset:"assets/custom-mega/shiny/mega-floette.png",source:"eternal-floette",scoreBst:651}];}
 if(key==="zygarde-complete"){forms=[{name:"Mega Zygarde Complete",types:["dragon","ground"],asset:megaAzAsset("220px-0718Zygarde-Mega.png"),shinyAsset:megaAzAsset("220px-0718Zygarde-Mega.png"),source:"zygarde-complete",scoreBst:(p.bst||708)+100}];}
 if(key==="crystal-steelix"){forms=[{name:"Mega Crystal Steelix",types:["steel","ground"],asset:specialAsset("MetgaCrystalSteelix.webp"),shinyAsset:specialAsset("MetgaCrystalSteelix.webp"),source:"crystal",scoreBst:610}];}
 if(key==="shadow-mewtwo"){forms=[{name:"Mega Shadow Mewtwo X",types:["psychic","fighting"],asset:megaAzAsset("Mega_Shadow_Mewtwo_X.png"),shinyAsset:megaAzAsset("Mega_Shadow_Mewtwo_X.png"),source:"shadow",scoreBst:780}];}
 return forms.filter(m=>!m.target).map(m=>({name:m.name,scoreBst:m.scoreBst||p.bst+100,sprite:m.asset||customMegaAsset(m.name,false)||p.sprite,shinySprite:m.shinyAsset||m.asset||customMegaAsset(m.name,true)||p.shinySprite||p.sprite,types:m.types||p.types,custom:true,source:m.source||"mapping"}));
}
function dedupeMegaForms(forms){
 const seen=new Set();
 return forms.filter(f=>{
  const key=f.name.toLowerCase();
  if(seen.has(key))return false;
  seen.add(key);
  return true;
 });
}

const TRAINERS={
 boy:[
  ["Red","red"],["Ethan","ethan"],["Brendan","brendan"],["Lucas","lucas"],["Hilbert","hilbert"],["Calem","calem"],["Victor","victor"],["Ash","ash"],["Barry","barry"],["N","n"],["Adaman","adaman"]
 ],
 girl:[
  ["Leaf","leaf-gen3"],["Kris","kris"],["May","may"],["Dawn","dawn"],["Hilda","hilda"],["Serena","serena"],["Gloria","gloria"],["Akari","akari"],["Rosa","rosa"],["Bianca","bianca"],["Marnie","marnie"],["Nemona","nemona-s"]
 ],
 nonbinary:[
  ["Sascha","acetrainer-gen6xy"],["Kim","acetrainerf-gen6xy"],["Mika","punkguy"],["Alex","punkgirl"],["Morgan","veteran"],["Robin","veteranf-gen7"],["Casey","beauty"],["Taylor","battlegirl-gen3"],["Aarune","aarune"],["Benga","benga"],["Riley","riley"],["Raihan","raihan"]
 ]
};
const GYM_LEADERS=[
["Brock","brock","Rock","Boulder Badge"],["Misty","misty","Water","Cascade Badge"],["Lt. Surge","ltsurge","Electric","Thunder Badge"],["Erika","erika","Grass","Rainbow Badge"],["Koga","koga","Poison","Soul Badge"],["Sabrina","sabrina","Psychic","Marsh Badge"],["Blaine","blaine","Fire","Volcano Badge"],["Giovanni","giovanni","Ground","Earth Badge"],["Falkner","falkner","Flying","Zephyr Badge"],["Bugsy","bugsy","Bug","Hive Badge"],["Whitney","whitney","Normal","Plain Badge"],["Morty","morty","Ghost","Fog Badge"],["Chuck","chuck","Fighting","Storm Badge"],["Jasmine","jasmine","Steel","Mineral Badge"],["Pryce","pryce","Ice","Glacier Badge"],["Clair","clair","Dragon","Rising Badge"],["Roxanne","roxanne","Rock","Stone Badge"],["Brawly","brawly","Fighting","Knuckle Badge"],["Wattson","wattson","Electric","Dynamo Badge"],["Flannery","flannery","Fire","Heat Badge"],["Norman","norman","Normal","Balance Badge"],["Winona","winona","Flying","Feather Badge"],["Tate & Liza","tate-liza","Psychic","Mind Badge"],["Wallace","wallace","Water","Rain Badge"],["Roark","roark","Rock","Coal Badge"],["Gardenia","gardenia","Grass","Forest Badge"],["Maylene","maylene","Fighting","Cobble Badge"],["Crasher Wake","wake","Water","Fen Badge"],["Fantina","fantina","Ghost","Relic Badge"],["Byron","byron","Steel","Mine Badge"],["Candice","candice","Ice","Icicle Badge"],["Volkner","volkner","Electric","Beacon Badge"],["Lenora","lenora","Normal","Basic Badge"],["Burgh","burgh","Bug","Insect Badge"],["Elesa","elesa","Electric","Bolt Badge"],["Clay","clay","Ground","Quake Badge"],["Skyla","skyla","Flying","Jet Badge"],["Drayden","drayden","Dragon","Legend Badge"],["Viola","viola","Bug","Bug Badge"],["Grant","grant","Rock","Cliff Badge"],["Korrina","korrina","Fighting","Rumble Badge"],["Ramos","ramos","Grass","Plant Badge"],["Clemont","clemont","Electric","Voltage Badge"],["Valerie","valerie","Fairy","Fairy Badge"],["Olympia","olympia","Psychic","Psychic Badge"],["Wulfric","wulfric","Ice","Iceberg Badge"],["Milo","milo","Grass","Grass Badge"],["Nessa","nessa","Water","Water Badge"],["Kabu","kabu","Fire","Fire Badge"],["Bea","bea","Fighting","Fighting Badge"],["Allister","allister","Ghost","Ghost Badge"],["Opal","opal","Fairy","Fairy Badge"],["Raihan","raihan","Dragon","Dragon Badge"],["Katy","katy","Bug","Bug Badge"],["Brassius","brassius","Grass","Grass Badge"],["Iono","iono","Electric","Electric Badge"],["Kofu","kofu","Water","Water Badge"],["Larry","larry","Normal","Normal Badge"],["Ryme","ryme","Ghost","Ghost Badge"],["Tulip","tulip","Psychic","Psychic Badge"],["Grusha","grusha","Ice","Ice Badge"]].map(x=>({name:x[0],sprite:x[1],type:x[2],badge:x[3]}));
const ELITE_FOUR=[["Lorelei","lorelei","Ice"],["Bruno","bruno","Fighting"],["Agatha","agatha","Ghost"],["Lance","lance","Dragon"],["Will","will","Psychic"],["Koga","koga","Poison"],["Karen","karen","Dark"],["Sidney","sidney","Dark"],["Phoebe","phoebe","Ghost"],["Glacia","glacia","Ice"],["Drake","drake","Dragon"],["Aaron","aaron","Bug"],["Bertha","bertha","Ground"],["Flint","flint","Fire"],["Lucian","lucian","Psychic"],["Shauntal","shauntal","Ghost"],["Marshal","marshal","Fighting"],["Grimsley","grimsley","Dark"],["Caitlin","caitlin","Psychic"],["Malva","malva","Fire"],["Siebold","siebold","Water"],["Wikstrom","wikstrom","Steel"],["Drasna","drasna","Dragon"],["Hala","hala","Fighting"],["Olivia","olivia","Rock"],["Acerola","acerola","Ghost"],["Kahili","kahili","Flying"],["Rika","rika","Ground"],["Poppy","poppy","Steel"],["Larry","larry","Flying"],["Hassel","hassel","Dragon"]].map(x=>({name:x[0],sprite:x[1],type:x[2]}));
const CHAMPIONS=[["Blue","blue","Balanced"],["Lance","lance","Dragon"],["Steven","steven","Steel"],["Wallace","wallace","Water"],["Cynthia","cynthia","Balanced"],["Alder","alder","Balanced"],["Iris","iris","Dragon"],["Diantha","diantha","Balanced"],["Leon","leon","Balanced"],["Geeta","geeta","Balanced"],["Nemona","nemona","Balanced"]].map(x=>({name:x[0],sprite:x[1],type:x[2]}));
const LEGENDS=[["Red","red","Mt. Silver Legend",4000],["Ash","ash","World Champion",4000],["Cynthia","cynthia","Mythic Rematch",4000],["Blue","blue","Rival King",4000],["N","n","Truth and Ideals",4000],["Volo","volo","The Hidden Sinnoh Trial",4000]].map(x=>({name:x[0],sprite:x[1],title:x[2],required:x[3]}));
const GRUNTS=[["Team Rocket Grunt","rocketgrunt","wants to steal your strongest-looking Pokéball."],["Team Magma Grunt","magmagrunt","storms in with a volcano-brained robbery plan."],["Team Aqua Grunt","aquagrunt","tries to flood your draft board with bad decisions."],["Team Galactic Grunt","galacticgrunt","declares your team statistically useful to space crime."],["Team Plasma Grunt","plasmagrunt","claims your Pokémon need liberation into their pockets."],["Team Skull Grunt","skullgrunt","shuffles in sideways and makes it everyone’s problem."],["Team Yell Grunt","yellgrunt","screams so loudly one Pokéball nearly unscrews itself."],["Team Star Grunt","teamstargrunt","rolls up with dramatic posture and suspicious confidence."]].map(x=>({name:x[0],sprite:x[1],text:x[2]}));
const FALLBACK_POOL=[
{name:"charizard",displayName:"Charizard",dexId:6,types:["fire","flying"],bst:534,megaForms:[{name:"Mega Charizard X",scoreBst:634,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",types:["fire","dragon"]},{name:"Mega Charizard Y",scoreBst:634,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",types:["fire","flying"]}],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"},
{name:"garchomp",displayName:"Garchomp",dexId:445,types:["dragon","ground"],bst:600,megaForms:[{name:"Mega Garchomp",scoreBst:700,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",types:["dragon","ground"]}],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/445.png"},
{name:"metagross",displayName:"Metagross",dexId:376,types:["steel","psychic"],bst:600,megaForms:[{name:"Mega Metagross",scoreBst:700,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",types:["steel","psychic"]}],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/376.png"},
{name:"rayquaza",displayName:"Rayquaza",dexId:384,types:["dragon","flying"],bst:680,megaForms:[{name:"Mega Rayquaza",scoreBst:780,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",types:["dragon","flying"]}],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/384.png"},
{name:"tyranitar",displayName:"Tyranitar",dexId:248,types:["rock","dark"],bst:600,megaForms:[{name:"Mega Tyranitar",scoreBst:700,sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",types:["rock","dark"]}],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/248.png"},
{name:"greninja",displayName:"Greninja",dexId:658,types:["water","dark"],bst:530,megaForms:[],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/658.png"},
{name:"slaking",displayName:"Slaking",dexId:289,types:["normal"],bst:670,megaForms:[],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/289.png"},
 {name:"Professor Oak",theme:"The Kanto Professor Trial",type:"normal",secret:true,trainer:{name:"Professor Oak",sprite:"assets/professors/oak.png"},required:4500,team:["Tauros","Kangaskhan","Exeggutor","Arcanine","Gyarados","Dragonite"]},
 {name:"Professor Sycamore",theme:"The Mega Evolution Thesis",type:"psychic",secret:true,trainer:{name:"Professor Sycamore",sprite:"assets/professors/sycamore.png"},required:4500,team:["Venusaur","Charizard","Blastoise","Garchomp","Lucario","Xerneas"]},
 {name:"Professor Kukui",theme:"The Battle Professor",type:"fighting",secret:true,trainer:{name:"Professor Kukui",sprite:"assets/professors/kukui.png"},required:4500,team:["Lycanroc","Braviary","Snorlax","Ninetales Alola","Magnezone","Tapu Koko"]},
 {name:"Professor Sada",theme:"The Ancient Paradise Thesis",type:"dragon",secret:true,trainer:{name:"Professor Sada",sprite:"assets/professors/sada.png"},required:4500,team:["Great Tusk","Flutter Mane","Slither Wing","Roaring Moon","Walking Wake","Koraidon"]},
 {name:"Professor Turo",theme:"The Future Paradise Thesis",type:"electric",secret:true,trainer:{name:"Professor Turo",sprite:"assets/professors/turo.png"},required:4500,team:["Iron Treads","Iron Bundle","Iron Hands","Iron Valiant","Iron Leaves","Miraidon"]},
];

const PLATE_SPRITES={
 normal:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/silk-scarf.png",
 fire:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/flame-plate.png",
 water:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/splash-plate.png",
 electric:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/zap-plate.png",
 grass:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/meadow-plate.png",
 ice:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/icicle-plate.png",
 fighting:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/fist-plate.png",
 poison:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/toxic-plate.png",
 ground:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/earth-plate.png",
 flying:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/sky-plate.png",
 psychic:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/mind-plate.png",
 bug:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/insect-plate.png",
 rock:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/stone-plate.png",
 ghost:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/spooky-plate.png",
 dragon:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/draco-plate.png",
 dark:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/dread-plate.png",
 steel:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/iron-plate.png",
 fairy:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/items/pixie-plate.png"
};
function plateSprite(type){return PLATE_SPRITES[type]||PLATE_SPRITES.normal}
function itemDisplayName(){
 if(!selectedItem)return "Choose before draft";
 if(selectedItem.id==="elemental_plate"&&elementalPlateType)return `${selectedItem.name} (${elementalPlateType})`;
 return selectedItem.name;
}
function itemDescription(){
 if(!selectedItem)return "No starting item selected yet.";
 if(selectedItem.id==="elemental_plate"&&elementalPlateType)return `${selectedItem.desc} Selected type: ${elementalPlateType}.`;
 return selectedItem.desc;
}
function itemDisplayIcon(){
 if(selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType)return `<img src="${plateSprite(elementalPlateType)}" alt="${elementalPlateType} plate" style="width:34px;height:34px;object-fit:contain;image-rendering:pixelated">`;
 return selectedItem?selectedItem.icon:"🎒";
}

let apiIssue=false;let battleSimulationShown=false;let battleSimulationIndex=0;let battleSimulationBattles=[];let celebrationShown=false;let poolNames=[],usedNames=new Set(),team=[],currentOptions=[],generating=false,league=null,gruntRound=rand(1,6),gruntResolved=false,pendingGrunt=null,eventLog=null,trainerType=null,trainer=null,selectedMegaIndex=null,megaPromptShown=false,itemChoices=[],selectedItem=null,itemUsed=false,masterBallPhase=null,abilityCapsuleUsed=false,elementalPlateType=null,evolutionUsed=false,linkCableUsed=false,focusSashUsed=false,primalQuestCompleted=false,kyuremFusionCompleted=false,zygardeCompleteMegaUnlocked=false,pokedexUsed=false,pokedexRevealRound=null,rotomPokedexQuestCompleted=false,kinglyFusionCompleted=false,rainbowFeatherCompleted=false,rainbowFeatherResolved=false,postDraftPendingAfterGrunt=false,customTrainerName='',runEventLog=[],postDraftPipelineRunning=false,difficultyMode='normal',regigigasQuestOffered=false,regigigasGuaranteedNext=false,specialItemDraftUsed=false,repelUsed=false,gigantamaxUsed=false,originOrbResolved=false,prisonBottleResolved=false,glitchApplied=false;


function arr(x){return Array.isArray(x)?x:[]}
function safeMap(x,fn){return arr(x).map(fn)}

function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}function sample(arr,n){let c=[...((Array.isArray(arr)?arr:[]))];for(let i=c.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]]}return c.slice(0,n)}
function pretty(s){return s.split("-").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}function bst(stats){return stats.reduce((s,x)=>s+x.base_stat,0)}function megaSlug(name){return String(name||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function customMegaAsset(name,shiny=false){const slug=megaSlug(name);return shiny?`assets/custom-mega/shiny/${slug}.png`:`assets/custom-mega/${slug}.png`}function shinyRoll(){let odds=selectedItem&&selectedItem.id==='shiny_charm'?256:SHINY_ODDS;return rand(1,odds)===1}
function specialPikachuRoll(){return rand(1,SPECIAL_PIKACHU_ODDS)===1}

function eternalFloetteRoll(){return rand(1,ETERNAL_FLOETTE_ODDS)===1}
function makeEternalFloette(){
 return {
  name:"floette-eternal",
  displayName:"Eternal Floette",
  types:["fairy"],
  bst:551,
  megaForms:[{
   name:"Mega Eternal Floette",
   scoreBst:651,
   sprite:"assets/custom-mega/mega-floette.png",
   shinySprite:"assets/custom-mega/shiny/mega-floette.png",
   types:["fairy"],
   custom:true,
   source:"eternal-floette"
  }],
  activeMega:null,
  sprite:"assets/special/eternal-floette.png",
  shinySprite:"assets/special/eternal-floette.png",
  shiny:false,
  shinyBonus:0,
  eternalFloette:true,
  eternalBonus:ETERNAL_FLOETTE_BONUS,
  dexId:670
 };
}

function makeSpecialPikachu(){return makeSpecialPokemon(sample(["pikachu-original-cap","flying-pikachu","surfing-pikachu","cosplay-pikachu-rock-star","cosplay-pikachu-belle","cosplay-pikachu-libre"],1)[0]);}
function initItemChoices(){itemChoices=sample(ITEM_POOL,3);selectedItem=null;itemUsed=false;masterBallPhase=null;abilityCapsuleUsed=false;elementalPlateType=null;evolutionUsed=false;linkCableUsed=false;focusSashUsed=false;primalQuestCompleted=false;kyuremFusionCompleted=false;zygardeCompleteMegaUnlocked=false;pokedexUsed=false;pokedexRevealRound=null;rotomPokedexQuestCompleted=false;kinglyFusionCompleted=false;rainbowFeatherCompleted=false;rainbowFeatherResolved=false;postDraftPendingAfterGrunt=false;celebrationShown=false;battleSimulationShown=false;battleSimulationIndex=0;battleSimulationBattles=[];scoreBreakdownShown=false;masterBallReady=false;masterBallUsed=false;specialItemDraftUsed=false;repelUsed=false;gigantamaxUsed=false;originOrbResolved=false;prisonBottleResolved=false;glitchApplied=false}
function selectItem(id){
 selectedItem=itemChoices.find(x=>x.id===id);
 if(selectedItem&&selectedItem.id==="master_ball"){masterBallReady=true;masterBallPhase=null;}
 if(selectedItem&&selectedItem.id==="elemental_plate"){
  elementalPlateType=null;
  render();
  return;
 }
 render();
 generateOptions();
}

function openElementalPlatePreDraft(){
 renderPlateSelectionScreen();
}
function chooseElementalPlateType(type){
 elementalPlateType=type;
 document.getElementById("itemModal").style.display="none";
 const bs=document.getElementById("battleSimOverlay"); if(bs)bs.style.display="none";
 document.getElementById("celebrationOverlay").style.display="none";
 render();
 generateOptions();
}

function renderPlateSelectionScreen(){
 const allTypes=["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy","legend"];
 document.getElementById("mainTitle").textContent="Choose Elemental Plate Type";
 let area=document.getElementById("gameArea");
 area.className="itemgrid";
 area.innerHTML=allTypes.map(t=>`<button type="button" class="card itemcard" data-desc="Each active ${t}-type Pokémon adds +50 League Power. Maximum +300. Mega Evolution type changes count." onclick="chooseElementalPlateType('${t}')"><img src="${plateSprite(t)}" alt="${t} plate" style="width:42px;height:42px;object-fit:contain;image-rendering:pixelated;margin-bottom:8px"><h3 class="itemname">${t[0].toUpperCase()+t.slice(1)}</h3><p class="itemdesc">+50 per ${t} pick<br>Max +300</p></button>`).join("");
}
function renderItemSelection(){
 document.getElementById("mainTitle").textContent="Choose Starting Item";
 let area=document.getElementById("gameArea");
 area.className="itemgrid";
 area.innerHTML=itemChoices.map(item=>`<button class="card itemcard" data-desc="${item.desc}" onclick="selectItem('${item.id}')"><div class="itemicon">${item.icon}</div><h3 class="itemname">${item.name}</h3><p class="itemdesc">${item.desc}</p></button>`).join("");
}


function pokemonRegion(p){
 const idMap={
  // Explicit regional/special names can still fall back to dex number if available.
 };
 const dex=p.dexId||p.id||0;
 if(dex>=1&&dex<=151)return "Kanto";
 if(dex>=152&&dex<=251)return "Johto";
 if(dex>=252&&dex<=386)return "Hoenn";
 if(dex>=387&&dex<=493)return "Sinnoh";
 if(dex>=494&&dex<=649)return "Unova";
 if(dex>=650&&dex<=721)return "Kalos";
 if(dex>=722&&dex<=809)return "Alola";
 if(dex>=810&&dex<=905)return "Galar";
 if(dex>=906&&dex<=1025)return "Paldea";
 return null;
}
const REGION_CONCEPT_NAMES={
 Kanto:"Kanto Mayhem Team",
 Johto:"Johto Bell Tower Brawlers",
 Hoenn:"Hoenn Weather Crimes Team",
 Sinnoh:"Sinnoh Myth Crunch Team",
 Unova:"Unova Subway Incident Team",
 Kalos:"Kalos Fashionably Violent Team",
 Alola:"Alola Vacation Gone Wrong Team",
 Galar:"Galar Stadium Noise Complaint Team",
 Paldea:"Paldea Lunchbox Riot Team"
};
const SPLIT_EVOLUTION_MAP={
 eevee:["vaporeon","jolteon","flareon","espeon","umbreon","leafeon","glaceon","sylveon"],
 slowpoke:["slowbro","slowking"],
 poliwhirl:["poliwrath","politoed"],
 gloom:["vileplume","bellossom"],
 tyrogue:["hitmonlee","hitmonchan","hitmontop"],
 kirlia:["gardevoir","gallade"],
 snorunt:["glalie","froslass"],
 clamperl:["huntail","gorebyss"],
 nincada:["ninjask","shedinja"],
 wurmple:["silcoon","cascoon"],
 applin:["flapple","appletun","dipplin"],
 charcadet:["armarouge","ceruledge"],
 kubfu:["urshifu-single-strike","urshifu-rapid-strike"],
 scyther:["scizor","kleavor"],
 qwilfish:["overqwil"],
 bisharp:["kingambit"],
 ursaring:["ursaluna"],
 porygon:["porygon2"],
 porygon2:["porygon-z"],
 cosmoem:["solgaleo","lunala"],
 cosmog:["cosmoem"],
 "zygarde-10":["zygarde-50"],
 "zygarde-50":["zygarde-complete"]
};
function evolutionMappingKey(p){
 return String((p&&p.name)||"").toLowerCase().replace(/_/g,"-");
}
function evolutionChoicesFor(p){
 const key=evolutionMappingKey(p);
 if(key==="meltan")return ["melmetal"];
 if(key==="crystal-onix")return ["crystal-steelix"];
 const data=EVOLUTION_MAPPING_DATA||{};
 let choices=[];
 // Evolution Stone source of truth: formUpgrades, splitEvolutions, normalEvolutions only.
 if(data.formUpgrades&&data.formUpgrades[key])choices=data.formUpgrades[key];
 else if(data.splitEvolutions&&data.splitEvolutions[key])choices=data.splitEvolutions[key];
 else if(data.normalEvolutions&&data.normalEvolutions[key])choices=[data.normalEvolutions[key]];
 return [...new Set(choices)].filter(x=>String(x||"").toLowerCase().replace(/_/g,"-")!==key);
}
function evolutionChoiceLabel(target){
 const labels={
  "solgaleo":"Solgaleo",
  "lunala":"Lunala",
  "cosmoem":"Cosmoem",
  "zygarde-50":"Zygarde 50%",
  "zygarde-complete":"Zygarde Complete",
  "urshifu-single-strike":"Urshifu Single Strike",
  "urshifu-rapid-strike":"Urshifu Rapid Strike",
  "nidoran-f":"Nidoran♀",
  "nidoran-m":"Nidoran♂",
  "mr-mime":"Mr. Mime",
  "mime-jr":"Mime Jr."
 };
 return labels[target]||pretty(target);
}

const EVOLUTION_CHAIN_CACHE={};
function normalizeEvolutionApiName(name){return String(name||"").toLowerCase().replace(/_/g,"-");}
function normalizeGameName(name){return String(name||"").toLowerCase().replace(/-/g,"_");}
function collectEvolutionTargetsFromNode(node,currentName,out=[]){
 if(!node)return out;
 const speciesName=normalizeEvolutionApiName(node.species&&node.species.name);
 if(speciesName===normalizeEvolutionApiName(currentName)){
  (node.evolves_to||[]).forEach(child=>{
   if(child.species&&child.species.name)out.push(child.species.name);
  });
  return out;
 }
 (node.evolves_to||[]).forEach(child=>collectEvolutionTargetsFromNode(child,currentName,out));
 return out;
}
async function fetchEvolutionChoicesForPokemon(p){
 const key=evolutionMappingKey(p);
 if(EVOLUTION_CHAIN_CACHE[key])return EVOLUTION_CHAIN_CACHE[key];
 const choices=evolutionChoicesFor(p);
 EVOLUTION_CHAIN_CACHE[key]=choices;
 return choices;
}
async function evolutionChoicesForAsync(p){return await fetchEvolutionChoicesForPokemon(p)}

function evolutionChoiceCard(slotIndex,target){
 return `<button type="button" class="mini evoChoiceBtn" onclick="useEvolutionStone(${slotIndex},'${target}')">${evolutionChoiceLabel(target)}</button>`;
}


// Broad evolution patch: catches newer/special/trade/friendship/stone/item lines missing from the static base map.
Object.assign(EVOLUTION_MAP,{
 // Alola / late additions
 grubbin:"charjabug",charjabug:"vikavolt",crabrawler:"crabominable",cutiefly:"ribombee",rockruff:"lycanroc-midday",
 mareanie:"toxapex",mudbray:"mudsdale",dewpider:"araquanid",fomantis:"lurantis",morelull:"shiinotic",salandit:"salazzle",
 stufful:"bewear",bounsweet:"steenee",steenee:"tsareena",wimpod:"golisopod",sandygast:"palossand",type_null:"silvally",
 jangmo_o:"hakamo-o","jangmo-o":"hakamo-o","hakamo-o":"kommo-o",cosmog:"cosmoem",
 // Galar / Hisui
 skwovet:"greedent",rookidee:"corvisquire",corvisquire:"corviknight",blipbug:"dottler",dottler:"orbeetle",
 nickit:"thievul",gossifleur:"eldegoss",wooloo:"dubwool",chewtle:"drednaw",yamper:"boltund",rolycoly:"carkol",carkol:"coalossal",
 applin:"flapple",silicobra:"sandaconda",arrokuda:"barraskewda",toxel:"toxtricity-amped",sizzlipede:"centiskorch",
 clobbopus:"grapploct",sinistea:"polteageist",hatenna:"hattrem",hattrem:"hatterene",impidimp:"morgrem",morgrem:"grimmsnarl",
 milcery:"alcremie",snom:"frosmoth",cufant:"copperajah",dreepy:"drakloak",drakloak:"dragapult",
 farfetchd:"sirfetchd","farfetchd-galar":"sirfetchd",corsola:"cursola","corsola-galar":"cursola",darumaka:"darmanitan","darumaka-galar":"darmanitan-galar-standard",
 yamask:"cofagrigus","yamask-galar":"runerigus",mime_jr:"mr-mime","mr-mime-galar":"mr-rime",qwilfish:"overqwil",sneasel:"weavile","sneasel-hisui":"sneasler",
 basculin:"basculegion",petilil:"lilligant","petilil-hisui":"lilligant-hisui",rufflet:"braviary","rufflet-hisui":"braviary-hisui",bergmite:"avalugg","bergmite-hisui":"avalugg-hisui",
 goomy:"sliggoo",sliggoo:"goodra","sliggoo-hisui":"goodra-hisui",
 // Paldea
 sprigatito:"floragato",floragato:"meowscarada",fuecoco:"crocalor",crocalor:"skeledirge",quaxly:"quaxwell",quaxwell:"quaquaval",
 lechonk:"oinkologne",tarountula:"spidops",nymble:"lokix",pawmi:"pawmo",pawmo:"pawmot",tandemaus:"maushold",
 fidough:"dachsbun",smoliv:"dolliv",dolliv:"arboliva",nacli:"naclstack",naclstack:"garganacl",charcadet:"armarouge",
 tadbulb:"bellibolt",wattrel:"kilowattrel",maschiff:"mabosstiff",shroodle:"grafaiai",bramblin:"brambleghast",toedscool:"toedscruel",
 klawf:"klawf",capsakid:"scovillain",rellor:"rabsca",flittle:"espathra",tinkatink:"tinkatuff",tinkatuff:"tinkaton",
 wiglett:"wugtrio",bombirdier:"bombirdier",finizen:"palafin",varoom:"revavroom",cyclizar:"cyclizar",orthworm:"orthworm",
 glimmet:"glimmora",greavard:"houndstone",flamigo:"flamigo",cetoddle:"cetitan",veluza:"veluza",dondozo:"dondozo",
 tatsugiri:"tatsugiri",annihilape:"annihilape",dunsparce:"dudunsparce",girafarig:"farigiraf",bisharp:"kingambit",
 gimmighoul:"gholdengo","gimmighoul-roaming":"gholdengo","gimmighoul-chest":"gholdengo",frigibax:"arctibax",arctibax:"baxcalibur"
});
Object.assign(SPLIT_EVOLUTION_MAP,{
 cosmoem:["solgaleo","lunala"],
 applin:["flapple","appletun","dipplin","hydrapple"],
 charcadet:["armarouge","ceruledge"],
 rockruff:["lycanroc-midday","lycanroc-midnight","lycanroc-dusk"],
 toxel:["toxtricity-amped","toxtricity-low-key"],
 basculin:["basculegion"],
 tandemaus:["maushold"],
 dunsparce:["dudunsparce"],
 bisharp:["kingambit"],
 gimmighoul:["gholdengo"],
 "zygarde-10":["zygarde-50"],
 "zygarde-50":["zygarde-complete"]
});


// Evolution map cleanup: remove non-evolving final/single-stage Pokémon accidentally mapped to themselves.
["bombirdier","klawf","cyclizar","orthworm","flamigo","veluza","dondozo","tatsugiri"].forEach(k=>{if(EVOLUTION_MAP[k]===k)delete EVOLUTION_MAP[k];});

const DOG_NAMES=new Set(["growlithe","arcanine","houndour","houndoom","poochyena","mightyena","lillipup","herdier","stoutland","rockruff","lycanroc-midday","lycanroc-midnight","lycanroc-dusk","yamper","boltund","fidough","dachsbun","greavard","houndstone","fennekin","braixen","delphox","zacian","zamazenta","suicune","entei","raikou"]);
const HORSE_NAMES=new Set(["ponyta","rapidash","mudbray","mudsdale","blitzle","zebstrika","glastrier","spectrier","keldeo-ordinary","calyrex","girafarig","farigiraf"]);
const BABY_NAMES=new Set(["pichu","cleffa","igglybuff","togepi","tyrogue","smoochum","elekid","magby","azurill","wynaut","budew","chingling","bonsly","mime-jr","happiny","munchlax","riolu","mantyke","toxel"]);
const GRUNT_TYPES=new Set(["poison","dark","ghost"]);
function isLegendaryLike(p){return LEGENDARY_NAMES.has(p.name)||MASTER_BALL_LEGENDARY_POOL.includes(p.name)}

const CONCEPT_NAME_POOLS={
 legendary_all:["The Legend- wait for it - DARY Team","Pantheon Parking Lot Team","Six Gods and a Clipboard Team","Mythology Final Boss Team","The Olympus HR Complaint Team","Divine Overbooking Team","Legendary Tax Haven Team","God Squad Deluxe","The Sacred Problem Team","Mythic Thunder Audit Team"],
 myth_cabinet:["Myth Cabinet Team","The Forbidden Display Case Team","Legendary Storage Unit Team","Mythic Museum Heist Team","Pantheon Sideboard Team","The Relic Shelf Team","God Drawer Emergency Team","The Divine Cupboard Team","Ancient PowerPoint Team","Legendary Filing Cabinet Team"],
 region_kanto:["Kanto Mayhem Team","Pallet Town Problem Team","Indigo Nostalgia Riot Team","Oak's Insurance Nightmare Team","Kanto Chaos Cartel","Viridian Incident Team","Original 151-ish Violence Team","Kanto Classic Carnage Team","Route 1 Escalation Team","Indigo League Tax Evasion Team"],
 region_johto:["Johto Bell Tower Brawlers","Goldenrod Panic Team","Ruins of Alph Nonsense Team","Johto Night Parade Team","Ecruteak Ghost Tax Team","Slowpoke Well Strike Force","Lake of Rage Legal Team","Johto Apricorn Syndicate","Bell Tower Noise Complaint","New Bark Bad Decisions Team"],
 region_hoenn:["Hoenn Weather Crimes Team","Too Much Trumpet Team","Magma-Aqua HR Disaster Team","Route 119 Rain Team","Slateport Dock Fight Club","Hoenn Climate Lawsuit Team","Rayquaza Please Help Team","Fortree Treehouse Incident","Lavaridge Steam Goblins","Hoenn Ocean Property Scam"],
 region_sinnoh:["Sinnoh Myth Crunch Team","Mt. Coronet Problem Team","Spear Pillar Side Quest Team","Cynthia Anxiety Team","Sinnoh Snowboot Syndicate","Distortion World Admin Team","Oreburgh Union Team","Sinnoh Time-Space Headache","Canalave Book Club Brawlers","Galactic Intern Review Team"],
 region_unova:["Unova Subway Incident Team","Castelia Street Food Fight Team","Nimbasa Noise Team","Plasma Pamphlet Riot Team","Unova Bridge Toll Team","Driftveil Market Menace","Unova Blackout Committee","Gear Station Gremlins","Unova Big City Goblins","Opelucid Debate Club Team"],
 region_kalos:["Kalos Fashionably Violent Team","Lumiose Traffic Violation Team","Kalos Café Brawl Team","Prism Tower Drama Team","Kalos Runway Riot Team","Mega Stone Boutique Team","Kalos Elegance With Teeth","Lysandre Haircare Incident","Kalos Chateau Chaos","Fleur-de-Lis Fight Club"],
 region_alola:["Alola Vacation Gone Wrong Team","Island Trial Nonsense Team","Malasada Mayhem Team","Ultra Wormhole Tourist Trap","Alola Beach Legal Team","Tapu Apology Squad","Team Skull Karaoke Team","Aether Foundation Oops Team","Alola Sunscreen Disaster","Route 1 Coconut Court Team"],
 region_galar:["Galar Stadium Noise Complaint Team","Dynamax Queue Cutters","Galar Pub Brawl Team","Wyndon Sports Riot Team","Hammerlocke Hooligans","Galar Curry Catastrophe","Motostoke Engine Trouble Team","Galar Chanting Section","Rose Tower Bad Elevator Team","Galar Weather Delay Team"],
 region_paldea:["Paldea Lunchbox Riot Team","Academy Detention Squad","Area Zero Oops Team","Paldea Sandwich Tribunal","Treasure Hunt Tax Fraud Team","Mesagoza Hall Pass Team","Team Star Group Project","Paldea Picnic Predators","Tera Raid Waiting Room","Paldea Homework Evasion Team"],
 fire:["Fire Storm Team","Volcanic Symbiosis Team","Arson But Make It Tactical","Burn Notice Battalion","Lavaridge Legal Department","Hot Sauce Diplomacy Team","The Toasted Shoes Team","Charcoal Union Strike","Flame Charge Finance Team","The Spicy Disaster Team"],
 water:["Surfboard Tax Fraud Team","Tsunami Board Meeting","Hydro Pump HR Team","Wet Socks Warfare","The Aquarium Escape Plan","Rain Dance Litigation Team","Splash Zone Menace","The Soggy Strategy Team","Tidal Invoice Team","Deep End Diplomats"],
 dragon:["Dragon Problem Team","Wyrm Weather Warning Team","Scale Mail Syndicate","Dragon Tax Evasion Squad","The Roaring Audit Team","Cave Rent Collectors","Ancient Lizard Legal Team","Draco Meteor Forecast","The Hoard Management Team","Winged Property Damage Team"],
 ghost:["Poltergeist Paperwork Team","Haunted Lease Agreement","Afterlife Admin Team","The Spectral Noise Complaint","Possessed Furniture Squad","Ghost Tax Office","Boo Bureaucracy Team","The Phantom HOA","Cursed Receipt Team","Graveyard Shift Managers"],
 dark:["Night Shift Villain Team","Midnight Problem Children","The Alleyway Committee","Sneaky Little Lawsuit Team","Dark Mode Degenerates","Umbra Accounting Team","After-Hours Crime Team","The Suspicious Hoodie Team","Shadow HR Department","The Moonless Desk Job"],
 steel:["Steel-Toed Diplomacy Team","Chrome Dome Cartel","Forklift Certification Team","The Iron Filing Cabinet","Metal Pipe Orchestra","Stainless Threat Level","Steel Beam Negotiators","The OSHA Magnet Team","Rivet Riot Team","Chrome-Plated Complaints"],
 fairy:["Fairy Dust Lawsuit Team","Glitter Blade Diplomacy Team","Pink Threat Assessment","Cupcake Violence Team","Sparkle Court Martial","The Charm Offensive","Pastel War Crimes Team","Fairy Ring Tax Team","Tiny Wings Big Problems","The Glitter Injunction"],
 electric:["Outlet Overload Team","Thunder Goblin Circuit","Unpaid Power Bill Team","Static Cling Syndicate","Socket Gremlins","Lightning Invoice Team","Battery Acid Ballet","The Voltage Vultures","Zap Tax Department","Thunderstorm Terms of Service"],
 ice:["Freezer Aisle Menace Team","Freezer Burn Fellowship","The Frozen Invoice Team","Ice Cube Litigation","Snowboot Crime Unit","Cold Storage Cartel","The Permafrost Problem","Blizzard Waiting Room","Slippery Floor Squad","Frostbite Finance Team"],
 grass:["Lawncare Rebellion Team","Photosynthesis Mafia","The Compost Conspiracy","Garden Center Gang","Vine Whip HOA","Leafblower Lawsuit Team","Chlorophyll Committee","The Salad Bar Uprising","Moss-Covered Mayhem","Root Access Denied Team"],
 psychic:["Mind Goblin Team","Brain Cell Union","Telepathy Terms Team","The Headache Department","Future Sight Finance","Brainwave Bureau","Psychic Parking Ticket","The Spoon Benders Union","Mind Palace Maintenance","ESP HR Incident"],
 bug:["Bug Net Bankruptcy Team","Crunchy Little Council","Insect Rent Strike","Six-Legged Audit Team","The Exoskeleton Office","Bug Bite Buffet","Tiny Menace Committee","Web Design Disaster","The Antenna Agenda","Hive Mind Helpdesk"],
 rock:["Pebble Violence Team","Geology With Hands","Stone Age Startup","Rock Slide Liability Team","The Mineral Rights Crew","Sediment Sentiment Team","Boulder Budget Office","The Gravel Goblins","Fossil Fuel Feelings","Rock Hard Receipts"],
 ground:["Floor Is Gone Team","Earthquake Appreciation Club","Mud Mortgage Team","The Basement Problem","Ground Lease Dispute","Dig Site Disaster","Sand Tax Syndicate","The Tremor Department","Dirt Court Team","Subterranean Strategy Team"],
 poison:["OSHA Violation Team","Toxic HR Department","Venomous Compliance Team","The Purple Warning Label","Poison Point Payroll","The Hazard Suit Team","Toxic Spill Committee","Sludge Bomb Spreadsheet","Poison Control Rejects","The Noxious Negotiators"],
 fighting:["Hands Rated E Team","Punch Economy","Knuckle Sandwich Board","The Fist-Based Solution","Gym Membership Violence","Close Combat Committee","Punch Clock Team","The Throwing Hands Team","Elbow Grease Elite","Fighting Type Finance"],
 flying:["No Landing Permit Team","Airspace Violators","Sky Tax Authority","The Bird Law Firm","Turbulence Task Force","Wing Attack Witnesses","Cloud Parking Ticket Team","Frequent Flyer Felonies","Jetstream Committee","The Altitude Adjustment Team"],
 normal:["Normal But Suspicious Team","Suspiciously Normal Team","Plain Toast Threat Level","The Beige Brigade","Normal Office Violence","Routine Disaster Team","Average Tuesday Team","The Tax Form Tackle Team","Standard Issue Chaos","Normal-Type Nonsense"],
 dogs:["Good Boys, Bad Decisions Team","Bark Side of the Moon Team","The Leash Law Breakers","Canine Court Summons","Fetch Quest Felons","Paw Patrol But Dangerous","The Tail-Wagging Tax Team","Biscuit Bandit Brigade","The Barking Boardroom","Good Dogs, Bad Paperwork"],
 horses:["Horsepower Department Team","Stable Economy Team","Gallop Tax Authority","The Saddle Syndicate","Pony Express Problems","Mane Character Energy","Hoofbeat Hooligans","The Hay Bailiffs","Canter Cartel","Equestrian Incident Report"],
 babies:["Daycare Escape Incident Team","Nap Time Resistance Team","Tiny Shoes Big Crimes","Baby Monitor Boss Fight","The Pacifier Platoon","Crib Breakout Crew","Toddler Tier Threats","Little League Menace Team","The Diaper Derby","Daycare Liability Team"],
 grunts:["Grunt Starter Pack Team","Crime Organization Interns","Poison-Dark-Ghost HR Team","The Hideout Keycard Team","Warehouse Boss Fight Team","Uniform Not Included Team","Suspicious Basement Team","The Admin Promotion Team","Evil Team Orientation","The Stolen Bike Committee"],
 shinies:["Sparkle Goblin Treasury Team","The Glitter Jackpot Team","Rare Paint Job Squad","Shiny Object Problem Team","Golden Gremlin Gallery","Sparkle Tax Audit","The Chrome Encounter Team","Full Odds Fever Team","The Glitter Receipt Team","Sparkle Storage Unit"],
 illegal:["Illegal Button Press Team","Mega-Legendary Complaint Desk","Balance Patch Incoming Team","Competitive Integrity Crisis","The Ban List Candidates","Too Many Cutscenes Team","Final Boss Internship","Power Creep Parade","The Nerf Hammer Bait Team","Rulebook Funeral Team"],
 random:["Kitchen Sink Casualties Team","The Draft Goblin Special","Stat Soup Survivors","Six Pokéballs and a Prayer","The Accidental Spreadsheet Team","Random Number Goblins","The Benchwarmer Ballet","No Theme No Problem Team","The Unplanned Expedition","Mystery Meat Meta Team"]
};
function conceptName(key,fallback){
 const pool=CONCEPT_NAME_POOLS[key]||[fallback||"Concept Team"];
 return pool[Math.floor(Math.random()*pool.length)];
}
let cachedConceptKey="";
let cachedConceptResult=null;
function conceptFingerprint(){
 return team.map((p,i)=>`${p.name}:${activeTypes(p,i).join("/")}:${selectedMegaIndex===i&&p.activeMega?p.activeMega.name:""}:${p.shiny}`).join("|");
}

function teamConcept(){
 if(team.length<ROUNDS)return {key:"unfinished",name:"Unfinished Team",bonus:0,reason:"Draft still in progress."};
 const fp=conceptFingerprint()+"|v13|"+(hasAshGreninja()&&hasCapPikachu());if(cachedConceptResult&&cachedConceptKey===fp)return cachedConceptResult;
 const candidates=[];const add=(key,name,bonus,reason)=>candidates.push({key,name,bonus,reason});const typeCounts={};
 team.forEach((p,i)=>activeTypes(p,i).forEach(t=>{t=t.toLowerCase();typeCounts[t]=(typeCounts[t]||0)+1}));
 const legends=team.filter(isLegendaryLike).length;const regions={};team.forEach(p=>{let r=pokemonRegion(p);if(r)regions[r]=(regions[r]||0)+1});
 const dogs=team.filter(p=>DOG_NAMES.has(p.name)).length,horses=team.filter(p=>HORSE_NAMES.has(p.name)).length,babies=team.filter(p=>BABY_NAMES.has(p.name)).length;
 const gruntScore=team.reduce((s,p,i)=>s+activeTypes(p,i).filter(t=>GRUNT_TYPES.has(t.toLowerCase())).length,0),shinyCount=team.filter(p=>p.shiny).length,megaCount=team.filter((p,i)=>selectedMegaIndex===i&&p.activeMega).length;
 const ultraBeasts=team.filter(p=>ULTRA_BEASTS.has(p.name)).length,tapuCount=team.filter(p=>TAPUS.has(p.name)).length,bases=team.map(baseSpeciesName);
 const countSet=(set)=>bases.filter(n=>set.has(n)).length;const regi=countSet(REGI_NAMES),paradox=bases.filter(n=>ANCIENT_PARADOX.has(n)||FUTURE_PARADOX.has(n)).length,starters=bases.filter(n=>STARTER_FAMILIES.has(n)).length,forces=countSet(FORCES_OF_NATURE);
 const clones=team.filter(isClonePokemon).length,fossils=team.filter(isFossilPokemon).length,pikachus=team.filter(isPikachuVariant).length,anime=team.filter(isSpecialAnime).length,coin=team.filter(isCoinPokemon).length,cats=team.filter(isCatPokemon).length,pseudo=team.filter(isPseudoFamilyPokemon).length;
 if(hasAshGreninja()&&hasCapPikachu())add("bond_phenomenon","Bond Phenomenon Team",300,"Ash-Greninja and Cap Pikachu created a bond beyond normal limits.");
 if(tapuCount===4)add("alola_protectors",conceptName("alola_protectors","Alola Protector Team"),1000,"All four Tapus/Kapus answered the call.");
 if(legends===6)add("legendary_all",conceptName("legendary_all"),600,"All six Pokémon are legendary or mythical tier.");
 if(ultraBeasts>=3)add("ultra_beasts",conceptName("ultra_beasts","Ultra Beast Containment Unit"),ultraBeasts*100,`${ultraBeasts} Ultra Beasts selected. +100 per Ultra Beast.`);
 if(regi>=3)add("regi_core",conceptName("regi_core","Regi Seal Team"),regi*100,`${regi} Regi Pokémon assembled. +100 per Regi.`);
 if(paradox>=3)add("paradox_core",conceptName("paradox_core","Paradox Rift Team"),paradox*100,`${paradox} Paradox Pokémon selected. +100 each.`);
 if(starters>=3)add("starter_squad",conceptName("starter_squad","Starter Squad"),starters*50,`${starters} starter-family Pokémon selected. +50 each.`);
 if(forces>=3)add("forces_nature",conceptName("forces_nature","Forces of Nature Team"),forces*100,`${forces} Forces of Nature selected. +100 each.`);
 if(clones>=3)add("clone_army","Clone Army",clones*100,`${clones} Clone Pokémon selected. +100 each.`);
 if(fossils>=3)add("fossil_world","A World Before Our Time",fossils*100,`${fossils} fossil Pokémon selected. +100 each.`);
 if(pikachus>=2)add("pikachu_parade","Pikachu Parade",pikachus*100,`${pikachus} Pikachu variants selected. +100 each.`);
 if(anime>=3)add("anime_legends","Anime Legends Team",anime*100,`${anime} anime-related Pokémon selected. +100 each.`);
 if(coin>=2)add("pay_day","Pay Day",coin*100,`${coin} coin Pokémon selected. +100 each.`);
 if(cats>=3)add("kitty_dream","Kitty Dream",300,"Three or more cat-like Pokémon.");
 if(pseudo>=3)add("almost_legendary","Almost Legendary",pseudo*50,`${pseudo} pseudo-legendary family Pokémon selected. +50 each.`);
 if(legends>=5)add("myth_cabinet",conceptName("myth_cabinet"),300,"Five or more legendary/mythical Pokémon.");if(legends===4)add("myth_cabinet",conceptName("myth_cabinet"),250,"Four legendary/mythical Pokémon.");
 Object.entries(regions).forEach(([r,c])=>{if(c>=3){const key="region_"+r.toLowerCase();add(key,conceptName(key,REGION_CONCEPT_NAMES[r]),Math.min(300,c*50),`${c} Pokémon are from ${r}. +50 each.`);}});
 Object.entries(typeCounts).forEach(([t,c])=>{if(c>=6)add(t,conceptName(t),300,`Six active ${t}-type slots.`);else if(c>=3)add(t,conceptName(t),Math.min(300,c*50),`${c} active ${t}-type slots. +50 per fitting slot.`);});
 if(dogs>=3)add("dogs",conceptName("dogs"),300,"Three or more dog-like Pokémon.");if(horses>=3)add("horses",conceptName("horses"),300,"Three or more horse-like Pokémon.");if(babies>=3)add("babies",conceptName("babies"),300,"Three or more baby Pokémon.");
 if(gruntScore>=5)add("grunts",conceptName("grunts"),300,"Poison/Dark/Ghost crime-organization vibes.");if(shinyCount>=2)add("shinies",conceptName("shinies"),300,"Two or more shiny Pokémon.");if(megaCount&&legends>=2)add("illegal",conceptName("illegal"),300,"Mega plus multiple legendary threats.");
 if(!candidates.length)add("random",conceptName("random"),0,"No strong team concept detected.");
 const max=Math.max(...candidates.map(c=>c.bonus));const winners=candidates.filter(c=>c.bonus===max);const chosen=winners[Math.floor(Math.random()*winners.length)];cachedConceptKey=fp;cachedConceptResult=chosen;return chosen;
}
function conceptBonus(){let b=teamConcept().bonus||0;if(selectedItem&&selectedItem.id==="amulet_coin"&&b>0)b*=2;return b}


function arceusPlateBonus(){
 return selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&team.some(p=>p.name==="arceus")?300:0;
}
function questBreakdown(){
 const q=[];const bases=team.map(baseSpeciesName);const baseSet=new Set(bases);const hasAll=(set)=>[...set].every(n=>baseSet.has(n));
 if(primalQuestCompleted)q.push({name:"Ancient Orb",points:300,reason:"One Primal awakening unlocked by beating the Grunt."});
 if(kyuremFusionCompleted)q.push({name:"DNA Splicers",points:300,reason:"Kyurem fusion completed."});
 if(kinglyFusionCompleted)q.push({name:"Kingly Fusion",points:300,reason:"Calyrex fused with its loyal steed and opened one team slot."});
 if(rainbowFeatherCompleted)q.push({name:"Rainbow Feather",points:300,reason:"An Eeveelution answered the rainbow and became a legendary beast."});
 if(rotomPokedexQuestCompleted)q.push({name:"Rotom Pokédex",points:300,reason:"Rotom entered the Pokédex."});
 const arceus=arceusPlateBonus();if(arceus)q.push({name:"Arceus Plate Power",points:arceus,reason:"Arceus gained the selected Elemental Plate power."});
 const originCount=team.filter(p=>p.activeOrigin).length;if(originCount)q.push({name:"Origin Orb",points:originCount*300,reason:`${originCount} deity Origin Forme transformation${originCount>1?"s":""}.`});
 if(team.some(p=>p.activeUnbound))q.push({name:"Hoopa Unbound",points:500,reason:"Prison Bottle unlocked Hoopa Unbound."});
 if(hasAnyMewtwoForm()&&team.filter(isClonePokemon).length>=2)q.push({name:"Mewtwo Strikes Back",points:300,reason:"Mewtwo stood with at least two Clone Pokémon."});
 if(team.some(p=>p.glitchPokemon||p.name==="missingno"))q.push({name:"Glitch Quest",points:300,reason:"MissingNo. corrupted the final score calculation."});
 if(team.some(p=>p.crystalEvolution)||team.some((p,i)=>p.name==="crystal-steelix"&&selectedMegaIndex===i&&p.activeMega))q.push({name:"Crystal Evolution",points:300,reason:"Crystal Onix/Steelix reached its evolved crystal path."});
 const purified=team.filter(p=>p.purified).length;if(purified)q.push({name:"Shadow Purification",points:purified*500,reason:`${purified} Shadow Pokémon purified with Soothe Bell.`});
 if(hasAshGreninja()&&hasCapPikachu())q.push({name:"Ash's Bond",points:500,reason:"Ash-Greninja and Cap Pikachu activated Bond Phenomenon."});
 if(selectedItem&&selectedItem.id==="amulet_coin"&&team.some(isCoinPokemon))q.push({name:"Jackpot",points:500,reason:"Amulet Coin resonated with Gimmighoul/Gholdengo or coin Pokémon."});
 if(hasAll(WEATHER_TRIO))q.push({name:"Weather Trio",points:300,reason:"Kyogre, Groudon and Rayquaza gathered."});
 if(hasAll(LAKE_GUARDIANS))q.push({name:"Lake Guardians",points:300,reason:"Uxie, Mesprit and Azelf united."});
 if(hasAll(CREATION_GODS))q.push({name:"Creation Gods",points:600,reason:"Arceus, Dialga, Palkia and Giratina shaped the run."});
 return q;
}
function questBonusTotal(){return questBreakdown().reduce((s,q)=>s+q.points,0)}
function hiddenQuestBonus(){return questBonusTotal()}

function itemBonusTotal(){
 let bonus=0;
 if(selectedItem&&selectedItem.id==="soothe_bell")bonus+=100;
 if(selectedItem&&selectedItem.id==="expert_belt")bonus+=getTypes().length*20;
 bonus+=elementalPlateBonus();
 team.forEach((p,i)=>{bonus+=pokemonItemBonus(p,i)});
 return bonus;
}
function trainerSpriteCandidates(raw){
 let sprites=String(raw||"").split("|").filter(Boolean);
 let sources=[];
 sprites.forEach(s=>{
  if(s.startsWith("data:")||s.startsWith("http")||s.startsWith("file:")||s.includes("/")||/\.(png|webp|jpg|jpeg|gif)$/i.test(s)) sources.push(s);
  else {
   const file=SPRITE_FILE_MAP[s]||SPRITE_FILE_MAP[s.toLowerCase()];
   if(file)sources.push(LOCAL_TRAINER_BASE+file);
   sources.push(TRAINER_BASE+s+".png");
  }
 });
 return [...new Set(sources)];
}
function nameSlugForSprite(s){return String(s||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}
function randomTrainerSprite(label,sprite){
 const first=String(sprite||"").split("|").filter(Boolean)[0]||"";
 if(first.startsWith("data:")||first.startsWith("http")||first.includes("/")||/\.(png|webp|jpg|jpeg|gif)$/i.test(first))return first;
 const labelKey=nameSlugForSprite(label).split("-")[0];
 const spriteKey=nameSlugForSprite(first);
 const baseKey=spriteKey.split("-")[0];
 const variants=SPRITE_VARIANTS[spriteKey]||SPRITE_VARIANTS[labelKey]||SPRITE_VARIANTS[baseKey];
 if(variants&&variants.length)return LOCAL_TRAINER_BASE+variants[rand(0,variants.length-1)];
 const file=SPRITE_FILE_MAP[spriteKey];
 return file?LOCAL_TRAINER_BASE+file:first;
}
function withRandomTrainerSprite(obj){return {...obj,sprite:randomTrainerSprite(obj.name||obj.label,obj.sprite)}}
function imgTag(id,cls="trimg"){
 id=id||{name:"?",sprite:""}; id.name=id.name||"?";
 let init=String(id.name).split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase();
 let sources=trainerSpriteCandidates(id.sprite);
 let src=sources[0]||"";
 let fallbacks=sources.slice(1).join("|");
 return `<img class="${cls}" src="${src}" alt="${id.name}" data-fallbacks="${fallbacks}" data-init="${init}" onerror="trainerImgFallback(this)">`
}
function trainerImgFallback(img){
 const fs=(img.dataset.fallbacks||"").split("|").filter(Boolean);
 if(fs.length){
  img.src=fs.shift();
  img.dataset.fallbacks=fs.join("|");
  return;
 }
 const size=img.classList.contains("playerimg")?"f76":"f58";
 img.outerHTML=`<div class="fallback ${size}">${img.dataset.init||"?"}</div>`;
}
function getHighScore(){try{return Number(localStorage.getItem(HIGH_SCORE_KEY)||0)||0}catch(e){return 0}}
function setHighScore(v){try{localStorage.setItem(HIGH_SCORE_KEY,String(v||0))}catch(e){}}
function refreshHighScorePanels(v){["highScoreRound","highScoreScore","highScoreType","highScoreRank"].forEach(id=>{let el=document.getElementById(id);if(el)el.textContent=`High Score: ${v||0}`})}
function syncHighScore(){let high=getHighScore();if(isDraftComplete()){let score=finalScore();if(score>high){high=score;setHighScore(high)}const r=leagueResult();if(difficultyMode==="normal"&&r.legend)unlockMasterMode()}refreshHighScorePanels(high);return high}
function typePill(t){return `<span class="type">${t}</span>`}
function warn(t){let w=document.getElementById("warning");w.textContent=t;w.style.display=t?"block":"none"}
function isDraftComplete(){return team.length>=ROUNDS}
function getTypes(){return [...new Set(team.flatMap((p,i)=>activeTypes(p,i)))].sort()}
function pScore(p,i){ensureMissingNoGlitch();return scoreBaseFor(p,i)+(p.shiny?SHINY_BONUS:0)+(p.extraShinyBonus||0)+pokemonSpecialBonus(p)+pokemonItemBonus(p,i)+(p.glitchMod||0)}
function activeTypes(p,i){
 if(!p)return [];
 if(p.name==="arceus"&&selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&elementalPlateType!=="legend")return [elementalPlateType];
 if(p.activePrimal&&Array.isArray(p.activePrimal.types)&&p.activePrimal.types.length)return p.activePrimal.types;
 if(selectedMegaIndex===i&&p.activeMega&&Array.isArray(p.activeMega.types)&&p.activeMega.types.length)return p.activeMega.types;
 if(p.activeOrigin&&Array.isArray(p.activeOrigin.types))return p.activeOrigin.types;
 if(p.activeUnbound&&Array.isArray(p.activeUnbound.types))return p.activeUnbound.types;
 return Array.isArray(p.types)?p.types:[];
}
function elementalPlateBonus(){
 if(!selectedItem||selectedItem.id!=="elemental_plate"||!elementalPlateType)return 0;
 if(elementalPlateType==="legend"){let count=team.filter(isLegendaryLike).length;return Math.min(300,count*50);}
 let count=team.filter((p,i)=>activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType)).length;
 return Math.min(300,count*50);
}
function baseTotal(){return team.reduce((s,p,i)=>s+pScore(p,i),0)}
function finalScore(){return baseTotal()+(getTypes().length>=TYPE_BONUS_THRESHOLD?TYPE_BONUS_POINTS:0)+itemBonusTotal()+questBonusTotal()+conceptBonus()}

function activePokemonName(p,i){
 if(p.name==="arceus"&&selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&elementalPlateType!=="legend")return `${pretty(elementalPlateType)} Arceus`;
 if(p.activePrimal&&p.activePrimal.name)return p.activePrimal.name;
 if(selectedMegaIndex===i&&p.activeMega&&p.activeMega.name)return p.activeMega.name;
 if(p.activeOrigin&&p.activeOrigin.name)return p.activeOrigin.name;
 if(p.activeUnbound&&p.activeUnbound.name)return p.activeUnbound.name;
 if(p.activeGmax)return `Gigantamax ${p.displayName||pretty(p.name)}`;
 return p.displayName||pretty(p.name||"Pokemon");
}
function currentSprite(p,i){
 if(p.name==="arceus"&&selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&elementalPlateType!=="legend")return `https://play.pokemonshowdown.com/sprites/dex/arceus-${elementalPlateType}.png`;
 if(p.activeGmax&&p.activeGmax.sprite)return p.activeGmax.sprite;
 if(p.activeOrigin&&p.activeOrigin.sprite)return p.activeOrigin.sprite;
 if(p.activeUnbound&&p.activeUnbound.sprite)return p.activeUnbound.sprite;
 if(p.activePrimal)return (p.shiny&&p.activePrimal.shinySprite)?p.activePrimal.shinySprite:(p.activePrimal.sprite||p.sprite);
 if(selectedMegaIndex===i&&p.activeMega)return (p.shiny&&p.activeMega.shinySprite)?p.activeMega.shinySprite:(p.activeMega.sprite||p.sprite);
 return (p.shiny&&p.shinySprite?p.shinySprite:p.sprite);
}
let certificateAssetPreparationPromise=null;
async function prepareRemoteSpriteDataUrl(src){
 const s=String(src||'').trim();
 if(!s) return '';
 if(!/^https?:\/\//i.test(s)) return s;
 const safe=await fetchImageAsDataUrl(s);
 return safe||s;
}
async function prepareCertificateAssetsForCurrentRun(force=false){
 if(certificateAssetPreparationPromise && !force) return certificateAssetPreparationPromise;
 certificateAssetPreparationPromise=(async()=>{
  try{
   if(trainer){
    const live=document.querySelector('#playerSpriteBox img');
    const trainerSrc=(live&&live.src)||trainer.currentSpriteSrc||trainer.sprite||'';
    trainer.currentSpriteSrc=trainerSrc;
    trainer.certificateRenderSprite=await prepareRemoteSpriteDataUrl(trainerSrc);
   }
   for(let i=0;i<team.length;i++){
    const p=team[i];
    const src=currentSprite(p,i)||p.sprite||'';
    p.certificateRenderSprite=await prepareRemoteSpriteDataUrl(src);
   }
  }catch(err){ console.warn('Certificate asset preparation failed', err); }
 })();
 return certificateAssetPreparationPromise;
}

const TYPE_TEAM_POOL={
 normal:["snorlax","porygon-z","staraptor","tauros","blissey","slaking"],
 fire:["charizard","arcanine","ninetales","volcarona","talonflame","ceruledge"],
 water:["gyarados","lapras","milotic","greninja","kingdra","dondozo"],
 electric:["raichu","ampharos","luxray","magnezone","electivire","vikavolt"],
 grass:["venusaur","roserade","leafeon","serperior","tsareena","meowscarada"],
 ice:["lapras","mamoswine","weavile","glaceon","froslass","baxcalibur"],
 fighting:["machamp","lucario","gallade","hawlucha","kommo-o","annihilape"],
 poison:["nidoking","crobat","toxapex","roserade","dragalge","grafaiai"],
 ground:["nidoking","steelix","flygon","garchomp","krookodile","clodsire"],
 flying:["pidgeot","crobat","staraptor","talonflame","noivern","corviknight"],
 psychic:["alakazam","gardevoir","metagross","espeon","reuniclus","hatterene"],
 bug:["scizor","heracross","volcarona","vikavolt","lokix","frosmoth"],
 rock:["tyranitar","aerodactyl","lycanroc-midday","gigalith","garganacl","glimmora"],
 ghost:["gengar","mismagius","chandelure","aegislash","dragapult","skeledirge"],
 dragon:["dragonite","salamence","garchomp","hydreigon","dragapult","baxcalibur"],
 dark:["umbreon","tyranitar","hydreigon","bisharp","grimmsnarl","meowscarada"],
 steel:["steelix","scizor","metagross","lucario","corviknight","tinkaton"],
 fairy:["clefable","gardevoir","togekiss","sylveon","grimmsnarl","tinkaton"]
};
function generateTrainerTeam(theme,stage){
 const pool=TYPE_TEAM_POOL[String(theme||"").toLowerCase()]||TYPE_TEAM_POOL.normal;
 const count=stage==="Gym"?3:stage==="Elite Four"?5:6;
 return sample(pool,count).map(pretty);
}
function renderOpponentTeam(teamNames){
 if(!teamNames||!teamNames.length)return "";
 return renderOpponentTeamSprites(teamNames);
}





const PROFESSORS=[
 {name:"Professor Oak",sprite:"assets/professors/oak.png"},
 {name:"Professor Elm",sprite:"assets/professors/elm.png"},
 {name:"Professor Birch",sprite:"assets/professors/birch.png"},
 {name:"Professor Rowan",sprite:"assets/professors/rowan.png"},
 {name:"Professor Juniper",sprite:"assets/professors/juniper.png"},
 {name:"Professor Sycamore",sprite:"assets/professors/sycamore.png"},
 {name:"Professor Kukui",sprite:"assets/professors/kukui.png"},
 {name:"Professor Magnolia",sprite:"assets/professors/magnolia.png"},
 {name:"Professor Sonia",sprite:"assets/professors/sonia-professor.png"},
 {name:"Professor Laventon",sprite:"assets/professors/laventon.png"},
 {name:"Professor Sada",sprite:"assets/professors/sada.png"},
 {name:"Professor Turo",sprite:"assets/professors/turo.png"}
];
function professorSprite(name){
 const p=PROFESSORS.find(x=>x.name===name||x.name.replace("Professor ","").toLowerCase()===String(name||"").toLowerCase());
 return p?p.sprite:PROFESSORS[0].sprite;
}
function professorStrip(limit=12){
 return `<div class="profStrip">${PROFESSORS.slice(0,limit).map(p=>`<span class="profChip"><img src="${p.sprite}" onerror="this.style.display='none'">${p.name.replace("Professor ","")}</span>`).join("")}</div>`;
}

function profImg(key,cls=""){
 const src=professorSprite(key);
 return `<img class="${cls}" src="${src}" alt="" onerror="this.style.display='none'">`;
}
function profTitle(key,text){return `${profImg(key)}<span>${text}</span>`}
function professorIconRow(keys=["Oak","Elm","Birch","Rowan","Juniper","Sycamore","Kukui","Magnolia","Sonia","Laventon","Sada","Turo"]){
 return `<div class="profIconRow">${keys.map(k=>profImg(k)).join("")}</div>`;
}
function historyProfessorQuote(r){
 const score=Number(r.score)||0;
 const concept=String(r.concept?.name||"").toLowerCase();
 const quests=(r.events||[]).filter(e=>e.kind==="Quest").map(e=>String(e.text||""));
 const types=(r.team||[]).flatMap(p=>p.types||[]).map(t=>String(t).toLowerCase());
 const hasQuest=(q)=>quests.some(x=>x.includes(q));
 if(hasQuest("Creation Gods"))return {prof:"Sada",quote:"Ancient power answered your call. This team feels less drafted and more unearthed."};
 if(hasQuest("Weather Trio")||hasQuest("Ancient Orb")||hasQuest("Primal"))return {prof:"Kukui",quote:"That was not just a run, cousin. That was a storm wearing a trainer cap."};
 if(hasQuest("Rainbow Feather"))return {prof:"Sycamore",quote:"A graceful transformation. The bond between item and Pokémon became something extraordinary."};
 if(hasQuest("DNA Splicers")||hasQuest("Kingly Fusion"))return {prof:"Turo",quote:"A successful fusion event. The data is wild, elegant, and mildly terrifying."};
 if(concept.includes("fire")||types.filter(t=>t==="fire").length>=3)return {prof:"Birch",quote:"Wow, you got a spicy taste in Pokémon. That team could roast a field notebook."};
 if(concept.includes("paradox")||concept.includes("future"))return {prof:"Turo",quote:"Temporal anomalies, excellent pressure, questionable safety. I approve academically."};
 if(concept.includes("regi"))return {prof:"Rowan",quote:"A team shaped by ancient mechanisms. Slow, sturdy, and full of buried intent."};
 if(score>=4500)return {prof:"Oak",quote:"You got far. I am proud of you. That was a true Colosseum-clearing performance."};
 if(score>=4000)return {prof:"Oak",quote:"You got far. I am proud of you. That team had real champion spirit."};
 if(score>=3600)return {prof:"Juniper",quote:"A strong run with a clear identity. The data says you were close to greatness."};
 if(score>=3200)return {prof:"Sonia",quote:"Solid work. A few sharper choices and this story becomes a proper legend."};
 return {prof:"Elm",quote:"Every great trainer starts with experiments. This one had promising sparks."};
}
function renderHistoryProfessorQuote(r){
 const q=historyProfessorQuote(r);
 return `<div class="profQuote">${profImg(q.prof)}<div class="profQuoteText">“${q.quote}”</div></div>`;
}

function professorBanner(text,cls="codexProfessorBanner"){
 const picks=[PROFESSORS[0],PROFESSORS[5],PROFESSORS[6],PROFESSORS[10],PROFESSORS[11]];
 return `<div class="${cls}">${picks.map(p=>`<img src="${p.sprite}" title="${p.name}" onerror="this.style.display='none'">`).join("")}<span>${text}</span></div>`;
}


const UI_THEME_KEY="pokemon_colosseum_ui_theme_v1";
const UI_THEMES={
 standard:"Standard",
 darkmode:"Dark Mode",
 stadium:"Battle Stadium",
 lab:"Research Lab",
 pokedex:"Pokédex League"
};
function getUiTheme(){
 try{return localStorage.getItem(UI_THEME_KEY)||"standard"}catch(e){return "standard"}
}
function setUiTheme(theme){
 if(!UI_THEMES[theme])theme="standard";
 try{localStorage.setItem(UI_THEME_KEY,theme)}catch(e){}
 applyUiTheme(theme);
 addRunEvent("UI",`UI style set to ${UI_THEMES[theme]}.`,1);
}
function applyUiTheme(theme=getUiTheme()){
 if(!UI_THEMES[theme])theme="standard";
 const body=document.body;
 if(body){
  body.classList.remove("theme-standard","theme-darkmode","theme-stadium","theme-lab","theme-pokedex");
  body.classList.add("theme-"+theme);
 }
 const badge=document.getElementById("designBadge");
 if(badge)badge.textContent=UI_THEMES[theme]+" UI";
 const select=document.getElementById("uiStyleSelect");
 if(select&&select.value!==theme)select.value=theme;
 const introSelect=document.getElementById("introUiStyleSelect");
 if(introSelect&&introSelect.value!==theme)introSelect.value=theme;
}

const INTRO_HIDE_KEY="pokemon_colosseum_hide_intro_v1";
function getIntroHidden(){
 try{return localStorage.getItem(INTRO_HIDE_KEY)==="1"}catch(e){return false}
}
function setIntroHidden(v){
 try{localStorage.setItem(INTRO_HIDE_KEY,v?"1":"0")}catch(e){}
 const box=document.getElementById("introHideToggle");
 if(box)box.checked=!!v;
}
function fillIntroBackdrop(){
 const box=document.getElementById("introBackdrop");
 if(!box||box.dataset.ready)return;
 const trainers=[...GYM_LEADERS.slice(0,16),...ELITE_FOUR.slice(0,4),...CHAMPIONS.slice(0,4),...LEGENDS.slice(0,4)];
 box.innerHTML=trainers.map(t=>{
  const obj=t.trainer||t;
  const src=randomTrainerSprite(obj.name||obj.label||"",obj.sprite||"");
  return `<img src="${src}" onerror="this.style.display='none'">`;
 }).join("");
 box.dataset.ready="1";
}
function openIntroPage(manual=false){
 fillIntroBackdrop();
 const overlay=document.getElementById("introOverlay");
 const toggle=document.getElementById("introHideToggle");
 if(toggle)toggle.checked=getIntroHidden();
 applyUiTheme();
 if(overlay)overlay.style.display="block";
}
function closeIntroPage(){
 const overlay=document.getElementById("introOverlay");
 if(overlay)overlay.style.display="none";
}
function maybeShowIntroOnNewRun(){
 if(!getIntroHidden())setTimeout(()=>openIntroPage(false),250);
}
function toggleIntroPreferenceFromSettings(){
 setIntroHidden(!getIntroHidden());
 render();
}

const MASTER_UNLOCK_KEY="pokemon_colosseum_master_unlocked_v1";
function isMasterUnlocked(){
 try{return localStorage.getItem(MASTER_UNLOCK_KEY)==="1"}catch(e){return false}
}
function unlockMasterMode(){
 if(isMasterUnlocked())return false;
 try{localStorage.setItem(MASTER_UNLOCK_KEY,"1")}catch(e){}
 showQuestToast("Master Mode unlocked! Legendary Trainer defeated on Normal.");
 addRunEvent("Unlock","Master Mode unlocked by clearing the Legendary Trainer on Normal.");
 return true;
}

function difficultyOffset(){return difficultyMode==="master"?1000:(difficultyMode==="easy"?-500:0)}
function setDifficultyMode(mode){
 const next=mode==="master"?"master":(mode==="easy"?"easy":"normal");
 if(next==="master"&&!isMasterUnlocked()){
  showQuestToast("Master Mode locked: beat Normal once to unlock.");
  warn("Master Mode: Beat Normal once to unlock.");
  render();
  return;
 }
 if(team.length>0||isDraftComplete()){
  warn("Difficulty can only be changed before the draft starts.");
  return;
 }
 difficultyMode=next;
 league=createLeague();
 addRunEvent("Difficulty",`Difficulty set to ${difficultyLabel()}.`,1);
 warn(next==="master"?"Master Mode active. Ultimate challenge enabled.":next==="easy"?"Easy Mode active. League requirements are reduced by 500.":"Normal Mode active.");
 render();
}
function difficultyLabel(){return difficultyMode==="master"?"Master Mode":(difficultyMode==="easy"?"Easy Mode":"Normal Mode")}
const QUEST_CATALOG=[
 {name:"Ancient Orb",rarity:"Legendary",desc:"Beat the Grunt, then awaken either Groudon or Kyogre into Primal form. One orb only."},
 {name:"DNA Splicers",rarity:"Rare",desc:"Kyurem fuses with Reshiram or Zekrom, gains +300, and opens one team slot."},
 {name:"Kingly Fusion",rarity:"Rare",desc:"Calyrex fuses with Glastrier or Spectrier, gains +300, and opens one team slot."},
 {name:"Rainbow Feather",rarity:"Rare",desc:"Vaporeon, Flareon or Jolteon becomes Suicune, Entei or Raikou and gains +300."},
 {name:"Rotom Pokédex",rarity:"Uncommon",desc:"Rotom enters the Pokédex, gains +300, and makes Pokédex scans reusable."},
 {name:"Arceus Plate Power",rarity:"Mythic",desc:"Arceus gains the selected Elemental Plate power and +300."},
 {name:"Regigigas Awakening",rarity:"Rare",desc:"3+ Regi Pokémon guarantee Regigigas in the next draft, or allow a final replacement."},
 {name:"Weather Trio",rarity:"Legendary",desc:"Kyogre, Groudon and Rayquaza gather for +300."},
 {name:"Lake Guardians",rarity:"Legendary",desc:"Uxie, Mesprit and Azelf unite for +300."},
 {name:"Creation Gods",rarity:"Mythic",desc:"Arceus, Dialga, Palkia and Giratina shape the run for +600."}
];
function regiCount(){return team.map(baseSpeciesName).filter(n=>REGI_NAMES.has(n)).length}
function hasRegigigas(){return team.map(baseSpeciesName).includes("regigigas")}
function isRegigigasQuestEligible(){return regiCount()>=3&&!hasRegigigas()&&!regigigasQuestOffered}

function createLeague(){
 let gyms=sample(GYM_LEADERS,16).map((l,i)=>{let tr=withRandomTrainerSprite(l);return{stage:"Gym",number:i+1,trainer:tr,name:tr.name,theme:tr.type,badge:tr.badge,required:Math.round(2100+i*(1200/15))+difficultyOffset(),team:generateTrainerTeam(tr.type,"Gym")}});
 let eliteReq=[3400,3565,3730,3900].map(x=>x+difficultyOffset());
 let e=sample(ELITE_FOUR,4).map((m,i)=>{let tr=withRandomTrainerSprite(m);return{stage:"Elite Four",number:i+1,trainer:tr,name:tr.name,theme:tr.type,required:eliteReq[i]||3600,team:generateTrainerTeam(tr.type,"Elite Four")}});
 let c=withRandomTrainerSprite(sample(CHAMPIONS,1)[0]);
 let champ={stage:"Champion",number:1,trainer:c,name:c.name,theme:c.type,required:4250+difficultyOffset(),team:generateTrainerTeam(c.type,"Champion")};
 let legendPool=LEGENDS.filter(l=>l.name!==c.name);
 let legend=withRandomTrainerSprite(sample(legendPool.length?legendPool:LEGENDS,1)[0]);
 legend.required=4500+difficultyOffset();
 legend.team=generateTrainerTeam(legend.type||"dragon","Champion");
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
  <li>Item bonus, quest bonus and concept bonus are shown separately.</li>
  <li>Easy: every challenger requires 500 fewer points. Normal: standard climb. Master: ultimate challenge after beating Normal once.</li><li>Some quests are hidden. You are not expected to know all of them at the start. Discover them by experimenting.</li>
 </ul></section>
 <section class="codexCard"><h3>${profTitle("Elm","Items")}</h3><ul>${itemLines}</ul></section>
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
function showdownSpriteName(name){return String(name||"").toLowerCase().replace(/♀/g,"f").replace(/♂/g,"m").replace(/[^a-z0-9-]+/g,"-").replace(/^-+|-+$/g,"")}
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
  else if(selectedItem&&selectedItem.id==="dna_splicers"&&!specialItemDraftUsed){names=sampleDraftNames(available.filter(n=>n!=="kyurem"));names[0]="kyurem";if(Math.random()<0.75)names[rand(1,Math.max(1,names.length-1))]=Math.random()<0.5?"reshiram":"zekrom";specialItemDraftUsed=true;itemPhase=true;}
  else if(selectedItem&&selectedItem.id==="fossil"&&!specialItemDraftUsed){names=sample([...FOSSIL_FAMILIES].filter(n=>!usedNames.has(n)),OPTIONS_PER_ROUND);specialItemDraftUsed=true;itemPhase=true;}
  else if(selectedItem&&selectedItem.id==="lucky_egg"&&!specialItemDraftUsed){names=sample([...BABY_SET].filter(n=>!usedNames.has(n)),OPTIONS_PER_ROUND);specialItemDraftUsed=true;itemPhase=true;}
  else if(regigigasGuaranteedNext&&!usedNames.has("regigigas")){names=sampleDraftNames(available.filter(n=>n!=="regigigas"));names[0]="regigigas";regigigasGuaranteedNext=false;}
  else names=sampleDraftNames(available);
  while(names.length<OPTIONS_PER_ROUND)names.push(sample(available,1)[0]||"pikachu");
  let base=await Promise.all(names.map(fetchPokemon));
  currentOptions=await Promise.all(base.map(enrichMega));
  currentOptions=currentOptions.map(p=>{let out=eternalFloetteRoll()?makeEternalFloette():maybeReplaceWithSpecialPokemon(p);out=addMegaFormsForSpecial(out);if(itemPhase)out.itemGuaranteed=true;return out;});
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


async function openPostDraftItemModal(){
 if(!selectedItem)return false;
 if(selectedItem.id==="origin_orb"&&!originOrbResolved){const eligible=team.map((p,i)=>ORIGIN_FORMS[p.name]?i:null).filter(i=>i!==null);if(eligible.length){document.getElementById("itemModalTitle").textContent="Use Origin Orb";document.getElementById("itemModalText").textContent="Transform Dialga, Palkia or Giratina into Origin Forme. You may transform all eligible deities.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Origin Forme, +300 bonus.</div></div><button type="button" class="btn btn-dark" onclick="useOriginOrb(${i})">Transform</button></div>`).join("")+`<div class="modalactions"><button class="btn btn-ghost" onclick="originOrbResolved=true;closeItemModal()">Done</button></div>`;document.getElementById("itemModal").style.display="flex";return true;}originOrbResolved=true;}
 if(selectedItem.id==="prison_bottle"&&!prisonBottleResolved){const eligible=team.map((p,i)=>p.name==="hoopa"?i:null).filter(i=>i!==null);if(eligible.length){document.getElementById("itemModalTitle").textContent="Use Prison Bottle";document.getElementById("itemModalText").textContent="Unlock Hoopa Unbound and complete its hidden quest.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Hoopa Unbound, +80 BST and +500 quest.</div></div><button type="button" class="btn btn-dark" onclick="usePrisonBottle(${i})">Open Bottle</button></div>`).join("");document.getElementById("itemModal").style.display="flex";return true;}prisonBottleResolved=true;}
 if(selectedItem.id==="gigantamax_potion"&&!gigantamaxUsed){const eligible=team.map((p,i)=>GMAX_FORMS[specialBaseKey(p)]?i:null).filter(i=>i!==null);if(eligible.length){document.getElementById("itemModalTitle").textContent="Use Gigantamax Potion";document.getElementById("itemModalText").textContent="Choose one eligible Pokémon to Gigantamax. Not a Mega Evolution.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Doubles HP contribution. Fallback +150.</div></div><button type="button" class="btn btn-dark" onclick="useGigantamax(${i})">Gigantamax</button></div>`).join("");document.getElementById("itemModal").style.display="flex";return true;}gigantamaxUsed=true;}
 if(selectedItem.id==="soothe_bell"){const eligible=team.map((p,i)=>(p.specialTags||[]).includes("shadow")&&!p.purified?i:null).filter(i=>i!==null);if(eligible.length){document.getElementById("itemModalTitle").textContent="Shadow Purification";document.getElementById("itemModalText").textContent="Soothe Bell can purify Shadow Lugia or Shadow Mewtwo.";document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Removes Shadow state, adds Purified +300 and quest +500.</div></div><button type="button" class="btn btn-dark" onclick="purifyShadow(${i})">Purify</button></div>`).join("")+`<div class="modalactions"><button class="btn btn-ghost" onclick="closeItemModal()">Skip</button></div>`;document.getElementById("itemModal").style.display="flex";return true;}}
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
 }
 document.getElementById("itemModal").style.display="none";
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
  {label:"Team Concept Bonus",points:conceptBonus(),note:teamConcept().name||"No concept."}
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
   <div class="scoreBreakMini"><h4>Concept Details</h4><ul><li><b>${concept.name}</b>: +${concept.bonus||0}.</li><li>${concept.reason||"No concept reason."}</li></ul></div>
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
   rotomPokedex:true,types:form.types,bst:form.scoreBst,sprite:p.sprite,shinySprite:p.shinySprite,shiny:p.shiny,shinyBonus:p.shiny?SHINY_BONUS:0,rotomFormChosen:true,rotomForm:"pokedex",megaForms:[],activeMega:null};
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
function useOriginOrb(i){const p=team[i];const form=ORIGIN_FORMS[p.name];if(!form)return;p.activeOrigin={name:form.displayName,scoreBst:form.bst||p.bst,types:form.types||p.types,sprite:specialAsset(form.sprite)};p.originBonus=300;p.displayName=form.displayName;certificateAssetPreparationPromise=null;addRunEvent("Quest",`${form.displayName} awakened through the Origin Orb: +300.`,ROUNDS);render();const remaining=team.some((x,idx)=>idx!==i&&ORIGIN_FORMS[x.name]&&!x.activeOrigin);if(!remaining){originOrbResolved=true;document.getElementById("itemModal").style.display="none";continueAfterItemChoice();}else openPostDraftItemModal();}
function usePrisonBottle(i){const p=team[i];p.activeUnbound={name:"Hoopa Unbound",scoreBst:(p.bst||600)+80,types:["psychic","dark"],sprite:specialAsset("HoopaUnbound.png")};p.displayName="Hoopa Unbound";p.unbound=true;prisonBottleResolved=true;certificateAssetPreparationPromise=null;addRunEvent("Quest","Hoopa Unbound completed: +500. Prison Bottle opened Hoopa's true form.",ROUNDS);document.getElementById("itemModal").style.display="none";continueAfterItemChoice();render();}
function purifyShadow(i){const p=team[i];p.purified=true;p.purifiedBonus=300;p.specialBonus=Math.max(0,(p.specialBonus||0)-300);p.specialTags=(p.specialTags||[]).filter(t=>t!=="shadow");if(p.name==="shadow-lugia"){p.name="lugia";p.displayName="Purified Lugia";p.sprite=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/249.png`;p.types=["psychic","flying"];p.bst=680;}if(p.name==="shadow-mewtwo"){p.name="mewtwo";p.displayName="Purified Mewtwo";p.sprite=`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/150.png`;p.types=["psychic"];p.bst=680;}certificateAssetPreparationPromise=null;addRunEvent("Quest",`${p.displayName} purified with Soothe Bell: +500 quest, +300 purified label.`,ROUNDS);render();openPostDraftItemModal();}

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
  const activeBst=selectedMegaIndex===i&&p.activeMega?p.activeMega.scoreBst:p.bst;
  const bstText=`${activeBst} BST${p.lightBall?" • Light Ball":""}`;
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
 teamList.innerHTML=team.length?team.map((p,i)=>`<div class="teamitem ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}" alt="${p.displayName}"><div style="min-width:0;flex:1"><div class="tname">${i+1}. ${p.shiny?'✨ ':''}${activePokemonName(p,i)}</div><div class="tscore">${over?`${pScore(p,i)} pts${p.activePrimal?` as ${p.activePrimal.name}`:""}${p.activeMega&&selectedMegaIndex===i?` as ${p.activeMega.name}`:""}${p.fusedWith?` fused with ${pretty(p.fusedWith)}`:""}${p.shiny?` incl. +${SHINY_BONUS} shiny`:""}${p.extraShinyBonus?` +${p.extraShinyBonus} second shiny`:""}${p.eternalBonus?` +${p.eternalBonus} Eternal Flower`:""}${p.name==="arceus"&&arceusPlateBonus()?` +300 Plate Power`:""}`:"Score hidden"}</div><div class="types" style="margin-top:6px">${activeTypes(p,i).map(typePill).join("")}</div>${over&&p.megaForms&&p.megaForms.length?`<div class="megaBtns">${p.megaForms.map((m,mi)=>`<button class="megaBtn ${selectedMegaIndex===i&&p.activeMega&&p.activeMega.name===m.name?'active':''}" onclick="selectMega(${i},${mi})">Mega: ${m.name.replace('Mega ','')}</button>`).join("")}</div>`:""}</div></div>`).join(""):'<div class="card">No Pokémon drafted yet. The Pokéball is hungry.</div>';
 document.getElementById("typesCovered").innerHTML=types.length?types.map(typePill).join(""):'<span style="color:#cbd5e1;font-weight:900">None yet</span>';
 document.getElementById("typeNeed").textContent=types.length>=TYPE_BONUS_THRESHOLD?"Type bonus secured: +100.":`${Math.max(0,TYPE_BONUS_THRESHOLD-types.length)} more unique type(s) needed.`;
 if(!trainer){renderTrainerSelection();return}
 if(!selectedItem){renderItemSelection();return}
 if(selectedItem.id==="elemental_plate"&&!elementalPlateType){renderPlateSelectionScreen();return}
 let area=document.getElementById("gameArea"), title=document.getElementById("mainTitle");
 if(generating){title.textContent="Rolling wild options...";area.className="";area.innerHTML='<div class="card"><span class="loader"></span>Loading six Pokémon...</div>';return}
 if(over){currentOptions=[];renderResults(area,title,res);return}
 if(isDraftComplete()){currentOptions=[];renderResults(area,title,leagueResult());return}
 title.innerHTML=`Choose One ${apiIssue?'<button class="btn btn-danger" style="margin-left:12px" onclick="retryApiRoll()">Retry API Roll</button>':''}${selectedItem&&selectedItem.id==="ability_capsule"&&!abilityCapsuleUsed?'<button class="btn btn-ghost" style="margin-left:12px" onclick="rerollCurrentOptions()">Use Ability Capsule</button>':''}${selectedItem&&selectedItem.id==="master_ball"&&!masterBallUsed?'<button class="btn btn-ghost" style="margin-left:12px" onclick="useMasterBallNextRoll()">Use Master Ball</button>':''}${selectedItem&&selectedItem.id==="repel"&&!repelUsed?'<button class="btn btn-ghost" style="margin-left:12px" onclick="useRepel()">Use Repel</button>':''}`;
 area.className="options";const dexActive=selectedItem&&selectedItem.id==="pokedex"&&pokedexRevealRound===team.length+1;
 area.innerHTML=(canUsePokedex()?`<div class="card" style="grid-column:1/-1"><div class="top"><div><h3 class="name">📘 Use Pokédex</h3><div class="hidden">${rotomPokedexQuestCompleted?"Rotom Pokédex can scan every round.":"Reveal BST values for this draft round."}</div></div><button class="btn btn-dark" onclick="event.stopPropagation();usePokedex()">Scan Options</button></div></div>`:"")+currentOptions.map((p,i)=>`<button class="card ${p.shiny?'shiny-card':''}" onclick="pickPokemon(${i})"><div class="top"><div><h3 class="name">${p.shiny?'✨ ':''}${p.displayName}</h3>${p.shiny?'<div class="shinylabel">✨ Shiny spotted! +300 later</div>':''}${p.lightBall?'<div class="shinylabel">⚡ Light Ball! BST doubled</div>':''}${p.eternalFloette?`<div class="shinylabel">🌸 Eternal Flower! +${ETERNAL_FLOETTE_BONUS}</div>`:""}${p.special?`<div class="speciallabel">Special +${p.specialBonus||0}</div>`:""}${p.itemGuaranteed?`<div class="itemlabel">${ITEM_DRAFT_LABEL}</div>`:""}${p.repelReplacement?`<div class="itemlabel">Repel replacement</div>`:""}<div class="hidden">${dexActive?`Pokédex scan: ${p.bst} BST`:"BST hidden until the League test."}</div></div><div class="mystery">${dexActive?p.bst:"???"}</div></div><div class="spritebox"><img src="${(p.shiny&&p.shinySprite?p.shinySprite:p.sprite)||''}" alt="${p.displayName}"></div><div class="types">${(p.types||[]).map(typePill).join("")}</div><div class="hidden">${p.itemGuaranteed?ITEM_DRAFT_LABEL:MASTER_BALL_LEGENDARY_POOL.includes(p.name)?"Master Ball roll: legendary-tier option.":(p.megaForms&&p.megaForms.length)?"Can Mega Evolve if chosen.":"No visible Mega option."}</div></button>`).join("");
}

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
  </div>

  <div class="revealteam">
   ${team.map((p,i)=>`<div class="reveal ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}"><div><div class="tname">${i+1}. ${p.shiny?'✨ ':''}${activePokemonName(p,i)}</div><div class="tscore">${p.bst} BST${selectedMegaIndex===i&&p.activeMega?` → ${p.activeMega.scoreBst} as ${p.activeMega.name}`:""}${p.shiny?` + ${SHINY_BONUS} shiny bonus`:""}${p.lightBall?` + Light Ball doubled BST`:""}${p.eternalBonus?` + ${p.eternalBonus} Eternal Flower bonus`:""}${p.extraShinyBonus?` + ${p.extraShinyBonus} second shiny bonus`:""}${p.name==="arceus"&&arceusPlateBonus()?` +300 Arceus Plate quest`:""}${p.activePrimal?` → ${p.activePrimal.scoreBst} as ${p.activePrimal.name}`:""}${p.fusedWith?` + DNA fusion with ${pretty(p.fusedWith)}`:""}${selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType)?` +50 ${elementalPlateType} plate`:""}</div><div class="types" style="margin-top:6px">${activeTypes(p,i).map(typePill).join("")}</div></div><div class="rscore">${pScore(p,i)}</div></div>`).join("")}
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
function battleCard(b){return`<div class="battle ${b.won?'win':'loss'}"><div class="trainerrow">${imgTag(b.trainer)}<div><div class="label">${b.stage} ${b.stage==="Champion"?"":b.number}</div><div class="name" style="font-size:16px">${b.name}</div><div class="types" style="margin-top:6px">${typePill(b.theme)}</div>${b.badge?`<div class="tscore">${b.badge}</div>`:""}</div>${badgeImg(b.badge,b.theme,b.stage)}</div>${renderOpponentTeam(b.team)}<div class="top"><div class="tscore">Required: ${b.required}</div><div class="result ${b.won?'win':'loss'}">${b.sash?'Sash Save':b.won?'Cleared':'Stopped'}</div></div></div>`}
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
   bst:(selectedMegaIndex===i&&p.activeMega&&p.activeMega.scoreBst)?p.activeMega.scoreBst:p.bst,
   shiny:!!p.shiny,
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

boot();
