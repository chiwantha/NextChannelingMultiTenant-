import Button from "@/components/shared/buttons/button/Button";
import AppointmentCard from "@/components/shared/cards/appointmentCard/AppointmentCard";
import AppointmentSearch from "@/components/user/search/appointmentSearch/AppointmentSearch";
import { Suspense } from "react";

export const generateMetadata = () => {
  return {
    title: `My Appointments`,
    description: `Securely view and manage your medical appointments and channeling sessions at Arogya Hospitals.`,
    keywords:
      "medical appointments, healthcare, doctor channeling, patient portal, Arogya Hospitals",
    robots: "noindex, nofollow", // Protects personal info
    openGraph: {
      title: "My Appointments | Arogya Hospitals Patient Portal",
      description: "Access your upcoming healthcare appointments securely.",
      type: "website",
      url: "https://portal.arogyahospitals.lk/appointments",
    },
    twitter: {
      card: "summary",
      title: "My Appointments | Arogya Hospitals",
      description: "Access your upcoming healthcare appointments securely.",
    },
  };
};

// Generic structured data about the medical service without personal info
const generateStructuredData = () => ({
  "@context": "https://schema.org",
  "@type": "Hospital",
  name: "Arogya Hospitals",
  description:
    "Arogya Hospitals provides specialist medical services and doctor channeling online in Gampaha, Sri Lanka.",
  url: "https://portal.arogyahospitals.lk",
  telephone: "+94-33-222-4592",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.250 Colombo Rd",
    addressLocality: "Gampaha",
    addressRegion: "Western Province",
    addressCountry: "LK",
  },
  medicalSpecialty: "Multiple Specialties",
});

async function getAppointments(searchQuery) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/appointments?phone=${searchQuery}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) throw new Error("Failed to fetch Appointments");

    return res.json();
  } catch (err) {
    console.error(`Error Fetching Appointments: `, err);
    return {
      appointments: [],
    };
  }
}

const AppointmentViewPage = async ({ searchParams }) => {
  const params = await searchParams;
  const { phone = null } = params;
  const data = await getAppointments(phone);
  const structuredData = generateStructuredData();

  return (
    <>
      {/* Structured data for search engines */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="space-y-6">
        <Suspense fallback={<div>Loading search component...</div>}>
          <AppointmentSearch />
        </Suspense>

        <section aria-label="Appointment list">
          <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
            {data?.appointments?.length > 0 ? (
              data.appointments.map((ap, index) => (
                <AppointmentCard data={ap} key={index} />
              ))
            ) : (
              <div className="flex flex-col gap-2 md:col-span-2">
                <div className="">No Appointments !</div>
                <Button
                  pd={`px-4 py-2 w-fit`}
                  title="Start Channelling"
                  bg={`bg-[#4CB847] hover:bg-[#00A63E] text-[#FFFFFF]`}
                  link={`/doctors`}
                  aria-label="Book a new appointment with our doctors"
                />
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default AppointmentViewPage;
