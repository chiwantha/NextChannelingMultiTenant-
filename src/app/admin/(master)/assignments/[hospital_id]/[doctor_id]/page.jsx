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
  console.log(data);
  return <div>SessionPage</div>;
};

export default SessionPage;
