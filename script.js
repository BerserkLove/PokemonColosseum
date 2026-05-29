
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
 porygon:"porygon2",porygon2:"porygon-z",omanyte:"omastar",kabuto:"kabutops",munchlax:"snorlax",dratini:"dragonair",dragonair:"dragonite",

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
const ITEM_POOL=[
 {id:"shiny_charm",name:"Shiny Charm",icon:"✨",desc:"Triples shiny odds. Shiny chance becomes 1/256 instead of 1/1024."},
 {id:"soothe_bell",name:"Soothe Bell",icon:"🔔",desc:"Adds +100 to your final League Power."},
 {id:"evolution_stone",name:"Evolution Stone",icon:"💎",desc:"After the draft, evolve one eligible selected Pokémon. The evolved Pokémon's BST counts."},
 {id:"escape_rope",name:"Escape Rope",icon:"🪢",desc:"During a grunt ambush, unlocks Escape Safely. No Pokémon is stolen."},
 {id:"master_ball",name:"Master Ball",icon:"🟣",desc:"One random draft phase becomes legendary-only options."},
 {id:"link_cable",name:"Link Cable",icon:"🔗",desc:"After the draft, trade one selected Pokémon for a random different Pokémon."},
 {id:"elemental_plate",name:"Elemental Plate",icon:"🪨",desc:"Choose one Pokémon type. Each selected Pokémon with that type adds +50 League Power, capped at +300."},
 {id:"focus_sash",name:"Focus Sash",icon:"🎗️",desc:"Once, if you fail a League battle by 100 points or less, you still clear it."},
 {id:"ability_capsule",name:"Ability Capsule",icon:"💊",desc:"Once during the draft, reroll the current six Pokémon options."},
 {id:"expert_belt",name:"Expert Belt",icon:"🥋",desc:"Adds +20 per unique active type. Mega Evolution type changes count."}
];
const SPECIAL_PIKACHU_ODDS=1024;
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
 garchomp:[{name:"Mega Garchomp Z",types:["dragon","ground"]}],
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
function customMegaFormsFor(p){
 const forms=CUSTOM_MEGA_FORMS[p.name]||[];
 return forms.map(m=>({
  name:m.name,
  scoreBst:m.scoreBst||p.bst+100,
  sprite:m.sprite||customMegaAsset(m.name,false)||p.sprite,
  shinySprite:m.shinySprite||customMegaAsset(m.name,true)||p.shinySprite||p.sprite,
  types:m.types||p.types,
  custom:true
 }));
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
{name:"slaking",displayName:"Slaking",dexId:289,types:["normal"],bst:670,megaForms:[],sprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",shinySprite:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/289.png"}];

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

let apiIssue=false;let battleSimulationShown=false;let battleSimulationIndex=0;let battleSimulationBattles=[];let celebrationShown=false;let poolNames=[],usedNames=new Set(),team=[],currentOptions=[],generating=false,league=createLeague(),gruntRound=rand(1,6),gruntResolved=false,pendingGrunt=null,eventLog=null,trainerType=null,trainer=null,selectedMegaIndex=null,megaPromptShown=false,itemChoices=[],selectedItem=null,itemUsed=false,masterBallPhase=null,abilityCapsuleUsed=false,elementalPlateType=null,evolutionUsed=false,linkCableUsed=false,focusSashUsed=false;

