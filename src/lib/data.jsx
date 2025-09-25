import { query } from "./db";

export const getDocListCombo = async (props) => {
  const { hospital_id } = await props;
  const sql = `SELECT doctor_assignments.doctor_id AS value, doctors.name AS label FROM doctor_assignments
  INNER JOIN doctors ON doctors.id = doctor_assignments.doctor_id
  WHERE doctor_assignments.state = 1 AND doctor_assignments.hospital_id = ?`;

  const docList = await query(sql, [hospital_id]);

  return Response.json(docList);
};

export const getSpec = async () => {
  const sql =
    "SELECT id AS value, specialization AS label FROM specialization WHERE state = 1";

  const specList = await query(sql);

  return Response.json(specList);
};
