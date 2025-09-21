import DocAssignCard from "@/components/admin/cards/doctorcard/DocAssignCard";
import DataCardGrid from "@/components/admin/datacardgrid/DataCardGrid";

async function getAssignedDoctors(hospital_id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/assignments/${hospital_id}`,
      { cache: "no-store" }
    );

    if (!res.ok) {
      console.error(`Error Fetching Data !`);
      return {
        doctors: [],
      };
    }

    return res.json();
  } catch (err) {
    console.error("Error Fetching Doctors, :", err);
    return {
      doctors: [],
    };
  }
}

const AssignedDocPage = async ({ params }) => {
  const { hospital_id } = await params;
  const data = await getAssignedDoctors(hospital_id);

  return (
    <div className="flex flex-col space-y-2">
      <span className="text-gray-500 uppercase text-sm">Doctors</span>
      <div className="">
        <DataCardGrid>
          {data.doctors.map((doc, index) => (
            <DocAssignCard key={index} props={{ ...doc, hospital_id }} />
          ))}
        </DataCardGrid>
      </div>
    </div>
  );
};

export default AssignedDocPage;
