/**
 * FUZE Gastro Akademie – Kompletní Knihovna pojmů, surovin a nápojů
 * 
 * Obsahuje:
 * 1. Kulinářský lexikon: cizí gastronomické názvy, masné řezy, omáčky, techniky a gurmánské ingredience z menu Fuze
 * 2. Nápojová encyklopedie: všechna vína, rumy, tequily, whisky, likéry, giny, vodky, pálenky a řemeslná piva Fuze
 */

export interface CulinaryTerm {
  id: string;
  name: string;
  originalTerm?: string;
  category: 'meat_cuts' | 'sauces_dressings' | 'gourmet_ingredients' | 'culinary_techniques' | 'world_flavors' | 'pastry_sweets';
  categoryName: string;
  origin: string;
  shortDescription: string;
  ingredients: string[];
  flavorProfile: string;
  culinaryUsage: string;
  fuzeMenuAppearances: string[];
  staffTips: string;
  tags: string[];
}

export interface BeverageItem {
  id: string;
  name: string;
  category: 'wine_white' | 'wine_red' | 'wine_rose' | 'wine_sparkling' | 'rum' | 'tequila' | 'whisky' | 'brandy_cognac' | 'liqueur_spirit' | 'gin' | 'vodka' | 'beer_craft';
  categoryName: string;
  producer: string;
  origin: string;
  region: string;
  volume: string;
  abv: string;
  price: string;
  rawIngredients: string;
  productionProcess: string;
  flavorProfile: string;
  foodPairing: string;
  staffNotes: string;
  tags: string[];
}

