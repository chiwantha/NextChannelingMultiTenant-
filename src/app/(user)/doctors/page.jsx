import DoctorCard from "@/components/user/cards/doctorCard/DoctorCard";
import Pagination from "@/components/shared/pagination/Pagination";
import DocSearch from "@/components/user/search/doctorSearch/DocSearch";
import { getDocListCombo } from "@/lib/data";

export const generateMetadata = async ({ searchParams }) => {
  const param = await searchParams;
  const page = param.page || "1";

  // Global metadata
  const titleBase = "Doctor Channeling in Gampaha";
  const descriptionBase =
    "Browse the complete list of doctors and specialists at Arogya Hospitals in Gampaha. Channel top medical experts online and book appointments easily through our secure portal.";
  const keywordsBase = `
    Arogya Hospitals channeling, doctor channeling Gampaha, book doctor appointment Gampaha,
    specialist doctors Gampaha, online doctor booking Sri Lanka, hospital portal Gampaha,
    Gampaha doctor booking, online doctor channeling Gampaha, best doctors in Gampaha,
    Gampaha hospital appointments, private hospital Gampaha, medical specialists Gampaha,
    book specialist doctors online, Gampaha healthcare services, channel doctors online
  `;

  // Optional page-specific adjustments
  let title = titleBase;
  let description = descriptionBase;
  if (page && page !== "1") {
    title = `Doctors - Page ${page}`;
    description = `Browse doctors page ${page} at Arogya Hospitals Gampaha. Find specialists and book appointments online easily.`;
  }

  return {
    title,
    description,
    keywords: keywordsBase,
    openGraph: {
      title,
      description,
      url: "https://portal.arogyahospitals.lk/doctors",
      siteName: "Arogya Hospitals Portal",
      images: [
        {
          url: "/doctors-og.jpg",
          width: 1200,
          height: 630,
          alt: "Doctors Directory | Arogya Hospitals Gampaha",
        },
      ],
      locale: "en_LK",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/doctors-og.jpg"],
      creator: "@arogyahospitals",
    },
    alternates: {
      canonical: "https://portal.arogyahospitals.lk/doctors",
    },
    robots: { index: true, follow: true },
  };
};

// Generate structured data for the doctors page
const generateDoctorsStructuredData = (doctors, pagination, searchParams) => {
  const baseUrl = "https://portal.arogyahospitals.lk";

  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Doctors Directory | Arogya Hospitals Gampaha",
    description:
      "A complete list of doctors and specialists available at Arogya Hospitals in Gampaha. Channel doctors online and book appointments easily.",
    url: `${baseUrl}/doctors`,
    numberOfItems: doctors.length,
    itemListElement: doctors.map((doctor, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Physician",
        "@id": `${baseUrl}/doctors/${doctor.slug}`,
        name: `Dr. ${doctor.name}`,
        medicalSpecialty: doctor.specialization,
        image: `${baseUrl}/doctors/${doctor.image}`,
        url: `${baseUrl}/doctors/${doctor.slug}`,
        availableService: {
          "@type": "MedicalProcedure",
          name: "Doctor Channeling Service",
          provider: { "@id": `${baseUrl}#hospital` },
        },
      },
    })),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${baseUrl}/doctors`,
    },
  };
};

async function getDoctors(page = 1, limit = 12, doc = "", spec = "") {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/doctors?page=${page}&limit=${limit}&doc=${doc}&spec=${spec}`,
      {
        next: {
          revalidate: 60,
        },
      }
    );
    if (!res.ok) throw new Error("Failed to fetch doctors");
    return res.json();
  } catch (err) {
    console.log("Error Fetching Doctors : ", err);
    return {
      doctors: [],
      pagination: {
        page: 1,
        limit: 12,
        total: 0,
        pages: 0,
      },
    };
  }
}

const DoctorsPage = async ({ searchParams }) => {
  // Doctor List For Combo
  const doctorList = await getDocListCombo();
  const docList = await doctorList.json();

  // Search Params
  const param = await searchParams;
  const page = param.page || "";
  const doc = param.doc || "";
  const spec = param.spec || "";
  const limit = 12;

  // Load Doctor Cards
  const data = await getDoctors(page, limit, doc, spec);

  // ✅ ensure it's a plain object, not a Proxy/Promise
  const paramsObj = Object.fromEntries(Object.entries(param));

  // Generate structured data
  const structuredData = generateDoctorsStructuredData(
    data.doctors,
    data.pagination,
    paramsObj
  );

  return (
    <>
      {/* Structured data for doctors listing */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="space-y-6">
        {/* Page Header */}
        <header className="text-center mb-6 hidden">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {doc ? `Dr. ${doc}` : spec ? `${spec} Specialists` : "Our Doctors"}
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            {doc
              ? `Book appointments with Dr. ${doc} at Arogya Hospital`
              : spec
              ? `Find experienced ${spec} specialists at Arogya Hospital`
              : "Browse our team of experienced medical specialists and book appointments online"}
          </p>
        </header>

        {/* Search Component */}
        <DocSearch doctorList={docList} />

        {/* Pagination (mobile) */}
        <div className="md:hidden">
          <Pagination prop={data.pagination} searchParams={paramsObj} />
        </div>

        {/* Doctors Grid */}
        <section aria-labelledby="doctors-heading">
          <h2 id="doctors-heading" className="sr-only">
            Doctors List
          </h2>

          {data.doctors.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {data.doctors.map((doctor, index) => (
                <DoctorCard
                  key={doctor.id}
                  id={doctor.id}
                  name={doctor.name}
                  img={doctor.image}
                  specialization={doctor.specialization}
                  gender={doctor.gender || ""}
                  slug={doctor.slug}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No doctors found
              </h3>
              <p className="text-gray-500">
                Try adjusting your search criteria or browse all doctors.
              </p>
            </div>
          )}
        </section>

        {/* Pagination */}
        {data.doctors.length > 0 && (
          <Pagination prop={data.pagination} searchParams={paramsObj} />
        )}

        {/* SEO Content Section */}
        <section className="bg-gray-50 hidden rounded-lg ">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">
            Find the Right Doctor at Arogya Hospitals
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Arogya Hospitals offers access to Sri Lanka's finest medical
              specialists across various fields including cardiology,
              pediatrics, dermatology, orthopedics, and more. Our doctors are
              highly qualified and experienced in their respective specialties.
            </p>
            <h3 className="text-xl font-semibold mt-6 mb-3">
              How to Choose the Right Doctor
            </h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Consider the doctor's specialization and experience</li>
              <li>Check available appointment times that fit your schedule</li>
              <li>Read about the doctor's qualifications and expertise</li>
              <li>Consider the hospital location and convenience</li>
            </ul>
            <p className="mt-4">
              If you need assistance choosing a doctor, our help desk is
              available to guide you to the right specialist for your healthcare
              needs.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default DoctorsPage;
