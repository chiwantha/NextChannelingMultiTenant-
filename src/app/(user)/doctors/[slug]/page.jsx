import InstructionsCard from "@/components/user/cards/instructionCard/InstructuonsCard";
import ProfileCard from "@/components/user/cards/profileCard/ProfileCard";
import SessionBar from "@/components/user/cards/sessionBar/SessionBar";

export async function generateMetadata({ params }) {
  const { slug } = await params;

  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/doctors/${slug}`,
      { next: { revalidate: 60 } }
    );
    const data = await res.json();

    const doctorName = data?.profile_data?.name || "Doctor";
    const specialization =
      data?.profile_data?.specialization || "Medical Specialist";
    const hospital = data?.profile_data?.hospital || "Arogya Hospital";
    const description =
      data?.profile_data?.description || "Experienced medical professional";

    return {
      title: `Dr. ${doctorName} - ${specialization} | Arogya Hospitals`,
      description: `Book appointments with Dr. ${doctorName}, ${specialization} at ${hospital}. ${description}. View available sessions and book your appointment online.`,
      keywords: `Dr. ${doctorName}, ${specialization}, ${hospital}, doctor appointment, medical consultation, Sri Lanka doctor`,
      openGraph: {
        title: `Dr. ${doctorName} - ${specialization} | Arogya Hospitals`,
        description: `Book appointments with Dr. ${doctorName}, ${specialization} at ${hospital}.`,
        url: `https://portal.arogyahospitals.lk/doctors/${slug}`,
        type: "profile",
        images: [
          {
            url: data?.profile_data?.image
              ? `https://portal.arogyahospitals.lk/doctors/${data.profile_data.image}`
              : "/doctor-profile-og.jpg",
            width: 1200,
            height: 630,
            alt: `Dr. ${doctorName} - ${specialization} at Arogya Hospital`,
          },
        ],
        profile: {
          firstName: doctorName.split(" ")[0],
          lastName: doctorName.split(" ").slice(1).join(" "),
          username: slug,
        },
      },
      twitter: {
        card: "summary_large_image",
        title: `Dr. ${doctorName} - ${specialization} | Arogya Hospitals`,
        description: `Book appointments with Dr. ${doctorName}, ${specialization} at Arogya Hospital.`,
      },
      alternates: {
        canonical: `https://portal.arogyahospitals.lk/doctors/${slug}`,
      },
    };
  } catch (err) {
    return {
      title: `Doctor Profile | Arogya Hospitals`,
      description: `View the doctor's profile, check available time slots, and book your appointment easily at Arogya Hospitals.`,
    };
  }
}

// Generate structured data for the doctor profile
const generateDoctorStructuredData = (profile, sessions, slug) => {
  if (!profile) return null;

  return {
    "@context": "https://schema.org",
    "@type": "Physician",
    "@id": `https://portal.arogyahospitals.lk/doctors/${slug}#doctor`,
    name: `Dr. ${profile.name}`,
    description:
      profile.description || "Medical specialist at Arogya Hospitals",
    medicalSpecialty: profile.specialization,
    worksFor: {
      "@type": "Hospital",
      name: profile.hospital || "Arogya Hospital",
      url: "https://portal.arogyahospitals.lk",
    },
    image: `https://portal.arogyahospitals.lk/doctors/${profile.image}`,
    url: `https://portal.arogyahospitals.lk/doctors/${slug}`,
    availableService: sessions.map((session) => ({
      "@type": "Service",
      name: `Medical Consultation - ${session.type}`,
      description: `Appointment with Dr. ${profile.name}`,
      offers: {
        "@type": "Offer",
        price: session.fee,
        priceCurrency: "LKR",
      },
      availableAtOrFrom: {
        "@type": "Hospital",
        name: profile.hospital || "Arogya Hospital",
      },
    })),
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://portal.arogyahospitals.lk/doctors/${slug}`,
    },
  };
};

async function getProfile(doctor_id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/doctors/${doctor_id}`,
      { next: { revalidate: 60 } }
    );

    if (!res.ok) throw new Error("Failed to fetch profile");

    return res.json();
  } catch (err) {
    console.log("Error Fetching Profile : ", err);
    return {
      profile_data: null,
      sessions_data: [],
    };
  }
}

const DoctorProfilePage = async ({ params }) => {
  const { slug } = await params;
  const data = await getProfile(slug);

  const profile = data?.profile_data;
  const sessions = data?.sessions_data || [];

  // Generate structured data
  const structuredData = generateDoctorStructuredData(profile, sessions, slug);

  return (
    <>
      {/* Structured data for doctor profile */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}

      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6">
        {/* Left Sidebar */}
        <header className="space-y-6">
          {profile ? (
            <ProfileCard ProfileData={profile} />
          ) : (
            <div className="p-4 bg-white border border-[#0460D9]/50 rounded-lg shadow-md text-center">
              <p className="text-gray-500">Doctor profile not available</p>
            </div>
          )}
          <InstructionsCard />
        </header>

        {/* Main Content */}
        <div className="sm:col-span-3">
          {/* Available Sessions */}
          <section aria-labelledby="sessions-heading">
            <h2
              id="sessions-heading"
              className="text-2xl font-semibold text-gray-700 mb-4"
            >
              Available Sessions
            </h2>

            {sessions.length > 0 ? (
              <div className="flex flex-col gap-4">
                {sessions.map((session, index) => (
                  <SessionBar
                    key={session.id || index}
                    session_data={session}
                  />
                ))}
              </div>
            ) : (
              <div className="bg-white p-6 rounded-lg border border-gray-200 text-center">
                <h3 className="text-lg font-medium text-gray-700 mb-2">
                  No sessions available
                </h3>
                <p className="text-gray-500">
                  Check back later for available appointment slots or contact
                  the hospital for more information.
                </p>
              </div>
            )}
          </section>
        </div>
      </div>
    </>
  );
};

export default DoctorProfilePage;
