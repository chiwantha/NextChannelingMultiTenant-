"use client";
import { motion } from "framer-motion";
import Button from "../../buttons/button/Button";

const NotFoundPageCmp = ({ title, link }) => {
  const bounceTransition = {
    y: {
      duration: 0.6,
      yoyo: Infinity,
      ease: "easeInOut",
    },
  };

  const fadeInScale = {
    initial: { opacity: 0, scale: 0.8 },
    animate: { opacity: 1, scale: 1 },
    transition: { duration: 0.5, ease: "easeOut" },
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex text-9xl font-extrabold ">
        {/* 4 */}
        <motion.span
          {...fadeInScale}
          animate={{ ...fadeInScale.animate, rotate: [0, 10, -10, 0] }}
          transition={{ duration: 1.2, repeat: Infinity, repeatType: "loop" }}
          className="mx-2 text-[#0560D9]"
        >
          4
        </motion.span>

        {/* 0 */}
        <motion.span
          {...fadeInScale}
          animate={{
            ...fadeInScale.animate,
            scale: [1, 1.2, 1, 1.2, 1],
            rotate: [0, 5, -5, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="mx-2 text-[#418ef3]"
        >
          0
        </motion.span>

        {/* 4 */}
        <motion.span
          {...fadeInScale}
          animate={{ ...fadeInScale.animate, y: [0, -20, 0, -20, 0] }}
          transition={bounceTransition}
          className="mx-2 text-[#226dcf]"
        >
          4
        </motion.span>
      </div>

      <motion.p
        className="mt-4 text-xl text-gray-500 uppercase"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Page not found.
      </motion.p>

      <motion.div
        className="mt-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Button
          pd={`px-4 py-2 `}
          title={title || "Back To Home"}
          link={link || "/"}
        />
      </motion.div>
    </div>
  );
};

export default NotFoundPageCmp;
