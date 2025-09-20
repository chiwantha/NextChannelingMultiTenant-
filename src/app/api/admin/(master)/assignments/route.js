import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const sql = `
      SELECT 
        h.id,
        h.name,
        h.hostname,
        JSON_OBJECT(
          'doctors', (
            SELECT COUNT(id) 
            FROM doctor_assignments da 
            WHERE da.hospital_id = h.id AND da.state=1
          ),
          'sessions', (
            SELECT COUNT(id) 
            FROM session s 
            WHERE s.hospital_id = h.id AND s.state=1
          ),
          'outsessions', (
            SELECT COUNT(d.id)
            FROM doctor_assignments d
            LEFT JOIN session s ON d.id = s.doctor_id
            WHERE d.state=1 AND s.doctor_id IS NULL AND d.hospital_id = h.id
          ),
          'sale', (
            SELECT COUNT(id) * 100
            FROM appointment a
            WHERE a.state=1 AND a.is_confirmed=1 AND a.hospital_id = h.id
          )
        ) AS "values"
      FROM hospital h;
    `;

    const hospitals = await query(sql);

    if (!hospitals || hospitals.length <= 0) {
      return NextResponse.json(
        { error: "No Hospitals Found !" },
        { status: 404 }
      );
    }

    const formatted = hospitals.map((h) => ({
      ...h,
      values: JSON.parse(h.values.toString()),
    }));

    return NextResponse.json({ formatted }, { status: 200 });
  } catch (err) {
    console.error("Appointment Update Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
