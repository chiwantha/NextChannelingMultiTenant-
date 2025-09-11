import IconButton from "@/components/shared/buttons/iconbutton/IconButton";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import ArogyaBanner from "@/components/user/hero/ArogyaBanner";
import PoweredByKchord from "@/components/user/hero/PoweredByKchord";

export const Menu = [
  {
    title: "Channeling",
    icon: `/sys/menu/channeling.png`,
    subtitle: "Channel a doctor",
    help: "Book doctor appointments from your phone or computer.",
    badge: "New !",
    badgeColor: "hot",
    link: "/doctors",
  },
  {
    title: "Channel History",
    icon: `/sys/menu/channel_history.png`,
    subtitle: "Browse your history",
    help: "See your previous appointments and doctor visit records.",
    badge: "New !",
    badgeColor: "hot",
    link: "/appointments",
  },
  {
    title: "Online Pharmacy",
    icon: `/sys/menu/pharmacy.png`,
    subtitle: "Buy medicine online",
    help: "Order your medications online and get doorstep delivery.",
    badge: "Coming Soon !",
    badgeColor: "warning",
    link: "/",
  },
  {
    title: "Lab Appointments",
    icon: `/sys/menu/lab.png`,
    subtitle: "Book lab tests",
    help: "Schedule lab tests online without waiting in line.",
    badge: "Coming Soon !",
    badgeColor: "warning",
    link: "/",
  },
  {
    title: "Online Prescriptions",
    icon: `/sys/menu/prescription.png`,
    subtitle: "Your e-prescriptions",
    help: "View prescriptions issued through your channeling visits.",
    badge: "Coming Soon !",
    badgeColor: "warning",
    link: "/",
  },
  {
    title: "Help Desk",
    icon: `/sys/menu/help.png`,
    subtitle: "How to use",
    help: "Read documents and guides for easy navigation and system use.",
    badge: "Try Now !",
    badgeColor: "success",
    link: "/how-to-use",
  },
];

// Metadata for SEO
export const metadata = {
  title: "Doctor Channeling in Gampaha | Arogya Hospitals Portal",
  description:
    "Channel top doctors and specialists in Gampaha online with Arogya Hospitals. Book appointments easily, access medical consultations, and manage your healthcare conveniently through our portal.",
  keywords: `doctor channeling Gampaha, book doctor appointment Gampaha, specialist doctors Gampaha, online doctor booking Sri Lanka, Arogya Hospitals Gampaha,
    hospital portal Gampaha, Gampaha doctor booking, online doctor channeling Gampaha, best doctors in Gampaha, Gampaha hospital appointments,
    private hospital Gampaha, medical specialists Gampaha, book specialist doctors online, Gampaha healthcare services, Arogya Hospitals online portal,
    channel doctors online, top doctors Gampaha, Gampaha medical appointments, Sri Lanka doctor booking portal, hospital channeling portal`,
  authors: [{ name: "Arogya Hospitals" }],
  creator: "Arogya Hospitals",
  publisher: "Arogya Hospitals",
  openGraph: {
    title: "Doctor Channeling in Gampaha | Arogya Hospitals Portal",
    description:
      "Channel your preferred specialist doctors in Gampaha easily with Arogya Hospitals online portal. Book appointments securely and quickly online.",
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
    title: "Doctor Channeling in Gampaha | Arogya Hospitals Portal",
    description:
      "Book your preferred doctor online at Arogya Hospitals Gampaha. Channel top specialists easily via our secure portal and manage appointments quickly.",
    creator: "@arogyahospitals",
    images: ["https://portal.arogyahospitals.lk/twitter-image.jpg"],
  },
  robots: { index: true, follow: true },
};

const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@graph": [
      // WebPage
      {
        "@type": "WebPage",
        "@id": "https://portal.arogyahospitals.lk#webpage",
        name: "Doctor Channeling in Gampaha | Arogya Hospitals Portal",
        description:
          "Book doctor appointments online in Gampaha with Arogya Hospitals. Channel top specialists and manage your healthcare easily through our portal.",
        url: "https://portal.arogyahospitals.lk",
        breadcrumb: {
          "@type": "BreadcrumbList",
          itemListElement: [
            {
              "@type": "ListItem",
              position: 1,
              name: "Home",
              item: "https://portal.arogyahospitals.lk",
            },
          ],
        },
        mainEntity: {
          "@type": "MedicalOrganization",
          name: "Arogya Hospitals",
          medicalSpecialty: [
            "General Medicine",
            "Cardiology",
            "Pediatrics",
            "Dermatology",
            "Orthopedics",
          ],
          makesOffer: [
            {
              "@type": "Offer",
              name: "Doctor Channeling Service",
              description: "Online appointment booking with specialist doctors",
              url: "https://portal.arogyahospitals.lk/doctors",
            },
            {
              "@type": "Offer",
              name: "Medical Consultation",
              description:
                "Professional medical consultations with experienced doctors",
              url: "https://portal.arogyahospitals.lk/doctors",
            },
          ],
        },
      },
      // Hospital
      {
        "@type": "Hospital",
        "@id": "https://www.arogyahospitals.lk#hospital",
        name: "Arogya Hospitals",
        description:
          "Book doctor appointments online in Gampaha with Arogya Hospitals. Channel top specialists and manage healthcare easily.",
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
};

export default function Home() {
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Add structured data to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="space-y-6">
        {/* Hero Section with Carousel */}
        <section aria-label="Hospital banner images" className="order-1">
          <Carousel delay={5000}>
            <CarouselContent>
              {/* <CarouselItem>
                <TopImageContainer
                  image={`/hospital/banner/arogya_banner.png`}
                  title="Arogya Hospital - Premier Healthcare Services"
                  description="Sri Lanka's leading hospital with specialist doctors and advanced medical care"
                />
              </CarouselItem> */}
              <CarouselItem>
                <ArogyaBanner />
              </CarouselItem>
              <CarouselItem>
                <PoweredByKchord />
              </CarouselItem>
            </CarouselContent>
          </Carousel>
        </section>

        {/* Services Grid */}
        <section
          aria-labelledby="quick-services-heading"
          className="order-2 sm:order-2 md:order-2"
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <IconButton
              title={Menu[0].title}
              key={Menu[0].title}
              icon={Menu[0].icon}
              subtitle={Menu[0].subtitle}
              active={true}
              badge={false}
              badgeText={Menu[0].badge}
              badgeColor={Menu[0].badgeColor}
              link={Menu[0].link}
              aria-label={`${Menu[0].title} - ${Menu[0].subtitle}`}
            />
            {Menu.slice(1, 6).map((item) => (
              <IconButton
                title={item.title}
                key={item.title}
                icon={item.icon}
                subtitle={item.subtitle}
                active={false}
                badge={item.badge}
                badgeColor={item.badgeColor}
                badgeText={item.badge}
                link={item.link}
                aria-label={`${item.title} - ${item.subtitle}`}
              />
            ))}
          </div>
        </section>

        {/* Services Introduction */}
        {/* Services Introduction */}
      </div>
    </>
  );
}
