"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const ArogyaBanner = () => {
  return (
    <section
      className="relative w-full aspect-[1400/484] overflow-hidden rounded-lg
      bg-[#FECA35]"
      title="Arogya Hospital - Premier Healthcare Services"
      description="Sri Lanka's leading hospital with specialist doctors and advanced medical care"
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute inset-0 bottom-0 z-50 w-full h-full"
      >
        <Image
          src="/hospital/banner/arogya/bottom.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      <motion.div
        initial={{ y: -50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute  z-40 w-full h-full"
      >
        <Image
          src="/hospital/banner/arogya/top.png"
          alt="Background"
          fill
          className="object-top object-contain "
          priority
        />
      </motion.div>
    </section>
  );
};

export default ArogyaBanner;
