import { query } from "./db";

export const getDocListCombo = async (props) => {
  // console.log("okay ! : ", props?.hospital_id || 0);
  const sql = `SELECT doctor_assignments.doctor_id AS value, doctors.name AS label FROM doctor_assignments
  INNER JOIN doctors ON doctors.id = doctor_assignments.doctor_id
  WHERE doctor_assignments.state = 1`;

  const docList = await query(sql);

  return Response.json(docList);
};

export const getSpec = async () => {
  const sql =
    "SELECT id AS value, specialization AS label FROM specialization WHERE state = 1";

  const specList = await query(sql);

  return Response.json(specList);
};
