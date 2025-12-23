import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Script from "next/script";

// Configuração das fontes
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-poppins",
  display: "swap",
});

// Metadata global do site
export const metadata: Metadata = {
  metadataBase: new URL("https://sinmevaco.com.br"),
  title: {
    default: "SINMEVACO - Sindicato dos Médicos do Vale do Aço | Ipatinga, Timóteo e Coronel Fabriciano",
    template: "%s | SINMEVACO",
  },
  description:
    "SINMEVACO - Sindicato dos Médicos do Vale do Aço. Há mais de 32 anos defendendo os direitos dos médicos em Ipatinga, Timóteo, Coronel Fabriciano e região. Apoio jurídico especializado, benefícios exclusivos e representação sindical.",
  keywords: [
    "sindicato médicos",
    "SINMEVACO",
    "vale do aço",
    "ipatinga",
    "timóteo",
    "coronel fabriciano",
    "apoio jurídico médico",
    "benefícios médicos",
    "direitos médicos",
    "sindicato médico MG",
    "representação médica",
  ],
  authors: [{ name: "SINMEVACO" }],
  creator: "Galaxy IT & Marketing",
  publisher: "SINMEVACO",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://sinmevaco.com.br",
    siteName: "SINMEVACO",
    title: "SINMEVACO - Sindicato dos Médicos do Vale do Aço",
    description:
      "Há mais de 32 anos defendendo os direitos dos médicos em Ipatinga, Timóteo, Coronel Fabriciano e região. Apoio jurídico especializado e benefícios exclusivos.",
    images: [
      {
        url: "https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/694027b096e7538a10c79781.png",
        width: 1200,
        height: 630,
        alt: "SINMEVACO - Sindicato dos Médicos do Vale do Aço",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SINMEVACO - Sindicato dos Médicos do Vale do Aço",
    description:
      "Há mais de 32 anos defendendo os direitos dos médicos. Apoio jurídico especializado e benefícios exclusivos.",
    images: [
      "https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/694027b096e7538a10c79781.png",
    ],
  },
  icons: {
    icon: "/favicon.ico",
  },
  verification: {
    google: "", // Adicionar código de verificação do Google Search Console
  },
};

// Schema Markup - Organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://sinmevaco.com.br/#organization",
  name: "SINMEVACO - Sindicato dos Médicos do Vale do Aço",
  alternateName: "SINMEVACO",
  description:
    "Sindicato dos Médicos do Vale do Aço, atuando há mais de 32 anos na defesa dos direitos dos médicos em Ipatinga, Timóteo, Coronel Fabriciano e região.",
  url: "https://sinmevaco.com.br",
  logo: {
    "@type": "ImageObject",
    url: "https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/694027b096e7538a10c79781.png",
    width: 200,
    height: 70,
  },
  image:
    "https://storage.googleapis.com/msgsndr/gEs9xx0VPhQ0xvtLESaQ/media/694027b096e7538a10c79781.png",
  telephone: "+5531997178316",
  foundingDate: "1992",
  areaServed: [
    {
      "@type": "City",
      name: "Ipatinga",
      containedInPlace: {
        "@type": "State",
        name: "Minas Gerais",
      },
    },
    {
      "@type": "City",
      name: "Timóteo",
      containedInPlace: {
        "@type": "State",
        name: "Minas Gerais",
      },
    },
    {
      "@type": "City",
      name: "Coronel Fabriciano",
      containedInPlace: {
        "@type": "State",
        name: "Minas Gerais",
      },
    },
    {
      "@type": "Place",
      name: "Vale do Aço",
      containedInPlace: {
        "@type": "State",
        name: "Minas Gerais",
      },
    },
  ],
  sameAs: [
    "https://www.instagram.com/sinmevaco/",
    "https://wa.me/5531997178316",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+5531997178316",
    contactType: "customer service",
    availableLanguage: "Portuguese",
    areaServed: "BR",
  },
  member: {
    "@type": "Person",
    name: "Dr. Carlos Henrique Quintão Valeriano",
    jobTitle: "Presidente",
  },
};

// Schema Markup - WebSite
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://sinmevaco.com.br/#website",
  url: "https://sinmevaco.com.br",
  name: "SINMEVACO - Sindicato dos Médicos do Vale do Aço",
  description:
    "Site oficial do Sindicato dos Médicos do Vale do Aço. Informações sobre filiação, benefícios, apoio jurídico e notícias para médicos.",
  publisher: {
    "@id": "https://sinmevaco.com.br/#organization",
  },
  inLanguage: "pt-BR",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://sinmevaco.com.br/busca?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        {/* Schema Markup - Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        {/* Schema Markup - WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <main>{children}</main>

        {/* Footer */}
        <Footer />

        {/* WhatsApp Float Button */}
        <a
          href="https://wa.me/5531997178316?text=Ol%C3%A1%21%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20SINMEVACO."
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-float"
          aria-label="Contato via WhatsApp"
        >
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
        </a>

        {/* Chat Widget - LeadConnector */}
        <Script
          src="https://widgets.leadconnectorhq.com/loader.js"
          data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
          data-widget-id="69430d8fcd151713d7bf7773"
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
