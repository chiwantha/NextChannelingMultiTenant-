"use client";
import { motion } from "framer-motion";

const HeroCarouselItem = () => {
  return (
    <section
      className="relative w-full h-full aspect-[1400/484]
     overflow-hidden rounded-lg"
    >
      {/* Background Image */}
      <motion.img
        src="/sys/hero/hero.jpg"
        alt="Arogya Hospitals Gampaha"
        className="absolute w-full h-full object-cover"
        initial={{ scale: 1.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50 flex flex-col
       md:flex-row items-center justify-center gap-4"
      >
        {/* Left Text */}
        <motion.div
          className="bg-[#0560D9]/70
          flex items-center rounded-lg p-4 max-w-xs h-full text-center"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-slate-200 text-sm md:text-base">
            Book appointments online and connect with trusted specialists
            easily.
          </p>
        </motion.div>

        {/* Center Heading */}
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-[#FFC935] uppercase">
            Welcome to Arogya Hospitals Gampaha
          </h1>
        </motion.div>

        {/* Right Text */}
        <motion.div
          className="bg-[#4DB847]/50 
          flex items-center rounded-lg p-4 max-w-xs h-full text-center"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <p className="text-slate-200 text-sm md:text-base">
            Manage your healthcare smoothly with our simple and reliable
            channeling platform.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroCarouselItem;
