/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-18T09:56:57.674Z
 * Kundennummer: 68
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KFZ Service Lewin",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "Fachwerkstatt",
  adresse: "Am Hartsteinwerk 1, 48231 Warendorf",
  telefon: "02581 7899747",
  email: "",
  website: "",
  logo: "https://r2.kuwezu.de/konzepte/1a-autoservice/logo.svg",
  standort_bild: null,

  // ── Branding ───────────────────────────────────────────────────────────────
  farben: {
    primary: "#FFCC00",
    secondary: "#F8A600",
    accent: "#394448",
  },
  // ── Hero ───────────────────────────────────────────────────────────────────
  hero: {
    bild: "https://images.pexels.com/photos/1108101/pexels-photo-1108101.jpeg?auto=compress&cs=tinysrgb&w=1600",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Fachwerkstatt für Bremsen und Autoglas",
    ueberschriftHighlight: "Fachwerkstatt",
    untertext: "Präzise Achsvermessung, zuverlässige Bremsenwartung und professioneller Autoglas-Service in Warendorf. Qualität, auf die Sie sich verlassen können.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "Ihre KFZ-Profis in Warendorf",
    text1: "Bei KFZ Service Lewin in Warendorf steht Ihr Fahrzeug in erfahrenen Händen. Von präziser Achsvermessung über zuverlässige Bremsenwartung bis zum fachgerechten Autoglas-Austausch – wir decken alle wichtigen Servicebereiche ab. Mit moderner Werkstattausstattung und geschultem Personal sorgen wir dafür, dass Ihr Fahrzeug sicher und verkehrstauglich bleibt.",
    text2: "Wir nehmen uns Zeit für eine ehrliche Beratung und transparente Kostenvoranschläge. Bei uns gibt es keine versteckten Kosten, sondern faire Preise und Arbeit, die hält. Ihre Sicherheit und Zufriedenheit haben für uns höchste Priorität.",
    tags: ["Meisterbetrieb", "Faire Preise", "Modernste Technik", "Schneller Service"],
    stats: [
      { value: "10+",    label: "Jahre Erfahrung"   },
      { value: "1.000+", label: "Zufriedene Kunden" },
      { value: "5",      label: "Fachkräfte"        },
      { value: "5.000+", label: "Aufträge/Jahr"     },
    ],
  },

  // ── Leistungen ─────────────────────────────────────────────────────────────
  leistungen: [
    {
      slug: "bremsen",
      title: "Bremsen",
      bild: "https://r2.kuwezu.de/bibliothek/Bremsen/1777878346158-bremsen_service.webp",
      description: "Funktionierende Bremsen sind lebenswichtig. Wir prüfen, warten und reparieren Ihre Bremsanlage mit Originalbauteilen und modernster Technik.",
      highlights: ["Bremsbeläge & Bremsscheiben", "Bremsflüssigkeitswechsel", "Elektronische Bremsdiagnose"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Von Steinschlagreparatur bis zum kompletten Scheibenwechsel – wir kümmern uns schnell und fachgerecht um alle Autoglasschäden an Ihrem Fahrzeug.",
      highlights: ["Steinschlag-Reparatur", "Scheibenaustausch", "Kamerarekalibrierung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Präzise Achsvermessung mit computergestützter Technik sorgt für optimalen Geradeauslauf, gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten.",
      highlights: ["3D-Achsvermessung", "Fahrwerkseinstellung", "Spureinstellung"],
    }
  ],

  // ── Karriere ───────────────────────────────────────────────────────────────
  karriere: {
    jobs: [
      { title: "Fachkraft (m/w/d)",       type: "Vollzeit",   experience: "Berufserfahrung erwünscht"  },
      { title: "Auszubildende (m/w/d)",    type: "Ausbildung", experience: "Schulabschluss erforderlich" },
    ],
  },

  // ── Öffnungszeiten & Services ──────────────────────────────────────────────
  tuev_termine: false as boolean,
  oeffnungszeiten: {
    mo_fr: "" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Nach Vereinbarung"],
  },

  // ── Social Media ───────────────────────────────────────────────────────────
  social: {
    facebook:  null as string | null,
    instagram: null as string | null,
  },

  // ── WhatsApp ───────────────────────────────────────────────────────────────
  whatsapp: "" as string,

  // ── Features ───────────────────────────────────────────────────────────────
  newsEnabled: true as boolean,
} as const;

export type LeistungConfig = (typeof client.leistungen)[number];
