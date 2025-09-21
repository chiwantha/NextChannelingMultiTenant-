import { ToastContainer } from "react-toastify";
import "./globals.css";
import { Geist } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

// Company Information
const companyInfo = {
  name: "Arogya Hospitals",
  description:
    "Book doctor appointments online in Gampaha with Arogya Hospitals. Channel leading specialists easily through our online portal.",
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

// Metadata for SEO
export const metadata = {
  title: {
    default:
      "Doctor Channeling in Gampaha | Arogya Hospitals Channeling Portal",
    template: "%s | Arogya Hospitals Gampaha",
  },
  description:
    "Book doctor appointments online in Gampaha with Arogya Hospitals. Channel top specialists easily through our secure portal. Manage appointments and healthcare conveniently.",
  keywords: `Arogya Hospitals channeling, doctor channeling Gampaha, book doctor appointment Gampaha, specialist doctors Gampaha, online doctor booking Sri Lanka, 
    hospital portal Gampaha, Gampaha doctor booking, online doctor channeling Gampaha, best doctors in Gampaha, Gampaha hospital appointments,
    private hospital Gampaha, medical specialists Gampaha, book specialist doctors online, Gampaha healthcare services, Arogya Hospitals online portal,
    channel doctors online, top doctors Gampaha, Gampaha medical appointments, Sri Lanka doctor booking portal, hospital channeling portal`,
  icons: { icon: "/favicon.ico" },
  authors: [{ name: "Arogya Hospitals" }],
  creator: "Arogya Hospitals",
  publisher: "Arogya Hospitals",
  formatDetection: { email: false, address: false, telephone: false },
  metadataBase: new URL("https://portal.arogyahospitals.lk"),
  alternates: {
    canonical: "/",
    languages: { en: "https://portal.arogyahospitals.lk" },
  },
  openGraph: {
    title: "Doctor Channeling in Gampaha | Arogya Hospitals Channeling Portal",
    description:
      "Channel doctors online in Gampaha through Arogya Hospitals. Book appointments with top specialists easily using our secure online portal.",
    url: "https://portal.arogyahospitals.lk",
    siteName: "Arogya Hospitals Portal",
    images: [
      {
        url: "https://portal.arogyahospitals.lk/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Doctor Channeling Online at Arogya Hospitals Gampaha",
      },
    ],
    locale: "en_LK",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Doctor Channeling in Gampaha | Arogya Hospitals Channeling Portal",
    description:
      "Book your preferred doctor online at Arogya Hospitals in Gampaha. Channel top specialists conveniently and securely via our portal.",
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

// Structured Data
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    // Hospital
    {
      "@type": "Hospital",
      "@id": "https://www.arogyahospitals.lk#hospital",
      name: "Arogya Hospitals",
      description:
        "Book doctor appointments online in Gampaha with Arogya Hospitals. Channel top specialists and manage your healthcare easily through our portal.",
      url: "https://www.arogyahospitals.lk",
      logo: "https://portal.arogyahospitals.lk/hospital/logo/arogya_logo.png",
      telephone: "+94-33-222-4592",
      email: "info@arogyahospitals.lk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No.250 Colombo Rd",
        addressLocality: "Gampaha",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
      medicalSpecialty: "Multiple Specialties",
      openingHours: "Mo-Su 08:00-20:00",
      sameAs: [
        "https://www.facebook.com/arogyahospitals",
        "https://www.twitter.com/arogyahospitals",
        "https://www.linkedin.com/company/arogyahospitals",
      ],
    },
    // Website
    {
      "@type": "WebSite",
      "@id": "https://portal.arogyahospitals.lk#website",
      url: "https://portal.arogyahospitals.lk",
      name: "Arogya Hospitals Channeling Portal",
      description:
        "Online doctor channeling and appointment booking system in Gampaha. Find specialists and manage appointments easily online through Arogya Hospitals.",
      publisher: { "@id": "https://www.arogyahospitals.lk#hospital" },
      potentialAction: {
        "@type": "SearchAction",
        target:
          "https://portal.arogyahospitals.lk/search?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
    },
    // Doctor Channeling Service
    {
      "@type": "Service",
      "@id": "https://portal.arogyahospitals.lk#channeling",
      serviceType: "Doctor Channeling",
      provider: { "@id": "https://www.arogyahospitals.lk#hospital" },
      areaServed: { "@type": "City", name: "Gampaha" },
      availableChannel: {
        "@type": "ServiceChannel",
        serviceUrl: "https://portal.arogyahospitals.lk",
        servicePhone: "+94-33-222-4592",
      },
      description:
        "Online doctor channeling and appointment booking service in Gampaha. Channel top medical specialists through Arogya Hospitals Portal quickly and easily.",
    },
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="" data-scroll-behavior="smooth">
      <head>
        {/* Structured Data */}
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
        className={`${geistSans.variable} antialiased  scroll-smooth space-y-6`}
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