function rand(a,b){return Math.floor(Math.random()*(b-a+1))+a}function sample(arr,n){let c=[...arr];for(let i=c.length-1;i>0;i--){let j=Math.floor(Math.random()*(i+1));[c[i],c[j]]=[c[j],c[i]]}return c.slice(0,n)}
function pretty(s){return s.split("-").map(p=>p.charAt(0).toUpperCase()+p.slice(1)).join(" ")}function bst(stats){return stats.reduce((s,x)=>s+x.base_stat,0)}function megaSlug(name){return String(name||"").toLowerCase().replace(/[^a-z0-9]+/g,"-").replace(/^-+|-+$/g,"")}function customMegaAsset(name,shiny=false){const slug=megaSlug(name);return shiny?`assets/custom-mega/shiny/${slug}.png`:`assets/custom-mega/${slug}.png`}function shinyRoll(){let odds=selectedItem&&selectedItem.id==='shiny_charm'?256:SHINY_ODDS;return rand(1,odds)===1}
function specialPikachuRoll(){return rand(1,SPECIAL_PIKACHU_ODDS)===1}
function makeSpecialPikachu(){
 let form=sample(SPECIAL_PIKACHU_FORMS,1)[0];
 return {
  name:form.name,
  displayName:form.label,
  types:["electric"],
  bst:640,
  megaForms:[],
  activeMega:null,
  sprite:form.sprite,
  shinySprite:form.sprite,
  shiny:false,
  shinyBonus:0,
  lightBall:true,dexId:25
 };
}
function initItemChoices(){itemChoices=sample(ITEM_POOL,3);selectedItem=null;itemUsed=false;masterBallPhase=null;abilityCapsuleUsed=false;elementalPlateType=null;evolutionUsed=false;linkCableUsed=false;focusSashUsed=false;celebrationShown=false;battleSimulationShown=false;battleSimulationIndex=0;battleSimulationBattles=[];masterBallReady=false;masterBallUsed=false}
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
 const allTypes=["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
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
 porygon2:["porygon-z"]
};
function evolutionChoicesFor(p){
 if(SPLIT_EVOLUTION_MAP[p.name])return SPLIT_EVOLUTION_MAP[p.name];
 if(EVOLUTION_MAP[p.name])return [EVOLUTION_MAP[p.name]];
 return [];
}

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
 const fp=conceptFingerprint();
 if(cachedConceptResult&&cachedConceptKey===fp)return cachedConceptResult;

 const candidates=[];
 const add=(key,name,bonus,reason)=>candidates.push({key,name,bonus,reason});
 const typeCounts={};
 team.forEach((p,i)=>activeTypes(p,i).forEach(t=>{t=t.toLowerCase();typeCounts[t]=(typeCounts[t]||0)+1}));
 const legends=team.filter(isLegendaryLike).length;
 const regions={};
 team.forEach(p=>{let r=pokemonRegion(p);if(r)regions[r]=(regions[r]||0)+1});
 const fullRegion=Object.entries(regions).find(([r,c])=>c===6);
 const dogs=team.filter(p=>DOG_NAMES.has(p.name)).length;
 const horses=team.filter(p=>HORSE_NAMES.has(p.name)).length;
 const babies=team.filter(p=>BABY_NAMES.has(p.name)).length;
 const gruntScore=team.reduce((s,p,i)=>s+activeTypes(p,i).filter(t=>GRUNT_TYPES.has(t.toLowerCase())).length,0);
 const shinyCount=team.filter(p=>p.shiny).length;
 const megaCount=team.filter((p,i)=>selectedMegaIndex===i&&p.activeMega).length;

 if(legends===6)add("legendary_all",conceptName("legendary_all"),300,"All six Pokémon are legendary or mythical tier.");
 if(legends>=5)add("myth_cabinet",conceptName("myth_cabinet"),300,"Five or more legendary/mythical Pokémon.");
 if(legends===4)add("myth_cabinet",conceptName("myth_cabinet"),250,"Four legendary/mythical Pokémon.");
 if(fullRegion){const key="region_"+fullRegion[0].toLowerCase();add(key,conceptName(key,REGION_CONCEPT_NAMES[fullRegion[0]]),300,`All six Pokémon are from ${fullRegion[0]}.`);}

 Object.entries(typeCounts).forEach(([t,c])=>{
  if(c>=6)add(t,conceptName(t),300,`Six active ${t}-type slots.`);
  else if(c>=3)add(t,conceptName(t),Math.min(300,c*50),`${c} active ${t}-type slots. +50 per fitting slot.`);
 });

 if(dogs>=3)add("dogs",conceptName("dogs"),300,"Three or more dog-like Pokémon.");
 if(horses>=3)add("horses",conceptName("horses"),300,"Three or more horse-like Pokémon.");
 if(babies>=3)add("babies",conceptName("babies"),300,"Three or more baby Pokémon.");
 if(gruntScore>=5)add("grunts",conceptName("grunts"),300,"Poison/Dark/Ghost crime-organization vibes.");
 if(shinyCount>=2)add("shinies",conceptName("shinies"),300,"Two or more shiny Pokémon.");
 if(megaCount&&legends>=2)add("illegal",conceptName("illegal"),300,"Mega plus multiple legendary threats.");
 if(!candidates.length)add("random",conceptName("random"),0,"No strong team concept detected.");

 const max=Math.max(...candidates.map(c=>c.bonus));
 const winners=candidates.filter(c=>c.bonus===max);
 const chosen=winners[Math.floor(Math.random()*winners.length)];
 cachedConceptKey=fp;
 cachedConceptResult=chosen;
 return chosen;
}
function conceptBonus(){return teamConcept().bonus||0}