export const CULINARY_TERMS: CulinaryTerm[] = [
  {
    "id": "chimichurri",
    "name": "Chimichurri",
    "originalTerm": "Chimichurri (Argentina)",
    "category": "sauces_dressings",
    "categoryName": "Omáčky a salsy",
    "origin": "Argentina / Uruguay",
    "shortDescription": "Svěží jihoamerická nevařená bylinková omáčka na bázi čerstvých bylin, česneku, octa a olivového oleje.",
    "ingredients": [
      "Hladkolistá petrželka",
      "Čerstvé oregano",
      "Česnek",
      "Chilli vločky (ají molido)",
      "Červený vinný ocet",
      "Kvalitní extra panenský olivový olej",
      "Mořská sůl a čerstvě mletý černý pepř"
    ],
    "flavorProfile": "Svěží, bylinkový, lehce pikantní s příjemnou kyselinkou, která skvěle prořezává tučnější pečená a grilovaná masa.",
    "culinaryUsage": "Používá se jako studená omáčka k masu, marináda nebo dip. Suroviny se sekají nožem (nikoli mixují na kaši), aby vynikla textura a barva bylin.",
    "fuzeMenuAppearances": [
      "Grilovaný vepřový bůček s karamelizovanou yuzu omáčkou a chimichurri",
      "Chimmichurri omáčka (samostatná studená omáčka)"
    ],
    "staffTips": "Doporučte hostům k tučnějším masům (bůček, steaky). Kyselost vinného octa a svěžest petržele fantasticky vyvažují bohatost masa a tuk.",
    "tags": [
      "omáčka",
      "bylinky",
      "studená kuchyně",
      "Argentina",
      "gril"
    ]
  },
  {
    "id": "duroc",
    "name": "Duroc",
    "originalTerm": "Duroc Pork (USA)",
    "category": "meat_cuts",
    "categoryName": "Maso a masné řezy",
    "origin": "Severní Amerika (New York a New Jersey, polovina 19. století)",
    "shortDescription": "Prestižní plemeno prasat proslulé vysokým podílem nitrosvalového tuku (mramorování), jemnými svalovými vlákny a výjimečnou šťavnatostí.",
    "ingredients": [
      "100% čistokrevné nebo křížené vepřové maso plemene Duroc (typická červenohnědá barva prasat)",
      "Bohatý nitrosvalový intramuskulární tuk",
      "Vysoký obsah kyseliny olejové"
    ],
    "flavorProfile": "Výrazná plná masová chuť, nesrovnatelně šťavnatější a křehčí než běžné průmyslové vepřové maso, s jemně nasládlým oříškovým podtónem tuku.",
    "culinaryUsage": "Ideální pro přípravu vysokých řízků, kotlet, pečení a pomalu pečených mas. Díky mramorování zůstává maso po smažení či pečení dokonale šťavnaté a nevysuší se.",
    "fuzeMenuAppearances": [
      "Vysoký vepřový řízek z plemene Duroc s omáčkou fines herbes, bramborovou kaší a bramborovými křupkami"
    ],
    "staffTips": "Zdůrazněte hostovi, že Duroc je ve vepřovém mase ekvivalentem plemene Black Angus u hovězího. Řízek je proto vysoký a zůstává uprostřed úžasně šťavnatý.",
    "tags": [
      "vepřové",
      "maso",
      "Duroc",
      "řízek",
      "mramorování"
    ]
  },
  {
    "id": "cornichons",
    "name": "Cornichons",
    "originalTerm": "Cornichons (Francie)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Francie",
    "shortDescription": "Drobné francouzské nakládané okurčičky s jemnými bradavičkami sklízené v raném stadiu zrání v pikantním octovém nálevu.",
    "ingredients": [
      "Mladé mini polní okurky (délka 3–5 cm)",
      "Bílý vinný nebo lihový ocet",
      "Estragon",
      "Koriandr a hořčičné semínko",
      "Perlové cibulky a mořská sůl"
    ],
    "flavorProfile": "Křupavé, výrazně kyselkavé s bylinkovými tóny estragonu a lehkou hořčičnou pikancí.",
    "culinaryUsage": "Nenahraditelná součást hovězího tataráku, studených masových mís, paštik (terrin) a raclette. Jemně nasekané dodávají texturu a svěží kyselost.",
    "fuzeMenuAppearances": [
      "Krájený hovězí tatarák z květové špičky, okurčičky cornichons, marinované šalotky, bramborová sláma"
    ],
    "staffTips": "V tataráku cornichons zajišťují dokonalou křupavost a kyselou protiváhu bohatému hovězímu masu z květové špičky krájenému na kostičky.",
    "tags": [
      "okurky",
      "nakládaná zelenina",
      "Francie",
      "tatarák"
    ]
  },
  {
    "id": "salsa-verde",
    "name": "Salsa verde",
    "originalTerm": "Salsa verde (Itálie / Středomoří)",
    "category": "sauces_dressings",
    "categoryName": "Omáčky a salsy",
    "origin": "Itálie (Piemont / Lombardie)",
    "shortDescription": "Tradiční středomořská nevařená zelená bylinková salsa plná umami ze slaných ančoviček a naložených kaparů.",
    "ingredients": [
      "Čerstvá hladkolistá petržel",
      "Solení ančovičky (sardelky)",
      "Naložené kapary",
      "Česnek",
      "Dijonská hořčice nebo střídka bílého chleba namočená v octu",
      "Kvalitní panenský olivový olej a kapka vinného octa"
    ],
    "flavorProfile": "Bylinkový, slaný, kyselkavý s hlubokou chutí umami. Intenzivnější a slanější než jihoamerické chimichurri díky ančovičkám a kaparům.",
    "culinaryUsage": "Klasický doprovod k vařenému i pečenému masu (bollito misto), rybám z pece a grilované zelenině.",
    "fuzeMenuAppearances": [
      "Naše salsa verde (samostatná studená omáčka k masům z grilu)"
    ],
    "staffTips": "Vysvětlete rozdíl mezi chimichurri a salsa verde: Chimichurri staví na oreganu a chilli, zatímco Salsa Verde je italská klasika s kapary a ančovičkami přinášejícími přirozené umami.",
    "tags": [
      "omáčka",
      "bylinky",
      "ančovičky",
      "kapary",
      "Itálie"
    ]
  },
  {
    "id": "choron",
    "name": "Choron omáčka",
    "originalTerm": "Sauce Choron (Francie)",
    "category": "sauces_dressings",
    "categoryName": "Omáčky a salsy",
    "origin": "Francie (Paříž, 19. století, šéfkuchař Alexandre Étienne Choron)",
    "shortDescription": "Luxusní teplá emulgovaná omáčka vycházející z omáčky Béarnaise, do které se vmíchává redukce ze sladkých zralých rajčat.",
    "ingredients": [
      "Čerstvé žloutky",
      "Přepuštěné máslo (clarified butter)",
      "Bílé víno a šalotkový estragonový ocet",
      "Čerstvý estragon a kerblík",
      "Koncentrovaný rajčatový protlak / pyré z pečených rajčat",
      "Špetka kajenského pepře a soli"
    ],
    "flavorProfile": "Sametově jemná, máslová omáčka s anýzovým nádechem estragonu a sladkokyselou hloubkou pečených rajčat. Má krásnou korálově růžovou barvu.",
    "culinaryUsage": "Podává se teplá k hovězím steakům, květové špičce, grilovaným rybám a pečené zelenině.",
    "fuzeMenuAppearances": [
      "Choron – teplá omáčka k masům z grilu a pece na dřevo"
    ],
    "staffTips": "Skvělá volba pro hosty, kteří mají rádi Béarnaise nebo Holandskou omáčku, ale chtějí jemnější a ovocnější rajčatový tón k hovězímu steaku.",
    "tags": [
      "teplá omáčka",
      "máslo",
      "žloutky",
      "rajčata",
      "Francie"
    ]
  },
  {
    "id": "fines-herbes",
    "name": "Fines herbes",
    "originalTerm": "Fines herbes (Francie)",
    "category": "sauces_dressings",
    "categoryName": "Omáčky a salsy",
    "origin": "Francie (tradiční haute cuisine)",
    "shortDescription": "Kultovní francouzské bylinkové kvarteto skládající se z hladkolisté petrželky, pažitky, kerblíku a estragonu.",
    "ingredients": [
      "Kerblík (anthriscus cerefolium) – jemná anýzová chuť",
      "Estragon (artemisia dracunculus) – výrazná bylinková nóta",
      "Pažitka – jemný cibulový šmrnc",
      "Hladkolistá petržel – svěžest a zemitost",
      "Smetana, máslový základ a jemný telecí vývar"
    ],
    "flavorProfile": "Delikátní, svěží, bylinkový s lehkým tónem lékořice a anýzu, podtržený jemným máslovým a smetanovým tělem.",
    "culinaryUsage": "Bylinky se přidávají až v samém závěru vaření, aby neztratily prchavé silice a svěží zelenou barvu.",
    "fuzeMenuAppearances": [
      "Naše fines herbes – teplá bylinková omáčka k vysokému vepřovému řízku z plemene Duroc"
    ],
    "staffTips": "Zdůrazněte hostům jemnost této omáčky – je to tradiční francouzská bylinková klasika, která řízek nezakryje, ale elegantně podtrhne křehkost masa Duroc.",
    "tags": [
      "bylinky",
      "omáčka",
      "francouzská kuchyně",
      "estragon",
      "kerblík"
    ]
  },
  {
    "id": "padron-peppers",
    "name": "Papričky Padrón",
    "originalTerm": "Pimientos de Padrón (Španělsko)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Španělsko (obec Padrón v Galicii)",
    "shortDescription": "Drobné zelené španělské papričky, které se zprudka opékají na oleji a solí vločkovou solí. Legendární jsou tím, že většina je sladká, ale každá desátá pálí.",
    "ingredients": [
      "Čerstvé zelené papričky Capsicum annuum var. Annuum",
      "Kvalitní olej na smažení",
      "Hrubá mořská vločková sůl (Maldon)"
    ],
    "flavorProfile": "Svěží, travnatá, jemně nasládlá chuť s kouřovým nádechem z opečení na žáru. Slavné galicijské přísloví praví: „Os pementos de Padrón, uns pican e outros non“ (Padrónské papričky, jedny pálí a jiné ne).",
    "culinaryUsage": "Zprudka se opečou na rozpálené pánvi nebo grilu, dokud slupka nezhnědne a nenafoukne se, a ihned se posypou solí.",
    "fuzeMenuAppearances": [
      "Opečené papričky Padrón jako součást servisu k US Prime květové špičce a US Prime vysokému roštěnci"
    ],
    "staffTips": "Zábavný fakt pro hosty: naprostá většina je jemná a sladká, ale sem tam se objeví pikantní kousek, což ze stolování dělá malou kulinářskou ruletu!",
    "tags": [
      "papričky",
      "Španělsko",
      "gril",
      "tapas",
      "příloha"
    ]
  },
  {
    "id": "us-prime",
    "name": "US Prime Beef",
    "originalTerm": "USDA Prime Beef (USA)",
    "category": "meat_cuts",
    "categoryName": "Maso a masné řezy",
    "origin": "Spojené státy americké (USDA systém certifikace)",
    "shortDescription": "Absolutní špička amerického hovězího masa – nejvyšší jakostní stupeň, který obdrží pouze necelá 3 % veškerého dobytka v USA.",
    "ingredients": [
      "Hovězí maso z mladého krmeného dobytka (převážně plemena Black Angus)",
      "Vysoký stupeň zrnového dokrmování (kukuřice, obilí)",
      "Husté, rovnoměrné mramorování (marbling) uvnitř svaloviny"
    ],
    "flavorProfile": "Neuvěřitelně máslová, bohatá hovězí chuť. Díky vysokému obsahu nitrosvalového tuku se maso na grilu doslova peče ve vlastní šťávě a rozplývá se na jazyku.",
    "culinaryUsage": "Steaky z vysokých a nízkých roštěnců, květové špičky, surovina pro luxusní burgery a pastrami.",
    "fuzeMenuAppearances": [
      "US Prime hovězí květová špička z grilu a pece na dřevo",
      "US Prime vysoký roštěnec z grilu",
      "US Prime hovězí burger s opečenou slaninou a čedarem",
      "Naše pastrami z US Prime hovězího žebra"
    ],
    "staffTips": "Klíčový prodejní argument: US Prime je záruka nejvyšší možné kvality a šťavnatosti, jakou lze v americkém mase získat (vyšší než Choice či Select).",
    "tags": [
      "hovězí",
      "maso",
      "steaky",
      "USA",
      "mramorování",
      "gril"
    ]
  },
  {
    "id": "picanha-kvetova-spicka",
    "name": "Květová špička (Picanha)",
    "originalTerm": "Picanha / Rump Cap / Tafelspitz",
    "category": "meat_cuts",
    "categoryName": "Maso a masné řezy",
    "origin": "Brazílie / Jižní Amerika a Rakousko",
    "shortDescription": "Trojúhelníkový sval z horní části hovězí kýty (m. biceps femoris) zakončený typickou souvislou vrstvou křupavého bílého tuku.",
    "ingredients": [
      "Hovězí květová špička (vrchní šál kýty)",
      "Tukový pás (tukové krytí chránící maso před vysušením)"
    ],
    "flavorProfile": "Velmi intenzivní hovězí chuť, pevnější, ale křehká textura. Tukový kryt při pečení pomalu odtéká a dodává masu neskutečnou chuťovou hloubku.",
    "culinaryUsage": "V Jižní Americe královna churrasca na špízech, v Rakousku základ pro Tafelspitz, v moderní gastronomii skvělý steak i surovina pro jemně krájený tatarák.",
    "fuzeMenuAppearances": [
      "Krájený hovězí tatarák z květové špičky",
      "US Prime hovězí květová špička z pece na dřevo s papričkami Padrón"
    ],
    "staffTips": "Hostům vysvětlete, že tatarák ve Fuze se nekrájí z libové svíčkové bez chuti, ale právě z květové špičky, která má mnohem výraznější a plnější hovězí charakter.",
    "tags": [
      "hovězí",
      "picanha",
      "steak",
      "tatarák",
      "maso"
    ]
  },
  {
    "id": "rib-eye-rostenec",
    "name": "Vysoký roštěnec (Rib Eye)",
    "originalTerm": "Rib Eye Steak / Entrecôte",
    "category": "meat_cuts",
    "categoryName": "Maso a masné řezy",
    "origin": "Tradiční řez hovězího (Francie / USA)",
    "shortDescription": "Nejšťavnatější a nejpopulárnější steakový řez z přední části hřbetu s centrálním tukovým okem (eye of fat).",
    "ingredients": [
      "Hovězí roštěnec mezi 6. a 12. žebrem",
      "Středové tukové oko a výrazné intramuskulární mramorování"
    ],
    "flavorProfile": "Šťavnatý, robustní a plný. Tukové oko se během pečení na vysoké teplotě rozpouští a maso promazává zevnitř.",
    "culinaryUsage": "Ideální pro přípravu na vysokém žáru (dřevěné uhlí, Josper, litinový tál). Doporučená úprava Medium-Rare až Medium, aby se tuk stihl rozpustit.",
    "fuzeMenuAppearances": [
      "US Prime vysoký roštěnec z grilu a pece na dřevo s papričkami Padrón"
    ],
    "staffTips": "Doporučte propečení Medium Rare nebo Medium. U roštěnce je potřeba, aby se vnitřní tuk prohřál a rozpustil – v tu chvíli je steak nejlahodnější.",
    "tags": [
      "hovězí",
      "steak",
      "gril",
      "roštěnec",
      "rib eye"
    ]
  },
  {
    "id": "pastrami",
    "name": "Pastrami",
    "originalTerm": "Pastrami (Rumunsko / New York deli)",
    "category": "meat_cuts",
    "categoryName": "Maso a masné řezy",
    "origin": "Židovská kuchyně východní Evropy (Rumunsko), proslavená newyorskými lahůdkářstvími (Katz's Deli)",
    "shortDescription": "Hovězí maso (hrudí, žebro) naložené v kořeněném láku, obalené v krustě z drceného koriandru a pepře, pomalu zauzené a následně tažené v páře doměkka.",
    "ingredients": [
      "Hovězí žebro nebo hrudí (brisket)",
      "Dusitanový nebo mořský solný lák s hnědým cukrem, bobkovým listem a novým kořením",
      "Krusta: hrubě mletý černý pepř, pražený koriandr, česnek, hořčičné semínko",
      "Dřevěný kouř a hliněná pec"
    ],
    "flavorProfile": "Kouřový, kořeněný, pikantní s tóny koriandru a pepře. Maso se po dlouhé tepelné úpravě doslova rozpadá na jemná vlákna.",
    "culinaryUsage": "Krájí se na plátky a servíruje se v teplých sendvičích v křupavém kváskovém chlebu s roztaveným sýrem, hořčicí a nakládanou zeleninou.",
    "fuzeMenuAppearances": [
      "Naše pastrami z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát v kváskovém chlebu"
    ],
    "staffTips": "Ve Fuze nepoužíváme kupované polotovary – žebro se marinuje, udí a peče přímo v naší hliněné peci na dřevo!",
    "tags": [
      "pastrami",
      "uzené",
      "hovězí",
      "sendvič",
      "pekárna"
    ]
  },
  {
    "id": "raclette",
    "name": "Sýr Raclette",
    "originalTerm": "Fromage à Raclette (Švýcarsko / Savojsko)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Švýcarsko (kanton Valais)",
    "shortDescription": "Tradiční polotvrdý sýr z nepasterizovaného nebo pasterizovaného kravského mléka, vyhlášený svou bezkonkurenční tavitelností.",
    "ingredients": [
      "Kravské mléko z horských pastvin",
      "Přírodní syřidlo a sůl",
      "Doba zrání 3 až 6 měsíců s pravidelným vymýváním kůry"
    ],
    "flavorProfile": "Za studena mírně pikantní, po roztavení získává krémovou, oříškovou, máslovou a plnou chuť s neodolatelnou vůní.",
    "culinaryUsage": "Zahřívá se a stahuje (škrabe – od francouzského 'racler') na pečené brambory, uzeniny a do teplých sendvičů.",
    "fuzeMenuAppearances": [
      "Naše pastrami ze žebra se sýrem raclette a zelným salátem v opečeném kváskovém chlebu"
    ],
    "staffTips": "Dokonale propojuje křupavý opečený kváskový chléb a šťavnaté kořeněné maso pastrami do bohatého dekadentního sousta.",
    "tags": [
      "sýr",
      "Švýcarsko",
      "tavený sýr",
      "pastrami"
    ]
  },
  {
    "id": "red-leicester",
    "name": "Red Leicester",
    "originalTerm": "Red Leicester Cheese (Anglie)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Velká Británie (Leicestershire, od 18. století)",
    "shortDescription": "Tradiční anglický tvrdý sýr z kravského mléka, nápadný svou sytě oranžovo-červenou barvou získanou z přírodního barviva annatto.",
    "ingredients": [
      "Pasterizované plnotučné kravské mléko",
      "Přírodní barvivo Annatto (ze semen oreláníku barvířského)",
      "Mléčné kultury a syřidlo"
    ],
    "flavorProfile": "Bohatý, lehce nasládlý s oříškovými a karamelovými tóny, jemně drobivá, ale krémová textura.",
    "culinaryUsage": "Skvěle se zapéká, taví a strouhá na teplá jídla, hranolky a do sýrových omáček.",
    "fuzeMenuAppearances": [
      "Hranolky s lanýžovou majonézou a sýrem Red Leicester"
    ],
    "staffTips": "Vysvětlete hostům sytou barvu – sýr není uměle barvený chemií, ale semínky jihoamerického keře Annatto podle staleté anglické receptury.",
    "tags": [
      "sýr",
      "Anglie",
      "hranolky",
      "lanýže"
    ]
  },
  {
    "id": "foie-gras",
    "name": "Foie gras",
    "originalTerm": "Foie gras (Francie)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Francie (původně starověký Egypt a Řím)",
    "shortDescription": "Kultovní francouzská kulinářská delikatesa – přirozeně ztučnělá játra kachen nebo hus krmených vybraným zrnem.",
    "ingredients": [
      "Kachní játra (Foie gras de canard)",
      "Koňak / Armagnac a portské víno na marinování",
      "Bílý pepř, muškátový oříšek a sůl",
      "Pivní želé Kasteel Rouge"
    ],
    "flavorProfile": "Mimořádně bohatá, hedvábná a máslová chuť, která se okamžitě rozplývá na jazyku při tělesné teplotě.",
    "culinaryUsage": "Zpracovává se do jemných terin, paštik nebo se zprudka opéká na pánvi. Vždy vyžaduje kontrastní sladkokyselý doprovod (ovoce, želé, brioška).",
    "fuzeMenuAppearances": [
      "Paštika z kachních foie gras v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška"
    ],
    "staffTips": "Doporučte párování s belgickým višňovým pivem Kasteel Rouge nebo sklenkou Pálavy – ovocná sladkost a kyselinka vytvoří v ústech nebeskou harmonii.",
    "tags": [
      "foie gras",
      "kachní játra",
      "paštika",
      "Francie",
      "delikatesa"
    ]
  },
  {
    "id": "consomme",
    "name": "Hovězí consommé",
    "originalTerm": "Consommé de bœuf (Francie)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Francie",
    "shortDescription": "Křišťálově čirý, silný a koncentrovaný hovězí vývar zbavený všech kalů a přebytečného tuku speciální kuchařskou technikou klarifikace.",
    "ingredients": [
      "Hovězí kosti a přední maso pomalu tažené mnoho hodin",
      "Kořenová zelenina (mrkev, celer, petržel, pórek)",
      "Klarifikační fáše: vaječné bílky a libové mleté hovězí maso",
      "Jemný játrový knedlíček"
    ],
    "flavorProfile": "Hluboká, čistá esence hovězího masa s vysokým obsahem želatiny, která na rtech zanechává příjemný sametový film.",
    "culinaryUsage": "Podává se vroucí jako luxusní polévka s jemnou vložkou zeleniny julienne a játrovým knedlíčkem.",
    "fuzeMenuAppearances": [
      "Hovězí consommé s jemným játrovým knedlíčkem a zeleninou"
    ],
    "staffTips": "Host ocení informaci o náročnosti přípravy – consommé není obyčejný vývar, ale dvojitě zesílený a bílky vyčištěný bujón, který vyžaduje hodiny trpělivé práce.",
    "tags": [
      "polévka",
      "vývar",
      "consommé",
      "francouzská technika"
    ]
  },
  {
    "id": "valrhona-dulcey",
    "name": "Valrhona Dulcey",
    "originalTerm": "Chocolat Valrhona Dulcey 35% (Francie)",
    "category": "pastry_sweets",
    "categoryName": "Cukrářství a dezerty",
    "origin": "Francie (čokoládovna Valrhona, Tain l'Hermitage)",
    "shortDescription": "První tzv. „blond“ čokoláda na světě, vytvořená náhodným pomalým karamelizováním bílé čokolády mistrem Frédéricem Bau.",
    "ingredients": [
      "Kakaové máslo (min. 35 %)",
      "Sušené mléko pomalu karamelizované Maillardovou reakcí",
      "Cukr a přírodní vanilkový extrakt",
      "Špetka soli vyvažující sladkost"
    ],
    "flavorProfile": "Intenzivní tóny máslového karamelu, pečeného piškotu (sablé), dulce de leche a jemné mořské soli.",
    "culinaryUsage": "Používá se k výrobě prémiových ganache, pěn, pralinek a dezertů nejvyšší cukrářské ligy.",
    "fuzeMenuAppearances": [
      "Dortíky s ganache ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka"
    ],
    "staffTips": "Jeden z nejoriginálnějších dezertů v Praze – vizuálně vypadá přesně jako zelená chmelová šiška, ale uvnitř skrývá tuto luxusní karamelovou blond čokoládu s višní.",
    "tags": [
      "čokoláda",
      "Valrhona",
      "dezert",
      "karamel",
      "chmel"
    ]
  },
  {
    "id": "ganache",
    "name": "Ganache",
    "originalTerm": "Ganache (Francie)",
    "category": "pastry_sweets",
    "categoryName": "Cukrářství a dezerty",
    "origin": "Francie / Švýcarsko (pařížská cukrárna Siraudin, cca 1860)",
    "shortDescription": "Základní pilíř francouzské cukrařiny – hladká emulze horké smetany a vysoce kvalitní čokolády.",
    "ingredients": [
      "Výběrová čokoláda (hořká, mléčná nebo blond)",
      "Vysokoprocentní čerstvá smetana ke šlehání (min. 35 % tuku)",
      "Máslo nebo glukóza pro hedvábný lesk a pružnost"
    ],
    "flavorProfile": "Neuvěřitelně hladká, krémová textura, která se sametově rozplývá na patře a přenáší čistou chuť kakaových bobů.",
    "culinaryUsage": "Náplň do dortů, makronek, tartaletek, pralinek a moderních tvarovaných dezertů.",
    "fuzeMenuAppearances": [
      "Dortíky s ganache ve tvaru chmelových šišek"
    ],
    "staffTips": "Při správné emulgaci ganache netvoří žádné hrudky a vytváří dokonale krémové jádro chmelového dortíku.",
    "tags": [
      "cukrařina",
      "ganache",
      "čokoláda",
      "krém",
      "dezert"
    ]
  },
  {
    "id": "espuma",
    "name": "Espuma",
    "originalTerm": "Espuma (Španělsko)",
    "category": "culinary_techniques",
    "categoryName": "Kulinářské techniky",
    "origin": "Španělsko (Katalánsko, šéfkuchař Ferran Adrià v elBulli)",
    "shortDescription": "Moderní kulinářská technika vytváření extrémně nadýchané pěny v tlakové sifonové láhvi za pomoci oxidu dusného (N2O).",
    "ingredients": [
      "Ochucená tekutina nebo pyré (krupicová směs, mléko, vanilka)",
      "Přírodní stabilizátor (tuk, želatina, agar nebo vaječný bílek)",
      "Potravinářský plyn N2O (oxid dusný)"
    ],
    "flavorProfile": "Lehká jako obláček, okamžitě uvolňuje aromatické látky a chuť na jazyku bez pocitu těžkosti.",
    "culinaryUsage": "Umožňuje servírovat tradiční pokrmy v moderní beztížné textuře.",
    "fuzeMenuAppearances": [
      "Krupicová kaše z espumy s kakaem a máslem (z dětského i stálého menu)"
    ],
    "staffTips": "Naše krupicová kaše není hutná hmota z hrnce – díky espumě je to neuvěřitelně lehký a nadýchaný krém, který si zamilují děti i dospělí.",
    "tags": [
      "espuma",
      "molekulární gastronomie",
      "sifon",
      "krupicová kaše"
    ]
  },
  {
    "id": "brioche",
    "name": "Brioška (Brioche)",
    "originalTerm": "Brioche (Francie, Normandie)",
    "category": "pastry_sweets",
    "categoryName": "Cukrářství a pečivo",
    "origin": "Francie (Normandie, 15. století)",
    "shortDescription": "Vznešené francouzské kynuté pečivo bohaté na máslo a vejce, které mu dávají zlatavou barvu a nadýchanou střídku.",
    "ingredients": [
      "Pšeničná mouka",
      "Mimořádně vysoký podíl másla (až 50 % hmotnosti mouky)",
      "Čerstvá vejce a žloutky",
      "Mléko, droždí, špetka cukru a soli"
    ],
    "flavorProfile": "Jemná, máslová, nasládlá chuť s křupavou kůrkou a jemnou pavučinkovou střídkou.",
    "culinaryUsage": "Krájí se na plátky a opéká k paštikám a foie gras, nebo slouží jako prémiové pečivo k pečeným masům a burgerům.",
    "fuzeMenuAppearances": [
      "Opečená máslová brioška k paštice z kachních foie gras",
      "Opečená česneková brioška k vepřovým žebrům marinovaným v pivu",
      "Opečená česneková brioška (samostatná příloha)"
    ],
    "staffTips": "Máslo v briošce skvěle absorbuje šťávu z žeber i delikátní tuk z kachních foie gras.",
    "tags": [
      "brioška",
      "pečivo",
      "máslo",
      "Francie",
      "příloha"
    ]
  },
  {
    "id": "smrze",
    "name": "Smrže (Morchella)",
    "originalTerm": "Morchella / Morels",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Lesy mírného pásma Evropy a Severní Ameriky",
    "shortDescription": "Jedny z nejvzácnějších a nejchutnějších jarních lesních hub s charakteristickým kuželovitým kloboukem s voštinovou strukturou.",
    "ingredients": [
      "Pravé lesní smrže (sušené nebo čerstvé jarní)",
      "Duté plodnice bohaté na aromatické sloučeniny"
    ],
    "flavorProfile": "Výrazně zemitá, dřevitá, oříšková a masitá chuť s intenzivním umami, která dodává omáčkám hluboký lesní charakter.",
    "culinaryUsage": "Po rehydrataci se restují na másle, přidávají do luxusních klobás, terin a smetanových omáček k telecímu či drůbežímu masu.",
    "fuzeMenuAppearances": [
      "Naše telecí klobása se smrži, kaštany a sušenými švestkami, lanýžová omáčka"
    ],
    "staffTips": "Smrže jsou v kulinářském světě řazeny hned za lanýže jako králové hub. Naše telecí klobása s nimi má nezaměnitelný noblesní šmrnc.",
    "tags": [
      "houby",
      "smrže",
      "delikatesa",
      "telecí",
      "lesní surovina"
    ]
  },
  {
    "id": "yuzu",
    "name": "Yuzu",
    "originalTerm": "Yuzu / Citrus junos (Japonsko / Východní Asie)",
    "category": "world_flavors",
    "categoryName": "Světové chutě a asijská fúze",
    "origin": "Japonsko a východní Asie",
    "shortDescription": "Vzácné a ceněné asijské citrusové ovoce s neobyčejně komplexním a pronikavým aroma.",
    "ingredients": [
      "Čistá šťáva a kůra z plodů citrusu Yuzu (Citrus junos)"
    ],
    "flavorProfile": "Fascinující chuťová fúze připomínající kombinaci mandarinky, hořkého grapefruitu, limetky a květinových tónů jasmínu.",
    "culinaryUsage": "V omáčkách, marinádách, glazurách na tučná masa a v dezertech i prémiových koktejlech.",
    "fuzeMenuAppearances": [
      "Grilovaný vepřový bůček s karamelizovanou yuzu omáčkou a chimichurri"
    ],
    "staffTips": "Yuzu v glazuře na bůčku přináší přesně tu asijskou 'fuze' dimenzi, která odděluje obyčejný pečený bůček od špičkového moderního gastronomického zážitku.",
    "tags": [
      "yuzu",
      "citrus",
      "Japonsko",
      "bůček",
      "glazura"
    ]
  },
  {
    "id": "confit-cesnek",
    "name": "Konfitovaný česnek",
    "originalTerm": "Ail confit (Francie)",
    "category": "culinary_techniques",
    "categoryName": "Kulinářské techniky",
    "origin": "Francie (jihozápad)",
    "shortDescription": "Tradiční kulinářská technika pomalého vaření celých stroužků česneku ponořených v tuku při nízké teplotě (cca 85 °C).",
    "ingredients": [
      "Celé stroužky čerstvého česneku",
      "Kvalitní olej nebo hovězí lůj / kachní sádlo",
      "Tymián, rozmarýn a zrnka černého pepře"
    ],
    "flavorProfile": "Při konfitování zmizí veškerá štiplavost a agresivita syrového česneku – stroužky získají máslovou texturu a sladkou, oříškově karamelovou chuť.",
    "culinaryUsage": "Roztírá se na křupavé topinky, vmíchává se do bramborové kaše nebo se používá jako základ omáček.",
    "fuzeMenuAppearances": [
      "Krájený hovězí tatarák z květové špičky s topinkou na hovězím loji a konfitovaným česnekem"
    ],
    "staffTips": "Hosté, kterým syrový česnek dráždí žaludek, se konfitovaného česneku nemusí bát – je jemný, nasládlý a lehce stravitelný.",
    "tags": [
      "česnek",
      "konfit",
      "tatarák",
      "topinka",
      "francouzská technika"
    ]
  },
  {
    "id": "bramborova-slama",
    "name": "Bramborová sláma",
    "originalTerm": "Pommes pailles (Francie)",
    "category": "culinary_techniques",
    "categoryName": "Kulinářské techniky",
    "origin": "Francie",
    "shortDescription": "Brambory nakrájené na tenoučké nudličky o síle 1 mm, zbavené škrobu a bleskově usmažené dokřupava do zlatavého hnízda.",
    "ingredients": [
      "Kvalitní brambory s vysokým obsahem sušiny",
      "Olej s vysokým kouřovým bodem",
      "Jemná mořská sůl"
    ],
    "flavorProfile": "Mimořádně křupavá, lehká textura s čistou chutí smažených brambor bez nasáklého tuku.",
    "culinaryUsage": "Slouží jako luxusní křupavá garnitura dodávající pokrmům výškový rozměr a texturální kontrast.",
    "fuzeMenuAppearances": [
      "Krájený hovězí tatarák z květové špičky (bramborová sláma na vrchu tataráku)",
      "Naše bramborová kaše s máslem a bramborovou slámou"
    ],
    "staffTips": "V tataráku i kaši tvoří sláma fantastický křupavý kontrast k jemnému krájenému masu nebo sametové bramborové kaši.",
    "tags": [
      "brambory",
      "smažení",
      "křupavost",
      "tatarák",
      "garnitura"
    ]
  },
  {
    "id": "kasteel-rouge",
    "name": "Kasteel Rouge",
    "originalTerm": "Kasteel Rouge (Belgie)",
    "category": "gourmet_ingredients",
    "categoryName": "Piva & gastronomické suroviny",
    "origin": "Belgie (Ingelmunster, rodinný pivovar Van Honsebrouck)",
    "shortDescription": "Slavné belgické silné svrchně kvašené pivo (8 % obj. alk.), které 6 měsíců dozrává na pravých zralých višních.",
    "ingredients": [
      "Základní tmavé belgické pivo Kasteel Donker",
      "Pravé višně a višňová šťáva",
      "Slad, chmel, voda a belgické kvasinky"
    ],
    "flavorProfile": "Rubínová barva, plná sladkokyselá chuť višní, tóny čokolády, mandlí a portského vína s hřejivým alkoholovým závěrem.",
    "culinaryUsage": "Kromě čepování na baru se v kuchyni Fuze používá k vaření delikátního pivního želé k paštikám z foie gras.",
    "fuzeMenuAppearances": [
      "Paštika z kachních foie gras v želé z piva Kasteel Rouge, višňová omáčka",
      "Kasteel Rouge 18 – čepované pivo na čepu 0,25 l"
    ],
    "staffTips": "Skvělý příklad provázanosti baru a kuchyně Fuze: pivo, které máme na čepu, naši kuchaři zredukovali do želé pokrývajícího paštiku z kachních jater!",
    "tags": [
      "belgické pivo",
      "višně",
      "foie gras",
      "želé",
      "pivo na čepu"
    ]
  },
  {
    "id": "waldorf",
    "name": "Waldorf salát",
    "originalTerm": "Waldorf Salad (USA, New York)",
    "category": "sauces_dressings",
    "categoryName": "Saláty a dresinky",
    "origin": "USA (New York, hotel Waldorf-Astoria, 1893)",
    "shortDescription": "Světoznámý křupavý salát, který před více než stoletím vymyslel hotelový maître d'hôtel Oscar Tschirky.",
    "ingredients": [
      "Křupavá šťavnatá jablka nakrájená na kousky",
      "Čerstvý řapíkatý celer",
      "Bobule vinné révy",
      "Nakládané vlašské ořechy",
      "Jemný krémový majonézový dresink s kapkou citronu"
    ],
    "flavorProfile": "Svěží, osvěžující, harmonie sladkých jablek a hroznů, zemitých ořechů a křupavého aromatického celeru s krémovým dresinkem.",
    "culinaryUsage": "Podává se jako lehký předkrm, samostatný salát nebo příloha k pečeným masům a drůbeži.",
    "fuzeMenuAppearances": [
      "Waldorf salát (jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing)"
    ],
    "staffTips": "Pozor na alergeny: obsahuje skořápkové plody (vlašské ořechy), celer a vejce v majonéze. Pro milovníky křupavých svěžích salátů je to jasná volba.",
    "tags": [
      "salát",
      "celer",
      "vlašské ořechy",
      "jablka",
      "New York"
    ]
  },
  {
    "id": "demi-glace",
    "name": "Demi-glace",
    "originalTerm": "Demi-glace (Francie)",
    "category": "culinary_techniques",
    "categoryName": "Kulinářské techniky a základy",
    "origin": "Francie (Auguste Escoffier)",
    "shortDescription": "Královský základ hnědých omáček – silný telecí vývar (fond brun) zredukovaný pomalým varem na zlomek objemu na hustou lesklou esenci.",
    "ingredients": [
      "Pečené telecí a hovězí kosti a šlachy plné kolagenu",
      "Restovaná kořenová zelenina (mirepoix – mrkev, celer, cibule)",
      "Červené víno, rajčatový protlak, bouquet garni (tymián, bobkový list)",
      "Více než 24 hodin pomalého tažení a redukce"
    ],
    "flavorProfile": "Masivní koncentrace čistého umami, zemitých masových tónů a želatinové plnosti.",
    "culinaryUsage": "Základ koňakové, lanýžové a pepřové omáčky k prémiovým steakům z grilu.",
    "fuzeMenuAppearances": [
      "Koňaková teplá omáčka",
      "Lanýžová teplá omáčka",
      "Základ masových šťáv u pečených mas a žeber"
    ],
    "staffTips": "Kvalitní demi-glace je vizitkou špičkové restaurace – nepoužívají se žádná umělá zahušťovadla ani mouka, omáčka houstne pouze redukcí a přírodním kolagenem.",
    "tags": [
      "vývar",
      "redukce",
      "umami",
      "telecí",
      "omáčky"
    ]
  },
  {
    "id": "kaiserschmarrn",
    "name": "Karamelový trhanec",
    "originalTerm": "Kaiserschmarrn (Rakousko-Uhersko)",
    "category": "pastry_sweets",
    "categoryName": "Cukrářství a dezerty",
    "origin": "Rakousko (oblíbený dezert císaře Františka Josefa I.)",
    "shortDescription": "Císařský dezert z nadýchaného těsta z vyšlehaných bílků, pečený na másle a natrhaný dvěma vidličkami na kousky s karamelizovaným cukrem.",
    "ingredients": [
      "Vaječné žloutky a sníh z bílků",
      "Hladká mouka a mléko",
      "Přepuštěné máslo na opékání",
      "Cukr zkaramelizovaný na pánvi",
      "Pečené švestky a zmrzlina z vaječného likéru"
    ],
    "flavorProfile": "Nadýchaný, křehký uvnitř, s křupavou karamelovou krustičkou na povrchu, doplněný kyselkavými horkými švestkami a studenou zmrzlinou.",
    "culinaryUsage": "Podává se ihned po dopečení čerstvý a horký na pánvičce s chladivým kontrastem zmrzliny.",
    "fuzeMenuAppearances": [
      "Karamelový trhanec s pečenými švestkami a zmrzlinou z vaječného likéru"
    ],
    "staffTips": "Perfektní sdílený dezert pro stůl po vydatném obědě nebo večeři k dobré kávě či digestivu.",
    "tags": [
      "dezert",
      "trhanec",
      "Kaiserschmarrn",
      "švestky",
      "karamel"
    ]
  },
  {
    "id": "humri-bisque",
    "name": "Krémová humří polévka (Bisque)",
    "originalTerm": "Bisque de homard (Francie)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny",
    "origin": "Francie (Biskajský záliv)",
    "shortDescription": "Jeden z nejluxusnějších mořských krémů na světě, připravovaný restováním krunýřů korýšů s koňakem, bílým vínem a smetanou.",
    "ingredients": [
      "Humří a krevetové krunýře a klepeta",
      "Koňak na flambování a bílé víno",
      "Šalotka, řapíkatý celer, fenykl a rajčatový protlak",
      "Vysokoprocentní smetana",
      "Klobáska a zelenina, zapékané listové těsto"
    ],
    "flavorProfile": "Mimořádně plná, sladce minerální chuť humřího masa s kouřovým koňakovým nádechem a sametovým smetanovým závěrem.",
    "culinaryUsage": "Servíruje se v misce zapečené pokličkou ze zlatavého listového těsta, které zadržuje veškeré aroma uvnitř.",
    "fuzeMenuAppearances": [
      "Krémová humří polévka s klobáskou a zeleninou, zapečená listovým těstem"
    ],
    "staffTips": "Pozor na alergeny korýšů (č. 2) a ryb. Prezentace se zapečeným listovým těstem je u hostů vizuálně mimořádně oblíbená.",
    "tags": [
      "humr",
      "polévka",
      "bisque",
      "korýši",
      "listové těsto"
    ]
  },
  {
    "id": "pak-choi",
    "name": "Pak choi",
    "originalTerm": "Bok choy / Pak choi (Čína)",
    "category": "world_flavors",
    "categoryName": "Světové chutě a asijská fúze",
    "origin": "Čína / Východní Asie",
    "shortDescription": "Čínské křupavé listové zelí s dužnatými bílými řapíky a tmavě zelenými listy.",
    "ingredients": [
      "100% čerstvá zelenina Brassica rapa subsp. Chinensis"
    ],
    "flavorProfile": "Jemná, svěží, křupavá chuť s lehkou hořčičnou nasládlostí.",
    "culinaryUsage": "Bleskově se restuje na woku nebo griluje, aby stonky zůstaly křupavé.",
    "fuzeMenuAppearances": [
      "Přílohy a teplá asijská jídla v poledních nabídkách Fuze"
    ],
    "staffTips": "Skvělá lehká alternativa k tradičnímu českému zelí pro moderní párování s bůčkem a vepřovým masem.",
    "tags": [
      "zelenina",
      "Asie",
      "wok",
      "příloha"
    ]
  },
  {
    "id": "ponzu",
    "name": "Ponzu",
    "originalTerm": "Ponzu (Japonsko)",
    "category": "world_flavors",
    "categoryName": "Světové chutě a asijská fúze",
    "origin": "Japonsko",
    "shortDescription": "Ikonická japonská citrusová omáčka na bázi sójové omáčky, citrusové šťávy yuzu nebo sudachi, mirinu a vývaru dashi.",
    "ingredients": [
      "Japonská sójová omáčka",
      "Citrusová šťáva Yuzu / Sudachi",
      "Mirin (sladké rýžové víno)",
      "Vývar dashi z řasy kombu a bonito vloček"
    ],
    "flavorProfile": "Slaný, svěže citrusový, nakyslý s hlubokou umami linkou.",
    "culinaryUsage": "Dip k tataki, syrovým rybám, grilovaným masům a do moderních dresinků.",
    "fuzeMenuAppearances": [
      "Studené marinády a dresinky na saláty a grilovaná masa"
    ],
    "staffTips": "Dokonale osvěžuje chuťové buňky po tučném soustu masa.",
    "tags": [
      "omáčka",
      "Japonsko",
      "yuzu",
      "sójová omáčka",
      "umami"
    ]
  },
  {
    "id": "panko",
    "name": "Panko strouhanka",
    "originalTerm": "Panko (Japonsko)",
    "category": "world_flavors",
    "categoryName": "Světové chutě a asijská fúze",
    "origin": "Japonsko",
    "shortDescription": "Japonská strouhanka vyráběná z bílého chleba bez kůrky pečeného elektrickým proudem.",
    "ingredients": [
      "Pšeničný chléb pečený elektrickým odporem bez tvrdé kůrky"
    ],
    "flavorProfile": "Neutrální nosič chutí, vytváří bezkonkurenčně křupavou texturu.",
    "culinaryUsage": "Díky větším šupinkám a nízké nasákavosti oleje zůstává smažený pokrm déle lehký a křupavý.",
    "fuzeMenuAppearances": [
      "Krokety a smažená jídla"
    ],
    "staffTips": "Panko strouhanka nenasakuje tolik tuku jako klasická česká rohlíková strouhanka.",
    "tags": [
      "strouhanka",
      "křupavost",
      "smažení",
      "Japonsko"
    ]
  },
  {
    "id": "kimchi",
    "name": "Kimchi",
    "originalTerm": "Kimchi (Korejský poloostrov)",
    "category": "world_flavors",
    "categoryName": "Světové chutě a asijská fúze",
    "origin": "Korea (zapsáno na seznam nehmotného dědictví UNESCO)",
    "shortDescription": "Kultovní korejský tradiční fermentovaný salát z pekingského zelí a pálivého koření plný probiotik.",
    "ingredients": [
      "Pekingské zelí",
      "Korejské chilli gochugaru",
      "Česnek a čerstvý zázvor",
      "Jarní cibulka a ředkev daikon",
      "Rybí omáčka a fermentované krevety"
    ],
    "flavorProfile": "Výrazně pálivý, kyselý, slaný, šumivě fermentovaný s česnekovým řízem.",
    "culinaryUsage": "Podává se jako příloha k tučnému masu, burgerům nebo do teplých stir-fry pokrmů.",
    "fuzeMenuAppearances": [
      "Přílohy k bůčkům a grilovaným masům v poledních a sezónních nabídkách"
    ],
    "staffTips": "Kyselost a pálivost kimchi ideálně neutralizuje tučnost vepřového bůčku.",
    "tags": [
      "fermentace",
      "Korea",
      "chilli",
      "zelí",
      "probiotika"
    ]
  },
  {
    "id": "edamame",
    "name": "Edamame",
    "originalTerm": "Edamame (Japonsko / Východní Asie)",
    "category": "world_flavors",
    "categoryName": "Světové chutě a asijská fúze",
    "origin": "Japonsko a východní Asie",
    "shortDescription": "Mladé zelené sójové boby sklízené před dozráním ještě v celých luscích.",
    "ingredients": [
      "100% mladé sójové boby Glycine max",
      "Hrubá mořská sůl"
    ],
    "flavorProfile": "Svěží, jemně oříšková a sladkavá chuť s pevnou křupavou texturou.",
    "culinaryUsage": "Vaří se krátce v osolené vodě v lusku nebo se vyloupané přidávají do salátů a misek.",
    "fuzeMenuAppearances": [
      "Salátové doplňky a asijské fúzní přílohy"
    ],
    "staffTips": "Pozor na alergen č. 6 (sója). Lusky se nepolykají, boby se z nich vymáčknou zuby.",
    "tags": [
      "sója",
      "edamame",
      "Japonsko",
      "boby",
      "zelenina"
    ]
  },
  {
    "id": "kombucha-pojem",
    "name": "Kombucha",
    "originalTerm": "Kombucha (Východní Asie)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny a nápoje",
    "origin": "Starověká Čína / Mandžusko (více než 2000 let historie)",
    "shortDescription": "Přírodní fermentovaný perlivý čajový nápoj vznikající symbiotickou kulturou bakterií a kvasinek SCOBY.",
    "ingredients": [
      "Kvalitní zelený nebo černý čaj",
      "Cukr (potrava pro kvasinky a bakterie)",
      "Symbiotická kultura SCOBY",
      "Ovocné šťávy nebo byliny pro druhotnou fermentaci"
    ],
    "flavorProfile": "Jemně perlivý, osvěžující, sladkokyselý s lehkým jablečno-octovým a kvasným tónem.",
    "culinaryUsage": "Podává se chlazená jako zdravý prémiový nealkoholický aperitiv nebo digestiv.",
    "fuzeMenuAppearances": [
      "Kombucha – Magu kombucha a řemeslné fermentované nápoje v nápojovém lístku"
    ],
    "staffTips": "Skvělá nealko alternativa k pivu a cideru s blahodárnými účinky na trávení po vydatném jídle.",
    "tags": [
      "fermentace",
      "čaj",
      "nealko",
      "kombucha",
      "zdraví"
    ]
  },
  {
    "id": "cider-pojem",
    "name": "Cider",
    "originalTerm": "Cidre / Cider (Francie / Anglie)",
    "category": "gourmet_ingredients",
    "categoryName": "Gurmánské suroviny a nápoje",
    "origin": "Normandie a Bretaň (Francie) / jihozápadní Anglie",
    "shortDescription": "Přírodní alkoholický perlivý nápoj vznikající kvašením čerstvého jablečného moštu.",
    "ingredients": [
      "Čerstvě lisovaný mošt ze speciálních moštových jablek",
      "Divoké nebo ušlechtilé kvasinky",
      "Přírodní oxid uhličitý z fermentace"
    ],
    "flavorProfile": "Svěží jablečná chuť s příjemnou kyselinkou, jemnou tříslovinou a osvěžujícím perlením.",
    "culinaryUsage": "Tradiční nápoj k vepřovému masu, sýrům a klobásám.",
    "fuzeMenuAppearances": [
      "Opre` Cider a Opre` Sour Cherry (řemeslné slovenské cidery z rodinné farmy)"
    ],
    "staffTips": "Opre' Cider není přeslazený průmyslový nápoj, ale poctivý řemeslný fermentovaný jablečný mošt z rodinné farmy.",
    "tags": [
      "cider",
      "jablka",
      "fermentace",
      "Opre",
      "nápoj"
    ]
  }
];

