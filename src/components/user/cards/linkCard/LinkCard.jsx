"use client";
import Button from "@/components/shared/buttons/button/Button";
import { motion } from "framer-motion";
import Image from "next/image";

const LinkCard = ({ title, description, link, image, index, active }) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`relative rounded-lg shadow-md border

        ${
          !active
            ? `hover:border-[#0560D9] border-slate-400 
        hover:bg-slate-100 bg-slate-50 `
            : `hover:border-[#0560D9] border-slate-400 
            hover:bg-[#185db8] bg-[#0560D9] `
        }
        
        p-4 flex flex-col space-y-4
        overflow-hidden group transition-all duration-300 justify-between`}
    >
      {/* Absolute image on the right */}
      {!active && (
        <div
          className="absolute top-0 right-[-200px] z-40 h-full w-full
            mask-l-from-10%"
        >
          <Image
            src={image}
            alt={title}
            fill
            priority
            className="object-cover right-0 w-fit "
          />
        </div>
      )}

      {/* Content */}
      <h3
        className={`z-50 tracking-tight uppercase font-bold text-lg transition-all duration-300
       ${
         !active
           ? `group-hover:text-[#0560D9] text-slate-700`
           : `group-hover:text-[#fcfcfc] text-slate-100`
       }`}
      >
        {title}
      </h3>
      <p
        className={`z-50 text-sm w-[70%] ${
          !active ? `text-slate-600` : `text-slate-300`
        }`}
      >
        {description}
      </p>
      <Button
        link={link || "#"}
        title="Learn More"
        pd={`px-4 py-2 z-50  text-left w-fit mt-1`}
        bg={
          active
            ? `bg-slate-100 hover:bg-slate-200 text-[#0560D9] hover:text-[#1153aa]`
            : false
        }
      />
    </motion.article>
  );
};

export default LinkCard;
