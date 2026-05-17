/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-17T12:51:45.704Z
 * Kundennummer: 68
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KFZ Service Lewin",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "mit Durchblick",
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
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Durchblick",
    ueberschriftHighlight: "mit Durchblick",
    untertext: "Bremsen, Autoglas und Achsvermessung – schnell, präzise und zu fairen Preisen. Ihr Fahrzeug in den besten Händen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "KFZ Service Lewin – Ihre Werkstatt in Warendorf",
    text1: "Seit Jahren steht KFZ Service Lewin in Warendorf für zuverlässige Autowerkstatt-Leistungen. Unser Schwerpunkt liegt auf Bremsenwartung, Autoglasreparatur und präziser Achsvermessung. Wir arbeiten mit moderner Technik und sorgen dafür, dass Ihr Fahrzeug sicher und verkehrstüchtig bleibt.",
    text2: "Ehrliche Beratung und transparente Preise sind für uns selbstverständlich. Wir nehmen uns Zeit für Ihre Anliegen und finden praktische Lösungen – ohne unnötige Umwege.",
    tags: ["Markenunabhängig", "Faire Preise", "Schnelle Termine", "Moderne Technik"],
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
      description: "Funktionierende Bremsen sind lebenswichtig. Wir prüfen, warten und reparieren Ihre Bremsanlage fachgerecht – von Bremsbelägen bis zur kompletten Bremsflüssigkeit.",
      highlights: ["Bremsbeläge & Bremsscheiben", "Bremsflüssigkeitswechsel", "Elektronische Bremsdiagnose"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren kleine Schäden schnell und kostengünstig oder tauschen Ihr Autoglas professionell aus – direkt mit Ihrer Versicherung abrechenbar.",
      highlights: ["Steinschlagreparatur", "Scheibenaustausch aller Marken", "Versicherungsabwicklung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Eine präzise Achsvermessung sorgt für optimalen Geradeauslauf, gleichmäßigen Reifenverschleiß und sicheres Fahrverhalten. Mit computergestützter Technik stellen wir Ihr Fahrwerk exakt ein.",
      highlights: ["3D-Achsvermessung", "Fahrwerkseinstellung", "Reifenverschleiß minimieren"],
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
