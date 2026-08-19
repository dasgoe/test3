# Das Goe — website

Statische site, 8 pagina's, pure HTML/CSS (bijna geen JS — enkel het mobiele menu).
Kleurenschema C — "Zonnig & toegankelijk" — sinds deze versie.

## Structuur
```
index.html              → Home
qui-quoi.html            → Qui-Quoi (Erika, filosofie)
balades.html             → Balades en néerlandais (35€, FAQ, bosmotief-illustratie)
cours-en-ligne.html      → Cours en ligne & packs (20€/100€/200€, FAQ)
guide.html               → Le guide 80/20 (e-book PDF, 29€, FAQ)
contact.html             → Contactformulier
mentions-legales.html    → Mentions légales (NIEUW)
cookies.html             → Politique de cookies (NIEUW)
css/style.css            → volledig design-token-systeem
js/main.js               → mobiele hamburgermenu
images/badges/           → 13 handgetekende bubbels × 2 kleurvarianten + nav-logo
images/photos/           → foto van Erika
robots.txt / sitemap.xml → 8 pagina's
```

## Kleurenschema C — "Zonnig & toegankelijk"

Volledig herzien t.o.v. het vorige bos/ember-palet. Contrastverhoudingen berekend
en getoetst aan WCAG:

| Combinatie | Contrast | Norm |
|---|---|---|
| ink #3A2E22 op paper #FFFBF2 | 12,8:1 | AAA (7:1) ✓ |
| wit op coral-knop #B84325 | 5,3:1 | AA (4,5:1) ✓ |
| coral-light #E2603A, grote tekst | 3,4:1 | AA grote tekst (3:1) ✓ |
| ink op mustard-knop #E8A23D | 6,1:1 | AA ✓ |
| paper op donker voetblok #3A2418 | 14,1:1 | AAA ✓ |

**Enige overgebleven donkere vlak: de footer en de slot-CTA** (`--deep`, warm
espresso-bruin — niet langer het koude zwartgroen van de vorige versie). Hero's
en "section-dark"-secties zijn nu een zachte perzik-tint (`--tint`), geen volle
donkere blokken meer.

## Wat er in deze ronde is opgelost/aangepast

1. **Prijsvakjes-bug**: tekst in `.offer-card` had geen eigen `color`, en erfde
   daardoor de tekstkleur van de donkere ouder-sectie — zelfde kleur als de eigen
   (lichte) achtergrond, dus onleesbaar. Nu expliciet `color: var(--ink)` gezet.
2. **Erika's foto uitgerokken**: verhouding was gemeten op 0,46 i.p.v. de correcte
   0,75 (63% te veel uitgerekt). Opgelost met `aspect-ratio` + `object-fit: cover`,
   forceert de juiste vorm ongeacht browser-gedrag.
3. **Blauwe onderstreepte placeholder-tekst** (bv. `[POSTCODE EN GEMEENTE]`) —
   mobiele browsers herkennen tekst die op een adres lijkt en maken er automatisch
   een link van. Opgelost met een `format-detection`-meta-tag op alle pagina's.
4. **Krappe 3-koloms-kaartjes**: vaste grid vervangen door `auto-fit`, herschikt
   vloeiend i.p.v. geknepen tekst te forceren.
5. **Pilaren/filosofie-blokken**: van geknepen bordered cards naar een moderne,
   luchtige lijst (bullet-punt + titel + tekst, dunne scheidingslijn i.p.v. volle
   kaders) — leesbaarder en minder "druk" naast de CTA-knop erna.
6. **Uitgevulde tekst** (`text-align: justify`) op alle lopende alinea's, met
   `hyphens: auto` om de klassieke "rivieren" van witruimte te vermijden die
   justify op het web berucht maken. Koppen, knoppen, labels, citaten en
   pilaren-tekst blijven bewust links uitgelijnd — justify is enkel bedoeld voor
   blokken lopende tekst.
7. **Logo**: fors vergroot in de nav (44px → 76px) en toegevoegd aan de footer
   op alle pagina's (was er nog niet).
8. **Alle badges vergroot** (behalve Erika's foto, bewust ongemoeid): hero-bubbels
   nu tot 440px, sectie-bubbels tot 340px.
9. **Qui-Quoi**: de "Das Goe"-tekstkop boven de uitleg is vervangen door het
   logo zelf (tekst blijft `sr-only` aanwezig voor crawlers/schermlezers).
10. **"J'ose enfin parler néerlandais"-badge** nu ook toegevoegd bij de testimonials
    op Home (stond al op Qui-Quoi en Balades).
11. **Geïllustreerd bosmotief** (SVG, dennenbomen) toegevoegd boven "Goe Wandelen"
    en boven de FAQ op de Balades-pagina — zie toelichting hieronder waarom dit
    geen foto is.
12. **Mentions légales en cookies-pagina's** aangemaakt als volwaardige, aparte
    pagina's (waren voorheen een kort blokje op de contactpagina). Footer-links
    op alle pagina's wijzen er nu naar toe i.p.v. naar `#`.

## Bosfoto's — bewust NIET gebruikt, hier waarom

Er is gevraagd om natuurfoto's van het bos toe te voegen. Ik kan geen foto's van
het internet plukken en in een commerciële site verwerken — dat zijn andermans
auteursrechtelijk beschermde beelden, ook als ze gratis lijken te vinden via een
zoekmachine. In plaats daarvan staat er nu een **geïllustreerd bosmotief** (eigen
SVG-tekening, dennenbomen) op de twee gevraagde plekken.

**Twee opties om dit te vervangen door echte foto's:**
1. Upload je eigen foto's van de wandeling/Viroinval hier in de chat — dan verwerk
   ik ze (comprimeren, juiste formaat, `alt`-tekst) zoals bij Erika's portret.
2. Koop een licentie bij een stockfoto-dienst (bv. Unsplash+, Adobe Stock) en lever
   die aan — dan bouw ik ze in.

## Nog openstaand — wachtend op input van jou

1. **Nieuwe logo-bestanden**: vermeld in je bericht maar niet daadwerkelijk
   bijgevoegd. Upload ze opnieuw, dan verwerk ik ze op dezelfde manier (transparant
   maken, kleurvarianten, comprimeren, correct plaatsen).
2. **Echte tekst van `mentions-legales.html`**: ik kon `dasgoe.be/Mentions-legales-
   et-cookies/` niet ophalen (die site blokkeert automatische toegang). De huidige
   pagina gebruikt een standaardstructuur met placeholders — plak de originele
   tekst hier als je die letterlijk wil overnemen.
3. **Placeholders in `mentions-legales.html`**: KBO-nummer, adres, BTW — zelfde
   bracket-placeholders als voorheen, vul in zodra de KBO-inschrijving rond is.
4. **Bosfoto's**: zie hierboven.

## Deployen

Zelfde workflow als voorheen: bestanden in de juiste mappen zetten in je lokale
GitHub Desktop-kopie (zie checklist die telkens meegegeven wordt bij elke levering),
commit, push. Netlify herbouwt automatisch.

**Belangrijk bij deze levering**: dit is een volledige set — alle 8 HTML-bestanden,
`style.css`, en de hele `images/badges/`-map zijn vervangen (nieuwe kleuren op alle
badges). Vervang dus de hele `images/badges/`-map, niet enkel losse bestanden,
anders krijg je een mix van oude (bos/ember) en nieuwe (zonnig) badge-kleuren.