export const BEVERAGE_ITEMS: BeverageItem[] = [
  {
    "id": "bile-ryzlink-gotberg",
    "name": "Ryzlink rýnský Gotberg",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Vinařství Gotberg",
    "origin": "Česká republika",
    "region": "Morava, Mikulovská podoblast, obec Popice, trať Svidrny",
    "volume": "0,75l (v nabídce i po skle 0,15l)",
    "abv": "12,5 % obj.",
    "price": "590 Kč (lahev) / 118 Kč (sklo)",
    "rawIngredients": "100% odrůda Ryzlink rýnský (Riesling). Vinice na sprašových a vápencových půdách Pálavských vrchů.",
    "productionProcess": "Šetrné lisování celých hroznů, řízená fermentace v nerezových tancích s následným ležením na jemných kvasničních kalech (metoda sur-lie).",
    "flavorProfile": "Svěží minerální víno s tóny lipového květu, sušených meruněk, zeleného jablka a petrolejovou mineralitou s pevnou pikantní kyselinkou.",
    "foodPairing": "Skvěle ladí s krájeným hovězím tatarákem, filátkem pstruha, telecí klobásou a čerstvými sýry.",
    "staffNotes": "Klasický představitel moravského Ryzlinku z Popic. Suché, šťavnaté, vysoce pitelné víno s dlouhou minerální dochutí.",
    "tags": [
      "víno",
      "bílé víno",
      "Morava",
      "Gotberg",
      "suché"
    ]
  },
  {
    "id": "bile-pinot-gris-reisten",
    "name": "Pinot Gris Reisten (Maidenburg)",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Vinařství Reisten",
    "origin": "Česká republika",
    "region": "Morava, Mikulovská podoblast, Pavlov, viniční trať Maidenburg",
    "volume": "0,75l",
    "abv": "13,0 % obj.",
    "price": "680 Kč",
    "rawIngredients": "100% odrůda Rulandské šedé (Pinot Gris). Vápencové podloží chráněné krajinné oblasti Pálava.",
    "productionProcess": "Kvašení v nerezu, část šarže zrála ve velkých dubových sudech. Delší ležení na kvasinkách podporující plné tělo.",
    "flavorProfile": "Bohaté, plné a extraktivní víno s tóny zralé hrušky máslovky, sušeného pomeranče, medové plástve a jemné chlebovinky v závěru.",
    "foodPairing": "Výborné k vepřovému bůčku s karamelizovanou yuzu omáčkou, taženému hovězímu masu a pečenému kuřeti.",
    "staffNotes": "Pro hosty, kteří preferují plnější, kulatější bílá vína s nižší kyselinkou a krémovou strukturou.",
    "tags": [
      "víno",
      "bílé víno",
      "Pinot Gris",
      "Pálava",
      "Reisten"
    ]
  },
  {
    "id": "bile-hibernal-bilkovi",
    "name": "Hibernal Bílkovi",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Vinařství Bílkovi",
    "origin": "Česká republika",
    "region": "Morava, Velkopavlovická podoblast, Velké Bílovice",
    "volume": "0,75l",
    "abv": "12,5 % obj.",
    "price": "540 Kč",
    "rawIngredients": "100% Hibernal – moderní interspecifická odrůda (PIWI) vyšlechtěná křížením Seibel a Ryzlinku rýnského.",
    "productionProcess": "Reduktivní vinifikace v nerezových tancích s důrazem na zachování aromatického profilu a svěží ovocitosti.",
    "flavorProfile": "Intenzivně aromatické víno s buketem černorybízového listu, broskve, zralého angreštu, kvetoucího černého bezu a citrusů.",
    "foodPairing": "Skvělé k asijským fúzním chutím, salátům, kozímu sýru a smaženým kuřecím kroketám.",
    "staffNotes": "Ideální volba pro hosty, kteří hledají výraznou aromatiku podobnou Sauvignonu s příjemnou svěží kyselinkou.",
    "tags": [
      "víno",
      "bílé víno",
      "Hibernal",
      "aromatické",
      "Bílkovi"
    ]
  },
  {
    "id": "bile-sauvignon-halkoci",
    "name": "Sauvignon Halkoci",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Vinařství Halkoci",
    "origin": "Česká republika",
    "region": "Morava, Znojemská / Mikulovská podoblast",
    "volume": "0,75l",
    "abv": "12,5 % obj.",
    "price": "580 Kč",
    "rawIngredients": "100% Sauvignon Blanc ze starších moravských vinic.",
    "productionProcess": "Kvašení za kontrolované nízké teploty pro uchování primárních pyrazinových a ovocných aromatických látek.",
    "flavorProfile": "Svěží, čistý tón hluchavky, posečené trávy, zeleného angreštu, kiwi a limetkové kůry se zvonivou kyselinkou.",
    "foodPairing": "Perfektní ke krémové humří polévce, rybám z pece a čerstvým bylinkovým omáčkám fines herbes.",
    "staffNotes": "Výborný suchý a šťavnatý Sauvignon moravského střihu s pevnou kyselinou.",
    "tags": [
      "víno",
      "bílé víno",
      "Sauvignon",
      "svěží",
      "Morava"
    ]
  },
  {
    "id": "bile-ryzlink-vlassky-sukal",
    "name": "Ryzlink Vlašský Šukal",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Milan Šukal",
    "origin": "Česká republika",
    "region": "Morava, Slovácká podoblast, Nový Poddvorov",
    "volume": "0,75l",
    "abv": "13,0 % obj.",
    "price": "650 Kč",
    "rawIngredients": "100% Ryzlink vlašský z rodinných vinic Milana Šukala.",
    "productionProcess": "Tradiční řemeslné zpracování, kvašení na přírodních kvasinkách, delší zrání na kalech.",
    "flavorProfile": "Typická minerální slanost, tóny sušených lučních bylin, zelených jablek, rozinek a pražených vlašských ořechů.",
    "foodPairing": "Skvělé k pečenému vepřovému kolenu, řízku Duroc a tradičním moravským pokrmům.",
    "staffNotes": "Milan Šukal patří k absolutní špičce moravských vinařů – jeho vlašák má neuvěřitelnou hloubku a mineralitu.",
    "tags": [
      "víno",
      "bílé víno",
      "Ryzlink vlašský",
      "Milan Šukal",
      "Morava"
    ]
  },
  {
    "id": "bile-palava-michlovsky",
    "name": "Pálava Vinselekt Michlovský",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Vinselekt Michlovský",
    "origin": "Česká republika",
    "region": "Morava, Mikulovská podoblast, Perná",
    "volume": "0,75l",
    "abv": "13,0 % obj.",
    "price": "620 Kč",
    "rawIngredients": "100% Pálava (kříženec Tramínu červeného a Müller Thurgau vyšlechtěný Ing. Josefem Veverkou na Moravě).",
    "productionProcess": "Kombinace moderní kryomacerace a řízeného kvašení pod taktovkou docenta Miloše Michlovského.",
    "flavorProfile": "Omamná květinová vůně čajové růže, rozkvetlého jasmínu, mandarinkové kůry, liči a sladkého koření vanilky.",
    "foodPairing": "Bezkonkurenční k paštice z kachních foie gras, asijským pikantním pokrmům a jemným sýrům.",
    "staffNotes": "Nejznámější moravská odrůda v podání legendárního enologa Miloše Michlovského. Krásné tělo a dlouhý aromatický závěr.",
    "tags": [
      "víno",
      "bílé víno",
      "Pálava",
      "Michlovský",
      "aromatické"
    ]
  },
  {
    "id": "bile-riesling-eva-fricke",
    "name": "Riesling Rheingau Eva Fricke",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Eva Fricke",
    "origin": "Německo",
    "region": "Rheingau, Lorch / Kiedrich (strmé břidlicové svahy)",
    "volume": "0,75l",
    "abv": "12,0 % obj.",
    "price": "1 190 Kč",
    "rawIngredients": "100% Riesling ze starých biodynamicky obhospodařovaných vinic na čisté modré a šedé břidlici.",
    "productionProcess": "Spontánní fermentace přírodními kvasinkami, pomalé zrání bez aditiv a chemických zásahů.",
    "flavorProfile": "Extrémní čistota, krystalická slaná mineralita, zelené citrusy, kdoule, bílá broskev a elektrizující přesná kyselina.",
    "foodPairing": "Prvotřídní k humří polévce, ústřicím, vykostěnému pstruhu a jídlům s omáčkou yuzu.",
    "staffNotes": "Eva Fricke je světovou ikonou Rheingau (pravidelně 100 bodů Robert Parker). Skutečný klenot vinného lístku Fuze.",
    "tags": [
      "víno",
      "bílé víno",
      "Riesling",
      "Rheingau",
      "Německo",
      "biodynamické"
    ]
  },
  {
    "id": "bile-chardonnay-knotty-vines",
    "name": "Chardonnay Knotty Vines",
    "category": "wine_white",
    "categoryName": "Bílá vína",
    "producer": "Knotty Vines",
    "origin": "USA",
    "region": "Kalifornie (Central Coast / Lodi)",
    "volume": "0,75l",
    "abv": "13,5 % obj.",
    "price": "690 Kč",
    "rawIngredients": "100% odrůda Chardonnay z kalifornských prosluněných vinic.",
    "productionProcess": "Částečná jablečno-mléčná fermentace (malolaktika) a zrání v sudech z francouzského a amerického dubu.",
    "flavorProfile": "Bohaté, máslové, vanilkové Chardonnay s tóny pečeného žlutého jablka, ananasu, crème brûlée a opékaného toastu.",
    "foodPairing": "Dokonalé k pečenému vepřovému bůčku, burgeru s čedarem a smetanovým těstovinám.",
    "staffNotes": "Ukázkový kalifornský styl Chardonnay – plné, hladké, máslové s příjemným dubovým polibkem.",
    "tags": [
      "víno",
      "bílé víno",
      "Chardonnay",
      "Kalifornie",
      "USA",
      "dub"
    ]
  },
  {
    "id": "cervene-pinot-noir-rouci-kraus",
    "name": "Pinot Noir Roučí Kraus",
    "category": "wine_red",
    "categoryName": "Červená vína",
    "producer": "Vinařství Kraus",
    "origin": "Česká republika",
    "region": "Čechy, Mělnická podoblast, Mělník (Klamovka)",
    "volume": "0,75l",
    "abv": "13,0 % obj.",
    "price": "750 Kč",
    "rawIngredients": "100% Rulandské modré (Pinot Noir) klon Roučí, pěstované na opukových svazích řeky Labe.",
    "productionProcess": "Tradiční rmutování v otevřených kádích, následné roční zrání ve francouzských dubových sudech barrique.",
    "flavorProfile": "Světlý rubín s cihlovým meniskem. Vůně lesních jahod, višní, sušených brusinek a podrostu s jemným dotekem kouře a cedrového dřeva.",
    "foodPairing": "Svíčková Wellington, kachní prsa, paštika z kachních foie gras a telecí klobása se smrži.",
    "staffNotes": "Profesor Kraus byl legendou českého vinohradnictví. Tento Pinot z Mělníka dokazuje, že české polohy produkují pinoty světové burgundské elegance.",
    "tags": [
      "víno",
      "červené víno",
      "Pinot Noir",
      "Mělník",
      "Čechy",
      "barrique"
    ]
  },
  {
    "id": "cervene-dornfelder-bilkovi",
    "name": "Dornfelder Bílkovi",
    "category": "wine_red",
    "categoryName": "Červená vína",
    "producer": "Vinařství Bílkovi",
    "origin": "Česká republika",
    "region": "Morava, Velkopavlovická podoblast, Velké Bílovice",
    "volume": "0,75l",
    "abv": "12,5 % obj.",
    "price": "520 Kč",
    "rawIngredients": "100% Dornfelder.",
    "productionProcess": "Kvašení na rmutu s jemným lisováním pro zachování ovocitého a neagresivního charakteru.",
    "flavorProfile": "Sytě temně granátová barva. Výrazná vůně ostružin, zralých švestek, borůvek a lesních plodů se sametovou tříslovinou.",
    "foodPairing": "K hovězímu burgeru, pečeným vepřovým žebrům a uzeninám.",
    "staffNotes": "Přístupné, ovocité červené víno s nízkou svíravostí a nádhernou temnou barvou.",
    "tags": [
      "víno",
      "červené víno",
      "Dornfelder",
      "Morava",
      "Bílkovi"
    ]
  },
  {
    "id": "cervene-cuvee-red-kolby",
    "name": "Cuvée Red Kolby",
    "category": "wine_red",
    "categoryName": "Červená vína",
    "producer": "Vinařství Kolby",
    "origin": "Česká republika",
    "region": "Morava, Mikulovská podoblast, Pouzdřany, viniční trať Kolby",
    "volume": "0,75l",
    "abv": "13,5 % obj.",
    "price": "790 Kč",
    "rawIngredients": "Blend Cabernet Sauvignon (60 %) a Merlot (40 %) ze sprašových svahů Pouzdřanské stepi.",
    "productionProcess": "Zrání 14 měsíců v prémiových francouzských dubových sudech barrique (30 % nových).",
    "flavorProfile": "Plné tělo bordelského střihu. Tóny černého rybízu, ostružin, hořké čokolády, tabáku, kůže a sladkého dřeva.",
    "foodPairing": "Perfektní společník pro US Prime květovou špičku, vysoký roštěnec a pastrami.",
    "staffNotes": "Špičková moravská interpretace velkého vína z Bordeaux. Pevné třísloviny a velký potenciál.",
    "tags": [
      "víno",
      "červené víno",
      "cuvée",
      "Cabernet",
      "Merlot",
      "Kolby"
    ]
  },
  {
    "id": "cervene-cabernet-lapis-luna",
    "name": "Cabernet Sauvignon Lapis Luna",
    "category": "wine_red",
    "categoryName": "Červená vína",
    "producer": "Lapis Luna Wines",
    "origin": "USA",
    "region": "Kalifornie, Lodi",
    "volume": "0,75l",
    "abv": "14,0 % obj.",
    "price": "790 Kč",
    "rawIngredients": "Cabernet Sauvignon s kapkou Merlotu a Sangiovese z vybraných kalifornských vinic.",
    "productionProcess": "Zrání v sudech z francouzského a amerického dubu po dobu 10 měsíců.",
    "flavorProfile": "Temně fialová barva, explozivní vůně zralých ostružin, černých třešní, vanilky, pražené kávy a koření.",
    "foodPairing": "US Prime vysoký roštěnec, grilovaný vepřový bůček a burger s čedarem a slaninou.",
    "staffNotes": "Pro milovníky mohutných, bohatých kalifornských vín s teplým závěrem a sametovými tříslovinami.",
    "tags": [
      "víno",
      "červené víno",
      "Cabernet Sauvignon",
      "Kalifornie",
      "USA"
    ]
  },
  {
    "id": "cervene-zinfandel-hendry",
    "name": "Zinfandel Hendry",
    "category": "wine_red",
    "categoryName": "Červená vína",
    "producer": "Hendry Ranch",
    "origin": "USA",
    "region": "Kalifornie, Napa Valley",
    "volume": "0,75l",
    "abv": "14,8 % obj.",
    "price": "1 450 Kč",
    "rawIngredients": "100% Zinfandel z rodinného ranče Hendry v úpatí Mayacamas Mountains v Napa Valley.",
    "productionProcess": "Zrání 15 měsíců v sudech z francouzského dubu. Malé rodinné šarže z historických vinic.",
    "flavorProfile": "Koncentrovaná džemová chuť lesních malin, borůvek, černého pepře, hřebíčku, kakaa a lékořice s hřejivou dlouhou dochutí.",
    "foodPairing": "Vrcholné párování k vepřovým žebrům pečeným s jablečnou BBQ omáčkou, US Prime burgeru a pastrami.",
    "staffNotes": "Kultovní Zinfandel z Napa Valley. Nesmírně hluboké a bohaté víno od George Hendryho.",
    "tags": [
      "víno",
      "červené víno",
      "Zinfandel",
      "Napa Valley",
      "Kalifornie"
    ]
  },
  {
    "id": "bubliny-charmat-palava",
    "name": "Charmat de Vinselekt Pálava",
    "category": "wine_sparkling",
    "categoryName": "Šumivá vína & sekty",
    "producer": "Vinselekt Michlovský",
    "origin": "Česká republika",
    "region": "Morava, Mikulovská podoblast",
    "volume": "0,75l (v nabídce i po skle 0,1l)",
    "abv": "12,0 % obj.",
    "price": "590 Kč (lahev) / 89 Kč (sklenka)",
    "rawIngredients": "Hrozny odrůdy Pálava.",
    "productionProcess": "Metoda Charmat – sekundární kvašení v nerezovém tlakovém tanku zachovávající primární svěží květinové aroma.",
    "flavorProfile": "Svěží perlení, jemná vůně kvetoucích růží, tropického ovoce a citrusů s příjemnou suchou dochutí.",
    "foodPairing": "Perfektní uvítací přípitek a aperitiv ke studeným předkrmům a tataráku.",
    "staffNotes": "Naše základní rozlévané šumivé víno po skle – elegantní, voňavé a osvěžující bubliny z moravské Pálavy.",
    "tags": [
      "bubliny",
      "šumivé víno",
      "Pálava",
      "aperitiv",
      "Michlovský"
    ]
  },
  {
    "id": "bubliny-cremant-vinselekt",
    "name": "Crémant de Vinselekt (Pinot Noir & Chardonnay)",
    "category": "wine_sparkling",
    "categoryName": "Šumivá vína & sekty",
    "producer": "Vinselekt Michlovský",
    "origin": "Česká republika",
    "region": "Morava",
    "volume": "0,75l",
    "abv": "12,5 % obj.",
    "price": "890 Kč",
    "rawIngredients": "Tradiční šampaňský blend: Chardonnay a Pinot Noir (Rulandské modré).",
    "productionProcess": "Tradiční metoda druhotného kvašení v lahvi (méthode traditionnelle) s ležením na kvasinkách po dobu minimálně 24 měsíců.",
    "flavorProfile": "Jemné dlouhotrvající perlení, aroma pečených briošek, pražených oříšků, zelených jablek a minerální křídový závěr.",
    "foodPairing": "Ústřice, humří polévka, paštika z foie gras a smažená kuřecí křidélka.",
    "staffNotes": "Moravský crémant vyrobený stejným postupem jako pravé Champagne. Nádherný toastový buket.",
    "tags": [
      "crémant",
      "šampaňská metoda",
      "Chardonnay",
      "Pinot Noir",
      "bubliny"
    ]
  },
  {
    "id": "bubliny-angels-cowboys",
    "name": "Angels & Cowboys Brut Rosé Sparkling",
    "category": "wine_sparkling",
    "categoryName": "Šumivá vína & sekty",
    "producer": "Angels & Cowboys",
    "origin": "USA",
    "region": "Kalifornie, Sonoma County",
    "volume": "0,75l",
    "abv": "12,0 % obj.",
    "price": "1 150 Kč",
    "rawIngredients": "Blend Pinot Noir a Chardonnay z chladných přímořských poloh v Sonoma County.",
    "productionProcess": "Méthode traditionnelle – kvašeno a zráno v lahvích po dobu minimálně 18 měsíců.",
    "flavorProfile": "Lososově růžová barva, tóny lesních jahod, červeného rybízu, granátového jablka a čerstvě upečené briošky.",
    "foodPairing": "Ideální k celému jídlu od tataráku přes bůček až po chmelové čokoládové dortíky.",
    "staffNotes": "Stylové kalifornské šumivé víno s úchvatným designem a špičkovou svěžestí.",
    "tags": [
      "bubliny",
      "rosé",
      "šumivé",
      "Kalifornie",
      "USA"
    ]
  },
  {
    "id": "rum-havana-club-3",
    "name": "Havana Club Añejo 3 Años",
    "category": "rum",
    "categoryName": "Rumy 0,03l",
    "producer": "Havana Club (Corporación Cuba Ron)",
    "origin": "Kuba",
    "region": "Santa Cruz del Norte / San José de Las Lajas",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "66 Kč",
    "rawIngredients": "Kubánská cukrová třtina, prémiová melasa a pramenitá voda.",
    "productionProcess": "Kontinuální destilace v kolonách, zrání minimálně 3 roky v sudech z bílého amerického dubu po bourbonu pod dohledem Maestros del Ron Cubano, následná filtrace přes dřevěné uhlí.",
    "flavorProfile": "Světle slámová barva. Svěží vůně cukrové třtiny, dubového dřeva, citrusů, vanilky a jemného kouře.",
    "foodPairing": "Základ pro originální kubánské drinky Mojito a Daiquiri.",
    "staffNotes": "Pravý kubánský 3letý bílý rum – na rozdíl od levných bílých rumů opravdu zraje 3 roky v dubových sudech a má hlubší chuť.",
    "tags": [
      "rum",
      "Kuba",
      "bílý rum",
      "cukrová třtina",
      "mojito"
    ]
  },
  {
    "id": "rum-el-dorado-12y",
    "name": "El Dorado 12y",
    "category": "rum",
    "categoryName": "Rumy 0,03l",
    "producer": "Demerara Distillers Ltd.",
    "origin": "Guyana",
    "region": "Demerara River",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "98 Kč",
    "rawIngredients": "100% melasa z cukrové třtiny pěstované v úrodném údolí řeky Demerara.",
    "productionProcess": "Destilace v unikátních historických dřevěných kotlích Enmore a Port Mourant starých více než 250 let. Zrání minimálně 12 let v dubových sudech po bourbonu v tropickém klimatu Guyany.",
    "flavorProfile": "Hluboká jantarová barva. Tóny tmavé melasy, medu, sušených švestek, rozinek, pečeného banánu, skořice a tabáku.",
    "foodPairing": "Skvěle ladí s vepřovými žebry s BBQ omáčkou a dezerty s čokoládou Valrhona.",
    "staffNotes": "Číslovka 12 znamená nejmladší složku v lahvi (na rozdíl od solery). Unikátní dřevěné destilační kotle dávají rumu nenapodobitelnou hutnost.",
    "tags": [
      "rum",
      "Guyana",
      "Demerara",
      "12 let",
      "karamel"
    ]
  },
  {
    "id": "rum-mount-gay-xo",
    "name": "Mount Gay XO Triple Cask",
    "category": "rum",
    "categoryName": "Rumy 0,03l",
    "producer": "Mount Gay Distilleries (založeno 1703)",
    "origin": "Barbados",
    "region": "St. Lucy",
    "volume": "0,03l",
    "abv": "43,0 % obj.",
    "price": "148 Kč",
    "rawIngredients": "Melasa z barbadoské cukrové třtiny a korálovou horninou filtrovaná voda.",
    "productionProcess": "Tradiční dvojitá měděná kotlíková destilace (pot still) a kolonová destilace. Blend rumů zrajících 5 až 17 let ve třech typech sudů: po americkém whiskey, bourbonu a koňaku.",
    "flavorProfile": "Výjimečně vyvážený suchý rum. Tóny vanilky, zralého fíků, pomerančové kůry, hořké čokolády, pražených mandlí a dubového koření.",
    "foodPairing": "Vhodný k US Prime roštěnci a jako ušlechtilý digestiv po večeři.",
    "staffNotes": "Mount Gay je nejstarší doložená rumová palírna světa (od roku 1703). Rum XO není uměle doslazovaný cukrem – je to ryzí suchý řemeslný rum.",
    "tags": [
      "rum",
      "Barbados",
      "Mount Gay",
      "suchý rum",
      "nejstarší palírna"
    ]
  },
  {
    "id": "rum-abuelo-7y",
    "name": "Abuelo Añejo 7 Años",
    "category": "rum",
    "categoryName": "Rumy 0,03l",
    "producer": "Varela Hermanos",
    "origin": "Panama",
    "region": "Pesé, údolí Herrera",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "82 Kč",
    "rawIngredients": "Čerstvá šťáva a sirup z vlastní panamské cukrové třtiny pěstované na rodinných plantážích.",
    "productionProcess": "Pomalé kvašení s vlastními kvasinkovými kulturami. Zrání 7 let v pečlivě vybraných sudech z bílého amerického dubu po bourbonu.",
    "flavorProfile": "Zlatavě jantarová barva. Jemné tóny karamelu, sušených datlí, pražených oříšků, kokosu a jemného koření.",
    "foodPairing": "Výborný k burgerům, sýru raclette a pečené zelenině.",
    "staffNotes": "Velmi oblíbený, jemný a sametový panamský rum se skvělým poměrem cena/výkon.",
    "tags": [
      "rum",
      "Panama",
      "Abuelo",
      "jemný",
      "karamel"
    ]
  },
  {
    "id": "rum-eminente-reserva-7y",
    "name": "Eminente Reserva 7y",
    "category": "rum",
    "categoryName": "Rumy 0,03l",
    "producer": "Moët Hennessy & Cuba Ron (Master Ronero César Martí)",
    "origin": "Kuba",
    "region": "Villa Clara (centrální Kuba)",
    "volume": "0,03l",
    "abv": "41,3 % obj.",
    "price": "145 Kč",
    "rawIngredients": "Vysoce kvalitní kubánská melasa.",
    "productionProcess": "Mimořádně vysoký podíl aguardiente (70 %) – bohatého aromatického destilátu z pálenice. Zraje minimálně 7 let v sudech z bílého dubu po whisky.",
    "flavorProfile": "Komplexní, bohatý a plný. Tóny pražené zrnkové kávy, hořkého kakaa, zralého zázvoru, pečeného tabáku, sušených švestek a vanilky.",
    "foodPairing": "Dokonalý k čokoládovým dezertům Valrhona a ke kávě espresso.",
    "staffNotes": "Lahev z reliéfního skla připomíná kůži kubánského krokodýla (Eminente = krokodýlí ostrov). Díky 70 % aguardiente má mnohem bohatší chuť než běžné kubánské rumy.",
    "tags": [
      "rum",
      "Kuba",
      "Eminente",
      "káva",
      "čokoláda",
      "krokodýl"
    ]
  },
  {
    "id": "rum-diplomatico",
    "name": "Diplomático Reserva Exclusiva",
    "category": "rum",
    "categoryName": "Rumy 0,03l",
    "producer": "Destilerías Unidas S.A. (DUSA)",
    "origin": "Venezuela",
    "region": "La Miel, na úpatí And",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "115 Kč",
    "rawIngredients": "Třtinový med (virgin sugar cane honey) a vybraná melasa.",
    "productionProcess": "Kombinace destilace v měděných kotlích (pot still – 80 %) a moderních kolonách. Zrání až 12 let v malých sudech z amerického bílého dubu po bourbonu.",
    "flavorProfile": "Sametově sladký a bohatý. Tóny vanilky, toffee, sušeného pomeranče, čokoládových lanýžů, javorového sirupu a skořice.",
    "foodPairing": "Karamelový trhanec, pečené švestky a sladové dezerty.",
    "staffNotes": "Jeden z nejoblíbenějších rumů na světě. Ideální pro hosty, kteří preferují sladší, hladký a dezertní chuťový profil.",
    "tags": [
      "rum",
      "Venezuela",
      "Diplomatico",
      "sladký rum",
      "vanilka"
    ]
  },
  {
    "id": "rum-zacapa-23y",
    "name": "Ron Zacapa Centenario 23",
    "category": "rum",
    "categoryName": "Rumy 0,03l",
    "producer": "Industrias Licoreras de Guatemala (Master Blender Lorena Vásquez)",
    "origin": "Guatemala",
    "region": "Quetzaltenango (Dům nad oblaky, 2 300 m n. m.)",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "155 Kč",
    "rawIngredients": "Panenský třtinový med z prvního lisování cukrové třtiny (nikoli odpadní melasa).",
    "productionProcess": "Destilace v kolonách, zrání v nadmořské výšce 2 300 m v chladném horském klimatu systémem Sistema Solera v sudech po americkém bourbonu, sherry Pedro Ximénez a vínech z oblasti Cognac.",
    "flavorProfile": "Tmavý mahagon. Noblesní tóny sušených fíků, rozinek, tmavého medu, tabákového listu, kávy, muškátového oříšku a dubu.",
    "foodPairing": "Špičkový k hovězímu steaku US Prime, čokoládové hlíně s višní a k vyzrálým sýrům.",
    "staffNotes": "Královský rum ze 'střechy světa'. Chladné horské klima zpomaluje odpar a dává rumu neuvěřitelnou hloubku a hebkost.",
    "tags": [
      "rum",
      "Guatemala",
      "Zacapa",
      "Solera",
      "panenský med"
    ]
  },
  {
    "id": "tequila-tres-alegres-compadres",
    "name": "Tres Alegres Compadres Blanco",
    "category": "tequila",
    "categoryName": "Tequily 0,03l",
    "producer": "Tres Alegres Compadres",
    "origin": "Mexiko",
    "region": "Jalisco",
    "volume": "0,03l",
    "abv": "38,0 % obj.",
    "price": "75 Kč",
    "rawIngredients": "100% modrá agáve (Agave tequilana Weber azul).",
    "productionProcess": "Tradiční pečení zralých agávových srdcí (piñas) v kamenných pecích, mletí, fermentace a dvojitá destilace v nerezových a měděných kotlích. Lahvováno čerstvé bez zrání v sudu.",
    "flavorProfile": "Křišťálově čistá tequila. Čerstvé bylinné tóny syrové i vařené agáve, bílého pepře, limetkové kůry a zeleného jablka.",
    "foodPairing": "Základ pro koktejly Paloma a Margarita, skvělá k papričkám Padrón a chimichurri.",
    "staffNotes": "Čistá 100% agáve blanco tequila – bez přidaného cukru (žádné mixto). Skvělá ukázka autentické svěží chuti agáve.",
    "tags": [
      "tequila",
      "blanco",
      "Mexiko",
      "100% agave",
      "Jalisco"
    ]
  },
  {
    "id": "tequila-herradura-reposado",
    "name": "Herradura Reposado",
    "category": "tequila",
    "categoryName": "Tequily 0,03l",
    "producer": "Casa Herradura (založeno 1870)",
    "origin": "Mexiko",
    "region": "Amatitán, Jalisco",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "115 Kč",
    "rawIngredients": "100% Blue Weber agáve sklízená po 7–10 letech zrání.",
    "productionProcess": "Tradiční hliněné pece, kvašení přírodními divokými kvasinkami z ovocných sadů v okolí palírny. Zrání 11 měsíců v sudech z bílého amerického dubu (zákon vyžaduje pouze 2 měsíce).",
    "flavorProfile": "Zlatá jantarová barva. Chuť vařené agáve, vanilky, máslového karamelu, skořice a sušeného ovoce s hřejivým dubovým zakončením.",
    "foodPairing": "Dokonalá ke grilovanému bůčku s yuzu omáčkou a hovězímu tataráku.",
    "staffNotes": "Casa Herradura v roce 1974 doslova vymyslela kategorii Reposado (odleželá tequila). Zraje téměř rok – déle než většina konkurence.",
    "tags": [
      "tequila",
      "reposado",
      "Herradura",
      "dubové sudy",
      "Mexiko"
    ]
  },
  {
    "id": "tequila-corralejo-reposado",
    "name": "Tequila Corralejo Reposado",
    "category": "tequila",
    "categoryName": "Tequily 0,03l",
    "producer": "Hacienda Corralejo (založeno 1755)",
    "origin": "Mexiko",
    "region": "Pénjamo, Guanajuato (mimo Jalisco – jedna z mála certifikovaných výjimek)",
    "volume": "0,03l",
    "abv": "38,0 % obj.",
    "price": "98 Kč",
    "rawIngredients": "100% Agave Azul Weber.",
    "productionProcess": "Pomalé pečení v tradičních pecích horo, dvojitá destilace v měděných kotlích metodou Charentais (používanou při výrobě koňaku). Zrání 4 měsíce ve třech typech dubových sudů (francouzský, americký a mexický dub).",
    "flavorProfile": "Světle slámová barva v ikonické vysoké modré lahvi. Tóny pečené agáve, bílého pepře, vanilky, kardamomu a čerstvého dřeva.",
    "foodPairing": "Výborná k pastrami, kuřeti z pece a pikantní majonéze.",
    "staffNotes": "Vysoká štíhlá modrá lahev je nepřehlédnutelná. Destilace francouzskou metodou Charentais dodává tequile neobyčejnou jemnost.",
    "tags": [
      "tequila",
      "reposado",
      "Corralejo",
      "modrá lahev",
      "Mexiko"
    ]
  },
  {
    "id": "tequila-cofradia-rose-catrina",
    "name": "La Cofradia Reposado Rosé „ed. Catrina”",
    "category": "tequila",
    "categoryName": "Tequily 0,03l",
    "producer": "Tequila La Cofradía",
    "origin": "Mexiko",
    "region": "Tequila, Jalisco",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "145 Kč",
    "rawIngredients": "100% modrá agáve z vysočiny Jalisco.",
    "productionProcess": "Tradiční pečení a destilace. Speciální zrání v sudech z francouzského dubu, ve kterých dříve zrálo červené víno (Cabernet Sauvignon), což tequile propůjčuje delikátní růžový nádech a ovocné tóny.",
    "flavorProfile": "Světle narůžovělý odstín. Vůně agáve, jahod, červeného rybízu, vanilky a jemného dřeva.",
    "foodPairing": "Skvělá jako párování k paštice z foie gras i dezertům s višněmi.",
    "staffNotes": "Unikátní růžová reposado tequila v nádherné sběratelské keramické karafě inspirované mexickým svátkem Día de los Muertos.",
    "tags": [
      "tequila",
      "reposado",
      "Catrina",
      "růžová",
      "víno",
      "sběratelská"
    ]
  },
  {
    "id": "tequila-cofradia-black-catrina",
    "name": "La Cofradia Black „ed. Catrina”",
    "category": "tequila",
    "categoryName": "Tequily 0,03l",
    "producer": "Tequila La Cofradía",
    "origin": "Mexiko",
    "region": "Tequila, Jalisco",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "165 Kč",
    "rawIngredients": "100% Agave azul.",
    "productionProcess": "Tradiční pečení a destilace, dlouhé zrání v silně vypálených sudech z amerického bílého dubu.",
    "flavorProfile": "Tmavě jantarová tequila s kouřovými tóny, pečenou agáve, hořkou čokoládou, kávovými zrny, dubovým dřevem a sušeným ovocem.",
    "foodPairing": "K hovězím steakům US Prime z grilu a pečeným žebírkům.",
    "staffNotes": "Dodávána v ručně malované černé keramické lahvi s motivem lebky Catrina. Prémiový chuťový i vizuální zážitek.",
    "tags": [
      "tequila",
      "añejo",
      "Catrina",
      "černá edice",
      "lebka"
    ]
  },
  {
    "id": "whisky-goldcock-blended",
    "name": "Goldcock Blended Whisky",
    "category": "whisky",
    "categoryName": "Whisky, whiskey, bourbon 0,03l",
    "producer": "Rudolf Jelínek (původně Těšetice u Olomouce)",
    "origin": "Česká republika",
    "region": "Morava, Vizovice / Haná",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "68 Kč",
    "rawIngredients": "100% moravský sladový a obilný ječmen z úrodné Hané, pramenitá vizovická voda.",
    "productionProcess": "Destilace na kotlích Arnold Holstein, následné zrání v nových vypálených sudech vyrobených z českého zimního dubu.",
    "flavorProfile": "Zlatá barva. Sladová, jemná vůně vanilky, zelených jablek, medu, ovesných vloček a jemného kouřového dřeva.",
    "foodPairing": "Výborná k vepřovým žebrům a telecí klobáse se smrži.",
    "staffNotes": "Kultovní česká whisky s kořeny v roce 1973. Zraje výhradně v sudech z českého dubu z moravských lesů.",
    "tags": [
      "whisky",
      "česká whisky",
      "Goldcock",
      "slad",
      "český dub"
    ]
  },
  {
    "id": "whisky-glenfiddich-15y",
    "name": "Glenfiddich 15y Solera Reserve",
    "category": "whisky",
    "categoryName": "Whisky, whiskey, bourbon 0,03l",
    "producer": "William Grant & Sons (Glenfiddich Distillery)",
    "origin": "Skotsko",
    "region": "Speyside (Dufftown)",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "145 Kč",
    "rawIngredients": "100% sladový ječmen a pramenitá voda z pramene Robbie Dhu.",
    "productionProcess": "Single Malt whisky zrající ve třech typech sudů: po španělském sherry Oloroso, americkém bourbonu a nových sudech z panenského dubu. Následně se mísí v unikátní obří kádi Solera z oregonské borovice, která není od roku 1998 nikdy vyprázdněna více než do poloviny.",
    "flavorProfile": "Nesmírně komplexní a hedvábná. Tóny sherry, marcipánu, rozinek, skořice, zázvoru, pečeného jablka a dubu.",
    "foodPairing": "Svíčková Wellington, kachní foie gras a karamelový trhanec.",
    "staffNotes": "Průkopnická whisky Speyside. Systém Solera zaručuje nepřekonatelnou konzistenci a harmonii chutí.",
    "tags": [
      "whisky",
      "single malt",
      "Skotsko",
      "Speyside",
      "Solera",
      "Glenfiddich"
    ]
  },
  {
    "id": "whisky-talisker-10y",
    "name": "Talisker 10y",
    "category": "whisky",
    "categoryName": "Whisky, whiskey, bourbon 0,03l",
    "producer": "Talisker Distillery (založeno 1830)",
    "origin": "Skotsko",
    "region": "Isle of Skye (Carbost)",
    "volume": "0,03l",
    "abv": "45,8 % obj.",
    "price": "148 Kč",
    "rawIngredients": "Silně rašelinou nakouřený sladový ječmen a rašelinová voda z Cnoc nan Speireag.",
    "productionProcess": "Tradiční dvojitá destilace v unikátních měděných kotlích se zahnutými trubkami do tvaru U, zrání 10 let v sudech z amerického dubu na divokém mořském pobřeží ostrova Skye.",
    "flavorProfile": "Výrazný rašelinový kouř, mořská sůl, chaluhy, šťavnatý slad, sušené citrusy a proslulý explozivní černopepřový závěr (peppery catch).",
    "foodPairing": "Skvěle doplňuje humří polévku, uzený vepřový bůček a tatarák.",
    "staffNotes": "Jediná palírna na ostrově Skye fungující nepřetržitě od 19. století. Robert Louis Stevenson ji označil za 'krále všech nápojů'.",
    "tags": [
      "whisky",
      "single malt",
      "kouřová",
      "ostrov Skye",
      "Talisker",
      "rašelina"
    ]
  },
  {
    "id": "whisky-monkey-shoulder",
    "name": "Monkey Shoulder",
    "category": "whisky",
    "categoryName": "Whisky, whiskey, bourbon 0,03l",
    "producer": "William Grant & Sons",
    "origin": "Skotsko",
    "region": "Speyside",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "98 Kč",
    "rawIngredients": "100% ječný slad (Blended Malt – směs jednosladových whisky bez zrnné složky).",
    "productionProcess": "Pečlivě sestavený blend tří špičkových speysidských single malt palíren (Balvenie, Glenfiddich a Kininvie). Zraje v sudech po bourbonu prvního plnění.",
    "flavorProfile": "Velmi jemná, sladká a krémová whisky. Tóny vanilky, medu, pečených hrušek, pomerančové marmelády a jemného dubového koření.",
    "foodPairing": "Vynikající jak samotná na ledu, tak v klasických whisky koktejlech (Old Fashioned, Whisky Sour).",
    "staffNotes": "Název vzdává poctu sladovníkům, kteří při ručním přehazování sladu trpěli dočasným namožením ramene přezdívaným 'opičí rameno'.",
    "tags": [
      "whisky",
      "blended malt",
      "Speyside",
      "vanilka",
      "jemná"
    ]
  },
  {
    "id": "whiskey-jameson",
    "name": "Jameson Irish Whiskey",
    "category": "whisky",
    "categoryName": "Whisky, whiskey, bourbon 0,03l",
    "producer": "Irish Distillers (Midleton Distillery)",
    "origin": "Irsko",
    "region": "County Cork, Midleton",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "75 Kč",
    "rawIngredients": "Sladový a nesladový ječmen sušený v uzavřených pecích bez kouře rašeliny, čistá irská voda.",
    "productionProcess": "Třikrát destilovaná (triple distilled) v měděných kotlích pot still a kolonách, zrání minimálně 4 roky v sudech po bourbonu a španělském sherry.",
    "flavorProfile": "Mimořádně jemná a vyvážená chuť. Tóny zelených jablek, vanilky, jemného oříšku a květin se sametovým závěrem bez kouře.",
    "foodPairing": "Vhodná k burgeru, pečenému kolenu a kuřeti.",
    "staffNotes": "Nejprodávanější irská whiskey na světě. Díky trojité destilaci a absenci rašeliny je dokonale hladká a přístupná.",
    "tags": [
      "whiskey",
      "Irsko",
      "Jameson",
      "trojitá destilace",
      "hladká"
    ]
  },
  {
    "id": "whiskey-jack-daniels",
    "name": "Jack Daniel's Old No. 7",
    "category": "whisky",
    "categoryName": "Whisky, whiskey, bourbon 0,03l",
    "producer": "Jack Daniel Distillery (založeno 1866)",
    "origin": "USA",
    "region": "Lynchburg, Tennessee",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "82 Kč",
    "rawIngredients": "Kvasný rmut: 80 % kukuřice, 12 % ječný slad a 8 % žito. Železa zbavená voda z jeskynního pramene Cave Spring Hollow.",
    "productionProcess": "Tennessee Whiskey – před uložením do nových vypálených sudů z amerického bílého dubu kape pomalu kapka po kapce přes třímetrovou vrstvu dřevěného uhlí z cukrového javoru (Lincoln County Process).",
    "flavorProfile": "Sladká, kouřová a plná. Tóny karamelu, vanilky, pečených banánů, javorového sirupu a opečeného dubu.",
    "foodPairing": "Skvělá k pečeným vepřovým žebrům s jablečnou BBQ omáčkou a burgerům.",
    "staffNotes": "Není to obyčejný bourbon – filtrace přes javorové uhlí dává Jacku Daniel's jeho pověstnou jemnost a nasládlý javorový charakter.",
    "tags": [
      "whiskey",
      "Tennessee",
      "Jack Daniels",
      "javorové uhlí",
      "USA"
    ]
  },
  {
    "id": "brandy-metaxa-5",
    "name": "Metaxa *****",
    "category": "brandy_cognac",
    "categoryName": "Brandy & cognac 0,03l",
    "producer": "House of Metaxa (Spyros Metaxa, od 1888)",
    "origin": "Řecko",
    "region": "Kifissia / Egejské ostrovy (Samos a Lémnos)",
    "volume": "0,03l",
    "abv": "38,0 % obj.",
    "price": "68 Kč",
    "rawIngredients": "Vinné destiláty ze středomořských hroznů, archivní sladká muškátová vína a tajná směs bylin a okvětních plátků růží.",
    "productionProcess": "Destiláty zrají minimálně 5 let v sudech z francouzského limousinského dubu, poté se míchají s muškátovými víny a infuzují bylinami.",
    "flavorProfile": "Jantarová barva. Sladce kořenitá chuť sušených meruněk, pomerančových květů, růžové vody, medu a vanilky.",
    "foodPairing": "Vhodné ke kávě, dezertům a karamelovému trhanci.",
    "staffNotes": "Unikátní řecký nápoj – vinný destilát zjemněný muškátovým vínem a růžovými lístky.",
    "tags": [
      "brandy",
      "Řecko",
      "Metaxa",
      "muškátové víno",
      "byliny"
    ]
  },
  {
    "id": "cognac-remy-martin-1738",
    "name": "Rémy Martin 1738 Accord Royal",
    "category": "brandy_cognac",
    "categoryName": "Brandy & cognac 0,03l",
    "producer": "Rémy Martin (založeno 1724)",
    "origin": "Francie",
    "region": "Cognac, Fine Champagne (Grande a Petite Champagne)",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "175 Kč",
    "rawIngredients": "Hrozny odrůdy Ugni Blanc z nejlepších vápencových apelací Grande a Petite Champagne.",
    "productionProcess": "Dvojitá destilace na kalech v malých měděných kotlích Charentais. Zrání v silně toustovaných sudech z francouzského limousinského dubu.",
    "flavorProfile": "Mimořádně bohatý a kulatý koňak. Tóny švestkových povidel, fíků, lékořice, hořké čokolády, skořice a karamelu s nekonečnou dochutí.",
    "foodPairing": "Svíčková Wellington, paštika z kachních foie gras a luxusní dezerty z čokolády Valrhona Dulcey.",
    "staffNotes": "Roku 1738 udělil francouzský král Ludvík XV. Rémy Martinovi královské privilegium vysazovat nové vinice za mimořádnou kvalitu koňaku. Tento koňak nese hrdě toto datum.",
    "tags": [
      "cognac",
      "koňak",
      "Fine Champagne",
      "Francie",
      "Remy Martin",
      "královský"
    ]
  },
  {
    "id": "palenka-fuzovice",
    "name": "Fuzovice",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Pivovar & Restaurace FUZE ve spolupráci s řemeslným lihovarem",
    "origin": "Česká republika",
    "region": "Praha",
    "volume": "0,03l",
    "abv": "42,0 % obj.",
    "price": "85 Kč",
    "rawIngredients": "Čerstvě uvařený nefiltrovaný a nepasterizovaný ležák TransFUZE 12 z našeho vlastního pivovaru.",
    "productionProcess": "Pomalá frakční destilace vlastního řemeslného piva na moderních měděných kolonách, zachycující nejjemnější aromatické složky sladu a žateckého chmele.",
    "flavorProfile": "Křišťálově čirá pivovice s intenzivní vůní čerstvého pivovarského sladu, chmelových silic, pečeného chleba a sušených jablek.",
    "foodPairing": "Nejlepší digestiv po pečeném vepřovém kolenu, žebrech a burgeru.",
    "staffNotes": "Podpisový destilát restaurace Fuze! Vyrábí se destilací našeho vlastního piva TransFUZE 12 – jedinečný příběh pro každého hosta.",
    "tags": [
      "pivovice",
      "FUZE",
      "vlastní výroba",
      "TransFUZE",
      "řemeslné"
    ]
  },
  {
    "id": "palenka-absinth-st-antoine",
    "name": "Absinth St. Antoine Žufánek",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Žufánek (rodinný lihovar Boršice)",
    "origin": "Česká republika",
    "region": "Morava, Slovácko",
    "volume": "0,03l",
    "abv": "70,0 % obj.",
    "price": "115 Kč",
    "rawIngredients": "Velejemný líh, pelyněk pravý (Artemisia absinthium), anýz, fenykl a dalších 7 horských bylin.",
    "productionProcess": "Tradiční průtahová destilace bez umělých barviv. Následná sekundární macerace bylin dávající absintu přírodní chlorofylově zelenou barvu.",
    "flavorProfile": "Mocný, bylinný, anýzový nápoj s komplexní hořkostí pelyňku a svěžím fenyklovým tónem. Při styku s ledovou vodou tvoří dokonalý mléčný zákal (louche efekt).",
    "foodPairing": "Rituální digestiv po jídle servírovaný s kapající ledovou vodou přes děrovanou lžičku s cukrem.",
    "staffNotes": "Martin Žufánek vyrábí jeden z nejrespektovanějších pravých absintů v Evropě. Žádné zapalování – pravý absinth se ředí ledovou vodou!",
    "tags": [
      "absinth",
      "Žufánek",
      "byliny",
      "pelyněk",
      "70%",
      "louche"
    ]
  },
  {
    "id": "palenka-kminka-garage22",
    "name": "Kmínka Garage 22",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Garage 22 (řemeslná destilérka v pražských Holešovicích)",
    "origin": "Česká republika",
    "region": "Praha, Holešovice",
    "volume": "0,03l",
    "abv": "38,0 % obj.",
    "price": "89 Kč",
    "rawIngredients": "Český dvouletý kmín, římský kmín, citrusová kůra a vybrané bylinky.",
    "productionProcess": "Macerace a šetrná redestilace v měděné koloně v malé pražské manufaktuře.",
    "flavorProfile": "Ušlechtilá, hřejivá a kořeněná chuť s čistým tónem chlebového kmínu osvěžená citrusovým dotekem.",
    "foodPairing": "Naprosto bezkonkurenční po tučném mase, pečeném vepřovém kolenu a tataráku.",
    "staffNotes": "Kmín je odvěkým pomocníkem pro trávení po sytých českých jídlech. Garage 22 povýšila starou českou kmínku na moderní světovou úroveň.",
    "tags": [
      "kmínka",
      "Garage 22",
      "Praha",
      "Holešovice",
      "trávení"
    ]
  },
  {
    "id": "palenka-kontusovka-zufanek",
    "name": "Kontušovka Žufánek",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Žufánek (Boršice)",
    "origin": "Česká republika",
    "region": "Morava, Slovácko",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "95 Kč",
    "rawIngredients": "Badyán, anýz, fenykl, koriandr, kmín a dalších pět bylin.",
    "productionProcess": "Bylinný destilát podle původní polské receptury ze 17. století, zrající v dubových sudech.",
    "flavorProfile": "Krásná zlatavá barva, bohatá anýzovo-badyánová chuť s kořeněnými tóny a medovým dozvukem.",
    "foodPairing": "Tradiční digestiv k vepřovým hodům a poctivé české kuchyni.",
    "staffNotes": "Slavný nápoj švejkovských dob ('dvě kontušovky a jedno pivo'). U Žufánka obnovená legenda v prvotřídní kvalitě.",
    "tags": [
      "kontušovka",
      "Žufánek",
      "badyán",
      "anýz",
      "tradiční"
    ]
  },
  {
    "id": "palenka-orechovy-radlik",
    "name": "Ořechový likér Radlík",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Palírna Radlík (Jílové u Prahy)",
    "origin": "Česká republika",
    "region": "Střední Čechy",
    "volume": "0,03l",
    "abv": "35,0 % obj.",
    "price": "89 Kč",
    "rawIngredients": "Zelené nezralé vlašské ořechy sbírané na svatého Jana (konec června), koření (hřebíček, skořice, muškát), med a ovocný destilát.",
    "productionProcess": "Pomalá několikaměsíční macerace zelených ořechů s kořením v jemném ovocném lihu a zrání.",
    "flavorProfile": "Tmavě hnědá barva. Bohatá, lehce nahořklá ořechová chuť s kořením a jemnou medovou sladkostí.",
    "foodPairing": "Skvělé k sýrovému prkénku, ořechovým dezertům a waldorfskému salátu.",
    "staffNotes": "Radlík je jednou z nejoceňovanějších pěstitelských pálenic v Česku s desítkami mezinárodních medailí.",
    "tags": [
      "ořechovka",
      "Radlík",
      "vlašské ořechy",
      "bylinný likér"
    ]
  },
  {
    "id": "palenka-hustopecska-mandlovka",
    "name": "Hustopečská Mandlovka",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Mandlárna Hustopeče",
    "origin": "Česká republika",
    "region": "Morava, Hustopeče (unikátní mandloňové sady)",
    "volume": "0,03l",
    "abv": "38,0 % obj.",
    "price": "79 Kč",
    "rawIngredients": "Přírodní mandlové aroma, vinný líh, hroznový mošt a čistá pramenitá voda.",
    "productionProcess": "Harmonické scelování vinného destilátu s přírodní mandlovou esencí podle receptury bývalého ředitele hustopečských mandloňových sadů Rudolfa Poslušného.",
    "flavorProfile": "Křišťálově čirá pálenka s opojnou sladce marcipánovou vůní a plnou mandlovou chutí s hřejivým závěrem.",
    "foodPairing": "Výborná k dezertům, trhanci a kávě espresso.",
    "staffNotes": "Pochází z jediných rozsáhlých mandloňových sadů ve střední Evropě rozkládajících se na svazích Hustopečí.",
    "tags": [
      "mandlovka",
      "Hustopeče",
      "mandle",
      "marcipán",
      "Morava"
    ]
  },
  {
    "id": "palenka-jagermeister",
    "name": "Jägermeister",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Mast-Jägermeister SE (založeno 1878)",
    "origin": "Německo",
    "region": "Wolfenbüttel, Dolní Sasko",
    "volume": "0,03l",
    "abv": "35,0 % obj.",
    "price": "75 Kč",
    "rawIngredients": "56 různých přírodních bylin, kořenů, květů a ovoce (např. zázvor, anýz, kardamom, pomerančová kůra, lékořice, jalovec).",
    "productionProcess": "Vícestupňová macerace bylin ve směsi vody a lihu trvající několik týdnů. Následné zrání 12 měsíců ve velkých dubových sudech.",
    "flavorProfile": "Tmavě hnědý bylinný likér. Komplexní, kořenitý, bylinkový a lehce hořkosladký s tóny skořice a lékořice. Podává se ledově namražený na -18 °C.",
    "foodPairing": "Univerzální party shot i digestiv po těžkém jídle.",
    "staffNotes": "Podává se z mrazáku při -18 °C pro optimální viskozitu a uvolnění bylinných silic.",
    "tags": [
      "Jägermeister",
      "bylinný likér",
      "Německo",
      "namražený",
      "56 bylin"
    ]
  },
  {
    "id": "palenka-becherovka",
    "name": "Becherovka (Nefiltrovaná)",
    "category": "liqueur_spirit",
    "categoryName": "Pálenky & likéry 0,03l",
    "producer": "Jan Becher – Karlovarská Becherovka",
    "origin": "Česká republika",
    "region": "Karlovy Vary",
    "volume": "0,03l",
    "abv": "38,0 % obj.",
    "price": "68 Kč",
    "rawIngredients": "Směs cca 20 tajných bylin a koření z celého světa, karlovarská minerální voda, líh a cukr.",
    "productionProcess": "Macerace bylin v lihu a následné zrání v dubových sudech. Nefiltrovaná edice si uchovává přirozený zákal a plnější tělo s vyšším podílem esenciálních silic.",
    "flavorProfile": "Typická hořkosladká kořeněná chuť s výraznými tóny hřebíčku, skořice, anýzu a pomerančové kůry.",
    "foodPairing": "Skvělá jako aperitiv před jídlem i jako tradiční lék na trávení po večeři.",
    "staffNotes": "Nefiltrovaná verze je prémiová lahůdka – je chuťově hutnější a aromatičtější než běžná filtrovaná Becherovka.",
    "tags": [
      "Becherovka",
      "Karlovy Vary",
      "bylinný likér",
      "nefiltrovaná",
      "česká klasika"
    ]
  },
  {
    "id": "gin-tanqueray",
    "name": "Tanqueray London Dry Gin",
    "category": "gin",
    "categoryName": "Giny 0,03l",
    "producer": "Charles Tanqueray (založeno 1830 v Londýně)",
    "origin": "Velká Británie",
    "region": "Cameronbridge, Skotsko",
    "volume": "0,03l",
    "abv": "43,1 % obj.",
    "price": "82 Kč",
    "rawIngredients": "Obilný neutrální líh a přesně 4 základní botanicals: toskánský jalovec, semena koriandru, kořen anděliky a lékořice.",
    "productionProcess": "Čtyřnásobná destilace v historickém měděném kotli 'Old Tom No. 10', který přežil bombardování Londýna.",
    "flavorProfile": "Čistý, křišťálový, přímočarý jalovcový profil se svěžím citrusovým a bylinným tělem a suchým závěrem.",
    "foodPairing": "Perfektní v kombinaci s prémiovým tonikem Thomas Henry a plátkem limetky.",
    "staffNotes": "Benchmark pro London Dry gin na celém světě. Žádné přidané cukry ani umělá aromata – pouze 4 čisté ingredience.",
    "tags": [
      "gin",
      "London Dry",
      "Tanqueray",
      "jalovec",
      "Anglie"
    ]
  },
  {
    "id": "gin-hendricks",
    "name": "Hendrick's Gin",
    "category": "gin",
    "categoryName": "Giny 0,03l",
    "producer": "William Grant & Sons (Girvan Distillery)",
    "origin": "Skotsko",
    "region": "Ayrshire, Girvan",
    "volume": "0,03l",
    "abv": "41,4 % obj.",
    "price": "115 Kč",
    "rawIngredients": "11 klasických botanicals plus závěrečná infuze esencí z damašských růží a čerstvých holandských salátových okurek.",
    "productionProcess": "Unikátní kombinace destilace ve dvou zcela odlišných kotlích: tradiční Bennett pot still (tělo) a vzácný Carter-Head still z roku 1948 s bylinným košem (lehkost).",
    "flavorProfile": "Květinový, neobyčejně svěží s nezaměnitelným tónem čerstvé křupavé okurky a jemných okvětních lístků růže podložený jalovcem.",
    "foodPairing": "Servíruje se s tonikem Fever-Tree nebo Thomas Henry a tenkým plátkem čerstvé okurky.",
    "staffNotes": "Kultovní lahev ve stylu starých viktoriánských lékárnických lahviček. Průkopník moderní renesance prémiových ginů.",
    "tags": [
      "gin",
      "Hendricks",
      "okurka",
      "růže",
      "Skotsko"
    ]
  },
  {
    "id": "vodka-anton-kaapl-legionar",
    "name": "Anton Kaapl LEGIONÄR Vodka",
    "category": "vodka",
    "categoryName": "Vodky 0,03l",
    "producer": "Rodinný lihovar Anton Kaapl",
    "origin": "Česká republika",
    "region": "Jižní Čechy, Jílovice u Trhových Svinů",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "89 Kč",
    "rawIngredients": "Výběrový velejemný líh a demineralizovaná křišťálová voda z vlastního hlubinného vrtu v Novohradských horách.",
    "productionProcess": "Vícedenní vícestupňová filtrace přes aktivní uhlí a zrání v tancích pro maximální zaoblení lihu.",
    "flavorProfile": "Neskutečně jemná, sametová a čistá chuť bez jakékoliv lihové agresivity, s lehkým sladkým dotekem pšenice.",
    "foodPairing": "Tradiční doprovod k tataráku, kaviáru, consommé a uzenému masu.",
    "staffNotes": "Česká řemeslná rodinná značka z Novohradských hor pojmenovaná po dědečkovi – legionáři Antonu Kaaplovi.",
    "tags": [
      "vodka",
      "Anton Kaapl",
      "jižní Čechy",
      "čistá",
      "řemeslná"
    ]
  },
  {
    "id": "vodka-grey-goose",
    "name": "Grey Goose Vodka",
    "category": "vodka",
    "categoryName": "Vodky 0,03l",
    "producer": "Bacardi (François Thibault, Maître de Chai)",
    "origin": "Francie",
    "region": "Picardie / Cognac (Gensac-la-Pallue)",
    "volume": "0,03l",
    "abv": "40,0 % obj.",
    "price": "135 Kč",
    "rawIngredients": "100% francouzská ozimá pšenice z úrodné oblasti Picardie a přírodní pramenitá voda filtrovaná vápencem v oblasti Cognac.",
    "productionProcess": "Pětistupňová kontinuální kolonová destilace a míchání s vápencovou pramenitou vodou.",
    "flavorProfile": "Hedvábná, kulatá textura s jemnými tóny mandlí, bílého pepře a čerstvě upečeného pečiva.",
    "foodPairing": "Prémiový základ pro koktejly Vodka Martini, Espresso Martini a Cosmopolitan.",
    "staffNotes": "Synonymum luxusní francouzské vodky. Vytvořena sklepním mistrem z oblasti Cognac.",
    "tags": [
      "vodka",
      "Grey Goose",
      "Francie",
      "pšenice",
      "luxusní"
    ]
  },
  {
    "id": "pivo-transfuze-12",
    "name": "TransFUZE 12 (Tradiční ležák)",
    "category": "beer_craft",
    "categoryName": "Pivo na čepu",
    "producer": "Pivovar FUZE Praha (sládek Aleš Paik)",
    "origin": "Česká republika",
    "region": "Praha, Masaryčka",
    "volume": "0,3l / 0,5l",
    "abv": "5,0 % obj.",
    "price": "59 Kč / 69 Kč",
    "rawIngredients": "Český humnový ječný slad, žatecký poloraný červeňák (ŽPČ), voda a spodní pivovarské kvasinky.",
    "productionProcess": "Tradiční dvourmutový dekokční postup, klasické kvašení v otevřených spilkách a dlouhé zrání v ležáckých tancích. Nepasterizované, nefiltrované, čepované přímo z tanku.",
    "flavorProfile": "Zlatá jiskrná barva, hustá krémová pěna, plné sladové tělo vyvážené pevnou, lahodnou a neulpívající chmelovou hořkostí.",
    "foodPairing": "Univerzální společník ke všem českým specialitám: vysoký vepřový řízek Duroc, hovězí tatarák, pečené koleno.",
    "staffNotes": "Naše vlajková loď! Vařeno přímo v restauraci naším vrchním sládkem Alešem Paikem. Nefiltrovaný ležák nejvyšší české školy.",
    "tags": [
      "pivo",
      "ležák",
      "FUZE",
      "TransFUZE",
      "čepované",
      "tankové"
    ]
  },
  {
    "id": "pivo-infuze-ipa-12",
    "name": "InFUZE IPA 12 (Session IPA)",
    "category": "beer_craft",
    "categoryName": "Pivo na čepu",
    "producer": "Pivovar FUZE Praha (sládek Aleš Paik)",
    "origin": "Česká republika",
    "region": "Praha",
    "volume": "0,4l",
    "abv": "4,9 % obj.",
    "price": "85 Kč",
    "rawIngredients": "Kombinace světlých ječných sladů, americké a novozélandské aromatické chmele (Citra, Mosaic, Nelson Sauvin).",
    "productionProcess": "Svrchně kvašené pivo, studené chmelení (dry hopping) v ležáckém tanku, nepasterizované a nefiltrované.",
    "flavorProfile": "Svěží citrusové aroma grapefruitu, marakuji a borovicového jehličí, lehké pitelné tělo a suchá osvěžující hořkost v závěru.",
    "foodPairing": "Skvěle funguje s burgery, vepřovým bůčkem s chimichurri a pikantními jídly.",
    "staffNotes": "Session IPA je navržená tak, aby byla voňavá a plná chmelové chuti, ale zároveň lehká a skvěle pitelná po celý večer.",
    "tags": [
      "pivo",
      "IPA",
      "Session IPA",
      "FUZE",
      "chmel",
      "citrusy"
    ]
  },
  {
    "id": "pivo-fuzenac-13",
    "name": "FUZEnáč 13 (Polotmavý kouřový speciál)",
    "category": "beer_craft",
    "categoryName": "Pivo na čepu",
    "producer": "Pivovar FUZE Praha (sládek Aleš Paik)",
    "origin": "Česká republika",
    "region": "Praha",
    "volume": "0,3l / 0,5l",
    "abv": "5,3 % obj.",
    "price": "69 Kč / 78 Kč",
    "rawIngredients": "Humnový slad, nakuřovaný bukový slad z Bambergu, karamelový slad a žatecký chmel.",
    "productionProcess": "Spodně kvašené pivo, pomalé zrání v tancích, nepasterizované a nefiltrované.",
    "flavorProfile": "Nádherná jantarová barva, kouřové a uzené aroma připomínající ohniště a uzené maso, plná sladová chuť s jemným karamelem.",
    "foodPairing": "Geniální párování k zauzenému vepřovému boku, pastrami z hliněné pece a vepřovým žebrům.",
    "staffNotes": "Pro milovníky poctivých nakuřovaných piv (Rauchbier). Dým z bukového dřeva dává pivu neskutečný charakter.",
    "tags": [
      "pivo",
      "polotmavé",
      "kouřové",
      "Rauchbier",
      "FUZE",
      "speciál"
    ]
  }
];
