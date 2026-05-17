/**
 * client.ts — Automatisch generiert von KUWEZU
 * Erstellt: 2026-05-17T12:43:38.790Z
 * Kundennummer: 68
 *
 * Alle Texte, Bilder und Einstellungen werden hier gepflegt.
 */

export const client = {
  // ── Allgemein ──────────────────────────────────────────────────────────────
  name: "KFZ Service Lewin",
  branche: "Autowerkstatt",
  ort: "Warendorf",
  slogan: "mit Herz",
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
    bild: "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&w=1600",
    overlayOpacity: 0.55, /* fix — nie schwächer, nie überschreibbar */
    ueberschrift: "Ihre Autowerkstatt in Warendorf mit Herz",
    ueberschriftHighlight: "mit Herz",
    untertext: "Von Bremsen über Autoglas bis zur Achsvermessung – KFZ Service Lewin ist Ihr verlässlicher Partner für alle Reparaturen.",
    ctaPrimary: { text: "Termin vereinbaren", href: "#kontakt" },
    ctaSecondary: { text: "Leistungen ansehen", href: "#leistungen" },
  },

  // ── Über uns ───────────────────────────────────────────────────────────────
  ueberUns: {
    bild: "https://images.pexels.com/photos/4489794/pexels-photo-4489794.jpeg?auto=compress&cs=tinysrgb&w=1600",
    ueberschrift: "Ihre Werkstatt mit Kompetenz in Warendorf",
    text1: "KFZ Service Lewin steht seit Jahren für zuverlässige Kfz-Reparaturen in Warendorf. Unser erfahrenes Team kümmert sich um Bremsenwartung, Autoglas-Reparaturen und präzise Achsvermessungen. Wir arbeiten herstellerunabhängig und betreuen Fahrzeuge aller Marken mit modernster Werkstatttechnik.",
    text2: "Faire Preise, ehrliche Beratung und termingerechte Arbeit – darauf können Sie sich bei uns verlassen. Wir nehmen uns Zeit für Ihre Anliegen und erklären jeden Arbeitsschritt verständlich.",
    tags: ["Meisterbetrieb", "Alle Marken", "Faire Preise", "Seit Jahren in Warendorf"],
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
      description: "Funktionierende Bremsen sind lebenswichtig. Wir prüfen, warten und erneuern Bremsbeläge, Bremsscheiben und die gesamte Bremsanlage fachgerecht und zuverlässig.",
      highlights: ["Bremsbeläge & Bremsscheiben", "Bremsflüssigkeitswechsel", "Elektronische Bremsprüfung"],
    },
    {
      slug: "autoglas",
      title: "Autoglas",
      bild: "https://r2.kuwezu.de/bibliothek/Autoglas/1777829664081-autoglas_reparatur.webp",
      description: "Steinschlag oder Riss in der Scheibe? Wir reparieren kleinere Schäden professionell oder tauschen Ihre Autoscheibe schnell und sauber aus.",
      highlights: ["Steinschlag-Reparatur", "Scheibentausch alle Marken", "Direkte Versicherungsabrechnung"],
    },
    {
      slug: "achsvermessung",
      title: "Achsvermessung",
      bild: "https://r2.kuwezu.de/bibliothek/Achsvermessung/1777878369186-leistung_achsvermessung.webp",
      description: "Eine exakte Achsvermessung spart Sprit, schont die Reifen und erhöht die Fahrsicherheit. Wir vermessen computergestützt und stellen präzise ein.",
      highlights: ["3D-Achsvermessung", "Spureinstellung", "Fahrwerks-Check"],
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
