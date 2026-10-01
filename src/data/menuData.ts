export interface Question {
  id: string;
  question: string;
  correctAnswer: string;
  distractors: [string, string];
  explanation: string;
}

export interface MenuItem {
  id: string;
  name: string;
  weight?: string;
  price?: string;
  allergens?: string[];
  description: string;
  notes?: string;
  questions: Question[];
}

export interface MenuCategory {
  id: string;
  name: string;
  badge?: string;
  description: string;
  iconName: string;
  items: MenuItem[];
}

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    "id": "predkrmy",
    "name": "Předkrmy a malá jídla",
    "badge": "Předkrmy a malá jídla",
    "description": "Autorské předkrmy s důrazem na vyzrálé suroviny, lokální řemeslo a párování s pivem",
    "iconName": "Utensils",
    "items": [
      {
        "id": "tatarak",
        "name": "Krájený hovězí tatarák",
        "weight": "90g",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma",
        "price": "239 Kč",
        "notes": "Maso je krájené, nikoli mleté. Topinka se opéká na hovězím loji pro plnou chuť.",
        "questions": [
          {
            "id": "tatarak-vol",
            "question": "Jaká je gramáž porce podsložky Krájený hovězí tatarák?",
            "correctAnswer": "90g",
            "distractors": [
              "100 g",
              "150 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Krájený hovězí tatarák je 90g."
          },
          {
            "id": "tatarak-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Krájený hovězí tatarák?",
            "correctAnswer": "Z květové špičky",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Z květové špičky. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-2",
            "question": "Který druh nakládaných okurek obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Okurčičky cornichons",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Okurčičky cornichons. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-3",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Krájený hovězí tatarák?",
            "correctAnswer": "Marinované šalotky",
            "distractors": [
              "Kvašené okurky (kvašáky)",
              "Sušená rajčata"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Marinované šalotky. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-4",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Krájený hovězí tatarák?",
            "correctAnswer": "Pažitka",
            "distractors": [
              "Čerstvý rozmarýn",
              "Tymián"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Pažitka. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-5",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Krájený hovězí tatarák?",
            "correctAnswer": "Na hovězím loji opečená topinka a konfitovaný česnek",
            "distractors": [
              "Kváskový chléb",
              "Bramborová kaše"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Na hovězím loji opečená topinka a konfitovaný česnek. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-ing-6",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Krájený hovězí tatarák?",
            "correctAnswer": "Bramborová sláma",
            "distractors": [
              "Bramborové křupky",
              "Naše hranolky"
            ],
            "explanation": "V podsložce Krájený hovězí tatarák je obsaženo: Bramborová sláma. Kompletní receptura položky: z květové špičky, okurčičky cornichons, marinované šalotky, pažitka, na hovězím loji opečená topinka a konfitovaný česnek, bramborová sláma."
          },
          {
            "id": "tatarak-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Krájený hovězí tatarák obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "tatarak-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Krájený hovězí tatarák obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "tatarak-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Krájený hovězí tatarák?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Krájený hovězí tatarák obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "klobasa-smrze",
        "name": "Naše telecí klobása se smrži",
        "weight": "100g",
        "allergens": [
          "1",
          "3",
          "7",
          "8",
          "10"
        ],
        "description": "kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka",
        "price": "219 Kč",
        "notes": "Vlastní výroba klobásy s kousky smržů a kaštanů.",
        "questions": [
          {
            "id": "klobasa-smrze-vol",
            "question": "Jaká je gramáž porce podsložky Naše telecí klobása se smrži?",
            "correctAnswer": "100g",
            "distractors": [
              "150 g",
              "200 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Naše telecí klobása se smrži je 100g."
          },
          {
            "id": "klobasa-smrze-ing-1",
            "question": "Která z následujících surovin patří do podsložky Naše telecí klobása se smrži?",
            "correctAnswer": "Kaštany a sušenými švestkami",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Naše telecí klobása se smrži je obsaženo: Kaštany a sušenými švestkami. Kompletní receptura položky: kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka."
          },
          {
            "id": "klobasa-smrze-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Naše telecí klobása se smrži?",
            "correctAnswer": "Lanýžová omáčka",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Naše telecí klobása se smrži je obsaženo: Lanýžová omáčka. Kompletní receptura položky: kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka."
          },
          {
            "id": "klobasa-smrze-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Naše telecí klobása se smrži?",
            "correctAnswer": "Pivní sušenka",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Naše telecí klobása se smrži je obsaženo: Pivní sušenka. Kompletní receptura položky: kaštany a sušenými švestkami, lanýžová omáčka, pivní sušenka."
          },
          {
            "id": "klobasa-smrze-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "klobasa-smrze-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "klobasa-smrze-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "klobasa-smrze-allergen-8",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (vlašské ořechy, mandle, lískové ořechy). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "klobasa-smrze-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Naše telecí klobása se smrži?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Naše telecí klobása se smrži obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "foie-gras",
        "name": "Paštika z kachních foie gras",
        "weight": "100g",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška",
        "price": "315 Kč",
        "notes": "Pivní želé z belgického višňového piva Kasteel Rouge.",
        "questions": [
          {
            "id": "foie-gras-vol",
            "question": "Jaká je gramáž porce podsložky Paštika z kachních foie gras?",
            "correctAnswer": "100g",
            "distractors": [
              "150 g",
              "200 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Paštika z kachních foie gras je 100g."
          },
          {
            "id": "foie-gras-ing-1",
            "question": "Která z následujících surovin patří do podsložky Paštika z kachních foie gras?",
            "correctAnswer": "V želé z piva Kasteel Rouge",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Paštika z kachních foie gras je obsaženo: V želé z piva Kasteel Rouge. Kompletní receptura položky: v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška."
          },
          {
            "id": "foie-gras-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Paštika z kachních foie gras?",
            "correctAnswer": "Višňová omáčka",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Paštika z kachních foie gras je obsaženo: Višňová omáčka. Kompletní receptura položky: v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška."
          },
          {
            "id": "foie-gras-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Paštika z kachních foie gras?",
            "correctAnswer": "Opečená máslová brioška",
            "distractors": [
              "Naše hranolky",
              "Zauzené rohlíčkové brambory"
            ],
            "explanation": "V podsložce Paštika z kachních foie gras je obsaženo: Opečená máslová brioška. Kompletní receptura položky: v želé z piva Kasteel Rouge, višňová omáčka, opečená máslová brioška."
          },
          {
            "id": "foie-gras-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Paštika z kachních foie gras?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Paštika z kachních foie gras obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "foie-gras-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Paštika z kachních foie gras?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Paštika z kachních foie gras obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "foie-gras-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Paštika z kachních foie gras?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Paštika z kachních foie gras obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "veprovy-bok-platky",
        "name": "Tenké plátky vepřového boku",
        "weight": "100g",
        "allergens": [
          "1",
          "4",
          "10"
        ],
        "description": "zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách",
        "price": "169 Kč",
        "notes": "Bok je zauzený sušeným aromatickým chmelem.",
        "questions": [
          {
            "id": "veprovy-bok-platky-vol",
            "question": "Jaká je gramáž porce podsložky Tenké plátky vepřového boku?",
            "correctAnswer": "100g",
            "distractors": [
              "150 g",
              "200 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Tenké plátky vepřového boku je 100g."
          },
          {
            "id": "veprovy-bok-platky-ing-1",
            "question": "Která z následujících surovin patří do podsložky Tenké plátky vepřového boku?",
            "correctAnswer": "Zauzeného chmelem",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Zauzeného chmelem. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-ing-2",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Tenké plátky vepřového boku?",
            "correctAnswer": "Křupavé vepřové krekry",
            "distractors": [
              "Bramborová sláma",
              "Bramborová kaše"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Křupavé vepřové krekry. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-ing-3",
            "question": "Která z následujících surovin patří do podsložky Tenké plátky vepřového boku?",
            "correctAnswer": "Pyré z pečených jablek a hořčice",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Pyré z pečených jablek a hořčice. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Smažený hrách",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Tenké plátky vepřového boku je obsaženo: Smažený hrách. Kompletní receptura položky: zauzeného chmelem, křupavé vepřové krekry, pyré z pečených jablek a hořčice, smažený hrách."
          },
          {
            "id": "veprovy-bok-platky-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Tenké plátky vepřového boku obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-bok-platky-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Tenké plátky vepřového boku obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-bok-platky-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Tenké plátky vepřového boku?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)"
            ],
            "explanation": "Tenké plátky vepřového boku obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "kureci-krokety",
        "name": "Smažené kuřecí krokety",
        "weight": "100g",
        "allergens": [
          "1",
          "3",
          "7",
          "14"
        ],
        "description": "s čedarem, naše salsa verde, libečková majonéza",
        "price": "175 Kč",
        "notes": "Křupavé krokety plněné kuřecím masem a rozteklým vyzrálým čedarem.",
        "questions": [
          {
            "id": "kureci-krokety-vol",
            "question": "Jaká je gramáž porce podsložky Smažené kuřecí krokety?",
            "correctAnswer": "100g",
            "distractors": [
              "150 g",
              "200 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Smažené kuřecí krokety je 100g."
          },
          {
            "id": "kureci-krokety-ing-1",
            "question": "Který sýr či mléčná přísada je součástí receptury Smažené kuřecí krokety?",
            "correctAnswer": "S čedarem",
            "distractors": [
              "Omáčka Choron",
              "Višňová omáčka"
            ],
            "explanation": "V podsložce Smažené kuřecí krokety je obsaženo: S čedarem. Kompletní receptura položky: s čedarem, naše salsa verde, libečková majonéza."
          },
          {
            "id": "kureci-krokety-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Smažené kuřecí krokety?",
            "correctAnswer": "Naše salsa verde",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Smažené kuřecí krokety je obsaženo: Naše salsa verde. Kompletní receptura položky: s čedarem, naše salsa verde, libečková majonéza."
          },
          {
            "id": "kureci-krokety-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Smažené kuřecí krokety?",
            "correctAnswer": "Libečková majonéza",
            "distractors": [
              "Hladkolistá petrželka",
              "Drcený kmín"
            ],
            "explanation": "V podsložce Smažené kuřecí krokety je obsaženo: Libečková majonéza. Kompletní receptura položky: s čedarem, naše salsa verde, libečková majonéza."
          },
          {
            "id": "kureci-krokety-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          },
          {
            "id": "kureci-krokety-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          },
          {
            "id": "kureci-krokety-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          },
          {
            "id": "kureci-krokety-allergen-14",
            "question": "Který z následujících alergenů obsahuje podsložka Smažené kuřecí krokety?",
            "correctAnswer": "Alergen č. 14 – Měkkýši a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Smažené kuřecí krokety obsahuje Alergen č. 14 – Měkkýši a výrobky z nich (slávky, chobotnice, kalamáry, ústřicová omáčka). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Měkkýši a výrobky z nich."
          }
        ]
      },
      {
        "id": "olomoucke-tvaruzky",
        "name": "Sekané olomoucké tvarůžky",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "s cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka",
        "price": "199 Kč",
        "notes": "Tradiční moravské zrající tvarůžky podávané na křupavém chlebu.",
        "questions": [
          {
            "id": "olomoucke-tvaruzky-ing-1",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Sekané olomoucké tvarůžky?",
            "correctAnswer": "S cibulkou",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: S cibulkou. Kompletní receptura položky: s cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Sekané olomoucké tvarůžky?",
            "correctAnswer": "Majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: Majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu. Kompletní receptura položky: s cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-ing-3",
            "question": "Která z následujících surovin patří do podsložky Sekané olomoucké tvarůžky?",
            "correctAnswer": "Křen",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: Křen. Kompletní receptura položky: s cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Kyselá zeleninka",
            "distractors": [
              "Kvašené okurky (kvašáky)",
              "Sušená rajčata"
            ],
            "explanation": "V podsložce Sekané olomoucké tvarůžky je obsaženo: Kyselá zeleninka. Kompletní receptura položky: s cibulkou, majonézou s paprikou a hořčičným semínkem na opečeném kváskovém chlebu, křen, kyselá zeleninka."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "olomoucke-tvaruzky-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Sekané olomoucké tvarůžky?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Sekané olomoucké tvarůžky obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      }
    ]
  },
  {
    "id": "chutovky",
    "name": "Chuťovky",
    "badge": "Chuťovky",
    "description": "Drobné pochutiny k pivu a vínu z naší kuchyně",
    "iconName": "Cookie",
    "items": [
      {
        "id": "lanyzovy-popcorn",
        "name": "Lanýžový popcorn",
        "allergens": [
          "7"
        ],
        "description": "s parmazánem",
        "price": "139 Kč",
        "notes": "Čerstvě pražený kukuřičný popcorn ovoněný lanýžovým olejem a sypaný parmazánem.",
        "questions": [
          {
            "id": "lanyzovy-popcorn-ing-1",
            "question": "Který sýr či mléčná přísada je součástí receptury Lanýžový popcorn?",
            "correctAnswer": "S parmazánem",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Lanýžový popcorn je obsaženo: S parmazánem. Kompletní receptura položky: s parmazánem."
          },
          {
            "id": "lanyzovy-popcorn-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Lanýžový popcorn?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Lanýžový popcorn obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "domaci-bramburky",
        "name": "Naše domácí brambůrky",
        "allergens": [
          "7"
        ],
        "description": "pikantní zauzená majonéza",
        "price": "125 Kč",
        "notes": "Ručně krájené a smažené bramborové lupínky s domácí majonézou.",
        "questions": [
          {
            "id": "domaci-bramburky-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Naše domácí brambůrky?",
            "correctAnswer": "Pikantní zauzená majonéza",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Naše domácí brambůrky je obsaženo: Pikantní zauzená majonéza. Kompletní receptura položky: pikantní zauzená majonéza."
          },
          {
            "id": "domaci-bramburky-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše domácí brambůrky?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Naše domácí brambůrky obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "polevky",
    "name": "Polévky",
    "badge": "Polévky",
    "description": "Poctivé polévky a vývary podle tradičních receptur",
    "iconName": "Soup",
    "items": [
      {
        "id": "hovezi-consomme",
        "name": "Hovězí consommé",
        "allergens": [
          "9"
        ],
        "description": "jemný játrový knedlíček, zelenina",
        "price": "109 Kč",
        "notes": "Dlouze tažený a čištěný hovězí vývar.",
        "questions": [
          {
            "id": "hovezi-consomme-ing-1",
            "question": "Která z následujících surovin patří do podsložky Hovězí consommé?",
            "correctAnswer": "Jemný játrový knedlíček",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Hovězí consommé je obsaženo: Jemný játrový knedlíček. Kompletní receptura položky: jemný játrový knedlíček, zelenina."
          },
          {
            "id": "hovezi-consomme-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Hovězí consommé?",
            "correctAnswer": "Zelenina",
            "distractors": [
              "Nakládané perlové cibulky",
              "Grilované papričky Padrón"
            ],
            "explanation": "V podsložce Hovězí consommé je obsaženo: Zelenina. Kompletní receptura položky: jemný játrový knedlíček, zelenina."
          },
          {
            "id": "hovezi-consomme-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí consommé?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Hovězí consommé obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Celer a výrobky z něj."
          }
        ]
      },
      {
        "id": "kremova-humri",
        "name": "Krémová humří polévka",
        "allergens": [
          "1",
          "2",
          "3",
          "7",
          "9"
        ],
        "description": "s klobáskou a zeleninou, zapečená listovým těstem",
        "price": "269 Kč",
        "notes": "Luxusní bisque z humřích krunýřů pod čepicí z listového těsta.",
        "questions": [
          {
            "id": "kremova-humri-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Krémová humří polévka?",
            "correctAnswer": "S klobáskou a zeleninou",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Krémová humří polévka je obsaženo: S klobáskou a zeleninou. Kompletní receptura položky: s klobáskou a zeleninou, zapečená listovým těstem."
          },
          {
            "id": "kremova-humri-ing-2",
            "question": "Která z následujících surovin patří do podsložky Krémová humří polévka?",
            "correctAnswer": "Zapečená listovým těstem",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Krémová humří polévka je obsaženo: Zapečená listovým těstem. Kompletní receptura položky: s klobáskou a zeleninou, zapečená listovým těstem."
          },
          {
            "id": "kremova-humri-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          },
          {
            "id": "kremova-humri-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Krémová humří polévka?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Krémová humří polévka obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj."
          }
        ]
      }
    ]
  },
  {
    "id": "salaty",
    "name": "Saláty",
    "badge": "Saláty",
    "description": "Čerstvé saláty s originálními dresinky a kvalitními surovinami",
    "iconName": "Salad",
    "items": [
      {
        "id": "caesar-salat",
        "name": "Caesar salát",
        "allergens": [
          "1",
          "3",
          "4",
          "7",
          "10"
        ],
        "description": "s trhaným kuřetem pečeným v peci, opečenou slaninou, parmezánem a krutony",
        "price": "289 Kč",
        "notes": "Klasický salát s kuřecím masem pečeným v naší hliněné peci.",
        "questions": [
          {
            "id": "caesar-salat-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Caesar salát?",
            "correctAnswer": "S trhaným kuřetem pečeným v peci",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: S trhaným kuřetem pečeným v peci. Kompletní receptura položky: s trhaným kuřetem pečeným v peci, opečenou slaninou, parmezánem a krutony."
          },
          {
            "id": "caesar-salat-ing-2",
            "question": "Která z následujících surovin patří do podsložky Caesar salát?",
            "correctAnswer": "Opečenou slaninou",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: Opečenou slaninou. Kompletní receptura položky: s trhaným kuřetem pečeným v peci, opečenou slaninou, parmezánem a krutony."
          },
          {
            "id": "caesar-salat-ing-3",
            "question": "Která z následujících surovin patří do podsložky Caesar salát?",
            "correctAnswer": "Parmezánem a krutony",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Caesar salát je obsaženo: Parmezánem a krutony. Kompletní receptura položky: s trhaným kuřetem pečeným v peci, opečenou slaninou, parmezánem a krutony."
          },
          {
            "id": "caesar-salat-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "caesar-salat-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Caesar salát?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Caesar salát obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "waldorf-salat",
        "name": "Waldorf salát",
        "allergens": [
          "8",
          "9",
          "10"
        ],
        "description": "jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing",
        "price": "245 Kč",
        "notes": "Osvěžující kombinace ovoce, ořechů a celeru.",
        "questions": [
          {
            "id": "waldorf-salat-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Jablka",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Jablka. Kompletní receptura položky: jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Řapíkatý celer",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Řapíkatý celer. Kompletní receptura položky: jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Hrozny",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Hrozny. Kompletní receptura položky: jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-4",
            "question": "Která z následujících surovin patří do podsložky Waldorf salát?",
            "correctAnswer": "Nakládané vlašské ořechy",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Nakládané vlašské ořechy. Kompletní receptura položky: jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce Waldorf salát?",
            "correctAnswer": "Majonézový dresing",
            "distractors": [
              "Sýr čedar",
              "Lanýžová omáčka"
            ],
            "explanation": "V podsložce Waldorf salát je obsaženo: Majonézový dresing. Kompletní receptura položky: jablka, řapíkatý celer, hrozny, nakládané vlašské ořechy, majonézový dresing."
          },
          {
            "id": "waldorf-salat-allergen-8",
            "question": "Který z následujících alergenů obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 3 – Vejce a výrobky z nich"
            ],
            "explanation": "Waldorf salát obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (vlašské ořechy, mandle, lískové ořechy). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "waldorf-salat-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Waldorf salát obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "waldorf-salat-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Waldorf salát?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Waldorf salát obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      }
    ]
  },
  {
    "id": "sporak",
    "name": "Ze sporáku a trouby",
    "badge": "Ze sporáku a trouby",
    "description": "Tradiční i moderní teplá jídla připravovaná v naší kuchyni",
    "iconName": "Flame",
    "items": [
      {
        "id": "pecene-koleno",
        "name": "Pečené vepřové koleno",
        "weight": "1ks",
        "allergens": [
          "1",
          "10"
        ],
        "description": "v nabídce každý den vždy do vyprodání, hořčice, strouhaný křen, zelný salát s křenem",
        "price": "459 Kč",
        "notes": "Pekařské vepřové koleno pečené dozlatova s křupavou kůrčičkou.",
        "questions": [
          {
            "id": "pecene-koleno-vol",
            "question": "Jaká je velikost porce podsložky Pečené vepřové koleno?",
            "correctAnswer": "1ks",
            "distractors": [
              "2 ks",
              "1/2 ks"
            ],
            "explanation": "Gramáž / velikost porce podsložky Pečené vepřové koleno je 1ks."
          },
          {
            "id": "pecene-koleno-ing-1",
            "question": "Která z následujících surovin patří do podsložky Pečené vepřové koleno?",
            "correctAnswer": "V nabídce každý den vždy do vyprodání",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: V nabídce každý den vždy do vyprodání. Kompletní receptura položky: v nabídce každý den vždy do vyprodání, hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-ing-2",
            "question": "Která z následujících surovin patří do podsložky Pečené vepřové koleno?",
            "correctAnswer": "Hořčice",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: Hořčice. Kompletní receptura položky: v nabídce každý den vždy do vyprodání, hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-ing-3",
            "question": "Která z následujících surovin patří do podsložky Pečené vepřové koleno?",
            "correctAnswer": "Strouhaný křen",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: Strouhaný křen. Kompletní receptura položky: v nabídce každý den vždy do vyprodání, hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-ing-4",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Pečené vepřové koleno?",
            "correctAnswer": "Zelný salát s křenem",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce Pečené vepřové koleno je obsaženo: Zelný salát s křenem. Kompletní receptura položky: v nabídce každý den vždy do vyprodání, hořčice, strouhaný křen, zelný salát s křenem."
          },
          {
            "id": "pecene-koleno-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Pečené vepřové koleno?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Pečené vepřové koleno obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Hořčice a výrobky z ní."
          },
          {
            "id": "pecene-koleno-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Pečené vepřové koleno?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pečené vepřové koleno obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "veprovy-rizek-duroc",
        "name": "Vysoký vepřový řízek",
        "weight": "200g",
        "allergens": [
          "1",
          "3",
          "4",
          "7",
          "10"
        ],
        "description": "z plemene Duroc, omáčka fines herbes, bramborová kaše a bramborové křupky",
        "price": "309 Kč",
        "notes": "Šťavnatý řízek z prémiového plemene Duroc s máslovou kaší.",
        "questions": [
          {
            "id": "veprovy-rizek-duroc-vol",
            "question": "Jaká je gramáž porce podsložky Vysoký vepřový řízek?",
            "correctAnswer": "200g",
            "distractors": [
              "150 g",
              "250 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Vysoký vepřový řízek je 200g."
          },
          {
            "id": "veprovy-rizek-duroc-ing-1",
            "question": "Která z následujících surovin patří do podsložky Vysoký vepřový řízek?",
            "correctAnswer": "Z plemene Duroc",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Vysoký vepřový řízek je obsaženo: Z plemene Duroc. Kompletní receptura položky: z plemene Duroc, omáčka fines herbes, bramborová kaše a bramborové křupky."
          },
          {
            "id": "veprovy-rizek-duroc-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Vysoký vepřový řízek?",
            "correctAnswer": "Omáčka fines herbes",
            "distractors": [
              "Majoránka",
              "Koriandr"
            ],
            "explanation": "V podsložce Vysoký vepřový řízek je obsaženo: Omáčka fines herbes. Kompletní receptura položky: z plemene Duroc, omáčka fines herbes, bramborová kaše a bramborové křupky."
          },
          {
            "id": "veprovy-rizek-duroc-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Vysoký vepřový řízek?",
            "correctAnswer": "Bramborová kaše a bramborové křupky",
            "distractors": [
              "Zauzené rohlíčkové brambory",
              "Pivní sušenka"
            ],
            "explanation": "V podsložce Vysoký vepřový řízek je obsaženo: Bramborová kaše a bramborové křupky. Kompletní receptura položky: z plemene Duroc, omáčka fines herbes, bramborová kaše a bramborové křupky."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vysoký vepřový řízek obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Vysoký vepřový řízek obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Vysoký vepřový řízek obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Vysoký vepřový řízek obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprovy-rizek-duroc-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Vysoký vepřový řízek?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vysoký vepřový řízek obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "veprova-zebra",
        "name": "Vepřová žebra",
        "weight": "500g",
        "allergens": [
          "1",
          "3",
          "6",
          "7",
          "10"
        ],
        "description": "marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška",
        "price": "379 Kč",
        "notes": "Pomalu pečená žebra glazovaná pivem a jablečnou BBQ omáčkou.",
        "questions": [
          {
            "id": "veprova-zebra-vol",
            "question": "Jaká je gramáž porce podsložky Vepřová žebra?",
            "correctAnswer": "500g",
            "distractors": [
              "400 g",
              "600 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Vepřová žebra je 500g."
          },
          {
            "id": "veprova-zebra-ing-1",
            "question": "Která z následujících surovin patří do podsložky Vepřová žebra?",
            "correctAnswer": "Marinovaná a pečená s naším pivem",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Vepřová žebra je obsaženo: Marinovaná a pečená s naším pivem. Kompletní receptura položky: marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-2",
            "question": "Která z následujících surovin patří do podsložky Vepřová žebra?",
            "correctAnswer": "Kandovaná slanina",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Vepřová žebra je obsaženo: Kandovaná slanina. Kompletní receptura položky: marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-3",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Vepřová žebra?",
            "correctAnswer": "Perlové cibulky",
            "distractors": [
              "Sterilované feferonky",
              "Kvašené okurky (kvašáky)"
            ],
            "explanation": "V podsložce Vepřová žebra je obsaženo: Perlové cibulky. Kompletní receptura položky: marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-4",
            "question": "Která omáčka, dresink či redukce patří k podsložce Vepřová žebra?",
            "correctAnswer": "Jablečná bbq omáčka",
            "distractors": [
              "Koprová omáčka",
              "Sýr čedar"
            ],
            "explanation": "V podsložce Vepřová žebra je obsaženo: Jablečná bbq omáčka. Kompletní receptura položky: marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-5",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Vepřová žebra?",
            "correctAnswer": "Náš zelný salát s křenem",
            "distractors": [
              "Krůtí prsa",
              "Hovězí květová špička"
            ],
            "explanation": "V podsložce Vepřová žebra je obsaženo: Náš zelný salát s křenem. Kompletní receptura položky: marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-ing-6",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Vepřová žebra?",
            "correctAnswer": "Opečená česneková brioška",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Vepřová žebra je obsaženo: Opečená česneková brioška. Kompletní receptura položky: marinovaná a pečená s naším pivem, kandovaná slanina, perlové cibulky, jablečná bbq omáčka, náš zelný salát s křenem, opečená česneková brioška."
          },
          {
            "id": "veprova-zebra-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vepřová žebra obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Vepřová žebra obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-6",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra?",
            "correctAnswer": "Alergen č. 6 – Sójové boby (sója)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Vepřová žebra obsahuje Alergen č. 6 – Sójové boby (sója) (sójová omáčka, edamame, tofu, lecitin). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Vepřová žebra obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "veprova-zebra-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Vepřová žebra?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Vepřová žebra obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Sójové boby (sója) a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "hovezi-koprovka",
        "name": "Tažené hovězí maso s koprovou omáčkou",
        "weight": "200g",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "vejce, rohlíčkové brambory, koprový olej",
        "price": "345 Kč",
        "notes": "Křehké tažené maso v jemné smetanové omáčce s čerstvým koprem.",
        "questions": [
          {
            "id": "hovezi-koprovka-vol",
            "question": "Jaká je gramáž porce podsložky Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "200g",
            "distractors": [
              "150 g",
              "250 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Tažené hovězí maso s koprovou omáčkou je 200g."
          },
          {
            "id": "hovezi-koprovka-ing-1",
            "question": "Která z následujících surovin patří do podsložky Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Vejce",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Vejce. Kompletní receptura položky: vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-ing-2",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Rohlíčkové brambory",
            "distractors": [
              "Bramborová sláma",
              "Bramborová kaše"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Rohlíčkové brambory. Kompletní receptura položky: vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-ing-3",
            "question": "Která z následujících surovin patří do podsložky Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Koprový olej",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Tažené hovězí maso s koprovou omáčkou je obsaženo: Koprový olej. Kompletní receptura položky: vejce, rohlíčkové brambory, koprový olej."
          },
          {
            "id": "hovezi-koprovka-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Tažené hovězí maso s koprovou omáčkou obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "hovezi-koprovka-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Tažené hovězí maso s koprovou omáčkou obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "hovezi-koprovka-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Tažené hovězí maso s koprovou omáčkou?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Tažené hovězí maso s koprovou omáčkou obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "testoviny-kureci",
        "name": "Těstoviny plněné jemnou kuřecí směsí",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "zapečené v hříbkové omáčce, grilovaná hlíva ústřičná, bylinkový olej",
        "price": "299 Kč",
        "notes": "Domácí plněné těstoviny přelité lesní hříbkovou omáčkou.",
        "questions": [
          {
            "id": "testoviny-kureci-ing-1",
            "question": "Která z následujících surovin patří do podsložky Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Zapečené v hříbkové omáčce",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Těstoviny plněné jemnou kuřecí směsí je obsaženo: Zapečené v hříbkové omáčce. Kompletní receptura položky: zapečené v hříbkové omáčce, grilovaná hlíva ústřičná, bylinkový olej."
          },
          {
            "id": "testoviny-kureci-ing-2",
            "question": "Která z následujících surovin patří do podsložky Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Grilovaná hlíva ústřičná",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Těstoviny plněné jemnou kuřecí směsí je obsaženo: Grilovaná hlíva ústřičná. Kompletní receptura položky: zapečené v hříbkové omáčce, grilovaná hlíva ústřičná, bylinkový olej."
          },
          {
            "id": "testoviny-kureci-ing-3",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Bylinkový olej",
            "distractors": [
              "Hladkolistá petrželka",
              "Drcený kmín"
            ],
            "explanation": "V podsložce Těstoviny plněné jemnou kuřecí směsí je obsaženo: Bylinkový olej. Kompletní receptura položky: zapečené v hříbkové omáčce, grilovaná hlíva ústřičná, bylinkový olej."
          },
          {
            "id": "testoviny-kureci-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Těstoviny plněné jemnou kuřecí směsí obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "testoviny-kureci-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Těstoviny plněné jemnou kuřecí směsí obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "testoviny-kureci-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Těstoviny plněné jemnou kuřecí směsí?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Těstoviny plněné jemnou kuřecí směsí obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "shrimp-roll",
        "name": "Shrimp roll",
        "weight": "12ks",
        "allergens": [
          "1",
          "2",
          "3",
          "5",
          "7",
          "9",
          "10"
        ],
        "description": "12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka",
        "price": "666 Kč",
        "notes": "Luxusní krevetový roll v nadýchané máslové briošce.",
        "questions": [
          {
            "id": "shrimp-roll-vol",
            "question": "Jaká je velikost porce podsložky Shrimp roll?",
            "correctAnswer": "12ks",
            "distractors": [
              "8 ks",
              "16 ks"
            ],
            "explanation": "Gramáž / velikost porce podsložky Shrimp roll je 12ks."
          },
          {
            "id": "shrimp-roll-ing-1",
            "question": "Který sýr či mléčná přísada je součástí receptury Shrimp roll?",
            "correctAnswer": "12ks argentinských červených krevet v máslové briošce",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: 12ks argentinských červených krevet v máslové briošce. Kompletní receptura položky: 12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka."
          },
          {
            "id": "shrimp-roll-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Shrimp roll?",
            "correctAnswer": "Koktejlová omáčka s koňakem",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Koktejlová omáčka s koňakem. Kompletní receptura položky: 12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka."
          },
          {
            "id": "shrimp-roll-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Salátek",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Salátek. Kompletní receptura položky: 12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka."
          },
          {
            "id": "shrimp-roll-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Shrimp roll?",
            "correctAnswer": "Naše hranolky",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Naše hranolky. Kompletní receptura položky: 12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka."
          },
          {
            "id": "shrimp-roll-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce Shrimp roll?",
            "correctAnswer": "Choron omáčka",
            "distractors": [
              "Sýr čedar",
              "Lanýžová omáčka"
            ],
            "explanation": "V podsložce Shrimp roll je obsaženo: Choron omáčka. Kompletní receptura položky: 12ks argentinských červených krevet v máslové briošce, koktejlová omáčka s koňakem, salátek, naše hranolky, choron omáčka."
          },
          {
            "id": "shrimp-roll-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-5",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 5 – Jádra podzemnice olejné (arašídy) (arašídy, arašídový olej, satay). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "shrimp-roll-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Shrimp roll?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Shrimp roll obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Korýši a výrobky z nich, Vejce a výrobky z nich, Jádra podzemnice olejné (arašídy), Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "vykosteny-pstruh",
        "name": "Filátka vykostěného pstruha",
        "weight": "180g",
        "allergens": [
          "3",
          "4",
          "7"
        ],
        "description": "opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina",
        "price": "399 Kč",
        "notes": "Čerstvý pstruh z lokálního chovu bez kostí na přepuštěném másle.",
        "questions": [
          {
            "id": "vykosteny-pstruh-vol",
            "question": "Jaká je gramáž porce podsložky Filátka vykostěného pstruha?",
            "correctAnswer": "180g",
            "distractors": [
              "150 g",
              "200 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Filátka vykostěného pstruha je 180g."
          },
          {
            "id": "vykosteny-pstruh-ing-1",
            "question": "Která z následujících surovin patří do podsložky Filátka vykostěného pstruha?",
            "correctAnswer": "Opečená na másle",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Filátka vykostěného pstruha je obsaženo: Opečená na másle. Kompletní receptura položky: opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Filátka vykostěného pstruha?",
            "correctAnswer": "Choron omáčka",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Filátka vykostěného pstruha je obsaženo: Choron omáčka. Kompletní receptura položky: opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Filátka vykostěného pstruha?",
            "correctAnswer": "Pečená rajčátka",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Filátka vykostěného pstruha je obsaženo: Pečená rajčátka. Kompletní receptura položky: opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-4",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Filátka vykostěného pstruha?",
            "correctAnswer": "Bylinkový salát",
            "distractors": [
              "Mletý kardamom",
              "Čerstvý rozmarýn"
            ],
            "explanation": "V podsložce Filátka vykostěného pstruha je obsaženo: Bylinkový salát. Kompletní receptura položky: opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-ing-5",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Filátka vykostěného pstruha?",
            "correctAnswer": "Pečená zimní zelenina",
            "distractors": [
              "Nakládaný zázvor",
              "Okurčičky cornichons"
            ],
            "explanation": "V podsložce Filátka vykostěného pstruha je obsaženo: Pečená zimní zelenina. Kompletní receptura položky: opečená na másle, choron omáčka, pečená rajčátka, bylinkový salát, pečená zimní zelenina."
          },
          {
            "id": "vykosteny-pstruh-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Filátka vykostěného pstruha?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Filátka vykostěného pstruha obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "vykosteny-pstruh-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Filátka vykostěného pstruha?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Filátka vykostěného pstruha obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "vykosteny-pstruh-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Filátka vykostěného pstruha?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Filátka vykostěného pstruha obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "svickova-wellington",
        "name": "Svíčková Wellington",
        "weight": "200g",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "pečená dorůžova se směsí duxelles ochucené lanýži, koňaková omáčka, zauzené rohlíčkové brambory",
        "price": "675 Kč",
        "notes": "Hovězí svíčková zabalená v duxelles a máslovém listovém těstě.",
        "questions": [
          {
            "id": "svickova-wellington-vol",
            "question": "Jaká je gramáž porce podsložky Svíčková Wellington?",
            "correctAnswer": "200g",
            "distractors": [
              "150 g",
              "250 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Svíčková Wellington je 200g."
          },
          {
            "id": "svickova-wellington-ing-1",
            "question": "Která z následujících surovin patří do podsložky Svíčková Wellington?",
            "correctAnswer": "Pečená dorůžova se směsí duxelles ochucené lanýži",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Svíčková Wellington je obsaženo: Pečená dorůžova se směsí duxelles ochucené lanýži. Kompletní receptura položky: pečená dorůžova se směsí duxelles ochucené lanýži, koňaková omáčka, zauzené rohlíčkové brambory."
          },
          {
            "id": "svickova-wellington-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Svíčková Wellington?",
            "correctAnswer": "Koňaková omáčka",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Svíčková Wellington je obsaženo: Koňaková omáčka. Kompletní receptura položky: pečená dorůžova se směsí duxelles ochucené lanýži, koňaková omáčka, zauzené rohlíčkové brambory."
          },
          {
            "id": "svickova-wellington-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Svíčková Wellington?",
            "correctAnswer": "Zauzené rohlíčkové brambory",
            "distractors": [
              "Bramborové křupky",
              "Naše hranolky"
            ],
            "explanation": "V podsložce Svíčková Wellington je obsaženo: Zauzené rohlíčkové brambory. Kompletní receptura položky: pečená dorůžova se směsí duxelles ochucené lanýži, koňaková omáčka, zauzené rohlíčkové brambory."
          },
          {
            "id": "svickova-wellington-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "svickova-wellington-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "svickova-wellington-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "svickova-wellington-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Svíčková Wellington?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Svíčková Wellington obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "burger-foie-gras",
        "name": "Hovězí burger",
        "weight": "200g",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "s uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky",
        "price": "449 Kč",
        "notes": "Gurmánský burger s uzeným modrým sýrem a plátkem foie gras.",
        "questions": [
          {
            "id": "burger-foie-gras-vol",
            "question": "Jaká je gramáž porce podsložky Hovězí burger?",
            "correctAnswer": "200g",
            "distractors": [
              "150 g",
              "250 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Hovězí burger je 200g."
          },
          {
            "id": "burger-foie-gras-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Hovězí burger?",
            "correctAnswer": "S uzenou nivou a kachními foie gras",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Hovězí burger je obsaženo: S uzenou nivou a kachními foie gras. Kompletní receptura položky: s uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky."
          },
          {
            "id": "burger-foie-gras-ing-2",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Hovězí burger?",
            "correctAnswer": "Majonéza z pečené cibule",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce Hovězí burger je obsaženo: Majonéza z pečené cibule. Kompletní receptura položky: s uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky."
          },
          {
            "id": "burger-foie-gras-ing-3",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Hovězí burger?",
            "correctAnswer": "Bramborová sláma",
            "distractors": [
              "Naše hranolky",
              "Zauzené rohlíčkové brambory"
            ],
            "explanation": "V podsložce Hovězí burger je obsaženo: Bramborová sláma. Kompletní receptura položky: s uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky."
          },
          {
            "id": "burger-foie-gras-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Hovězí burger?",
            "correctAnswer": "Malé domácí hranolky",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce Hovězí burger je obsaženo: Malé domácí hranolky. Kompletní receptura položky: s uzenou nivou a kachními foie gras, majonéza z pečené cibule, bramborová sláma, malé domácí hranolky."
          },
          {
            "id": "burger-foie-gras-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí burger?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Hovězí burger obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "burger-foie-gras-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí burger?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Hovězí burger obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "burger-foie-gras-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Hovězí burger?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Hovězí burger obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "thors-hammer",
        "name": "Thor`s Hammer hovězí koleno",
        "weight": "700g",
        "allergens": [
          "1",
          "11"
        ],
        "description": "tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby",
        "price": "1490 Kč",
        "notes": "Monstrózní koleno na kosti tažené dlouhé hodiny v hliněné peci.",
        "questions": [
          {
            "id": "thors-hammer-vol",
            "question": "Jaká je gramáž porce podsložky Thor`s Hammer hovězí koleno?",
            "correctAnswer": "700g",
            "distractors": [
              "500 g",
              "800 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Thor`s Hammer hovězí koleno je 700g."
          },
          {
            "id": "thors-hammer-ing-1",
            "question": "Která z následujících surovin patří do podsložky Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Tažené v naší hliněné peci",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Thor`s Hammer hovězí koleno je obsaženo: Tažené v naší hliněné peci. Kompletní receptura položky: tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby."
          },
          {
            "id": "thors-hammer-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Omáčka z Kasteel Rouge",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Thor`s Hammer hovězí koleno je obsaženo: Omáčka z Kasteel Rouge. Kompletní receptura položky: tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby."
          },
          {
            "id": "thors-hammer-ing-3",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Pálené šalotky",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Thor`s Hammer hovězí koleno je obsaženo: Pálené šalotky. Kompletní receptura položky: tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby."
          },
          {
            "id": "thors-hammer-ing-4",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Opečená česneková brioška",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce Thor`s Hammer hovězí koleno je obsaženo: Opečená česneková brioška. Kompletní receptura položky: tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby."
          },
          {
            "id": "thors-hammer-ing-5",
            "question": "Která omáčka, dresink či redukce patří k podsložce Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Naše salsa verde",
            "distractors": [
              "Lanýžová omáčka",
              "Omáčka Choron"
            ],
            "explanation": "V podsložce Thor`s Hammer hovězí koleno je obsaženo: Naše salsa verde. Kompletní receptura položky: tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby."
          },
          {
            "id": "thors-hammer-ing-6",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Zauzené rohlíčkové brambory",
            "distractors": [
              "Kváskový chléb",
              "Bramborová sláma"
            ],
            "explanation": "V podsložce Thor`s Hammer hovězí koleno je obsaženo: Zauzené rohlíčkové brambory. Kompletní receptura položky: tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby."
          },
          {
            "id": "thors-hammer-ing-7",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Náš zelný salát s křenem. Pro 2 až 4 osoby",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Thor`s Hammer hovězí koleno je obsaženo: Náš zelný salát s křenem. Pro 2 až 4 osoby. Kompletní receptura položky: tažené v naší hliněné peci, omáčka z Kasteel Rouge, pálené šalotky, opečená česneková brioška, naše salsa verde, zauzené rohlíčkové brambory, náš zelný salát s křenem. Pro 2 až 4 osoby."
          },
          {
            "id": "thors-hammer-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Thor`s Hammer hovězí koleno obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Sezamová semena (sezam) a výrobky z nich."
          },
          {
            "id": "thors-hammer-allergen-11",
            "question": "Který z následujících alergenů obsahuje podsložka Thor`s Hammer hovězí koleno?",
            "correctAnswer": "Alergen č. 11 – Sezamová semena (sezam)",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Thor`s Hammer hovězí koleno obsahuje Alergen č. 11 – Sezamová semena (sezam) (sezamový olej, tahini, sezam na briošce). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Sezamová semena (sezam) a výrobky z nich."
          }
        ]
      }
    ]
  },
  {
    "id": "gril",
    "name": "Z grilu a pece na dřevo",
    "badge": "Z grilu a pece na dřevo",
    "description": "Speciality připravené na dřevěném uhlí a v hliněné peci",
    "iconName": "Flame",
    "items": [
      {
        "id": "us-prime-kvetova-spicka",
        "name": "US Prime hovězí květová špička",
        "weight": "250g",
        "allergens": [],
        "description": "opečené papričky Padrón",
        "price": "519 Kč",
        "notes": "Vyzrálý řez US Prime květové špičky (rump cap / picanha) grilovaný na dřevěném uhlí.",
        "questions": [
          {
            "id": "us-prime-kvetova-spicka-vol",
            "question": "Jaká je gramáž porce podsložky US Prime hovězí květová špička?",
            "correctAnswer": "250g",
            "distractors": [
              "200 g",
              "300 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky US Prime hovězí květová špička je 250g."
          },
          {
            "id": "us-prime-kvetova-spicka-ing-1",
            "question": "Která z následujících surovin patří do podsložky US Prime hovězí květová špička?",
            "correctAnswer": "Opečené papričky Padrón",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce US Prime hovězí květová špička je obsaženo: Opečené papričky Padrón. Kompletní receptura položky: opečené papričky Padrón."
          }
        ]
      },
      {
        "id": "us-prime-rostenec",
        "name": "US Prime vysoký roštěnec",
        "weight": "250g",
        "allergens": [],
        "description": "opečené papričky Padrón",
        "price": "985 Kč",
        "notes": "Špičkový mramorovaný ribeye steak z amerického chovu US Prime.",
        "questions": [
          {
            "id": "us-prime-rostenec-vol",
            "question": "Jaká je gramáž porce podsložky US Prime vysoký roštěnec?",
            "correctAnswer": "250g",
            "distractors": [
              "200 g",
              "300 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky US Prime vysoký roštěnec je 250g."
          },
          {
            "id": "us-prime-rostenec-ing-1",
            "question": "Která z následujících surovin patří do podsložky US Prime vysoký roštěnec?",
            "correctAnswer": "Opečené papričky Padrón",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce US Prime vysoký roštěnec je obsaženo: Opečené papričky Padrón. Kompletní receptura položky: opečené papričky Padrón."
          }
        ]
      },
      {
        "id": "us-prime-burger",
        "name": "US Prime hovězí burger",
        "weight": "200g",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "opečená slanina, čedar, cibulová marmeláda a pikantní majonéza",
        "price": "369 Kč",
        "notes": "Mleté vyzrálé maso z amerického býka US Prime na dřevěném uhlí.",
        "questions": [
          {
            "id": "us-prime-burger-vol",
            "question": "Jaká je gramáž porce podsložky US Prime hovězí burger?",
            "correctAnswer": "200g",
            "distractors": [
              "150 g",
              "250 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky US Prime hovězí burger je 200g."
          },
          {
            "id": "us-prime-burger-ing-1",
            "question": "Která z následujících surovin patří do podsložky US Prime hovězí burger?",
            "correctAnswer": "Opečená slanina",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Opečená slanina. Kompletní receptura položky: opečená slanina, čedar, cibulová marmeláda a pikantní majonéza."
          },
          {
            "id": "us-prime-burger-ing-2",
            "question": "Který sýr či mléčná přísada je součástí receptury US Prime hovězí burger?",
            "correctAnswer": "Čedar",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Čedar. Kompletní receptura položky: opečená slanina, čedar, cibulová marmeláda a pikantní majonéza."
          },
          {
            "id": "us-prime-burger-ing-3",
            "question": "Jaký druh cibulky či šalotky je součástí receptury US Prime hovězí burger?",
            "correctAnswer": "Cibulová marmeláda a pikantní majonéza",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce US Prime hovězí burger je obsaženo: Cibulová marmeláda a pikantní majonéza. Kompletní receptura položky: opečená slanina, čedar, cibulová marmeláda a pikantní majonéza."
          },
          {
            "id": "us-prime-burger-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "us-prime-burger-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "us-prime-burger-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "us-prime-burger-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka US Prime hovězí burger?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "US Prime hovězí burger obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "grilovany-bucek-yuzu",
        "name": "Grilovaný vepřový bůček",
        "weight": "300g",
        "allergens": [
          "2",
          "4",
          "6"
        ],
        "description": "karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimmichurri omáčka",
        "price": "299 Kč",
        "notes": "Křupavý bůček s citrusovým asijským yuzu a svěží bylinkovou omáčkou.",
        "questions": [
          {
            "id": "grilovany-bucek-yuzu-vol",
            "question": "Jaká je gramáž porce podsložky Grilovaný vepřový bůček?",
            "correctAnswer": "300g",
            "distractors": [
              "250 g",
              "350 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Grilovaný vepřový bůček je 300g."
          },
          {
            "id": "grilovany-bucek-yuzu-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Grilovaný vepřový bůček?",
            "correctAnswer": "Karamelizovaná yuzu omáčka",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Grilovaný vepřový bůček je obsaženo: Karamelizovaná yuzu omáčka. Kompletní receptura položky: karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimmichurri omáčka."
          },
          {
            "id": "grilovany-bucek-yuzu-ing-2",
            "question": "Jaký druh cibulky či šalotky je součástí receptury Grilovaný vepřový bůček?",
            "correctAnswer": "Grilovaná jarní cibulka",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce Grilovaný vepřový bůček je obsaženo: Grilovaná jarní cibulka. Kompletní receptura položky: karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimmichurri omáčka."
          },
          {
            "id": "grilovany-bucek-yuzu-ing-3",
            "question": "Která omáčka, dresink či redukce patří k podsložce Grilovaný vepřový bůček?",
            "correctAnswer": "Chimmichurri omáčka",
            "distractors": [
              "Libečková majonéza",
              "Pikantní zauzená majonéza"
            ],
            "explanation": "V podsložce Grilovaný vepřový bůček je obsaženo: Chimmichurri omáčka. Kompletní receptura položky: karamelizovaná yuzu omáčka, grilovaná jarní cibulka, chimmichurri omáčka."
          },
          {
            "id": "grilovany-bucek-yuzu-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka Grilovaný vepřový bůček?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Grilovaný vepřový bůček obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich, Ryby a výrobky z nich, Sójové boby (sója) a výrobky z nich."
          },
          {
            "id": "grilovany-bucek-yuzu-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Grilovaný vepřový bůček?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Grilovaný vepřový bůček obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich, Ryby a výrobky z nich, Sójové boby (sója) a výrobky z nich."
          },
          {
            "id": "grilovany-bucek-yuzu-allergen-6",
            "question": "Který z následujících alergenů obsahuje podsložka Grilovaný vepřový bůček?",
            "correctAnswer": "Alergen č. 6 – Sójové boby (sója)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Grilovaný vepřový bůček obsahuje Alergen č. 6 – Sójové boby (sója) (sójová omáčka, edamame, tofu, lecitin). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich, Ryby a výrobky z nich, Sójové boby (sója) a výrobky z nich."
          }
        ]
      },
      {
        "id": "nase-pastrami",
        "name": "Naše pastrami",
        "weight": "200g",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu, nakládaná zelenina",
        "price": "455 Kč",
        "notes": "Vlastní naložené a zauzené hovězí žebro pečené v hliněné peci.",
        "questions": [
          {
            "id": "nase-pastrami-vol",
            "question": "Jaká je gramáž porce podsložky Naše pastrami?",
            "correctAnswer": "200g",
            "distractors": [
              "150 g",
              "250 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Naše pastrami je 200g."
          },
          {
            "id": "nase-pastrami-ing-1",
            "question": "Která masová surovina tvoří základ podsložky Naše pastrami?",
            "correctAnswer": "Z US Prime hovězího žebra pečeného v hliněné peci",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Naše pastrami je obsaženo: Z US Prime hovězího žebra pečeného v hliněné peci. Kompletní receptura položky: z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-ing-2",
            "question": "Který sýr či mléčná přísada je součástí receptury Naše pastrami?",
            "correctAnswer": "Sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Naše pastrami je obsaženo: Sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu. Kompletní receptura položky: z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-ing-3",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Naše pastrami?",
            "correctAnswer": "Nakládaná zelenina",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Naše pastrami je obsaženo: Nakládaná zelenina. Kompletní receptura položky: z US Prime hovězího žebra pečeného v hliněné peci, sýr raclette a zelný salát s křenem v opečeném kváskovém chlebu, nakládaná zelenina."
          },
          {
            "id": "nase-pastrami-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Naše pastrami obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "nase-pastrami-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Naše pastrami obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "nase-pastrami-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Naše pastrami obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "nase-pastrami-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pastrami?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Naše pastrami obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "pecene-kure-pec",
        "name": "½ Kuře pečené v naší hliněné peci",
        "allergens": [
          "1",
          "4",
          "7",
          "10"
        ],
        "description": "jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)",
        "price": "279 Kč",
        "notes": "Šťavnatá půlka kuřete pečená v autentické hliněné peci, na výběr ze tří stylů úpravy.",
        "questions": [
          {
            "id": "pecene-kure-pec-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Jako BBQ potřené pikantní jablečnou omáčkou",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Jako BBQ potřené pikantní jablečnou omáčkou. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-2",
            "question": "Jaký druh cibulky či šalotky je součástí receptury ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Křupavá cibulka a bylinkové máslo (alergeny 1",
            "distractors": [
              "Kysané bílé zelí",
              "Nakládané perlové cibulky"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Křupavá cibulka a bylinkové máslo (alergeny 1. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-3",
            "question": "Která z následujících surovin patří do podsložky ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "7); jako TRUFFLE přelité lanýžovým máslem",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: 7); jako TRUFFLE přelité lanýžovým máslem. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Bramborové křupky",
            "distractors": [
              "Pivní sušenka",
              "Křupavé vepřové krekry"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Bramborové křupky. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-5",
            "question": "Která bylinka, koření či aromatická surovina dochucuje ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček",
            "distractors": [
              "Tymián",
              "Čerstvá pažitka"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-6",
            "question": "Která z následujících surovin patří do podsložky ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Parmezánu a hořčice",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Parmezánu a hořčice. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-7",
            "question": "Která z následujících surovin patří do podsložky ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Smažené kapary (alergeny 4",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: Smažené kapary (alergeny 4. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-8",
            "question": "Která z následujících surovin patří do podsložky ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "7",
            "distractors": [
              "Hovězí svíčková",
              "Vepřový bok Duroc"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: 7. Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-ing-9",
            "question": "Která z následujících surovin patří do podsložky ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "10)",
            "distractors": [
              "Jelení hřbet",
              "Jehněčí kotletka"
            ],
            "explanation": "V podsložce ½ Kuře pečené v naší hliněné peci je obsaženo: 10). Kompletní receptura položky: jako BBQ potřené pikantní jablečnou omáčkou, křupavá cibulka a bylinkové máslo (alergeny 1, 7); jako TRUFFLE přelité lanýžovým máslem, bramborové křupky, pažitka (alergen 7); jako CAESAR potřené omáčkou z ančoviček, parmezánu a hořčice, smažené kapary (alergeny 4, 7, 10)."
          },
          {
            "id": "pecene-kure-pec-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "½ Kuře pečené v naší hliněné peci obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "pecene-kure-pec-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "½ Kuře pečené v naší hliněné peci obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "pecene-kure-pec-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "½ Kuře pečené v naší hliněné peci obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "pecene-kure-pec-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka ½ Kuře pečené v naší hliněné peci?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "½ Kuře pečené v naší hliněné peci obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Ryby a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      }
    ]
  },
  {
    "id": "teple-omacky",
    "name": "Teplé omáčky",
    "badge": "Teplé omáčky",
    "description": "Domácí teplé omáčky připravované redukcí z poctivých vývarů a surovin",
    "iconName": "Soup",
    "items": [
      {
        "id": "omacka-konakova",
        "name": "Koňaková",
        "allergens": [
          "7",
          "9",
          "10"
        ],
        "description": "teplá koňaková omáčka",
        "price": "69 Kč",
        "notes": "Jemná redukce z telecího fondu se smetanou a francouzským koňakem.",
        "questions": [
          {
            "id": "omacka-konakova-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Koňaková?",
            "correctAnswer": "Teplá koňaková omáčka",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Koňaková je obsaženo: Teplá koňaková omáčka. Kompletní receptura položky: teplá koňaková omáčka."
          },
          {
            "id": "omacka-konakova-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Koňaková?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Koňaková obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-konakova-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Koňaková?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Koňaková obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-konakova-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Koňaková?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Koňaková obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "omacka-choron",
        "name": "Choron",
        "allergens": [
          "3",
          "10"
        ],
        "description": "teplá omáčka choron",
        "price": "69 Kč",
        "notes": "Klasická teplá emulgovaná bearnská omáčka zjemněná rajčatovým protlakem.",
        "questions": [
          {
            "id": "omacka-choron-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Choron?",
            "correctAnswer": "Teplá omáčka choron",
            "distractors": [
              "Naše salsa verde",
              "Višňová omáčka"
            ],
            "explanation": "V podsložce Choron je obsaženo: Teplá omáčka choron. Kompletní receptura položky: teplá omáčka choron."
          },
          {
            "id": "omacka-choron-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Choron?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Choron obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-choron-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Choron?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Choron obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "omacka-fines-herbes",
        "name": "Naše fines herbes",
        "allergens": [
          "4",
          "9",
          "10"
        ],
        "description": "teplá bylinková omáčka fines herbes",
        "price": "69 Kč",
        "notes": "Máslová omáčka s čerstvými bylinkami, petrželkou, pažitkou a kapkou ančoviček.",
        "questions": [
          {
            "id": "omacka-fines-herbes-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Naše fines herbes?",
            "correctAnswer": "Teplá bylinková omáčka fines herbes",
            "distractors": [
              "Libeček",
              "Estragon"
            ],
            "explanation": "V podsložce Naše fines herbes je obsaženo: Teplá bylinková omáčka fines herbes. Kompletní receptura položky: teplá bylinková omáčka fines herbes."
          },
          {
            "id": "omacka-fines-herbes-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka Naše fines herbes?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Naše fines herbes obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-fines-herbes-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Naše fines herbes?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Naše fines herbes obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-fines-herbes-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Naše fines herbes?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Naše fines herbes obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich, Celer a výrobky z něj, Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "omacka-lanyzova",
        "name": "Lanýžová",
        "allergens": [
          "7",
          "10"
        ],
        "description": "teplá krémová lanýžová omáčka",
        "price": "79 Kč",
        "notes": "Hustá smetanová omáčka s černými lanýži.",
        "questions": [
          {
            "id": "omacka-lanyzova-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Lanýžová?",
            "correctAnswer": "Teplá krémová lanýžová omáčka",
            "distractors": [
              "Naše salsa verde",
              "Višňová omáčka"
            ],
            "explanation": "V podsložce Lanýžová je obsaženo: Teplá krémová lanýžová omáčka. Kompletní receptura položky: teplá krémová lanýžová omáčka."
          },
          {
            "id": "omacka-lanyzova-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Lanýžová?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Lanýžová obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "omacka-lanyzova-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Lanýžová?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Lanýžová obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      }
    ]
  },
  {
    "id": "studene-omacky",
    "name": "Studené omáčky",
    "badge": "Studené omáčky",
    "description": "Čerstvé studené dipy a omáčky z bylinek a domácích surovin",
    "iconName": "Droplet",
    "items": [
      {
        "id": "omacka-pikantni-majo",
        "name": "Pikantní zauzená majonéza",
        "allergens": [
          "3",
          "7"
        ],
        "description": "pikantní zauzená majonéza",
        "price": "59 Kč",
        "notes": "Domácí majonéza s uzenou paprikou a kapkou chilli.",
        "questions": [
          {
            "id": "omacka-pikantni-majo-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Pikantní zauzená majonéza?",
            "correctAnswer": "Pikantní zauzená majonéza",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Pikantní zauzená majonéza je obsaženo: Pikantní zauzená majonéza. Kompletní receptura položky: pikantní zauzená majonéza."
          },
          {
            "id": "omacka-pikantni-majo-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Pikantní zauzená majonéza?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Pikantní zauzená majonéza obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "omacka-pikantni-majo-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Pikantní zauzená majonéza?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Pikantní zauzená majonéza obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "omacka-salsa-verde",
        "name": "Naše salsa verde",
        "allergens": [],
        "description": "naše čerstvá bylinková salsa verde",
        "price": "59 Kč",
        "notes": "Svěží zelená omáčka z čerstvých bylinek, olivového oleje a citronu.",
        "questions": [
          {
            "id": "omacka-salsa-verde-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Naše salsa verde?",
            "correctAnswer": "Naše čerstvá bylinková salsa verde",
            "distractors": [
              "Libeček",
              "Estragon"
            ],
            "explanation": "V podsložce Naše salsa verde je obsaženo: Naše čerstvá bylinková salsa verde. Kompletní receptura položky: naše čerstvá bylinková salsa verde."
          }
        ]
      },
      {
        "id": "omacka-chimichurri",
        "name": "Chimmichurri omáčka",
        "allergens": [],
        "description": "čerstvá bylinková chimmichurri omáčka",
        "price": "65 Kč",
        "notes": "Jihoamerická bylinková omáčka z petrželky, oregana, česneku a chilli.",
        "questions": [
          {
            "id": "omacka-chimichurri-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Chimmichurri omáčka?",
            "correctAnswer": "Čerstvá bylinková chimmichurri omáčka",
            "distractors": [
              "Libeček",
              "Estragon"
            ],
            "explanation": "V podsložce Chimmichurri omáčka je obsaženo: Čerstvá bylinková chimmichurri omáčka. Kompletní receptura položky: čerstvá bylinková chimmichurri omáčka."
          }
        ]
      },
      {
        "id": "omacka-kecup",
        "name": "Kečup",
        "allergens": [],
        "description": "tradiční rajčatový kečup",
        "price": "40 Kč",
        "notes": "Domácí jemně kořeněný kečup z vyzrálých rajčat.",
        "questions": [
          {
            "id": "omacka-kecup-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Kečup?",
            "correctAnswer": "Tradiční rajčatový kečup",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Kečup je obsaženo: Tradiční rajčatový kečup. Kompletní receptura položky: tradiční rajčatový kečup."
          }
        ]
      }
    ]
  },
  {
    "id": "prilohy",
    "name": "Přílohy",
    "badge": "Přílohy",
    "description": "Kvalitní přílohy připravované s láskou k detailu",
    "iconName": "Utensils",
    "items": [
      {
        "id": "nase-hranolky",
        "name": "Naše hranolky",
        "allergens": [],
        "description": "čerstvé smažené hranolky",
        "price": "89 Kč",
        "notes": "Dvakrát smažené čerstvé bramborové hranolky.",
        "questions": [
          {
            "id": "nase-hranolky-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Naše hranolky?",
            "correctAnswer": "Čerstvé smažené hranolky",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Naše hranolky je obsaženo: Čerstvé smažené hranolky. Kompletní receptura položky: čerstvé smažené hranolky."
          }
        ]
      },
      {
        "id": "hranolky-red-leicester",
        "name": "Hranolky",
        "allergens": [
          "3",
          "7"
        ],
        "description": "s lanýžovou majonézou a sýrem Red Leicester",
        "price": "149 Kč",
        "notes": "Naše hranolky přelité lanýžovou majonézou a sypané červeným čedarem Red Leicester.",
        "questions": [
          {
            "id": "hranolky-red-leicester-ing-1",
            "question": "Která omáčka, dresink či redukce patří k podsložce Hranolky?",
            "correctAnswer": "S lanýžovou majonézou a sýrem Red Leicester",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Hranolky je obsaženo: S lanýžovou majonézou a sýrem Red Leicester. Kompletní receptura položky: s lanýžovou majonézou a sýrem Red Leicester."
          },
          {
            "id": "hranolky-red-leicester-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Hranolky?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Hranolky obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "hranolky-red-leicester-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Hranolky?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Hranolky obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "bramborova-kase",
        "name": "Bramborová kaše",
        "allergens": [
          "7"
        ],
        "description": "máslo, bramborová sláma",
        "price": "89 Kč",
        "notes": "Hladká máslová bramborová kaše posypaná křupavou bramborovou slámou.",
        "questions": [
          {
            "id": "bramborova-kase-ing-1",
            "question": "Který sýr či mléčná přísada je součástí receptury Bramborová kaše?",
            "correctAnswer": "Máslo",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Bramborová kaše je obsaženo: Máslo. Kompletní receptura položky: máslo, bramborová sláma."
          },
          {
            "id": "bramborova-kase-ing-2",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Bramborová kaše?",
            "correctAnswer": "Bramborová sláma",
            "distractors": [
              "Bramborové křupky",
              "Naše hranolky"
            ],
            "explanation": "V podsložce Bramborová kaše je obsaženo: Bramborová sláma. Kompletní receptura položky: máslo, bramborová sláma."
          },
          {
            "id": "bramborova-kase-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Bramborová kaše?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Bramborová kaše obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "zauzene-rohlicek-brambory",
        "name": "Zauzené rohlíčkové brambory",
        "allergens": [
          "7"
        ],
        "description": "máslo",
        "price": "99 Kč",
        "notes": "Zauzené lojovité rohlíčkové brambory maštěné přepuštěným máslem.",
        "questions": [
          {
            "id": "zauzene-rohlicek-brambory-ing-1",
            "question": "Který sýr či mléčná přísada je součástí receptury Zauzené rohlíčkové brambory?",
            "correctAnswer": "Máslo",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Zauzené rohlíčkové brambory je obsaženo: Máslo. Kompletní receptura položky: máslo."
          },
          {
            "id": "zauzene-rohlicek-brambory-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Zauzené rohlíčkové brambory?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Zauzené rohlíčkové brambory obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "salat-trhane-listy",
        "name": "Salát z trhaných salátových listů",
        "allergens": [
          "10"
        ],
        "description": "a zeleného rajčete, pivní vinaigrette",
        "price": "129 Kč",
        "notes": "Čerstvé křupavé listy se zeleným rajčetem a zálivkou z piva a hořčice.",
        "questions": [
          {
            "id": "salat-trhane-listy-ing-1",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Salát z trhaných salátových listů?",
            "correctAnswer": "Zeleného rajčete",
            "distractors": [
              "Marinované šalotky",
              "Pečená kořenová zelenina"
            ],
            "explanation": "V podsložce Salát z trhaných salátových listů je obsaženo: Zeleného rajčete. Kompletní receptura položky: a zeleného rajčete, pivní vinaigrette."
          },
          {
            "id": "salat-trhane-listy-ing-2",
            "question": "Která z následujících surovin patří do podsložky Salát z trhaných salátových listů?",
            "correctAnswer": "Pivní vinaigrette",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Salát z trhaných salátových listů je obsaženo: Pivní vinaigrette. Kompletní receptura položky: a zeleného rajčete, pivní vinaigrette."
          },
          {
            "id": "salat-trhane-listy-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Salát z trhaných salátových listů?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 3 – Vejce a výrobky z nich"
            ],
            "explanation": "Salát z trhaných salátových listů obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "pecena-zimni-zelenina",
        "name": "Pečená zimní zelenina",
        "allergens": [
          "9"
        ],
        "description": "s kardamomem a javorovým sirupem",
        "price": "129 Kč",
        "notes": "Kořenová zimní zelenina glazuovaná javorovým sirupem a kardamomem.",
        "questions": [
          {
            "id": "pecena-zimni-zelenina-ing-1",
            "question": "Která bylinka, koření či aromatická surovina dochucuje Pečená zimní zelenina?",
            "correctAnswer": "S kardamomem a javorovým sirupem",
            "distractors": [
              "Libeček",
              "Estragon"
            ],
            "explanation": "V podsložce Pečená zimní zelenina je obsaženo: S kardamomem a javorovým sirupem. Kompletní receptura položky: s kardamomem a javorovým sirupem."
          },
          {
            "id": "pecena-zimni-zelenina-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka Pečená zimní zelenina?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Pečená zimní zelenina obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Celer a výrobky z něj."
          }
        ]
      },
      {
        "id": "zelny-salat-kren",
        "name": "Náš zelný salát s křenem",
        "allergens": [
          "3",
          "7",
          "11"
        ],
        "description": "rozinkami, vinným octem a majonézou",
        "price": "99 Kč",
        "notes": "Křupavý zelný salát s řízným strouhaným křenem, rozinkami a dresinkem.",
        "questions": [
          {
            "id": "zelny-salat-kren-ing-1",
            "question": "Která z následujících surovin patří do podsložky Náš zelný salát s křenem?",
            "correctAnswer": "Rozinkami",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Náš zelný salát s křenem je obsaženo: Rozinkami. Kompletní receptura položky: rozinkami, vinným octem a majonézou."
          },
          {
            "id": "zelny-salat-kren-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Náš zelný salát s křenem?",
            "correctAnswer": "Vinným octem a majonézou",
            "distractors": [
              "Višňová omáčka",
              "Jablečná BBQ omáčka"
            ],
            "explanation": "V podsložce Náš zelný salát s křenem je obsaženo: Vinným octem a majonézou. Kompletní receptura položky: rozinkami, vinným octem a majonézou."
          },
          {
            "id": "zelny-salat-kren-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Náš zelný salát s křenem?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Náš zelný salát s křenem obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Sezamová semena (sezam) a výrobky z nich."
          },
          {
            "id": "zelny-salat-kren-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Náš zelný salát s křenem?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Náš zelný salát s křenem obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Sezamová semena (sezam) a výrobky z nich."
          },
          {
            "id": "zelny-salat-kren-allergen-11",
            "question": "Který z následujících alergenů obsahuje podsložka Náš zelný salát s křenem?",
            "correctAnswer": "Alergen č. 11 – Sezamová semena (sezam)",
            "distractors": [
              "Alergen č. 1 – Obiloviny obsahující lepek",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Náš zelný salát s křenem obsahuje Alergen č. 11 – Sezamová semena (sezam) (sezamový olej, tahini, sezam na briošce). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Sezamová semena (sezam) a výrobky z nich."
          }
        ]
      },
      {
        "id": "cesnekova-brioska",
        "name": "Opečená česneková brioška",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "opečená česneková brioška",
        "price": "79 Kč",
        "notes": "Máslová brioška potřená česnekovým máslem a zapečená dorůžova.",
        "questions": [
          {
            "id": "cesnekova-brioska-ing-1",
            "question": "V jaké formě či úpravě je česnek součástí podsložky Opečená česneková brioška?",
            "correctAnswer": "Opečená česneková brioška",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Opečená česneková brioška je obsaženo: Opečená česneková brioška. Kompletní receptura položky: opečená česneková brioška."
          },
          {
            "id": "cesnekova-brioska-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Opečená česneková brioška?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Opečená česneková brioška obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "cesnekova-brioska-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Opečená česneková brioška?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Opečená česneková brioška obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "cesnekova-brioska-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Opečená česneková brioška?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Opečená česneková brioška obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "kvaskovy-chleb",
        "name": "Kváskový chléb",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "čerstvý kváskový chléb",
        "price": "45 Kč",
        "notes": "Krajíce poctivého řemeslného kváskového chleba s kmínem.",
        "questions": [
          {
            "id": "kvaskovy-chleb-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Kváskový chléb?",
            "correctAnswer": "Čerstvý kváskový chléb",
            "distractors": [
              "Máslová brioška",
              "Bramborová sláma"
            ],
            "explanation": "V podsložce Kváskový chléb je obsaženo: Čerstvý kváskový chléb. Kompletní receptura položky: čerstvý kváskový chléb."
          },
          {
            "id": "kvaskovy-chleb-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Kváskový chléb?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Kváskový chléb obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "kvaskovy-chleb-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Kváskový chléb?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Kváskový chléb obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "kvaskovy-chleb-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Kváskový chléb?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Kváskový chléb obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "dezerty",
    "name": "Dezerty",
    "badge": "Dezerty",
    "description": "Sladká tečka na závěr z naší cukrářské dílny",
    "iconName": "Cake",
    "items": [
      {
        "id": "dortik-ganache-sisky",
        "name": "Dortíky s ganache",
        "allergens": [
          "1",
          "3",
          "7",
          "8"
        ],
        "description": "ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka",
        "price": "209 Kč",
        "notes": "Originální dezert ve tvaru chmelové šišky z karamelové blond čokolády Valrhona Dulcey.",
        "questions": [
          {
            "id": "dortik-ganache-sisky-ing-1",
            "question": "Která z následujících surovin patří do podsložky Dortíky s ganache?",
            "correctAnswer": "Ve tvaru chmelových šišek z čokolády Valrhona Dulcey",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Dortíky s ganache je obsaženo: Ve tvaru chmelových šišek z čokolády Valrhona Dulcey. Kompletní receptura položky: ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka."
          },
          {
            "id": "dortik-ganache-sisky-ing-2",
            "question": "Která omáčka, dresink či redukce patří k podsložce Dortíky s ganache?",
            "correctAnswer": "Čokoládová hlína a višňová omáčka",
            "distractors": [
              "Jablečná BBQ omáčka",
              "Libečková majonéza"
            ],
            "explanation": "V podsložce Dortíky s ganache je obsaženo: Čokoládová hlína a višňová omáčka. Kompletní receptura položky: ve tvaru chmelových šišek z čokolády Valrhona Dulcey, čokoládová hlína a višňová omáčka."
          },
          {
            "id": "dortik-ganache-sisky-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Dortíky s ganache?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Dortíky s ganache obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          },
          {
            "id": "dortik-ganache-sisky-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Dortíky s ganache?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Dortíky s ganache obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          },
          {
            "id": "dortik-ganache-sisky-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Dortíky s ganache?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Dortíky s ganache obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          },
          {
            "id": "dortik-ganache-sisky-allergen-8",
            "question": "Který z následujících alergenů obsahuje podsložka Dortíky s ganache?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "Dortíky s ganache obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (vlašské ořechy, mandle, lískové ořechy). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Skořápkové plody (ořechy) a výrobky z nich."
          }
        ]
      },
      {
        "id": "karamelovy-trhanec",
        "name": "Karamelový trhanec",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "s pečenými švestkami, zmrzlina z vaječného likéru",
        "price": "169 Kč",
        "notes": "Nadýchaný rakouský trhanec se zkaramelizovaným cukrem a švestkami.",
        "questions": [
          {
            "id": "karamelovy-trhanec-ing-1",
            "question": "Která z následujících surovin patří do podsložky Karamelový trhanec?",
            "correctAnswer": "S pečenými švestkami",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Karamelový trhanec je obsaženo: S pečenými švestkami. Kompletní receptura položky: s pečenými švestkami, zmrzlina z vaječného likéru."
          },
          {
            "id": "karamelovy-trhanec-ing-2",
            "question": "Která z následujících surovin patří do podsložky Karamelový trhanec?",
            "correctAnswer": "Zmrzlina z vaječného likéru",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Karamelový trhanec je obsaženo: Zmrzlina z vaječného likéru. Kompletní receptura položky: s pečenými švestkami, zmrzlina z vaječného likéru."
          },
          {
            "id": "karamelovy-trhanec-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Karamelový trhanec?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Karamelový trhanec obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "karamelovy-trhanec-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Karamelový trhanec?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Karamelový trhanec obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "karamelovy-trhanec-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Karamelový trhanec?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Karamelový trhanec obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "pivni-zmrzlina",
        "name": "Naše pivní zmrzlina",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "se sladovou žmolenkou, šlehačka",
        "price": "139 Kč",
        "notes": "Domácí smetanová zmrzlina s infuzí tmavého piva a křupavým ječným sladem.",
        "questions": [
          {
            "id": "pivni-zmrzlina-ing-1",
            "question": "Která z následujících surovin patří do podsložky Naše pivní zmrzlina?",
            "correctAnswer": "Se sladovou žmolenkou",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Naše pivní zmrzlina je obsaženo: Se sladovou žmolenkou. Kompletní receptura položky: se sladovou žmolenkou, šlehačka."
          },
          {
            "id": "pivni-zmrzlina-ing-2",
            "question": "Která z následujících surovin patří do podsložky Naše pivní zmrzlina?",
            "correctAnswer": "Šlehačka",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Naše pivní zmrzlina je obsaženo: Šlehačka. Kompletní receptura položky: se sladovou žmolenkou, šlehačka."
          },
          {
            "id": "pivni-zmrzlina-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pivní zmrzlina?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Naše pivní zmrzlina obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "pivni-zmrzlina-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pivní zmrzlina?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Naše pivní zmrzlina obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "pivni-zmrzlina-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Naše pivní zmrzlina?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Naše pivní zmrzlina obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "pro-deti",
    "name": "Pro děti",
    "badge": "Pro děti",
    "description": "Oblíbená dětská jídla z kvalitních surovin a v menších porcích",
    "iconName": "Smile",
    "items": [
      {
        "id": "kureci-rizek",
        "name": "Kuřecí řízek",
        "weight": "100g",
        "allergens": [
          "1",
          "3",
          "7"
        ],
        "description": "bramborová kaše",
        "price": "125 Kč",
        "notes": "Jemný smažený kuřecí řízek s máslovou bramborovou kaší.",
        "questions": [
          {
            "id": "kureci-rizek-vol",
            "question": "Jaká je gramáž porce podsložky Kuřecí řízek?",
            "correctAnswer": "100g",
            "distractors": [
              "150 g",
              "200 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Kuřecí řízek je 100g."
          },
          {
            "id": "kureci-rizek-ing-1",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Kuřecí řízek?",
            "correctAnswer": "Bramborová kaše",
            "distractors": [
              "Máslová brioška",
              "Kváskový chléb"
            ],
            "explanation": "V podsložce Kuřecí řízek je obsaženo: Bramborová kaše. Kompletní receptura položky: bramborová kaše."
          },
          {
            "id": "kureci-rizek-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Kuřecí řízek?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "Kuřecí řízek obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "kureci-rizek-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Kuřecí řízek?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "Kuřecí řízek obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "kureci-rizek-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Kuřecí řízek?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "Kuřecí řízek obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "cheeseburger-deti",
        "name": "Cheeseburger",
        "weight": "100g",
        "allergens": [
          "1",
          "3",
          "7",
          "10"
        ],
        "description": "s čedarem, salátem, rajčaty a kečupem, domácí hranolky",
        "price": "129 Kč",
        "notes": "Dětský hovězí burger s čedarem, kečupem a křupavými hranolky.",
        "questions": [
          {
            "id": "cheeseburger-deti-vol",
            "question": "Jaká je gramáž porce podsložky Cheeseburger?",
            "correctAnswer": "100g",
            "distractors": [
              "150 g",
              "200 g"
            ],
            "explanation": "Gramáž / velikost porce podsložky Cheeseburger je 100g."
          },
          {
            "id": "cheeseburger-deti-ing-1",
            "question": "Který sýr či mléčná přísada je součástí receptury Cheeseburger?",
            "correctAnswer": "S čedarem",
            "distractors": [
              "Omáčka Choron",
              "Naše salsa verde"
            ],
            "explanation": "V podsložce Cheeseburger je obsaženo: S čedarem. Kompletní receptura položky: s čedarem, salátem, rajčaty a kečupem, domácí hranolky."
          },
          {
            "id": "cheeseburger-deti-ing-2",
            "question": "Kterou zeleninovou či ovocnou složku obsahuje podsložka Cheeseburger?",
            "correctAnswer": "Salátem",
            "distractors": [
              "Kachní prsa",
              "Vykoštěný pstruh"
            ],
            "explanation": "V podsložce Cheeseburger je obsaženo: Salátem. Kompletní receptura položky: s čedarem, salátem, rajčaty a kečupem, domácí hranolky."
          },
          {
            "id": "cheeseburger-deti-ing-3",
            "question": "Která omáčka, dresink či redukce patří k podsložce Cheeseburger?",
            "correctAnswer": "Rajčaty a kečupem",
            "distractors": [
              "Grilované papričky Padrón",
              "Sterilované feferonky"
            ],
            "explanation": "V podsložce Cheeseburger je obsaženo: Rajčaty a kečupem. Kompletní receptura položky: s čedarem, salátem, rajčaty a kečupem, domácí hranolky."
          },
          {
            "id": "cheeseburger-deti-ing-4",
            "question": "Jaká příloha, pečivo či křupavá složka doplňuje podsložku Cheeseburger?",
            "correctAnswer": "Domácí hranolky",
            "distractors": [
              "Zauzené rohlíčkové brambory",
              "Pivní sušenka"
            ],
            "explanation": "V podsložce Cheeseburger je obsaženo: Domácí hranolky. Kompletní receptura položky: s čedarem, salátem, rajčaty a kečupem, domácí hranolky."
          },
          {
            "id": "cheeseburger-deti-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Cheeseburger?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Cheeseburger obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "cheeseburger-deti-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka Cheeseburger?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "Cheeseburger obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "cheeseburger-deti-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Cheeseburger?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cheeseburger obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          },
          {
            "id": "cheeseburger-deti-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka Cheeseburger?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Cheeseburger obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy), Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "krupicova-kase",
        "name": "Krupicová kaše",
        "allergens": [
          "1",
          "7"
        ],
        "description": "z espumy s kakaem a máslem",
        "price": "119 Kč",
        "notes": "Nadýchaná jemná krupicová pěna z espumy s poctivým kakaem a máslem.",
        "questions": [
          {
            "id": "krupicova-kase-ing-1",
            "question": "Která z následujících surovin patří do podsložky Krupicová kaše?",
            "correctAnswer": "Z espumy s kakaem a máslem",
            "distractors": [
              "Vepřová panenka",
              "Telecí kýta"
            ],
            "explanation": "V podsložce Krupicová kaše je obsaženo: Z espumy s kakaem a máslem. Kompletní receptura položky: z espumy s kakaem a máslem."
          },
          {
            "id": "krupicova-kase-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka Krupicová kaše?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "Krupicová kaše obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "krupicova-kase-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka Krupicová kaše?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "Krupicová kaše obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      }
    ]
  },
  {
    "id": "pivo-na-cepu",
    "name": "Pivo na čepu",
    "badge": "Pivo na čepu",
    "description": "Čerstvě čepovaná piva z našeho pivovaru vařená sládkem Alešem Paikem a hostující speciály",
    "iconName": "Beer",
    "items": [
      {
        "id": "transfuze-12",
        "name": "TransFUZE 12",
        "weight": "0,3l / 0,5l",
        "price": "59/69 Kč",
        "allergens": [
          "1"
        ],
        "description": "náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný",
        "questions": [
          {
            "id": "transfuze-12-vol",
            "question": "Jaký je servírovací objem / míra položky TransFUZE 12?",
            "correctAnswer": "0,3l / 0,5l",
            "distractors": [
              "0,25 l / 0,4 l",
              "0,4 l / 0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky TransFUZE 12 je 0,3l / 0,5l."
          },
          {
            "id": "transfuze-12-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce TransFUZE 12?",
            "correctAnswer": "Náš tradiční ležák plzeňského typu",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky TransFUZE 12 je uvedeno: Náš tradiční ležák plzeňského typu. Kompletní popis: náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "transfuze-12-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce TransFUZE 12?",
            "correctAnswer": "Plné svěží chuti a vyvážené hořkosti",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky TransFUZE 12 je uvedeno: Plné svěží chuti a vyvážené hořkosti. Kompletní popis: náš tradiční ležák plzeňského typu, plné svěží chuti a vyvážené hořkosti, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "transfuze-12-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka TransFUZE 12?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "TransFUZE 12 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "disfuze-10",
        "name": "DisFuze 10",
        "weight": "0,3l / 0,5l",
        "price": "59/69 Kč",
        "allergens": [
          "1"
        ],
        "description": "světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí",
        "questions": [
          {
            "id": "disfuze-10-vol",
            "question": "Jaký je servírovací objem / míra položky DisFuze 10?",
            "correctAnswer": "0,3l / 0,5l",
            "distractors": [
              "0,25 l / 0,4 l",
              "0,4 l / 0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky DisFuze 10 je 0,3l / 0,5l."
          },
          {
            "id": "disfuze-10-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce DisFuze 10?",
            "correctAnswer": "Světlé výčepní pivo",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky DisFuze 10 je uvedeno: Světlé výčepní pivo. Kompletní popis: světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí."
          },
          {
            "id": "disfuze-10-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce DisFuze 10?",
            "correctAnswer": "Abv 3",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky DisFuze 10 je uvedeno: Abv 3. Kompletní popis: světlé výčepní pivo, Abv 3,5 %, česká klasika, poctivá desítka, velmi pitelné osvěžující pivo s vyšší hořkostí."
          },
          {
            "id": "disfuze-10-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka DisFuze 10?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "DisFuze 10 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "infuze-ipa-12",
        "name": "InFUZE IPA 12",
        "weight": "0,4l",
        "price": "85 Kč",
        "allergens": [
          "1"
        ],
        "description": "styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena",
        "questions": [
          {
            "id": "infuze-ipa-12-vol",
            "question": "Jaký je servírovací objem / míra položky InFUZE IPA 12?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky InFUZE IPA 12 je 0,4l."
          },
          {
            "id": "infuze-ipa-12-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce InFUZE IPA 12?",
            "correctAnswer": "Styl: Session IPA",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky InFUZE IPA 12 je uvedeno: Styl: Session IPA. Kompletní popis: styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce InFUZE IPA 12?",
            "correctAnswer": "12 stupňové pivo",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky InFUZE IPA 12 je uvedeno: 12 stupňové pivo. Kompletní popis: styl: Session IPA, 12 stupňové pivo, 4,9 % obj alk svrchně kvašené pivo, lehké osvěžující, nepasterizované, nefiltrované s citrusovým aroma, chmeleno za studena."
          },
          {
            "id": "infuze-ipa-12-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka InFUZE IPA 12?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "InFUZE IPA 12 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "fuzenac-13",
        "name": "FUZEnáč 13 polotmavý",
        "weight": "0,3l / 0,5l",
        "price": "69/78 Kč",
        "allergens": [
          "1"
        ],
        "description": "naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný",
        "questions": [
          {
            "id": "fuzenac-13-vol",
            "question": "Jaký je servírovací objem / míra položky FUZEnáč 13 polotmavý?",
            "correctAnswer": "0,3l / 0,5l",
            "distractors": [
              "0,25 l / 0,4 l",
              "0,4 l / 0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky FUZEnáč 13 polotmavý je 0,3l / 0,5l."
          },
          {
            "id": "fuzenac-13-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce FUZEnáč 13 polotmavý?",
            "correctAnswer": "Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky FUZEnáč 13 polotmavý je uvedeno: Naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma. Kompletní popis: naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzenac-13-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce FUZEnáč 13 polotmavý?",
            "correctAnswer": "Plná sladová uzená chuť",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky FUZEnáč 13 polotmavý je uvedeno: Plná sladová uzená chuť. Kompletní popis: naše spodně kvašené pivo jantarové barvy a výrazně kouřového aroma, plná sladová uzená chuť, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzenac-13-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka FUZEnáč 13 polotmavý?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "FUZEnáč 13 polotmavý obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "kasteel-rouge-18",
        "name": "Kasteel Rouge 18",
        "weight": "0,25l",
        "price": "118 Kč",
        "allergens": [
          "1"
        ],
        "description": "svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní",
        "questions": [
          {
            "id": "kasteel-rouge-18-vol",
            "question": "Jaký je servírovací objem / míra položky Kasteel Rouge 18?",
            "correctAnswer": "0,25l",
            "distractors": [
              "0,3 l",
              "0,33 l"
            ],
            "explanation": "Servírovací míra / objem položky Kasteel Rouge 18 je 0,25l."
          },
          {
            "id": "kasteel-rouge-18-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Kasteel Rouge 18?",
            "correctAnswer": "Svrchně kvašené",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Kasteel Rouge 18 je uvedeno: Svrchně kvašené. Kompletní popis: svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní."
          },
          {
            "id": "kasteel-rouge-18-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Kasteel Rouge 18?",
            "correctAnswer": "8% tmavé pivo 6 měsíců zrající na višních",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Kasteel Rouge 18 je uvedeno: 8% tmavé pivo 6 měsíců zrající na višních. Kompletní popis: svrchně kvašené, 8% tmavé pivo 6 měsíců zrající na višních, z belgického pivovaru Van Honsebrouck, s nádhernou chutí a plnou vůní zralých višní."
          },
          {
            "id": "kasteel-rouge-18-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka Kasteel Rouge 18?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Kasteel Rouge 18 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "zichovec-passion-fruit",
        "name": "Zichovec Passion Fruit 12",
        "weight": "0,4l",
        "price": "94 Kč",
        "allergens": [
          "1"
        ],
        "description": "Sour Ale, celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti",
        "questions": [
          {
            "id": "zichovec-passion-fruit-vol",
            "question": "Jaký je servírovací objem / míra položky Zichovec Passion Fruit 12?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Zichovec Passion Fruit 12 je 0,4l."
          },
          {
            "id": "zichovec-passion-fruit-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Zichovec Passion Fruit 12?",
            "correctAnswer": "Sour Ale",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Zichovec Passion Fruit 12 je uvedeno: Sour Ale. Kompletní popis: Sour Ale, celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti."
          },
          {
            "id": "zichovec-passion-fruit-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Zichovec Passion Fruit 12?",
            "correctAnswer": "Celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Zichovec Passion Fruit 12 je uvedeno: Celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti. Kompletní popis: Sour Ale, celoroční kyseláč opravdu výrazné kyselosti a intenzivní marakujové vůně a chuti."
          },
          {
            "id": "zichovec-passion-fruit-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka Zichovec Passion Fruit 12?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Zichovec Passion Fruit 12 obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "degustace-piv",
        "name": "Degustace piv",
        "weight": "6x 0,15l",
        "price": "285 Kč",
        "allergens": [
          "1"
        ],
        "description": "6 vzorků piv z naší nabídky na stylovém dřevěném prkýnku",
        "questions": [
          {
            "id": "degustace-piv-vol",
            "question": "Jaké je složení a porce degustačního setu Degustace piv?",
            "correctAnswer": "6x 0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Degustace piv je 6x 0,15l."
          },
          {
            "id": "degustace-piv-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Degustace piv?",
            "correctAnswer": "6 vzorků piv z naší nabídky na stylovém dřevěném prkýnku",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Degustace piv je uvedeno: 6 vzorků piv z naší nabídky na stylovém dřevěném prkýnku. Kompletní popis: 6 vzorků piv z naší nabídky na stylovém dřevěném prkýnku."
          },
          {
            "id": "degustace-piv-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka Degustace piv?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Degustace piv obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "fuzero",
        "name": "FUZEro",
        "weight": "0,4l",
        "price": "69 Kč",
        "allergens": [
          "1"
        ],
        "description": "náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou svěží chmelovou vůní, nepasterizovaný, nefiltrovaný",
        "questions": [
          {
            "id": "fuzero-vol",
            "question": "Jaký je servírovací objem / míra položky FUZEro?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky FUZEro je 0,4l."
          },
          {
            "id": "fuzero-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce FUZEro?",
            "correctAnswer": "Náš IPL",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky FUZEro je uvedeno: Náš IPL. Kompletní popis: náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce FUZEro?",
            "correctAnswer": "Nealko ležák chmelený americkým a za studena novozélandským chmelem",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky FUZEro je uvedeno: Nealko ležák chmelený americkým a za studena novozélandským chmelem. Kompletní popis: náš IPL, nealko ležák chmelený americkým a za studena novozélandským chmelem, s jemnou sladovou chutí, vyšší hořkostí v závěru a krásnou svěží chmelovou vůní, nepasterizovaný, nefiltrovaný."
          },
          {
            "id": "fuzero-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka FUZEro?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "FUZEro obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "maisels-weisse",
        "name": "Maisel´s Weisse Alkoholfrei /lahvové/",
        "weight": "0,33l",
        "price": "79 Kč",
        "allergens": [
          "1"
        ],
        "description": "bavorský Weizenbier, pšenice v nealkoholické podobě",
        "questions": [
          {
            "id": "maisels-weisse-vol",
            "question": "Jaký je servírovací objem / míra položky Maisel´s Weisse Alkoholfrei /lahvové/?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Maisel´s Weisse Alkoholfrei /lahvové/ je 0,33l."
          },
          {
            "id": "maisels-weisse-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Maisel´s Weisse Alkoholfrei /lahvové/?",
            "correctAnswer": "Bavorský Weizenbier",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Maisel´s Weisse Alkoholfrei /lahvové/ je uvedeno: Bavorský Weizenbier. Kompletní popis: bavorský Weizenbier, pšenice v nealkoholické podobě."
          },
          {
            "id": "maisels-weisse-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Maisel´s Weisse Alkoholfrei /lahvové/?",
            "correctAnswer": "Pšenice v nealkoholické podobě",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Maisel´s Weisse Alkoholfrei /lahvové/ je uvedeno: Pšenice v nealkoholické podobě. Kompletní popis: bavorský Weizenbier, pšenice v nealkoholické podobě."
          },
          {
            "id": "maisels-weisse-allergen-1",
            "question": "Který z následujících alergenů obsahuje položka Maisel´s Weisse Alkoholfrei /lahvové/?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "Maisel´s Weisse Alkoholfrei /lahvové/ obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu, kváskové pečivo, mouka, strouhanka). Všechny evidované alergeny: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "transfuze-sebou",
        "name": "TransFUZE",
        "weight": "0,5l",
        "price": "69 Kč",
        "allergens": [
          "1"
        ],
        "description": "odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
          {
            "id": "transfuze-sebou-vol",
            "question": "Jaký je objem balení piva TransFUZE s sebou?",
            "correctAnswer": "0,5l",
            "distractors": [
              "0,3l",
              "1,0l"
            ],
            "explanation": "Objem balení podsložky TransFUZE s sebou je 0,5l."
          },
          {
            "id": "transfuze-sebou-pkg",
            "question": "V jakém balení si můžete odnést pivo TransFUZE s sebou?",
            "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
            "distractors": [
              "Pouze ve skleněné zálohované lahvi",
              "V nerezovém party soudku 5l"
            ],
            "explanation": "TransFUZE: odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi."
          },
          {
            "id": "transfuze-sebou-allergen-1",
            "question": "Který z následujících alergenů obsahuje pivo TransFUZE?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "TransFUZE obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
          }
        ]
      },
      {
        "id": "disfuze-sebou",
        "name": "DisFUZE",
        "weight": "0,5l",
        "price": "69 Kč",
        "allergens": [
          "1"
        ],
        "description": "odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
          {
            "id": "disfuze-sebou-vol",
            "question": "Jaký je objem balení piva DisFUZE s sebou?",
            "correctAnswer": "0,5l",
            "distractors": [
              "0,3l",
              "1,0l"
            ],
            "explanation": "Objem balení podsložky DisFUZE s sebou je 0,5l."
          },
          {
            "id": "disfuze-sebou-pkg",
            "question": "V jakém balení si můžete odnést pivo DisFUZE s sebou?",
            "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
            "distractors": [
              "Pouze ve skleněné zálohované lahvi",
              "V nerezovém party soudku 5l"
            ],
            "explanation": "DisFUZE: odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi."
          },
          {
            "id": "disfuze-sebou-allergen-1",
            "question": "Který z následujících alergenů obsahuje pivo DisFUZE?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "DisFUZE obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
          }
        ]
      },
      {
        "id": "fuzenac-sebou",
        "name": "FUZEnáč",
        "weight": "0,5l",
        "price": "78 Kč",
        "allergens": [
          "1"
        ],
        "description": "odneste si své oblíbené pivko s sebou -v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
          {
            "id": "fuzenac-sebou-vol",
            "question": "Jaký je objem balení piva FUZEnáč s sebou?",
            "correctAnswer": "0,5l",
            "distractors": [
              "0,3l",
              "1,0l"
            ],
            "explanation": "Objem balení podsložky FUZEnáč s sebou je 0,5l."
          },
          {
            "id": "fuzenac-sebou-pkg",
            "question": "V jakém balení si můžete odnést pivo FUZEnáč s sebou?",
            "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
            "distractors": [
              "Pouze ve skleněné zálohované lahvi",
              "V nerezovém party soudku 5l"
            ],
            "explanation": "FUZEnáč: odneste si své oblíbené pivko s sebou -v plechovce a nebo čerstvě načepované v PET lahvi."
          },
          {
            "id": "fuzenac-sebou-allergen-1",
            "question": "Který z následujících alergenů obsahuje pivo FUZEnáč?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "FUZEnáč obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
          }
        ]
      },
      {
        "id": "infuze-sebou",
        "name": "InFUZE",
        "weight": "0,5l",
        "price": "106 Kč",
        "allergens": [
          "1"
        ],
        "description": "odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi",
        "notes": "Balení s sebou: v plechovce nebo čerstvě načepované v PET lahvi.",
        "questions": [
          {
            "id": "infuze-sebou-vol",
            "question": "Jaký je objem balení piva InFUZE s sebou?",
            "correctAnswer": "0,5l",
            "distractors": [
              "0,3l",
              "1,0l"
            ],
            "explanation": "Objem balení podsložky InFUZE s sebou je 0,5l."
          },
          {
            "id": "infuze-sebou-pkg",
            "question": "V jakém balení si můžete odnést pivo InFUZE s sebou?",
            "correctAnswer": "V plechovce a nebo čerstvě načepované v PET lahvi",
            "distractors": [
              "Pouze ve skleněné zálohované lahvi",
              "V nerezovém party soudku 5l"
            ],
            "explanation": "InFUZE: odneste si své oblíbené pivko s sebou - v plechovce a nebo čerstvě načepované v PET lahvi."
          },
          {
            "id": "infuze-sebou-allergen-1",
            "question": "Který z následujících alergenů obsahuje pivo InFUZE?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "InFUZE obsahuje Alergen č. 1 – Obiloviny obsahující lepek (slad v pivu)."
          }
        ]
      }
    ]
  },
  {
    "id": "cidery",
    "name": "Cidery",
    "badge": "Cidery",
    "description": "Přírodně fermentované řemeslné jablečné cidery ze slovenské rodinné farmy",
    "iconName": "Sparkles",
    "items": [
      {
        "id": "opre-cider",
        "name": "Opre` Cider",
        "weight": "0,33l",
        "price": "89 Kč",
        "allergens": [
          "12"
        ],
        "description": "řemeslný jablečný cider ze slovenské rodinné farmy",
        "questions": [
          {
            "id": "opre-cider-vol",
            "question": "Jaký je servírovací objem / míra položky Opre` Cider?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Opre` Cider je 0,33l."
          },
          {
            "id": "opre-cider-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Opre` Cider?",
            "correctAnswer": "Řemeslný jablečný cider ze slovenské rodinné farmy",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Opre` Cider je uvedeno: Řemeslný jablečný cider ze slovenské rodinné farmy. Kompletní popis: řemeslný jablečný cider ze slovenské rodinné farmy."
          },
          {
            "id": "opre-cider-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Opre` Cider?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Opre` Cider obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "opre-sour-cherry",
        "name": "Opre` Sour Cherry",
        "weight": "0,33l",
        "price": "96 Kč",
        "allergens": [
          "12"
        ],
        "description": "cider, který v sobě spojuje chuť jablečného cidru a osvěžující višňové šťávy",
        "questions": [
          {
            "id": "opre-sour-cherry-vol",
            "question": "Jaký je servírovací objem / míra položky Opre` Sour Cherry?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Opre` Sour Cherry je 0,33l."
          },
          {
            "id": "opre-sour-cherry-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Opre` Sour Cherry?",
            "correctAnswer": "Cider",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Opre` Sour Cherry je uvedeno: Cider. Kompletní popis: cider, který v sobě spojuje chuť jablečného cidru a osvěžující višňové šťávy."
          },
          {
            "id": "opre-sour-cherry-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Opre` Sour Cherry?",
            "correctAnswer": "Který v sobě spojuje chuť jablečného cidru a osvěžující višňové šťávy",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Opre` Sour Cherry je uvedeno: Který v sobě spojuje chuť jablečného cidru a osvěžující višňové šťávy. Kompletní popis: cider, který v sobě spojuje chuť jablečného cidru a osvěžující višňové šťávy."
          },
          {
            "id": "opre-sour-cherry-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Opre` Sour Cherry?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Opre` Sour Cherry obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "kombucha",
    "name": "Kombucha",
    "badge": "Kombucha",
    "description": "Živé, nepasterizované fermentované kombuchy s přírodními bylinami a ovocem",
    "iconName": "Sparkles",
    "items": [
      {
        "id": "appio-tatranske-byliny",
        "name": "Appio tatranské byliny",
        "weight": "0,33l",
        "price": "129 Kč",
        "allergens": [],
        "description": "Živá, přírodní, prémiová fermentovaná kombucha bez pasterizace s 10 druhy ručně sbíraných bylin přímo pod Tatrami",
        "notes": "Nepasterizovaná řemeslná kombucha s bylinami sbíranými pod Tatrami.",
        "questions": [
          {
            "id": "appio-tatranske-byliny-vol",
            "question": "Jaký je servírovací objem / míra podsložky Appio tatranské byliny?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25l",
              "0,5l"
            ],
            "explanation": "Servírovací objem podsložky Appio tatranské byliny je 0,33l."
          },
          {
            "id": "appio-tatranske-byliny-ing-1",
            "question": "Které byliny tvoří základ chuti podsložky Appio tatranské byliny?",
            "correctAnswer": "10 druhů ručně sbíraných bylin přímo pod Tatrami",
            "distractors": [
              "Sušené šípky a ibišek",
              "Lesní jahody a máta"
            ],
            "explanation": "V podsložce Appio tatranské byliny je obsaženo: 10 druhů ručně sbíraných bylin přímo pod Tatrami. Kompletní popis: Živá, přírodní, prémiová fermentovaná kombucha bez pasterizace s 10 druhy ručně sbíraných bylin přímo pod Tatrami."
          },
          {
            "id": "appio-tatranske-byliny-ing-2",
            "question": "Jakou technologií je vyrobena kombucha Appio tatranské byliny?",
            "correctAnswer": "Živá fermentace bez pasterizace",
            "distractors": [
              "Pasterizovaná filtrace",
              "Destilace za studena"
            ],
            "explanation": "Appio tatranské byliny je živá, přírodní, prémiová fermentovaná kombucha bez pasterizace."
          }
        ]
      },
      {
        "id": "oppio-tresen-skorice",
        "name": "Oppio třešeň a skořice",
        "weight": "0,33l",
        "price": "129 Kč",
        "allergens": [],
        "description": "sladká, hřejivá a jemně nostalgická chuť třešně se skořicí",
        "notes": "Jemně perlivá kombucha s příchutí třešně a hřejivé skořice.",
        "questions": [
          {
            "id": "oppio-tresen-skorice-vol",
            "question": "Jaký je servírovací objem / míra podsložky Oppio třešeň a skořice?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25l",
              "0,5l"
            ],
            "explanation": "Servírovací objem podsložky Oppio třešeň a skořice je 0,33l."
          },
          {
            "id": "oppio-tresen-skorice-ing-1",
            "question": "Která ovocná a kořeněná kombinace charakterizuje podsložku Oppio třešeň a skořice?",
            "correctAnswer": "Chuť třešně se skořicí",
            "distractors": [
              "Jablko se zázvorem",
              "Černý rybíz s badyánem"
            ],
            "explanation": "V podsložce Oppio třešeň a skořice je obsaženo: Chuť třešně se skořicí. Popis: sladká, hřejivá a jemně nostalgická chuť třešně se skořicí."
          },
          {
            "id": "oppio-tresen-skorice-ing-2",
            "question": "Jaký chuťový profil má podsložka Oppio třešeň a skořice?",
            "correctAnswer": "Sladká, hřejivá a jemně nostalgická chuť",
            "distractors": [
              "Výrazně kyselá a trpká chuť",
              "Hořká bylinná chuť"
            ],
            "explanation": "Oppio třešeň a skořice má sladkou, hřejivou a jemně nostalgickou chuť třešně se skořicí."
          }
        ]
      }
    ]
  },
  {
    "id": "vody-a-mineralni-vody",
    "name": "Vody a minerální vody",
    "badge": "Vody a minerální vody",
    "description": "Čerstvě filtrovaná voda a prémiové přírodní minerální vody",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "filtrovana-karafa",
        "name": "Filtrovaná voda v karafě",
        "weight": "0,75l",
        "price": "89 Kč",
        "allergens": [],
        "description": "neperlivá / perlivá filtrovaná voda v karafě",
        "questions": [
          {
            "id": "filtrovana-karafa-vol",
            "question": "Jaký je servírovací objem / míra položky Filtrovaná voda v karafě?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Filtrovaná voda v karafě je 0,75l."
          },
          {
            "id": "filtrovana-karafa-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Filtrovaná voda v karafě?",
            "correctAnswer": "Neperlivá / perlivá filtrovaná voda v karafě",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Filtrovaná voda v karafě je uvedeno: Neperlivá / perlivá filtrovaná voda v karafě. Kompletní popis: neperlivá / perlivá filtrovaná voda v karafě."
          }
        ]
      },
      {
        "id": "sklenice-filtrovane-vody",
        "name": "Sklenice filtrované vody",
        "weight": "0,3l",
        "price": "35 Kč",
        "allergens": [],
        "description": "neperlivá / perlivá sklenice filtrované vody",
        "questions": [
          {
            "id": "sklenice-filtrovane-vody-vol",
            "question": "Jaký je servírovací objem / míra položky Sklenice filtrované vody?",
            "correctAnswer": "0,3l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Sklenice filtrované vody je 0,3l."
          },
          {
            "id": "sklenice-filtrovane-vody-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Sklenice filtrované vody?",
            "correctAnswer": "Neperlivá / perlivá sklenice filtrované vody",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Sklenice filtrované vody je uvedeno: Neperlivá / perlivá sklenice filtrované vody. Kompletní popis: neperlivá / perlivá sklenice filtrované vody."
          }
        ]
      },
      {
        "id": "infuzovana-voda",
        "name": "Infuzovaná voda",
        "weight": "0,75l",
        "price": "99 Kč",
        "allergens": [],
        "description": "v karafě citrus / máta",
        "questions": [
          {
            "id": "infuzovana-voda-vol",
            "question": "Jaký je servírovací objem / míra položky Infuzovaná voda?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Infuzovaná voda je 0,75l."
          },
          {
            "id": "infuzovana-voda-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Infuzovaná voda?",
            "correctAnswer": "V karafě citrus / máta",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Infuzovaná voda je uvedeno: V karafě citrus / máta. Kompletní popis: v karafě citrus / máta."
          }
        ]
      },
      {
        "id": "mattoni-grand",
        "name": "Mattoni Grand neperlivá",
        "weight": "0,33l",
        "price": "45 Kč",
        "allergens": [],
        "description": "přírodní minerální voda dekarbonová",
        "questions": [
          {
            "id": "mattoni-grand-vol",
            "question": "Jaký je servírovací objem / míra položky Mattoni Grand neperlivá?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Mattoni Grand neperlivá je 0,33l."
          },
          {
            "id": "mattoni-grand-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Mattoni Grand neperlivá?",
            "correctAnswer": "Přírodní minerální voda dekarbonová",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Mattoni Grand neperlivá je uvedeno: Přírodní minerální voda dekarbonová. Kompletní popis: přírodní minerální voda dekarbonová."
          }
        ]
      },
      {
        "id": "vratislavicka-kyselka",
        "name": "Vratislavická kyselka",
        "weight": "0,75l",
        "price": "119 Kč",
        "allergens": [],
        "description": "přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená",
        "questions": [
          {
            "id": "vratislavicka-kyselka-vol",
            "question": "Jaký je servírovací objem / míra položky Vratislavická kyselka?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Vratislavická kyselka je 0,75l."
          },
          {
            "id": "vratislavicka-kyselka-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Vratislavická kyselka?",
            "correctAnswer": "Přírodní minerální voda středně mineralizovaná s obsahem křemíku",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Vratislavická kyselka je uvedeno: Přírodní minerální voda středně mineralizovaná s obsahem křemíku. Kompletní popis: přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená."
          },
          {
            "id": "vratislavicka-kyselka-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Vratislavická kyselka?",
            "correctAnswer": "Přirozeně sycená",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Vratislavická kyselka je uvedeno: Přirozeně sycená. Kompletní popis: přírodní minerální voda středně mineralizovaná s obsahem křemíku, přirozeně sycená."
          }
        ]
      }
    ]
  },
  {
    "id": "nase-domaci-limonady",
    "name": "Naše domácí limonády",
    "badge": "Naše domácí limonády",
    "description": "Domácí ovocné a bylinkové limonády připravované z poctivých surovin",
    "iconName": "CupSoda",
    "items": [
      {
        "id": "grep-a-mango",
        "name": "Grep a mango",
        "weight": "0,4l",
        "price": "84 Kč",
        "allergens": [],
        "description": "domácí limonáda grep a mango",
        "questions": [
          {
            "id": "grep-a-mango-vol",
            "question": "Jaký je servírovací objem / míra položky Grep a mango?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Grep a mango je 0,4l."
          },
          {
            "id": "grep-a-mango-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Grep a mango?",
            "correctAnswer": "Domácí limonáda grep a mango",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Grep a mango je uvedeno: Domácí limonáda grep a mango. Kompletní popis: domácí limonáda grep a mango."
          }
        ]
      },
      {
        "id": "malina-a-bila-cokolada",
        "name": "Malina a bílá čokoláda",
        "weight": "0,4l",
        "price": "84 Kč",
        "allergens": [],
        "description": "domácí limonáda malina a bílá čokoláda",
        "questions": [
          {
            "id": "malina-a-bila-cokolada-vol",
            "question": "Jaký je servírovací objem / míra položky Malina a bílá čokoláda?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Malina a bílá čokoláda je 0,4l."
          },
          {
            "id": "malina-a-bila-cokolada-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Malina a bílá čokoláda?",
            "correctAnswer": "Domácí limonáda malina a bílá čokoláda",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Malina a bílá čokoláda je uvedeno: Domácí limonáda malina a bílá čokoláda. Kompletní popis: domácí limonáda malina a bílá čokoláda."
          }
        ]
      },
      {
        "id": "svestka-a-kardamom",
        "name": "Švestka a kardamom",
        "weight": "0,4l",
        "price": "84 Kč",
        "allergens": [],
        "description": "domácí limonáda švestka a kardamom",
        "questions": [
          {
            "id": "svestka-a-kardamom-vol",
            "question": "Jaký je servírovací objem / míra položky Švestka a kardamom?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Švestka a kardamom je 0,4l."
          },
          {
            "id": "svestka-a-kardamom-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Švestka a kardamom?",
            "correctAnswer": "Domácí limonáda švestka a kardamom",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Švestka a kardamom je uvedeno: Domácí limonáda švestka a kardamom. Kompletní popis: domácí limonáda švestka a kardamom."
          }
        ]
      },
      {
        "id": "domaci-citronada",
        "name": "Domácí citronáda",
        "weight": "0,4l",
        "price": "84 Kč",
        "allergens": [],
        "description": "osvěžující domácí citronáda",
        "questions": [
          {
            "id": "domaci-citronada-vol",
            "question": "Jaký je servírovací objem / míra položky Domácí citronáda?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Domácí citronáda je 0,4l."
          },
          {
            "id": "domaci-citronada-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Domácí citronáda?",
            "correctAnswer": "Osvěžující domácí citronáda",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Domácí citronáda je uvedeno: Osvěžující domácí citronáda. Kompletní popis: osvěžující domácí citronáda."
          }
        ]
      },
      {
        "id": "nase-ledovy-caj",
        "name": "Náš domácí ledový čaj",
        "weight": "0,4l",
        "price": "86 Kč",
        "allergens": [],
        "description": "jasmín a broskev",
        "questions": [
          {
            "id": "nase-ledovy-caj-vol",
            "question": "Jaký je servírovací objem / míra položky Náš domácí ledový čaj?",
            "correctAnswer": "0,4l",
            "distractors": [
              "0,3 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Náš domácí ledový čaj je 0,4l."
          },
          {
            "id": "nase-ledovy-caj-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Náš domácí ledový čaj?",
            "correctAnswer": "Jasmín a broskev",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Náš domácí ledový čaj je uvedeno: Jasmín a broskev. Kompletní popis: jasmín a broskev."
          }
        ]
      },
      {
        "id": "fresh-juice",
        "name": "Fresh juice",
        "weight": "0,2l",
        "price": "125 Kč",
        "allergens": [],
        "description": "čerstvě lisovaná šťáva pomeranč / grep",
        "questions": [
          {
            "id": "fresh-juice-vol",
            "question": "Jaký je servírovací objem / míra položky Fresh juice?",
            "correctAnswer": "0,2l",
            "distractors": [
              "0,25 l",
              "0,33 l"
            ],
            "explanation": "Servírovací míra / objem položky Fresh juice je 0,2l."
          },
          {
            "id": "fresh-juice-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Fresh juice?",
            "correctAnswer": "Čerstvě lisovaná šťáva pomeranč / grep",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Fresh juice je uvedeno: Čerstvě lisovaná šťáva pomeranč / grep. Kompletní popis: čerstvě lisovaná šťáva pomeranč / grep."
          }
        ]
      }
    ]
  },
  {
    "id": "lahvove-limonady",
    "name": "Lahvové limonády",
    "badge": "Lahvové limonády",
    "description": "Prémiové lahvové limonády, toniky a nealkoholické nápoje",
    "iconName": "CupSoda",
    "items": [
      {
        "id": "coca-cola",
        "name": "Coca Cola / Coca Cola zero",
        "weight": "0,33l",
        "price": "65 Kč",
        "allergens": [],
        "description": "klasická Coca Cola nebo Coca Cola zero v lahvičce",
        "questions": [
          {
            "id": "coca-cola-vol",
            "question": "Jaký je servírovací objem / míra položky Coca Cola / Coca Cola zero?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Coca Cola / Coca Cola zero je 0,33l."
          },
          {
            "id": "coca-cola-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Coca Cola / Coca Cola zero?",
            "correctAnswer": "Klasická Coca Cola nebo Coca Cola zero v lahvičce",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Coca Cola / Coca Cola zero je uvedeno: Klasická Coca Cola nebo Coca Cola zero v lahvičce. Kompletní popis: klasická Coca Cola nebo Coca Cola zero v lahvičce."
          }
        ]
      },
      {
        "id": "thomas-henry-tonic",
        "name": "Thomas Henry Tonic",
        "weight": "0,2l",
        "price": "75 Kč",
        "allergens": [],
        "description": "prémiový suchý tonik s výraznou chininovou hořkostí",
        "questions": [
          {
            "id": "thomas-henry-tonic-vol",
            "question": "Jaký je servírovací objem / míra položky Thomas Henry Tonic?",
            "correctAnswer": "0,2l",
            "distractors": [
              "0,25 l",
              "0,33 l"
            ],
            "explanation": "Servírovací míra / objem položky Thomas Henry Tonic je 0,2l."
          },
          {
            "id": "thomas-henry-tonic-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Thomas Henry Tonic?",
            "correctAnswer": "Prémiový suchý tonik s výraznou chininovou hořkostí",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Thomas Henry Tonic je uvedeno: Prémiový suchý tonik s výraznou chininovou hořkostí. Kompletní popis: prémiový suchý tonik s výraznou chininovou hořkostí."
          }
        ]
      },
      {
        "id": "fever-tree-tonic",
        "name": "Fever-Tree Tonic",
        "weight": "0,2l",
        "price": "85 Kč",
        "allergens": [],
        "description": "prémiový tonik s přírodním chininem ze střední Afriky",
        "questions": [
          {
            "id": "fever-tree-tonic-vol",
            "question": "Jaký je servírovací objem / míra položky Fever-Tree Tonic?",
            "correctAnswer": "0,2l",
            "distractors": [
              "0,25 l",
              "0,33 l"
            ],
            "explanation": "Servírovací míra / objem položky Fever-Tree Tonic je 0,2l."
          },
          {
            "id": "fever-tree-tonic-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Fever-Tree Tonic?",
            "correctAnswer": "Prémiový tonik s přírodním chininem ze střední Afriky",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Fever-Tree Tonic je uvedeno: Prémiový tonik s přírodním chininem ze střední Afriky. Kompletní popis: prémiový tonik s přírodním chininem ze střední Afriky."
          }
        ]
      },
      {
        "id": "fever-tree-ginger-beer",
        "name": "Fever-Tree Ginger Beer",
        "weight": "0,2l",
        "price": "85 Kč",
        "allergens": [],
        "description": "zázvorové pivo ze tří druhů čerstvého zázvoru",
        "questions": [
          {
            "id": "fever-tree-ginger-beer-vol",
            "question": "Jaký je servírovací objem / míra položky Fever-Tree Ginger Beer?",
            "correctAnswer": "0,2l",
            "distractors": [
              "0,25 l",
              "0,33 l"
            ],
            "explanation": "Servírovací míra / objem položky Fever-Tree Ginger Beer je 0,2l."
          },
          {
            "id": "fever-tree-ginger-beer-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Fever-Tree Ginger Beer?",
            "correctAnswer": "Zázvorové pivo ze tří druhů čerstvého zázvoru",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Fever-Tree Ginger Beer je uvedeno: Zázvorové pivo ze tří druhů čerstvého zázvoru. Kompletní popis: zázvorové pivo ze tří druhů čerstvého zázvoru."
          }
        ]
      },
      {
        "id": "red-bull",
        "name": "Red Bull",
        "weight": "0,2l",
        "price": "99 Kč",
        "allergens": [],
        "description": "energetický nápoj v plechovce",
        "questions": [
          {
            "id": "red-bull-vol",
            "question": "Jaký je servírovací objem / míra položky Red Bull?",
            "correctAnswer": "0,2l",
            "distractors": [
              "0,25 l",
              "0,33 l"
            ],
            "explanation": "Servírovací míra / objem položky Red Bull je 0,2l."
          },
          {
            "id": "red-bull-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Red Bull?",
            "correctAnswer": "Energetický nápoj v plechovce",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Red Bull je uvedeno: Energetický nápoj v plechovce. Kompletní popis: energetický nápoj v plechovce."
          }
        ]
      }
    ]
  },
  {
    "id": "kava-caj-a-horke-napoje",
    "name": "Káva, čaj a horké nápoje",
    "badge": "Káva, čaj a horké nápoje",
    "description": "Výběrová káva, sypané čaje a hřejivé nápoje pro chvíle pohody",
    "iconName": "Coffee",
    "items": [
      {
        "id": "espresso",
        "name": "Espresso",
        "weight": "9g",
        "price": "66 Kč",
        "allergens": [],
        "description": "klasické espresso z výběrové kávy",
        "questions": [
          {
            "id": "espresso-vol",
            "question": "Jaká je navážka kávy u položky Espresso?",
            "correctAnswer": "9g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Espresso je 9g."
          },
          {
            "id": "espresso-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Espresso?",
            "correctAnswer": "Klasické espresso z výběrové kávy",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Espresso je uvedeno: Klasické espresso z výběrové kávy. Kompletní popis: klasické espresso z výběrové kávy."
          }
        ]
      },
      {
        "id": "espresso-macchiato",
        "name": "Espresso macchiato",
        "weight": "9g",
        "price": "78 Kč",
        "allergens": [
          "7"
        ],
        "description": "espresso s kapkou sametové mléčné pěny",
        "questions": [
          {
            "id": "espresso-macchiato-vol",
            "question": "Jaká je navážka kávy u položky Espresso macchiato?",
            "correctAnswer": "9g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Espresso macchiato je 9g."
          },
          {
            "id": "espresso-macchiato-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Espresso macchiato?",
            "correctAnswer": "Espresso s kapkou sametové mléčné pěny",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Espresso macchiato je uvedeno: Espresso s kapkou sametové mléčné pěny. Kompletní popis: espresso s kapkou sametové mléčné pěny."
          },
          {
            "id": "espresso-macchiato-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Espresso macchiato?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Espresso macchiato obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "cappuccino",
        "name": "Cappuccino",
        "weight": "9g",
        "price": "85 Kč",
        "allergens": [
          "7"
        ],
        "description": "espresso s horkým mlékem a jemnou mléčnou pěnou",
        "questions": [
          {
            "id": "cappuccino-vol",
            "question": "Jaká je navážka kávy u položky Cappuccino?",
            "correctAnswer": "9g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Cappuccino je 9g."
          },
          {
            "id": "cappuccino-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cappuccino?",
            "correctAnswer": "Espresso s horkým mlékem a jemnou mléčnou pěnou",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Cappuccino je uvedeno: Espresso s horkým mlékem a jemnou mléčnou pěnou. Kompletní popis: espresso s horkým mlékem a jemnou mléčnou pěnou."
          },
          {
            "id": "cappuccino-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Cappuccino?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Cappuccino obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "caffe-latte",
        "name": "Caffé latte",
        "weight": "9g",
        "price": "88 Kč",
        "allergens": [
          "7"
        ],
        "description": "jemná káva s velkou dávkou našlehaného mléka",
        "questions": [
          {
            "id": "caffe-latte-vol",
            "question": "Jaká je navážka kávy u položky Caffé latte?",
            "correctAnswer": "9g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Caffé latte je 9g."
          },
          {
            "id": "caffe-latte-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Caffé latte?",
            "correctAnswer": "Jemná káva s velkou dávkou našlehaného mléka",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Caffé latte je uvedeno: Jemná káva s velkou dávkou našlehaného mléka. Kompletní popis: jemná káva s velkou dávkou našlehaného mléka."
          },
          {
            "id": "caffe-latte-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Caffé latte?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Caffé latte obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "flat-white",
        "name": "Flat white",
        "weight": "18g",
        "price": "99 Kč",
        "allergens": [
          "7"
        ],
        "description": "dvojité espresso zjemněné sametovou mléčnou mikropěnou",
        "questions": [
          {
            "id": "flat-white-vol",
            "question": "Jaká je navážka kávy u položky Flat white?",
            "correctAnswer": "18g",
            "distractors": [
              "9 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Flat white je 18g."
          },
          {
            "id": "flat-white-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Flat white?",
            "correctAnswer": "Dvojité espresso zjemněné sametovou mléčnou mikropěnou",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Flat white je uvedeno: Dvojité espresso zjemněné sametovou mléčnou mikropěnou. Kompletní popis: dvojité espresso zjemněné sametovou mléčnou mikropěnou."
          },
          {
            "id": "flat-white-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Flat white?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Flat white obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "double-espresso",
        "name": "Double espresso",
        "weight": "18g",
        "price": "89 Kč",
        "allergens": [],
        "description": "dvojitá dávka espressa pro intenzivní chuť",
        "questions": [
          {
            "id": "double-espresso-vol",
            "question": "Jaká je navážka kávy u položky Double espresso?",
            "correctAnswer": "18g",
            "distractors": [
              "9 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Double espresso je 18g."
          },
          {
            "id": "double-espresso-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Double espresso?",
            "correctAnswer": "Dvojitá dávka espressa pro intenzivní chuť",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Double espresso je uvedeno: Dvojitá dávka espressa pro intenzivní chuť. Kompletní popis: dvojitá dávka espressa pro intenzivní chuť."
          }
        ]
      },
      {
        "id": "americano-lungo",
        "name": "Americano caffé / lungo",
        "weight": "9g",
        "price": "79 Kč",
        "allergens": [],
        "description": "espresso prodloužené horkou vodou",
        "questions": [
          {
            "id": "americano-lungo-vol",
            "question": "Jaká je navážka kávy u položky Americano caffé / lungo?",
            "correctAnswer": "9g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Americano caffé / lungo je 9g."
          },
          {
            "id": "americano-lungo-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Americano caffé / lungo?",
            "correctAnswer": "Espresso prodloužené horkou vodou",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Americano caffé / lungo je uvedeno: Espresso prodloužené horkou vodou. Kompletní popis: espresso prodloužené horkou vodou."
          }
        ]
      },
      {
        "id": "espresso-se-slehackou",
        "name": "Espresso káva se šlehačkou",
        "weight": "9g",
        "price": "85 Kč",
        "allergens": [
          "7"
        ],
        "description": "espresso káva dozdobená čerstvou šlehačkou",
        "questions": [
          {
            "id": "espresso-se-slehackou-vol",
            "question": "Jaká je navážka kávy u položky Espresso káva se šlehačkou?",
            "correctAnswer": "9g",
            "distractors": [
              "7 g",
              "14 g"
            ],
            "explanation": "Servírovací míra / objem položky Espresso káva se šlehačkou je 9g."
          },
          {
            "id": "espresso-se-slehackou-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Espresso káva se šlehačkou?",
            "correctAnswer": "Espresso káva dozdobená čerstvou šlehačkou",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Espresso káva se šlehačkou je uvedeno: Espresso káva dozdobená čerstvou šlehačkou. Kompletní popis: espresso káva dozdobená čerstvou šlehačkou."
          },
          {
            "id": "espresso-se-slehackou-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Espresso káva se šlehačkou?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Espresso káva se šlehačkou obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "sypany-caj",
        "name": "Sypaný čaj",
        "price": "89 Kč",
        "allergens": [],
        "description": "černý, zelený nebo ovocný sypaný čaj",
        "questions": [
          {
            "id": "sypany-caj-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Sypaný čaj?",
            "correctAnswer": "Černý",
            "distractors": [
              "Bezinkový sirup a čerstvá máta",
              "Tonik Thomas Henry s chininem"
            ],
            "explanation": "U položky Sypaný čaj je uvedeno: Černý. Kompletní popis: černý, zelený nebo ovocný sypaný čaj."
          },
          {
            "id": "sypany-caj-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Sypaný čaj?",
            "correctAnswer": "Zelený nebo ovocný sypaný čaj",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Sypaný čaj je uvedeno: Zelený nebo ovocný sypaný čaj. Kompletní popis: černý, zelený nebo ovocný sypaný čaj."
          }
        ]
      },
      {
        "id": "caj-mata-zazvor",
        "name": "Čaj s čerstvou mátou nebo zázvorem",
        "price": "89 Kč",
        "allergens": [],
        "description": "čaj z čerstvé máty nebo zázvoru s medem a citronem",
        "questions": [
          {
            "id": "caj-mata-zazvor-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Čaj s čerstvou mátou nebo zázvorem?",
            "correctAnswer": "Čaj z čerstvé máty nebo zázvoru s medem a citronem",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Čaj s čerstvou mátou nebo zázvorem je uvedeno: Čaj z čerstvé máty nebo zázvoru s medem a citronem. Kompletní popis: čaj z čerstvé máty nebo zázvoru s medem a citronem."
          }
        ]
      },
      {
        "id": "opre-gingerbread-cider",
        "name": "Opre` Gingerbread Cider",
        "weight": "0,33l",
        "price": "98 Kč",
        "allergens": [
          "12"
        ],
        "description": "horký perníkový cider s vůní hřebíčku a skořice",
        "questions": [
          {
            "id": "opre-gingerbread-cider-vol",
            "question": "Jaký je servírovací objem / míra položky Opre` Gingerbread Cider?",
            "correctAnswer": "0,33l",
            "distractors": [
              "0,25 l",
              "0,5 l"
            ],
            "explanation": "Servírovací míra / objem položky Opre` Gingerbread Cider je 0,33l."
          },
          {
            "id": "opre-gingerbread-cider-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Opre` Gingerbread Cider?",
            "correctAnswer": "Horký perníkový cider s vůní hřebíčku a skořice",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Opre` Gingerbread Cider je uvedeno: Horký perníkový cider s vůní hřebíčku a skořice. Kompletní popis: horký perníkový cider s vůní hřebíčku a skořice."
          },
          {
            "id": "opre-gingerbread-cider-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Opre` Gingerbread Cider?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Opre` Gingerbread Cider obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "horka-cokolada",
        "name": "Horká čokoláda",
        "price": "85 Kč",
        "allergens": [
          "7"
        ],
        "description": "horká čokoláda s čerstvou šlehačkou",
        "questions": [
          {
            "id": "horka-cokolada-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Horká čokoláda?",
            "correctAnswer": "Horká čokoláda s čerstvou šlehačkou",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Horká čokoláda je uvedeno: Horká čokoláda s čerstvou šlehačkou. Kompletní popis: horká čokoláda s čerstvou šlehačkou."
          },
          {
            "id": "horka-cokolada-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Horká čokoláda?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Horká čokoláda obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "chai-latte",
        "name": "Chai latte",
        "price": "99 Kč",
        "allergens": [
          "7"
        ],
        "description": "čaj se směsí exotického koření, cukru a horkého mléka",
        "questions": [
          {
            "id": "chai-latte-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Chai latte?",
            "correctAnswer": "Čaj se směsí exotického koření",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Chai latte je uvedeno: Čaj se směsí exotického koření. Kompletní popis: čaj se směsí exotického koření, cukru a horkého mléka."
          },
          {
            "id": "chai-latte-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Chai latte?",
            "correctAnswer": "Cukru a horkého mléka",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Chai latte je uvedeno: Cukru a horkého mléka. Kompletní popis: čaj se směsí exotického koření, cukru a horkého mléka."
          },
          {
            "id": "chai-latte-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Chai latte?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "Chai latte obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "svarene-vino",
        "name": "Svařené víno",
        "weight": "0,15l",
        "price": "85 Kč",
        "allergens": [
          "12"
        ],
        "description": "s kořením a pomerančem červené / bílé",
        "questions": [
          {
            "id": "svarene-vino-vol",
            "question": "Jaký je servírovací objem / míra položky Svařené víno?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Svařené víno je 0,15l."
          },
          {
            "id": "svarene-vino-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Svařené víno?",
            "correctAnswer": "S kořením a pomerančem červené / bílé",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Svařené víno je uvedeno: S kořením a pomerančem červené / bílé. Kompletní popis: s kořením a pomerančem červené / bílé."
          },
          {
            "id": "svarene-vino-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Svařené víno?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Svařené víno obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "vina-po-skle",
    "name": "Vína po skle",
    "badge": "Vína po skle",
    "description": "Pečlivě vybraná šumivá, bílá, růžová a červená vína rozlévaná po skle",
    "iconName": "Wine",
    "items": [
      {
        "id": "sklo-charmat-palava",
        "name": "Charmat de Vinselekt Pálava",
        "weight": "0,1l",
        "price": "99 Kč",
        "allergens": [
          "12"
        ],
        "description": "Vinselect Michlovský, Extra sec",
        "questions": [
          {
            "id": "sklo-charmat-palava-vol",
            "question": "Jaký je servírovací objem / míra položky Charmat de Vinselekt Pálava?",
            "correctAnswer": "0,1l",
            "distractors": [
              "0,15 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Charmat de Vinselekt Pálava je 0,1l."
          },
          {
            "id": "sklo-charmat-palava-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Charmat de Vinselekt Pálava?",
            "correctAnswer": "Vinselect Michlovský",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Charmat de Vinselekt Pálava je uvedeno: Vinselect Michlovský. Kompletní popis: Vinselect Michlovský, Extra sec."
          },
          {
            "id": "sklo-charmat-palava-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Charmat de Vinselekt Pálava?",
            "correctAnswer": "Extra sec",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Charmat de Vinselekt Pálava je uvedeno: Extra sec. Kompletní popis: Vinselect Michlovský, Extra sec."
          },
          {
            "id": "sklo-charmat-palava-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Charmat de Vinselekt Pálava?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Charmat de Vinselekt Pálava obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-cremant-vinselekt",
        "name": "Cremant de Vinselekt",
        "weight": "0,1l",
        "price": "115 Kč",
        "allergens": [
          "12"
        ],
        "description": "(Pinot, Chardonnay) Vinselect Michlovský, Extra brut",
        "questions": [
          {
            "id": "sklo-cremant-vinselekt-vol",
            "question": "Jaký je servírovací objem / míra položky Cremant de Vinselekt?",
            "correctAnswer": "0,1l",
            "distractors": [
              "0,15 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Cremant de Vinselekt je 0,1l."
          },
          {
            "id": "sklo-cremant-vinselekt-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cremant de Vinselekt?",
            "correctAnswer": "(Pinot",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Cremant de Vinselekt je uvedeno: (Pinot. Kompletní popis: (Pinot, Chardonnay) Vinselect Michlovský, Extra brut."
          },
          {
            "id": "sklo-cremant-vinselekt-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Cremant de Vinselekt?",
            "correctAnswer": "Chardonnay) Vinselect Michlovský",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Cremant de Vinselekt je uvedeno: Chardonnay) Vinselect Michlovský. Kompletní popis: (Pinot, Chardonnay) Vinselect Michlovský, Extra brut."
          },
          {
            "id": "sklo-cremant-vinselekt-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Cremant de Vinselekt?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cremant de Vinselekt obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-rulandske-sede",
        "name": "Rulandské šedé",
        "weight": "0,15l",
        "price": "95 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kolby Morava, polosuché",
        "questions": [
          {
            "id": "sklo-rulandske-sede-vol",
            "question": "Jaký je servírovací objem / míra položky Rulandské šedé?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Rulandské šedé je 0,15l."
          },
          {
            "id": "sklo-rulandske-sede-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Rulandské šedé?",
            "correctAnswer": "Kolby Morava",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Rulandské šedé je uvedeno: Kolby Morava. Kompletní popis: Kolby Morava, polosuché."
          },
          {
            "id": "sklo-rulandske-sede-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Rulandské šedé?",
            "correctAnswer": "Polosuché",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Rulandské šedé je uvedeno: Polosuché. Kompletní popis: Kolby Morava, polosuché."
          },
          {
            "id": "sklo-rulandske-sede-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Rulandské šedé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Rulandské šedé obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-cuvee-bile",
        "name": "Cuvée bílé",
        "weight": "0,15l",
        "price": "98 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kraus Čechy",
        "questions": [
          {
            "id": "sklo-cuvee-bile-vol",
            "question": "Jaký je servírovací objem / míra položky Cuvée bílé?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Cuvée bílé je 0,15l."
          },
          {
            "id": "sklo-cuvee-bile-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cuvée bílé?",
            "correctAnswer": "Kraus Čechy",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Cuvée bílé je uvedeno: Kraus Čechy. Kompletní popis: Kraus Čechy."
          },
          {
            "id": "sklo-cuvee-bile-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Cuvée bílé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cuvée bílé obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-gruner-veltliner",
        "name": "Grüner Veltliner",
        "weight": "0,15l",
        "price": "109 Kč",
        "allergens": [
          "12"
        ],
        "description": "Heuriger Rakousko",
        "questions": [
          {
            "id": "sklo-gruner-veltliner-vol",
            "question": "Jaký je servírovací objem / míra položky Grüner Veltliner?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Grüner Veltliner je 0,15l."
          },
          {
            "id": "sklo-gruner-veltliner-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Grüner Veltliner?",
            "correctAnswer": "Heuriger Rakousko",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Grüner Veltliner je uvedeno: Heuriger Rakousko. Kompletní popis: Heuriger Rakousko."
          },
          {
            "id": "sklo-gruner-veltliner-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Grüner Veltliner?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Grüner Veltliner obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-chardonnay",
        "name": "Chardonnay",
        "weight": "0,15l",
        "price": "125 Kč",
        "allergens": [
          "12"
        ],
        "description": "Adulation Kalifornie",
        "questions": [
          {
            "id": "sklo-chardonnay-vol",
            "question": "Jaký je servírovací objem / míra položky Chardonnay?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Chardonnay je 0,15l."
          },
          {
            "id": "sklo-chardonnay-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Chardonnay?",
            "correctAnswer": "Adulation Kalifornie",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Chardonnay je uvedeno: Adulation Kalifornie. Kompletní popis: Adulation Kalifornie."
          },
          {
            "id": "sklo-chardonnay-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Chardonnay?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Chardonnay obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-modry-portugal-rose",
        "name": "Modrý Portugal rosé",
        "weight": "0,15l",
        "price": "95 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kolby Morava",
        "questions": [
          {
            "id": "sklo-modry-portugal-rose-vol",
            "question": "Jaký je servírovací objem / míra položky Modrý Portugal rosé?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Modrý Portugal rosé je 0,15l."
          },
          {
            "id": "sklo-modry-portugal-rose-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Modrý Portugal rosé?",
            "correctAnswer": "Kolby Morava",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Modrý Portugal rosé je uvedeno: Kolby Morava. Kompletní popis: Kolby Morava."
          },
          {
            "id": "sklo-modry-portugal-rose-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Modrý Portugal rosé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Modrý Portugal rosé obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-modry-portugal",
        "name": "Modrý Portugal",
        "weight": "0,15l",
        "price": "95 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kolby Morava",
        "questions": [
          {
            "id": "sklo-modry-portugal-vol",
            "question": "Jaký je servírovací objem / míra položky Modrý Portugal?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Modrý Portugal je 0,15l."
          },
          {
            "id": "sklo-modry-portugal-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Modrý Portugal?",
            "correctAnswer": "Kolby Morava",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Modrý Portugal je uvedeno: Kolby Morava. Kompletní popis: Kolby Morava."
          },
          {
            "id": "sklo-modry-portugal-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Modrý Portugal?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Modrý Portugal obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-cuvee-cervene",
        "name": "Cuvée červené",
        "weight": "0,15l",
        "price": "98 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kraus Čechy",
        "questions": [
          {
            "id": "sklo-cuvee-cervene-vol",
            "question": "Jaký je servírovací objem / míra položky Cuvée červené?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Cuvée červené je 0,15l."
          },
          {
            "id": "sklo-cuvee-cervene-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cuvée červené?",
            "correctAnswer": "Kraus Čechy",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Cuvée červené je uvedeno: Kraus Čechy. Kompletní popis: Kraus Čechy."
          },
          {
            "id": "sklo-cuvee-cervene-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Cuvée červené?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cuvée červené obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "sklo-pinot-noir",
        "name": "Pinot Noir",
        "weight": "0,15l",
        "price": "125 Kč",
        "allergens": [
          "12"
        ],
        "description": "Adulation Kalifornie",
        "questions": [
          {
            "id": "sklo-pinot-noir-vol",
            "question": "Jaký je servírovací objem / míra položky Pinot Noir?",
            "correctAnswer": "0,15l",
            "distractors": [
              "0,1 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Pinot Noir je 0,15l."
          },
          {
            "id": "sklo-pinot-noir-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Pinot Noir?",
            "correctAnswer": "Adulation Kalifornie",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Pinot Noir je uvedeno: Adulation Kalifornie. Kompletní popis: Adulation Kalifornie."
          },
          {
            "id": "sklo-pinot-noir-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Pinot Noir?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Noir obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "aperitivy",
    "name": "Aperitivy",
    "badge": "Aperitivy",
    "description": "Klasické a šumivé aperitivy k povzbuzení chuti",
    "iconName": "Martini",
    "items": [
      {
        "id": "aperol-spritz",
        "name": "Aperol Spritz",
        "price": "155 Kč",
        "allergens": [],
        "description": "Aperol, charmat, soda",
        "questions": [
          {
            "id": "aperol-spritz-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Aperol Spritz?",
            "correctAnswer": "Aperol",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Aperol Spritz je uvedeno: Aperol. Kompletní popis: Aperol, charmat, soda."
          },
          {
            "id": "aperol-spritz-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Aperol Spritz?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Aperol Spritz je uvedeno: Charmat. Kompletní popis: Aperol, charmat, soda."
          }
        ]
      },
      {
        "id": "hugo-spritz",
        "name": "Hugo Spritz",
        "price": "155 Kč",
        "allergens": [],
        "description": "charmat, bezový elixír, limeta, máta, soda",
        "questions": [
          {
            "id": "hugo-spritz-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Hugo Spritz?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Hugo Spritz je uvedeno: Charmat. Kompletní popis: charmat, bezový elixír, limeta, máta, soda."
          },
          {
            "id": "hugo-spritz-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Hugo Spritz?",
            "correctAnswer": "Bezový elixír",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Hugo Spritz je uvedeno: Bezový elixír. Kompletní popis: charmat, bezový elixír, limeta, máta, soda."
          }
        ]
      },
      {
        "id": "mimosa",
        "name": "Mimosa",
        "price": "168 Kč",
        "allergens": [],
        "description": "charmat, pomerančový fresh, cukrový sirup",
        "questions": [
          {
            "id": "mimosa-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Mimosa?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Mimosa je uvedeno: Charmat. Kompletní popis: charmat, pomerančový fresh, cukrový sirup."
          },
          {
            "id": "mimosa-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Mimosa?",
            "correctAnswer": "Pomerančový fresh",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Mimosa je uvedeno: Pomerančový fresh. Kompletní popis: charmat, pomerančový fresh, cukrový sirup."
          }
        ]
      },
      {
        "id": "kir",
        "name": "Kir",
        "price": "165 Kč",
        "allergens": [],
        "description": "créme de cassis, charmat",
        "questions": [
          {
            "id": "kir-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Kir?",
            "correctAnswer": "Créme de cassis",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Kir je uvedeno: Créme de cassis. Kompletní popis: créme de cassis, charmat."
          },
          {
            "id": "kir-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Kir?",
            "correctAnswer": "Charmat",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Kir je uvedeno: Charmat. Kompletní popis: créme de cassis, charmat."
          }
        ]
      },
      {
        "id": "campari-bitter",
        "name": "Campari Bitter",
        "weight": "0,06l",
        "price": "87 Kč",
        "allergens": [],
        "description": "italský nahořklý bylinný aperitiv",
        "questions": [
          {
            "id": "campari-bitter-vol",
            "question": "Jaký je servírovací objem / míra položky Campari Bitter?",
            "correctAnswer": "0,06l",
            "distractors": [
              "0,04 l",
              "0,08 l"
            ],
            "explanation": "Servírovací míra / objem položky Campari Bitter je 0,06l."
          },
          {
            "id": "campari-bitter-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Campari Bitter?",
            "correctAnswer": "Italský nahořklý bylinný aperitiv",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Campari Bitter je uvedeno: Italský nahořklý bylinný aperitiv. Kompletní popis: italský nahořklý bylinný aperitiv."
          }
        ]
      },
      {
        "id": "martini-dry",
        "name": "Martini Dry",
        "weight": "0,08l",
        "price": "79 Kč",
        "allergens": [],
        "description": "suchý bílý italský vermut",
        "questions": [
          {
            "id": "martini-dry-vol",
            "question": "Jaký je servírovací objem / míra položky Martini Dry?",
            "correctAnswer": "0,08l",
            "distractors": [
              "0,05 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem položky Martini Dry je 0,08l."
          },
          {
            "id": "martini-dry-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Martini Dry?",
            "correctAnswer": "Suchý bílý italský vermut",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Martini Dry je uvedeno: Suchý bílý italský vermut. Kompletní popis: suchý bílý italský vermut."
          }
        ]
      },
      {
        "id": "cinzano-rosso-bianco",
        "name": "Cinzano Rosso / Bianco",
        "weight": "0,08l",
        "price": "79 Kč",
        "allergens": [],
        "description": "italský vermut červený nebo bílý",
        "questions": [
          {
            "id": "cinzano-rosso-bianco-vol",
            "question": "Jaký je servírovací objem / míra položky Cinzano Rosso / Bianco?",
            "correctAnswer": "0,08l",
            "distractors": [
              "0,05 l",
              "0,1 l"
            ],
            "explanation": "Servírovací míra / objem položky Cinzano Rosso / Bianco je 0,08l."
          },
          {
            "id": "cinzano-rosso-bianco-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cinzano Rosso / Bianco?",
            "correctAnswer": "Italský vermut červený nebo bílý",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Cinzano Rosso / Bianco je uvedeno: Italský vermut červený nebo bílý. Kompletní popis: italský vermut červený nebo bílý."
          }
        ]
      },
      {
        "id": "grahams-porto-10y",
        "name": "Grahams Porto Tawny 10y",
        "weight": "0,06l",
        "price": "225 Kč",
        "allergens": [
          "12"
        ],
        "description": "desetileté portugalské portské víno zrající v dubových sudech",
        "questions": [
          {
            "id": "grahams-porto-10y-vol",
            "question": "Jaký je servírovací objem / míra položky Grahams Porto Tawny 10y?",
            "correctAnswer": "0,06l",
            "distractors": [
              "0,04 l",
              "0,08 l"
            ],
            "explanation": "Servírovací míra / objem položky Grahams Porto Tawny 10y je 0,06l."
          },
          {
            "id": "grahams-porto-10y-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Grahams Porto Tawny 10y?",
            "correctAnswer": "Desetileté portugalské portské víno zrající v dubových sudech",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Grahams Porto Tawny 10y je uvedeno: Desetileté portugalské portské víno zrající v dubových sudech. Kompletní popis: desetileté portugalské portské víno zrající v dubových sudech."
          },
          {
            "id": "grahams-porto-10y-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Grahams Porto Tawny 10y?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Grahams Porto Tawny 10y obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "nealko-aperitivy",
    "name": "Nealko aperitivy a koktejly",
    "badge": "Nealko aperitivy a koktejly",
    "description": "Sofistikované osvěžující koktejly a aperitivy bez kapky alkoholu",
    "iconName": "Martini",
    "items": [
      {
        "id": "crodino",
        "name": "Crodino",
        "weight": "0,175l",
        "price": "109 Kč",
        "allergens": [],
        "description": "nealkoholický bitter",
        "questions": [
          {
            "id": "crodino-vol",
            "question": "Jaký je servírovací objem / míra položky Crodino?",
            "correctAnswer": "0,175l",
            "distractors": [
              "0,15 l",
              "0,2 l"
            ],
            "explanation": "Servírovací míra / objem položky Crodino je 0,175l."
          },
          {
            "id": "crodino-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Crodino?",
            "correctAnswer": "Nealkoholický bitter",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Crodino je uvedeno: Nealkoholický bitter. Kompletní popis: nealkoholický bitter."
          }
        ]
      },
      {
        "id": "martini-floreale-tonic",
        "name": "Martini Floreale Alcohol free & Thomas Henry Tonic",
        "price": "165 Kč",
        "allergens": [],
        "description": "nealkoholické Martini, tonik, sušený pomeranč",
        "questions": [
          {
            "id": "martini-floreale-tonic-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Martini Floreale Alcohol free & Thomas Henry Tonic?",
            "correctAnswer": "Nealkoholické Martini",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Martini Floreale Alcohol free & Thomas Henry Tonic je uvedeno: Nealkoholické Martini. Kompletní popis: nealkoholické Martini, tonik, sušený pomeranč."
          },
          {
            "id": "martini-floreale-tonic-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Martini Floreale Alcohol free & Thomas Henry Tonic?",
            "correctAnswer": "Tonik",
            "distractors": [
              "Pomerančová kůra a hřebíček",
              "Mučenkový likér a vanilka"
            ],
            "explanation": "U položky Martini Floreale Alcohol free & Thomas Henry Tonic je uvedeno: Tonik. Kompletní popis: nealkoholické Martini, tonik, sušený pomeranč."
          }
        ]
      },
      {
        "id": "bitter-soda-gasco",
        "name": "Bitter soda J.Gasco",
        "weight": "0,2l",
        "price": "115 Kč",
        "allergens": [],
        "description": "nealkoholický bitter soda",
        "questions": [
          {
            "id": "bitter-soda-gasco-vol",
            "question": "Jaký je servírovací objem / míra položky Bitter soda J.Gasco?",
            "correctAnswer": "0,2l",
            "distractors": [
              "0,25 l",
              "0,33 l"
            ],
            "explanation": "Servírovací míra / objem položky Bitter soda J.Gasco je 0,2l."
          },
          {
            "id": "bitter-soda-gasco-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Bitter soda J.Gasco?",
            "correctAnswer": "Nealkoholický bitter soda",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Bitter soda J.Gasco je uvedeno: Nealkoholický bitter soda. Kompletní popis: nealkoholický bitter soda."
          }
        ]
      },
      {
        "id": "tanqueray-00-tonic",
        "name": "Tanqueray Alcohol Free & Fever-Tree Tonic",
        "price": "199 Kč",
        "allergens": [],
        "description": "nealkoholický G&T s limetou",
        "questions": [
          {
            "id": "tanqueray-00-tonic-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Tanqueray Alcohol Free & Fever-Tree Tonic?",
            "correctAnswer": "Nealkoholický G&T s limetou",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Tanqueray Alcohol Free & Fever-Tree Tonic je uvedeno: Nealkoholický G&T s limetou. Kompletní popis: nealkoholický G&T s limetou."
          }
        ]
      }
    ]
  },
  {
    "id": "klasicke-koktejly",
    "name": "Klasické koktejly",
    "badge": "Klasické koktejly",
    "description": "Ikonické světové koktejly míchané podle originálních barových receptur",
    "iconName": "Martini",
    "items": [
      {
        "id": "negroni",
        "name": "Negroni",
        "price": "195 Kč",
        "allergens": [],
        "description": "gin, Campari, Cinzano rosso",
        "questions": [
          {
            "id": "negroni-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Negroni?",
            "correctAnswer": "Campari",
            "distractors": [
              "Kávový likér Kahlúa",
              "Zázvorové pivo Fever-Tree"
            ],
            "explanation": "U položky Negroni je uvedeno: Campari. Kompletní popis: gin, Campari, Cinzano rosso."
          },
          {
            "id": "negroni-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Negroni?",
            "correctAnswer": "Cinzano rosso",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Negroni je uvedeno: Cinzano rosso. Kompletní popis: gin, Campari, Cinzano rosso."
          }
        ]
      },
      {
        "id": "margarita",
        "name": "Margarita",
        "price": "185 Kč",
        "allergens": [],
        "description": "tequila, Cointreau, limetová šťáva",
        "questions": [
          {
            "id": "margarita-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Margarita?",
            "correctAnswer": "Tequila",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Margarita je uvedeno: Tequila. Kompletní popis: tequila, Cointreau, limetová šťáva."
          },
          {
            "id": "margarita-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Margarita?",
            "correctAnswer": "Cointreau",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Margarita je uvedeno: Cointreau. Kompletní popis: tequila, Cointreau, limetová šťáva."
          }
        ]
      },
      {
        "id": "mojito",
        "name": "Mojito",
        "price": "185 Kč",
        "allergens": [],
        "description": "rum, máta, limeta, třtinový cukr",
        "questions": [
          {
            "id": "mojito-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Mojito?",
            "correctAnswer": "Máta",
            "distractors": [
              "Pomerančová kůra a hřebíček",
              "Mučenkový likér a vanilka"
            ],
            "explanation": "U položky Mojito je uvedeno: Máta. Kompletní popis: rum, máta, limeta, třtinový cukr."
          },
          {
            "id": "mojito-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Mojito?",
            "correctAnswer": "Limeta",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Mojito je uvedeno: Limeta. Kompletní popis: rum, máta, limeta, třtinový cukr."
          }
        ]
      },
      {
        "id": "frozen-strawberry-daiquiri",
        "name": "Frozen Strawberry Daiquiri",
        "price": "195 Kč",
        "allergens": [],
        "description": "rum, limetová šťáva, cukrový sirup, jahody",
        "questions": [
          {
            "id": "frozen-strawberry-daiquiri-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Frozen Strawberry Daiquiri?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Frozen Strawberry Daiquiri je uvedeno: Limetová šťáva. Kompletní popis: rum, limetová šťáva, cukrový sirup, jahody."
          },
          {
            "id": "frozen-strawberry-daiquiri-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Frozen Strawberry Daiquiri?",
            "correctAnswer": "Cukrový sirup",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Frozen Strawberry Daiquiri je uvedeno: Cukrový sirup. Kompletní popis: rum, limetová šťáva, cukrový sirup, jahody."
          }
        ]
      },
      {
        "id": "cuba-libre",
        "name": "Cuba Libre",
        "price": "165 Kč",
        "allergens": [],
        "description": "rum, citrónová šťáva, Coca Cola",
        "questions": [
          {
            "id": "cuba-libre-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cuba Libre?",
            "correctAnswer": "Citrónová šťáva",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Cuba Libre je uvedeno: Citrónová šťáva. Kompletní popis: rum, citrónová šťáva, Coca Cola."
          },
          {
            "id": "cuba-libre-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Cuba Libre?",
            "correctAnswer": "Coca Cola",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Cuba Libre je uvedeno: Coca Cola. Kompletní popis: rum, citrónová šťáva, Coca Cola."
          }
        ]
      },
      {
        "id": "mai-tai",
        "name": "Mai-Tai",
        "price": "199 Kč",
        "allergens": [
          "8"
        ],
        "description": "bílý a tmavý rum, curacao, mandlový likér, limetová šťáva",
        "questions": [
          {
            "id": "mai-tai-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Mai-Tai?",
            "correctAnswer": "Bílý a tmavý rum",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Mai-Tai je uvedeno: Bílý a tmavý rum. Kompletní popis: bílý a tmavý rum, curacao, mandlový likér, limetová šťáva."
          },
          {
            "id": "mai-tai-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Mai-Tai?",
            "correctAnswer": "Curacao",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Mai-Tai je uvedeno: Curacao. Kompletní popis: bílý a tmavý rum, curacao, mandlový likér, limetová šťáva."
          },
          {
            "id": "mai-tai-allergen-8",
            "question": "Který z následujících alergenů obsahuje položka Mai-Tai?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Mai-Tai obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (mandle, vlašské ořechy, mandlový likér). Všechny evidované alergeny: Skořápkové plody (ořechy) a výrobky z nich."
          }
        ]
      },
      {
        "id": "porn-star-martini",
        "name": "Porn star Martini",
        "price": "232 Kč",
        "allergens": [],
        "description": "vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat",
        "questions": [
          {
            "id": "porn-star-martini-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Porn star Martini?",
            "correctAnswer": "Vanilková vodka",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Porn star Martini je uvedeno: Vanilková vodka. Kompletní popis: vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat."
          },
          {
            "id": "porn-star-martini-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Porn star Martini?",
            "correctAnswer": "Mučenkový likér",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Porn star Martini je uvedeno: Mučenkový likér. Kompletní popis: vanilková vodka, mučenkový likér, vanilkový sirup, limetová šťáva, charmat."
          }
        ]
      },
      {
        "id": "skinny-bitch",
        "name": "Skinny bitch",
        "price": "125 Kč",
        "allergens": [],
        "description": "vodka, limetová šťáva, soda",
        "questions": [
          {
            "id": "skinny-bitch-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Skinny bitch?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Skinny bitch je uvedeno: Vodka. Kompletní popis: vodka, limetová šťáva, soda."
          },
          {
            "id": "skinny-bitch-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Skinny bitch?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Belgické višňové pivo",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Skinny bitch je uvedeno: Limetová šťáva. Kompletní popis: vodka, limetová šťáva, soda."
          }
        ]
      },
      {
        "id": "cosmopolitan",
        "name": "Cosmopolitan",
        "price": "160 Kč",
        "allergens": [],
        "description": "vodka, Cointreau, brusinkový džus, limetová šťáva",
        "questions": [
          {
            "id": "cosmopolitan-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cosmopolitan?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Cosmopolitan je uvedeno: Vodka. Kompletní popis: vodka, Cointreau, brusinkový džus, limetová šťáva."
          },
          {
            "id": "cosmopolitan-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Cosmopolitan?",
            "correctAnswer": "Cointreau",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Cosmopolitan je uvedeno: Cointreau. Kompletní popis: vodka, Cointreau, brusinkový džus, limetová šťáva."
          }
        ]
      },
      {
        "id": "moscow-mule",
        "name": "Moscow mule",
        "price": "185 Kč",
        "allergens": [],
        "description": "vodka, limetová šťáva, ginger beer",
        "questions": [
          {
            "id": "moscow-mule-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Moscow mule?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Moscow mule je uvedeno: Vodka. Kompletní popis: vodka, limetová šťáva, ginger beer."
          },
          {
            "id": "moscow-mule-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Moscow mule?",
            "correctAnswer": "Limetová šťáva",
            "distractors": [
              "Černý sypaný čaj s bergamotem",
              "Jasmínový zelený čaj"
            ],
            "explanation": "U položky Moscow mule je uvedeno: Limetová šťáva. Kompletní popis: vodka, limetová šťáva, ginger beer."
          }
        ]
      },
      {
        "id": "french-martini",
        "name": "French Martini",
        "price": "195 Kč",
        "allergens": [],
        "description": "vodka, malinový likér, ananasový džus",
        "questions": [
          {
            "id": "french-martini-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce French Martini?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky French Martini je uvedeno: Vodka. Kompletní popis: vodka, malinový likér, ananasový džus."
          },
          {
            "id": "french-martini-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce French Martini?",
            "correctAnswer": "Malinový likér",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky French Martini je uvedeno: Malinový likér. Kompletní popis: vodka, malinový likér, ananasový džus."
          }
        ]
      },
      {
        "id": "espresso-martini",
        "name": "Espresso Martini",
        "price": "195 Kč",
        "allergens": [],
        "description": "vodka, Kahlúa, cukrový sirup, espresso",
        "questions": [
          {
            "id": "espresso-martini-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Espresso Martini?",
            "correctAnswer": "Vodka",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Espresso Martini je uvedeno: Vodka. Kompletní popis: vodka, Kahlúa, cukrový sirup, espresso."
          },
          {
            "id": "espresso-martini-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Espresso Martini?",
            "correctAnswer": "Kahlúa",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Espresso Martini je uvedeno: Kahlúa. Kompletní popis: vodka, Kahlúa, cukrový sirup, espresso."
          }
        ]
      },
      {
        "id": "paloma",
        "name": "Paloma",
        "price": "195 Kč",
        "allergens": [],
        "description": "tequila, limitován šťáva, agáve sirup, grepfruit J.Gasco Soda Rosa, sůl",
        "questions": [
          {
            "id": "paloma-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Paloma?",
            "correctAnswer": "Tequila",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Paloma je uvedeno: Tequila. Kompletní popis: tequila, limitován šťáva, agáve sirup, grepfruit J.Gasco Soda Rosa, sůl."
          },
          {
            "id": "paloma-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Paloma?",
            "correctAnswer": "Limitován šťáva",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Paloma je uvedeno: Limitován šťáva. Kompletní popis: tequila, limitován šťáva, agáve sirup, grepfruit J.Gasco Soda Rosa, sůl."
          }
        ]
      }
    ]
  },
  {
    "id": "koktejly-fuze",
    "name": "Koktejly fuze",
    "badge": "Koktejly fuze",
    "description": "Originální autorské koktejly vytvořené týmem barmanů restaurace FUZE",
    "iconName": "Martini",
    "items": [
      {
        "id": "truffle-negroni",
        "name": "Truffle Negroni",
        "price": "205 Kč",
        "allergens": [],
        "description": "truffle gin, Campari, Cinzano rosso",
        "questions": [
          {
            "id": "truffle-negroni-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Truffle Negroni?",
            "correctAnswer": "Truffle gin",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Truffle Negroni je uvedeno: Truffle gin. Kompletní popis: truffle gin, Campari, Cinzano rosso."
          },
          {
            "id": "truffle-negroni-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Truffle Negroni?",
            "correctAnswer": "Campari",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Truffle Negroni je uvedeno: Campari. Kompletní popis: truffle gin, Campari, Cinzano rosso."
          }
        ]
      },
      {
        "id": "fizzy-fuze",
        "name": "Fizzy Fuze",
        "price": "175 Kč",
        "allergens": [],
        "description": "gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda",
        "questions": [
          {
            "id": "fizzy-fuze-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Fizzy Fuze?",
            "correctAnswer": "Liči džus",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Fizzy Fuze je uvedeno: Liči džus. Kompletní popis: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          },
          {
            "id": "fizzy-fuze-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Fizzy Fuze?",
            "correctAnswer": "Ananasový džus",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Fizzy Fuze je uvedeno: Ananasový džus. Kompletní popis: gin, liči džus, ananasový džus, bezinkový sirup, limetová šťáva, soda."
          }
        ]
      },
      {
        "id": "florencia-fashion",
        "name": "Florencia Fashion",
        "price": "245 Kč",
        "allergens": [],
        "description": "whisky, švestkový sirup, čokoládový bitters",
        "questions": [
          {
            "id": "florencia-fashion-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Florencia Fashion?",
            "correctAnswer": "Whisky",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Florencia Fashion je uvedeno: Whisky. Kompletní popis: whisky, švestkový sirup, čokoládový bitters."
          },
          {
            "id": "florencia-fashion-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Florencia Fashion?",
            "correctAnswer": "Švestkový sirup",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Florencia Fashion je uvedeno: Švestkový sirup. Kompletní popis: whisky, švestkový sirup, čokoládový bitters."
          }
        ]
      },
      {
        "id": "am-spritz",
        "name": "A.M. Spritz",
        "price": "185 Kč",
        "allergens": [],
        "description": "crémant, gin, broskvový sirup, limetová šťáva",
        "questions": [
          {
            "id": "am-spritz-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce A.M. Spritz?",
            "correctAnswer": "Crémant",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky A.M. Spritz je uvedeno: Crémant. Kompletní popis: crémant, gin, broskvový sirup, limetová šťáva."
          },
          {
            "id": "am-spritz-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce A.M. Spritz?",
            "correctAnswer": "Broskvový sirup",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky A.M. Spritz je uvedeno: Broskvový sirup. Kompletní popis: crémant, gin, broskvový sirup, limetová šťáva."
          }
        ]
      },
      {
        "id": "passionata",
        "name": "Passionata",
        "price": "175 Kč",
        "allergens": [],
        "description": "rum, mučenka, melounový sirup, brusinkový džus",
        "questions": [
          {
            "id": "passionata-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Passionata?",
            "correctAnswer": "Mučenka",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Passionata je uvedeno: Mučenka. Kompletní popis: rum, mučenka, melounový sirup, brusinkový džus."
          },
          {
            "id": "passionata-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Passionata?",
            "correctAnswer": "Melounový sirup",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Passionata je uvedeno: Melounový sirup. Kompletní popis: rum, mučenka, melounový sirup, brusinkový džus."
          }
        ]
      }
    ]
  },
  {
    "id": "gin-a-tonic",
    "name": "Gin&tonic",
    "badge": "Gin&tonic",
    "description": "Perfektně vyladěné kombinace prémiových ginů a vybraných toniků",
    "iconName": "GlassWater",
    "items": [
      {
        "id": "gt-tanqueray",
        "name": "Tanqueray & Thomas Henry Tonic",
        "price": "188 Kč",
        "allergens": [],
        "description": "klasický s limetou",
        "questions": [
          {
            "id": "gt-tanqueray-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Tanqueray & Thomas Henry Tonic?",
            "correctAnswer": "Klasický s limetou",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Tanqueray & Thomas Henry Tonic je uvedeno: Klasický s limetou. Kompletní popis: klasický s limetou."
          }
        ]
      },
      {
        "id": "gt-fiesta-garage22",
        "name": "Fiesta Garage 22 & Guilti tonic lime",
        "price": "219 Kč",
        "allergens": [],
        "description": "zábavný s limetou",
        "questions": [
          {
            "id": "gt-fiesta-garage22-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Fiesta Garage 22 & Guilti tonic lime?",
            "correctAnswer": "Zábavný s limetou",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Fiesta Garage 22 & Guilti tonic lime je uvedeno: Zábavný s limetou. Kompletní popis: zábavný s limetou."
          }
        ]
      },
      {
        "id": "gt-hendricks",
        "name": "Hendrick`s & Thomas Henry Tonic",
        "price": "208 Kč",
        "allergens": [],
        "description": "svěží s okurkou",
        "questions": [
          {
            "id": "gt-hendricks-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Hendrick`s & Thomas Henry Tonic?",
            "correctAnswer": "Svěží s okurkou",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Hendrick`s & Thomas Henry Tonic je uvedeno: Svěží s okurkou. Kompletní popis: svěží s okurkou."
          }
        ]
      },
      {
        "id": "gt-endorphin-imagine",
        "name": "Endorphin Magic imaGINe & Fever-Tree Tonic",
        "price": "239 Kč",
        "allergens": [],
        "description": "iluzionistický s borůvkami",
        "questions": [
          {
            "id": "gt-endorphin-imagine-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Endorphin Magic imaGINe & Fever-Tree Tonic?",
            "correctAnswer": "Iluzionistický s borůvkami",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Endorphin Magic imaGINe & Fever-Tree Tonic je uvedeno: Iluzionistický s borůvkami. Kompletní popis: iluzionistický s borůvkami."
          }
        ]
      },
      {
        "id": "gt-flame-of-passion",
        "name": "Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic",
        "price": "228 Kč",
        "allergens": [],
        "description": "podmanivý se sušeným grepem",
        "questions": [
          {
            "id": "gt-flame-of-passion-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic?",
            "correctAnswer": "Podmanivý se sušeným grepem",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Flame of Passion Pink Gin & Thomas Henry Pink Grapefruit Tonic je uvedeno: Podmanivý se sušeným grepem. Kompletní popis: podmanivý se sušeným grepem."
          }
        ]
      },
      {
        "id": "gt-endorphin-copper-moon",
        "name": "Endorphin Copper Moon & Fever-Tree Mediterranean Tonic",
        "price": "228 Kč",
        "allergens": [],
        "description": "plný bylinek a pepře",
        "questions": [
          {
            "id": "gt-endorphin-copper-moon-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Endorphin Copper Moon & Fever-Tree Mediterranean Tonic?",
            "correctAnswer": "Plný bylinek a pepře",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Endorphin Copper Moon & Fever-Tree Mediterranean Tonic je uvedeno: Plný bylinek a pepře. Kompletní popis: plný bylinek a pepře."
          }
        ]
      }
    ]
  },
  {
    "id": "ovocne-destilaty",
    "name": "Ovocné destiláty 0,03l",
    "badge": "Ovocné destiláty",
    "description": "Špičkové české ovocné pálenky z vyhlášených řemeslných palíren",
    "iconName": "Flame",
    "items": [
      {
        "id": "slivovice-radlik",
        "name": "Slivovice",
        "weight": "0,03l",
        "price": "105 Kč",
        "allergens": [],
        "description": "Radlík, jemná švestková pálenka z oceňovaného lihovaru",
        "questions": [
          {
            "id": "slivovice-radlik-vol",
            "question": "Jaký je servírovací objem / míra položky Slivovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Slivovice je 0,03l."
          },
          {
            "id": "slivovice-radlik-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Slivovice?",
            "correctAnswer": "Radlík",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Slivovice je uvedeno: Radlík. Kompletní popis: Radlík, jemná švestková pálenka z oceňovaného lihovaru."
          },
          {
            "id": "slivovice-radlik-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Slivovice?",
            "correctAnswer": "Jemná švestková pálenka z oceňovaného lihovaru",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Slivovice je uvedeno: Jemná švestková pálenka z oceňovaného lihovaru. Kompletní popis: Radlík, jemná švestková pálenka z oceňovaného lihovaru."
          }
        ]
      },
      {
        "id": "slivovice-ze-sudu-radlik",
        "name": "Slivovice ze sudu",
        "weight": "0,03l",
        "price": "140 Kč",
        "allergens": [],
        "description": "Radlík, švestkový destilát dozrávající v dubových sudech",
        "questions": [
          {
            "id": "slivovice-ze-sudu-radlik-vol",
            "question": "Jaký je servírovací objem / míra položky Slivovice ze sudu?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Slivovice ze sudu je 0,03l."
          },
          {
            "id": "slivovice-ze-sudu-radlik-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Slivovice ze sudu?",
            "correctAnswer": "Radlík",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Slivovice ze sudu je uvedeno: Radlík. Kompletní popis: Radlík, švestkový destilát dozrávající v dubových sudech."
          },
          {
            "id": "slivovice-ze-sudu-radlik-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Slivovice ze sudu?",
            "correctAnswer": "Švestkový destilát dozrávající v dubových sudech",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Slivovice ze sudu je uvedeno: Švestkový destilát dozrávající v dubových sudech. Kompletní popis: Radlík, švestkový destilát dozrávající v dubových sudech."
          }
        ]
      },
      {
        "id": "hruskovice-skanzen",
        "name": "Hruškovice Williams",
        "weight": "0,03l",
        "price": "110 Kč",
        "allergens": [],
        "description": "Skanzen, poctivý hruškový destilát z aromatických hrušek Williams",
        "questions": [
          {
            "id": "hruskovice-skanzen-vol",
            "question": "Jaký je servírovací objem / míra položky Hruškovice Williams?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Hruškovice Williams je 0,03l."
          },
          {
            "id": "hruskovice-skanzen-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Hruškovice Williams?",
            "correctAnswer": "Skanzen",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Hruškovice Williams je uvedeno: Skanzen. Kompletní popis: Skanzen, poctivý hruškový destilát z aromatických hrušek Williams."
          },
          {
            "id": "hruskovice-skanzen-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Hruškovice Williams?",
            "correctAnswer": "Poctivý hruškový destilát z aromatických hrušek Williams",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Hruškovice Williams je uvedeno: Poctivý hruškový destilát z aromatických hrušek Williams. Kompletní popis: Skanzen, poctivý hruškový destilát z aromatických hrušek Williams."
          }
        ]
      },
      {
        "id": "hruskovice-ze-sudu-radlik",
        "name": "Hruškovice ze sudu",
        "weight": "0,03l",
        "price": "140 Kč",
        "allergens": [],
        "description": "Radlík, hruškový destilát zušlechtěný v dřevěných sudech",
        "questions": [
          {
            "id": "hruskovice-ze-sudu-radlik-vol",
            "question": "Jaký je servírovací objem / míra položky Hruškovice ze sudu?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Hruškovice ze sudu je 0,03l."
          },
          {
            "id": "hruskovice-ze-sudu-radlik-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Hruškovice ze sudu?",
            "correctAnswer": "Radlík",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Hruškovice ze sudu je uvedeno: Radlík. Kompletní popis: Radlík, hruškový destilát zušlechtěný v dřevěných sudech."
          },
          {
            "id": "hruskovice-ze-sudu-radlik-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Hruškovice ze sudu?",
            "correctAnswer": "Hruškový destilát zušlechtěný v dřevěných sudech",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Hruškovice ze sudu je uvedeno: Hruškový destilát zušlechtěný v dřevěných sudech. Kompletní popis: Radlík, hruškový destilát zušlechtěný v dřevěných sudech."
          }
        ]
      },
      {
        "id": "merunkovice-svach",
        "name": "Meruňkovice",
        "weight": "0,03l",
        "price": "120 Kč",
        "allergens": [],
        "description": "Svach, voňavá meruňková pálenka z jihočeské palírny Svach",
        "questions": [
          {
            "id": "merunkovice-svach-vol",
            "question": "Jaký je servírovací objem / míra položky Meruňkovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Meruňkovice je 0,03l."
          },
          {
            "id": "merunkovice-svach-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Meruňkovice?",
            "correctAnswer": "Svach",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Meruňkovice je uvedeno: Svach. Kompletní popis: Svach, voňavá meruňková pálenka z jihočeské palírny Svach."
          },
          {
            "id": "merunkovice-svach-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Meruňkovice?",
            "correctAnswer": "Voňavá meruňková pálenka z jihočeské palírny Svach",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Meruňkovice je uvedeno: Voňavá meruňková pálenka z jihočeské palírny Svach. Kompletní popis: Svach, voňavá meruňková pálenka z jihočeské palírny Svach."
          }
        ]
      },
      {
        "id": "visnovice-zubri",
        "name": "Višňovice",
        "weight": "0,03l",
        "price": "98 Kč",
        "allergens": [],
        "description": "Zubří, poctivý destilát ze zralých višní z valašského Zubří",
        "questions": [
          {
            "id": "visnovice-zubri-vol",
            "question": "Jaký je servírovací objem / míra položky Višňovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Višňovice je 0,03l."
          },
          {
            "id": "visnovice-zubri-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Višňovice?",
            "correctAnswer": "Zubří",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Višňovice je uvedeno: Zubří. Kompletní popis: Zubří, poctivý destilát ze zralých višní z valašského Zubří."
          },
          {
            "id": "visnovice-zubri-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Višňovice?",
            "correctAnswer": "Poctivý destilát ze zralých višní z valašského Zubří",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Višňovice je uvedeno: Poctivý destilát ze zralých višní z valašského Zubří. Kompletní popis: Zubří, poctivý destilát ze zralých višní z valašského Zubří."
          }
        ]
      },
      {
        "id": "jablkovice-galli",
        "name": "Jablkovice",
        "weight": "0,03l",
        "price": "98 Kč",
        "allergens": [],
        "description": "Galli, čistý a svěží jablečný destilát z lihovaru Galli",
        "questions": [
          {
            "id": "jablkovice-galli-vol",
            "question": "Jaký je servírovací objem / míra položky Jablkovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Jablkovice je 0,03l."
          },
          {
            "id": "jablkovice-galli-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Jablkovice?",
            "correctAnswer": "Galli",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Jablkovice je uvedeno: Galli. Kompletní popis: Galli, čistý a svěží jablečný destilát z lihovaru Galli."
          },
          {
            "id": "jablkovice-galli-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Jablkovice?",
            "correctAnswer": "Čistý a svěží jablečný destilát z lihovaru Galli",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Jablkovice je uvedeno: Čistý a svěží jablečný destilát z lihovaru Galli. Kompletní popis: Galli, čistý a svěží jablečný destilát z lihovaru Galli."
          }
        ]
      },
      {
        "id": "rybizovice-raspenava",
        "name": "Rybízovice",
        "weight": "0,03l",
        "price": "160 Kč",
        "allergens": [],
        "description": "Raspenava, raritní vysoce ceněný destilát z černého a červeného rybízu",
        "questions": [
          {
            "id": "rybizovice-raspenava-vol",
            "question": "Jaký je servírovací objem / míra položky Rybízovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Rybízovice je 0,03l."
          },
          {
            "id": "rybizovice-raspenava-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Rybízovice?",
            "correctAnswer": "Raspenava",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Rybízovice je uvedeno: Raspenava. Kompletní popis: Raspenava, raritní vysoce ceněný destilát z černého a červeného rybízu."
          },
          {
            "id": "rybizovice-raspenava-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Rybízovice?",
            "correctAnswer": "Raritní vysoce ceněný destilát z černého a červeného rybízu",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Rybízovice je uvedeno: Raritní vysoce ceněný destilát z černého a červeného rybízu. Kompletní popis: Raspenava, raritní vysoce ceněný destilát z černého a červeného rybízu."
          }
        ]
      },
      {
        "id": "vinovice-ze-sudu-radlik",
        "name": "Vínovice ze sudu",
        "weight": "0,03l",
        "price": "149 Kč",
        "allergens": [],
        "description": "Radlík, ušlechtilý vinný destilát školený v dubových sudech",
        "questions": [
          {
            "id": "vinovice-ze-sudu-radlik-vol",
            "question": "Jaký je servírovací objem / míra položky Vínovice ze sudu?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Vínovice ze sudu je 0,03l."
          },
          {
            "id": "vinovice-ze-sudu-radlik-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Vínovice ze sudu?",
            "correctAnswer": "Radlík",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Vínovice ze sudu je uvedeno: Radlík. Kompletní popis: Radlík, ušlechtilý vinný destilát školený v dubových sudech."
          },
          {
            "id": "vinovice-ze-sudu-radlik-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Vínovice ze sudu?",
            "correctAnswer": "Ušlechtilý vinný destilát školený v dubových sudech",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Vínovice ze sudu je uvedeno: Ušlechtilý vinný destilát školený v dubových sudech. Kompletní popis: Radlík, ušlechtilý vinný destilát školený v dubových sudech."
          }
        ]
      },
      {
        "id": "traminovice-kolby",
        "name": "Tramínovice",
        "weight": "0,03l",
        "price": "135 Kč",
        "allergens": [],
        "description": "Kolby, odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby",
        "questions": [
          {
            "id": "traminovice-kolby-vol",
            "question": "Jaký je servírovací objem / míra položky Tramínovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Tramínovice je 0,03l."
          },
          {
            "id": "traminovice-kolby-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Tramínovice?",
            "correctAnswer": "Kolby",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Tramínovice je uvedeno: Kolby. Kompletní popis: Kolby, odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby."
          },
          {
            "id": "traminovice-kolby-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Tramínovice?",
            "correctAnswer": "Odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Tramínovice je uvedeno: Odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby. Kompletní popis: Kolby, odrůdová pálenka z hroznů Tramínu červeného z vinařství Kolby."
          }
        ]
      },
      {
        "id": "ponesicka-mrkvovice",
        "name": "Poněšická Mrkvovice",
        "weight": "0,03l",
        "price": "123 Kč",
        "allergens": [],
        "description": "Poněšice, unikátní raritní zeleninový destilát z karotky z lihovaru Poněšice",
        "questions": [
          {
            "id": "ponesicka-mrkvovice-vol",
            "question": "Jaký je servírovací objem / míra položky Poněšická Mrkvovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Poněšická Mrkvovice je 0,03l."
          },
          {
            "id": "ponesicka-mrkvovice-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Poněšická Mrkvovice?",
            "correctAnswer": "Poněšice",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Poněšická Mrkvovice je uvedeno: Poněšice. Kompletní popis: Poněšice, unikátní raritní zeleninový destilát z karotky z lihovaru Poněšice."
          },
          {
            "id": "ponesicka-mrkvovice-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Poněšická Mrkvovice?",
            "correctAnswer": "Unikátní raritní zeleninový destilát z karotky z lihovaru Poněšice",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Poněšická Mrkvovice je uvedeno: Unikátní raritní zeleninový destilát z karotky z lihovaru Poněšice. Kompletní popis: Poněšice, unikátní raritní zeleninový destilát z karotky z lihovaru Poněšice."
          }
        ]
      },
      {
        "id": "malinovice-silver-martenz",
        "name": "Malinovice Silver",
        "weight": "0,03l",
        "price": "175 Kč",
        "allergens": [],
        "description": "Martenz, luxusní malinový průtahový destilát z lesních malin",
        "questions": [
          {
            "id": "malinovice-silver-martenz-vol",
            "question": "Jaký je servírovací objem / míra položky Malinovice Silver?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Malinovice Silver je 0,03l."
          },
          {
            "id": "malinovice-silver-martenz-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Malinovice Silver?",
            "correctAnswer": "Martenz",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Malinovice Silver je uvedeno: Martenz. Kompletní popis: Martenz, luxusní malinový průtahový destilát z lesních malin."
          },
          {
            "id": "malinovice-silver-martenz-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Malinovice Silver?",
            "correctAnswer": "Luxusní malinový průtahový destilát z lesních malin",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Malinovice Silver je uvedeno: Luxusní malinový průtahový destilát z lesních malin. Kompletní popis: Martenz, luxusní malinový průtahový destilát z lesních malin."
          }
        ]
      }
    ]
  },
  {
    "id": "vodky",
    "name": "Vodky 0,03l",
    "badge": "Vodky",
    "description": "Prémiové čisté vodky z České republiky i ze světa",
    "iconName": "Flame",
    "items": [
      {
        "id": "anton-kaapl-legionar",
        "name": "Anton Kaapl LEGIONÄR",
        "weight": "0,03l",
        "price": "75 Kč",
        "allergens": [],
        "description": "jihočeská řemeslná vodka z rodinného lihovaru Jílovice, destilovaná s měkkou šumavskou pramenitou vodou",
        "questions": [
          {
            "id": "anton-kaapl-legionar-vol",
            "question": "Jaký je servírovací objem / míra položky Anton Kaapl LEGIONÄR?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Anton Kaapl LEGIONÄR je 0,03l."
          },
          {
            "id": "anton-kaapl-legionar-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Anton Kaapl LEGIONÄR?",
            "correctAnswer": "Jihočeská řemeslná vodka z rodinného lihovaru Jílovice",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Anton Kaapl LEGIONÄR je uvedeno: Jihočeská řemeslná vodka z rodinného lihovaru Jílovice. Kompletní popis: jihočeská řemeslná vodka z rodinného lihovaru Jílovice, destilovaná s měkkou šumavskou pramenitou vodou."
          },
          {
            "id": "anton-kaapl-legionar-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Anton Kaapl LEGIONÄR?",
            "correctAnswer": "Destilovaná s měkkou šumavskou pramenitou vodou",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Anton Kaapl LEGIONÄR je uvedeno: Destilovaná s měkkou šumavskou pramenitou vodou. Kompletní popis: jihočeská řemeslná vodka z rodinného lihovaru Jílovice, destilovaná s měkkou šumavskou pramenitou vodou."
          }
        ]
      },
      {
        "id": "nemiroff",
        "name": "Nemiroff",
        "weight": "0,03l",
        "price": "85 Kč",
        "allergens": [],
        "description": "slavná pšeničná vodka s vícestupňovou filtrací",
        "questions": [
          {
            "id": "nemiroff-vol",
            "question": "Jaký je servírovací objem / míra položky Nemiroff?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Nemiroff je 0,03l."
          },
          {
            "id": "nemiroff-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Nemiroff?",
            "correctAnswer": "Slavná pšeničná vodka s vícestupňovou filtrací",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Nemiroff je uvedeno: Slavná pšeničná vodka s vícestupňovou filtrací. Kompletní popis: slavná pšeničná vodka s vícestupňovou filtrací."
          }
        ]
      },
      {
        "id": "grey-goose",
        "name": "Grey Goose",
        "weight": "0,03l",
        "price": "135 Kč",
        "allergens": [],
        "description": "luxusní francouzská pšeničná vodka z oblasti Picardie",
        "questions": [
          {
            "id": "grey-goose-vol",
            "question": "Jaký je servírovací objem / míra položky Grey Goose?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Grey Goose je 0,03l."
          },
          {
            "id": "grey-goose-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Grey Goose?",
            "correctAnswer": "Luxusní francouzská pšeničná vodka z oblasti Picardie",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Grey Goose je uvedeno: Luxusní francouzská pšeničná vodka z oblasti Picardie. Kompletní popis: luxusní francouzská pšeničná vodka z oblasti Picardie."
          }
        ]
      }
    ]
  },
  {
    "id": "giny",
    "name": "Giny 0,03l",
    "badge": "Giny",
    "description": "Prémiové řemeslné giny z tuzemska i ze světa",
    "iconName": "Flame",
    "items": [
      {
        "id": "gin-tanqueray",
        "name": "Tanqueray",
        "weight": "0,03l",
        "price": "89 Kč",
        "allergens": [],
        "description": "klasický britský London Dry Gin destilovaný se čtyřmi bylinami",
        "questions": [
          {
            "id": "gin-tanqueray-vol",
            "question": "Jaký je servírovací objem / míra položky Tanqueray?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Tanqueray je 0,03l."
          },
          {
            "id": "gin-tanqueray-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Tanqueray?",
            "correctAnswer": "Klasický britský London Dry Gin destilovaný se čtyřmi bylinami",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Tanqueray je uvedeno: Klasický britský London Dry Gin destilovaný se čtyřmi bylinami. Kompletní popis: klasický britský London Dry Gin destilovaný se čtyřmi bylinami."
          }
        ]
      },
      {
        "id": "gin-hendricks",
        "name": "Hendrick`s",
        "weight": "0,03l",
        "price": "126 Kč",
        "allergens": [],
        "description": "skotský řemeslný gin s infuzí okurky a růže",
        "questions": [
          {
            "id": "gin-hendricks-vol",
            "question": "Jaký je servírovací objem / míra položky Hendrick`s?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Hendrick`s je 0,03l."
          },
          {
            "id": "gin-hendricks-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Hendrick`s?",
            "correctAnswer": "Skotský řemeslný gin s infuzí okurky a růže",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Hendrick`s je uvedeno: Skotský řemeslný gin s infuzí okurky a růže. Kompletní popis: skotský řemeslný gin s infuzí okurky a růže."
          }
        ]
      },
      {
        "id": "gin-starej-dobrej",
        "name": "Starej Dobrej Gin",
        "weight": "0,03l",
        "price": "159 Kč",
        "allergens": [],
        "description": "Poněšice, řemeslný český bylinný gin z rodinné palírny Poněšice",
        "questions": [
          {
            "id": "gin-starej-dobrej-vol",
            "question": "Jaký je servírovací objem / míra položky Starej Dobrej Gin?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Starej Dobrej Gin je 0,03l."
          },
          {
            "id": "gin-starej-dobrej-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Starej Dobrej Gin?",
            "correctAnswer": "Poněšice",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Starej Dobrej Gin je uvedeno: Poněšice. Kompletní popis: Poněšice, řemeslný český bylinný gin z rodinné palírny Poněšice."
          },
          {
            "id": "gin-starej-dobrej-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Starej Dobrej Gin?",
            "correctAnswer": "Řemeslný český bylinný gin z rodinné palírny Poněšice",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Starej Dobrej Gin je uvedeno: Řemeslný český bylinný gin z rodinné palírny Poněšice. Kompletní popis: Poněšice, řemeslný český bylinný gin z rodinné palírny Poněšice."
          }
        ]
      },
      {
        "id": "gin-truffle",
        "name": "Truffle gin",
        "weight": "0,03l",
        "price": "155 Kč",
        "allergens": [],
        "description": "Garage 22, unikátní holešovický gin destilovaný s pravými černými lanýži",
        "questions": [
          {
            "id": "gin-truffle-vol",
            "question": "Jaký je servírovací objem / míra položky Truffle gin?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Truffle gin je 0,03l."
          },
          {
            "id": "gin-truffle-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Truffle gin?",
            "correctAnswer": "Garage 22",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Truffle gin je uvedeno: Garage 22. Kompletní popis: Garage 22, unikátní holešovický gin destilovaný s pravými černými lanýži."
          },
          {
            "id": "gin-truffle-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Truffle gin?",
            "correctAnswer": "Unikátní holešovický gin destilovaný s pravými černými lanýži",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Truffle gin je uvedeno: Unikátní holešovický gin destilovaný s pravými černými lanýži. Kompletní popis: Garage 22, unikátní holešovický gin destilovaný s pravými černými lanýži."
          }
        ]
      }
    ]
  },
  {
    "id": "rumy",
    "name": "Rumy 0,03l",
    "badge": "Rumy",
    "description": "Vyzrálé třtinové rumy z Karibiku, Střední a Jižní Ameriky",
    "iconName": "Flame",
    "items": [
      {
        "id": "havana-club-3",
        "name": "Havana Club Anejo 3 Anos",
        "weight": "0,03l",
        "price": "66 Kč",
        "allergens": [],
        "description": "tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu",
        "questions": [
          {
            "id": "havana-club-3-vol",
            "question": "Jaký je servírovací objem / míra položky Havana Club Anejo 3 Anos?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Havana Club Anejo 3 Anos je 0,03l."
          },
          {
            "id": "havana-club-3-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Havana Club Anejo 3 Anos?",
            "correctAnswer": "Tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Havana Club Anejo 3 Anos je uvedeno: Tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu. Kompletní popis: tradiční kubánský bílý rum zrající 3 roky v sudech z bílého dubu."
          }
        ]
      },
      {
        "id": "el-dorado-12y",
        "name": "El Dorado 12y",
        "weight": "0,03l",
        "price": "149 Kč",
        "allergens": [],
        "description": "guyanský melasový rum zrající 12 let u řeky Demerara",
        "questions": [
          {
            "id": "el-dorado-12y-vol",
            "question": "Jaký je servírovací objem / míra položky El Dorado 12y?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky El Dorado 12y je 0,03l."
          },
          {
            "id": "el-dorado-12y-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce El Dorado 12y?",
            "correctAnswer": "Guyanský melasový rum zrající 12 let u řeky Demerara",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky El Dorado 12y je uvedeno: Guyanský melasový rum zrající 12 let u řeky Demerara. Kompletní popis: guyanský melasový rum zrající 12 let u řeky Demerara."
          }
        ]
      },
      {
        "id": "mount-gay-xo",
        "name": "Mount Gay XO",
        "weight": "0,03l",
        "price": "186 Kč",
        "allergens": [],
        "description": "prémiový barbadoský rum z nejstarší palírny na světě (od roku 1703)",
        "questions": [
          {
            "id": "mount-gay-xo-vol",
            "question": "Jaký je servírovací objem / míra položky Mount Gay XO?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Mount Gay XO je 0,03l."
          },
          {
            "id": "mount-gay-xo-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Mount Gay XO?",
            "correctAnswer": "Prémiový barbadoský rum z nejstarší palírny na světě (od roku 1703)",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Mount Gay XO je uvedeno: Prémiový barbadoský rum z nejstarší palírny na světě (od roku 1703). Kompletní popis: prémiový barbadoský rum z nejstarší palírny na světě (od roku 1703)."
          }
        ]
      },
      {
        "id": "abuelo-7y",
        "name": "Abuelo 7y",
        "weight": "0,03l",
        "price": "135 Kč",
        "allergens": [],
        "description": "panamský rum z vlastní třtinové melasy, zrající 7 let v malých sudech",
        "questions": [
          {
            "id": "abuelo-7y-vol",
            "question": "Jaký je servírovací objem / míra položky Abuelo 7y?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Abuelo 7y je 0,03l."
          },
          {
            "id": "abuelo-7y-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Abuelo 7y?",
            "correctAnswer": "Panamský rum z vlastní třtinové melasy",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Abuelo 7y je uvedeno: Panamský rum z vlastní třtinové melasy. Kompletní popis: panamský rum z vlastní třtinové melasy, zrající 7 let v malých sudech."
          },
          {
            "id": "abuelo-7y-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Abuelo 7y?",
            "correctAnswer": "Zrající 7 let v malých sudech",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Abuelo 7y je uvedeno: Zrající 7 let v malých sudech. Kompletní popis: panamský rum z vlastní třtinové melasy, zrající 7 let v malých sudech."
          }
        ]
      },
      {
        "id": "eminente-reserva-7y",
        "name": "Eminente Reserva 7y",
        "weight": "0,03l",
        "price": "172 Kč",
        "allergens": [],
        "description": "kubánský prémiový rum s vysokým podílem stařených aguardientes",
        "questions": [
          {
            "id": "eminente-reserva-7y-vol",
            "question": "Jaký je servírovací objem / míra položky Eminente Reserva 7y?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Eminente Reserva 7y je 0,03l."
          },
          {
            "id": "eminente-reserva-7y-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Eminente Reserva 7y?",
            "correctAnswer": "Kubánský prémiový rum s vysokým podílem stařených aguardientes",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Eminente Reserva 7y je uvedeno: Kubánský prémiový rum s vysokým podílem stařených aguardientes. Kompletní popis: kubánský prémiový rum s vysokým podílem stařených aguardientes."
          }
        ]
      },
      {
        "id": "diplomatico",
        "name": "Diplomático",
        "weight": "0,03l",
        "price": "149 Kč",
        "allergens": [],
        "description": "venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny karamelu",
        "questions": [
          {
            "id": "diplomatico-vol",
            "question": "Jaký je servírovací objem / míra položky Diplomático?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Diplomático je 0,03l."
          },
          {
            "id": "diplomatico-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Diplomático?",
            "correctAnswer": "Venezuelský rum zrající až 12 let v sudech po bourbonu",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Diplomático je uvedeno: Venezuelský rum zrající až 12 let v sudech po bourbonu. Kompletní popis: venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny karamelu."
          },
          {
            "id": "diplomatico-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Diplomático?",
            "correctAnswer": "Sametově sladký s tóny karamelu",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Diplomático je uvedeno: Sametově sladký s tóny karamelu. Kompletní popis: venezuelský rum zrající až 12 let v sudech po bourbonu, sametově sladký s tóny karamelu."
          }
        ]
      },
      {
        "id": "zacapa-23y",
        "name": "Zacapa 23y",
        "weight": "0,03l",
        "price": "165 Kč",
        "allergens": [],
        "description": "guatemalský rum z panenského medu zrající systémem Solera v nadmořské výšce 2300 m",
        "questions": [
          {
            "id": "zacapa-23y-vol",
            "question": "Jaký je servírovací objem / míra položky Zacapa 23y?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Zacapa 23y je 0,03l."
          },
          {
            "id": "zacapa-23y-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Zacapa 23y?",
            "correctAnswer": "Guatemalský rum z panenského medu zrající systémem Solera v nadmořské výšce 2300 m",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Zacapa 23y je uvedeno: Guatemalský rum z panenského medu zrající systémem Solera v nadmořské výšce 2300 m. Kompletní popis: guatemalský rum z panenského medu zrající systémem Solera v nadmořské výšce 2300 m."
          }
        ]
      }
    ]
  },
  {
    "id": "tequily",
    "name": "Tequily 0,03l",
    "badge": "Tequily",
    "description": "Prémiové tequily ze 100% modré agáve a sběratelské edice",
    "iconName": "Flame",
    "items": [
      {
        "id": "tres-alegres-compadres",
        "name": "Tres Alegres Compadres Blanco",
        "weight": "0,03l",
        "price": "89 Kč",
        "allergens": [],
        "description": "100% modrá agáve, neuleželá čistá tequila s citrusovými tóny",
        "questions": [
          {
            "id": "tres-alegres-compadres-vol",
            "question": "Jaký je servírovací objem / míra položky Tres Alegres Compadres Blanco?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Tres Alegres Compadres Blanco je 0,03l."
          },
          {
            "id": "tres-alegres-compadres-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Tres Alegres Compadres Blanco?",
            "correctAnswer": "100% modrá agáve",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Tres Alegres Compadres Blanco je uvedeno: 100% modrá agáve. Kompletní popis: 100% modrá agáve, neuleželá čistá tequila s citrusovými tóny."
          },
          {
            "id": "tres-alegres-compadres-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Tres Alegres Compadres Blanco?",
            "correctAnswer": "Neuleželá čistá tequila s citrusovými tóny",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Tres Alegres Compadres Blanco je uvedeno: Neuleželá čistá tequila s citrusovými tóny. Kompletní popis: 100% modrá agáve, neuleželá čistá tequila s citrusovými tóny."
          }
        ]
      },
      {
        "id": "herradura-reposado",
        "name": "Herradura Reposado",
        "weight": "0,03l",
        "price": "168 Kč",
        "allergens": [],
        "description": "prémiová tequila zrající 11 měsíců v sudech z bílého dubu",
        "questions": [
          {
            "id": "herradura-reposado-vol",
            "question": "Jaký je servírovací objem / míra položky Herradura Reposado?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Herradura Reposado je 0,03l."
          },
          {
            "id": "herradura-reposado-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Herradura Reposado?",
            "correctAnswer": "Prémiová tequila zrající 11 měsíců v sudech z bílého dubu",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Herradura Reposado je uvedeno: Prémiová tequila zrající 11 měsíců v sudech z bílého dubu. Kompletní popis: prémiová tequila zrající 11 měsíců v sudech z bílého dubu."
          }
        ]
      },
      {
        "id": "corralejo-reposado",
        "name": "Tequila Corralejo Reposado",
        "weight": "0,03l",
        "price": "149 Kč",
        "allergens": [],
        "description": "100% Agave, zrající v kombinaci amerických, francouzských a mexických dubových sudů",
        "questions": [
          {
            "id": "corralejo-reposado-vol",
            "question": "Jaký je servírovací objem / míra položky Tequila Corralejo Reposado?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Tequila Corralejo Reposado je 0,03l."
          },
          {
            "id": "corralejo-reposado-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Tequila Corralejo Reposado?",
            "correctAnswer": "100% Agave",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Tequila Corralejo Reposado je uvedeno: 100% Agave. Kompletní popis: 100% Agave, zrající v kombinaci amerických, francouzských a mexických dubových sudů."
          },
          {
            "id": "corralejo-reposado-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Tequila Corralejo Reposado?",
            "correctAnswer": "Zrající v kombinaci amerických",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Tequila Corralejo Reposado je uvedeno: Zrající v kombinaci amerických. Kompletní popis: 100% Agave, zrající v kombinaci amerických, francouzských a mexických dubových sudů."
          }
        ]
      },
      {
        "id": "cofradia-rose-catrina",
        "name": "La Cofradia Reposado Rosé „ed. Catrina”",
        "weight": "0,03l",
        "price": "185 Kč",
        "allergens": [],
        "description": "limitovaná edice v ručně malované keramické lahvi, zrající v sudech po červeném víně",
        "questions": [
          {
            "id": "cofradia-rose-catrina-vol",
            "question": "Jaký je servírovací objem / míra položky La Cofradia Reposado Rosé „ed. Catrina”?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky La Cofradia Reposado Rosé „ed. Catrina” je 0,03l."
          },
          {
            "id": "cofradia-rose-catrina-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce La Cofradia Reposado Rosé „ed. Catrina”?",
            "correctAnswer": "Limitovaná edice v ručně malované keramické lahvi",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky La Cofradia Reposado Rosé „ed. Catrina” je uvedeno: Limitovaná edice v ručně malované keramické lahvi. Kompletní popis: limitovaná edice v ručně malované keramické lahvi, zrající v sudech po červeném víně."
          },
          {
            "id": "cofradia-rose-catrina-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce La Cofradia Reposado Rosé „ed. Catrina”?",
            "correctAnswer": "Zrající v sudech po červeném víně",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky La Cofradia Reposado Rosé „ed. Catrina” je uvedeno: Zrající v sudech po červeném víně. Kompletní popis: limitovaná edice v ručně malované keramické lahvi, zrající v sudech po červeném víně."
          }
        ]
      },
      {
        "id": "cofradia-black-catrina",
        "name": "La Cofradia Black „ed. Catrina”",
        "weight": "0,03l",
        "price": "185 Kč",
        "allergens": [],
        "description": "černá sběratelská keramická edice Catrina, zrající v silně vypálených dubových sudech",
        "questions": [
          {
            "id": "cofradia-black-catrina-vol",
            "question": "Jaký je servírovací objem / míra položky La Cofradia Black „ed. Catrina”?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky La Cofradia Black „ed. Catrina” je 0,03l."
          },
          {
            "id": "cofradia-black-catrina-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce La Cofradia Black „ed. Catrina”?",
            "correctAnswer": "Černá sběratelská keramická edice Catrina",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky La Cofradia Black „ed. Catrina” je uvedeno: Černá sběratelská keramická edice Catrina. Kompletní popis: černá sběratelská keramická edice Catrina, zrající v silně vypálených dubových sudech."
          },
          {
            "id": "cofradia-black-catrina-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce La Cofradia Black „ed. Catrina”?",
            "correctAnswer": "Zrající v silně vypálených dubových sudech",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky La Cofradia Black „ed. Catrina” je uvedeno: Zrající v silně vypálených dubových sudech. Kompletní popis: černá sběratelská keramická edice Catrina, zrající v silně vypálených dubových sudech."
          }
        ]
      }
    ]
  },
  {
    "id": "whisky-whiskey-bourbon",
    "name": "Whisky, whiskey, bourbon 0,03l",
    "badge": "Whisky, whiskey, bourbon",
    "description": "Výběr skotských single malt, irských whiskey, amerických bourbonů i moravské whisky",
    "iconName": "Flame",
    "items": [
      {
        "id": "goldcock-blended",
        "name": "Goldcock blended",
        "weight": "0,03l",
        "price": "62 Kč",
        "allergens": [],
        "description": "česká whisky z Těšetic z moravského ječmene, zrající v českých dubových sudech",
        "questions": [
          {
            "id": "goldcock-blended-vol",
            "question": "Jaký je servírovací objem / míra položky Goldcock blended?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Goldcock blended je 0,03l."
          },
          {
            "id": "goldcock-blended-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Goldcock blended?",
            "correctAnswer": "Česká whisky z Těšetic z moravského ječmene",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Goldcock blended je uvedeno: Česká whisky z Těšetic z moravského ječmene. Kompletní popis: česká whisky z Těšetic z moravského ječmene, zrající v českých dubových sudech."
          },
          {
            "id": "goldcock-blended-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Goldcock blended?",
            "correctAnswer": "Zrající v českých dubových sudech",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Goldcock blended je uvedeno: Zrající v českých dubových sudech. Kompletní popis: česká whisky z Těšetic z moravského ječmene, zrající v českých dubových sudech."
          }
        ]
      },
      {
        "id": "glenfiddich-15y",
        "name": "Glenfiddich 15y",
        "weight": "0,03l",
        "price": "165 Kč",
        "allergens": [],
        "description": "skotská single malt whisky zrající systémem Solera ve třech typech sudů",
        "questions": [
          {
            "id": "glenfiddich-15y-vol",
            "question": "Jaký je servírovací objem / míra položky Glenfiddich 15y?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Glenfiddich 15y je 0,03l."
          },
          {
            "id": "glenfiddich-15y-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Glenfiddich 15y?",
            "correctAnswer": "Skotská single malt whisky zrající systémem Solera ve třech typech sudů",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Glenfiddich 15y je uvedeno: Skotská single malt whisky zrající systémem Solera ve třech typech sudů. Kompletní popis: skotská single malt whisky zrající systémem Solera ve třech typech sudů."
          }
        ]
      },
      {
        "id": "talisker-10y",
        "name": "Talisker 10y",
        "weight": "0,03l",
        "price": "165 Kč",
        "allergens": [],
        "description": "ostrovní single malt whisky z ostrova Skye, rašelinová a kouřová s mořskou solí",
        "questions": [
          {
            "id": "talisker-10y-vol",
            "question": "Jaký je servírovací objem / míra položky Talisker 10y?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Talisker 10y je 0,03l."
          },
          {
            "id": "talisker-10y-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Talisker 10y?",
            "correctAnswer": "Ostrovní single malt whisky z ostrova Skye",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Talisker 10y je uvedeno: Ostrovní single malt whisky z ostrova Skye. Kompletní popis: ostrovní single malt whisky z ostrova Skye, rašelinová a kouřová s mořskou solí."
          },
          {
            "id": "talisker-10y-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Talisker 10y?",
            "correctAnswer": "Rašelinová a kouřová s mořskou solí",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Talisker 10y je uvedeno: Rašelinová a kouřová s mořskou solí. Kompletní popis: ostrovní single malt whisky z ostrova Skye, rašelinová a kouřová s mořskou solí."
          }
        ]
      },
      {
        "id": "monkey-shoulder",
        "name": "Monkey Shoulder",
        "weight": "0,03l",
        "price": "112 Kč",
        "allergens": [],
        "description": "skotská blended malt whisky míchaná ze tří předních palíren oblasti Speyside",
        "questions": [
          {
            "id": "monkey-shoulder-vol",
            "question": "Jaký je servírovací objem / míra položky Monkey Shoulder?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Monkey Shoulder je 0,03l."
          },
          {
            "id": "monkey-shoulder-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Monkey Shoulder?",
            "correctAnswer": "Skotská blended malt whisky míchaná ze tří předních palíren oblasti Speyside",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Monkey Shoulder je uvedeno: Skotská blended malt whisky míchaná ze tří předních palíren oblasti Speyside. Kompletní popis: skotská blended malt whisky míchaná ze tří předních palíren oblasti Speyside."
          }
        ]
      },
      {
        "id": "jameson",
        "name": "Jameson",
        "weight": "0,03l",
        "price": "75 Kč",
        "allergens": [],
        "description": "třikrát destilovaná irská whiskey pro maximální jemnost",
        "questions": [
          {
            "id": "jameson-vol",
            "question": "Jaký je servírovací objem / míra položky Jameson?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Jameson je 0,03l."
          },
          {
            "id": "jameson-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Jameson?",
            "correctAnswer": "Třikrát destilovaná irská whiskey pro maximální jemnost",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Jameson je uvedeno: Třikrát destilovaná irská whiskey pro maximální jemnost. Kompletní popis: třikrát destilovaná irská whiskey pro maximální jemnost."
          }
        ]
      },
      {
        "id": "jack-daniels",
        "name": "Jack Daniels",
        "weight": "0,03l",
        "price": "105 Kč",
        "allergens": [],
        "description": "Tennessee whiskey filtrovaná přes dřevěné uhlí z cukrového javoru",
        "questions": [
          {
            "id": "jack-daniels-vol",
            "question": "Jaký je servírovací objem / míra položky Jack Daniels?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Jack Daniels je 0,03l."
          },
          {
            "id": "jack-daniels-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Jack Daniels?",
            "correctAnswer": "Tennessee whiskey filtrovaná přes dřevěné uhlí z cukrového javoru",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Jack Daniels je uvedeno: Tennessee whiskey filtrovaná přes dřevěné uhlí z cukrového javoru. Kompletní popis: Tennessee whiskey filtrovaná přes dřevěné uhlí z cukrového javoru."
          }
        ]
      }
    ]
  },
  {
    "id": "brandy-a-cognac",
    "name": "Brandy & cognac 0,03l",
    "badge": "Brandy & cognac",
    "description": "Ušlechtilé vinné destiláty a koňaky zrající v dubových sudech",
    "iconName": "Flame",
    "items": [
      {
        "id": "metaxa-5",
        "name": "Metaxa *****",
        "weight": "0,03l",
        "price": "75 Kč",
        "allergens": [],
        "description": "řecká brandy s muškátovými víny z ostrovů Samos a Lemnos a bylinami",
        "questions": [
          {
            "id": "metaxa-5-vol",
            "question": "Jaký je servírovací objem / míra položky Metaxa *****?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Metaxa ***** je 0,03l."
          },
          {
            "id": "metaxa-5-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Metaxa *****?",
            "correctAnswer": "Řecká brandy s muškátovými víny z ostrovů Samos a Lemnos a bylinami",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Metaxa ***** je uvedeno: Řecká brandy s muškátovými víny z ostrovů Samos a Lemnos a bylinami. Kompletní popis: řecká brandy s muškátovými víny z ostrovů Samos a Lemnos a bylinami."
          }
        ]
      },
      {
        "id": "remy-martin-1738",
        "name": "Remy Martin 1738",
        "weight": "0,03l",
        "price": "170 Kč",
        "allergens": [],
        "description": "prestižní francouzský koňak Fine Champagne Accord Royal zrající v opálených sudech",
        "questions": [
          {
            "id": "remy-martin-1738-vol",
            "question": "Jaký je servírovací objem / míra položky Remy Martin 1738?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Remy Martin 1738 je 0,03l."
          },
          {
            "id": "remy-martin-1738-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Remy Martin 1738?",
            "correctAnswer": "Prestižní francouzský koňak Fine Champagne Accord Royal zrající v opálených sudech",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Remy Martin 1738 je uvedeno: Prestižní francouzský koňak Fine Champagne Accord Royal zrající v opálených sudech. Kompletní popis: prestižní francouzský koňak Fine Champagne Accord Royal zrající v opálených sudech."
          }
        ]
      }
    ]
  },
  {
    "id": "palenky-a-likery",
    "name": "Pálenky & likéry 0,03l",
    "badge": "Pálenky & likéry",
    "description": "Tradiční bylinné a ovocné likéry, speciality a řemeslné pálenky",
    "iconName": "Flame",
    "items": [
      {
        "id": "fuzovice",
        "name": "Fuzovice",
        "weight": "0,03l",
        "price": "140 Kč",
        "allergens": [],
        "description": "FUZE/Agnes 45 %, autorská pálenka z pivní mladiny s chmelem Mandarina Bavaria",
        "questions": [
          {
            "id": "fuzovice-vol",
            "question": "Jaký je servírovací objem / míra položky Fuzovice?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Fuzovice je 0,03l."
          },
          {
            "id": "fuzovice-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Fuzovice?",
            "correctAnswer": "FUZE/Agnes 45 %",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Fuzovice je uvedeno: FUZE/Agnes 45 %. Kompletní popis: FUZE/Agnes 45 %, autorská pálenka z pivní mladiny s chmelem Mandarina Bavaria."
          },
          {
            "id": "fuzovice-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Fuzovice?",
            "correctAnswer": "Autorská pálenka z pivní mladiny s chmelem Mandarina Bavaria",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Fuzovice je uvedeno: Autorská pálenka z pivní mladiny s chmelem Mandarina Bavaria. Kompletní popis: FUZE/Agnes 45 %, autorská pálenka z pivní mladiny s chmelem Mandarina Bavaria."
          }
        ]
      },
      {
        "id": "absinth-st-antoine",
        "name": "Absinth St. Antoine",
        "weight": "0,03l",
        "price": "165 Kč",
        "allergens": [],
        "description": "Žufánek, přírodní destilovaný absint z pravého pelyňku, anýzu a fenyklu",
        "questions": [
          {
            "id": "absinth-st-antoine-vol",
            "question": "Jaký je servírovací objem / míra položky Absinth St. Antoine?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Absinth St. Antoine je 0,03l."
          },
          {
            "id": "absinth-st-antoine-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Absinth St. Antoine?",
            "correctAnswer": "Žufánek",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Absinth St. Antoine je uvedeno: Žufánek. Kompletní popis: Žufánek, přírodní destilovaný absint z pravého pelyňku, anýzu a fenyklu."
          },
          {
            "id": "absinth-st-antoine-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Absinth St. Antoine?",
            "correctAnswer": "Přírodní destilovaný absint z pravého pelyňku",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Absinth St. Antoine je uvedeno: Přírodní destilovaný absint z pravého pelyňku. Kompletní popis: Žufánek, přírodní destilovaný absint z pravého pelyňku, anýzu a fenyklu."
          }
        ]
      },
      {
        "id": "kminka-garage22",
        "name": "Kmínka",
        "weight": "0,03l",
        "price": "78 Kč",
        "allergens": [],
        "description": "Garage 22, moderní řemeslný likér s destilovaným kmínem a citrusovou kůrou",
        "questions": [
          {
            "id": "kminka-garage22-vol",
            "question": "Jaký je servírovací objem / míra položky Kmínka?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Kmínka je 0,03l."
          },
          {
            "id": "kminka-garage22-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Kmínka?",
            "correctAnswer": "Garage 22",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Kmínka je uvedeno: Garage 22. Kompletní popis: Garage 22, moderní řemeslný likér s destilovaným kmínem a citrusovou kůrou."
          },
          {
            "id": "kminka-garage22-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Kmínka?",
            "correctAnswer": "Moderní řemeslný likér s destilovaným kmínem a citrusovou kůrou",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Kmínka je uvedeno: Moderní řemeslný likér s destilovaným kmínem a citrusovou kůrou. Kompletní popis: Garage 22, moderní řemeslný likér s destilovaným kmínem a citrusovou kůrou."
          }
        ]
      },
      {
        "id": "kontusovka-zufanek",
        "name": "Kontušovka",
        "weight": "0,03l",
        "price": "95 Kč",
        "allergens": [],
        "description": "Žufánek, tradiční anýzový bylinný likér s koriandrem, fenyklem a badyánem",
        "questions": [
          {
            "id": "kontusovka-zufanek-vol",
            "question": "Jaký je servírovací objem / míra položky Kontušovka?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Kontušovka je 0,03l."
          },
          {
            "id": "kontusovka-zufanek-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Kontušovka?",
            "correctAnswer": "Žufánek",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Kontušovka je uvedeno: Žufánek. Kompletní popis: Žufánek, tradiční anýzový bylinný likér s koriandrem, fenyklem a badyánem."
          },
          {
            "id": "kontusovka-zufanek-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Kontušovka?",
            "correctAnswer": "Tradiční anýzový bylinný likér s koriandrem",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Kontušovka je uvedeno: Tradiční anýzový bylinný likér s koriandrem. Kompletní popis: Žufánek, tradiční anýzový bylinný likér s koriandrem, fenyklem a badyánem."
          }
        ]
      },
      {
        "id": "orechovy-liker-radlik",
        "name": "Ořechový likér",
        "weight": "0,03l",
        "price": "119 Kč",
        "allergens": [
          "8"
        ],
        "description": "Radlík, jemný ořechový likér macerovaný ze zelených svatojánských ořechů",
        "questions": [
          {
            "id": "orechovy-liker-radlik-vol",
            "question": "Jaký je servírovací objem / míra položky Ořechový likér?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Ořechový likér je 0,03l."
          },
          {
            "id": "orechovy-liker-radlik-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Ořechový likér?",
            "correctAnswer": "Radlík",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Ořechový likér je uvedeno: Radlík. Kompletní popis: Radlík, jemný ořechový likér macerovaný ze zelených svatojánských ořechů."
          },
          {
            "id": "orechovy-liker-radlik-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Ořechový likér?",
            "correctAnswer": "Jemný ořechový likér macerovaný ze zelených svatojánských ořechů",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Ořechový likér je uvedeno: Jemný ořechový likér macerovaný ze zelených svatojánských ořechů. Kompletní popis: Radlík, jemný ořechový likér macerovaný ze zelených svatojánských ořechů."
          },
          {
            "id": "orechovy-liker-radlik-allergen-8",
            "question": "Který z následujících alergenů obsahuje položka Ořechový likér?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Ořechový likér obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (mandle, vlašské ořechy, mandlový likér). Všechny evidované alergeny: Skořápkové plody (ořechy) a výrobky z nich."
          }
        ]
      },
      {
        "id": "hustopecska-mandlovka",
        "name": "Hustopečská Mandlovka",
        "weight": "0,03l",
        "price": "98 Kč",
        "allergens": [],
        "description": "originální moravská mandlová lihovina z Hustopečí",
        "questions": [
          {
            "id": "hustopecska-mandlovka-vol",
            "question": "Jaký je servírovací objem / míra položky Hustopečská Mandlovka?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Hustopečská Mandlovka je 0,03l."
          },
          {
            "id": "hustopecska-mandlovka-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Hustopečská Mandlovka?",
            "correctAnswer": "Originální moravská mandlová lihovina z Hustopečí",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Hustopečská Mandlovka je uvedeno: Originální moravská mandlová lihovina z Hustopečí. Kompletní popis: originální moravská mandlová lihovina z Hustopečí."
          }
        ]
      },
      {
        "id": "jagermeister",
        "name": "Jägermeister",
        "weight": "0,03l",
        "price": "65 Kč",
        "allergens": [],
        "description": "německý bylinný likér z 56 bylin, květů, kořenů a plodů",
        "questions": [
          {
            "id": "jagermeister-vol",
            "question": "Jaký je servírovací objem / míra položky Jägermeister?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Jägermeister je 0,03l."
          },
          {
            "id": "jagermeister-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Jägermeister?",
            "correctAnswer": "Německý bylinný likér z 56 bylin",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Jägermeister je uvedeno: Německý bylinný likér z 56 bylin. Kompletní popis: německý bylinný likér z 56 bylin, květů, kořenů a plodů."
          },
          {
            "id": "jagermeister-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Jägermeister?",
            "correctAnswer": "Květů",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Jägermeister je uvedeno: Květů. Kompletní popis: německý bylinný likér z 56 bylin, květů, kořenů a plodů."
          }
        ]
      },
      {
        "id": "podebradska-samicka",
        "name": "Poděbradská Samička",
        "weight": "0,03l",
        "price": "58 Kč",
        "allergens": [],
        "description": "tradiční polabský bylinný likér s vyváženou hořkosladkou chutí",
        "questions": [
          {
            "id": "podebradska-samicka-vol",
            "question": "Jaký je servírovací objem / míra položky Poděbradská Samička?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Poděbradská Samička je 0,03l."
          },
          {
            "id": "podebradska-samicka-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Poděbradská Samička?",
            "correctAnswer": "Tradiční polabský bylinný likér s vyváženou hořkosladkou chutí",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Poděbradská Samička je uvedeno: Tradiční polabský bylinný likér s vyváženou hořkosladkou chutí. Kompletní popis: tradiční polabský bylinný likér s vyváženou hořkosladkou chutí."
          }
        ]
      },
      {
        "id": "becherovka-unfiltered",
        "name": "Becherovka",
        "weight": "0,03l",
        "price": "65 Kč",
        "allergens": [],
        "description": "Unfiltered, karlovarský bylinný likér v nefiltrované prémiové podobě",
        "questions": [
          {
            "id": "becherovka-unfiltered-vol",
            "question": "Jaký je servírovací objem / míra položky Becherovka?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Becherovka je 0,03l."
          },
          {
            "id": "becherovka-unfiltered-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Becherovka?",
            "correctAnswer": "Unfiltered",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Becherovka je uvedeno: Unfiltered. Kompletní popis: Unfiltered, karlovarský bylinný likér v nefiltrované prémiové podobě."
          },
          {
            "id": "becherovka-unfiltered-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Becherovka?",
            "correctAnswer": "Karlovarský bylinný likér v nefiltrované prémiové podobě",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Becherovka je uvedeno: Karlovarský bylinný likér v nefiltrované prémiové podobě. Kompletní popis: Unfiltered, karlovarský bylinný likér v nefiltrované prémiové podobě."
          }
        ]
      },
      {
        "id": "smoked-grappa-tosolini",
        "name": "Smoked Grappa Bepi Tosolini",
        "weight": "0,03l",
        "price": "195 Kč",
        "allergens": [],
        "description": "italská grappa z vylisovaných hroznů uzená dubovým dřevem",
        "questions": [
          {
            "id": "smoked-grappa-tosolini-vol",
            "question": "Jaký je servírovací objem / míra položky Smoked Grappa Bepi Tosolini?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Smoked Grappa Bepi Tosolini je 0,03l."
          },
          {
            "id": "smoked-grappa-tosolini-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Smoked Grappa Bepi Tosolini?",
            "correctAnswer": "Italská grappa z vylisovaných hroznů uzená dubovým dřevem",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Smoked Grappa Bepi Tosolini je uvedeno: Italská grappa z vylisovaných hroznů uzená dubovým dřevem. Kompletní popis: italská grappa z vylisovaných hroznů uzená dubovým dřevem."
          }
        ]
      },
      {
        "id": "bezovy-elixir-jelinek",
        "name": "Bezový elixír R.Jelínek",
        "weight": "0,03l",
        "price": "58 Kč",
        "allergens": [],
        "description": "likér z květů černého bezu od vizovického Rudolfa Jelínka",
        "questions": [
          {
            "id": "bezovy-elixir-jelinek-vol",
            "question": "Jaký je servírovací objem / míra položky Bezový elixír R.Jelínek?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Bezový elixír R.Jelínek je 0,03l."
          },
          {
            "id": "bezovy-elixir-jelinek-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Bezový elixír R.Jelínek?",
            "correctAnswer": "Likér z květů černého bezu od vizovického Rudolfa Jelínka",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Bezový elixír R.Jelínek je uvedeno: Likér z květů černého bezu od vizovického Rudolfa Jelínka. Kompletní popis: likér z květů černého bezu od vizovického Rudolfa Jelínka."
          }
        ]
      },
      {
        "id": "creme-de-cassis",
        "name": "Créme de cassis",
        "weight": "0,03l",
        "price": "68 Kč",
        "allergens": [],
        "description": "Le Duc Charmant, Jenčík, lahodný hustý likér z černého rybízu",
        "questions": [
          {
            "id": "creme-de-cassis-vol",
            "question": "Jaký je servírovací objem / míra položky Créme de cassis?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Créme de cassis je 0,03l."
          },
          {
            "id": "creme-de-cassis-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Créme de cassis?",
            "correctAnswer": "Le Duc Charmant",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Créme de cassis je uvedeno: Le Duc Charmant. Kompletní popis: Le Duc Charmant, Jenčík, lahodný hustý likér z černého rybízu."
          },
          {
            "id": "creme-de-cassis-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Créme de cassis?",
            "correctAnswer": "Jenčík",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Créme de cassis je uvedeno: Jenčík. Kompletní popis: Le Duc Charmant, Jenčík, lahodný hustý likér z černého rybízu."
          }
        ]
      },
      {
        "id": "vajecnak-bartida",
        "name": "Vaječňák",
        "weight": "0,03l",
        "price": "50 Kč",
        "allergens": [
          "3",
          "7"
        ],
        "description": "Bartida, poctivý vaječný likér s vysokým podílem žloutků a rumem",
        "questions": [
          {
            "id": "vajecnak-bartida-vol",
            "question": "Jaký je servírovací objem / míra položky Vaječňák?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Vaječňák je 0,03l."
          },
          {
            "id": "vajecnak-bartida-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Vaječňák?",
            "correctAnswer": "Bartida",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Vaječňák je uvedeno: Bartida. Kompletní popis: Bartida, poctivý vaječný likér s vysokým podílem žloutků a rumem."
          },
          {
            "id": "vajecnak-bartida-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Vaječňák?",
            "correctAnswer": "Poctivý vaječný likér s vysokým podílem žloutků a rumem",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Vaječňák je uvedeno: Poctivý vaječný likér s vysokým podílem žloutků a rumem. Kompletní popis: Bartida, poctivý vaječný likér s vysokým podílem žloutků a rumem."
          },
          {
            "id": "vajecnak-bartida-allergen-3",
            "question": "Který z následujících alergenů obsahuje položka Vaječňák?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "Vaječňák obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, vaječný likér). Všechny evidované alergeny: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          },
          {
            "id": "vajecnak-bartida-allergen-7",
            "question": "Který z následujících alergenů obsahuje položka Vaječňák?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "Vaječňák obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (mléko, smetana, máslo, sýr, tvaroh, mléčná pěna). Všechny evidované alergeny: Vejce a výrobky z nich, Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "griotte-bartida",
        "name": "Griotte Original",
        "weight": "0,03l",
        "price": "50 Kč",
        "allergens": [],
        "description": "Bartida, prémiový likér s vysokým podílem čisté višňové šťávy",
        "questions": [
          {
            "id": "griotte-bartida-vol",
            "question": "Jaký je servírovací objem / míra položky Griotte Original?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Griotte Original je 0,03l."
          },
          {
            "id": "griotte-bartida-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Griotte Original?",
            "correctAnswer": "Bartida",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Griotte Original je uvedeno: Bartida. Kompletní popis: Bartida, prémiový likér s vysokým podílem čisté višňové šťávy."
          },
          {
            "id": "griotte-bartida-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Griotte Original?",
            "correctAnswer": "Prémiový likér s vysokým podílem čisté višňové šťávy",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Griotte Original je uvedeno: Prémiový likér s vysokým podílem čisté višňové šťávy. Kompletní popis: Bartida, prémiový likér s vysokým podílem čisté višňové šťávy."
          }
        ]
      },
      {
        "id": "zelena-bartida",
        "name": "Zelená",
        "weight": "0,03l",
        "price": "50 Kč",
        "allergens": [],
        "description": "Bartida, prémiový peprmintový likér z přírodního oleje máty peprné",
        "questions": [
          {
            "id": "zelena-bartida-vol",
            "question": "Jaký je servírovací objem / míra položky Zelená?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Zelená je 0,03l."
          },
          {
            "id": "zelena-bartida-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Zelená?",
            "correctAnswer": "Bartida",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Zelená je uvedeno: Bartida. Kompletní popis: Bartida, prémiový peprmintový likér z přírodního oleje máty peprné."
          },
          {
            "id": "zelena-bartida-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Zelená?",
            "correctAnswer": "Prémiový peprmintový likér z přírodního oleje máty peprné",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Zelená je uvedeno: Prémiový peprmintový likér z přírodního oleje máty peprné. Kompletní popis: Bartida, prémiový peprmintový likér z přírodního oleje máty peprné."
          }
        ]
      },
      {
        "id": "zelena-svach",
        "name": "Zelená",
        "weight": "0,03l",
        "price": "58 Kč",
        "allergens": [],
        "description": "Svach, řemeslný peprmintový likér z pravé macerované máty peprné",
        "questions": [
          {
            "id": "zelena-svach-vol",
            "question": "Jaký je servírovací objem / míra položky Zelená?",
            "correctAnswer": "0,03l",
            "distractors": [
              "0,04 l",
              "0,05 l"
            ],
            "explanation": "Servírovací míra / objem položky Zelená je 0,03l."
          },
          {
            "id": "zelena-svach-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Zelená?",
            "correctAnswer": "Svach",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Zelená je uvedeno: Svach. Kompletní popis: Svach, řemeslný peprmintový likér z pravé macerované máty peprné."
          },
          {
            "id": "zelena-svach-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Zelená?",
            "correctAnswer": "Řemeslný peprmintový likér z pravé macerované máty peprné",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Zelená je uvedeno: Řemeslný peprmintový likér z pravé macerované máty peprné. Kompletní popis: Svach, řemeslný peprmintový likér z pravé macerované máty peprné."
          }
        ]
      }
    ]
  },
  {
    "id": "bubliny",
    "name": "Bubliny",
    "badge": "Bubliny",
    "description": "Špičková šumivá vína, sekty a crémanty z Moravy i Kalifornie",
    "iconName": "Sparkles",
    "items": [
      {
        "id": "bubliny-charmat-palava",
        "name": "Charmat de Vinselekt Pálava",
        "weight": "0,75l",
        "price": "699 Kč",
        "allergens": [
          "12"
        ],
        "description": "Vinselect Michlovský, extra sec – Morava",
        "questions": [
          {
            "id": "bubliny-charmat-palava-vol",
            "question": "Jaký je servírovací objem / míra položky Charmat de Vinselekt Pálava?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Charmat de Vinselekt Pálava je 0,75l."
          },
          {
            "id": "bubliny-charmat-palava-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Charmat de Vinselekt Pálava?",
            "correctAnswer": "Vinselect Michlovský",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Charmat de Vinselekt Pálava je uvedeno: Vinselect Michlovský. Kompletní popis: Vinselect Michlovský, extra sec – Morava."
          },
          {
            "id": "bubliny-charmat-palava-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Charmat de Vinselekt Pálava?",
            "correctAnswer": "Extra sec – Morava",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Charmat de Vinselekt Pálava je uvedeno: Extra sec – Morava. Kompletní popis: Vinselect Michlovský, extra sec – Morava."
          },
          {
            "id": "bubliny-charmat-palava-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Charmat de Vinselekt Pálava?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Charmat de Vinselekt Pálava obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bubliny-cremant-vinselekt",
        "name": "Cremant de Vinselekt (Pinot, Chardonnay)",
        "weight": "0,75l",
        "price": "849 Kč",
        "allergens": [
          "12"
        ],
        "description": "Vinselect Michlovský, extra brut – Morava",
        "questions": [
          {
            "id": "bubliny-cremant-vinselekt-vol",
            "question": "Jaký je servírovací objem / míra položky Cremant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Cremant de Vinselekt (Pinot, Chardonnay) je 0,75l."
          },
          {
            "id": "bubliny-cremant-vinselekt-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cremant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Vinselect Michlovský",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Cremant de Vinselekt (Pinot, Chardonnay) je uvedeno: Vinselect Michlovský. Kompletní popis: Vinselect Michlovský, extra brut – Morava."
          },
          {
            "id": "bubliny-cremant-vinselekt-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Cremant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Extra brut – Morava",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Cremant de Vinselekt (Pinot, Chardonnay) je uvedeno: Extra brut – Morava. Kompletní popis: Vinselect Michlovský, extra brut – Morava."
          },
          {
            "id": "bubliny-cremant-vinselekt-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Cremant de Vinselekt (Pinot, Chardonnay)?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cremant de Vinselekt (Pinot, Chardonnay) obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bubliny-angels-cowboys",
        "name": "Angels & Cowboys",
        "weight": "0,75l",
        "price": "1199 Kč",
        "allergens": [
          "12"
        ],
        "description": "NV, brut - North Coast, Kalifornie",
        "questions": [
          {
            "id": "bubliny-angels-cowboys-vol",
            "question": "Jaký je servírovací objem / míra položky Angels & Cowboys?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Angels & Cowboys je 0,75l."
          },
          {
            "id": "bubliny-angels-cowboys-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Angels & Cowboys?",
            "correctAnswer": "Brut - North Coast",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Angels & Cowboys je uvedeno: Brut - North Coast. Kompletní popis: NV, brut - North Coast, Kalifornie."
          },
          {
            "id": "bubliny-angels-cowboys-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Angels & Cowboys?",
            "correctAnswer": "Kalifornie",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Angels & Cowboys je uvedeno: Kalifornie. Kompletní popis: NV, brut - North Coast, Kalifornie."
          },
          {
            "id": "bubliny-angels-cowboys-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Angels & Cowboys?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Angels & Cowboys obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "bila-vina",
    "name": "Bílá vína",
    "badge": "Bílá vína",
    "description": "Výběr lahvových bílých vín z Moravy, Rakouska, Německa a Kalifornie",
    "iconName": "Wine",
    "items": [
      {
        "id": "bile-ryzlink-gotberg",
        "name": "Ryzlink rýnský",
        "weight": "0,75l",
        "price": "469 Kč",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Gotberg – Pálava, Morava",
        "questions": [
          {
            "id": "bile-ryzlink-gotberg-vol",
            "question": "Jaký je servírovací objem / míra položky Ryzlink rýnský?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Ryzlink rýnský je 0,75l."
          },
          {
            "id": "bile-ryzlink-gotberg-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Ryzlink rýnský?",
            "correctAnswer": "Pozdní sběr Gotberg – Pálava",
            "distractors": [
              "Tonik Thomas Henry s chininem",
              "Čerstvě pražená výběrová káva"
            ],
            "explanation": "U položky Ryzlink rýnský je uvedeno: Pozdní sběr Gotberg – Pálava. Kompletní popis: pozdní sběr Gotberg – Pálava, Morava."
          },
          {
            "id": "bile-ryzlink-gotberg-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Ryzlink rýnský?",
            "correctAnswer": "Morava",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Ryzlink rýnský je uvedeno: Morava. Kompletní popis: pozdní sběr Gotberg – Pálava, Morava."
          },
          {
            "id": "bile-ryzlink-gotberg-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Ryzlink rýnský?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Ryzlink rýnský obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-pinot-gris-reisten",
        "name": "Pinot Gris",
        "weight": "0,75l",
        "price": "479 Kč",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Reisten – Mikulovsko, Morava",
        "questions": [
          {
            "id": "bile-pinot-gris-reisten-vol",
            "question": "Jaký je servírovací objem / míra položky Pinot Gris?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Pinot Gris je 0,75l."
          },
          {
            "id": "bile-pinot-gris-reisten-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Pinot Gris?",
            "correctAnswer": "Pozdní sběr Reisten – Mikulovsko",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Pinot Gris je uvedeno: Pozdní sběr Reisten – Mikulovsko. Kompletní popis: pozdní sběr Reisten – Mikulovsko, Morava."
          },
          {
            "id": "bile-pinot-gris-reisten-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Pinot Gris?",
            "correctAnswer": "Morava",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Pinot Gris je uvedeno: Morava. Kompletní popis: pozdní sběr Reisten – Mikulovsko, Morava."
          },
          {
            "id": "bile-pinot-gris-reisten-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Pinot Gris?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Gris obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-hibernal-bilkovi",
        "name": "Hibernal",
        "weight": "0,75l",
        "price": "495 Kč",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Bílkovi – Velkopavlovicko, Morava",
        "questions": [
          {
            "id": "bile-hibernal-bilkovi-vol",
            "question": "Jaký je servírovací objem / míra položky Hibernal?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Hibernal je 0,75l."
          },
          {
            "id": "bile-hibernal-bilkovi-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Hibernal?",
            "correctAnswer": "Pozdní sběr Bílkovi – Velkopavlovicko",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Hibernal je uvedeno: Pozdní sběr Bílkovi – Velkopavlovicko. Kompletní popis: pozdní sběr Bílkovi – Velkopavlovicko, Morava."
          },
          {
            "id": "bile-hibernal-bilkovi-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Hibernal?",
            "correctAnswer": "Morava",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Hibernal je uvedeno: Morava. Kompletní popis: pozdní sběr Bílkovi – Velkopavlovicko, Morava."
          },
          {
            "id": "bile-hibernal-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Hibernal?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Hibernal obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-sauvignon-halkoci",
        "name": "Sauvignon",
        "weight": "0,75l",
        "price": "626 Kč",
        "allergens": [
          "12"
        ],
        "description": "Typik VOC Lukáš Halkoci – Znojemsko, Morava",
        "questions": [
          {
            "id": "bile-sauvignon-halkoci-vol",
            "question": "Jaký je servírovací objem / míra položky Sauvignon?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Sauvignon je 0,75l."
          },
          {
            "id": "bile-sauvignon-halkoci-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Sauvignon?",
            "correctAnswer": "Typik VOC Lukáš Halkoci – Znojemsko",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Sauvignon je uvedeno: Typik VOC Lukáš Halkoci – Znojemsko. Kompletní popis: Typik VOC Lukáš Halkoci – Znojemsko, Morava."
          },
          {
            "id": "bile-sauvignon-halkoci-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Sauvignon?",
            "correctAnswer": "Morava",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Sauvignon je uvedeno: Morava. Kompletní popis: Typik VOC Lukáš Halkoci – Znojemsko, Morava."
          },
          {
            "id": "bile-sauvignon-halkoci-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Sauvignon?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Sauvignon obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-ryzlink-vlassky-sukal",
        "name": "Ryzlink Vlašský",
        "weight": "0,75l",
        "price": "660 Kč",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Milan Sůkal – Slovácko, Morava",
        "questions": [
          {
            "id": "bile-ryzlink-vlassky-sukal-vol",
            "question": "Jaký je servírovací objem / míra položky Ryzlink Vlašský?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Ryzlink Vlašský je 0,75l."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Ryzlink Vlašský?",
            "correctAnswer": "Pozdní sběr Milan Sůkal – Slovácko",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Ryzlink Vlašský je uvedeno: Pozdní sběr Milan Sůkal – Slovácko. Kompletní popis: pozdní sběr Milan Sůkal – Slovácko, Morava."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Ryzlink Vlašský?",
            "correctAnswer": "Morava",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Ryzlink Vlašský je uvedeno: Morava. Kompletní popis: pozdní sběr Milan Sůkal – Slovácko, Morava."
          },
          {
            "id": "bile-ryzlink-vlassky-sukal-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Ryzlink Vlašský?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Ryzlink Vlašský obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-palava-michlovsky",
        "name": "Pálava",
        "weight": "0,75l",
        "price": "506 Kč",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava",
        "questions": [
          {
            "id": "bile-palava-michlovsky-vol",
            "question": "Jaký je servírovací objem / míra položky Pálava?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Pálava je 0,75l."
          },
          {
            "id": "bile-palava-michlovsky-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Pálava?",
            "correctAnswer": "Pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Pálava je uvedeno: Pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál. Kompletní popis: pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava."
          },
          {
            "id": "bile-palava-michlovsky-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Pálava?",
            "correctAnswer": "Morava",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Pálava je uvedeno: Morava. Kompletní popis: pozdní sběr Vinselect Michlovský – Lednicko-Valtický areál, Morava."
          },
          {
            "id": "bile-palava-michlovsky-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Pálava?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pálava obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-poysdorfer-saurussel",
        "name": "Poysdorfer Saurüssel",
        "weight": "0,75l",
        "price": "629 Kč",
        "allergens": [
          "12"
        ],
        "description": "Veltlínské zelené, Hauser – Weinviertel, Rakousko",
        "questions": [
          {
            "id": "bile-poysdorfer-saurussel-vol",
            "question": "Jaký je servírovací objem / míra položky Poysdorfer Saurüssel?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Poysdorfer Saurüssel je 0,75l."
          },
          {
            "id": "bile-poysdorfer-saurussel-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Poysdorfer Saurüssel?",
            "correctAnswer": "Veltlínské zelené",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Poysdorfer Saurüssel je uvedeno: Veltlínské zelené. Kompletní popis: Veltlínské zelené, Hauser – Weinviertel, Rakousko."
          },
          {
            "id": "bile-poysdorfer-saurussel-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Poysdorfer Saurüssel?",
            "correctAnswer": "Hauser – Weinviertel",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Poysdorfer Saurüssel je uvedeno: Hauser – Weinviertel. Kompletní popis: Veltlínské zelené, Hauser – Weinviertel, Rakousko."
          },
          {
            "id": "bile-poysdorfer-saurussel-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Poysdorfer Saurüssel?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Poysdorfer Saurüssel obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-gruner-satzen-schwarzbock",
        "name": "Grüner Veltliner",
        "weight": "0,75l",
        "price": "723 Kč",
        "allergens": [
          "12"
        ],
        "description": "Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko",
        "questions": [
          {
            "id": "bile-gruner-satzen-schwarzbock-vol",
            "question": "Jaký je servírovací objem / míra položky Grüner Veltliner?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Grüner Veltliner je 0,75l."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Grüner Veltliner?",
            "correctAnswer": "Premium Ried Satzen DAC Schwarzbock – Weinviertel",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Grüner Veltliner je uvedeno: Premium Ried Satzen DAC Schwarzbock – Weinviertel. Kompletní popis: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Grüner Veltliner?",
            "correctAnswer": "Rakousko",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Grüner Veltliner je uvedeno: Rakousko. Kompletní popis: Premium Ried Satzen DAC Schwarzbock – Weinviertel, Rakousko."
          },
          {
            "id": "bile-gruner-satzen-schwarzbock-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Grüner Veltliner?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Grüner Veltliner obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-riesling-eva-fricke",
        "name": "Riesling Rheingau",
        "weight": "0,75l",
        "price": "999 Kč",
        "allergens": [
          "12"
        ],
        "description": "QbA Trocken Eva Fricke – Rheingau, Německo",
        "questions": [
          {
            "id": "bile-riesling-eva-fricke-vol",
            "question": "Jaký je servírovací objem / míra položky Riesling Rheingau?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Riesling Rheingau je 0,75l."
          },
          {
            "id": "bile-riesling-eva-fricke-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Riesling Rheingau?",
            "correctAnswer": "QbA Trocken Eva Fricke – Rheingau",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Riesling Rheingau je uvedeno: QbA Trocken Eva Fricke – Rheingau. Kompletní popis: QbA Trocken Eva Fricke – Rheingau, Německo."
          },
          {
            "id": "bile-riesling-eva-fricke-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Riesling Rheingau?",
            "correctAnswer": "Německo",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Riesling Rheingau je uvedeno: Německo. Kompletní popis: QbA Trocken Eva Fricke – Rheingau, Německo."
          },
          {
            "id": "bile-riesling-eva-fricke-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Riesling Rheingau?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Riesling Rheingau obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-riesling-gunderloch-red-stone",
        "name": "Riesling",
        "weight": "0,75l",
        "price": "595 Kč",
        "allergens": [
          "12"
        ],
        "description": "Red Stone QbA trocken Gunderloch – Rheinhessen, Německo",
        "questions": [
          {
            "id": "bile-riesling-gunderloch-red-stone-vol",
            "question": "Jaký je servírovací objem / míra položky Riesling?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Riesling je 0,75l."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Riesling?",
            "correctAnswer": "Red Stone QbA trocken Gunderloch – Rheinhessen",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Riesling je uvedeno: Red Stone QbA trocken Gunderloch – Rheinhessen. Kompletní popis: Red Stone QbA trocken Gunderloch – Rheinhessen, Německo."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Riesling?",
            "correctAnswer": "Německo",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Riesling je uvedeno: Německo. Kompletní popis: Red Stone QbA trocken Gunderloch – Rheinhessen, Německo."
          },
          {
            "id": "bile-riesling-gunderloch-red-stone-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Riesling?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Riesling obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-riesling-fritz-haag",
        "name": "Riesling",
        "weight": "0,75l",
        "price": "975 Kč",
        "allergens": [
          "12"
        ],
        "description": "Tradition Brauneberg Fritz Haag – Mosel, Německo",
        "questions": [
          {
            "id": "bile-riesling-fritz-haag-vol",
            "question": "Jaký je servírovací objem / míra položky Riesling?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Riesling je 0,75l."
          },
          {
            "id": "bile-riesling-fritz-haag-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Riesling?",
            "correctAnswer": "Tradition Brauneberg Fritz Haag – Mosel",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Riesling je uvedeno: Tradition Brauneberg Fritz Haag – Mosel. Kompletní popis: Tradition Brauneberg Fritz Haag – Mosel, Německo."
          },
          {
            "id": "bile-riesling-fritz-haag-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Riesling?",
            "correctAnswer": "Německo",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Riesling je uvedeno: Německo. Kompletní popis: Tradition Brauneberg Fritz Haag – Mosel, Německo."
          },
          {
            "id": "bile-riesling-fritz-haag-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Riesling?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Riesling obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-weisser-burgunder-philipp-kuhn",
        "name": "Weisser Burgunder",
        "weight": "0,75l",
        "price": "725 Kč",
        "allergens": [
          "12"
        ],
        "description": "Rulandské bílé, Tradition Trocken Philipp Kuhn – Pfalz, Německo",
        "questions": [
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-vol",
            "question": "Jaký je servírovací objem / míra položky Weisser Burgunder?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Weisser Burgunder je 0,75l."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Weisser Burgunder?",
            "correctAnswer": "Rulandské bílé",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Weisser Burgunder je uvedeno: Rulandské bílé. Kompletní popis: Rulandské bílé, Tradition Trocken Philipp Kuhn – Pfalz, Německo."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Weisser Burgunder?",
            "correctAnswer": "Tradition Trocken Philipp Kuhn – Pfalz",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Weisser Burgunder je uvedeno: Tradition Trocken Philipp Kuhn – Pfalz. Kompletní popis: Rulandské bílé, Tradition Trocken Philipp Kuhn – Pfalz, Německo."
          },
          {
            "id": "bile-weisser-burgunder-philipp-kuhn-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Weisser Burgunder?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Weisser Burgunder obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-sauvignon-lapis-luna",
        "name": "Sauvignon Blanc",
        "weight": "0,75l",
        "price": "789 Kč",
        "allergens": [
          "12"
        ],
        "description": "Lapis Luna - North Coast, Kalifornie",
        "questions": [
          {
            "id": "bile-sauvignon-lapis-luna-vol",
            "question": "Jaký je servírovací objem / míra položky Sauvignon Blanc?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Sauvignon Blanc je 0,75l."
          },
          {
            "id": "bile-sauvignon-lapis-luna-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Sauvignon Blanc?",
            "correctAnswer": "Lapis Luna - North Coast",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Sauvignon Blanc je uvedeno: Lapis Luna - North Coast. Kompletní popis: Lapis Luna - North Coast, Kalifornie."
          },
          {
            "id": "bile-sauvignon-lapis-luna-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Sauvignon Blanc?",
            "correctAnswer": "Kalifornie",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Sauvignon Blanc je uvedeno: Kalifornie. Kompletní popis: Lapis Luna - North Coast, Kalifornie."
          },
          {
            "id": "bile-sauvignon-lapis-luna-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Sauvignon Blanc?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Sauvignon Blanc obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "bile-chardonnay-knotty-vines",
        "name": "Chardonnay",
        "weight": "0,75l",
        "price": "975 Kč",
        "allergens": [
          "12"
        ],
        "description": "Knotty Vines – Kalifornie",
        "questions": [
          {
            "id": "bile-chardonnay-knotty-vines-vol",
            "question": "Jaký je servírovací objem / míra položky Chardonnay?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Chardonnay je 0,75l."
          },
          {
            "id": "bile-chardonnay-knotty-vines-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Chardonnay?",
            "correctAnswer": "Knotty Vines – Kalifornie",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Chardonnay je uvedeno: Knotty Vines – Kalifornie. Kompletní popis: Knotty Vines – Kalifornie."
          },
          {
            "id": "bile-chardonnay-knotty-vines-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Chardonnay?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Chardonnay obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "ruzova-vina",
    "name": "Růžová vína",
    "badge": "Růžová vína",
    "description": "Svěží moravské růžové víno s ovocnými tóny",
    "iconName": "Wine",
    "items": [
      {
        "id": "ruzove-merlot-rose-bilkovi",
        "name": "Merlot Rosé",
        "weight": "0,75l",
        "price": "405 Kč",
        "allergens": [
          "12"
        ],
        "description": "pozdní sběr Bílkovi – Velkopavlovicko, Morava",
        "questions": [
          {
            "id": "ruzove-merlot-rose-bilkovi-vol",
            "question": "Jaký je servírovací objem / míra položky Merlot Rosé?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Merlot Rosé je 0,75l."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Merlot Rosé?",
            "correctAnswer": "Pozdní sběr Bílkovi – Velkopavlovicko",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Merlot Rosé je uvedeno: Pozdní sběr Bílkovi – Velkopavlovicko. Kompletní popis: pozdní sběr Bílkovi – Velkopavlovicko, Morava."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Merlot Rosé?",
            "correctAnswer": "Morava",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Merlot Rosé je uvedeno: Morava. Kompletní popis: pozdní sběr Bílkovi – Velkopavlovicko, Morava."
          },
          {
            "id": "ruzove-merlot-rose-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Merlot Rosé?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Merlot Rosé obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "cervena-vina",
    "name": "Červená vína",
    "badge": "Červená vína",
    "description": "Plná a elegantní červená vína z Čech, Moravy, Rakouska, Německa i Kalifornie",
    "iconName": "Wine",
    "items": [
      {
        "id": "cervene-pinot-noir-rouci-kraus",
        "name": "Pinot Noir",
        "weight": "0,75l",
        "price": "425 Kč",
        "allergens": [
          "12"
        ],
        "description": "Roučí Malé Kraus – Mělnicko, Čechy",
        "questions": [
          {
            "id": "cervene-pinot-noir-rouci-kraus-vol",
            "question": "Jaký je servírovací objem / míra položky Pinot Noir?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Pinot Noir je 0,75l."
          },
          {
            "id": "cervene-pinot-noir-rouci-kraus-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Pinot Noir?",
            "correctAnswer": "Roučí Malé Kraus – Mělnicko",
            "distractors": [
              "Vanilkový sirup a limetová šťáva",
              "Třtinový cukr s limetkou"
            ],
            "explanation": "U položky Pinot Noir je uvedeno: Roučí Malé Kraus – Mělnicko. Kompletní popis: Roučí Malé Kraus – Mělnicko, Čechy."
          },
          {
            "id": "cervene-pinot-noir-rouci-kraus-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Pinot Noir?",
            "correctAnswer": "Čechy",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Pinot Noir je uvedeno: Čechy. Kompletní popis: Roučí Malé Kraus – Mělnicko, Čechy."
          },
          {
            "id": "cervene-pinot-noir-rouci-kraus-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Pinot Noir?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Noir obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-dornfelder-bilkovi",
        "name": "Dornfelder",
        "weight": "0,75l",
        "price": "419 Kč",
        "allergens": [
          "12"
        ],
        "description": "Bílkovi - Velkopavlovicko, Morava",
        "questions": [
          {
            "id": "cervene-dornfelder-bilkovi-vol",
            "question": "Jaký je servírovací objem / míra položky Dornfelder?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Dornfelder je 0,75l."
          },
          {
            "id": "cervene-dornfelder-bilkovi-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Dornfelder?",
            "correctAnswer": "Bílkovi - Velkopavlovicko",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Dornfelder je uvedeno: Bílkovi - Velkopavlovicko. Kompletní popis: Bílkovi - Velkopavlovicko, Morava."
          },
          {
            "id": "cervene-dornfelder-bilkovi-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Dornfelder?",
            "correctAnswer": "Morava",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Dornfelder je uvedeno: Morava. Kompletní popis: Bílkovi - Velkopavlovicko, Morava."
          },
          {
            "id": "cervene-dornfelder-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Dornfelder?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Dornfelder obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-cuvee-red-kolby",
        "name": "Cuvée Red (Cabernet Sauvignon, Merlot)",
        "weight": "0,75l",
        "price": "649 Kč",
        "allergens": [
          "12"
        ],
        "description": "Kolby – Mikulovsko, Morava",
        "questions": [
          {
            "id": "cervene-cuvee-red-kolby-vol",
            "question": "Jaký je servírovací objem / míra položky Cuvée Red (Cabernet Sauvignon, Merlot)?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Cuvée Red (Cabernet Sauvignon, Merlot) je 0,75l."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cuvée Red (Cabernet Sauvignon, Merlot)?",
            "correctAnswer": "Kolby – Mikulovsko",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Cuvée Red (Cabernet Sauvignon, Merlot) je uvedeno: Kolby – Mikulovsko. Kompletní popis: Kolby – Mikulovsko, Morava."
          },
          {
            "id": "cervene-cuvee-red-kolby-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Cuvée Red (Cabernet Sauvignon, Merlot)?",
            "correctAnswer": "Morava",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Cuvée Red (Cabernet Sauvignon, Merlot) je uvedeno: Morava. Kompletní popis: Kolby – Mikulovsko, Morava."
          },
          {
            "id": "cervene-cuvee-red-kolby-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Cuvée Red (Cabernet Sauvignon, Merlot)?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cuvée Red (Cabernet Sauvignon, Merlot) obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-nina-cuvee-bilkovi",
        "name": "Nina Cuvée (Merlo, Frankovka)",
        "weight": "0,75l",
        "price": "699 Kč",
        "allergens": [
          "12"
        ],
        "description": "Bílkovi – Velkopavlovicko, Morava",
        "questions": [
          {
            "id": "cervene-nina-cuvee-bilkovi-vol",
            "question": "Jaký je servírovací objem / míra položky Nina Cuvée (Merlo, Frankovka)?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Nina Cuvée (Merlo, Frankovka) je 0,75l."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Nina Cuvée (Merlo, Frankovka)?",
            "correctAnswer": "Bílkovi – Velkopavlovicko",
            "distractors": [
              "Zázvorové pivo Fever-Tree",
              "Čerstvý rozmarýn a jalovec"
            ],
            "explanation": "U položky Nina Cuvée (Merlo, Frankovka) je uvedeno: Bílkovi – Velkopavlovicko. Kompletní popis: Bílkovi – Velkopavlovicko, Morava."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Nina Cuvée (Merlo, Frankovka)?",
            "correctAnswer": "Morava",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Nina Cuvée (Merlo, Frankovka) je uvedeno: Morava. Kompletní popis: Bílkovi – Velkopavlovicko, Morava."
          },
          {
            "id": "cervene-nina-cuvee-bilkovi-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Nina Cuvée (Merlo, Frankovka)?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Nina Cuvée (Merlo, Frankovka) obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-zweigelt-feller-artinger",
        "name": "Zweigelt",
        "weight": "0,75l",
        "price": "660 Kč",
        "allergens": [
          "12"
        ],
        "description": "Weingut Feiler-Artinger – Burgenland, Rakousko",
        "questions": [
          {
            "id": "cervene-zweigelt-feller-artinger-vol",
            "question": "Jaký je servírovací objem / míra položky Zweigelt?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Zweigelt je 0,75l."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Zweigelt?",
            "correctAnswer": "Weingut Feiler-Artinger – Burgenland",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Zweigelt je uvedeno: Weingut Feiler-Artinger – Burgenland. Kompletní popis: Weingut Feiler-Artinger – Burgenland, Rakousko."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Zweigelt?",
            "correctAnswer": "Rakousko",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Zweigelt je uvedeno: Rakousko. Kompletní popis: Weingut Feiler-Artinger – Burgenland, Rakousko."
          },
          {
            "id": "cervene-zweigelt-feller-artinger-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Zweigelt?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Zweigelt obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-pinot-noir-philipp-kuhn",
        "name": "Pinot Noir",
        "weight": "0,75l",
        "price": "959 Kč",
        "allergens": [
          "12"
        ],
        "description": "Tradition Philip Kuhn – Pfalz, Německo",
        "questions": [
          {
            "id": "cervene-pinot-noir-philipp-kuhn-vol",
            "question": "Jaký je servírovací objem / míra položky Pinot Noir?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Pinot Noir je 0,75l."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Pinot Noir?",
            "correctAnswer": "Tradition Philip Kuhn – Pfalz",
            "distractors": [
              "Italský aperitiv Campari",
              "Černý sypaný čaj s bergamotem"
            ],
            "explanation": "U položky Pinot Noir je uvedeno: Tradition Philip Kuhn – Pfalz. Kompletní popis: Tradition Philip Kuhn – Pfalz, Německo."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Pinot Noir?",
            "correctAnswer": "Německo",
            "distractors": [
              "Jasmínový zelený čaj",
              "Belgické višňové pivo"
            ],
            "explanation": "U položky Pinot Noir je uvedeno: Německo. Kompletní popis: Tradition Philip Kuhn – Pfalz, Německo."
          },
          {
            "id": "cervene-pinot-noir-philipp-kuhn-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Pinot Noir?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Pinot Noir obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-cabernet-lapis-luna",
        "name": "Cabernet Sauvignon",
        "weight": "0,75l",
        "price": "789 Kč",
        "allergens": [
          "12"
        ],
        "description": "Lapis Luna - Lodi, Kalifornie",
        "questions": [
          {
            "id": "cervene-cabernet-lapis-luna-vol",
            "question": "Jaký je servírovací objem / míra položky Cabernet Sauvignon?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Cabernet Sauvignon je 0,75l."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Cabernet Sauvignon?",
            "correctAnswer": "Lapis Luna - Lodi",
            "distractors": [
              "Světlý ležák plzeňského typu",
              "Jablečný mošt z rodinné farmy"
            ],
            "explanation": "U položky Cabernet Sauvignon je uvedeno: Lapis Luna - Lodi. Kompletní popis: Lapis Luna - Lodi, Kalifornie."
          },
          {
            "id": "cervene-cabernet-lapis-luna-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Cabernet Sauvignon?",
            "correctAnswer": "Kalifornie",
            "distractors": [
              "Čerstvý grepový fresh",
              "Bezinkový sirup a čerstvá máta"
            ],
            "explanation": "U položky Cabernet Sauvignon je uvedeno: Kalifornie. Kompletní popis: Lapis Luna - Lodi, Kalifornie."
          },
          {
            "id": "cervene-cabernet-lapis-luna-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Cabernet Sauvignon?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Cabernet Sauvignon obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "cervene-zinfandel-hendry",
        "name": "Zinfandel",
        "weight": "0,75l",
        "price": "995 Kč",
        "allergens": [
          "12"
        ],
        "description": "Hendry Ranch HRW - Napa Valley, Kalifornie",
        "questions": [
          {
            "id": "cervene-zinfandel-hendry-vol",
            "question": "Jaký je servírovací objem / míra položky Zinfandel?",
            "correctAnswer": "0,75l",
            "distractors": [
              "0,5 l",
              "1,0 l"
            ],
            "explanation": "Servírovací míra / objem položky Zinfandel je 0,75l."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-1",
            "question": "Která surovina, původ či charakteristika patří k položce Zinfandel?",
            "correctAnswer": "Hendry Ranch HRW - Napa Valley",
            "distractors": [
              "Limetová šťáva",
              "Pomerančová kůra a hřebíček"
            ],
            "explanation": "U položky Zinfandel je uvedeno: Hendry Ranch HRW - Napa Valley. Kompletní popis: Hendry Ranch HRW - Napa Valley, Kalifornie."
          },
          {
            "id": "cervene-zinfandel-hendry-ing-2",
            "question": "Která surovina, původ či charakteristika patří k položce Zinfandel?",
            "correctAnswer": "Kalifornie",
            "distractors": [
              "Mučenkový likér a vanilka",
              "Kávový likér Kahlúa"
            ],
            "explanation": "U položky Zinfandel je uvedeno: Kalifornie. Kompletní popis: Hendry Ranch HRW - Napa Valley, Kalifornie."
          },
          {
            "id": "cervene-zinfandel-hendry-allergen-12",
            "question": "Který z následujících alergenů obsahuje položka Zinfandel?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "Zinfandel obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, cidery, sušené ovoce). Všechny evidované alergeny: Oxid siřičitý a siřičitany."
          }
        ]
      }
    ]
  },
  {
    "id": "alergeny",
    "name": "Alergeny (1–14)",
    "badge": "Alergeny",
    "description": "Zákonný přehled 14 hlavních potravinových alergenů podle nařízení EU",
    "iconName": "ShieldAlert",
    "items": [
      {
        "id": "alergen-1",
        "name": "1 – Obiloviny obsahující lepek",
        "weight": "Číslo 1",
        "price": "Druh: Obiloviny s lepkem",
        "allergens": [
          "1"
        ],
        "description": "Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).",
        "notes": "Alergen č. 1: Základní alergen v pečivu, těstech, pivním sladu a zahuštěných omáčkách. Zásadní pro celiaky a alergiky na lepek.",
        "questions": [
          {
            "id": "alergen-1-vol",
            "question": "Jaký je servírovací objem / míra podsložky 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Číslo 1",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 1 – Obiloviny obsahující lepek je Číslo 1."
          },
          {
            "id": "alergen-1-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Pšenice (včetně špaldy a kamutu)",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Pšenice (včetně špaldy a kamutu). Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Žito",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Žito. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Ječmen",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Ječmen. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Těstoviny",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Těstoviny. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Strouhanka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Strouhanka. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Pivo",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Pivo. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Omáčky se zásmažkou",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Omáčky se zásmažkou. Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Knedlíky)",
            "distractors": [
              "Sezamová semena a tahini",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 1 – Obiloviny obsahující lepek je obsaženo: Knedlíky). Kompletní receptura položky: Pšenice (včetně špaldy a kamutu), žito, ječmen, oves nebo jejich hybridní odrůdy a výrobky z nich (pečivo, těstoviny, strouhanka, pivo, omáčky se zásmažkou, knedlíky).."
          },
          {
            "id": "alergen-1-allergen-1",
            "question": "Který z následujících alergenů obsahuje podsložka 1 – Obiloviny obsahující lepek?",
            "correctAnswer": "Alergen č. 1 – Obiloviny obsahující lepek",
            "distractors": [
              "Alergen č. 3 – Vejce a výrobky z nich",
              "Alergen č. 8 – Skořápkové plody (ořechy)"
            ],
            "explanation": "1 – Obiloviny obsahující lepek obsahuje Alergen č. 1 – Obiloviny obsahující lepek (kváskové pečivo, mouka, strouhanka, slad v pivu). Všechny evidované alergeny této podsložky: Obiloviny obsahující lepek."
          }
        ]
      },
      {
        "id": "alergen-2",
        "name": "2 – Korýši a výrobky z nich",
        "weight": "Číslo 2",
        "price": "Druh: Korýši",
        "allergens": [
          "2"
        ],
        "description": "Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).",
        "notes": "Alergen č. 2: Často v asijských omáčkách, mořských plodech a vývarech. Pozor na smažení ve fritézách společně s jinými pokrmy.",
        "questions": [
          {
            "id": "alergen-2-vol",
            "question": "Jaký je servírovací objem / míra podsložky 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Číslo 2",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 2 – Korýši a výrobky z nich je Číslo 2."
          },
          {
            "id": "alergen-2-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Krevety",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Krevety. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Humři",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Humři. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Krabi",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Krabi. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Raci",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Raci. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Langusty a výrobky z nich (krevetové pasty",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Langusty a výrobky z nich (krevetové pasty. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Asijské polévky tom yum",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Asijské polévky tom yum. Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Krevetové chipsy krupuk)",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Krevetové chipsy krupuk). Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Krevetové chipsy krupuk)",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 2 – Korýši a výrobky z nich je obsaženo: Krevetové chipsy krupuk). Kompletní receptura položky: Krevety, humři, krabi, raci, langusty a výrobky z nich (krevetové pasty, asijské polévky tom yum, krevetové chipsy krupuk).."
          },
          {
            "id": "alergen-2-allergen-2",
            "question": "Který z následujících alergenů obsahuje podsložka 2 – Korýši a výrobky z nich?",
            "correctAnswer": "Alergen č. 2 – Korýši a výrobky z nich",
            "distractors": [
              "Alergen č. 4 – Ryby a výrobky z nich",
              "Alergen č. 9 – Celer a výrobky z něj"
            ],
            "explanation": "2 – Korýši a výrobky z nich obsahuje Alergen č. 2 – Korýši a výrobky z nich (krevety, krabi, humři, krevetová pasta). Všechny evidované alergeny této podsložky: Korýši a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-3",
        "name": "3 – Vejce a výrobky z nich",
        "weight": "Číslo 3",
        "price": "Druh: Vejce",
        "allergens": [
          "3"
        ],
        "description": "Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).",
        "notes": "Alergen č. 3: Základní složka majonézových emulzí, vaječných likérů, dezertů a trojobalů.",
        "questions": [
          {
            "id": "alergen-3-vol",
            "question": "Jaký je servírovací objem / míra podsložky 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Číslo 3",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 3 – Vejce a výrobky z nich je Číslo 3."
          },
          {
            "id": "alergen-3-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Slepičí",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Slepičí. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Křepelčí i jiná ptačí vejce a výrobky z nich (majonézy",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Křepelčí i jiná ptačí vejce a výrobky z nich (majonézy. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Tatarské omáčky",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Tatarské omáčky. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Holandská omáčka",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Holandská omáčka. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Dresinky",
            "distractors": [
              "Pšenice a ječmen",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Dresinky. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Těstoviny",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Těstoviny. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Piškoty",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Piškoty. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Vaječné likéry",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Vaječné likéry. Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Trojobal)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Trojobal). Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-ing-10",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Trojobal)",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 3 – Vejce a výrobky z nich je obsaženo: Trojobal). Kompletní receptura položky: Slepičí, křepelčí i jiná ptačí vejce a výrobky z nich (majonézy, tatarské omáčky, holandská omáčka, dresinky, těstoviny, piškoty, vaječné likéry, trojobal).."
          },
          {
            "id": "alergen-3-allergen-3",
            "question": "Který z následujících alergenů obsahuje podsložka 3 – Vejce a výrobky z nich?",
            "correctAnswer": "Alergen č. 3 – Vejce a výrobky z nich",
            "distractors": [
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
              "Alergen č. 10 – Hořčice a výrobky z ní"
            ],
            "explanation": "3 – Vejce a výrobky z nich obsahuje Alergen č. 3 – Vejce a výrobky z nich (vejce, žloutek, majonéza, těstoviny). Všechny evidované alergeny této podsložky: Vejce a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-4",
        "name": "4 – Ryby a výrobky z nich",
        "weight": "Číslo 4",
        "price": "Druh: Ryby",
        "allergens": [
          "4"
        ],
        "description": "Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).",
        "notes": "Alergen č. 4: Pozor na skrytý výskyt: originální Caesar dresink i worcesterová omáčka obsahují rybí složku (ančovičky).",
        "questions": [
          {
            "id": "alergen-4-vol",
            "question": "Jaký je servírovací objem / míra podsložky 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Číslo 4",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 4 – Ryby a výrobky z nich je Číslo 4."
          },
          {
            "id": "alergen-4-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Všechny druhy sladkovodních i mořských ryb",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Všechny druhy sladkovodních i mořských ryb. Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Kaviár",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Kaviár. Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Rybí omáčka (nam pla)",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Rybí omáčka (nam pla). Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Worcester (obsahuje ančovičky)",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Worcester (obsahuje ančovičky). Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Ančovičkový dresink (Caesar)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 4 – Ryby a výrobky z nich je obsaženo: Ančovičkový dresink (Caesar). Kompletní receptura položky: Všechny druhy sladkovodních i mořských ryb, kaviár, rybí omáčka (nam pla), worcester (obsahuje ančovičky), ančovičkový dresink (Caesar).."
          },
          {
            "id": "alergen-4-allergen-4",
            "question": "Který z následujících alergenů obsahuje podsložka 4 – Ryby a výrobky z nich?",
            "correctAnswer": "Alergen č. 4 – Ryby a výrobky z nich",
            "distractors": [
              "Alergen č. 6 – Sójové boby (sója)",
              "Alergen č. 11 – Sezamová semena (sezam)"
            ],
            "explanation": "4 – Ryby a výrobky z nich obsahuje Alergen č. 4 – Ryby a výrobky z nich (pstruh, rybí maso, ančovičky, worcester). Všechny evidované alergeny této podsložky: Ryby a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-5",
        "name": "5 – Jádra podzemnice olejné (arašídy)",
        "weight": "Číslo 5",
        "price": "Druh: Arašídy",
        "allergens": [
          "5"
        ],
        "description": "Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.",
        "notes": "Alergen č. 5: Botanicky luštěnina, proto tvoří samostatný alergen č. 5 oddělený od stromových skořápkových plodů (č. 8). Může vyvolat těžký anafylaktický šok.",
        "questions": [
          {
            "id": "alergen-5-vol",
            "question": "Jaký je servírovací objem / míra podsložky 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Číslo 5",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 5 – Jádra podzemnice olejné (arašídy) je Číslo 5."
          },
          {
            "id": "alergen-5-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Podzemnice olejná (burské oříšky)",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Podzemnice olejná (burské oříšky). Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Arašídový olej",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Arašídový olej. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Arašídové máslo",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Arašídové máslo. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Asijské omáčky satay",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Asijské omáčky satay. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Arašídové posypky a směsi",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Arašídové posypky a směsi. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Arašídové posypky a směsi",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 5 – Jádra podzemnice olejné (arašídy) je obsaženo: Arašídové posypky a směsi. Kompletní receptura položky: Podzemnice olejná (burské oříšky), arašídový olej, arašídové máslo, asijské omáčky satay, arašídové posypky a směsi.."
          },
          {
            "id": "alergen-5-allergen-5",
            "question": "Který z následujících alergenů obsahuje podsložka 5 – Jádra podzemnice olejné (arašídy)?",
            "correctAnswer": "Alergen č. 5 – Jádra podzemnice olejné (arašídy)",
            "distractors": [
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
              "Alergen č. 12 – Oxid siřičitý a siřičitany"
            ],
            "explanation": "5 – Jádra podzemnice olejné (arašídy) obsahuje Alergen č. 5 – Jádra podzemnice olejné (arašídy) (arašídy, arašídový olej, satay). Všechny evidované alergeny této podsložky: Jádra podzemnice olejné (arašídy)."
          }
        ]
      },
      {
        "id": "alergen-6",
        "name": "6 – Sójové boby (sója) a výrobky z nich",
        "weight": "Číslo 6",
        "price": "Druh: Sója",
        "allergens": [
          "6"
        ],
        "description": "Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.",
        "notes": "Alergen č. 6: Velmi častý v asijské kuchyni (marinády, sójové omáčky), v čokoládách (lecitin) a pekárenských směsích.",
        "questions": [
          {
            "id": "alergen-6-vol",
            "question": "Jaký je servírovací objem / míra podsložky 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Číslo 6",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 6 – Sójové boby (sója) a výrobky z nich je Číslo 6."
          },
          {
            "id": "alergen-6-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójové boby",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójové boby. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójová omáčka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójová omáčka. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Edamame",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Edamame. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Tofu",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Tofu. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Tempeh",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Tempeh. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójové mléko",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójové mléko. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójový lecitin (emulgátor E322) a rostlinné proteinové směsi",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójový lecitin (emulgátor E322) a rostlinné proteinové směsi. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Sójový lecitin (emulgátor E322) a rostlinné proteinové směsi",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 6 – Sójové boby (sója) a výrobky z nich je obsaženo: Sójový lecitin (emulgátor E322) a rostlinné proteinové směsi. Kompletní receptura položky: Sójové boby, sójová omáčka, edamame, tofu, tempeh, sójové mléko, sójový lecitin (emulgátor E322) a rostlinné proteinové směsi.."
          },
          {
            "id": "alergen-6-allergen-6",
            "question": "Který z následujících alergenů obsahuje podsložka 6 – Sójové boby (sója) a výrobky z nich?",
            "correctAnswer": "Alergen č. 6 – Sójové boby (sója)",
            "distractors": [
              "Alergen č. 8 – Skořápkové plody (ořechy)",
              "Alergen č. 13 – Vlčí bob (lupina)"
            ],
            "explanation": "6 – Sójové boby (sója) a výrobky z nich obsahuje Alergen č. 6 – Sójové boby (sója) (sójová omáčka, edamame, tofu, lecitin). Všechny evidované alergeny této podsložky: Sójové boby (sója) a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-7",
        "name": "7 – Mléko a výrobky z něj (včetně laktózy)",
        "weight": "Číslo 7",
        "price": "Druh: Mléko a laktóza",
        "allergens": [
          "7"
        ],
        "description": "Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.",
        "notes": "Alergen č. 7: Zahrnuje jak mléčné bílkoviny (kasein), tak mléčný cukr (laktózu). Pozor na zjemňování omáček máslem či smetanou.",
        "questions": [
          {
            "id": "alergen-7-vol",
            "question": "Jaký je servírovací objem / míra podsložky 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Číslo 7",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 7 – Mléko a výrobky z něj (včetně laktózy) je Číslo 7."
          },
          {
            "id": "alergen-7-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Kravské",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Kravské. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Kozí i ovčí mléko",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Kozí i ovčí mléko. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Máslo",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Máslo. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Smetana",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Smetana. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Sýry",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Sýry. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Syrovátka",
            "distractors": [
              "Krevety a humři",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Syrovátka. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Tvaroh",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Tvaroh. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Jogurt",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Jogurt. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Zmrzlina",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Zmrzlina. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-10",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Pyré zjemněné máslem",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Pyré zjemněné máslem. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-ing-11",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Pyré zjemněné máslem",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 7 – Mléko a výrobky z něj (včetně laktózy) je obsaženo: Pyré zjemněné máslem. Kompletní receptura položky: Kravské, kozí i ovčí mléko, máslo, smetana, sýry, syrovátka, tvaroh, jogurt, zmrzlina, pyré zjemněné máslem.."
          },
          {
            "id": "alergen-7-allergen-7",
            "question": "Který z následujících alergenů obsahuje podsložka 7 – Mléko a výrobky z něj (včetně laktózy)?",
            "correctAnswer": "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)",
            "distractors": [
              "Alergen č. 9 – Celer a výrobky z něj",
              "Alergen č. 14 – Měkkýši a výrobky z nich"
            ],
            "explanation": "7 – Mléko a výrobky z něj (včetně laktózy) obsahuje Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy) (máslo, sýr, smetana, tvaroh, mléčná pěna). Všechny evidované alergeny této podsložky: Mléko a výrobky z něj (včetně laktózy)."
          }
        ]
      },
      {
        "id": "alergen-8",
        "name": "8 – Skořápkové plody (ořechy)",
        "weight": "Číslo 8",
        "price": "Druh: Skořápkové plody",
        "allergens": [
          "8"
        ],
        "description": "Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.",
        "notes": "Alergen č. 8: Často v dezertech, pestu (např. bazalkové pesto s piniemi či vlašskými ořechy), omáčkách, sýrových prkénkách a likérech.",
        "questions": [
          {
            "id": "alergen-8-vol",
            "question": "Jaký je servírovací objem / míra podsložky 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Číslo 8",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 8 – Skořápkové plody (ořechy) je Číslo 8."
          },
          {
            "id": "alergen-8-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Mandle",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Mandle. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Lískové ořechy",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Lískové ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Vlašské ořechy",
            "distractors": [
              "Sójová omáčka a tofu",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Vlašské ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Kešu",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Kešu. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Pekanové ořechy",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Pekanové ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Para ořechy",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Para ořechy. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Pistácie",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Pistácie. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Makadamové ořechy a výrobky z nich",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 8 – Skořápkové plody (ořechy) je obsaženo: Makadamové ořechy a výrobky z nich. Kompletní receptura položky: Mandle, lískové ořechy, vlašské ořechy, kešu, pekanové ořechy, para ořechy, pistácie, makadamové ořechy a výrobky z nich.."
          },
          {
            "id": "alergen-8-allergen-8",
            "question": "Který z následujících alergenů obsahuje podsložka 8 – Skořápkové plody (ořechy)?",
            "correctAnswer": "Alergen č. 8 – Skořápkové plody (ořechy)",
            "distractors": [
              "Alergen č. 10 – Hořčice a výrobky z ní",
              "Alergen č. 1 – Obiloviny obsahující lepek"
            ],
            "explanation": "8 – Skořápkové plody (ořechy) obsahuje Alergen č. 8 – Skořápkové plody (ořechy) (vlašské ořechy, mandle, lískové ořechy). Všechny evidované alergeny této podsložky: Skořápkové plody (ořechy) a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-9",
        "name": "9 – Celer a výrobky z něj",
        "weight": "Číslo 9",
        "price": "Druh: Celer",
        "allergens": [
          "9"
        ],
        "description": "Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.",
        "notes": "Alergen č. 9: Základ kořenové zeleniny do tradičních českých omáček (svíčková), polévek a vývarů.",
        "questions": [
          {
            "id": "alergen-9-vol",
            "question": "Jaký je servírovací objem / míra podsložky 9 – Celer a výrobky z něj?",
            "correctAnswer": "Číslo 9",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 9 – Celer a výrobky z něj je Číslo 9."
          },
          {
            "id": "alergen-9-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Celer bulvový",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Celer bulvový. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Řapíkatý celer",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Řapíkatý celer. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Celerová nať",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Celerová nať. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Celerová sůl",
            "distractors": [
              "Plnotučná a dijonská hořčice",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Celerová sůl. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Zeleninové a masové vývary",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Zeleninové a masové vývary. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Kořenící směsi",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Kořenící směsi. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 9 – Celer a výrobky z něj?",
            "correctAnswer": "Kořenící směsi",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 9 – Celer a výrobky z něj je obsaženo: Kořenící směsi. Kompletní receptura položky: Celer bulvový, řapíkatý celer, celerová nať, celerová sůl, zeleninové a masové vývary, kořenící směsi.."
          },
          {
            "id": "alergen-9-allergen-9",
            "question": "Který z následujících alergenů obsahuje podsložka 9 – Celer a výrobky z něj?",
            "correctAnswer": "Alergen č. 9 – Celer a výrobky z něj",
            "distractors": [
              "Alergen č. 11 – Sezamová semena (sezam)",
              "Alergen č. 2 – Korýši a výrobky z nich"
            ],
            "explanation": "9 – Celer a výrobky z něj obsahuje Alergen č. 9 – Celer a výrobky z něj (celer v polévce, vývar, celerová nať). Všechny evidované alergeny této podsložky: Celer a výrobky z něj."
          }
        ]
      },
      {
        "id": "alergen-10",
        "name": "10 – Hořčice a výrobky z ní",
        "weight": "Číslo 10",
        "price": "Druh: Hořčice",
        "allergens": [
          "10"
        ],
        "description": "Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.",
        "notes": "Alergen č. 10: Běžná přísada do tatarských omáček, majonézových dresinků, vinaigrette a nakládaných mas.",
        "questions": [
          {
            "id": "alergen-10-vol",
            "question": "Jaký je servírovací objem / míra podsložky 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Číslo 10",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 10 – Hořčice a výrobky z ní je Číslo 10."
          },
          {
            "id": "alergen-10-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Semena hořčice",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Semena hořčice. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Plnotučná",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Plnotučná. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Kremžská",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Kremžská. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Dijonská i francouzská hořčice",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Sezamová semena a tahini"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Dijonská i francouzská hořčice. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Dresinky",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Dresinky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Marinády a zálivky",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Marinády a zálivky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Marinády a zálivky",
            "distractors": [
              "Podzemnice olejná (arašídy)",
              "Sójová omáčka a tofu"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Marinády a zálivky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Marinády a zálivky",
            "distractors": [
              "Vlašské a lískové ořechy",
              "Celer bulvový a řapíkatý"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Marinády a zálivky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Marinády a zálivky",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Marinády a zálivky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-ing-10",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Marinády a zálivky",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 10 – Hořčice a výrobky z ní je obsaženo: Marinády a zálivky. Kompletní receptura položky: Semena hořčice, plnotučná, kremžská, dijonská i francouzská hořčice, dresinky, marinády a zálivky.."
          },
          {
            "id": "alergen-10-allergen-10",
            "question": "Který z následujících alergenů obsahuje podsložka 10 – Hořčice a výrobky z ní?",
            "correctAnswer": "Alergen č. 10 – Hořčice a výrobky z ní",
            "distractors": [
              "Alergen č. 12 – Oxid siřičitý a siřičitany",
              "Alergen č. 3 – Vejce a výrobky z nich"
            ],
            "explanation": "10 – Hořčice a výrobky z ní obsahuje Alergen č. 10 – Hořčice a výrobky z ní (hořčičné semínko, dijonská hořčice, dresink). Všechny evidované alergeny této podsložky: Hořčice a výrobky z ní."
          }
        ]
      },
      {
        "id": "alergen-11",
        "name": "11 – Sezamová semena (sezam) a výrobky z nich",
        "weight": "Číslo 11",
        "price": "Druh: Sezam",
        "allergens": [
          "11"
        ],
        "description": "Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.",
        "notes": "Alergen č. 11: Pozor u burgerových bulek a blízkovýchodních pokrmů (hummus obsahuje sezamovou pastu tahini).",
        "questions": [
          {
            "id": "alergen-11-vol",
            "question": "Jaký je servírovací objem / míra podsložky 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Číslo 11",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 11 – Sezamová semena (sezam) a výrobky z nich je Číslo 11."
          },
          {
            "id": "alergen-11-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Sezamová semena",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Sezamová semena. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Sezamový olej",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Sezamový olej. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Sezamová pasta tahini (základ hummusu)",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Sezamová pasta tahini (základ hummusu). Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Burgerové bulky se sezamem",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Burgerové bulky se sezamem. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Asijské posypky",
            "distractors": [
              "Pšenice a ječmen",
              "Slepičí a křepelčí vejce"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Asijské posypky. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Halva",
            "distractors": [
              "Krevety a humři",
              "Kravské a kozí mléko"
            ],
            "explanation": "V podsložce 11 – Sezamová semena (sezam) a výrobky z nich je obsaženo: Halva. Kompletní receptura položky: Sezamová semena, sezamový olej, sezamová pasta tahini (základ hummusu), burgerové bulky se sezamem, asijské posypky, halva.."
          },
          {
            "id": "alergen-11-allergen-11",
            "question": "Který z následujících alergenů obsahuje podsložka 11 – Sezamová semena (sezam) a výrobky z nich?",
            "correctAnswer": "Alergen č. 11 – Sezamová semena (sezam)",
            "distractors": [
              "Alergen č. 13 – Vlčí bob (lupina)",
              "Alergen č. 4 – Ryby a výrobky z nich"
            ],
            "explanation": "11 – Sezamová semena (sezam) a výrobky z nich obsahuje Alergen č. 11 – Sezamová semena (sezam) (sezamový olej, tahini, sezam na briošce). Všechny evidované alergeny této podsložky: Sezamová semena (sezam) a výrobky z nich."
          }
        ]
      },
      {
        "id": "alergen-12",
        "name": "12 – Oxid siřičitý a siřičitany",
        "weight": "Číslo 12",
        "price": "Druh: Siřičitany",
        "allergens": [
          "12"
        ],
        "description": "Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).",
        "notes": "Alergen č. 12: Prakticky každé běžné láhvové i rozlévané víno obsahuje siřičitany chránící víno před nežádoucí oxidací.",
        "questions": [
          {
            "id": "alergen-12-vol",
            "question": "Jaký je servírovací objem / míra podsložky 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Číslo 12",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 12 – Oxid siřičitý a siřičitany je Číslo 12."
          },
          {
            "id": "alergen-12-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Vyjádřeno jako celkový SO2 (vína",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Vyjádřeno jako celkový SO2 (vína. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Sekty",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Sekty. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Sušené ovoce",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Sušené ovoce. Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Vinné octy)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 12 – Oxid siřičitý a siřičitany je obsaženo: Vinné octy). Kompletní receptura položky: Oxid siřičitý a siřičitany v koncentracích vyšších než 10 mg/kg nebo 10 mg/l, vyjádřeno jako celkový SO2 (vína, sekty, sušené ovoce, vinné octy).."
          },
          {
            "id": "alergen-12-allergen-12",
            "question": "Který z následujících alergenů obsahuje podsložka 12 – Oxid siřičitý a siřičitany?",
            "correctAnswer": "Alergen č. 12 – Oxid siřičitý a siřičitany",
            "distractors": [
              "Alergen č. 14 – Měkkýši a výrobky z nich",
              "Alergen č. 5 – Jádra podzemnice olejné (arašídy)"
            ],
            "explanation": "12 – Oxid siřičitý a siřičitany obsahuje Alergen č. 12 – Oxid siřičitý a siřičitany (víno, sekty, sušené ovoce). Všechny evidované alergeny této podsložky: Oxid siřičitý a siřičitany."
          }
        ]
      },
      {
        "id": "alergen-13",
        "name": "13 – Vlčí bob (lupina) a výrobky z něj",
        "weight": "Číslo 13",
        "price": "Druh: Vlčí bob (lupina)",
        "allergens": [
          "13"
        ],
        "description": "Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.",
        "notes": "Alergen č. 13: Používá se v moderní bezlepkové a veganské gastronomii pro zlepšení struktury a bílkovinného profilu pečiva a těstovin.",
        "questions": [
          {
            "id": "alergen-13-vol",
            "question": "Jaký je servírovací objem / míra podsložky 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Číslo 13",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 13 – Vlčí bob (lupina) a výrobky z něj je Číslo 13."
          },
          {
            "id": "alergen-13-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Vlčí bob (lupina)",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Vlčí bob (lupina). Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Lupinová mouka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Lupinová mouka. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Proteinové náhražky",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Proteinové náhražky. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Bezlepkové pečivo a speciální těstoviny obohacené lupinou",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Bezlepkové pečivo a speciální těstoviny obohacené lupinou. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Bezlepkové pečivo a speciální těstoviny obohacené lupinou",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Bezlepkové pečivo a speciální těstoviny obohacené lupinou. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Bezlepkové pečivo a speciální těstoviny obohacené lupinou",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 13 – Vlčí bob (lupina) a výrobky z něj je obsaženo: Bezlepkové pečivo a speciální těstoviny obohacené lupinou. Kompletní receptura položky: Vlčí bob (lupina), lupinová mouka, proteinové náhražky, bezlepkové pečivo a speciální těstoviny obohacené lupinou.."
          },
          {
            "id": "alergen-13-allergen-13",
            "question": "Který z následujících alergenů obsahuje podsložka 13 – Vlčí bob (lupina) a výrobky z něj?",
            "correctAnswer": "Alergen č. 13 – Vlčí bob (lupina)",
            "distractors": [
              "Alergen č. 1 – Obiloviny obsahující lepek",
              "Alergen č. 6 – Sójové boby (sója)"
            ],
            "explanation": "13 – Vlčí bob (lupina) a výrobky z něj obsahuje Alergen č. 13 – Vlčí bob (lupina) (lupinová mouka v pečivu). Všechny evidované alergeny této podsložky: Vlčí bob (lupina) a výrobky z něj."
          }
        ]
      },
      {
        "id": "alergen-14",
        "name": "14 – Měkkýši a výrobky z nich",
        "weight": "Číslo 14",
        "price": "Druh: Měkkýši",
        "allergens": [
          "14"
        ],
        "description": "Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.",
        "notes": "Alergen č. 14: Zahrnuje hlavonožce (olihně, chobotnice), mlže (slávky, ústřice) i plže (šneci). Pozor: ústřicová omáčka je běžná v teplé kuchyni.",
        "questions": [
          {
            "id": "alergen-14-vol",
            "question": "Jaký je servírovací objem / míra podsložky 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Číslo 14",
            "distractors": [
              "0,02 l",
              "0,03 l"
            ],
            "explanation": "Servírovací míra / objem podsložky 14 – Měkkýši a výrobky z nich je Číslo 14."
          },
          {
            "id": "alergen-14-ing-1",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Slávky",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Slávky. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-2",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Ústřice",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Ústřice. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-3",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Mušle svatého Jakuba",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Mušle svatého Jakuba. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-4",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Chobotnice",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Chobotnice. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-5",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Olihně (kalamáry)",
            "distractors": [
              "Sezamová semena a tahini",
              "Pšenice a ječmen"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Olihně (kalamáry). Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-6",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Sépie",
            "distractors": [
              "Slepičí a křepelčí vejce",
              "Krevety a humři"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Sépie. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-7",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Šneci a ústřicová omáčka",
            "distractors": [
              "Kravské a kozí mléko",
              "Podzemnice olejná (arašídy)"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Šneci a ústřicová omáčka. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-8",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Šneci a ústřicová omáčka",
            "distractors": [
              "Sójová omáčka a tofu",
              "Vlašské a lískové ořechy"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Šneci a ústřicová omáčka. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-ing-9",
            "question": "Která z těchto potravin či surovin spadá pod skupinu 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Šneci a ústřicová omáčka",
            "distractors": [
              "Celer bulvový a řapíkatý",
              "Plnotučná a dijonská hořčice"
            ],
            "explanation": "V podsložce 14 – Měkkýši a výrobky z nich je obsaženo: Šneci a ústřicová omáčka. Kompletní receptura položky: Slávky, ústřice, mušle svatého Jakuba, chobotnice, olihně (kalamáry), sépie, šneci a ústřicová omáčka.."
          },
          {
            "id": "alergen-14-allergen-14",
            "question": "Který z následujících alergenů obsahuje podsložka 14 – Měkkýši a výrobky z nich?",
            "correctAnswer": "Alergen č. 14 – Měkkýši a výrobky z nich",
            "distractors": [
              "Alergen č. 2 – Korýši a výrobky z nich",
              "Alergen č. 7 – Mléko a výrobky z něj (včetně laktózy)"
            ],
            "explanation": "14 – Měkkýši a výrobky z nich obsahuje Alergen č. 14 – Měkkýši a výrobky z nich (slávky, chobotnice, kalamáry, ústřicová omáčka). Všechny evidované alergeny této podsložky: Měkkýši a výrobky z nich."
          }
        ]
      }
    ]
  }
,
  {
    "id": "plan-stolu",
    "name": "Plán stolů – Vizuální trenažér & Bleskovka",
    "badge": "Plán stolů",
    "description": "Interaktivní vizuální trenažér a rychlostní bleskovka s odděleným tréninkem pro 1. patro (53 stolů) a 2. patro (47 stolů)",
    "iconName": "MapPin",
    "items": [
      {
        "id": "vizualni-trenazer",
        "name": "Vizuální trenažér stolů",
        "weight": "1. patro (53 stolů) & 2. patro (47 stolů)",
        "price": "Režim: Hledání & Poznej stůl",
        "allergens": [
          "Třímístná čísla",
          "Oddělená patra"
        ],
        "description": "Interaktivní vizuální výukový program pro výcvik rychlé orientace personálu na PC s odděleným testováním po patrech. Přesné rozkreslení stolů podle plánu 1. i 2. patra restaurace.",
        "notes": "Všechny stoly jsou označeny třímístnými čísly (1. patro např. 101, 102, 121, 180... a 2. patro např. 201, 209, 225, 230...).",
        "questions": [
          {
            "id": "viz-tren-q1",
            "question": "Jakým formátem čísel jsou vždy označeny stoly v restauraci?",
            "correctAnswer": "Vždy třímístným číslem (např. 121, 122, 180, 209)",
            "distractors": [
              "Jednomístným číslem (1–9)",
              "Dvoumístným číslem (11–99)"
            ],
            "explanation": "Všechny stoly v restauraci jsou značeny výhradně třímístnými čísly (např. 121, 122, 101, 180 na 1. patře a 201, 209, 225 na 2. patře)."
          },
          {
            "id": "viz-tren-q2",
            "question": "Jak jsou v trenažéru organizovány testy stolů?",
            "correctAnswer": "Odděleně pro 1. patro (53 stolů) a 2. patro (47 stolů)",
            "distractors": [
              "Všechny stoly smíchány bez možnosti volby patra",
              "Pouze jedno patro bez možnosti výběru"
            ],
            "explanation": "Vizuální trenažér i Bleskovka mají testy rozdělené podle pater – každé patro se procvičuje a měří samostatně."
          },
          {
            "id": "viz-tren-q3",
            "question": "Které z následujících označení představuje správný formát stolu?",
            "correctAnswer": "Stůl 209",
            "distractors": [
              "Stůl 20",
              "Stůl 9"
            ],
            "explanation": "Správný formát je vždy třímístné číslo, jako například stůl 209 na 2. patře."
          },
          {
            "id": "viz-tren-q4",
            "question": "Které dva výukové režimy nabízí sekce Plán stolů?",
            "correctAnswer": "Vizuální trenažér & Bleskovka",
            "distractors": [
              "Receptury & Kalkulace",
              "Pouze pasivní čtení textu"
            ],
            "explanation": "Sekce Plán stolů je specializovaná na dva aktivní režimy: Vizuální trenažér a Bleskovku."
          }
        ]
      },
      {
        "id": "bleskovka-60s",
        "name": "Bleskovka – Rychlostní test (60s)",
        "weight": "Simulace špičky",
        "price": "Časový limit: 60 sekund",
        "allergens": [
          "Trénink reflexů",
          "Série & Skóre"
        ],
        "description": "Zátěžový rychlostní trénink pro personál na PC. Systém generuje třímístná čísla stolů a běží 60vteřinový odpočet. Cílem je co nejrychleji kliknout na správný stůl na mapě.",
        "notes": "Počítá sérii úspěšných zásahů v řadě, kombinuje body za rychlost a ukládá osobní rekord do zařízení.",
        "questions": [
          {
            "id": "blesk-q1",
            "question": "Jaký je hlavní účel tréninkového režimu Bleskovka?",
            "correctAnswer": "Nacvičit bleskovou reakci a reflexivní lokalizaci stolu bez přemýšlení během špičky",
            "distractors": [
              "Naučit se receptury nápojů",
              "Vypočítat tržbu pokladny"
            ],
            "explanation": "Bleskovka simuluje nápor objednávek při špičce, kdy obsluha musí okamžitě vědět, kde se dané třímístné číslo stolu nachází."
          },
          {
            "id": "blesk-q2",
            "question": "Jak dlouhý je časový limit v tréninkovém režimu Bleskovka?",
            "correctAnswer": "60 sekund",
            "distractors": [
              "15 sekund",
              "5 minut"
            ],
            "explanation": "Bleskovka má stanovený časový limit 60 sekund pro intenzivní nácvik reflexů."
          },
          {
            "id": "blesk-q3",
            "question": "Co je cílem personálu při tréninku v trenažéru stolů?",
            "correctAnswer": "Okamžitě a bez váhání najít požadované třímístné číslo stolu na plánu",
            "distractors": [
              "Pouze hádat náhodná čísla",
              "Číst dlouhé popisy a legendy"
            ],
            "explanation": "Cílem je perfektní prostorová orientace personálu podle třímístných čísel stolů."
          }
        ]
      }
    ]
  }
];

export const TOTAL_ITEMS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.length, 0);
export const TOTAL_QUESTIONS_COUNT = MENU_CATEGORIES.reduce((acc, cat) => acc + cat.items.reduce((qAcc, item) => qAcc + (item.questions ? item.questions.length : 0), 0), 0);
