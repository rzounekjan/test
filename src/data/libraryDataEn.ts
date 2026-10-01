import { CulinaryTerm, BeverageItem } from './libraryData';

/**
 * FUZE Gastro Academy – English Library (Knowledge Base & Encyclopedia)
 * 
 * Contains:
 * 1. Culinary Glossary: foreign terms, cuts, sauces, techniques & ingredients
 * 2. Beverage Encyclopedia: wines, rums, tequilas, whiskies, liqueurs & beers
 */

export const CULINARY_TERMS_EN: CulinaryTerm[] = [
  {
    "id": "chimichurri",
    "name": "Chimichurri",
    "originalTerm": "Chimichurri (Argentina)",
    "category": "sauces_dressings",
    "categoryName": "Sauces & Salsas",
    "origin": "Argentina / Uruguay",
    "shortDescription": "Fresh South American uncooked herb salsa based on fresh herbs, garlic, vinegar, and extra virgin olive oil.",
    "ingredients": [
      "Flat-leaf parsley",
      "Fresh oregano",
      "Garlic",
      "Chilli flakes (ají molido)",
      "Red wine vinegar",
      "High quality extra virgin olive oil",
      "Sea salt and freshly ground black pepper"
    ],
    "flavorProfile": "Vibrant, herbaceous, lightly spicy with a pleasant acidity that cuts cleanly through rich roasted and grilled meats.",
    "culinaryUsage": "Used as a cold table sauce, marinade, or dipping sauce. Ingredients are finely hand-chopped rather than pureed to preserve texture and vivid color.",
    "fuzeMenuAppearances": [
      "Grilled pork belly with caramelized yuzu sauce and chimichurri",
      "Chimichurri sauce (standalone cold sauce)"
    ],
    "staffTips": "Recommend to guests with richer meats (pork belly, steaks). The wine vinegar acidity and herbal brightness cut through fat and elevate the dish.",
    "tags": [
      "sauce",
      "herbs",
      "cold kitchen",
      "Argentina",
      "grill"
    ]
  },
  {
    "id": "duroc",
    "name": "Duroc Pork",
    "originalTerm": "Duroc Pork (USA)",
    "category": "meat_cuts",
    "categoryName": "Meat & Steak Cuts",
    "origin": "North America (New York & New Jersey, mid-19th century)",
    "shortDescription": "Prestigious heritage pig breed renowned for high intramuscular marbling, fine muscle fibers, and extraordinary tenderness.",
    "ingredients": [
      "100% purebred or crossbred Duroc pork (red-brown heritage breed)",
      "Abundant intramuscular marbling fat",
      "High oleic acid profile"
    ],
    "flavorProfile": "Distinctive deep savory pork flavor, incomparably juicier and more tender than commercial pork, with a subtle nutty sweetness from rendered fat.",
    "culinaryUsage": "Ideal for thick-cut schnitzels, chops, and slow roasting. The marbling ensures the meat stays exceptionally succulent and never dries out during frying or grilling.",
    "fuzeMenuAppearances": [
      "Thick-cut Duroc pork schnitzel with fines herbes sauce, potato mash, and potato crisps"
    ],
    "staffTips": "Explain to guests that Duroc is the pork equivalent of Black Angus in beef. Our schnitzel is served thick-cut and remains remarkably juicy inside.",
    "tags": [
      "pork",
      "meat",
      "Duroc",
      "schnitzel",
      "marbling"
    ]
  },
  {
    "id": "cornichons",
    "name": "Cornichons",
    "originalTerm": "Cornichons (France)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "France",
    "shortDescription": "Miniature French pickled gherkins with delicate bumps harvested at an early stage and cured in an aromatic vinegar brine.",
    "ingredients": [
      "Young miniature gherkins (3–5 cm in length)",
      "White wine or spirit vinegar",
      "Fresh tarragon",
      "Coriander and mustard seeds",
      "Pearl onions and sea salt"
    ],
    "flavorProfile": "Snappy, crisp, distinctly tart and tangy with herbal tarragon notes and gentle mustard pungency.",
    "culinaryUsage": "Essential element of hand-cut beef tartare, charcuterie boards, terrines, and raclette. Finely diced, they provide bite and bright acidity.",
    "fuzeMenuAppearances": [
      "Hand-cut beef tartare from rump cap, cornichons, marinated shallots, potato straw"
    ],
    "staffTips": "In our tartare, diced cornichons provide an essential crunch and an acidic counterweight to the rich beef rump cap.",
    "tags": [
      "pickles",
      "gherkins",
      "France",
      "tartare"
    ]
  },
  {
    "id": "salsa-verde",
    "name": "Salsa Verde",
    "originalTerm": "Salsa verde (Italy / Mediterranean)",
    "category": "sauces_dressings",
    "categoryName": "Sauces & Salsas",
    "origin": "Italy (Piedmont / Lombardy)",
    "shortDescription": "Traditional Mediterranean uncooked green herb salsa loaded with natural umami from salted anchovies and pickled capers.",
    "ingredients": [
      "Fresh flat-leaf parsley",
      "Salted anchovy fillets",
      "Brined capers",
      "Garlic",
      "Dijon mustard or white bread crumb soaked in vinegar",
      "Extra virgin olive oil and a dash of wine vinegar"
    ],
    "flavorProfile": "Herbaceous, savory, tangy with deep umami. More punchy and savory than chimichurri thanks to anchovies and capers.",
    "culinaryUsage": "Classic accompaniment to boiled and roasted meats (bollito misto), wood-oven fish, and grilled vegetables.",
    "fuzeMenuAppearances": [
      "Our salsa verde (standalone cold sauce for grilled meats)"
    ],
    "staffTips": "Explain the difference: Chimichurri is oregano- and chilli-based, whereas Italian Salsa Verde derives its umami depth from capers and anchovies.",
    "tags": [
      "sauce",
      "herbs",
      "anchovies",
      "capers",
      "Italy"
    ]
  },
  {
    "id": "choron",
    "name": "Choron Sauce",
    "originalTerm": "Sauce Choron (France)",
    "category": "sauces_dressings",
    "categoryName": "Sauces & Salsas",
    "origin": "France (Paris, 19th century, Chef Alexandre Étienne Choron)",
    "shortDescription": "Luxurious warm emulsified sauce based on classic Béarnaise enriched with a rich reduction of sweet roasted tomatoes.",
    "ingredients": [
      "Fresh egg yolks",
      "Clarified butter",
      "White wine and shallot tarragon vinegar reduction",
      "Fresh tarragon and chervil",
      "Concentrated tomato reduction / roasted tomato purée",
      "Pinch of cayenne pepper and salt"
    ],
    "flavorProfile": "Velvety, buttery sauce with an aniseed nuance from tarragon and a sweet-tart depth from roasted tomatoes, glowing with coral-pink color.",
    "culinaryUsage": "Served warm over beef steaks, rump cap, grilled fish, and roasted vegetables.",
    "fuzeMenuAppearances": [
      "Choron – warm sauce for grilled meats and wood-fired specialities"
    ],
    "staffTips": "A splendid choice for guests who love Béarnaise or Hollandaise, but appreciate a warmer, fruitier tomato accent with their beef steak.",
    "tags": [
      "warm sauce",
      "butter",
      "egg yolks",
      "tomatoes",
      "France"
    ]
  },
  {
    "id": "fines-herbes",
    "name": "Fines Herbes",
    "originalTerm": "Fines herbes (France)",
    "category": "sauces_dressings",
    "categoryName": "Sauces & Salsas",
    "origin": "France (classic haute cuisine)",
    "shortDescription": "Iconic French herbal quartet consisting of flat-leaf parsley, chives, chervil, and tarragon.",
    "ingredients": [
      "Chervil (delicate aniseed nuance)",
      "French tarragon (distinct aromatic note)",
      "Chives (subtle onion accent)",
      "Flat-leaf parsley (clean earthy freshness)",
      "Cream, butter base and gentle veal stock"
    ],
    "flavorProfile": "Delicate, fresh, herbaceous with subtle liquorice and aniseed hints, supported by a gentle buttery cream body.",
    "culinaryUsage": "Herbs are stirred in at the very end of cooking to preserve their volatile essential oils and bright emerald hue.",
    "fuzeMenuAppearances": [
      "Our fines herbes – warm herb sauce served with the thick-cut Duroc pork schnitzel"
    ],
    "staffTips": "Highlight the finesse of this sauce: it is a refined French herb classic that enhances rather than overwhelms the tenderness of Duroc pork.",
    "tags": [
      "herbs",
      "sauce",
      "French cuisine",
      "tarragon",
      "chervil"
    ]
  },
  {
    "id": "padron-peppers",
    "name": "Padrón Peppers",
    "originalTerm": "Pimientos de Padrón (Spain)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "Spain (Municipality of Padrón, Galicia)",
    "shortDescription": "Small green Spanish peppers flash-blistered over high heat and seasoned with flaky sea salt. Renowned because most are mild, but every tenth packs heat.",
    "ingredients": [
      "Fresh green Capsicum annuum var. Annuum peppers",
      "High smoke-point oil for flash frying",
      "Coarse flaky sea salt (Maldon)"
    ],
    "flavorProfile": "Grassy, sweet, lightly smoky from blistering heat. The famous Galician adage says: 'Os pementos de Padrón, uns pican e outros non' (Padrón peppers, some are hot, some are not).",
    "culinaryUsage": "Flash-fried in a smoking hot pan or grill until blistered and charred, then immediately sprinkled with sea salt flakes.",
    "fuzeMenuAppearances": [
      "Blistered Padrón peppers served with US Prime rump cap and US Prime rib eye"
    ],
    "staffTips": "Fun talking point for guests: 90% are mild and sweet, but an occasional spicy one turns the meal into a delightful culinary roulette!",
    "tags": [
      "peppers",
      "Spain",
      "grill",
      "tapas",
      "side"
    ]
  },
  {
    "id": "us-prime",
    "name": "US Prime Beef",
    "originalTerm": "USDA Prime Beef (USA)",
    "category": "meat_cuts",
    "categoryName": "Meat & Steak Cuts",
    "origin": "United States (USDA Certification Grade)",
    "shortDescription": "The pinnacle of American beef – the highest quality grade awarded to less than 3% of all graded cattle in the USA.",
    "ingredients": [
      "Young grain-fed beef (predominantly Black Angus breed)",
      "Extended grain finishing (corn, barley)",
      "Dense, uniform intramuscular marbling"
    ],
    "flavorProfile": "Incredibly buttery, deep, savory beef flavor. Due to high intramuscular marbling, the steak self-bastes on the grill and melts on the palate.",
    "culinaryUsage": "Prime rib eye, rump cap, striploin, and the basis for our luxury burgers and wood-fired pastrami.",
    "fuzeMenuAppearances": [
      "US Prime beef rump cap from the wood-fired grill",
      "US Prime rib eye from the grill",
      "US Prime beef burger with bacon and cheddar",
      "Our pastrami from US Prime beef ribs"
    ],
    "staffTips": "Key selling point: US Prime is the guaranteed highest grade of American beef available (superior to Choice and Select), offering peak marbling and succulence.",
    "tags": [
      "beef",
      "meat",
      "steaks",
      "USA",
      "marbling",
      "grill"
    ]
  },
  {
    "id": "picanha-kvetova-spicka",
    "name": "Beef Rump Cap (Picanha)",
    "originalTerm": "Picanha / Rump Cap / Tafelspitz",
    "category": "meat_cuts",
    "categoryName": "Meat & Steak Cuts",
    "origin": "Brazil / South America & Austria",
    "shortDescription": "Triangular muscle from the top of the rump (biceps femoris) crowned with a signature layer of crisp white fat cap.",
    "ingredients": [
      "Beef top sirloin cap (rump cap)",
      "Fat cap (renders during roasting to baste and protect the meat)"
    ],
    "flavorProfile": "Intense beefiness, firm yet tender texture. The melting fat cap bastes the cut continuously during grilling, providing profound savory depth.",
    "culinaryUsage": "Queen of Brazilian churrasco, central to Austrian Tafelspitz, and in modern gastropubs an outstanding steak and hand-cut tartare cut.",
    "fuzeMenuAppearances": [
      "Hand-cut beef tartare from rump cap",
      "US Prime beef rump cap from the wood-fired grill with Padrón peppers"
    ],
    "staffTips": "Share with guests that our tartare isn't ground from bland tenderloin, but hand-sliced from rump cap, which offers vastly superior natural beef flavor.",
    "tags": [
      "beef",
      "picanha",
      "steak",
      "tartare",
      "meat"
    ]
  },
  {
    "id": "rib-eye-rostenec",
    "name": "Rib Eye (Entrecôte)",
    "originalTerm": "Rib Eye Steak / Entrecôte",
    "category": "meat_cuts",
    "categoryName": "Meat & Steak Cuts",
    "origin": "Classic beef cut (France / USA)",
    "shortDescription": "The juiciest and most popular steak cut from the rib section, featuring an unmistakable central eye of marbling fat.",
    "ingredients": [
      "Beef rib section between the 6th and 12th ribs",
      "Central fat eye and extensive intramuscular marbling"
    ],
    "flavorProfile": "Robust, succulent, deeply savory. The central fat kernel melts under intense heat, basting the meat from within.",
    "culinaryUsage": "Best cooked over high heat (charcoal, Josper, cast iron). Recommended Medium-Rare to Medium so the rich marbling fully renders.",
    "fuzeMenuAppearances": [
      "US Prime rib eye from the grill with blistered Padrón peppers"
    ],
    "staffTips": "Recommend Medium Rare to Medium. With a marbled rib eye, rendering that interior fat creates an incomparably flavorful steak.",
    "tags": [
      "beef",
      "steak",
      "grill",
      "rib eye",
      "roštěnec"
    ]
  },
  {
    "id": "pastrami",
    "name": "Pastrami",
    "originalTerm": "Pastrami (Romania / New York Deli)",
    "category": "meat_cuts",
    "categoryName": "Meat & Steak Cuts",
    "origin": "Eastern European Jewish heritage (Romania), immortalized by classic New York delicatessens",
    "shortDescription": "Beef cut (brisket, short rib) brined with spices, crusted in cracked black pepper and toasted coriander, gently smoked, and steamed fork-tender.",
    "ingredients": [
      "Beef ribs or brisket",
      "Spiced brine with brown sugar, bay leaf, allspice",
      "Bark crust: cracked black pepper, toasted coriander, garlic, mustard seeds",
      "Wood smoke and clay oven roasting"
    ],
    "flavorProfile": "Smoky, peppery, aromatic with coriander notes. The meat breaks into silky, melt-in-your-mouth shreds.",
    "culinaryUsage": "Sliced warm and piled onto toasted sourdough bread with melted cheese, mustard, and pickles.",
    "fuzeMenuAppearances": [
      "Our pastrami from US Prime beef ribs roasted in a clay oven, raclette cheese, and cabbage slaw on toasted sourdough"
    ],
    "staffTips": "We don't buy commercial deli meat: our beef ribs are brined, spice-crusted, and roasted right in our in-house wood-fired clay oven!",
    "tags": [
      "pastrami",
      "smoked",
      "beef",
      "sandwich",
      "bakery"
    ]
  },
  {
    "id": "raclette",
    "name": "Raclette Cheese",
    "originalTerm": "Fromage à Raclette (Switzerland / Savoy)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "Switzerland (Canton of Valais)",
    "shortDescription": "Traditional semi-hard cow's milk alpine cheese renowned worldwide for its superior melting qualities.",
    "ingredients": [
      "Alpine cow's milk",
      "Natural rennet and salt",
      "Aged 3 to 6 months with washed rind"
    ],
    "flavorProfile": "Aromatic, creamy, nutty, and savory when melted, releasing an irresistible alpine aroma.",
    "culinaryUsage": "Heated and scraped (from the French 'racler') directly onto roasted potatoes, meats, and toasted sandwiches.",
    "fuzeMenuAppearances": [
      "Our pastrami with melted raclette cheese and cabbage slaw on toasted sourdough"
    ],
    "staffTips": "It melts smoothly without separating, binding the crunchy sourdough bread and spicy pastrami into an indulgent, decadent bite.",
    "tags": [
      "cheese",
      "Switzerland",
      "melted cheese",
      "pastrami"
    ]
  },
  {
    "id": "red-leicester",
    "name": "Red Leicester Cheese",
    "originalTerm": "Red Leicester (England)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "United Kingdom (Leicestershire, since the 18th century)",
    "shortDescription": "Traditional English semi-hard cow's milk cheese famous for its striking russet-orange color derived from natural annatto seed extract.",
    "ingredients": [
      "Pasteurized whole cow's milk",
      "Natural Annatto seed extract (achiote)",
      "Dairy starter cultures and rennet"
    ],
    "flavorProfile": "Rich, slightly sweet with nutty and caramel undertones, with a creamy yet crumbly texture.",
    "culinaryUsage": "Bakes and melts beautifully over fries, warm dishes, and rich cheese sauces.",
    "fuzeMenuAppearances": [
      "Fries with truffle mayonnaise and grated Red Leicester cheese"
    ],
    "staffTips": "Guests frequently ask about the color: it is not synthetic coloring, but an all-natural South American plant seed extract used in English cheesemaking for centuries.",
    "tags": [
      "cheese",
      "England",
      "fries",
      "truffle"
    ]
  },
  {
    "id": "foie-gras",
    "name": "Foie Gras",
    "originalTerm": "Foie gras (France)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "France",
    "shortDescription": "Iconic French culinary delicacy – naturally fattened duck or goose liver celebrated for its silky, buttery richness.",
    "ingredients": [
      "Duck liver (Foie gras de canard)",
      "Cognac or Armagnac and port wine marinade",
      "White pepper, nutmeg, fine sea salt",
      "Kasteel Rouge cherry beer jelly"
    ],
    "flavorProfile": "Extraordinarily rich, velvety, buttery mouthfeel that literally melts at body temperature.",
    "culinaryUsage": "Prepared into fine terrines and pâtés, or flash-seared in a pan. Always demands an acidic or fruit-sweet counterpart.",
    "fuzeMenuAppearances": [
      "Duck foie gras pâté in Kasteel Rouge cherry beer jelly, cherry sauce, toasted butter brioche"
    ],
    "staffTips": "Recommend pairing with our draft Belgian Kasteel Rouge cherry beer or a glass of Pálava wine – the fruit sweetness and acidity create heavenly harmony.",
    "tags": [
      "foie gras",
      "duck liver",
      "pâté",
      "France",
      "delicacy"
    ]
  },
  {
    "id": "consomme",
    "name": "Beef Consommé",
    "originalTerm": "Consommé de bœuf (France)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "France",
    "shortDescription": "Crystal-clear, deeply concentrated double beef broth clarified through the classical egg white and lean beef raft technique.",
    "ingredients": [
      "Beef bones and shank slowly simmered for hours",
      "Root vegetables (carrots, celery, parsley root, leek)",
      "Clarification raft: egg whites, lean ground beef, aromatics",
      "Delicate beef liver dumpling"
    ],
    "flavorProfile": "Pure, deep essence of roasted beef with high natural gelatin content that coats the palate with a velvet sheen.",
    "culinaryUsage": "Served piping hot as an elegant soup course with fine vegetable garnishes and delicate dumplings.",
    "fuzeMenuAppearances": [
      "Beef consommé with delicate liver dumpling and root vegetables"
    ],
    "staffTips": "Guests appreciate understanding the craftsmanship: consommé is not ordinary broth, but a double-reduced stock clarified with egg whites over hours of gentle simmering.",
    "tags": [
      "soup",
      "broth",
      "consommé",
      "French technique"
    ]
  },
  {
    "id": "valrhona-dulcey",
    "name": "Valrhona Dulcey Chocolate",
    "category": "pastry_sweets",
    "categoryName": "Pastry & Sweets",
    "origin": "France (Valrhona Chocolate Academy, Tain l'Hermitage)",
    "shortDescription": "The world's first 'blond' chocolate, created through slow caramelization of white chocolate by master pastry chef Frédéric Bau.",
    "ingredients": [
      "Cocoa butter (min. 35%)",
      "Whole milk powder slowly caramelized via Maillard reaction",
      "Sugar and natural vanilla extract",
      "Pinch of sea salt balancing sweetness"
    ],
    "flavorProfile": "Intense notes of buttery caramel, sablé biscuit, toasted milk, and a delicate touch of sea salt.",
    "culinaryUsage": "Used for high-end ganaches, mousses, entremets, and sculptural pastry creations.",
    "fuzeMenuAppearances": [
      "Hop-cone ganache cakes crafted from Valrhona Dulcey blond chocolate, chocolate soil, and sour cherry sauce"
    ],
    "staffTips": "One of our most creative desserts: visually sculpted like a green hop cone, but hiding a heart of luxurious caramel-blond chocolate inside!",
    "tags": [
      "chocolate",
      "Valrhona",
      "dessert",
      "caramel",
      "hops"
    ]
  },
  {
    "id": "ganache",
    "name": "Ganache",
    "originalTerm": "Ganache (France)",
    "category": "pastry_sweets",
    "categoryName": "Pastry & Sweets",
    "origin": "France / Switzerland (Parisian confectioner Siraudin, circa 1860)",
    "shortDescription": "Pillar of French pastry – a glossy emulsion of hot heavy cream and couverture chocolate.",
    "ingredients": [
      "Premium couverture chocolate (dark, milk, or blond)",
      "Fresh high-fat heavy whipping cream (min. 35% fat)",
      "Butter or glucose for velvety sheen and elasticity"
    ],
    "flavorProfile": "Silky-smooth, luscious cream that melts evenly across the tongue, delivering pure chocolate essence.",
    "culinaryUsage": "Filling for cakes, macarons, tarts, truffles, and modern sculpted desserts.",
    "fuzeMenuAppearances": [
      "Hop-cone shaped ganache cakes"
    ],
    "staffTips": "Proper emulsification produces a lump-free, velvety texture that forms the creamy heart of our signature dessert.",
    "tags": [
      "pastry",
      "ganache",
      "chocolate",
      "cream",
      "dessert"
    ]
  },
  {
    "id": "espuma",
    "name": "Espuma",
    "originalTerm": "Espuma (Spain)",
    "category": "culinary_techniques",
    "categoryName": "Cooking Techniques",
    "origin": "Spain (Catalonia, Chef Ferran Adrià at elBulli)",
    "shortDescription": "Modern culinary technique producing ethereal foam in a pressurized siphon canister using nitrous oxide (N2O).",
    "ingredients": [
      "Flavored liquid base or purée (semolina cream, milk, vanilla)",
      "Natural binding agent (fat, gelatin, agar, or albumin)",
      "Food-grade N2O nitrous oxide gas"
    ],
    "flavorProfile": "Weightless as a cloud, releasing flavor compounds and aromas instantly on the tongue without heavy density.",
    "culinaryUsage": "Transforms traditional hearty dishes into modern, airy textures.",
    "fuzeMenuAppearances": [
      "Semolina porridge made from espuma with cocoa and melted butter"
    ],
    "staffTips": "Our semolina porridge isn't heavy pot porridge – thanks to the culinary siphon, it is an astonishingly light, cloud-like cream beloved by both kids and adults.",
    "tags": [
      "espuma",
      "molecular gastronomy",
      "siphon",
      "semolina"
    ]
  },
  {
    "id": "brioche",
    "name": "Brioche",
    "originalTerm": "Brioche (France, Normandy)",
    "category": "pastry_sweets",
    "categoryName": "Pastry & Bakery",
    "origin": "France (Normandy, 15th century)",
    "shortDescription": "Enriched French yeast bread packed with butter and eggs, creating a golden crust and tender, feather-light crumb.",
    "ingredients": [
      "Wheat flour",
      "Exceptionally high butter proportion (up to 50% flour weight)",
      "Fresh eggs and egg yolks",
      "Milk, yeast, pinch of sugar and sea salt"
    ],
    "flavorProfile": "Rich, buttery, mildly sweet with a delicate golden crust and pillow-soft interior crumb.",
    "culinaryUsage": "Sliced and toasted to accompany pâtés and foie gras, or baked into premium burger and rib buns.",
    "fuzeMenuAppearances": [
      "Toasted butter brioche with duck foie gras pâté",
      "Toasted garlic brioche with beer-glazed pork ribs",
      "Toasted garlic brioche (standalone side)"
    ],
    "staffTips": "The butter richness in brioche absorbs the savory juices from ribs and pairs flawlessly with foie gras.",
    "tags": [
      "brioche",
      "bakery",
      "butter",
      "France",
      "side"
    ]
  },
  {
    "id": "smrze",
    "name": "Morels (Morchella)",
    "originalTerm": "Morchella / Morels",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "Temperate woodland zones of Europe and North America",
    "shortDescription": "Among the most sought-after and precious wild spring mushrooms, recognizable by their hollow honeycomb-like cap.",
    "ingredients": [
      "Authentic wild morel mushrooms (dried or fresh spring harvest)",
      "Hollow fruiting bodies packed with aromatic savory compounds"
    ],
    "flavorProfile": "Deeply earthy, nutty, woody, and meaty with intense umami that enriches sauces and farce.",
    "culinaryUsage": "Sautéed in butter, folded into artisanal sausages, terrines, and cream reductions for veal and poultry.",
    "fuzeMenuAppearances": [
      "Our veal sausage with morels, chestnuts, and prunes, truffle sauce"
    ],
    "staffTips": "In gastronomy, morels rank right behind truffles as royalty among mushrooms. They lend our veal sausage an unmistakable noble depth.",
    "tags": [
      "mushrooms",
      "morels",
      "delicacy",
      "veal",
      "forest"
    ]
  },
  {
    "id": "yuzu",
    "name": "Yuzu",
    "originalTerm": "Yuzu / Citrus junos (East Asia)",
    "category": "world_flavors",
    "categoryName": "World & Asian Flavors",
    "origin": "Japan and East Asia",
    "shortDescription": "Prized Asian citrus fruit with an extraordinarily complex, intensely aromatic essential oil profile.",
    "ingredients": [
      "Pure juice and zest of Yuzu citrus fruit (Citrus junos)"
    ],
    "flavorProfile": "A captivating fusion echoing mandarin orange, bitter grapefruit, lime, and delicate floral jasmine blossoms.",
    "culinaryUsage": "Glazes, dressings, dipping sauces for rich meats, refined pastries, and craft cocktails.",
    "fuzeMenuAppearances": [
      "Grilled pork belly with caramelized yuzu sauce and chimichurri"
    ],
    "staffTips": "The yuzu in our pork belly glaze brings the signature Asian 'fuze' dimension, transforming a classic pork roast into a modern gastronomic experience.",
    "tags": [
      "yuzu",
      "citrus",
      "Japan",
      "pork belly",
      "glaze"
    ]
  },
  {
    "id": "confit-cesnek",
    "name": "Confit Garlic",
    "originalTerm": "Ail confit (France)",
    "category": "culinary_techniques",
    "categoryName": "Cooking Techniques",
    "origin": "France (Southwest)",
    "shortDescription": "Classical technique of slowly poaching whole garlic cloves fully submerged in fat at a gentle temperature (~85°C).",
    "ingredients": [
      "Whole peeled garlic cloves",
      "Quality oil, beef tallow, or duck fat",
      "Thyme, rosemary, and black peppercorns"
    ],
    "flavorProfile": "Cooking removes all harsh sulfurous pungency, leaving cloves butter-soft, sweet, and nutty with caramel notes.",
    "culinaryUsage": "Spread over warm sourdough toast, folded into mashed potatoes, or used as a sweet aromatic base in pan sauces.",
    "fuzeMenuAppearances": [
      "Sliced beef tartare with toast fried in beef tallow and confit garlic"
    ],
    "staffTips": "Guests sensitive to raw garlic can enjoy confit garlic without worry – it is gentle, sweet, and highly digestible.",
    "tags": [
      "garlic",
      "confit",
      "tartare",
      "toast",
      "French technique"
    ]
  },
  {
    "id": "bramborova-slama",
    "name": "Potato Straw (Pommes Pailles)",
    "originalTerm": "Pommes pailles (France)",
    "category": "culinary_techniques",
    "categoryName": "Cooking Techniques",
    "origin": "France",
    "shortDescription": "Potatoes sliced into matchstick-thin threads (~1 mm), rinsed of starch, and flash-fried into an airy, golden crispy nest.",
    "ingredients": [
      "High-starch baking potatoes",
      "High smoke-point frying oil",
      "Fine sea salt"
    ],
    "flavorProfile": "Crisp, airy, light crunch with a clean roasted potato taste without greasiness.",
    "culinaryUsage": "Used as a decorative, textured garnish providing vertical height and delicate crisp contrast.",
    "fuzeMenuAppearances": [
      "Hand-cut beef tartare from rump cap (crowned with potato straw)",
      "Potato mash with butter and potato straw"
    ],
    "staffTips": "On both tartare and mashed potatoes, the straw provides an enjoyable crunchy contrast to the smooth textures underneath.",
    "tags": [
      "potatoes",
      "crisps",
      "crunch",
      "tartare",
      "garnish"
    ]
  },
  {
    "id": "kasteel-rouge",
    "name": "Kasteel Rouge Beer",
    "originalTerm": "Kasteel Rouge (Belgium)",
    "category": "gourmet_ingredients",
    "categoryName": "Beers & Culinary Ingredients",
    "origin": "Belgium (Ingelmunster, Van Honsebrouck Family Brewery)",
    "shortDescription": "Celebrated Belgian strong top-fermented ale (8.0% ABV) aged 6 months on authentic ripe sour cherries.",
    "ingredients": [
      "Dark Belgian specialty beer base (Kasteel Donker)",
      "Real sour cherries and pure cherry juice",
      "Barley malt, hops, water, and Belgian ale yeast"
    ],
    "flavorProfile": "Deep ruby color, luscious sweet-tart cherry flavor, notes of dark chocolate, almonds, and port wine with a warming alcoholic finish.",
    "culinaryUsage": "Poured on draft at our bar, and reduced in the Fuze kitchen into a glossy beer jelly atop duck foie gras.",
    "fuzeMenuAppearances": [
      "Duck foie gras pâté in Kasteel Rouge cherry beer jelly, cherry reduction",
      "Kasteel Rouge 18 – on tap 0.25l"
    ],
    "staffTips": "A great example of bar and kitchen collaboration: the Belgian cherry ale we pour on draft is reduced by our chefs to glaze our foie gras pâté!",
    "tags": [
      "Belgian beer",
      "cherries",
      "foie gras",
      "jelly",
      "draft beer"
    ]
  },
  {
    "id": "waldorf",
    "name": "Waldorf Salad",
    "originalTerm": "Waldorf Salad (USA, New York)",
    "category": "sauces_dressings",
    "categoryName": "Salads & Dressings",
    "origin": "USA (New York, Waldorf-Astoria Hotel, 1893)",
    "shortDescription": "World-famous crisp salad created over a century ago by hotel maître d'hôtel Oscar Tschirky.",
    "ingredients": [
      "Crisp, tart-sweet apples cut into bite-sized pieces",
      "Fresh crunchy celery stalks",
      "Seedless table grapes",
      "Pickled walnuts",
      "Creamy mayonnaise dressing with lemon zest"
    ],
    "flavorProfile": "Refreshing harmony of crisp fruit sweetness, earthy walnuts, and clean aromatic celery bound in a velvety dressing.",
    "culinaryUsage": "Served as a refreshing appetizer, standalone salad, or side dish for roasted meats and poultry.",
    "fuzeMenuAppearances": [
      "Waldorf salad (apples, celery stalks, grapes, pickled walnuts, mayonnaise dressing)"
    ],
    "staffTips": "Allergen reminder: contains tree nuts (walnuts), celery, and eggs. Outstanding recommendation for guests seeking crisp freshness.",
    "tags": [
      "salad",
      "celery",
      "walnuts",
      "apples",
      "New York"
    ]
  },
  {
    "id": "demi-glace",
    "name": "Demi-Glace",
    "originalTerm": "Demi-glace (France)",
    "category": "culinary_techniques",
    "categoryName": "Cooking Techniques & Foundations",
    "origin": "France (Auguste Escoffier)",
    "shortDescription": "The crown jewel of brown sauces – rich roasted veal stock reduced slowly to a glossy, gelatinous essence.",
    "ingredients": [
      "Roasted veal and beef marrow bones rich in collagen",
      "Mirepoix root vegetables (carrots, celery, onions)",
      "Red wine, tomato paste, bouquet garni (thyme, bay leaf)",
      "Simmered and reduced for over 24 hours"
    ],
    "flavorProfile": "Massive concentration of pure umami, savory roast notes, and mouth-coating gelatinous body.",
    "culinaryUsage": "Foundation for our warm cognac sauce, truffle reduction, and steak gravies.",
    "fuzeMenuAppearances": [
      "Warm cognac sauce",
      "Warm truffle sauce",
      "Base of pan jus for roasted meats and ribs"
    ],
    "staffTips": "A true hallmark of scratch cooking: no flour or artificial thickeners, our sauces achieve body purely through slow reduction and natural collagen.",
    "tags": [
      "stock",
      "reduction",
      "umami",
      "veal",
      "sauces"
    ]
  },
  {
    "id": "kaiserschmarrn",
    "name": "Caramelized Kaiserschmarrn",
    "originalTerm": "Kaiserschmarrn (Austro-Hungarian Empire)",
    "category": "pastry_sweets",
    "categoryName": "Pastry & Sweets",
    "origin": "Austria (favorite dessert of Emperor Franz Joseph I)",
    "shortDescription": "Imperial fluffy shredded pancake soufflé cooked in butter, torn with two forks, and caramelized with sugar in the pan.",
    "ingredients": [
      "Egg yolks and whipped egg white meringue",
      "Flour, whole milk, and butter",
      "Clarified butter for pan searing",
      "Pan-caramelized sugar glaze",
      "Roasted spiced plums and egg liqueur ice cream"
    ],
    "flavorProfile": "Fluffy, cloud-soft interior with a crackling caramelized sugar crust, paired with warm tart plums and cooling rich ice cream.",
    "culinaryUsage": "Prepared to order and served steaming hot straight from the skillet alongside cool ice cream.",
    "fuzeMenuAppearances": [
      "Caramelized Kaiserschmarrn with roasted plums and egg liqueur ice cream"
    ],
    "staffTips": "A great sharing dessert for the table after dinner with an espresso or digestive drink.",
    "tags": [
      "dessert",
      "shredded pancake",
      "Kaiserschmarrn",
      "plums",
      "caramel"
    ]
  },
  {
    "id": "humri-bisque",
    "name": "Creamy Lobster Soup (Bisque)",
    "originalTerm": "Bisque de homard (France)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients",
    "origin": "France (Bay of Biscay)",
    "shortDescription": "One of the most luxurious seafood soups in the world, prepared by roasting crustacean shells, flambéing with cognac, and simmering with wine and cream.",
    "ingredients": [
      "Lobster and shrimp shells and claws",
      "Cognac for flambéing and white wine",
      "Shallots, celery, fennel, and tomato paste",
      "Heavy cream",
      "Sausage and vegetable garnish, baked under puff pastry"
    ],
    "flavorProfile": "Deeply savory, sweet-mineral crustacean richness with smoky cognac nuance and a velvety cream finish.",
    "culinaryUsage": "Served piping hot in a bowl sealed with a domed puff pastry crust that locks in aromatic steam.",
    "fuzeMenuAppearances": [
      "Creamy lobster soup with sausage and vegetables, baked under puff pastry"
    ],
    "staffTips": "Allergen reminder: contains crustaceans (no. 2) and fish. The puff pastry dome presentation is an eye-catching table favorite.",
    "tags": [
      "lobster",
      "soup",
      "bisque",
      "crustaceans",
      "puff pastry"
    ]
  },
  {
    "id": "pak-choi",
    "name": "Pak Choi",
    "originalTerm": "Bok Choy / Pak Choi (China)",
    "category": "world_flavors",
    "categoryName": "World & Asian Flavors",
    "origin": "China / East Asia",
    "shortDescription": "Crisp Chinese cabbage featuring juicy white stems and tender dark green leaves.",
    "ingredients": [
      "100% fresh Brassica rapa subsp. Chinensis"
    ],
    "flavorProfile": "Mild, fresh, pleasantly sweet and crisp with a gentle peppery undertone.",
    "culinaryUsage": "Flash-stir-fried on a wok or grill to keep the stems snappy while wilting the leaves.",
    "fuzeMenuAppearances": [
      "Sides and Asian-inspired daily specials at Fuze"
    ],
    "staffTips": "A wonderful light alternative to traditional cabbage that pairs beautifully with pork belly.",
    "tags": [
      "vegetables",
      "Asia",
      "wok",
      "side"
    ]
  },
  {
    "id": "ponzu",
    "name": "Ponzu Sauce",
    "originalTerm": "Ponzu (Japan)",
    "category": "world_flavors",
    "categoryName": "World & Asian Flavors",
    "origin": "Japan",
    "shortDescription": "Iconic Japanese citrus sauce combining soy sauce, yuzu or sudachi citrus juice, mirin, and dashi stock.",
    "ingredients": [
      "Japanese brewed soy sauce",
      "Citrus juice (Yuzu / Sudachi)",
      "Mirin (sweet rice wine)",
      "Dashi broth brewed from kombu seaweed and bonito flakes"
    ],
    "flavorProfile": "Savory, bright citrus tang, tart and refreshing with deep umami undercurrents.",
    "culinaryUsage": "Dipping sauce for tataki, sashimi, dumplings, grilled meats, and modern vinaigrettes.",
    "fuzeMenuAppearances": [
      "Marinades and dressings for salads and grilled meats"
    ],
    "staffTips": "Instantly refreshes the palate after rich bites of roasted meats.",
    "tags": [
      "sauce",
      "Japan",
      "yuzu",
      "soy sauce",
      "umami"
    ]
  },
  {
    "id": "panko",
    "name": "Panko Breadcrumbs",
    "originalTerm": "Panko (Japan)",
    "category": "world_flavors",
    "categoryName": "World & Asian Flavors",
    "origin": "Japan",
    "shortDescription": "Flaky Japanese breadcrumbs made from crustless white bread baked by electrical resistance.",
    "ingredients": [
      "Wheat bread baked with electrical current without dark crust"
    ],
    "flavorProfile": "Neutral vehicle for savory seasoning that yields incomparable long-lasting crispness.",
    "culinaryUsage": "Larger jagged flakes absorb far less oil than ordinary breadcrumbs, keeping fried foods light and crisp.",
    "fuzeMenuAppearances": [
      "Crispy croquettes and fried specialties"
    ],
    "staffTips": "Panko breadcrumbs stay crisp much longer and feel significantly lighter than ordinary dense breadcrumbs.",
    "tags": [
      "breadcrumbs",
      "crisp",
      "frying",
      "Japan"
    ]
  },
  {
    "id": "kimchi",
    "name": "Kimchi",
    "originalTerm": "Kimchi (Korean Peninsula)",
    "category": "world_flavors",
    "categoryName": "World & Asian Flavors",
    "origin": "Korea (inscribed on UNESCO Intangible Cultural Heritage list)",
    "shortDescription": "Traditional Korean spicy fermented napa cabbage pickle teeming with beneficial probiotics.",
    "ingredients": [
      "Napa cabbage",
      "Korean gochugaru chilli pepper flakes",
      "Garlic and fresh ginger",
      "Scallions and daikon radish",
      "Fermented fish sauce and salted shrimp"
    ],
    "flavorProfile": "Punchy, spicy, tangy, fizzy with fermented depth and aromatic garlic pungency.",
    "culinaryUsage": "Served as a side to rich roasted meats, layered into burgers, or tossed into stir-fries.",
    "fuzeMenuAppearances": [
      "Garnishes and sides for pork belly and grilled meats"
    ],
    "staffTips": "The sparkling acidity and heat of kimchi brilliantly cut through rich pork belly fat.",
    "tags": [
      "fermentation",
      "Korea",
      "chilli",
      "cabbage",
      "probiotics"
    ]
  },
  {
    "id": "edamame",
    "name": "Edamame",
    "originalTerm": "Edamame (Japan / East Asia)",
    "category": "world_flavors",
    "categoryName": "World & Asian Flavors",
    "origin": "Japan and East Asia",
    "shortDescription": "Young green soybeans harvested before ripening while still inside their pods.",
    "ingredients": [
      "100% immature soybeans (Glycine max)",
      "Flaky sea salt"
    ],
    "flavorProfile": "Sweet, nutty, fresh green pea flavor with a firm, satisfying pop.",
    "culinaryUsage": "Boiled briefly in salted water and served whole in pods, or shelled into fresh salads and bowls.",
    "fuzeMenuAppearances": [
      "Salad additions and Asian fusion sides"
    ],
    "staffTips": "Allergen reminder: contains soy (no. 6). The fibrous pods are not swallowed; beans are popped into the mouth using the teeth.",
    "tags": [
      "soy",
      "edamame",
      "Japan",
      "beans",
      "vegetable"
    ]
  },
  {
    "id": "kombucha-pojem",
    "name": "Kombucha",
    "originalTerm": "Kombucha (East Asia)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients & Drinks",
    "origin": "Ancient China / Manchuria (over 2,000 years of history)",
    "shortDescription": "Naturally effervescent fermented tea beverage crafted with a symbiotic culture of bacteria and yeast (SCOBY).",
    "ingredients": [
      "Premium green or black tea",
      "Cane sugar (nutrient for fermenting cultures)",
      "Live SCOBY culture",
      "Natural fruit juices or herbs for secondary fermentation"
    ],
    "flavorProfile": "Gently sparkling, refreshing, sweet-tart with crisp cider-like fermented undertones.",
    "culinaryUsage": "Served chilled as a healthy premium non-alcoholic aperitif or post-meal digestive.",
    "fuzeMenuAppearances": [
      "Kombucha – Magu kombucha and artisanal fermented beverages on our drink menu"
    ],
    "staffTips": "A superb non-alcoholic alternative to beer and cider that promotes digestion after a satisfying meal.",
    "tags": [
      "fermentation",
      "tea",
      "non-alcoholic",
      "kombucha",
      "wellness"
    ]
  },
  {
    "id": "cider-pojem",
    "name": "Cider",
    "originalTerm": "Cidre / Cider (France / England)",
    "category": "gourmet_ingredients",
    "categoryName": "Gourmet Ingredients & Drinks",
    "origin": "Normandy & Brittany (France) / Southwestern England",
    "shortDescription": "Natural sparkling alcoholic beverage made through controlled fermentation of freshly pressed apple juice.",
    "ingredients": [
      "Freshly pressed juice from dedicated cider apple varieties",
      "Wild or cultured cider yeast",
      "Natural carbonation from fermentation"
    ],
    "flavorProfile": "Crisp apple flavor with pleasant acidity, gentle tannins, and refreshing effervescence.",
    "culinaryUsage": "Classic pairing with roast pork, artisanal sausages, and cheeses.",
    "fuzeMenuAppearances": [
      "Opre` Cider and Opre` Sour Cherry (artisanal craft ciders from a family farm)"
    ],
    "staffTips": "Opre' Cider is not an overly sweet industrial soda, but a genuine artisanal fermented apple cider from a family-owned orchard.",
    "tags": [
      "cider",
      "apples",
      "fermentation",
      "Opre",
      "beverage"
    ]
  }
];

