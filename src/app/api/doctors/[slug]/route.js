import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    // console.log(request);
    const { slug } = await params;
    const hospital_id = 1;

    const proflie_sql = `SELECT doctor_assignments.doctor_id AS id, doctors.name, specialization.specialization, doctors.description,
     doctors.image, incharge.name AS hospital
    FROM doctor_assignments
    INNER JOIN doctors ON doctor_assignments.doctor_id = doctors.id
    INNER JOIN specialization ON doctors.specialization_id = specialization.id
    INNER JOIN incharge ON doctors.hospital_id = incharge.id
    WHERE doctors.slug = ? AND doctor_assignments.hospital_id = ?`;

    const sessions_sql = `
    SELECT session.id, day.day, session.start_time, session.end_time,
    session_type.name AS type, session.fee
    FROM session
    INNER JOIN session_type ON session.type_id = session_type.id
    INNER JOIN day ON session.day_id = day.id
    INNER JOIN doctors ON doctors.id = session.doctor_id
    WHERE doctors.slug = ? AND session.hospital_id = ?
  `;

    const profile = await query(proflie_sql, [slug, hospital_id]);
    if (!profile)
      return NextResponse.json(
        { error: "Doctor Not Found !" },
        { status: 404 }
      );
    const sessions = await query(sessions_sql, [slug, hospital_id]);
    if (!sessions)
      return NextResponse.json(
        { error: "Sessions Not Found !" },
        { status: 404 }
      );

    return NextResponse.json(
      { profile_data: profile[0], sessions_data: sessions },
      { status: 200 }
    );
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
