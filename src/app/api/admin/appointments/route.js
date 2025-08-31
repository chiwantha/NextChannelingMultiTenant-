import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const hospital_id = 1;
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
      appointment.is_printed,
      appointment.is_confirmed 
    FROM appointment 
    INNER JOIN session ON appointment.session_id = session.id 
    INNER JOIN doctors ON session.doctor_id = doctors.id 
    INNER JOIN session_type ON session.type_id = session_type.id 
    WHERE appointment.state = 1 AND appointment.hospital_id = ?
    ORDER BY 
      CASE 
        WHEN appointment.is_printed = 0 THEN 0
        WHEN appointment.is_printed = 1 AND appointment.is_confirmed = 0 THEN 1
        ELSE 2
      END,
      appointment.created_at DESC
    LIMIT 120
        `;

    const data = await query(sql, [hospital_id]);

    if (!data || data.length <= 0)
      return NextResponse.json(
        { error: "No Appointments Available" },
        {
          status: 404,
        }
      );

    return NextResponse.json(
      {
        appointments: data,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(`Error Fetch Admin Appointment : `, err);
    return NextResponse.json(
      { error: `Internal Server Error` },
      { status: 500 }
    );
  }
};

export const PUT = async (request) => {
  try {
    const body = await request.json();

    const appointment_id = body.appointment_id;
    const action = body.action;

    let updates = [];

    if (action == "approve") {
      updates.push(`is_confirmed = 1`);
    } else if (action == "reject") {
      updates.push(`is_confirmed = 0`);
    }

    if (action === "remove") {
      updates.push(`state = 0`);
    }

    if (action === "print") {
      updates.push(`is_printed = 1`);
    }

    // If no valid update, return error
    if (updates.length === 0) {
      return res.status(400).json({ error: "Invalid action" });
    }

    const sql = `UPDATE appointment SET ${updates.join(", ")} WHERE id = ?`;

    const data = await query(sql, [appointment_id]);

    if (!data || data.length <= 0)
      return NextResponse.json(
        {
          error: "Internal Server Error",
        },
        {
          status: 500,
        }
      );

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch (err) {
    console.error("Appointment Update Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