function itemBonusTotal(){
 let bonus=0;
 if(selectedItem&&selectedItem.id==="soothe_bell")bonus+=100;
 if(selectedItem&&selectedItem.id==="expert_belt")bonus+=getTypes().length*20;
 bonus+=elementalPlateBonus();
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
 let init=id.name.split(" ").map(x=>x[0]).join("").slice(0,2).toUpperCase();
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
function syncHighScore(){let high=getHighScore();if(isDraftComplete()){let score=finalScore();if(score>high){high=score;setHighScore(high)}}refreshHighScorePanels(high);return high}
function typePill(t){return `<span class="type">${t}</span>`}
function warn(t){let w=document.getElementById("warning");w.textContent=t;w.style.display=t?"block":"none"}
function isDraftComplete(){return team.length>=ROUNDS}
function getTypes(){return [...new Set(team.flatMap((p,i)=>activeTypes(p,i)))].sort()}
function pScore(p,i){let base=(selectedMegaIndex===i&&p.activeMega)?p.activeMega.scoreBst:p.bst;return base+(p.shiny?SHINY_BONUS:0)}
function activeTypes(p,i){
 if(selectedMegaIndex===i&&p.activeMega&&p.activeMega.types&&p.activeMega.types.length)return p.activeMega.types;
 return p.types;
}
function elementalPlateBonus(){
 if(!selectedItem||selectedItem.id!=="elemental_plate"||!elementalPlateType)return 0;
 let count=team.filter((p,i)=>activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType)).length;
 return Math.min(300,count*50);
}
function baseTotal(){return team.reduce((s,p,i)=>s+pScore(p,i),0)}
function finalScore(){return baseTotal()+(getTypes().length>=TYPE_BONUS_THRESHOLD?TYPE_BONUS_POINTS:0)+itemBonusTotal()+conceptBonus()}
function currentSprite(p,i){if(selectedMegaIndex===i&&p.activeMega){return (p.shiny&&p.activeMega.shinySprite)?p.activeMega.shinySprite:(p.activeMega.sprite||p.sprite)}return (p.shiny&&p.shinySprite?p.shinySprite:p.sprite)}
function createLeague(){
 let gyms=sample(GYM_LEADERS,16).map((l,i)=>{let tr=withRandomTrainerSprite(l);return{stage:"Gym",number:i+1,trainer:tr,name:tr.name,theme:tr.type,badge:tr.badge,required:Math.round(1750+i*(1200/15))}});
 let eliteReq=[3000,3200,3400,3600];
 let e=sample(ELITE_FOUR,4).map((m,i)=>{let tr=withRandomTrainerSprite(m);return{stage:"Elite Four",number:i+1,trainer:tr,name:tr.name,theme:tr.type,required:eliteReq[i]||3600}});
 let c=withRandomTrainerSprite(sample(CHAMPIONS,1)[0]);
 let champ={stage:"Champion",number:1,trainer:c,name:c.name,theme:c.type,required:3800};
 let legendPool=LEGENDS.filter(l=>l.name!==c.name);
 let legend=withRandomTrainerSprite(sample(legendPool.length?legendPool:LEGENDS,1)[0]);
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

async function fetchPokemon(name){
 let r=await fetchWithRetry(`https://pokeapi.co/api/v2/pokemon/${name}`,4,300);let d=await r.json();
 let p={name:d.name,displayName:pretty(d.name),dexId:d.id,types:d.types.map(t=>t.type.name),bst:bst(d.stats),megaForms:[],activeMega:null,sprite:d.sprites.other?.["official-artwork"]?.front_default||d.sprites.front_default,shinySprite:d.sprites.other?.["official-artwork"]?.front_shiny||d.sprites.front_shiny,shiny:shinyRoll()};
 if(!p.shiny)p.shinyBonus=0;else p.shinyBonus=SHINY_BONUS;return p
}
async function enrichMega(p){
 let formNames=MEGA_FORMS[p.name]||[];
 let fetched=[];
 if(formNames.length){
  let res=await Promise.allSettled(formNames.map(fetchPokemon));
  fetched=res.filter(x=>x.status==="fulfilled").map(x=>({name:x.value.displayName,scoreBst:x.value.bst,sprite:x.value.sprite,shinySprite:x.value.shinySprite||x.value.sprite,types:x.value.types}));
 }
 let custom=customMegaFormsFor(p);
 p.megaForms=dedupeMegaForms([...fetched,...custom]);
 return p
}
async function loadPool(){let r=await fetchWithRetry("https://pokeapi.co/api/v2/pokemon-species?limit=1025",4,400);let d=await r.json();return d.results.map(p=>p.name)}
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
 let area=document.getElementById("gameArea");area.className="options";
 area.innerHTML=["boy","girl","nonbinary"].map(type=>`<button class="card" onclick="chooseTrainerType('${type}')"><div class="top"><h3 class="name">${type[0].toUpperCase()+type.slice(1)}</h3><div class="mystery">Trainer</div></div><div class="spritebox">${imgTag({name:TRAINERS[type][0][0],sprite:TRAINERS[type][0][1]},"playerimg")}</div><div class="hidden">Pick this trainer category, then choose a model.</div></button>`).join("");
}
function chooseTrainerType(type){
 trainerType=type;
 trainer={label:TRAINERS[type][0][0],sprite:randomTrainerSprite(TRAINERS[type][0][0],TRAINERS[type][0][1])};
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
  megaPromptShown=false;celebrationShown=false;
  cachedConceptKey='';
  cachedConceptResult=null;
  initItemChoices();
  document.getElementById("megaModal").style.display="none";
  document.getElementById("gruntModal").style.display="none";
 document.getElementById("itemModal").style.display="none";
 }
 render();
 generateOptions();
}
function chooseTrainerModel(i){trainer={label:TRAINERS[trainerType][i][0],sprite:randomTrainerSprite(TRAINERS[trainerType][i][0],TRAINERS[trainerType][i][1])};render()}
function renderTrainerBox(){
 let box=document.getElementById("playerSpriteBox"), name=document.getElementById("playerName"), genderBox=document.getElementById("genderButtons"), quick=document.getElementById("trainerQuickButtons");
 if(!trainer){
  box.innerHTML='<div class="fallback f76">?</div>';
  name.textContent="Not selected";
  if(genderBox) genderBox.innerHTML=`<button class="mini" onclick="chooseTrainerType('boy')">Boy</button><button class="mini" onclick="chooseTrainerType('girl')">Girl</button><button class="mini" onclick="chooseTrainerType('nonbinary')">Nonbinary</button>`;
  if(quick) quick.innerHTML='<span class="tscore">Choose a gender first.</span>';
  return;
 }
 box.innerHTML=imgTag({name:trainer.label,sprite:trainer.sprite},"playerimg");
 name.textContent=`${trainer.label}`;
 if(genderBox) genderBox.innerHTML=`<button class="mini ${trainerType==='boy'?'active':''}" onclick="chooseTrainerType('boy')">Boy</button><button class="mini ${trainerType==='girl'?'active':''}" onclick="chooseTrainerType('girl')">Girl</button><button class="mini ${trainerType==='nonbinary'?'active':''}" onclick="chooseTrainerType('nonbinary')">Nonbinary</button>`;
 if(quick) quick.innerHTML=TRAINERS[trainerType].map((t,i)=>`<button class="mini ${trainer.label===t[0]?'active':''}" onclick="chooseTrainerModel(${i})">${t[0]}</button>`).join("");
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
}
async function generateOptions(){
 if(isDraftComplete()){currentOptions=[];render();return;}
 if(selectedItem&&selectedItem.id==="elemental_plate"&&!elementalPlateType){
  render();
  return;
 }
 if(!trainer)return;generating=true;render();
 try{
 let phase=team.length+1;
 let available=poolNames.filter(n=>!usedNames.has(n));
 let names;
 if(selectedItem&&selectedItem.id==="master_ball"&&masterBallReady&&!masterBallUsed){
  let legendaries=MASTER_BALL_LEGENDARY_POOL.filter(n=>!usedNames.has(n));
  names=sample(legendaries,OPTIONS_PER_ROUND);
  masterBallUsed=true;
  masterBallReady=false;
 }else{
  names=sampleDraftNames(available);
 }
 let base=await Promise.all(names.map(fetchPokemon));
 currentOptions=await Promise.all(base.map(enrichMega));
 currentOptions=currentOptions.map(p=>specialPikachuRoll()?makeSpecialPikachu():p); apiIssue=false; warn("");
}
 catch(e){apiIssue=true;warn("PokeAPI did not answer, so the game switched to a smaller demo pool. You can retry the API roll.");let av=FALLBACK_POOL.filter(p=>!usedNames.has(p.name));currentOptions=sample(av.length?av:FALLBACK_POOL,OPTIONS_PER_ROUND).map(normalizeFallback)}
 generating=false;render()
}
function maybeGrunt(){
 if(gruntResolved||team.length!==gruntRound)return;gruntResolved=true;let grunt=sample(GRUNTS,1)[0];let table={1:550,2:950,3:1400,4:1950,5:2400,6:2805};let difficulty=table[team.length]||900;pendingGrunt={grunt,difficulty,phase:team.length};showGruntModal()
}
function showGruntModal(){
 document.getElementById("modalSprite").innerHTML=imgTag(pendingGrunt.grunt);
 document.getElementById("modalTitle").textContent=pendingGrunt.grunt.name+" ambushes you!";
 document.getElementById("modalText").textContent=pendingGrunt.grunt.text+" Battle to protect your team, or run and lose one random selected Pokémon.";
 document.getElementById("modalDifficulty").textContent="Running will lose the fight.";
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
 eventLog={grunt:pendingGrunt.grunt,won,stolen,difficulty:pendingGrunt.difficulty,power,choice};
 pendingGrunt=null;document.getElementById("gruntModal").style.display="none";
 document.getElementById("itemModal").style.display="none";render();if(team.length<ROUNDS)generateOptions()
}
function selectMega(index,formIndex){
 if(team[index].megaForms.length===0)return;
 if(selectedMegaIndex===index&&team[index].activeMega&&team[index].activeMega.name===team[index].megaForms[formIndex].name){team[index].activeMega=null;selectedMegaIndex=null}
 else{selectedMegaIndex=index;team[index].activeMega=team[index].megaForms[formIndex]}
 render()
}


