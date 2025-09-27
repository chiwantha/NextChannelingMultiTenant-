import { query } from "@/lib/db";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { hospital_id, doctor_id } = await params;

    const proflie_sql = `SELECT doctors.name, specialization.specialization 
    FROM doctors
    INNER JOIN specialization ON doctors.specialization_id = specialization.id
    INNER JOIN incharge ON doctors.hospital_id = incharge.id
    WHERE doctors.id = ?`;

    const doctor_profile = await query(proflie_sql, [doctor_id]);
    if (!doctor_profile || doctor_profile.length <= 0) {
      return NextResponse.json(
        {
          error: "Doctor Not Found !",
        },
        { status: 404 }
      );
    }

    const sessions_sql = `
    SELECT session.id, day.day, session.start_time, session.end_time,
    session_type.name AS type, session.fee ,session.state
    FROM session
    INNER JOIN session_type ON session.type_id = session_type.id
    INNER JOIN day ON session.day_id = day.id
    INNER JOIN doctors ON doctors.id = session.doctor_id
    WHERE doctors.id = ? AND session.hospital_id = ?
  `;

    const session_list = await query(sessions_sql, [doctor_id, hospital_id]);
    if (!session_list || session_list.length <= 0) {
      return NextResponse.json(
        {
          error: "Session Not Found !",
        },
        { status: 404 }
      );
    }

    return NextResponse.json(
      {
        sessions: session_list,
        profile: doctor_profile,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error(`Internal Server Error : `, err);
    return NextResponse.json(
      {
        error: "Internal Server Error !",
      },
      {
        status: 500,
      }
    );
  }
};

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, state, action } = body || "";

    let sql = ``;
    let values = [];

    if (action == `activate` || `deactivate`) {
      sql += `UPDATE session SET state = ? WHERE id = ?`;
      values.push(state, id);
    } else if (action == `delete`) {
      sql += `DELETE FROM session WHERE id = ?`;
      values.push(id);
    } else {
      return NextResponse.json(
        {
          error: `Action Not Found`,
        },
        { status: 400 }
      );
    }

    const res = await query(sql, values);

    if (!res.affectedRows >= 1) {
      return NextResponse.json(
        {
          error: `Recode Update Failed !`,
        },
        { status: 400 }
      );
    }

    return NextResponse.json(
      {
        data: `Recode Updated Successfully !`,
      },
      { status: 200 }
    );
  } catch (err) {
    console.error("Internal Server Error : ", err);
    return NextResponse.json(
      {
        error: "Internal Server Error !",
      },
      {
        status: 500,
      }
    );
  }
};
