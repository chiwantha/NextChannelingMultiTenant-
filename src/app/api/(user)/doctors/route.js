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
      SELECT 
        da.doctor_id AS id,
        d.name, 
        d.slug, 
        s.specialization, 
        d.image,
        COUNT(*) OVER() AS total_count
      FROM doctor_assignments da
      INNER JOIN doctors d ON d.id = da.doctor_id
      INNER JOIN specialization s ON d.specialization_id = s.id
      WHERE da.hospital_id = 1 AND da.state = 1
    `;

    let filter = ``;
    const values = [];

    if (doctor) {
      filter += ` AND da.doctor_id=?`;
      values.push(doctor);
    }

    if (spec) {
      filter += ` AND d.specialization_id=?`;
      values.push(spec);
    }

    // Add pagination
    const sql_query = sql + filter + ` LIMIT ? OFFSET ?`;
    values.push(limit, offset);

    const doctors = await query(sql_query, values);

    const total = doctors.length > 0 ? doctors[0].total_count : 0;

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
