/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-17T12:27:47.852Z
 * Kundennummer: 68
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KFZ Service Lewin",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "Präzision",
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
    bild: "https://source.unsplash.com/featured/?car+repair,auto+workshop,garage",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihr Autowerkstatt in Warendorf mit Präzision",
    ueberschriftHighlight: "Präzision",
    untertext: "Von Bremsen über Autoglas bis Achsvermessung – Wir sorgen dafür, dass Ihr Fahrzeug sicher und zuverlässig fährt.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://source.unsplash.com/featured/?mechanic,car+service,automotive",
    ueberschrift: "KFZ Service Lewin – Ihre Werkstatt in Warendorf",
    text1: "Als erfahrene Autowerkstatt in Warendorf kümmern wir uns um alle wichtigen Arbeiten an Ihrem Fahrzeug. Ob Bremsenwartung, Autoglasreparatur oder präzise Achsvermessung – bei uns bekommen Sie fachgerechte Arbeit zu fairen Preisen. Wir arbeiten herstellerunabhängig und betreuen Fahrzeuge aller Marken.",
    text2: "Ehrliche Beratung ist bei uns selbstverständlich. Wir erklären Ihnen genau, welche Arbeiten notwendig sind und warum. Ihr Auto ist bei uns in guten Händen – versprochen.",
    tags: ["Herstellerunabhängig", "Faire Preise", "Erfahrene Mechaniker", "Moderne Technik"],
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
      description: "Funktionierende Bremsen sind lebenswichtig. Wir prüfen, warten und erneuern Bremsbeläge, Bremsscheiben und die komplette Bremsanlage fachgerecht.",
      highlights: ["Bremsbeläge & Bremsscheiben", "Bremsleitungen & Bremsflüssigkeit", "Komplette Bremsanlagen-Prüfung"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren kleinere Schäden schnell oder tauschen Autoglas professionell aus – inklusive Abwicklung mit Ihrer Versicherung.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch alle Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Eine exakte Achsvermessung sorgt für gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten. Mit moderner 3D-Technik vermessen wir präzise und stellen optimal ein.",
      highlights: ["3D-Achsvermessung", "Spur & Sturz einstellen", "Weniger Reifenverschleiß"],
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
    mo_fr: "13:30 – 17:00" as string,
    sa:    "" as string,
    so:    "" as string,
  },

  // ── Kontakt ────────────────────────────────────────────────────────────────
  kontakt: {
    oeffnungszeiten: ["Mo–Fr: 13:30 – 17:00"],
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
