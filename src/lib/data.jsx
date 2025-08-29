import { query } from "./db";

export const getDocListCombo = async () => {
  const sql = "SELECT id AS value, name AS label FROM doctors WHERE state = 1";

  const docList = await query(sql);

  return Response.json(docList);
};

export const getSpec = async () => {
  const sql =
    "SELECT id AS value, specialization AS label FROM specialization WHERE state = 1";

  const specList = await query(sql);

  return Response.json(specList);
};
