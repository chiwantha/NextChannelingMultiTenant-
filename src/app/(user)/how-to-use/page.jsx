import { channelingSteps } from "@/constant";
import Image from "next/image";

export const generateMetadata = () => {
  return {
    title: `How to Channel a Doctor - Step by Step Guide`,
    description: `Learn how to book doctor appointments online with our easy step-by-step guide. Complete instructions for using Arogya Hospitals' channeling portal.`,
    keywords:
      "how to channel doctor, book appointment, online booking, doctor channeling guide, Arogya Hospitals",
    openGraph: {
      title: "How to Channel a Doctor - Step by Step Guide | Arogya Hospitals",
      description:
        "Learn how to book doctor appointments online with our easy step-by-step guide.",
      url: "https://portal.arogyahospitals.lk/how-to-use",
      images: [
        {
          url: "/how-to-use-og.jpg",
          width: 1200,
          height: 630,
          alt: "How to Channel a Doctor - Arogya Hospitals Guide",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "How to Channel a Doctor - Step by Step Guide | Arogya Hospitals",
      description:
        "Learn how to book doctor appointments online with our easy step-by-step guide.",
    },
    alternates: {
      canonical: "https://portal.arogyahospitals.lk/how-to-use",
    },
  };
};

// Generate structured data for the HowTo guide
const generateHowToStructuredData = (steps) => {
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to Channel a Doctor at Arogya Hospitals",
    description:
      "Step-by-step guide to booking doctor appointments online through Arogya Hospitals portal",
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
        contentUrl: step.image,
        description: step.title,
      },
    })),
    supply: [
      {
        "@type": "HowToSupply",
        name: "Internet connection",
      },
      {
        "@type": "HowToSupply",
        name: "Web browser",
      },
    ],
  };
};

const HowToUsePage = () => {
  const structuredData = generateHowToStructuredData(channelingSteps);

  return (
    <>
      {/* Structured data for the HowTo guide */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="flex">
        <div className="w-full gap-4 md:grid-cols-4 grid grid-cols-1">
          {/* Main Content */}
          <main className="md:col-span-3 space-y-6">
            <header className="bg-[#0560D9] text-white font-bold rounded-lg p-4 sm:text-2xl text-lg">
              <h1>HOW TO CHANNEL A DOCTOR - STEP BY STEP GUIDE</h1>
            </header>

            {/* Introduction */}
            <section className="bg-slate-200 p-4 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold text-gray-700 mb-3">
                Easy Online Doctor Booking
              </h2>
              <p className="text-gray-600">
                Follow these simple steps to book your doctor appointment
                through Arogya Hospitals' online portal. Our system is designed
                to be user-friendly and convenient, saving you time and effort.
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
                            <meta
                              itemProp="position"
                              content={actionIndex + 1}
                            />
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

          {/* Sidebar */}
          <aside className=" md:col-span-1   rounded-lg">
            <div className="sticky top-4">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Quick Tips
              </h2>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-600 mb-1">
                    📋 Prepare Documents
                  </h3>
                  <p className="text-sm text-gray-600">
                    Have your NIC and previous medical records ready
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-600 mb-1">
                    ⏰ Time Slots
                  </h3>
                  <p className="text-sm text-gray-600">
                    New sessions are added daily, check regularly
                  </p>
                </div>
                <div className="bg-white p-3 hidden rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-600 mb-1">💳 Payment</h3>
                  <p className="text-sm text-gray-600">
                    Multiple payment options available
                  </p>
                </div>
                <div className="bg-white p-3 rounded-lg shadow-sm">
                  <h3 className="font-medium text-blue-600 mb-1">
                    📱 Mobile Friendly
                  </h3>
                  <p className="text-sm text-gray-600">
                    Book from your smartphone anytime, anywhere
                  </p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </>
  );
};

export default HowToUsePage;
