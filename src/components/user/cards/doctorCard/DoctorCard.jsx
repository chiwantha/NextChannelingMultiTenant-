"use client";
import Link from "next/link";
import Image from "next/image";
import Button from "../../../shared/buttons/button/Button";
import { motion } from "framer-motion";

const DoctorCard = ({ id, name, specialization, img, gender, slug, index }) => {
  // Create structured data for the doctor
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `#doctor-${id}`,
    name: `Dr. ${name}`,
    medicalSpecialty: specialization,
    gender: gender,
    image: `/doctors/${img}`,
    url: `${
      process.env.NEXT_PUBLIC_SITE_URL || "https://yourclinic.com"
    }/doctors/${slug}`,
  };

  return (
    <>
      {/* Add structured data to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <motion.article
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="rounded-xl p-6 w-full sm:max-w-sm md:max-w-md lg:max-w-sm flex flex-col
         justify-between items-center border border-[#0560D9]/20 bg-white shadow-md 
        hover:shadow-lg hover:border transition-shadow duration-300 space-y-4"
        itemScope
        itemType="https://schema.org/Physician"
        id={`doctor-${id}`}
      >
        {/* Top: Doctor Image */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36">
          <Image
            src={`/doctors/${img}`}
            alt={`Dr. ${name}, ${specialization} specialist`}
            title={`Dr. ${name} - ${specialization}`}
            className={`w-full h-full object-cover rounded-full border-2 border-[#0460D9]`}
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 144px"
            priority={index < 3} // Load first 3 images with priority
          />
        </div>

        {/* Middle: Doctor Info */}
        <div className="text-center space-y-2 w-full flex-grow flex flex-col items-center justify-center">
          <meta itemProp="medicalSpecialty" content={specialization} />
          <meta itemProp="gender" content={gender} />

          <p className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide">
            {gender}
          </p>
          <h3
            className="uppercase leading-5 text-lg sm:text-lg 
          font-semibold text-gray-700 "
            itemProp="name"
          >
            Dr. {name}
          </h3>
          <p
            className="uppercase text-xs sm:text-sm text-gray-500 tracking-wide"
            itemProp="medicalSpecialty"
          >
            {specialization}
          </p>
        </div>

        {/* Bottom: Book Button */}
        <Link
          href={`/doctors/${slug}`}
          className="w-full text-center flex justify-center mt-auto"
          aria-label={`Book an appointment with Dr. ${name}, ${specialization}`}
          itemProp="url"
        >
          <Button title="Book Now" fw={true} />
        </Link>
      </motion.article>
    </>
  );
};

export default DoctorCard;
