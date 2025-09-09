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

// Generate structured data for the home page
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Arogya Hospitals Portal - Online Doctor Channeling & Appointments",
    description:
      "Book doctor appointments online with Sri Lanka's best medical specialists. Arogya Hospitals online portal for easy channeling and healthcare services.",
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
        },
        {
          "@type": "Offer",
          name: "Medical Consultation",
          description:
            "Professional medical consultations with experienced doctors",
        },
      ],
    },
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
