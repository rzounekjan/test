import { MenuCategory } from './menuData';

export const WINE_CATEGORIES: MenuCategory[] = [
  {
    id: "vina-po-skle",
    name: "Víno po skle (0,15l)",
    badge: "Po skle",
    description: "Pečlivě vybraná rozlévaná vína z Moravy, Čech, Rakouska a Kalifornie",
    iconName: "GlassWater",
    items: [
      {
        id: "sklo-rulandske-sede",
        name: "Rulandské šedé – Dva kopce Kolby",
        weight: "0,15 l",
        price: "95,-",
        allergens: ["12"],
        description: "Dva kopce Kolby, polosuché – Mikulovsko, Morava. Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce.",
        questions: [
          {
            id: "sklo-rs-q1",
            question: "Z jaké moravské vinařské podoblasti a od jakého vinařství pochází rozlévané Rulandské šedé?",
            correctAnswer: "Vinařství Kolby (řada Dva kopce), Mikulovsko",
            distractors: ["Vinařství Sonberk, Znojemsko", "Vinařství U Kapličky, Velkopavlovicko"],
            explanation: "Jedná se o polosuché Rulandské šedé z řady Dva kopce z vinařství Kolby v Pouzdřanech na Mikulovsku."
          },
          {
            id: "sklo-rs-q2",
            question: "Jakou chuťovou a aromatickou charakteristiku má toto Rulandské šedé po skle?",
            correctAnswer: "Vyvážené, šťavnaté, aroma bílé broskve a drobného zahradního ovoce",
            distractors: ["Výrazně minerální s tóny petroleje a zeleného pepře", "Těžké barikové s tóny vanilky a kouře"],
            explanation: "V lístku je charakterizováno jako vyvážené a šťavnaté s aromatem bílé broskve a drobného zahradního ovoce."
          }
        ]
      },
      {
        id: "sklo-cuvee-kraus-bile",
        name: "Cuvée Kraus – bílé",
        weight: "0,15 l",
        price: "98,-",
        allergens: ["12"],
        description: "Mělnicko, Čechy. Lehké, svěží, harmonický projev citrusů a žlutého ovoce.",
        questions: [
          {
            id: "sklo-kraus-b-q1",
            question: "Z které české vinařské oblasti pochází rozlévané bílé Cuvée Kraus?",
            correctAnswer: "Mělnicko (Čechy)",
            distractors: ["Litoměřicko (Čechy)", "Slovácko (Morava)"],
            explanation: "Vinařství Kraus sídlí v Mělníku v české vinařské oblasti."
          },
          {
            id: "sklo-kraus-b-q2",
            question: "Jaké ovocné tóny tvoří harmonický projev bílého Cuvée Kraus?",
            correctAnswer: "Citrusy a žluté ovoce",
            distractors: ["Černý rybíz a angrešt", "Jahody a třešně"],
            explanation: "Bílé Cuvée Kraus nabízí lehký a svěží projev citrusů a žlutého ovoce."
          }
        ]
      },
      {
        id: "sklo-gruner-veltliner",
        name: "Grüner Veltliner – Heuriger",
        weight: "0,15 l",
        price: "109,-",
        allergens: ["12"],
        description: "Heuriger – Niederösterreich, Rakousko. Svěží, lehké, jemné aroma citrusů s tóny zeleného jablka.",
        questions: [
          {
            id: "sklo-gv-q1",
            question: "Odkud pochází rozlévaný Grüner Veltliner Heuriger?",
            correctAnswer: "Niederösterreich (Dolní Rakousko)",
            distractors: ["Burgenland (Rakousko)", "Štýrsko (Rakousko)"],
            explanation: "Víno pochází z vinařské oblasti Niederösterreich v sousedním Rakousku."
          },
          {
            id: "sklo-gv-q2",
            question: "Které ovoce dává tomuto Heurigeru jeho svěží jiskru ve vůni?",
            correctAnswer: "Citrusy a zelené jablko",
            distractors: ["Přezrálý banán a mango", "Červený rybíz a brusinky"],
            explanation: "Popis uvádí svěží, lehké tělo s jemným aromatem citrusů a zeleného jablka."
          }
        ]
      },
      {
        id: "sklo-chardonnay-adulation",
        name: "Chardonnay – Adulation",
        weight: "0,15 l",
        price: "125,-",
        allergens: ["12"],
        description: "Adulation – Kalifornie. Víno školené na dubu, plné, hedvábný závěr, tropické ovoce, sladké koření a vanilka.",
        questions: [
          {
            id: "sklo-chard-q1",
            question: "V čem je školeno kalifornské Chardonnay Adulation, což mu dodává tóny vanilky?",
            correctAnswer: "Na dubovém dřevě (dubových sudech)",
            distractors: ["V nerezovém tanku", "V hliněné amfoře qvevri"],
            explanation: "Chardonnay Adulation je školené na dubu, proto má plnou strukturu, tóny vanilky a sladkého koření."
          },
          {
            id: "sklo-chard-q2",
            question: "Jaký chuťový profil a závěr charakterizuje toto kalifornské Chardonnay?",
            correctAnswer: "Plné víno s hedvábným závěrem, tóny tropického ovoce a vanilky",
            distractors: ["Lehké trávové víno s ostrou citronovou kyselinkou", "Polosladké perlivé víno s muškátovým květem"],
            explanation: "Jedná se o plné kalifornské bílé víno s hedvábným závěrem a tóny tropického ovoce."
          }
        ]
      },
      {
        id: "sklo-modry-portugal-rose",
        name: "Modrý Portugal – rosé Dva kopce Kolby",
        weight: "0,15 l",
        price: "95,-",
        allergens: ["12"],
        description: "Mikulovsko, Morava. Svěží, lososová barva, dochuť letního ovoce, vůně s tóny čerstvých jahod a třešní.",
        questions: [
          {
            id: "sklo-mpr-q1",
            question: "Z jaké modré odrůdy je vyrobeno naše rozlévané moravské rosé?",
            correctAnswer: "Modrý Portugal",
            distractors: ["Frankovka", "Svatovavřinecké"],
            explanation: "Růžové víno po skle je vyrobeno z odrůdy Modrý Portugal z vinařství Kolby."
          },
          {
            id: "sklo-mpr-q2",
            question: "Jakou barvu a ovocné tóny vykazuje toto rosé Kolby?",
            correctAnswer: "Lososová barva s vůní čerstvých jahod a třešní",
            distractors: ["Cihlová barva s tóny ostružin a povidel", "Zlatavá barva s tóny broskví a bezu"],
            explanation: "Má svěží lososovou barvu, dochuť letního ovoce a tóny čerstvých jahod a třešní."
          }
        ]
      },
      {
        id: "sklo-modry-portugal-cervene",
        name: "Modrý Portugal – červené Dva kopce Kolby",
        weight: "0,15 l",
        price: "95,-",
        allergens: ["12"],
        description: "Mikulovsko, Morava. Lehká rubínová barva, vůně drobného zahradního ovoce, dochuť jemně kořeněná.",
        questions: [
          {
            id: "sklo-mpc-q1",
            question: "Jakou barvu a dochuť má červený Modrý Portugal po skle?",
            correctAnswer: "Lehká rubínová barva a jemně kořeněná dochuť",
            distractors: ["Temně fialová barva a trpká tříslovina", "Granátová barva a kouřově čokoládová dochuť"],
            explanation: "Modrý Portugal je lehké červené víno s rubínovou barvou, vůní zahradního ovoce a jemně kořeněnou dochutí."
          }
        ]
      },
      {
        id: "sklo-cuvee-kraus-cervene",
        name: "Cuvée Kraus – červené",
        weight: "0,15 l",
        price: "98,-",
        allergens: ["12"],
        description: "Mělnicko, Čechy. Sytá barva, měkčí třísloviny, chuť červeného ovoce.",
        questions: [
          {
            id: "sklo-kraus-c-q1",
            question: "Jaké třísloviny a chuťový profil nabízí české červené Cuvée Kraus?",
            correctAnswer: "Měkčí třísloviny a chuť zralého červeného ovoce",
            distractors: ["Mohutné drsné třísloviny a tóny zeleného pepře", "Sladkou povidlovou chuť s vysokým alkoholem"],
            explanation: "V popisu je uvedena sytá barva, měkčí příjemné třísloviny a chuť červeného ovoce."
          }
        ]
      },
      {
        id: "sklo-pinot-noir-adulation",
        name: "Pinot Noir – Adulation",
        weight: "0,15 l",
        price: "125,-",
        allergens: ["12"],
        description: "Adulation – Kalifornie. Plné, výrazně ovocné, chuť zralé červené bobulovité ovoce a třešně.",
        questions: [
          {
            id: "sklo-pn-q1",
            question: "Odkud pochází rozlévaný Pinot Noir Adulation a jaké ovoce dominuje v chuti?",
            correctAnswer: "Kalifornie, chuť zralého červeného bobulovitého ovoce a třešní",
            distractors: ["Burgundsko, chuť lesního podrostu a lanýžů", "Morava, chuť trnek a rybízu"],
            explanation: "Pinot Noir Adulation pochází z Kalifornie a má plnou ovocnou chuť zralých červených bobulí a třešní."
          }
        ]
      }
    ]
  },
  {
    id: "vina-bubliny",
    name: "Bubliny (Šumivá vína)",
    badge: "Bubliny",
    description: "Šumivá vína charmat, moravský crémant a kalifornský sekt kvašený v lahvi",
    iconName: "Sparkles",
    items: [
      {
        id: "bubliny-charmat-palava",
        name: "Charmat de Vinselekt Pálava",
        weight: "0,1l / 0,75l",
        price: "99,- / 699,-",
        allergens: ["12"],
        description: "Vinselect Michlovský, extra sec – Morava. Divoké perlení, opulentní vůně s nádechem růží a exotického ovoce, kulatá podmanivá chuť.",
        questions: [
          {
            id: "b-pal-q1",
            question: "Jakou metodou druhotného kvašení a ze které odrůdy je vyroben Charmat de Vinselekt?",
            correctAnswer: "Metodou charmat z aromatické odrůdy Pálava",
            distractors: ["Tradiční metodou z odrůdy Ryzlink vlašský", "Metodou ancestrale (pét-nat) z Muškátu moravského"],
            explanation: "Jedná se o šumivé víno vyrobené metodou charmat z odrůdy Pálava s opulentní vůní růží."
          },
          {
            id: "b-pal-q2",
            question: "V jakých objemech a za jaké ceny se Charmat de Vinselekt Pálava nabízí?",
            correctAnswer: "0,1 l za 99,- Kč a 0,75 l za 699,- Kč",
            distractors: ["Pouze celá láhev 0,75 l za 750,- Kč", "0,15 l za 150,- Kč"],
            explanation: "Lze jej objednat po sklence 0,1 l (99,- Kč) i v celé lahvi 0,75 l (699,- Kč)."
          }
        ]
      },
      {
        id: "bubliny-cremant-vinselekt",
        name: "Crémant de Vinselekt (Pinot, Chardonnay)",
        weight: "0,1l / 0,75l",
        price: "115,- / 849,-",
        allergens: ["12"],
        description: "Vinselect Michlovský, extra brut – Morava. Jemné impozantní perlení, elegantní aroma, harmonická krémová dochuť.",
        questions: [
          {
            id: "b-crem-q1",
            question: "Ze kterých dvou slavných odrůd je složen moravský Crémant de Vinselekt?",
            correctAnswer: "Pinot a Chardonnay",
            distractors: ["Ryzlink rýnský a Veltlínské zelené", "Sauvignon a Pálava"],
            explanation: "Crémant je kupáží odrůd Pinot a Chardonnay v kategorii extra brut s harmonickou krémovou dochutí."
          }
        ]
      },
      {
        id: "bubliny-angels-cowboys",
        name: "Angels & Cowboys – NV, brut",
        weight: "0,75 l",
        price: "1 199,-",
        allergens: ["12"],
        description: "North Coast, Kalifornie. Druhotné zrání v láhvi, elegantní perlení, svěží sadové ovoce, citrusy, tóny briošky a chlebové kůrky.",
        questions: [
          {
            id: "b-ac-q1",
            question: "Jakou technologií zrání vzniká kalifornský sekt Angels & Cowboys?",
            correctAnswer: "Druhotným kvašením a zráním přímo v láhvi (tradiční metoda)",
            distractors: ["Kvašením v tlakových tancích (charmat)", "Syzením oxidem uhličitým"],
            explanation: "Víno zraje tradiční metodou přímo v láhvi, což vytváří jemné perlení a tóny briošky."
          },
          {
            id: "b-ac-q2",
            question: "Které typické autolytické tóny zrání na kvasinkách v Angels & Cowboys najdeme?",
            correctAnswer: "Tóny briošky a chlebové kůrky",
            distractors: ["Tóny uzeného masa a kůže", "Tóny čerstvě posečené trávy a mentolu"],
            explanation: "Dlouhé zrání na kalech v láhvi přináší noblesní tóny máslové briošky a chlebové kůrky."
          }
        ]
      }
    ]
  },
  {
    id: "vina-bile",
    name: "Bílá vína (0,75l)",
    badge: "Bílá vína",
    description: "Špičková tichá bílá vína z předních poloh Moravy, Rakouska, Německa a Kalifornie",
    iconName: "Wine",
    items: [
      {
        id: "bile-ryzlink-gotberg",
        name: "Ryzlink rýnský – Gotberg",
        weight: "0,75 l",
        price: "469,-",
        allergens: ["12"],
        description: "pozdní sběr Gotberg – Pálava, Morava. Svěží s výraznou kyselinou, aromatika citrusy, zelené jablko a bílé broskve, minerální dochuť.",
        questions: [
          {
            id: "bv-got-q1",
            question: "Jaké ovocné tóny a jaká kyselinka dominují v Ryzlinku rýnském Gotberg z Pálavy?",
            correctAnswer: "Výrazná kyselina, citrusy, zelené jablko, bílé broskve a minerální dochuť",
            distractors: ["Nízká kyselina, tóny liči, medu a kompotovaných meruněk", "Tóny angreštu, kopřiv a černorybízového listu"],
            explanation: "Tento Ryzlink rýnský z Gotbergu vyniká svěžestí, výraznou kyselinou, citrusy a minerální dochutí."
          }
        ]
      },
      {
        id: "bile-pinot-gris-reisten",
        name: "Pinot Gris – Reisten",
        weight: "0,75 l",
        price: "479,-",
        allergens: ["12"],
        description: "pozdní sběr Reisten – Mikulovsko, Morava. Plné a hladké, v chuti jemný minerální dotek, čerstvý grep a pomerančová kůra.",
        questions: [
          {
            id: "bv-reis-q1",
            question: "Které citrusové tóny a jakou texturu má Pinot Gris z vinařství Reisten?",
            correctAnswer: "Plné a hladké tělo, čerstvý grep a pomerančová kůra",
            distractors: ["Ostré trávové tělo, limetková šťáva a zelené mango", "Hutné likérové tělo, kandovaný ananas a rozinky"],
            explanation: "Popis uvádí plné a hladké víno s jemným minerálním dotekem, čerstvým grepem a pomerančovou kůrou."
          }
        ]
      },
      {
        id: "bile-hibernal-bilkovi",
        name: "Hibernal – Bílkovi",
        weight: "0,75 l",
        price: "495,-",
        allergens: ["12"],
        description: "pozdní sběr Bílkovi – Velkopavlovicko, Morava. Šťavnaté, vůně černého rybízu a bezového květu, ovocné, příjemná kyselinka a kořenitý dozvuk.",
        questions: [
          {
            id: "bv-hib-q1",
            question: "Které dvě typické květinové a ovocné složky tvoří vůni Hibernalu od Bílkových?",
            correctAnswer: "Černý rybíz a bezový květ",
            distractors: ["Banán a vanilkový lusk", "Sušené švestky a lesní jahody"],
            explanation: "Hibernal vyniká intenzivní vůní černého rybízu a rozkvetlého bezového květu s kořenitým dozvukem."
          }
        ]
      },
      {
        id: "bile-sauvignon-halkoci",
        name: "Sauvignon – Typik VOC Lukáš Halkoci",
        weight: "0,75 l",
        price: "626,-",
        allergens: ["12"],
        description: "Typik VOC Lukáš Halkoci – Znojemsko, Morava. Lehčí, svěží dochuť, aromatika angreštu, černého rybízu a citrusů.",
        questions: [
          {
            id: "bv-sauv-q1",
            question: "Z jaké moravské apelace a s jakou typickou aromatikou pochází Sauvignon Lukáše Halkociho?",
            correctAnswer: "VOC Znojmo, aromatika angreštu, černého rybízu a citrusů",
            distractors: ["VOC Pálava, aromatika kvetoucích růží a fialek", "VOC Modré hory, aromatika ostružin a vanilky"],
            explanation: "Jedná se o klasický znojemský Sauvignon VOC s tóny angreštu, černého rybízu a citrusů."
          }
        ]
      },
      {
        id: "bile-ryzlink-vlassky-sukal",
        name: "Ryzlink Vlašský – Milan Sůkal",
        weight: "0,75 l",
        price: "660,-",
        allergens: ["12"],
        description: "pozdní sběr Milan Sůkal – Slovácko, Morava. Středně plné víno, příjemná kyselinka, tóny zralých citrusů, pomela a peckovic.",
        questions: [
          {
            id: "bv-vlas-q1",
            question: "Z které moravské podoblasti pochází Ryzlink vlašský od předního vinaře Milana Sůkala?",
            correctAnswer: "Slovácko",
            distractors: ["Litoměřicko", "Mělnicko"],
            explanation: "Milan Sůkal hospodaří v Novém Poddvorově v podoblasti Slovácko."
          }
        ]
      },
      {
        id: "bile-palava-michlovsky",
        name: "Pálava – Vinselect Michlovský",
        weight: "0,75 l",
        price: "506,-",
        allergens: ["12"],
        description: "pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava. Jemná vůně kvetoucích pomerančovníků a poupat růží, svěží chuť liči a jablečného závinu.",
        questions: [
          {
            id: "bv-pal-q1",
            question: "Jaké neobyčejné tóny poupat a dezertu najdeme v této tiché Pálavě od doc. Michlovského?",
            correctAnswer: "Pomerančovníky, poupata růží, liči a jablečný závin",
            distractors: ["Kopřivy, zelený hrášek a angrešt", "Kouř, slanina a tabákový list"],
            explanation: "Pálava nabízí jemnou květinovou vůni pomerančovníků a růží s chutí liči a pečeného jablečného závinu."
          }
        ]
      },
      {
        id: "bile-poysdorfer-saurussel",
        name: "Poysdorfer Saurüssel – Hauser",
        weight: "0,75 l",
        price: "629,-",
        allergens: ["12"],
        description: "Weinviertel, Rakousko. Veltlínské zelené, vůně zeleného jablka, citrusové kůry a bílého pepře, jasná kyselinka a jemná mineralita.",
        questions: [
          {
            id: "bv-poy-q1",
            question: "Které pikantní koření je typickým znakem rakouského Veltlínu Poysdorfer Saurüssel?",
            correctAnswer: "Bílý pepř (rakouské 'Pfefferl')",
            distractors: ["Nové koření", "Mletá skořice"],
            explanation: "Klasický Veltlín z Weinviertelu se vyznačuje typickým pepřovým tónem (bílý pepř) a zeleným jablkem."
          }
        ]
      },
      {
        id: "bile-gruner-satzen-schwarzbock",
        name: "Grüner Veltliner Premium Ried Satzen – Schwarzbock",
        weight: "0,75 l",
        price: "723,-",
        allergens: ["12"],
        description: "Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko. Sytá zlatavá barva, intenzivní vůně zralých hrušek a citrusů, dochuť elegantní, minerální, kořeněná pepřem.",
        questions: [
          {
            id: "bv-sat-q1",
            question: "Z jaké prémiové viniční trati (Ried) pochází Grüner Veltliner od Schwarzbocka?",
            correctAnswer: "Ried Satzen DAC",
            distractors: ["Ried Heiligenstein", "Ried Achleiten"],
            explanation: "Jedná se o prémiový Veltlín z trati Ried Satzen DAC z oblasti Weinviertel."
          }
        ]
      },
      {
        id: "bile-riesling-eva-fricke",
        name: "Riesling Rheingau QbA Trocken – Eva Fricke",
        weight: "0,75 l",
        price: "999,-",
        allergens: ["12"],
        description: "Rheingau, Německo. Elegantní, aromatika limetky, zeleného jablka a bílých broskví, minerální podkres.",
        questions: [
          {
            id: "bv-eva-q1",
            question: "Z jaké proslulé německé vinařské oblasti na řece Rýn pochází suchý Riesling od Evy Fricke?",
            correctAnswer: "Rheingau",
            distractors: ["Baden", "Franken"],
            explanation: "Eva Fricke vyrábí své kultovní suché ryzlinky v prestižní oblasti Rheingau."
          }
        ]
      },
      {
        id: "bile-riesling-gunderloch-red-stone",
        name: "Riesling Red Stone QbA trocken – Gunderloch",
        weight: "0,75 l",
        price: "595,-",
        allergens: ["12"],
        description: "Rheinhessen, Německo. Šťavnaté, vůně zralých citrusů, broskví a bylinek, minerální stopa červené břidlice, kořenitá dochuť.",
        questions: [
          {
            id: "bv-gund-q1",
            question: "Jaké unikátní geologické podloží dává jméno a minerální stopu Rieslingu Red Stone Gunderloch?",
            correctAnswer: "Červená břidlice (Rotliegend / Red Stone)",
            distractors: ["Křídový vápenec", "Sopečný čedič"],
            explanation: "Red Stone odkazuje na slavné červené břidlicové svahy Roter Hang v Rheinhessenu."
          }
        ]
      },
      {
        id: "bile-riesling-fritz-haag",
        name: "Riesling Tradition Brauneberg – Fritz Haag",
        weight: "0,75 l",
        price: "975,-",
        allergens: ["12"],
        description: "Mosel, Německo. Zlatavá barva, intenzivní citrusová aromatika, chuť pikantní, harmonická, nádech akátového medu.",
        questions: [
          {
            id: "bv-haag-q1",
            question: "Z jaké německé říční oblasti pochází legendární Fritz Haag a jeho Brauneberg Riesling?",
            correctAnswer: "Mosel (údolí řeky Mosely)",
            distractors: ["Ahr", "Nahe"],
            explanation: "Fritz Haag je jedním z největších producentů ryzlinků v moselském údolí."
          }
        ]
      },
      {
        id: "bile-weisser-burgunder-philipp-kuhn",
        name: "Weisser Burgunder Tradition Trocken – Philipp Kuhn",
        weight: "0,75 l",
        price: "725,-",
        allergens: ["12"],
        description: "Pfalz, Německo. Rulandské bílé, chuť pražených mandlí, sušených hrušek, vlašských ořechů a minerality.",
        questions: [
          {
            id: "bv-kuhn-q1",
            question: "Které oříškové a sušené ovocné tóny dominují v Weisser Burgunder od Philippa Kuhna?",
            correctAnswer: "Pražené mandle, vlašské ořechy a sušené hrušky",
            distractors: ["Pistácie, zelené fíky a kokos", "Pražená kávová zrna a borůvky"],
            explanation: "Tento německý Pinot Blanc nabízí bohatou chuť pražených mandlí, vlašských ořechů a sušených hrušek."
          }
        ]
      },
      {
        id: "bile-sauvignon-lapis-luna",
        name: "Sauvignon Blanc – Lapis Luna",
        weight: "0,75 l",
        price: "789,-",
        allergens: ["12"],
        description: "North Coast, Kalifornie. Plnější, pikantní kyselinka, ovocný styl odrůdy, zralá bílá broskev a tropické ovoce v chuti.",
        questions: [
          {
            id: "bv-luna-q1",
            question: "Jaký styl Sauvignonu Blanc představuje kalifornská Lapis Luna?",
            correctAnswer: "Plnější tělo, pikantní kyselinka, zralá bílá broskev a tropické ovoce",
            distractors: ["Travnatý a kopřivový novozélandský styl", "Minerální a křemenný styl francouzského Sancerre"],
            explanation: "Kalifornský styl Lapis Luna je bohatý, plnější, se zralou bílou broskví a tropickým ovocem."
          }
        ]
      },
      {
        id: "bile-chardonnay-knotty-vines",
        name: "Chardonnay – Knotty Vines",
        weight: "0,75 l",
        price: "975,-",
        allergens: ["12"],
        description: "Kalifornie. Plnější na dubových sudech, šťavnaté, elegantní závěr, chuť tropického ovoce, koření a mineralita.",
        questions: [
          {
            id: "bv-knot-q1",
            question: "V jakých sudech zrálo kalifornské Chardonnay Knotty Vines a jaký závěr nabízí?",
            correctAnswer: "V dubových sudech, šťavnatý a elegantní závěr s tóny tropického ovoce a koření",
            distractors: ["V akátových sudech s tóny čerstvých jablek", "V třešňových sudech s tóny červeného ovoce"],
            explanation: "Knotty Vines zraje na dubu pro plnou chuť tropického ovoce a elegantní strukturu."
          }
        ]
      }
    ]
  },
  {
    id: "vina-ruzove",
    name: "Růžová vína (0,75l)",
    badge: "Růžová vína",
    description: "Svěží a ovocitá růžová vína pro slunečné dny a lehké pokrmy",
    iconName: "Wine",
    items: [
      {
        id: "ruzove-merlot-rose-bilkovi",
        name: "Merlot Rosé – Bílkovi",
        weight: "0,75 l",
        price: "405,-",
        allergens: ["12"],
        description: "pozdní sběr Bílkovi – Velkopavlovicko, Morava. Příjemně pitelné, vůně malin, jahod a třešní, ovocitá chuť s tóny smetany.",
        questions: [
          {
            id: "rv-mer-q1",
            question: "Z jaké francouzské odrůdy je vyrobeno toto moravské růžové víno od Bílkových?",
            correctAnswer: "Merlot",
            distractors: ["Cabernet Sauvignon", "Syrah (Shiraz)"],
            explanation: "Jedná se o Merlot Rosé v pozdním sběru z Velkopavlovické podoblasti."
          },
          {
            id: "rv-mer-q2",
            question: "Jaký lahodný dezertní tón doplňuje ovocitost jahod a malin v chuti tohoto rosé?",
            correctAnswer: "Tóny jemné smetany",
            distractors: ["Tóny hořké čokolády", "Tóny čerstvého zázvoru"],
            explanation: "V popisu je uvedena vůně malin, jahod a třešní s ovocitou chutí s tóny smetany."
          }
        ]
      }
    ]
  },
  {
    id: "vina-cervene",
    name: "Červená vína (0,75l)",
    badge: "Červená vína",
    description: "Vyzrálá plná červená vína školená v dubových sudech z Čech, Moravy, Rakouska a Kalifornie",
    iconName: "Wine",
    items: [
      {
        id: "cervene-pinot-noir-rouci-kraus",
        name: "Pinot Noir Roučí Malé – Kraus",
        weight: "0,75 l",
        price: "425,-",
        allergens: ["12"],
        description: "Mělnicko, Čechy. Lehké víno, chuť lesní jahody a červené zahradní ovoce.",
        questions: [
          {
            id: "cv-rou-q1",
            question: "Jak se nazývá tradiční český historický název pro odrůdu Pinot Noir použitý vinařstvím Kraus?",
            correctAnswer: "Roučí",
            distractors: ["Klaret", "Šedák"],
            explanation: "Roučí je staročeský tradiční název pro Rulandské modré (Pinot Noir)."
          }
        ]
      },
      {
        id: "cervene-dornfelder-bilkovi",
        name: "Dornfelder – Bílkovi",
        weight: "0,75 l",
        price: "419,-",
        allergens: ["12"],
        description: "Velkopavlovicko, Morava. 12 měsíců zrání v sudu, vůně ostružin, plná, harmonická chuť rybízu, třešní a malin.",
        questions: [
          {
            id: "cv-dorn-q1",
            question: "Jak dlouho zrál Dornfelder od Bílkových v sudu a jaké tmavé ovoce tvoří jeho vůni?",
            correctAnswer: "12 měsíců v sudu, vůně ostružin",
            distractors: ["6 měsíců v sudu, vůně jahod", "24 měsíců v sudu, vůně povidel"],
            explanation: "Víno zrálo 12 měsíců v sudu a vyznačuje se vůní ostružin a plnou chutí rybízu a třešní."
          }
        ]
      },
      {
        id: "cervene-cuvee-red-kolby",
        name: "Cuvée Red (Cabernet Sauvignon, Merlot) – Kolby",
        weight: "0,75 l",
        price: "649,-",
        allergens: ["12"],
        description: "Mikulovsko, Morava. Plné, komplexní, dlouhý závěr, sytá granátová barva, chuť čokolády, koření, tmavého ovoce a kouře.",
        questions: [
          {
            id: "cv-cred-q1",
            question: "Které dvě klasické bordeauxské odrůdy tvoří moravské Cuvée Red Kolby?",
            correctAnswer: "Cabernet Sauvignon a Merlot",
            distractors: ["Rulandské modré a Svatovavřinecké", "Zweigeltrebe a Frankovka"],
            explanation: "Cuvée Red od Kolby je kupáží Cabernetu Sauvignon a Merlotu s tóny čokolády a kouře."
          }
        ]
      },
      {
        id: "cervene-nina-cuvee-bilkovi",
        name: "Nina Cuvée (Merlot, Frankovka) – Bílkovi",
        weight: "0,75 l",
        price: "699,-",
        allergens: ["12"],
        description: "Velkopavlovicko, Morava. Plné, 14 měsíců v dubových sudech, vůně rybízu a pražené kávy, chuť hořké čokolády a švestek.",
        questions: [
          {
            id: "cv-nina-q1",
            question: "Jaké dvě ušlechtilé odrůdy a jaké dřevo formují Nina Cuvée od Bílkových?",
            correctAnswer: "Merlot a Frankovka, 14 měsíců v dubových sudech",
            distractors: ["Cabernet Moravia a Modrý Portugal, 6 měsíců v nerezovém tanku", "Dornfelder a Alibernet, 8 měsíců v akátu"],
            explanation: "Nina Cuvée spojuje Merlot a Frankovku po 14 měsících v dubových sudech s tóny kávy a čokolády."
          }
        ]
      },
      {
        id: "cervene-zweigelt-feller-artinger",
        name: "Zweigelt – Weingut Feller-Artinger",
        weight: "0,75 l",
        price: "660,-",
        allergens: ["12"],
        description: "Burgenland, Rakousko. Svěží, vůně po bobulovitém ovoci, sametová chuť tmavého ovoce, dubu, bylin a tabáku.",
        questions: [
          {
            id: "cv-zwei-q1",
            question: "Z jaké rakouské vinařské oblasti pochází Zweigelt od vinařství Feller-Artinger?",
            correctAnswer: "Burgenland",
            distractors: ["Kremstal", "Kamptal"],
            explanation: "Červená vína Zweigelt od Feller-Artinger pocházejí ze slunného rakouského Burgenlandu."
          }
        ]
      },
      {
        id: "cervene-pinot-noir-philipp-kuhn",
        name: "Pinot Noir Tradition – Philipp Kuhn",
        weight: "0,75 l",
        price: "959,-",
        allergens: ["12"],
        description: "Pfalz, Německo. Středně plné, vůně lesních jahod, sušených švestek, mandlí, třešní, hořké čokolády a kůže, výrazné třísloviny, dochuť zralých třešní a fialek.",
        questions: [
          {
            id: "cv-kuhn-pn-q1",
            question: "Které květinové tóny zanechává v elegantní dochuti německý Pinot Noir Philipp Kuhn?",
            correctAnswer: "Fialky (s tóny zralých třešní)",
            distractors: ["Růže a heřmánek", "Levandule a šeřík"],
            explanation: "Tento komplexní Pinot Noir z Pfalze zanechává ušlechtilou dochuť zralých třešní a lesních fialek."
          }
        ]
      },
      {
        id: "cervene-cabernet-lapis-luna",
        name: "Cabernet Sauvignon – Lapis Luna",
        weight: "0,75 l",
        price: "789,-",
        allergens: ["12"],
        description: "Lodi, Kalifornie. Středně plné, příjemná kyselina, dlouhý závěr, tmavé ovoce, černý rybíz, koření, skořice a hřebíček.",
        questions: [
          {
            id: "cv-luna-cs-q1",
            question: "Z jaké vyhlášené kalifornské oblasti pochází Cabernet Sauvignon Lapis Luna a jaké koření v něm ucítíte?",
            correctAnswer: "Lodi (Kalifornie), koření se skořicí a hřebíčkem",
            distractors: ["Sonoma Valley, zelený pepř a vanilka", "Monterey, badyán a muškátový oříšek"],
            explanation: "Cabernet Lapis Luna pochází z teplé oblasti Lodi v Kalifornii a voní po černém rybízu, skořici a hřebíčku."
          }
        ]
      },
      {
        id: "cervene-zinfandel-hendry",
        name: "Zinfandel Hendry Ranch HRW",
        weight: "0,75 l",
        price: "995,-",
        allergens: ["12"],
        description: "Napa Valley, Kalifornie. Plné víno, mohutné, dlouhý kořenitý závěr, šťavnatá kyselinka, chuť tmavé bobulovité ovoce, sladké koření a hořká čokoláda.",
        questions: [
          {
            id: "cv-zin-q1",
            question: "Z jakého slavného kalifornského údolí pochází mohutný Zinfandel Hendry Ranch HRW?",
            correctAnswer: "Napa Valley",
            distractors: ["Santa Barbara", "Paso Robles"],
            explanation: "Zinfandel Hendry Ranch HRW pochází z nejprestižnějšího amerického vinařského údolí Napa Valley."
          },
          {
            id: "cv-zin-q2",
            question: "Jakou chuťovou kompozici nabízí tento plný kalifornský Zinfandel?",
            correctAnswer: "Tmavé bobulovité ovoce, sladké koření a hořká čokoláda",
            distractors: ["Zelená jablka, angrešt a máta", "Kandovaný pomeranč a bílá čokoláda"],
            explanation: "Jedná se o mohutné víno s dlouhým kořenitým závěrem a tóny tmavého bobulovitého ovoce a hořké čokolády."
          }
        ]
      }
    ]
  }
];
