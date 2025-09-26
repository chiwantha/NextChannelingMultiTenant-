import { NextResponse } from "next/server";

export const POST = async (request) => {
  try {
    const body = request.json();
    console.log(body);
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
