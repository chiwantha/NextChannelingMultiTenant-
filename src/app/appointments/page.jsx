import Button from "@/components/buttons/button/Button";
import AppointmentCard from "@/components/cards/appointmentCard/AppointmentCard";
import AppointmentSearch from "@/components/search/appointmentSearch/AppointmentSearch";

export const generateMetadata = () => {
  return {
    title: `My Appointments | Arogya Hospitals`,
    description: `View and manage your medical appointments with Arogya Hospitals. Access your upcoming channeling sessions and healthcare appointments securely.`,
    keywords:
      "medical appointments, healthcare, doctor channeling, patient portal, Arogya Hospitals",
    robots: "noindex, nofollow", // Added to protect personal data
    openGraph: {
      title: "My Appointments | Arogya Hospitals Patient Portal",
      description:
        "Access your healthcare appointments securely with Arogya Hospitals.",
      type: "website",
    },
    twitter: {
      card: "summary",
      title: "My Appointments | Arogya Hospitals",
      description:
        "Access your healthcare appointments securely with Arogya Hospitals.",
    },
  };
};

// Generic structured data about the medical service without personal info
const generateStructuredData = () => {
  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    name: "Arogya Hospitals",
    description:
      "Healthcare provider offering specialist doctor channeling services",
    medicalSpecialty: "Healthcare",
  };
};

async function getAppointments(searchQuery) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/appointments?phone=${searchQuery}`,
      {
        next: {
          revalidate: 60,
        },
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
  const { phone = 0 } = params;
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
        {/* Added proper heading structure */}
        <h1 className="text-2xl font-bold text-gray-900 sr-only">
          My Appointments
        </h1>

        <AppointmentSearch />

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
