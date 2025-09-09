import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Geist } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Company information for structured data
const companyInfo = {
  name: "Arogya Hospitals",
  description:
    "Sri Lanka's premier doctor channeling service. Book appointments with the best medical specialists in Sri Lanka through our online portal.",
  url: "https://portal.arogyahospitals.lk",
  mainUrl: "https://www.arogyahospitals.lk",
  logo: "https://portal.arogyahospitals.lk/hospital/logo/arogya_logo.png",
  telephone: "+94-33-222-4592",
  whatsapp: "+94-70-745-5505",
  email: "info@arogyahospitals.lk",
  address: {
    streetAddress: "No.250 Colombo Rd",
    addressLocality: "Gampaha",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
};

export const metadata = {
  title: {
    default:
      "Arogya Hospitals Portal - Online Doctor Channeling & Appointments",
    template: "%s | Arogya Hospitals Portal",
  },
  icons: {
    icon: "/favicon.ico",
  },
  description:
    "Book doctor appointments online with Sri Lanka's best medical specialists. Arogya Hospitals online portal for easy channeling and healthcare services.",
  keywords:
    "online doctor channeling, Sri Lanka doctors, medical appointments, healthcare portal, specialist doctors, Arogya Hospitals booking",
  authors: [{ name: "Arogya Hospitals" }],
  creator: "Arogya Hospitals",
  publisher: "Arogya Hospitals",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://portal.arogyahospitals.lk"),
  alternates: {
    canonical: "/",
    languages: {
      en: "https://portal.arogyahospitals.lk",
    },
  },
  openGraph: {
    title: "Arogya Hospitals Portal - Online Doctor Channeling",
    description:
      "Book appointments with Sri Lanka's best doctors through our online portal.",
    url: "https://portal.arogyahospitals.lk",
    siteName: "Arogya Hospitals Portal",
    images: [
      {
        url: "https://portal.arogyahospitals.lk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arogya Hospitals Online Portal - Doctor Channeling Service",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Arogya Hospitals Portal - Online Doctor Channeling",
    description:
      "Book appointments with Sri Lanka's best doctors through our online portal.",
    creator: "@arogyahospitals",
    images: ["https://portal.arogyahospitals.lk/twitter-image.jpg"],
  },
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
};

// Generate structured data for the organization and service
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Hospital",
      "@id": "https://www.arogyahospitals.lk#hospital",
      name: "Arogya Hospitals",
      description: companyInfo.description,
      url: companyInfo.mainUrl,
      logo: companyInfo.logo,
      telephone: companyInfo.telephone,
      email: companyInfo.email,
      address: {
        "@type": "PostalAddress",
        streetAddress: companyInfo.address.streetAddress,
        addressLocality: companyInfo.address.addressLocality,
        addressRegion: companyInfo.address.addressRegion,
        addressCountry: companyInfo.address.addressCountry,
      },
      medicalSpecialty: "Multiple Specialties",
      openingHours: "Mo-Su 08:00-20:00",
      sameAs: [
        "https://www.facebook.com/arogyahospitals",
        "https://www.twitter.com/arogyahospitals",
        "https://www.linkedin.com/company/arogyahospitals",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://portal.arogyahospitals.lk#website",
      url: "https://portal.arogyahospitals.lk",
      name: "Arogya Hospitals Portal",
      description: "Online doctor channeling and appointment booking system",
      publisher: {
        "@id": "https://www.arogyahospitals.lk#hospital",
      },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://portal.arogyahospitals.lk/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="select-none" data-scroll-behavior="smooth">
      <head>
        {/* Structured data for the entire website */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />

        {/* Preload critical resources */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      </head>

      <body
        className={`${geistSans.variable} antialiased scroll-smooth space-y-6`}
        cz-shortcut-listen="true"
      >
        {children}
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-5T5DEMZPKG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-5T5DEMZPKG');
          `}
        </Script>
        <ToastContainer />
      </body>
    </html>
  );
}
