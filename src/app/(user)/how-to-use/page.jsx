import LinkCard from "@/components/user/cards/linkCard/LinkCard";

export const metadata = {
  title: "How to Use Arogya Hospitals Online Portal",
  description:
    "Learn how to book doctor appointments, order medicines online, schedule lab tests, and access prescriptions digitally through Arogya Hospitals' online portal.",
  keywords: [
    "Arogya Hospitals",
    "doctor appointments online",
    "online pharmacy Sri Lanka",
    "book lab tests",
    "digital prescriptions",
    "hospital portal guide",
  ],
  openGraph: {
    title: "How to Use Arogya Hospitals Online Portal",
    description:
      "Step-by-step guide to using Arogya Hospitals online portal for channeling, pharmacy orders, lab appointments, and prescriptions.",
    url: "https://your-domain.com/how-to-use",
    siteName: "Arogya Hospitals",
    images: [
      {
        url: "https://your-domain.com/images/how-to-use-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Arogya Hospitals Online Portal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "How to Use Arogya Hospitals Online Portal",
    description:
      "Easily book doctor appointments, order medicines, and access medical services online with Arogya Hospitals portal.",
    images: ["https://your-domain.com/images/how-to-use-cover.jpg"],
  },
};

const links = [
  {
    title: "Channeling",
    link: "/how-to-use/how-to-channel",
    description:
      "Easily book doctor appointments online through our secure portal.",
    image: "/sys/menu/channeling.png",
  },
  {
    title: "Online Pharmacy",
    link: false,
    description:
      "Order your medicines online and get them delivered to your doorstep.",
    image: "/sys/menu/pharmacy.png",
  },
  {
    title: "Lab Appointments",
    link: false,
    description: "Book lab tests online and get your reports digitally.",
    image: "/sys/menu/lab.png",
  },
  {
    title: "Online Prescriptions",
    link: false,
    description: "View and download your prescriptions anytime, anywhere.",
    image: "/sys/menu/prescription.png",
  },
  {
    title: "About Portal",
    link: false,
    description: "Learn more about portal and build of the system.",
    image: "/sys/menu/prescription.png",
    active: true,
  },
];

const HowToUsePage = () => {
  return (
    <div className="space-y-6">
      {/* Hero Section */}
      <header className="p-6 rounded-lg shadow-md bg-[#0560D9]">
        <h1 className="text-3xl font-bold mb-2 text-slate-100">
          How to Use Arogya Hospitals Online Portal
        </h1>
        <p className="text-gray-200">
          Manage your healthcare with ease. Book appointments, order medicines,
          and access lab results—all from one secure platform.
        </p>
      </header>

      {/* Service Cards */}
      <section
        aria-labelledby="services-heading"
        className=" grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3"
      >
        <h2 id="services-heading" className="sr-only">
          Available Services
        </h2>

        {links.map((item, index) => (
          <LinkCard
            title={item.title}
            description={item.description}
            link={item.link}
            image={item.image}
            index={index}
            key={index}
            active={item.active || false}
          />
        ))}
      </section>

      {/* JSON-LD Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "How to Use Arogya Hospitals Online Portal",
            description:
              "Learn how to use Arogya Hospitals portal for doctor appointments, online pharmacy, lab appointments, and prescriptions.",
            publisher: {
              "@type": "Organization",
              name: "Arogya Hospitals",
              url: "https://your-domain.com",
            },
          }),
        }}
      />
    </div>
  );
};

export default HowToUsePage;