export const BEVERAGE_ITEMS_EN: BeverageItem[] = [
  {
    "id": "bile-ryzlink-gotberg",
    "name": "Ryzlink Rýnský Gotberg (Riesling)",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Gotberg Winery",
    "origin": "Czech Republic",
    "region": "Moravia, Mikulov subregion, Popice (Svidrny vineyard)",
    "volume": "0.75l (also by the glass 0.15l)",
    "abv": "12.5% ABV",
    "price": "590 CZK (bottle) / 118 CZK (glass)",
    "rawIngredients": "100% Rhine Riesling grape variety grown on loess and limestone soils of the Pálava Hills.",
    "productionProcess": "Gentle whole-cluster pressing, temperature-controlled stainless steel fermentation, followed by extended maturation on fine lees (sur-lie).",
    "flavorProfile": "Crisp mineral wine with notes of linden blossom, dried apricots, green apple, and subtle petrol minerality backed by vibrant acidity.",
    "foodPairing": "Pairs beautifully with hand-cut beef tartare, trout fillet, veal sausage with morels, and fresh cheeses.",
    "staffNotes": "A classic benchmark of Moravian Riesling from Popice. Bone dry, juicy, exceptionally drinkable with a long mineral finish.",
    "tags": [
      "wine",
      "white wine",
      "Moravia",
      "Gotberg",
      "dry"
    ]
  },
  {
    "id": "bile-pinot-gris-reisten",
    "name": "Pinot Gris Reisten (Maidenburg)",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Reisten Winery",
    "origin": "Czech Republic",
    "region": "Moravia, Mikulov subregion, Pavlov (Maidenburg vineyard)",
    "volume": "0.75l",
    "abv": "13.0% ABV",
    "price": "680 CZK",
    "rawIngredients": "100% Pinot Gris grown on the steep limestone slopes of Pálava Protected Landscape Area.",
    "productionProcess": "Fermented in stainless steel, with a portion aged in large neutral oak casks. Extended lees contact enhancing full mouthfeel.",
    "flavorProfile": "Rich, opulent, and extract-driven wine showing ripe butter pear, candied orange peel, honeycomb, and a gentle bready finish.",
    "foodPairing": "Outstanding with roast pork belly with caramelized yuzu sauce, braised beef, and roasted chicken.",
    "staffNotes": "For guests seeking a rounder, fuller-bodied white with softer acidity and creamy texture.",
    "tags": [
      "wine",
      "white wine",
      "Pinot Gris",
      "Pálava",
      "Reisten"
    ]
  },
  {
    "id": "bile-hibernal-bilkovi",
    "name": "Hibernal Bílkovi",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Bílkovi Winery",
    "origin": "Czech Republic",
    "region": "Moravia, Velké Pavlovice subregion, Velké Bílovice",
    "volume": "0.75l",
    "abv": "12.5% ABV",
    "price": "540 CZK",
    "rawIngredients": "100% Hibernal – modern PIWI fungus-resistant hybrid variety bred from Seibel and Rhine Riesling.",
    "productionProcess": "Reductive stainless steel vinification prioritizing fruit preservation and vibrant aromatic aromatics.",
    "flavorProfile": "Intensely aromatic bouquet of blackcurrant leaf, ripe peach, gooseberry, elderflower, and fresh citrus.",
    "foodPairing": "Excellent with Asian fusion flavors, goat cheese salads, and crispy fried chicken croquettes.",
    "staffNotes": "Ideal recommendation for guests looking for Sauvignon Blanc-like aromatic intensity paired with vibrant freshness.",
    "tags": [
      "wine",
      "white wine",
      "Hibernal",
      "aromatic",
      "Bílkovi"
    ]
  },
  {
    "id": "bile-sauvignon-halkoci",
    "name": "Sauvignon Halkoci",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Halkoci Winery",
    "origin": "Czech Republic",
    "region": "Moravia, Znojmo / Mikulov subregion",
    "volume": "0.75l",
    "abv": "12.5% ABV",
    "price": "580 CZK",
    "rawIngredients": "100% Sauvignon Blanc from mature Moravian vineyard plots.",
    "productionProcess": "Temperature-controlled cool fermentation preserving delicate pyrazine and citrus thiols.",
    "flavorProfile": "Crisp notes of freshly mown grass, gooseberry, nettles, kiwi, and lime zest backed by ringing acidity.",
    "foodPairing": "Perfect with creamy lobster soup, wood-fired fish, and dishes dressed with fresh fines herbes sauce.",
    "staffNotes": "A dry, mouthwatering Sauvignon Blanc with classic cool-climate herbal precision.",
    "tags": [
      "wine",
      "white wine",
      "Sauvignon",
      "crisp",
      "Moravia"
    ]
  },
  {
    "id": "bile-ryzlink-vlassky-sukal",
    "name": "Welschriesling Šukal (Ryzlink Vlašský)",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Milan Šukal",
    "origin": "Czech Republic",
    "region": "Moravia, Slovácko subregion, Nový Poddvorov",
    "volume": "0.75l",
    "abv": "13.0% ABV",
    "price": "650 CZK",
    "rawIngredients": "100% Welschriesling (Ryzlink vlašský) from low-yield family vineyards.",
    "productionProcess": "Artisanal low-intervention vinification, spontaneous yeast fermentation, prolonged maturation on lees.",
    "flavorProfile": "Characteristic mineral salinity, dried meadow herbs, crisp green apples, dried raisins, and roasted walnuts.",
    "foodPairing": "Superb with roast pork knuckle, Duroc schnitzel, and hearty Central European fare.",
    "staffNotes": "Milan Šukal is among Moravia's most celebrated winemakers – his Welschriesling delivers incredible depth and salty minerality.",
    "tags": [
      "wine",
      "white wine",
      "Welschriesling",
      "Milan Šukal",
      "Moravia"
    ]
  },
  {
    "id": "bile-palava-michlovsky",
    "name": "Pálava Vinselekt Michlovský",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Vinselekt Michlovský",
    "origin": "Czech Republic",
    "region": "Moravia, Mikulov subregion, Perná",
    "volume": "0.75l",
    "abv": "13.0% ABV",
    "price": "620 CZK",
    "rawIngredients": "100% Pálava grape (Czech indigenous cross of Gewürztraminer and Müller Thurgau bred by Ing. Josef Veverka).",
    "productionProcess": "Cryomaceration and precise controlled fermentation directed by renowned enologist Doc. Miloš Michlovský.",
    "flavorProfile": "Intoxicating floral bouquet of tea rose, blooming jasmine, mandarin peel, lychee fruit, and sweet vanilla spice.",
    "foodPairing": "Unrivalled match for duck foie gras pâté, spicy Asian dishes, and semi-soft cheeses.",
    "staffNotes": "The most famous indigenous Moravian variety made by legendary winemaker Miloš Michlovský. Lush body and lingering aromatic finish.",
    "tags": [
      "wine",
      "white wine",
      "Pálava",
      "Michlovský",
      "aromatic"
    ]
  },
  {
    "id": "bile-riesling-eva-fricke",
    "name": "Riesling Rheingau Eva Fricke",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Eva Fricke",
    "origin": "Germany",
    "region": "Rheingau, Lorch / Kiedrich (steep slate slopes)",
    "volume": "0.75l",
    "abv": "12.0% ABV",
    "price": "1,190 CZK",
    "rawIngredients": "100% Riesling from ancient, biodynamically farmed bush vines rooted in pure blue and grey slate.",
    "productionProcess": "Spontaneous native yeast fermentation, slow maturation without additives or chemical fining.",
    "flavorProfile": "Absolute purity, crystalline salty minerality, green citrus, quince, white peach, and laser-sharp precision.",
    "foodPairing": "World-class with lobster bisque, oysters, pan-roasted trout, and dishes featuring yuzu glaze.",
    "staffNotes": "Eva Fricke is an international icon in Rheingau (regular 100-point ratings from Robert Parker). A true jewel on the Fuze wine list.",
    "tags": [
      "wine",
      "white wine",
      "Riesling",
      "Rheingau",
      "Germany",
      "biodynamic"
    ]
  },
  {
    "id": "bile-chardonnay-knotty-vines",
    "name": "Chardonnay Knotty Vines",
    "category": "wine_white",
    "categoryName": "White Wines",
    "producer": "Knotty Vines",
    "origin": "USA",
    "region": "California (Central Coast / Lodi)",
    "volume": "0.75l",
    "abv": "13.5% ABV",
    "price": "690 CZK",
    "rawIngredients": "100% Chardonnay grapes from sun-drenched Californian valley vineyards.",
    "productionProcess": "Partial malolactic fermentation and aging in toasted French and American oak barrels.",
    "flavorProfile": "Rich, creamy, buttery Chardonnay layered with baked yellow apples, pineapple, crème brûlée, and toasted brioche.",
    "foodPairing": "Flawless with roasted pork belly, bacon cheddar burgers, and creamy pasta dishes.",
    "staffNotes": "Quintessential California Chardonnay style – luscious, round, and buttery with an elegant oak kiss.",
    "tags": [
      "wine",
      "white wine",
      "Chardonnay",
      "California",
      "USA",
      "oak"
    ]
  },
  {
    "id": "cervene-pinot-noir-rouci-kraus",
    "name": "Pinot Noir Roučí Kraus",
    "category": "wine_red",
    "categoryName": "Red Wines",
    "producer": "Kraus Winery",
    "origin": "Czech Republic",
    "region": "Bohemia, Mělník subregion, Klamovka vineyard",
    "volume": "0.75l",
    "abv": "13.0% ABV",
    "price": "750 CZK",
    "rawIngredients": "100% Pinot Noir (Roučí clone) cultivated on limestone and marl terraces above the Elbe River.",
    "productionProcess": "Traditional open-vat maceration followed by 12 months aging in French barrique oak barrels.",
    "flavorProfile": "Translucent ruby with brick hues. Aromas of wild strawberries, sour cherries, cranberries, and forest floor with a gentle cedar smoke kiss.",
    "foodPairing": "Beef Wellington, duck breast, foie gras terrine, and veal sausage with morels.",
    "staffNotes": "Professor Kraus was a legend of Czech viticulture. This Bohemian Pinot Noir proves that northern Czech terroirs produce world-class Burgundian elegance.",
    "tags": [
      "wine",
      "red wine",
      "Pinot Noir",
      "Mělník",
      "Bohemia",
      "barrique"
    ]
  },
  {
    "id": "cervene-dornfelder-bilkovi",
    "name": "Dornfelder Bílkovi",
    "category": "wine_red",
    "categoryName": "Red Wines",
    "producer": "Bílkovi Winery",
    "origin": "Czech Republic",
    "region": "Moravia, Velké Pavlovice subregion, Velké Bílovice",
    "volume": "0.75l",
    "abv": "12.5% ABV",
    "price": "520 CZK",
    "rawIngredients": "100% Dornfelder.",
    "productionProcess": "Maceration on skins with gentle pneumatic pressing preserving fruit-forward, approachable tannins.",
    "flavorProfile": "Deep inky garnet hue. Expressive aromas of ripe blackberries, damson plums, blueberries, and forest fruit with velvety soft tannins.",
    "foodPairing": "Great with our beef burger, slow-roasted pork ribs, and charcuterie.",
    "staffNotes": "An approachable, fruit-driven red wine with mild tannins and mesmerizing deep purple color.",
    "tags": [
      "wine",
      "red wine",
      "Dornfelder",
      "Moravia",
      "Bílkovi"
    ]
  },
  {
    "id": "cervene-cuvee-red-kolby",
    "name": "Cuvée Red Kolby",
    "category": "wine_red",
    "categoryName": "Red Wines",
    "producer": "Kolby Winery",
    "origin": "Czech Republic",
    "region": "Moravia, Mikulov subregion, Pouzdřany (Kolby vineyard)",
    "volume": "0.75l",
    "abv": "13.5% ABV",
    "price": "790 CZK",
    "rawIngredients": "Bordeaux blend of Cabernet Sauvignon (60%) and Merlot (40%) from the sun-drenched Pouzdřany steppe slopes.",
    "productionProcess": "Aged 14 months in premium French oak barriques (30% new oak).",
    "flavorProfile": "Full-bodied Bordeaux profile. Blackcurrants, blackberries, dark chocolate, pipe tobacco, leather, and cedar wood.",
    "foodPairing": "The perfect companion for US Prime beef rump cap, rib eye, and wood-fired pastrami.",
    "staffNotes": "Superb Moravian interpretation of a grand Bordeaux red. Structured tannins and remarkable aging potential.",
    "tags": [
      "wine",
      "red wine",
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
    "categoryName": "Red Wines",
    "producer": "Lapis Luna Wines",
    "origin": "USA",
    "region": "California, Lodi",
    "volume": "0.75l",
    "abv": "14.0% ABV",
    "price": "790 CZK",
    "rawIngredients": "Cabernet Sauvignon blended with touches of Merlot and Sangiovese from select California vineyards.",
    "productionProcess": "Aged 10 months in French and American oak barrels.",
    "flavorProfile": "Deep purple in the glass. Explosive aromas of ripe blackberries, black cherries, sweet vanilla, roasted espresso beans, and warm baking spices.",
    "foodPairing": "US Prime rib eye, grilled pork belly, and bacon cheeseburger.",
    "staffNotes": "For guests seeking a bold, opulent California red with warm fruit intensity and supple tannins.",
    "tags": [
      "wine",
      "red wine",
      "Cabernet Sauvignon",
      "California",
      "USA"
    ]
  },
  {
    "id": "cervene-zinfandel-hendry",
    "name": "Zinfandel Hendry",
    "category": "wine_red",
    "categoryName": "Red Wines",
    "producer": "Hendry Ranch",
    "origin": "USA",
    "region": "California, Napa Valley",
    "volume": "0.75l",
    "abv": "14.8% ABV",
    "price": "1,450 CZK",
    "rawIngredients": "100% Zinfandel from old-vine blocks on the historic Hendry family ranch at the foot of the Mayacamas Mountains in Napa.",
    "productionProcess": "Aged 15 months in French oak barrels. Small-lot artisanal production from dry-farmed heritage vineyards.",
    "flavorProfile": "Concentrated wild raspberry jam, blueberries, cracked black pepper, cloves, dark cocoa, and sweet liquorice with an expansive warming finish.",
    "foodPairing": "The ultimate pairing for beer-braised pork ribs with apple BBQ glaze, US Prime burgers, and pastrami.",
    "staffNotes": "Cult Napa Valley Zinfandel crafted by George Hendry. A benchmark of complex, balanced, non-jammy California Zinfandel.",
    "tags": [
      "wine",
      "red wine",
      "Zinfandel",
      "Napa Valley",
      "California"
    ]
  },
  {
    "id": "bubliny-charmat-palava",
    "name": "Charmat de Vinselekt Pálava",
    "category": "wine_sparkling",
    "categoryName": "Sparkling Wines & Crémant",
    "producer": "Vinselekt Michlovský",
    "origin": "Czech Republic",
    "region": "Moravia, Mikulov subregion",
    "volume": "0.75l (also by the glass 0.1l)",
    "abv": "12.0% ABV",
    "price": "590 CZK (bottle) / 89 CZK (glass)",
    "rawIngredients": "100% Pálava grapes.",
    "productionProcess": "Charmat method – secondary tank fermentation preserving vibrant primary floral and fruit aromas.",
    "flavorProfile": "Vibrant perlage, delicate aromas of blooming roses, tropical fruit, and citrus with a crisp, dry palate.",
    "foodPairing": "The perfect welcome toast and aperitif before beef tartare and cold starters.",
    "staffNotes": "Our signature house sparkling wine poured by the glass – elegant, fragrant, and refreshing bubbles from Moravia.",
    "tags": [
      "bubbles",
      "sparkling wine",
      "Pálava",
      "aperitif",
      "Michlovský"
    ]
  },
  {
    "id": "bubliny-cremant-vinselekt",
    "name": "Crémant de Vinselekt (Pinot Noir & Chardonnay)",
    "category": "wine_sparkling",
    "categoryName": "Sparkling Wines & Crémant",
    "producer": "Vinselekt Michlovský",
    "origin": "Czech Republic",
    "region": "Moravia",
    "volume": "0.75l",
    "abv": "12.5% ABV",
    "price": "890 CZK",
    "rawIngredients": "Classic Champagne cuvée blend: Chardonnay and Pinot Noir.",
    "productionProcess": "Méthode traditionnelle – bottle-fermented and aged on fine lees in bottle for over 24 months.",
    "flavorProfile": "Tiny persistent bubbles, aromas of toasted brioche, roasted hazelnuts, crisp green apples, and chalky mineral finish.",
    "foodPairing": "Oysters, lobster soup, duck foie gras pâté, and crispy fried chicken wings.",
    "staffNotes": "Moravian crémant crafted with the exact same labor-intensive traditional bottle method as authentic Champagne.",
    "tags": [
      "crémant",
      "traditional method",
      "Chardonnay",
      "Pinot Noir",
      "bubbles"
    ]
  },
  {
    "id": "bubliny-angels-cowboys",
    "name": "Angels & Cowboys Brut Rosé Sparkling",
    "category": "wine_sparkling",
    "categoryName": "Sparkling Wines & Crémant",
    "producer": "Angels & Cowboys",
    "origin": "USA",
    "region": "California, Sonoma County",
    "volume": "0.75l",
    "abv": "12.0% ABV",
    "price": "1,150 CZK",
    "rawIngredients": "Pinot Noir and Chardonnay blend from cool coastal Sonoma vineyard sites.",
    "productionProcess": "Méthode traditionnelle – bottle-fermented and matured on lees for a minimum of 18 months.",
    "flavorProfile": "Pale salmon pink. Notes of wild strawberries, redcurrants, pomegranate, and fresh-baked brioche.",
    "foodPairing": "Magnificent throughout the entire meal from beef tartare to pork belly and hop-cone chocolate desserts.",
    "staffNotes": "Stylish Sonoma sparkling rosé combining eye-catching design with brilliant crisp freshness.",
    "tags": [
      "bubbles",
      "rosé",
      "sparkling",
      "California",
      "USA"
    ]
  },
  {
    "id": "rum-havana-club-3",
    "name": "Havana Club Añejo 3 Años",
    "category": "rum",
    "categoryName": "Rums 0.03l",
    "producer": "Havana Club (Corporación Cuba Ron)",
    "origin": "Cuba",
    "region": "Santa Cruz del Norte / San José de Las Lajas",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "66 CZK",
    "rawIngredients": "Cuban sugar cane molasses and mountain spring water.",
    "productionProcess": "Continuous column distillation, aged for a minimum of 3 years in white American oak bourbon casks under Maestros del Ron Cubano, then charcoal filtered.",
    "flavorProfile": "Pale straw hue. Fresh aromas of crushed sugar cane, gentle oak, citrus zest, vanilla, and subtle smoke.",
    "foodPairing": "The authentic foundation for Cuban classic cocktails: Mojito and Daiquiri.",
    "staffNotes": "Genuine Cuban 3-year aged white rum – unlike cheap unaged white rums, this rum actually rests in oak casks for three full years to build real depth.",
    "tags": [
      "rum",
      "Cuba",
      "white rum",
      "sugar cane",
      "mojito"
    ]
  },
  {
    "id": "rum-el-dorado-12y",
    "name": "El Dorado 12y",
    "category": "rum",
    "categoryName": "Rums 0.03l",
    "producer": "Demerara Distillers Ltd.",
    "origin": "Guyana",
    "region": "Demerara River Valley",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "98 CZK",
    "rawIngredients": "100% Demerara sugar cane molasses from the lush Demerara river basin.",
    "productionProcess": "Distilled in historic 250-year-old wooden pot stills (Enmore and Port Mourant). Aged at least 12 years in oak bourbon barrels in Guyana's tropical climate.",
    "flavorProfile": "Deep glowing amber. Dark molasses, honey, dried prunes, golden raisins, baked banana, cinnamon, and rich pipe tobacco.",
    "foodPairing": "Fabulous alongside BBQ pork ribs and Valrhona chocolate desserts.",
    "staffNotes": "The age statement 12 signifies the youngest rum in the blend (unlike solera systems). The antique wooden stills impart legendary richness.",
    "tags": [
      "rum",
      "Guyana",
      "Demerara",
      "12 years",
      "caramel"
    ]
  },
  {
    "id": "rum-mount-gay-xo",
    "name": "Mount Gay XO Triple Cask",
    "category": "rum",
    "categoryName": "Rums 0.03l",
    "producer": "Mount Gay Distilleries (established 1703)",
    "origin": "Barbados",
    "region": "St. Lucy",
    "volume": "0.03l",
    "abv": "43.0% ABV",
    "price": "148 CZK",
    "rawIngredients": "Barbadian sugar cane molasses and coral-filtered island water.",
    "productionProcess": "Traditional double copper pot still and column distillation. Blend of rums aged 5 to 17 years in three distinct casks: American whiskey, bourbon, and cognac barrels.",
    "flavorProfile": "Exceptionally balanced dry rum. Salted vanilla, ripe figs, candied orange peel, dark cocoa, toasted almonds, and warm oak spice.",
    "foodPairing": "Splendid with US Prime rib eye and as a refined post-dinner sipping spirit.",
    "staffNotes": "Mount Gay is the world's oldest documented commercial rum distillery (est. 1703). XO is not artificially sweetened – it is pure, bone-dry artisanal rum.",
    "tags": [
      "rum",
      "Barbados",
      "Mount Gay",
      "dry rum",
      "oldest distillery"
    ]
  },
  {
    "id": "rum-abuelo-7y",
    "name": "Abuelo Añejo 7 Años",
    "category": "rum",
    "categoryName": "Rums 0.03l",
    "producer": "Varela Hermanos",
    "origin": "Panama",
    "region": "Pesé, Herrera Valley",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "82 CZK",
    "rawIngredients": "Virgin cane honey and estate-grown Panamanian sugar cane molasses.",
    "productionProcess": "Slow fermentation using proprietary yeast strains. Aged 7 years in select white American oak bourbon casks.",
    "flavorProfile": "Golden amber. Gentle notes of caramel, dried dates, toasted nuts, coconut flakes, and mild baking spices.",
    "foodPairing": "Excellent with burgers, raclette sandwiches, and roasted seasonal vegetables.",
    "staffNotes": "A very approachable, silky Panamanian rum offering fantastic character and smoothness.",
    "tags": [
      "rum",
      "Panama",
      "Abuelo",
      "smooth",
      "caramel"
    ]
  },
  {
    "id": "rum-eminente-reserva-7y",
    "name": "Eminente Reserva 7y",
    "category": "rum",
    "categoryName": "Rums 0.03l",
    "producer": "Moët Hennessy & Cuba Ron (Master Ronero César Martí)",
    "origin": "Cuba",
    "region": "Villa Clara (Central Cuba)",
    "volume": "0.03l",
    "abv": "41.3% ABV",
    "price": "145 CZK",
    "rawIngredients": "High-grade Cuban sugar cane molasses.",
    "productionProcess": "Unusually high proportion of rich aguardiente (70%) – heavy aromatic pot-still spirits. Aged at least 7 years in white oak whisky casks.",
    "flavorProfile": "Complex, full-bodied. Freshly roasted coffee beans, dark cocoa nibs, ginger root, cured tobacco, prunes, and vanilla bean.",
    "foodPairing": "Magnificent with Valrhona chocolate desserts and a double espresso.",
    "staffNotes": "The textured glass bottle mimics Cuban crocodile skin (Cuba is affectionately called 'Isla del Cocodrilo'). The 70% aguardiente content yields far more depth than typical light Cuban rums.",
    "tags": [
      "rum",
      "Cuba",
      "Eminente",
      "coffee",
      "chocolate",
      "crocodile"
    ]
  },
  {
    "id": "rum-diplomatico",
    "name": "Diplomático Reserva Exclusiva",
    "category": "rum",
    "categoryName": "Rums 0.03l",
    "producer": "Destilerías Unidas S.A. (DUSA)",
    "origin": "Venezuela",
    "region": "La Miel, foothills of the Andes",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "115 CZK",
    "rawIngredients": "Virgin sugar cane honey and select molasses.",
    "productionProcess": "Copper pot still distillation (80%) blended with column spirits. Aged up to 12 years in small American white oak bourbon casks.",
    "flavorProfile": "Velvety sweet and opulent. Creamy toffee, dark chocolate truffles, candied orange peel, maple syrup, and sweet cinnamon.",
    "foodPairing": "Caramelized Kaiserschmarrn, roasted spiced plums, and malt desserts.",
    "staffNotes": "One of the world's favorite premium sipping rums. Ideal for guests who love smooth, dessert-like richness.",
    "tags": [
      "rum",
      "Venezuela",
      "Diplomatico",
      "sweet rum",
      "vanilla"
    ]
  },
  {
    "id": "rum-zacapa-23y",
    "name": "Ron Zacapa Centenario 23",
    "category": "rum",
    "categoryName": "Rums 0.03l",
    "producer": "Industrias Licoreras de Guatemala (Master Blender Lorena Vásquez)",
    "origin": "Guatemala",
    "region": "Quetzaltenango ('House Above the Clouds', 2,300 m above sea level)",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "155 CZK",
    "rawIngredients": "Virgin sugar cane honey from first-press cane juice (not byproduct molasses).",
    "productionProcess": "Matured in the cool mountain highlands at 2,300 meters via the Sistema Solera process in bourbon, Pedro Ximénez sherry, and French cognac casks.",
    "flavorProfile": "Deep dark mahogany. Noble aromas of dried figs, plump raisins, dark honey, cigar leaf, roasted coffee, nutmeg, and polished oak.",
    "foodPairing": "Superb with US Prime beef steak, chocolate soil dessert, and aged artisan cheeses.",
    "staffNotes": "Royal highland rum aged 'above the clouds'. The cold altitude slows evaporation, yielding incomparable depth and silky softness.",
    "tags": [
      "rum",
      "Guatemala",
      "Zacapa",
      "Solera",
      "virgin honey"
    ]
  },
  {
    "id": "tequila-tres-alegres-compadres",
    "name": "Tres Alegres Compadres Blanco",
    "category": "tequila",
    "categoryName": "Tequilas 0.03l",
    "producer": "Tres Alegres Compadres",
    "origin": "Mexico",
    "region": "Jalisco",
    "volume": "0.03l",
    "abv": "38.0% ABV",
    "price": "75 CZK",
    "rawIngredients": "100% blue agave (Agave tequilana Weber azul).",
    "productionProcess": "Traditional brick oven roasting of ripe agave hearts (piñas), crushing, wild fermentation, and double distillation in copper pot stills. Bottled fresh unaged.",
    "flavorProfile": "Crystal clear. Crisp herbal notes of raw and cooked agave, crushed white pepper, lime peel, and green apple freshness.",
    "foodPairing": "The authentic base for Paloma and Margarita cocktails; great with blistered Padrón peppers and chimichurri.",
    "staffNotes": "Pure 100% Blue Weber agave blanco tequila – free from added sugars or additives (no mixtos). A pristine expression of real agave.",
    "tags": [
      "tequila",
      "blanco",
      "Mexico",
      "100% agave",
      "Jalisco"
    ]
  },
  {
    "id": "tequila-herradura-reposado",
    "name": "Herradura Reposado",
    "category": "tequila",
    "categoryName": "Tequilas 0.03l",
    "producer": "Casa Herradura (established 1870)",
    "origin": "Mexico",
    "region": "Amatitán, Jalisco",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "115 CZK",
    "rawIngredients": "100% Blue Weber agave harvested after 7 to 10 years of maturity.",
    "productionProcess": "Clay brick ovens, fermented with wild orchard yeasts native to the distillery grounds. Aged 11 months in American white oak barrels (law requires only 2 months).",
    "flavorProfile": "Golden amber. Cooked agave sweetness, rich vanilla, butter caramel, cinnamon, and dried apricots with a warm toasted oak finish.",
    "foodPairing": "Outstanding with grilled pork belly in yuzu glaze and beef tartare.",
    "staffNotes": "Casa Herradura invented the Reposado tequila category in 1974. Resting 11 months gives it richness approaching añejo tequilas.",
    "tags": [
      "tequila",
      "reposado",
      "Herradura",
      "oak barrels",
      "Mexico"
    ]
  },
  {
    "id": "tequila-corralejo-reposado",
    "name": "Tequila Corralejo Reposado",
    "category": "tequila",
    "categoryName": "Tequilas 0.03l",
    "producer": "Hacienda Corralejo (established 1755)",
    "origin": "Mexico",
    "region": "Pénjamo, Guanajuato (historic certified DO outside Jalisco)",
    "volume": "0.03l",
    "abv": "38.0% ABV",
    "price": "98 CZK",
    "rawIngredients": "100% Agave Azul Weber.",
    "productionProcess": "Slow roasting in stone ovens, double distillation in copper pot stills using the Charentais method (used in Cognac production). Matured 4 months across French, American, and Mexican oak casks.",
    "flavorProfile": "Pale golden straw presented in an iconic tall blue bottle. Notes of roasted agave, white pepper, vanilla bean, cardamom, and fresh wood.",
    "foodPairing": "Excellent with pastrami, wood-roasted chicken, and spicy mayonnaise.",
    "staffNotes": "The slender cobalt blue bottle is instantly recognizable. The French Charentais distillation method produces remarkable smoothness.",
    "tags": [
      "tequila",
      "reposado",
      "Corralejo",
      "blue bottle",
      "Mexico"
    ]
  },
  {
    "id": "tequila-cofradia-rose-catrina",
    "name": "La Cofradia Reposado Rosé „ed. Catrina”",
    "category": "tequila",
    "categoryName": "Tequilas 0.03l",
    "producer": "Tequila La Cofradía",
    "origin": "Mexico",
    "region": "Tequila, Jalisco",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "145 CZK",
    "rawIngredients": "100% blue agave from the Jalisco highlands.",
    "productionProcess": "Traditional cooking and distillation. Specially matured in French oak casks that previously held fine Cabernet Sauvignon red wine, imparting a delicate pink blush and red berry fruitiness.",
    "flavorProfile": "Gentle rosé pink tint. Fragrant cooked agave, fresh strawberries, redcurrants, vanilla, and gentle oak tannins.",
    "foodPairing": "Superb pairing with duck foie gras pâté and cherry desserts.",
    "staffNotes": "A unique pink reposado tequila presented in a hand-painted ceramic Catrina skull bottle celebrating Día de los Muertos.",
    "tags": [
      "tequila",
      "reposado",
      "Catrina",
      "rosé",
      "wine cask",
      "ceramic"
    ]
  },
  {
    "id": "tequila-cofradia-black-catrina",
    "name": "La Cofradia Black „ed. Catrina”",
    "category": "tequila",
    "categoryName": "Tequilas 0.03l",
    "producer": "Tequila La Cofradía",
    "origin": "Mexico",
    "region": "Tequila, Jalisco",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "165 CZK",
    "rawIngredients": "100% blue agave.",
    "productionProcess": "Traditional baking and distillation, followed by extended aging in deeply charred American white oak casks.",
    "flavorProfile": "Dark amber. Complex notes of wood smoke, roasted agave, dark chocolate, espresso beans, oak spice, and dried fruit.",
    "foodPairing": "US Prime beef steaks from the grill and braised pork ribs.",
    "staffNotes": "Bottled in an iconic black ceramic Catrina skull. An impressive sipping experience both in presentation and palate depth.",
    "tags": [
      "tequila",
      "añejo",
      "Catrina",
      "black edition",
      "ceramic skull"
    ]
  },
  {
    "id": "whisky-goldcock-blended",
    "name": "Goldcock Blended Whisky",
    "category": "whisky",
    "categoryName": "Whisky, Whiskey, Bourbon 0.03l",
    "producer": "Rudolf Jelínek (originally Těšetice u Olomouce)",
    "origin": "Czech Republic",
    "region": "Moravia, Vizovice / Haná plain",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "68 CZK",
    "rawIngredients": "100% Moravian barley malt and grains from the fertile Haná region, Vizovice spring water.",
    "productionProcess": "Distilled on Arnold Holstein pot stills, aged in virgin toasted casks coopered from local Czech winter oak.",
    "flavorProfile": "Golden color. Malty, sweet vanilla, crisp green apple, orchard honey, rolled oats, and toasted oak.",
    "foodPairing": "Great with glazed pork ribs and veal sausage with morels.",
    "staffNotes": "Czech cult whisky with roots dating back to 1973. Aged exclusively in native Czech oak casks harvested in Moravian forests.",
    "tags": [
      "whisky",
      "Czech whisky",
      "Goldcock",
      "malt",
      "Czech oak"
    ]
  },
  {
    "id": "whisky-glenfiddich-15y",
    "name": "Glenfiddich 15y Solera Reserve",
    "category": "whisky",
    "categoryName": "Whisky, Whiskey, Bourbon 0.03l",
    "producer": "William Grant & Sons (Glenfiddich Distillery)",
    "origin": "Scotland",
    "region": "Speyside (Dufftown)",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "145 CZK",
    "rawIngredients": "100% malted barley and Robbie Dhu spring water.",
    "productionProcess": "Speyside Single Malt matured in three woods: Spanish Oloroso sherry, American bourbon, and virgin oak. Married in an immense handcrafted Oregon pine Solera vat that has remained half-full continuously since 1998.",
    "flavorProfile": "Immensely silky and complex. Sherry sweetness, marzipan, dark raisins, cinnamon, ginger, baked apple, and mellow oak.",
    "foodPairing": "Beef Wellington, duck foie gras, and caramelized Kaiserschmarrn.",
    "staffNotes": "Pioneering Speyside single malt. The Solera vat system ensures magnificent consistency, silkiness, and aromatic depth.",
    "tags": [
      "whisky",
      "single malt",
      "Scotland",
      "Speyside",
      "Solera",
      "Glenfiddich"
    ]
  },
  {
    "id": "whisky-talisker-10y",
    "name": "Talisker 10y",
    "category": "whisky",
    "categoryName": "Whisky, Whiskey, Bourbon 0.03l",
    "producer": "Talisker Distillery (established 1830)",
    "origin": "Scotland",
    "region": "Isle of Skye (Carbost)",
    "volume": "0.03l",
    "abv": "45.8% ABV",
    "price": "148 CZK",
    "rawIngredients": "Heavily peated Scottish malted barley and peaty water from Cnoc nan Speireag.",
    "productionProcess": "Double distilled in unique swan-neck copper pot stills with U-shaped worm tubs, aged 10 years in American oak casks right on the windswept Atlantic shores of Skye.",
    "flavorProfile": "Powerful maritime peat smoke, sea salt spray, sweet malt, dried citrus peel, and the iconic explosive black pepper finish ('peppery catch').",
    "foodPairing": "Brilliant with lobster soup, smoked pork belly, and hand-cut beef tartare.",
    "staffNotes": "The oldest distillery on the Isle of Skye. Author Robert Louis Stevenson hailed it as 'the king o' drinks'.",
    "tags": [
      "whisky",
      "single malt",
      "smoky",
      "Isle of Skye",
      "Talisker",
      "peat"
    ]
  },
  {
    "id": "whisky-monkey-shoulder",
    "name": "Monkey Shoulder Blended Malt",
    "category": "whisky",
    "categoryName": "Whisky, Whiskey, Bourbon 0.03l",
    "producer": "William Grant & Sons",
    "origin": "Scotland",
    "region": "Speyside",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "98 CZK",
    "rawIngredients": "100% malted barley (Blended Malt – composed strictly of single malts with zero grain neutral spirit).",
    "productionProcess": "Expertly blended from three premier Speyside distilleries (Balvenie, Glenfiddich, and Kininvie). Aged in first-fill bourbon casks.",
    "flavorProfile": "Supremely creamy and accessible. Vanilla custard, golden honey, poached pears, orange marmalade, and delicate nutmeg oak spice.",
    "foodPairing": "Delicious enjoyed neat on ice or in classic whisky cocktails (Old Fashioned, Whisky Sour).",
    "staffNotes": "Named in honor of maltmen who suffered temporary strain from hand-turning barley, affectionately known as 'monkey shoulder'.",
    "tags": [
      "whisky",
      "blended malt",
      "Speyside",
      "vanilla",
      "smooth"
    ]
  },
  {
    "id": "whiskey-jameson",
    "name": "Jameson Irish Whiskey",
    "category": "whisky",
    "categoryName": "Whisky, Whiskey, Bourbon 0.03l",
    "producer": "Irish Distillers (Midleton Distillery)",
    "origin": "Ireland",
    "region": "County Cork, Midleton",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "75 CZK",
    "rawIngredients": "Malted and unmalted barley dried in closed kilns free of peat smoke, pure Irish water.",
    "productionProcess": "Triple distilled in copper pot stills and continuous columns, aged at least 4 years in bourbon and Oloroso sherry casks.",
    "flavorProfile": "Exceptionally gentle and balanced. Crisp green apples, vanilla, roasted hazelnuts, and delicate floral notes with a silky non-smoky finish.",
    "foodPairing": "Pairs easily with burgers, roasted chicken, and pork knuckle.",
    "staffNotes": "The world's bestselling Irish whiskey. Triple distillation and zero peat smoke make it remarkably smooth and approachable.",
    "tags": [
      "whiskey",
      "Ireland",
      "Jameson",
      "triple distilled",
      "smooth"
    ]
  },
  {
    "id": "whiskey-jack-daniels",
    "name": "Jack Daniel's Old No. 7",
    "category": "whisky",
    "categoryName": "Whisky, Whiskey, Bourbon 0.03l",
    "producer": "Jack Daniel Distillery (established 1866)",
    "origin": "USA",
    "region": "Lynchburg, Tennessee",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "82 CZK",
    "rawIngredients": "Mash bill: 80% corn, 12% malted barley, 8% rye. Iron-free limestone water from Cave Spring Hollow.",
    "productionProcess": "Tennessee Whiskey – slowly mellowed drop by drop through 10 feet of sugar maple charcoal before barrel entry (Lincoln County Process), then matured in new charred American white oak casks.",
    "flavorProfile": "Sweet, smoky, full-bodied. Brown sugar, vanilla, roasted bananas, maple syrup, and toasted oak.",
    "foodPairing": "Classic with beer-braised pork ribs in apple BBQ sauce and beef burgers.",
    "staffNotes": "Not an ordinary bourbon: maple charcoal mellowing imparts Jack Daniel's signature smooth, sweet maple character.",
    "tags": [
      "whiskey",
      "Tennessee",
      "Jack Daniels",
      "charcoal mellowed",
      "USA"
    ]
  },
  {
    "id": "brandy-metaxa-5",
    "name": "Metaxa ***** (5 Stars)",
    "category": "brandy_cognac",
    "categoryName": "Brandy & Cognac 0.03l",
    "producer": "House of Metaxa (Spyros Metaxa, est. 1888)",
    "origin": "Greece",
    "region": "Kifissia / Aegean Islands (Samos & Lemnos)",
    "volume": "0.03l",
    "abv": "38.0% ABV",
    "price": "68 CZK",
    "rawIngredients": "Aged wine distillates, sun-drenched Muscat wines from Aegean islands, secret Mediterranean herbal extracts, and May rose petals.",
    "productionProcess": "Wine spirits age at least 5 years in French Limousin oak barrels, then married with sweet Muscat wine and botanicals.",
    "flavorProfile": "Warm amber hue. Honeyed apricot, orange blossom, rosewater, sweet raisins, vanilla, and gentle oak spice.",
    "foodPairing": "Pleasant alongside espresso, sweet pastries, and caramelized Kaiserschmarrn.",
    "staffNotes": "A singular Greek spirit – fine aged wine brandy softened with aromatic island Muscat wine and rose petals.",
    "tags": [
      "brandy",
      "Greece",
      "Metaxa",
      "Muscat wine",
      "herbs"
    ]
  },
  {
    "id": "cognac-remy-martin-1738",
    "name": "Rémy Martin 1738 Accord Royal",
    "category": "brandy_cognac",
    "categoryName": "Brandy & Cognac 0.03l",
    "producer": "Rémy Martin (established 1724)",
    "origin": "France",
    "region": "Cognac, Fine Champagne (Grande & Petite Champagne)",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "175 CZK",
    "rawIngredients": "Ugni Blanc grapes grown in the premier limestone terroirs of Grande and Petite Champagne.",
    "productionProcess": "Double distilled on lees in small Charentais copper pot stills. Aged in heavily toasted French Limousin oak casks.",
    "flavorProfile": "Generous and opulent. Plum marmalade, dried figs, sweet liquorice, dark chocolate, cinnamon, and toffee with an endless finish.",
    "foodPairing": "Beef Wellington, duck foie gras, and luxury Valrhona Dulcey chocolate desserts.",
    "staffNotes": "In 1738, King Louis XV of France granted Rémy Martin the royal privilege to plant new vines for exceptional quality. This cognac proudly bears that historic date.",
    "tags": [
      "cognac",
      "Fine Champagne",
      "France",
      "Remy Martin",
      "royal accord"
    ]
  },
  {
    "id": "palenka-fuzovice",
    "name": "Fuzovice (Beer Eau-de-Vie)",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "FUZE Brewery & Restaurant in collaboration with an artisanal craft distillery",
    "origin": "Czech Republic",
    "region": "Prague",
    "volume": "0.03l",
    "abv": "42.0% ABV",
    "price": "85 CZK",
    "rawIngredients": "Freshly brewed unpasteurized, unfiltered TransFUZE 12 pale lager from our in-house brewery.",
    "productionProcess": "Slow fractional pot-still distillation of our house-brewed lager, capturing the delicate essential oils of Moravian malt and Saaz hops.",
    "flavorProfile": "Crystal clear beer brandy. Aromas of freshly cracked brewery malt, herbal Saaz hops, fresh bread crust, and baked orchard fruit.",
    "foodPairing": "The supreme digestive after pork knuckle, ribs, and beef burgers.",
    "staffNotes": "Our signature signature spirit! Crafted by distilling our own TransFUZE 12 craft beer – an authentic story to share with every guest.",
    "tags": [
      "beer brandy",
      "FUZE",
      "in-house",
      "TransFUZE",
      "craft"
    ]
  },
  {
    "id": "palenka-absinth-st-antoine",
    "name": "Absinth St. Antoine Žufánek",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "Žufánek Family Distillery (Boršice)",
    "origin": "Czech Republic",
    "region": "Moravia, Slovácko",
    "volume": "0.03l",
    "abv": "70.0% ABV",
    "price": "115 CZK",
    "rawIngredients": "Neutral spirit, grand wormwood (Artemisia absinthium), green anise, Florence fennel, and 7 Alpine botanicals.",
    "productionProcess": "Traditional distillation without artificial colors. Secondary herb maceration gives natural emerald chlorophyll color.",
    "flavorProfile": "Potent, herbal, fresh aniseed flavor with balanced wormwood bitterness and clean fennel. Dilution with ice water produces an instant milky louche effect.",
    "foodPairing": "Served with the traditional ritual of cold iced water dripped through a slotted spoon with sugar.",
    "staffNotes": "Martin Žufánek produces one of Europe's most revered genuine absinthes. Never set on fire – true absinthe is gently diluted with iced water!",
    "tags": [
      "absinth",
      "Žufánek",
      "herbs",
      "wormwood",
      "70%",
      "louche"
    ]
  },
  {
    "id": "palenka-kminka-garage22",
    "name": "Kmínka Caraway Liqueur (Garage 22)",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "Garage 22 (Craft distillery in Holešovice, Prague)",
    "origin": "Czech Republic",
    "region": "Prague, Holešovice",
    "volume": "0.03l",
    "abv": "38.0% ABV",
    "price": "89 CZK",
    "rawIngredients": "Czech biennial caraway, Roman cumin, citrus peel, and botanical herbs.",
    "productionProcess": "Macerated and gently redistilled on a small copper column still in Prague's hip Holešovice district.",
    "flavorProfile": "Noble, warming, spicy spirit highlighting crusty rye caraway bread nuances brightened with a fresh citrus lift.",
    "foodPairing": "Incomparable after hearty meats, roast pork knuckle, and beef tartare.",
    "staffNotes": "Caraway has been used for centuries across Central Europe to aid digestion after rich feasts. Garage 22 elevates historic Czech Kmínka to contemporary world-class craft.",
    "tags": [
      "caraway",
      "Garage 22",
      "Prague",
      "digestive",
      "craft"
    ]
  },
  {
    "id": "palenka-kontusovka-zufanek",
    "name": "Kontušovka Žufánek",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "Žufánek (Boršice)",
    "origin": "Czech Republic",
    "region": "Moravia, Slovácko",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "95 CZK",
    "rawIngredients": "Star anise, green anise, fennel, coriander, caraway, and five additional botanical herbs.",
    "productionProcess": "Spiced herbal spirit based on a 17th-century Polish-Lithuanian noble recipe, aged in oak casks.",
    "flavorProfile": "Rich golden glow. Opulent star anise and liquorice aromatics, warm spice, and a gentle honeyed undertone.",
    "foodPairing": "Classic digestive after hearty Czech dishes and pork feasts.",
    "staffNotes": "Famous in classic Czech literature ('two Kontušovkas and a beer'). Žufánek resurrected this noble historical spirit with modern finesse.",
    "tags": [
      "kontušovka",
      "Žufánek",
      "star anise",
      "historic",
      "liqueur"
    ]
  },
  {
    "id": "palenka-orechovy-radlik",
    "name": "Walnut Liqueur Radlík (Ořechový)",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "Radlík Distillery (Jílové u Prahy)",
    "origin": "Czech Republic",
    "region": "Central Bohemia",
    "volume": "0.03l",
    "abv": "35.0% ABV",
    "price": "89 CZK",
    "rawIngredients": "Unripe green walnuts harvested around St. John's Day (late June), whole spices (cloves, cinnamon, nutmeg), honey, and fruit eau-de-vie.",
    "productionProcess": "Slow multi-month maceration of green walnuts in fruit spirits, aged to harmonize bitterness and honey sweetness.",
    "flavorProfile": "Dark walnut brown. Rich, pleasant walnut bitterness layered with warm baking spices and velvety honey sweetness.",
    "foodPairing": "Wonderful with cheese platters, nut desserts, and Waldorf salad.",
    "staffNotes": "Radlík is one of the most awarded craft distilleries in the Czech Republic, holding dozens of international medals.",
    "tags": [
      "walnut",
      "Radlík",
      "green walnuts",
      "herbal liqueur"
    ]
  },
  {
    "id": "palenka-hustopecska-mandlovka",
    "name": "Hustopečská Mandlovka (Almond Spirit)",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "Mandlárna Hustopeče",
    "origin": "Czech Republic",
    "region": "Moravia, Hustopeče (unique almond orchards)",
    "volume": "0.03l",
    "abv": "38.0% ABV",
    "price": "79 CZK",
    "rawIngredients": "Natural almond essence, wine eau-de-vie spirit, grape juice, and pure water.",
    "productionProcess": "Harmonious blending of wine spirit with natural almond extract following a traditional recipe by former orchard director Rudolf Poslušný.",
    "flavorProfile": "Crystal clear spirit with intoxicating sweet marzipan fragrance and a full, warming sweet-almond finish.",
    "foodPairing": "Delicious with desserts, shredded pancake Kaiserschmarrn, and hot espresso.",
    "staffNotes": "Crafted from Central Europe's only extensive almond orchards blooming on the slopes of southern Moravia.",
    "tags": [
      "almond",
      "Hustopeče",
      "marzipan",
      "Moravia",
      "sweet spirit"
    ]
  },
  {
    "id": "palenka-jagermeister",
    "name": "Jägermeister Herbal Liqueur",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "Mast-Jägermeister SE (established 1878)",
    "origin": "Germany",
    "region": "Wolfenbüttel, Lower Saxony",
    "volume": "0.03l",
    "abv": "35.0% ABV",
    "price": "75 CZK",
    "rawIngredients": "56 distinct natural herbs, blossoms, roots, and fruits (including ginger, star anise, cardamom, bitter orange, liquorice, and juniper).",
    "productionProcess": "Multi-stage maceration in alcohol and water lasting several weeks, then matured for 12 months in massive German oak vats.",
    "flavorProfile": "Dark herbal liqueur. Complex, bittersweet, aromatic with intense notes of cinnamon, clove, and liquorice. Served ice-cold at -18°C.",
    "foodPairing": "Universal ice-cold toast and herbal digestive after rich meals.",
    "staffNotes": "Served directly from the freezer at -18°C for optimal syrupy viscosity and smooth herbal release.",
    "tags": [
      "Jägermeister",
      "herbal liqueur",
      "Germany",
      "ice-cold",
      "56 botanicals"
    ]
  },
  {
    "id": "palenka-becherovka",
    "name": "Becherovka Unfiltered",
    "category": "liqueur_spirit",
    "categoryName": "Spirits & Liqueurs 0.03l",
    "producer": "Jan Becher – Karlovarská Becherovka",
    "origin": "Czech Republic",
    "region": "Karlovy Vary (Carlsbad)",
    "volume": "0.03l",
    "abv": "38.0% ABV",
    "price": "68 CZK",
    "rawIngredients": "Secret blend of approximately 20 herbs and exotic spices, Carlsbad mineral water, fine spirit, and sugar.",
    "productionProcess": "Botanical maceration in oak casks. The unfiltered release retains natural cloudiness, offering richer mouthfeel and higher essential oil content.",
    "flavorProfile": "Iconic bittersweet spice profile led by cloves, cinnamon, aniseed, and bitter orange peel.",
    "foodPairing": "Celebrated both as an appetite-whetting aperitif and a traditional digestive aid.",
    "staffNotes": "The unfiltered version is a connoisseur treat – noticeably richer, hazier, and more aromatic than standard Becherovka.",
    "tags": [
      "Becherovka",
      "Carlsbad",
      "herbal liqueur",
      "unfiltered",
      "Czech classic"
    ]
  },
  {
    "id": "gin-tanqueray",
    "name": "Tanqueray London Dry Gin",
    "category": "gin",
    "categoryName": "Gins 0.03l",
    "producer": "Charles Tanqueray (founded in London, 1830)",
    "origin": "United Kingdom",
    "region": "Cameronbridge, Scotland",
    "volume": "0.03l",
    "abv": "43.1% ABV",
    "price": "82 CZK",
    "rawIngredients": "Neutral grain spirit and exactly four pure botanicals: Tuscan juniper, coriander seed, angelica root, and sweet liquorice.",
    "productionProcess": "Quadruple distilled in the historic copper pot still 'Old Tom No. 10', which survived the London Blitz.",
    "flavorProfile": "Pine-fresh, crisp, unadorned London dry profile driven by robust juniper, bright citrus-coriander lift, and a dry finish.",
    "foodPairing": "Perfect with premium Thomas Henry tonic and a fresh lime wedge.",
    "staffNotes": "The global gold standard for London Dry Gin. No artificial flavorings, no added sugar – just 4 perfectly balanced botanicals.",
    "tags": [
      "gin",
      "London Dry",
      "Tanqueray",
      "juniper",
      "England"
    ]
  },
  {
    "id": "gin-hendricks",
    "name": "Hendrick's Gin",
    "category": "gin",
    "categoryName": "Gins 0.03l",
    "producer": "William Grant & Sons (Girvan Distillery)",
    "origin": "Scotland",
    "region": "Ayrshire, Girvan",
    "volume": "0.03l",
    "abv": "41.4% ABV",
    "price": "115 CZK",
    "rawIngredients": "11 traditional botanicals complemented by post-distillation infusions of Bulgarian Damask rose petals and crisp Dutch cucumber essence.",
    "productionProcess": "Unique union of two distinct stills: a traditional Bennett pot still (richness) and a rare 1948 Carter-Head still with botanical vapor basket (delicacy).",
    "flavorProfile": "Floral, wonderfully fresh with signature notes of cool cucumber, scented rose petals, and subtle juniper backing.",
    "foodPairing": "Served with Fever-Tree or Thomas Henry tonic water and a thin ribbon of fresh cucumber.",
    "staffNotes": "Bottled in an iconic Victorian apothecary bottle. The gin that sparked the modern craft gin renaissance.",
    "tags": [
      "gin",
      "Hendricks",
      "cucumber",
      "rose",
      "Scotland"
    ]
  },
  {
    "id": "vodka-anton-kaapl-legionar",
    "name": "Anton Kaapl LEGIONÄR Vodka",
    "category": "vodka",
    "categoryName": "Vodkas 0.03l",
    "producer": "Anton Kaapl Family Distillery",
    "origin": "Czech Republic",
    "region": "South Bohemia, Jílovice",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "89 CZK",
    "rawIngredients": "Extra-fine rectified grain spirit and crystal demineralized water drawn from deep artesian wells in the Novohradské Mountains.",
    "productionProcess": "Multi-stage multi-day active charcoal filtration, followed by resting in stainless vats for ultimate smoothness.",
    "flavorProfile": "Immensely silky, clean, pure mouthfeel with zero harsh burn and a faint hint of sweet wheat grain on the finish.",
    "foodPairing": "Traditional accompaniment to beef tartare, caviar, consommé, and smoked meats.",
    "staffNotes": "Award-winning craft distillery from South Bohemia named after the family grandfather – Czechoslovak legionnaire Anton Kaapl.",
    "tags": [
      "vodka",
      "Anton Kaapl",
      "South Bohemia",
      "pure",
      "craft"
    ]
  },
  {
    "id": "vodka-grey-goose",
    "name": "Grey Goose Vodka",
    "category": "vodka",
    "categoryName": "Vodkas 0.03l",
    "producer": "Bacardi (François Thibault, Maître de Chai)",
    "origin": "France",
    "region": "Picardy / Cognac (Gensac-la-Pallue)",
    "volume": "0.03l",
    "abv": "40.0% ABV",
    "price": "135 CZK",
    "rawIngredients": "100% French soft winter wheat from Picardy and natural limestone-filtered spring water from Gensac-la-Pallue in Cognac.",
    "productionProcess": "Five-step continuous column distillation and blending with Cognac limestone spring water.",
    "flavorProfile": "Velvety, rounded texture with gentle nuances of sweet almond, white pepper, and fresh bakery dough.",
    "foodPairing": "The luxury foundation for Vodka Martinis, Espresso Martinis, and Cosmopolitans.",
    "staffNotes": "Synonymous with luxury French vodka, created by a cellar master from the heart of the Cognac region.",
    "tags": [
      "vodka",
      "Grey Goose",
      "France",
      "wheat",
      "luxury"
    ]
  },
  {
    "id": "pivo-transfuze-12",
    "name": "TransFUZE 12 (Traditional Lager)",
    "category": "beer_craft",
    "categoryName": "Beer on Tap",
    "producer": "FUZE Prague In-House Brewery (Brewmaster Aleš Paik)",
    "origin": "Czech Republic",
    "region": "Prague, Masaryčka",
    "volume": "0.3l / 0.5l",
    "abv": "5.0% ABV",
    "price": "59 CZK / 69 CZK",
    "rawIngredients": "Floor-malted Czech barley malt, native Saaz semi-early red-bine hops (Žatecký poloraný červeňák), pure brewing water, bottom-fermenting lager yeast.",
    "productionProcess": "Traditional double-decoction mashing, open fermentation vessels, and long lagering in horizontal tanks. Unpasteurized, unfiltered, poured straight from conditioning tanks.",
    "flavorProfile": "Golden brilliant color, thick creamy foam cap, rich bready malt body balanced by clean, delicious, non-cloying hop bitterness.",
    "foodPairing": "Universal companion for Czech specialties: thick-cut Duroc schnitzel, beef tartare, and roasted pork knuckle.",
    "staffNotes": "Our flagship brew! Brewed right in our restaurant by head brewmaster Aleš Paik. Fresh, unfiltered Czech lager at its absolute peak.",
    "tags": [
      "beer",
      "lager",
      "FUZE",
      "TransFUZE",
      "on tap",
      "tank beer"
    ]
  },
  {
    "id": "pivo-infuze-ipa-12",
    "name": "InFUZE IPA 12 (Session IPA)",
    "category": "beer_craft",
    "categoryName": "Beer on Tap",
    "producer": "FUZE Prague In-House Brewery (Brewmaster Aleš Paik)",
    "origin": "Czech Republic",
    "region": "Prague",
    "volume": "0.4l",
    "abv": "4.9% ABV",
    "price": "85 CZK",
    "rawIngredients": "Pale barley malts, dry-hopped with aromatic American and New Zealand hop varieties (Citra, Mosaic, Nelson Sauvin).",
    "productionProcess": "Top-fermented ale, cold dry-hopped directly in conditioning tanks, unpasteurized and unfiltered.",
    "flavorProfile": "Vibrant citrus aromas of pink grapefruit, passion fruit, and fresh pine needles, light refreshing body, and a clean dry bitter finish.",
    "foodPairing": "Pairs exceptionally with burgers, pork belly with chimichurri, and spicy dishes.",
    "staffNotes": "Session IPA is designed to be intensely fragrant with lush hop oils while staying refreshingly light and drinkable all evening long.",
    "tags": [
      "beer",
      "IPA",
      "Session IPA",
      "FUZE",
      "hops",
      "citrus"
    ]
  },
  {
    "id": "pivo-fuzenac-13",
    "name": "FUZEnáč 13 (Smoked Amber Lager)",
    "category": "beer_craft",
    "categoryName": "Beer on Tap",
    "producer": "FUZE Prague In-House Brewery (Brewmaster Aleš Paik)",
    "origin": "Czech Republic",
    "region": "Prague",
    "volume": "0.3l / 0.5l",
    "abv": "5.3% ABV",
    "price": "69 CZK / 78 CZK",
    "rawIngredients": "Floor-malted barley, authentic beechwood-smoked malt from Bamberg, caramel malts, and Saaz hops.",
    "productionProcess": "Bottom-fermented amber lager, slow tank lagering, unpasteurized and unfiltered.",
    "flavorProfile": "Gorgeous amber glow, distinctive campfire smoke aroma, full-bodied malt profile with subtle caramel sweetness.",
    "foodPairing": "Genius pairing with hop-smoked pork belly, clay-oven pastrami, and beer-glazed ribs.",
    "staffNotes": "For lovers of authentic smoked lagers (Rauchbier). The beechwood smoke imparts incredible savory character.",
    "tags": [
      "beer",
      "amber",
      "smoked",
      "Rauchbier",
      "FUZE",
      "specialty"
    ]
  }
];
