import SessionCard from "@/components/admin/cards/sessioncard/SessionCard";
import TopSessionBar from "@/components/admin/form/sessions/TopSessionBar";

async function getAssignedDocSessions(hospital_id, doctor_id) {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/assignments/${hospital_id}/${doctor_id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) {
      console.error(`Error Fetching Sessions !`);
      return {
        sessions: [],
      };
    }

    return res.json();
  } catch (err) {
    console.error(`Sessions Fetching Error : `, err);
    return {
      sessions: [],
    };
  }
}

const SessionPage = async ({ params }) => {
  const { doctor_id, hospital_id } = await params;
  const data = await getAssignedDocSessions(hospital_id, doctor_id);
  return (
    <div className="flex flex-col space-y-4">
      {/* data */}
      <TopSessionBar
        profile={data?.profile[0]}
        query={{ doctor_id, hospital_id }}
      />

      {/* Sessions */}
      <span className="text-gray-500 uppercase text-sm">SESSIONS</span>
      <div className="grid-cols-1 grid gap-4">
        {data?.sessions.map((ses, index) => (
          <SessionCard
            session_data={ses}
            key={index}
            query={{
              hospital_id,
              doctor_id,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default SessionPage;
