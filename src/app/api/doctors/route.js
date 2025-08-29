import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "12");
    const offset = (page - 1) * limit;
    const doctor = searchParams.get("doc") || null;
    const spec = searchParams.get("spec") || null;

    let sql = `
      SELECT doctor_assignments.doctor_id AS id, doctors.name, doctors.slug, specialization.specialization, doctors.image
      FROM doctor_assignments
      INNER JOIN doctors ON doctors.id = doctor_assignments.doctor_id
      INNER JOIN specialization ON doctors.specialization_id = specialization.id
      WHERE doctor_assignments.hospital_id = 1
    `;

    let filter = ``;
    let values = [];
    let countValues = [];

    if (doctor) {
      filter += ` AND doctor_assignments.doctor_id=?`;
      values.push(doctor);
      countValues.push(doctor);
    }

    if (spec) {
      filter += ` AND doctors.specialization_id=?`;
      values.push(spec);
      countValues.push(spec);
    }

    // Query for doctors with pagination
    const sql_query = sql + filter + ` LIMIT ? OFFSET ?`;
    values.push(limit, offset);
    const doctors = await query(sql_query, values);

    // Count query (without LIMIT/OFFSET)
    const countQuery = `
      SELECT COUNT(doctor_assignments.doctor_id) as total
      FROM doctor_assignments
      INNER JOIN doctors ON doctors.id = doctor_assignments.doctor_id
      INNER JOIN specialization ON doctors.specialization_id = specialization.id
      WHERE doctor_assignments.hospital_id = 1
      ${filter}
    `;
    const countResult = await query(countQuery, countValues);
    const total = countResult[0]?.total || 0;

    return NextResponse.json(
      {
        doctors,
        pagination: {
          page,
          limit,
          total,
          pages: Math.ceil(total / limit),
        },
      },
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
