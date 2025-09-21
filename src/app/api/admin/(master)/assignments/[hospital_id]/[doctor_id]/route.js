import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  try {
    const { hospital_id, doctor_id } = await params;
    return NextResponse.json(
      {
        data: { hospital_id, doctor_id },
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
