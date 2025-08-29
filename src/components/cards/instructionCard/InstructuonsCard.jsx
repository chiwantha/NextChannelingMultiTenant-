import { Instructions } from "@/constant";

const InstructionsCard = () => {
  return (
    <section
      className="p-4 bg-[#0460D9] flex flex-col items-center justify-center text-center rounded-lg space-y-4"
      itemScope
      itemType="https://schema.org/HowTo"
    >
      {/* Topic */}
      <div className="text-white font-bold text-xl">
        <h2 itemProp="name">Instructions / උපදෙස්</h2>
      </div>

      <meta
        itemProp="description"
        content="Appointment booking process instructions"
      />

      <hr className="border-slate-400 w-4/6" />

      {/* English Instructions */}
      <div
        className="text-slate-200"
        itemProp="step"
        itemType="https://schema.org/HowToStep"
        itemScope
      >
        <meta itemProp="name" content="Confirmation Process" />
        <p itemProp="text">{Instructions.english}</p>
      </div>

      <hr className="border-slate-400 w-4/6" />

      {/* Sinhala Instructions */}
      <div
        className="text-slate-200 font-semibold"
        itemProp="step"
        itemType="https://schema.org/HowToStep"
        itemScope
      >
        <meta itemProp="name" content="තහවුරු කිරීමේ ක්රියාවලිය" />
        <p itemProp="text">{Instructions.sinhala}</p>
      </div>

      {/* Structured Data for HowTo */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "Appointment Booking Instructions",
            description: "Instructions for confirming your medical appointment",
            step: [
              {
                "@type": "HowToStep",
                name: "Confirmation Process",
                text: Instructions.english,
              },
              {
                "@type": "HowToStep",
                name: "තහවුරු කිරීමේ ක්රියාවලිය",
                text: Instructions.sinhala,
              },
            ],
          }),
        }}
      />
    </section>
  );
};

export default InstructionsCard;
