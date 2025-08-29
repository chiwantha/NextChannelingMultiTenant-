import Image from "next/image";

const ProfileCard = ({ ProfileData }) => {
  // Create structured data for the doctor profile
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Physician",
    name: ProfileData?.name || "Unknown Name",
    medicalSpecialty: ProfileData?.specialization || "None",
    description: ProfileData?.description || "No Data",
    worksFor: {
      "@type": "Hospital",
      name: ProfileData?.hospital || "Unknown Hospital",
    },
    image: `/doctors/${ProfileData?.image || "default.png"}`,
  };

  return (
    <>
      {/* Add structured data to the page */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <article
        className="p-4 bg-white border h-fit border-[#0460D9]/50 rounded-lg shadow-md flex flex-col items-center justify-center space-y-4"
        itemScope
        itemType="https://schema.org/Physician"
      >
        {/* Doctor Image */}
        <div className="relative w-32 h-32 sm:w-36 sm:h-36">
          <Image
            src={`/doctors/${ProfileData?.image || "default.png"}`}
            alt={
              ProfileData?.name
                ? `Dr. ${ProfileData.name}, ${
                    ProfileData.specialization || "medical professional"
                  }`
                : "Medical professional profile picture"
            }
            title={
              ProfileData?.name
                ? `Dr. ${ProfileData.name} - ${
                    ProfileData.specialization || "Medical Professional"
                  }`
                : "Medical Professional"
            }
            className="w-full h-full object-cover rounded-full border-2 border-[#0460D9]"
            fill
            sizes="(max-width: 640px) 128px, (max-width: 768px) 144px, 144px"
          />
        </div>

        {/* Doctor Information */}
        <div className="text-center items-center flex flex-col space-y-2 w-full">
          <h1
            className="uppercase text-lg font-semibold text-gray-700"
            itemProp="name"
          >
            {ProfileData?.name || "Unknown Name"}
          </h1>
          <meta
            itemProp="medicalSpecialty"
            content={ProfileData?.specialization || "None"}
          />
          <meta
            itemProp="description"
            content={ProfileData?.description || "No Data"}
          />

          <hr className="w-1/4 border-gray-300" />

          <p
            className="uppercase text-xs sm:text-sm text-gray-500"
            itemProp="medicalSpecialty"
          >
            {ProfileData?.specialization || "None"}
          </p>

          <hr className="w-1/4 border-gray-300" />

          <p
            className="uppercase text-[12px] text-gray-500"
            itemProp="description"
          >
            {ProfileData?.description || "No Data"}
          </p>

          <hr className="w-1/4 border-gray-300" />

          <div
            itemProp="worksFor"
            itemScope
            itemType="https://schema.org/Hospital"
          >
            <p
              className="uppercase text-xs sm:text-sm text-gray-500"
              itemProp="name"
            >
              {ProfileData?.hospital || "Unknown Hospital"}
            </p>
          </div>
        </div>
      </article>
    </>
  );
};

export default ProfileCard;
