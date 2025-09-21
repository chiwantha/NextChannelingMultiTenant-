import { query } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { hospital_id } = await params;

    const sql = `
  SELECT 
    da.doctor_id AS id,
    da.state AS state,
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

export const POST = async (request, { params }) => {
  try {
    const { hospital_id } = await params;
    const body = await request.json();

    if (!body || body.state === "" || body.doctor_id === "" || !hospital_id) {
      return NextResponse.json({ error: "Data Missing !" }, { status: 404 });
    }

    const sql = `UPDATE doctor_assignments SET state=? WHERE doctor_id=? AND hospital_id=?`;

    const res = await query(sql, [body.state, body.doctor_id, hospital_id]);

    if (res.affectedRows !== 1) {
      return NextResponse.json(
        { error: "Failed To Update Row" },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        status: `success`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.log("Internal Server Error : ", err);
    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
};
