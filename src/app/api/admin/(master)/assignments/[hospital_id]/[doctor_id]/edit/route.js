import { query } from "@/lib/db";
import { getTimestamp } from "@/lib/helper";
import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = await request.json();
    const { id, day, type, start_time, end_time, fee } = body || "";
    const update_timestamp = getTimestamp();

    if (
      id == "" ||
      day == "" ||
      type == "" ||
      start_time == "" ||
      end_time == "" ||
      fee == "" ||
      update_timestamp == ""
    ) {
      return NextResponse.json(
        {
          error: `Critical Data Missing !`,
        },
        {
          status: 404,
        }
      );
    }

    const sql = `UPDATE session SET type_id=?, day_id=?, start_time=?, end_time=?, fee=?, updated_at=? WHERE id=?`;
    const values = [type, day, start_time, end_time, fee, update_timestamp, id];

    const res = await query(sql, values);

    if (res?.affectedRows <= 0) {
      return NextResponse.json(
        {
          error: `Not Updated !`,
        },
        {
          status: 400,
        }
      );
    }

    return NextResponse.json({ data: true }, { status: 200 });
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
