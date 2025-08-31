import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const phone = searchParams.get(`phone`);

    const sql = `
    SELECT 
      appointment.id, 
      appointment.session_id, 
      doctors.name AS doctor_name, 
      session_type.name AS session_type, 
      session.start_time, 
      session.end_time, 
      session.fee, 
      appointment.patient, 
      appointment.contact, 
      appointment.alternate_contact, 
      appointment.date, 
      appointment.email, 
      appointment.note, 
      appointment.created_at,
      appointment.is_confirmed 
    FROM appointment 
    INNER JOIN session ON appointment.session_id = session.id 
    INNER JOIN doctors ON session.doctor_id = doctors.id 
    INNER JOIN session_type ON session.type_id = session_type.id 
    WHERE ( appointment.contact LIKE ? 
    OR appointment.alternate_contact LIKE ? )
    AND appointment.state = 1 AND appointment.hospital_id = ?;
    `;

    const data = await query(sql, [phone, phone, 1]);

    if (!data) return NextResponse.json({ appointments: [] }, { status: 404 });

    return NextResponse.json({ appointments: data }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
