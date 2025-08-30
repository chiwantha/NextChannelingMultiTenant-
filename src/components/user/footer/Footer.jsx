import { Company } from "@/constant";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Links = [
  {
    title: "Main Web",
    link: `/`,
  },
  {
    title: "Arogya Channeling",
    link: `/`,
  },
  {
    title: "About Arogya",
    link: `https://arogyahospitals.lk/about`,
  },
  {
    title: "Services",
    link: `https://arogyahospitals.lk/services`,
  },
];

const Contact = [
  `Lan : 033 222 4592`,
  `WhatsApp : 070 745 5505`,
  `Mail : info@arogyahospitals.lk`,
  `Address : No.250 Colombo Rd, Gampaha`,
];

const Footer = () => {
  const logo = false;

  // Create structured data for the hospital
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Hospital",
    name: "Arogya Hospital",
    description: Company.description,
    telephone: "+94-33-222-4592",
    email: "info@arogyahospitals.lk",
    address: {
      "@type": "PostalAddress",
      streetAddress: "No.250 Colombo Rd",
      addressLocality: "Gampaha",
      addressCountry: "LK",
    },
    url: "https://www.arogyahospitals.lk",
    logo: "/hospital/logo/arogya_logo.png",
  };

  return (
    <footer className="w-full shadow-md" role="contentinfo">
      {/* Add structured data to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top Strip */}
      <div className="py-4 bg-[#0560D9]">
        <div
          className="mx-auto max-w-7xl px-2 flex flex-col items-center 
        justify-center space-y-4"
        >
          {/* Description */}
          <p
            className="text-neutral-200 max-w-4xl text-center"
            itemProp="description"
          >
            {Company.description}
          </p>

          {/* separator */}
          <hr className="border-gray-300/50 w-full" />

          {/* breef boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {/* Company Box */}
            <div
              className="flex flex-col items-center justify-center 
            space-y-3 p-3 rounded-lg text-center bg-[#FFC935]"
              itemScope
              itemType="https://schema.org/Hospital"
            >
              <Image
                src={`/hospital/logo/${logo || `arogya_logo.png`}`}
                width={100}
                height={100}
                alt={`Arogya Hospital Logo - ${Company.proud}`}
                className="object-contain aspect-auto"
                itemProp="logo"
              />
              <p className="text-gray-600" itemProp="slogan">
                {Company.proud}
              </p>
            </div>

            {/* Link Box */}
            <div className="flex flex-col items-end text-right">
              <h2 className="text-2xl font-black uppercase mb-1 text-[#FFC935]">
                {`Arogya` || "Hospital"} Links
              </h2>
              <nav aria-label="Footer navigation">
                {Links.map((item, index) => (
                  <span
                    className="text-neutral-200 hover:text-slate-300 mb-1 block"
                    key={index}
                  >
                    <Link
                      href={item.link}
                      aria-label={item.title}
                      title={item.title}
                    >
                      {item.title} -
                    </Link>
                  </span>
                ))}
              </nav>
            </div>

            {/* Contact Box */}
            <div
              className="flex flex-col items-start text-left
            border-neutral-300/50 md:border-l md:pl-4"
              itemScope
              itemType="https://schema.org/Hospital"
            >
              <h2 className="text-2xl font-black uppercase mb-1 text-[#FFC935]">
                Contact {`Arogya` || "Hospital"}
              </h2>
              <address className="not-italic">
                {Contact.map((item, index) => {
                  let itemprop,
                    linkProps = {};

                  if (item.includes("Lan")) {
                    itemprop = "telephone";
                    linkProps = { href: "tel:+94332224592" };
                  } else if (item.includes("WhatsApp")) {
                    linkProps = { href: "https://wa.me/94707455505" };
                  } else if (item.includes("Mail")) {
                    itemprop = "email";
                    linkProps = { href: "mailto:info@arogyahospitals.lk" };
                  } else if (item.includes("Address")) {
                    itemprop = "address";
                  }

                  return (
                    <span
                      className="text-neutral-100 mb-1 hover:text-slate-300 block"
                      key={index}
                      itemProp={itemprop}
                    >
                      {itemprop === "telephone" || itemprop === "email" ? (
                        <a {...linkProps} className="hover:underline">
                          - {item}
                        </a>
                      ) : (
                        <>- {item}</>
                      )}
                    </span>
                  );
                })}
              </address>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-[#0C4A9C] py-4">
        <div className="mx-auto max-w-7xl px-2 flex flex-col md:flex-row justify-between items-center text-sm text-neutral-300 text-center gap-2">
          <span>
            © {new Date().getFullYear()} K-Chord (Pvt) Ltd. All rights reserved.
          </span>
          <span>
            System Design & Developed by{" "}
            <strong className="text-white">
              <a
                href="https://www.kchord.com"
                rel="noopener noreferrer"
                aria-label="Visit K-Chord website"
              >
                K-Chord (Pvt) Ltd
              </a>
            </strong>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
