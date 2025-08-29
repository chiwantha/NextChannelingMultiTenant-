import { query } from "@/lib/db";
import { sendWhatsappMessage } from "@/lib/whatsapp";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const {
      session_id,
      patient,
      contact,
      alternate_contact,
      date,
      email,
      note,
      whatsapp_send,
      hospital_id,
    } = body;

    if (
      whatsapp_send === null ||
      whatsapp_send === "" ||
      hospital_id === null ||
      hospital_id === "" ||
      session_id === null ||
      session_id === "" ||
      patient === null ||
      patient === "" ||
      contact === null ||
      contact === "" ||
      date === null ||
      date === ""
    ) {
      return NextResponse.json(
        { error: `Some Required Data Missing !` },
        { status: 404 }
      );
    }

    // Normalize optional fields once so we don't repeat ternaries.
    const altContact =
      alternate_contact === null || alternate_contact === ""
        ? "0"
        : alternate_contact;
    const safeEmail = email === null || email === "" ? "None" : email;
    const safeNote = note === null || note === "" ? "None" : note;

    const sql = `INSERT INTO appointment (hospital_id, session_id, patient, contact, alternate_contact, date, email, note) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;

    const values = [
      hospital_id,
      session_id,
      patient,
      contact,
      altContact,
      date,
      safeEmail,
      safeNote,
    ];

    const res = await query(sql, values);

    if (!res)
      return NextResponse.json(
        { ok: `Internal Server Error !` },
        { status: 500 }
      );

    // console.log(res.insertId);
    loadAndSendAppointment(res.insertId, whatsapp_send);
    return NextResponse.json({ data: res }, { status: 200 });
  } catch (err) {
    console.error("DB Error:", err);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};

const loadAndSendAppointment = async (appointment_id, to) => {
  const sql = `
    SELECT 
      appointment.id, 
      appointment.session_id, 
      doctors.name AS doctor_name, 
      session_type.name AS session_type, 
      session.start_time, 
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
    WHERE appointment.id = ?
  `;

  const data = await query(sql, [appointment_id]);

  if (!data)
    return NextResponse.json(
      {
        error: "Internal Server Error !",
      },
      { status: 500 }
    );

  const ap = data[0];

  const Date_Fomatter = (d) => {
    if (!d) return;
    const date = new Date(d);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
    const day = String(date.getDate()).padStart(2, "0");

    const formattedDate = `${year}-${month}-${day}`;
    return formattedDate;
  };

  const date = Date_Fomatter(ap.date);
  const createdAt = Date_Fomatter(ap.created_at);

  // Build message (no leading spaces)
  const lines = [
    `*Appointment #${ap.id}*`,
    "===========================",
    `Status: ${ap.is_confirmed ? "Approved" : "Pending"}`,
    "---------------------------",
    "*Session Info -*",
    `Doctor: ${ap.doctor_name}`,
    `Session: ${ap.session_type}`,
    `Time: ${ap.start_time}`,
    `Fee: LKR ${ap.fee}`,
    `Date: ${date}`,
    "---------------------------",
    "*Patient Info -*",
    `Name: ${ap.patient}`,
    `Contact: ${ap.contact}`,
    `Alt Contact: ${ap.alternate_contact || "0"}`,
    `Email: ${ap.email || "None"}`,
    "---------------------------",
    `Note: ${ap.note || "None"}`,
    "===========================",
    "_Powered by Kchord (Pvt) Ltd_",
    `Entry on ${createdAt}`,
  ];

  const message = lines.join("\n");

  sendWhatsappMessage(`761294262`, message);
  return;
};
