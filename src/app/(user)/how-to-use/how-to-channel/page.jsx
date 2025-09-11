import { channelingSteps } from "@/constant";
import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: `How to Channel a Doctor Online | Arogya Hospitals Gampaha`,
    description: `Step-by-step guide to channeling doctors online via Arogya Hospitals portal in Gampaha. Book appointments quickly and conveniently.`,
    keywords:
      "how to channel doctor, online doctor booking Gampaha, doctor appointments Gampaha, Arogya Hospitals, channeling guide, Sri Lanka",
    openGraph: {
      title: "How to Channel a Doctor Online | Arogya Hospitals Gampaha",
      description:
        "Learn how to book doctor appointments online with our step-by-step channeling guide at Arogya Hospitals in Gampaha.",
      url: "https://portal.arogyahospitals.lk/how-to-use/how-to-channel",
      siteName: "Arogya Hospitals",
      images: [
        {
          url: "https://portal.arogyahospitals.lk/images/how-to-channel-og.jpg",
          width: 1200,
          height: 630,
          alt: "How to Channel a Doctor Online - Arogya Hospitals Gampaha",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "How to Channel a Doctor Online | Arogya Hospitals Gampaha",
      description:
        "Step-by-step guide to channel doctors online at Arogya Hospitals in Gampaha. Book your doctor appointments quickly and securely.",
      images: [
        "https://portal.arogyahospitals.lk/images/how-to-channel-og.jpg",
      ],
    },
    alternates: {
      canonical: "https://portal.arogyahospitals.lk/how-to-use/how-to-channel",
    },
  };
};

const generateHowToStructuredData = (steps) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Channel a Doctor at Arogya Hospitals in Gampaha",
    description:
      "Step-by-step guide to booking doctor appointments online through Arogya Hospitals portal in Gampaha.",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "LKR",
      value: "0",
    },
    step: steps.map((step, index) => ({
      "@type": "HowToStep",
      position: index + 1,
      name: step.title,
      itemListElement: step.actions.map((action, actionIndex) => ({
        "@type": "HowToDirection",
        position: actionIndex + 1,
        text: action,
      })),
      image: {
        "@type": "ImageObject",
        contentUrl: `https://portal.arogyahospitals.lk${step.image}`,
        description: step.title,
      },
    })),
    supply: [
      { "@type": "HowToSupply", name: "Internet connection" },
      { "@type": "HowToSupply", name: "Web browser" },
    ],
    tool: [
      { "@type": "HowToTool", name: "Computer / Mobile device" },
      { "@type": "HowToTool", name: "Arogya Hospitals portal access" },
    ],
    provider: {
      "@type": "Hospital",
      name: "Arogya Hospitals",
      url: "https://portal.arogyahospitals.lk",
      address: {
        "@type": "PostalAddress",
        streetAddress: "No.250 Colombo Rd",
        addressLocality: "Gampaha",
        addressRegion: "Western Province",
        addressCountry: "LK",
      },
      telephone: "+94-33-222-4592",
      email: "info@arogyahospitals.lk",
    },
  };
};

const HowToChannelPage = () => {
  const structuredData = generateHowToStructuredData(channelingSteps);

  return (
    <>
      {/* Structured data for the HowTo guide */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Main Content */}
      <main className=" space-y-6">
        <header className="bg-[#0560D9] text-white font-bold rounded-lg p-4 sm:text-2xl text-lg">
          <h1>HOW TO CHANNEL A DOCTOR - STEP BY STEP GUIDE</h1>
        </header>

        {/* Introduction */}
        <section className="bg-slate-200 p-4 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-3">
            Easy Online Doctor Booking
          </h2>
          <p className="text-gray-600">
            Follow these simple steps to book your doctor appointment through
            Arogya Hospitals' online portal. Our system is designed to be
            user-friendly and convenient, saving you time and effort.
          </p>
        </section>

        {/* Steps Grid */}
        <section aria-labelledby="steps-heading">
          <h2 id="steps-heading" className="sr-only">
            Channeling Steps
          </h2>

          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {channelingSteps.map((step, index) => (
              <article
                className="w-full rounded-lg overflow-hidden shadow-md border-2 hover:border-[#0560D9] transition-all duration-400
                       border-gray-200 bg-white hover:bg-gradient-to-tr from-slate-100  to-blue-50"
                key={index}
                itemScope
                itemType="https://schema.org/HowToStep"
                itemProp="step"
              >
                <meta itemProp="position" content={index + 1} />

                <div className="w-full aspect-video relative h-auto">
                  <Image
                    fill
                    src={step.image}
                    alt={`Step ${index + 1}: ${step.title}`}
                    title={step.title}
                    itemProp="image"
                  />
                </div>

                <div className="flex px-4 py-4 space-y-2 flex-col">
                  <h3
                    className="font-bold tracking-tight text-xl uppercase"
                    itemProp="name"
                  >
                    Step {index + 1} : {step.title}
                  </h3>

                  <hr className="w-full border-gray-200" />

                  <p className=" text-slate-600" itemProp="text">
                    {step.description}
                  </p>

                  <hr className="w-full border-gray-200" />

                  <div className="flex flex-wrap gap-2">
                    {step.actions.map((action, actionIndex) => (
                      <div
                        className="px-3 py-2 rounded-lg bg-green-100 border border-green-200"
                        key={actionIndex}
                        itemProp="itemListElement"
                        itemType="https://schema.org/HowToDirection"
                      >
                        <meta itemProp="position" content={actionIndex + 1} />
                        <span className="text-sm font-semibold tracking-tighter text-green-800">
                          {action}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Additional Help Section */}
        <section className="bg-blue-50 hidden p-6 rounded-lg border border-blue-200">
          <h2 className="text-xl font-semibold text-blue-800 mb-3">
            Need More Help?
          </h2>
          <p className="text-blue-700 mb-4">
            If you encounter any issues while booking your appointment, our
            support team is here to help you.
          </p>
          <ul className="list-disc list-inside space-y-1 text-blue-600">
            <li>
              Call us: <strong>033 222 4592</strong>
            </li>
            <li>
              WhatsApp: <strong>070 745 5505</strong>
            </li>
            <li>
              Email: <strong>info@arogyahospitals.lk</strong>
            </li>
            <li>Visit our help desk for in-person assistance</li>
          </ul>
        </section>
      </main>
    </>
  );
};

export default HowToChannelPage;