function openPostDraftItemModal(){
 if(!selectedItem)return false;
 if(false&&selectedItem.id==="elemental_plate"&&elementalPlateType===null){
  const allTypes=["normal","fire","water","electric","grass","ice","fighting","poison","ground","flying","psychic","bug","rock","ghost","dragon","dark","steel","fairy"];
  document.getElementById("itemModalTitle").textContent="Use Elemental Plate";
  document.getElementById("itemModalText").textContent="Choose one type. Each selected Pokémon with that active type adds +50 League Power, capped at +300. Mega Evolution type changes count.";
  document.getElementById("itemChoicesBox").innerHTML=`<div class="types">${allTypes.map(t=>`<button type="button" class="mini" onclick="useElementalPlate('${t}')">${t}</button>`).join("")}</div>`;
  document.getElementById("itemModal").style.display="flex";return true;
 }
 if(selectedItem.id==="evolution_stone"&&!evolutionUsed){
  let eligible=team.map((p,i)=>evolutionChoicesFor(p).length?i:null).filter(i=>i!==null);
  if(!eligible.length){
   document.getElementById("itemModalTitle").textContent="Use Evolution Stone";
   document.getElementById("itemModalText").textContent="None of your current Pokémon are in the Evolution Stone list yet.";
   document.getElementById("itemChoicesBox").innerHTML='<div class="card">No eligible Pokémon found.</div>';
   document.getElementById("itemModal").style.display="flex";
   return true;
  }
  document.getElementById("itemModalTitle").textContent="Use Evolution Stone";
  document.getElementById("itemModalText").textContent="Choose one eligible Pokémon to evolve. The evolved form's BST counts.";
  document.getElementById("itemChoicesBox").innerHTML=eligible.map(i=>`<div class="teamitem"><img src="${currentSprite(team[i],i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${team[i].displayName}</div><div class="tscore">Evolves into ${pretty(EVOLUTION_MAP[team[i].name])}</div></div><button type="button" class="btn btn-dark" onclick="useEvolutionStone(${i})">Evolve</button></div>`).join("");
  document.getElementById("itemModal").style.display="flex";return true;
 }
 if(selectedItem.id==="link_cable"&&!linkCableUsed){
  document.getElementById("itemModalTitle").textContent="Use Link Cable";
  document.getElementById("itemModalText").textContent="Trade one selected Pokémon for a random different one.";
  document.getElementById("itemChoicesBox").innerHTML=team.map((p,i)=>`<div class="teamitem"><img src="${currentSprite(p,i)||''}"><div style="flex:1"><div class="tname">${i+1}. ${p.displayName}</div><div class="tscore">Trade this Pokémon away.</div></div><button type="button" class="btn btn-danger" onclick="useLinkCable(${i})">Trade</button></div>`).join("");
  document.getElementById("itemModal").style.display="flex";return true;
 }
 return false;
}
function closeItemModal(){document.getElementById("itemModal").style.display="none";render();setTimeout(()=>startBattleSimulation(),1000)}
function useElementalPlate(type){elementalPlateType=type;document.getElementById("itemModal").style.display="none";render()}
async function useEvolutionStone(i,targetName){
 evolutionUsed=true;
 try{
  const source=team[i];
  const target=targetName||evolutionChoicesFor(source)[0];
  let evolved=await fetchPokemon(target);
  evolved=await enrichMega(evolved);
  evolved.shiny=!!source.shiny;
  evolved.shinyBonus=source.shinyBonus||0;
  evolved.activeMega=null;
  evolved.displayName=evolved.displayName+" (Evolved)";
  if(selectedMegaIndex===i)selectedMegaIndex=null;
  team[i]=evolved;
 }catch(e){warn("Evolution failed because the API did not answer.")}
 document.getElementById("itemModal").style.display="none";render();setTimeout(()=>startBattleSimulation(),1000)
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
function openPostDraftChoices(){
 setTimeout(()=>{
  const megaOpened=openMegaModal();
  if(!megaOpened){
   const itemOpened=openPostDraftItemModal();
   if(!itemOpened)setTimeout(()=>startBattleSimulation(),1200);
  }
 },150);
}

function eligibleMegaIndexes(){return team.map((p,i)=>p.megaForms&&p.megaForms.length?i:null).filter(i=>i!==null)}
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

async function pickPokemon(i){
 if(generating||isDraftComplete()||pendingGrunt)return;let p=currentOptions[i];team.push(p);usedNames.add(p.name);maybeGrunt();
 if(isDraftComplete()){currentOptions=[];render();openPostDraftChoices();return}
 if(!pendingGrunt)await generateOptions()
}
function leagueResult(){
 let score=finalScore(), stopped=false, sashAvailable=selectedItem&&selectedItem.id==="focus_sash", battles=[...league.gyms,...league.eliteFour,league.champion].map(b=>{
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

function showCelebration(rankName,score,force=false){
 if(force)celebrationShown=false;
 if(celebrationShown&&!force)return;
 celebrationShown=true;
 window.lastCelebrationText=`Congrats you are a ${rankName} Trainer. You reached a score of ${score}.`;
 const overlay=document.getElementById("celebrationOverlay");
 const text=document.getElementById("celebrationText");
 const layer=document.getElementById("confettiLayer");
 if(!overlay||!text||!layer){
  alert(window.lastCelebrationText);
  return;
 }
 text.textContent=`${window.lastCelebrationText} ${teamConcept().name} earned ${conceptBonus()} concept bonus points.`; const teamBox=document.getElementById("celebrationTeam"); if(teamBox){teamBox.innerHTML=team.map((p,i)=>`<div class="reveal ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}"><div><div class="tname">${p.shiny?'✨ ':''}${p.displayName}</div><div class="tscore">${activeTypes(p,i).join(" / ")}</div></div></div>`).join("");}
 const colors=["#facc15","#ec4899","#22c55e","#38bdf8","#a78bfa","#fb7185","#f97316"];
 let bits="";
 for(let i=0;i<130;i++){
  const left=Math.random()*100;
  const delay=Math.random()*2.3;
  const duration=2.2+Math.random()*1.8;
  const color=colors[Math.floor(Math.random()*colors.length)];
  bits+=`<span class="confetti" style="left:${left}%;background:${color};animation-delay:${delay}s;animation-duration:${duration}s"></span>`;
 }
 for(let i=0;i<36;i++){
  const left=Math.random()*100;
  const top=Math.random()*100;
  bits+=`<span class="sparkle" style="left:${left}%;top:${top}%;animation-delay:${Math.random()}s"></span>`;
 }
 layer.innerHTML=bits;
 overlay.style.display="flex";
}
function closeCelebration(){
 const overlay=document.getElementById("celebrationOverlay");
 if(overlay)overlay.style.display="none";
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

 const badgeMarkup=b.secret
  ? `<div class="battleSimBadge" title="GS Ball"><img class="gsball-img" src="assets/GS_Ball_artwork.webp" alt="GS Ball"></div>`
  : `<div class="battleSimBadge">${badgeImg(b.badge,b.theme,b.stage).replace('class="badge"','class="badge"')}</div>`;

 opp.innerHTML=`${imgTag(b.trainer||b)}<div><div class="label">${b.stage} ${b.stage==="Champion"||b.secret?"":b.number}</div><div class="name" style="font-size:26px">${b.name}</div><div class="types" style="margin-top:8px">${b.secret?`<span class="type">${b.theme}</span>`:typePill(b.theme)}</div><div class="tscore" style="margin-top:8px">Required: ${b.required}</div></div>${badgeMarkup}`;

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
 scheduleCelebration(800);
}
function skipBattleSimulation(){
 const overlay=document.getElementById("battleSimOverlay");
 if(overlay)overlay.style.display="none";
 scheduleCelebration(500);
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
 setTimeout(()=>{
  const itemOpened=openPostDraftItemModal();
  if(!itemOpened)setTimeout(()=>startBattleSimulation(),2000);
 },150);
}


function render(){
 renderTrainerBox();let types=getTypes(),over=isDraftComplete(),res=over?leagueResult():null;
 const highScore=syncHighScore();
 document.getElementById("roundBox").textContent=!trainer?"-":over?"Done":`${team.length+1}/${ROUNDS}`;
 document.getElementById("scoreBox").textContent=over?finalScore():"???";
 document.getElementById("typeBox").textContent=types.length;
 document.getElementById("rankBox").textContent=over?res.rank.name.split(" ")[0]:(trainer?"Drafting":"Trainer");
 document.getElementById("rankNote").textContent=over?res.rank.name:(trainer?"A crime organization is active.":"Choose trainer first.");
 const scoreNoteMain=document.getElementById("scoreNoteMain"); if(scoreNoteMain) scoreNoteMain.textContent=over?`Final League Power: ${finalScore()}`:"Revealed after draft";
 const typeBoxNote=document.getElementById("typeBoxNote"); if(typeBoxNote) typeBoxNote.textContent=types.length>=TYPE_BONUS_THRESHOLD?"Type bonus secured: +100":`Need ${TYPE_BONUS_THRESHOLD} for +100`;
 renderEvent();
 let teamList=document.getElementById("teamList");
 teamList.innerHTML=team.length?team.map((p,i)=>`<div class="teamitem ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}" alt="${p.displayName}"><div style="min-width:0;flex:1"><div class="tname">${i+1}. ${p.shiny?'✨ ':''}${p.displayName}</div><div class="tscore">${over?`${pScore(p,i)} pts${p.activeMega&&selectedMegaIndex===i?` as ${p.activeMega.name}`:""}${p.shiny?` incl. +${SHINY_BONUS} shiny`:""}`:"Score hidden"}</div><div class="types" style="margin-top:6px">${activeTypes(p,i).map(typePill).join("")}</div>${over&&p.megaForms.length?`<div class="megaBtns">${p.megaForms.map((m,mi)=>`<button class="megaBtn ${selectedMegaIndex===i&&p.activeMega&&p.activeMega.name===m.name?'active':''}" onclick="selectMega(${i},${mi})">Mega: ${m.name.replace('Mega ','')}</button>`).join("")}</div>`:""}</div></div>`).join(""):'<div class="card">No Pokémon drafted yet. The Pokéball is hungry.</div>';
 document.getElementById("typesCovered").innerHTML=types.length?types.map(typePill).join(""):'<span style="color:#cbd5e1;font-weight:900">None yet</span>';
 document.getElementById("typeNeed").textContent=types.length>=TYPE_BONUS_THRESHOLD?"Type bonus secured: +100.":`${Math.max(0,TYPE_BONUS_THRESHOLD-types.length)} more unique type(s) needed.`;
 if(!trainer){renderTrainerSelection();return}
 if(!selectedItem){renderItemSelection();return}
 if(selectedItem.id==="elemental_plate"&&!elementalPlateType){renderPlateSelectionScreen();return}
 let area=document.getElementById("gameArea"), title=document.getElementById("mainTitle");
 if(generating){title.textContent="Rolling wild options...";area.className="";area.innerHTML='<div class="card"><span class="loader"></span>Loading six Pokémon...</div>';return}
 if(over){currentOptions=[];renderResults(area,title,res);return}
 if(isDraftComplete()){currentOptions=[];renderResults(area,title,leagueResult());return}
 title.innerHTML=`Choose One ${apiIssue?'<button class="btn btn-danger" style="margin-left:12px" onclick="retryApiRoll()">Retry API Roll</button>':''}${selectedItem&&selectedItem.id==="ability_capsule"&&!abilityCapsuleUsed?'<button class="btn btn-ghost" style="margin-left:12px" onclick="rerollCurrentOptions()">Use Ability Capsule</button>':''}${selectedItem&&selectedItem.id==="master_ball"&&!masterBallUsed?'<button class="btn btn-ghost" style="margin-left:12px" onclick="useMasterBallNextRoll()">Use Master Ball</button>':''}`;
 area.className="options";area.innerHTML=currentOptions.map((p,i)=>`<button class="card ${p.shiny?'shiny-card':''}" onclick="pickPokemon(${i})"><div class="top"><div><h3 class="name">${p.shiny?'✨ ':''}${p.displayName}</h3>${p.shiny?'<div class="shinylabel">✨ Shiny spotted! +300 later</div>':''}${p.lightBall?'<div class="shinylabel">⚡ Light Ball! BST doubled</div>':''}<div class="hidden">BST hidden until the League test.</div></div><div class="mystery">???</div></div><div class="spritebox"><img src="${(p.shiny&&p.shinySprite?p.shinySprite:p.sprite)||''}" alt="${p.displayName}"></div><div class="types">${p.types.map(typePill).join("")}</div><div class="hidden">${MASTER_BALL_LEGENDARY_POOL.includes(p.name)?"Master Ball roll: legendary-tier option.":p.megaForms.length?"Can Mega Evolve if chosen.":"No visible Mega option."}</div></button>`).join("");
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
  <p class="tscore">Team score: ${baseTotal()}. Type bonus: ${getTypes().length>=TYPE_BONUS_THRESHOLD?"+100":"+0"}. Item bonus: +${itemBonusTotal()}. Concept bonus: +${conceptBonus()}. Final League Power: ${finalScore()}.</p>
  <button class="btn btn-ghost" style="margin:10px 10px 10px 0" onclick="battleSimulationShown=false;startBattleSimulation()">Show Battle Simulation</button><button class="btn btn-ghost" style="margin:10px 10px 10px 0" onclick="showCelebration(leagueResult().rank.name,finalScore(),true)">Show Celebration</button>
  ${selectedItem&&["evolution_stone","link_cable"].includes(selectedItem.id)?`<button class="btn btn-ghost" style="margin:10px 0" onclick="openPostDraftItemModal()">Use ${selectedItem.name}</button>`:""}

  <div class="card" style="margin:14px 0;box-shadow:none">
    <div class="label">Team Concept</div>
    <div class="name" style="font-size:22px">${concept.name}</div>
    <div class="tscore">${concept.reason} ${conceptBonus()?`+${conceptBonus()} bonus awarded.`:"No concept bonus."}</div>
  </div>

  <div class="revealteam">
   ${team.map((p,i)=>`<div class="reveal ${p.shiny?'shiny':''}"><img src="${currentSprite(p,i)||''}"><div><div class="tname">${i+1}. ${p.shiny?'✨ ':''}${p.displayName}</div><div class="tscore">${p.bst} BST${selectedMegaIndex===i&&p.activeMega?` → ${p.activeMega.scoreBst} as ${p.activeMega.name}`:""}${p.shiny?` + ${SHINY_BONUS} shiny bonus`:""}${p.lightBall?` + Light Ball doubled BST`:""}${selectedItem&&selectedItem.id==="elemental_plate"&&elementalPlateType&&activeTypes(p,i).map(t=>t.toLowerCase()).includes(elementalPlateType)?` +50 ${elementalPlateType} plate`:""}</div><div class="types" style="margin-top:6px">${activeTypes(p,i).map(typePill).join("")}</div></div><div class="rscore">${pScore(p,i)}</div></div>`).join("")}
  </div>

  ${eventLog?`<h3 style="font-size:24px;font-weight:1000;margin:20px 0 10px">Draft Event</h3><div class="battle ${eventLog.won?'win':'loss'}"><div class="trainerrow">${imgTag(eventLog.grunt)}<div><div class="label">Grunt Encounter</div><div class="name" style="font-size:16px">${eventLog.grunt.name}</div><div class="tscore">${eventLog.won?"Protected the team.":`Lost ${eventLog.stolen?eventLog.stolen.displayName:"a Pokémon"}.`}</div></div><div class="result ${eventLog.won?'win':'loss'}">${eventLog.won?'Win':'Loss'}</div></div></div>`:""}

  <h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">16 Canon Gym Challenge</h3>
  <div class="leaguegrid">${gyms.map(battleCard).join("")}</div>

  <h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">Canon Elite Four</h3>
  <div class="leaguegrid">${elite.map(battleCard).join("")}</div>

  <h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">Champion</h3>
  <div class="leaguegrid">${battleCard(champ)}</div>

  ${res.legendaryResult?`<h3 style="font-size:26px;font-weight:1000;margin:24px 0 10px">Hidden Legendary Trainer</h3><div class="leaguegrid">${legendCard(res.legendaryResult)}</div>`:""}
 </div>`;
}

function renderEvent(){let b=document.getElementById("eventBanner");if(!eventLog){b.innerHTML="";return}b.innerHTML=`<div class="eventbox"><div style="display:flex;gap:12px;align-items:center">${imgTag(eventLog.grunt)}<div><h3 style="margin:0;font-size:22px">${eventLog.won?eventLog.grunt.name+" defeated!":eventLog.grunt.name+" got away!"}</h3><p>${eventLog.choice==="escape"?"You used Escape Rope.":eventLog.choice==="run"?"You ran.":`You battled the grunt.`} ${eventLog.won?"No Pokémon stolen.":`${eventLog.stolen?eventLog.stolen.displayName:"A Pokémon"} was stolen. Draft again to refill the slot.`}</p></div></div></div>`}
function battleCard(b){return`<div class="battle ${b.won?'win':'loss'}"><div class="trainerrow">${imgTag(b.trainer)}<div><div class="label">${b.stage} ${b.stage==="Champion"?"":b.number}</div><div class="name" style="font-size:16px">${b.name}</div><div class="types" style="margin-top:6px">${typePill(b.theme)}</div>${b.badge?`<div class="tscore">${b.badge}</div>`:""}</div>${badgeImg(b.badge,b.theme,b.stage)}</div><div class="top"><div class="tscore">Required: ${b.required}</div><div class="result ${b.won?'win':'loss'}">${b.sash?'Sash Save':b.won?'Cleared':'Stopped'}</div></div></div>`}
function legendCard(b){
 return `<div class="battle secret ${b.won?'win':'loss'}"><div class="trainerrow">${imgTag(b)}<div><div class="label">Secret Challenge</div><div class="name" style="font-size:16px">${b.name}</div><div class="tscore">${b.title}</div></div><div class="badge" title="GS Ball"><img class="gsball-img" src="assets/GS_Ball_artwork.webp" alt="GS Ball"></div></div><div class="top"><div class="tscore">Required: ${b.required}</div><div class="result ${b.won?'win':'loss'}">${b.won?'GS Cleared':'Legend Stands'}</div></div></div>`
}
async function restartGame(){
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
 initItemChoices();
 document.getElementById("megaModal").style.display="none";
 document.getElementById("gruntModal").style.display="none";
 document.getElementById("itemModal").style.display="none";
 celebrationShown=false;
 warn("");
 closeCelebration();
 render();
}
async function boot(){initItemChoices();refreshHighScorePanels(getHighScore());render();try{poolNames=await loadPool()}catch(e){poolNames=FALLBACK_POOL.map(p=>p.name);warn("Could not connect to PokeAPI, so this is running with a smaller demo pool.")}render()}
window.addEventListener('error',e=>{
 console.error(e.error||e.message);
 const w=document.getElementById("warning");
 if(w){w.textContent="Game error: "+(e.message||"unknown error")+". Please send a screenshot.";w.style.display="block";}
});


/* ===== Canvas certificate renderer v2 ===== */
function certificateTrainerName(){
 return (trainer&& (trainer.label||trainer.name)) || (document.getElementById("playerName")?.textContent||"").trim() || "Trainer";
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
  trainerSprite: certificateTrainerSpriteSrc(),
  rankName: res.rank.name,
  rankNote: res.rank.note,
  score: finalScore(),
  conceptName: concept.name,
  conceptReason: concept.reason || "",
  conceptBonus: concept.bonus || 0,
  team: team.map((p,i)=>({
   slot:i+1,
   name:p.displayName||p.name,
   bst:(selectedMegaIndex===i&&p.activeMega&&p.activeMega.scoreBst)?p.activeMega.scoreBst:p.bst,
   sprite: currentSprite(p,i)||"",
   types: activeTypes(p,i)||[],
   shiny: !!p.shiny,
   mega: !!(selectedMegaIndex===i&&p.activeMega),
   megaLabel: (selectedMegaIndex===i&&p.activeMega)?(p.activeMega.name||"Mega Evolution"):"",
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
 ctx.fillText("Congrats you are a",800,385);
 ctx.fillStyle="#0f172a";
 const rankLine=`${data.rankName} Trainer`;
 const rankSize=fitTextWidth(ctx,rankLine,1200,60,32,"900","Arial");
 ctx.font=`900 ${rankSize}px Arial`;
 ctx.fillText(rankLine,800,445);
 ctx.fillStyle="#475569";
 ctx.font="900 28px Arial";
 ctx.fillText(`You reached a score of ${data.score}.`,800,495);
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
 ctx.fillStyle="#0f172a"; ctx.font="900 52px Arial"; ctx.fillText(String(data.score),textX,y+236);
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

boot();
