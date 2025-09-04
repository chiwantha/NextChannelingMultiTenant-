"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const PoweredByKchord = () => {
  return (
    <section className="relative w-full aspect-[1400/484] overflow-hidden rounded-lg">
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.5 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image
          src="/sys/hero/kchord/background.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </motion.div>

      {/* Foreground Content */}
      <div className="absolute inset-0 flex flex-col sm:flex-row items-center justify-around gap-4 p-4 md:p-8">
        {/* Left Image */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/sys/hero/kchord/left.png"
            alt="Left"
            width={250}
            height={150}
            className="w-[120px] sm:w-[180px] md:w-[250px] h-auto"
          />
        </motion.div>

        {/* Center Image */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/sys/hero/kchord/center.png"
            alt="Center"
            width={400}
            height={150}
            className="w-[180px] sm:w-[300px] md:w-[400px] h-auto"
          />
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex items-center justify-center"
        >
          <Image
            src="/sys/hero/kchord/right.png"
            alt="Right"
            width={250}
            height={150}
            className="w-[120px] sm:w-[180px] md:w-[250px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default PoweredByKchord;
