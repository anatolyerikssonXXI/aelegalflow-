import type { Metadata } from "next";
import { Geist, Playfair_Display } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "AE Legal Flow — Юридические консультации в Швеции",
  description: "Профессиональная юридическая помощь на русском языке в Швеции. Миграционное право, ВНЖ, апелляции, ECHR. Онлайн-консультации от 1 500 SEK.",
  keywords: [
    // RU — целевая аудитория
    "юрист Швеция", "юридическая консультация Швеция", "миграционное право Швеция",
    "русскоязычный юрист Швеция", "юрист для русских в Швеции",
    "юрист для украинцев в Швеции", "юрист для белорусов в Швеции",
    "юрист для латышей в Швеции", "юрист для россиян в Швеции",
    "ВНЖ Швеция", "вид на жительство Швеция", "апелляция Migrationsverket",
    "отказ в ВНЖ Швеция", "депортация Швеция", "убежище Швеция",
    "беженец Швеция", "воссоединение семьи Швеция", "ECHR жалоба",
    "Европейский суд по правам человека", "Страсбург жалоба",
    // SV — шведские поисковики
    "juridisk hjälp Sverige", "migrationsjurist Sverige",
    "uppehållstillstånd hjälp", "rysktalande jurist Sverige",
    "asylsökande hjälp Sverige", "överklaga Migrationsverket",
    "utvisning Sverige", "familjeåterförening Sverige",
    "ukrainska flyktingar juridisk hjälp", "ryska medborgare jurist Sverige",
    "vitryssar juridisk hjälp Sverige", "lettiska medborgare jurist",
    // EN — международные запросы
    "Russian speaking lawyer Sweden", "immigration lawyer Sweden Russian",
    "Swedish immigration lawyer", "residence permit Sweden appeal",
    "asylum lawyer Sweden", "ECHR complaint lawyer Sweden",
    "Ukrainian refugee lawyer Sweden", "Belarusian immigration lawyer Sweden",
    "deportation lawyer Sweden", "family reunification Sweden lawyer",
  ],
  authors: [{ name: "Anatoly Eriksson", url: "https://aelegalflow.se" }],
  creator: "AE Legal Flow",
  metadataBase: new URL("https://aelegalflow.se"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    alternateLocale: ["en_US", "sv_SE"],
    url: "https://aelegalflow.se",
    siteName: "AE Legal Flow",
    title: "AE Legal Flow — Юридические консультации в Швеции",
    description: "Профессиональная юридическая помощь на русском языке. Миграционное право, ВНЖ, апелляции Migrationsverket, ECHR. Онлайн от 1 500 SEK.",
  },
  twitter: {
    card: "summary_large_image",
    title: "AE Legal Flow — Юридические консультации в Швеции",
    description: "Профессиональная юридическая помощь на русском языке в Швеции. Онлайн от 1 500 SEK.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: "https://aelegalflow.se",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LegalService",
  "name": "AE Legal Flow",
  "url": "https://aelegalflow.se",
  "logo": "https://aelegalflow.se/favicon.ico",
  "description": "Профессиональная юридическая помощь на русском языке в Швеции. Миграционное право, ВНЖ, апелляции Migrationsverket, ECHR.",
  "founder": {
    "@type": "Person",
    "name": "Anatoly Eriksson",
    "jobTitle": "Jurist / LL.M.",
    "email": "anatolyeriksson@gmail.com",
  },
  "areaServed": [
    { "@type": "Country", "name": "Sweden" },
    { "@type": "Country", "name": "European Union" },
  ],
  "availableLanguage": ["Russian", "English", "Swedish"],
  "priceRange": "1500–2500 SEK",
  "serviceType": [
    "Immigration Law",
    "Asylum Law",
    "ECHR Complaints",
    "Residence Permit Appeals",
    "Family Reunification",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${geistSans.variable} ${playfair.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-[#0a0a0a]">{children}</body>
    </html>
  );
}
