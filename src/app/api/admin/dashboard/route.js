import { query } from "@/lib/db";
import { smsBalance } from "@/lib/sms";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const hospital_id = 1;

    const sql = `
      SELECT 
        (SELECT COUNT(id) FROM appointment WHERE state=1 AND hospital_id = ? AND is_confirmed = 0) AS pending,
        (SELECT COUNT(id) FROM appointment WHERE state=1 AND hospital_id = ? AND is_confirmed = 1) AS approved,
        (SELECT COUNT(id) FROM appointment WHERE state=0 AND hospital_id = ? AND is_confirmed = 0) AS reject,
        (SELECT COUNT(id) FROM appointment WHERE hospital_id = ? ) AS total,
        (SELECT COUNT(id) FROM doctor_assignments WHERE hospital_id = ? AND state=1) AS doctors,
        (SELECT COUNT(d.id) FROM doctor_assignments d 
          LEFT JOIN session s ON d.id = s.doctor_id
          WHERE d.state=1 AND s.doctor_id IS NULL AND d.hospital_id = ?) AS doctors_no_session,
        (SELECT COUNT(id) FROM session WHERE hospital_id = ? AND state=1) AS active_session,
        (SELECT COUNT(id) FROM appointment WHERE state=1 AND hospital_id = ? AND is_confirmed = 1) * 100 AS sale
    `;

    // ✅ Only 8 placeholders, so only 8 params
    const params = [
      hospital_id,
      hospital_id,
      hospital_id,
      hospital_id,
      hospital_id,
      hospital_id,
      hospital_id,
      hospital_id,
    ];

    const data = await query(sql, params);

    if (!data || data.length === 0) {
      return NextResponse.json({ error: "No Data Found" }, { status: 404 });
    }

    const smsdata = await smsBalance();

    const response = {
      ...data[0],
      sms_balance:
        (smsdata && smsdata.data && smsdata.data.remaining_unit) || 0,
    };

    return NextResponse.json({ dashboard: response }, { status: 200 });
  } catch (err) {
    console.error("Error Fetching Dashboard Data:", err);
    return NextResponse.json(
      { error: "Internal Server Error!" },
      { status: 500 }
    );
  }
};
