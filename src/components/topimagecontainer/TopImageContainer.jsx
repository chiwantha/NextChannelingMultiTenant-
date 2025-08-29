import Image from "next/image";
import React from "react";

const TopImageContainer = ({
  image,
  url,
  title = "Hospital Channeling Portal",
  description = "Medical appointment booking service",
}) => {
  const imageSrc = image || url;
  const altText = `${title} - ${description}`;

  return (
    <figure className="relative w-full h-full aspect-[1400/484] min-h-1 bg-cover rounded-lg overflow-hidden shadow-md">
      <Image
        src={imageSrc}
        alt={altText}
        title={`${title} | Banner Image`}
        className="rounded-lg aspect-auto h-full object-cover"
        fill
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 1400px"
      />
      {/* Optional: Add structured data for the image */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl: imageSrc,
            name: title,
            description: description,
            representativeOfPage: true,
          }),
        }}
      />
    </figure>
  );
};

export default TopImageContainer;
