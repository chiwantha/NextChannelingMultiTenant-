import DashValueCard from "@/components/admin/cards/dashcard/DashValueCard";

async function getDashData() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/dashboard`,
      { cache: "no-cache" }
    );

    if (!res.ok) throw new Error("Failed to fetch Dashaboard");
    return res.json();
  } catch (err) {
    console.error("Error Fetching Dadhboard Data : ", err);
    return { dashboard: null };
  }
}

const AdminDashboard = async () => {
  const dashboard = await getDashData();
  const data = dashboard.dashboard;
  return (
    <div className="flex flex-col space-y-4">
      {/* Appointment */}
      <div className="flex flex-col space-y-2">
        <span className="text-gray-500 uppercase text-sm">Appointment</span>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {/* Appointment Pending */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/pending.png`}
            title={"Pending"}
            value={data ? data.pending : null}
          />
          {/* Appointment Addroved */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/approve.png`}
            title={"Approved"}
            value={data ? data.approved : null}
          />
          {/* Appointment Rejected */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/reject.png`}
            title={"Removed"}
            value={data ? data.reject : null}
          />
          {/* Appointment Total */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/total.png`}
            title={"Total"}
            value={data ? data.total : null}
          />
        </div>
      </div>
      {/* Doctor */}
      <div className="flex flex-col space-y-2">
        <span className="text-gray-500 uppercase text-sm">Doctor</span>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {/* All Doctors */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/doctor.png`}
            title={"All"}
            value={data ? data.doctors : null}
          />
          {/* Doctors No Sessions */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/doctors_no_session.png`}
            title={"outSession"}
            value={data ? data.doctors_no_session : null}
          />
          {/* Active Sessions */}
          <div className="col-span-2 md:col-span-1">
            <DashValueCard
              link={true}
              icon={`/sys/dash/session.png`}
              title={"Sessions"}
              value={data ? data.active_session : null}
            />
          </div>
        </div>
      </div>
      {/* System */}
      <div className="grid grid-cols-2 gap-4">
        <div className="flex flex-col space-y-2">
          <span className="text-gray-500 uppercase text-sm">Finance</span>
          {/* Sale */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/sale.png`}
            title={"Sale"}
            value={data ? data.sale : null}
          />
        </div>
        <div className="flex flex-col space-y-2">
          <span className="text-gray-500 uppercase text-sm">Sms</span>
          {/* Sale */}
          <DashValueCard
            link={true}
            icon={`/sys/dash/sms.png`}
            title={"Balance"}
            value={data ? data.sms_balance || `0000` : `0000`}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
