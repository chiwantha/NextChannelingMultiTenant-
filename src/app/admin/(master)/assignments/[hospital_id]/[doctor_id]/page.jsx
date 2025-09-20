import React from "react";

const SessionPage = async ({ params }) => {
  const { doctor_id, hospital_id } = await params;
  return <div>SessionPage</div>;
};

export default SessionPage;
