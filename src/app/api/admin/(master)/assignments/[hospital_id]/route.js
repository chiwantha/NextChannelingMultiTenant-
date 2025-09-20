import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { hospital_id } = await params;

    const sql = `
  SELECT 
    da.doctor_id AS id,
    d.name,
    d.slug,
    s2.specialization,
    COUNT(s.id) AS sessions
  FROM doctor_assignments da
  INNER JOIN doctors d ON da.doctor_id = d.id
  INNER JOIN specialization s2 ON d.specialization_id = s2.id
  LEFT JOIN session s ON s.doctor_id = da.doctor_id 
                     AND s.hospital_id = da.hospital_id
                     AND s.state = 1
  WHERE da.hospital_id = ?
    AND da.state = 1
  GROUP BY da.doctor_id, d.name, d.slug, s2.specialization
`;

    const doctors = await query(sql, [hospital_id]);

    if (!doctors || doctors.length <= 0) {
      return NextResponse.json(
        { error: "No Doctors Found !" },
        { status: 404 }
      );
    }

    return NextResponse.json({ doctors }, { status: 200 });
  } catch (err) {
    console.error("Appointment Update Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
