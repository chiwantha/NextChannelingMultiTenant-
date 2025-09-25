import HospitalCard from "@/components/admin/cards/hospitalcard/HospitalCard";

export const dynamic = "force-dynamic";

async function getHospitals() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/assignments`,
      {
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      console.error("Error Fetching Hospitals !");
      return {
        hospitals: [],
      };
    }

    return res.json();
  } catch (err) {
    console.error(`Error Fetching Hospitalss : `, err);
    return {
      hospitals: [],
    };
  }
}

const HospitalPage = async ({ params }) => {
  const data = await getHospitals();
  const hospitals = data.formatted;

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-gray-500 uppercase text-sm">Hospitals</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {hospitals &&
          hospitals.length != 0 &&
          hospitals.map((hospitals, index) => (
            <HospitalCard key={index} props={hospitals} />
          ))}
      </div>
    </div>
  );
};

export default HospitalPage;
