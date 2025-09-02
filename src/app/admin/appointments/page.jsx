import AppointmentCard from "@/components/shared/cards/appointmentCard/AppointmentCard";

export const dynamic = "force-dynamic";

async function getAdminAppointments() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_URL}/api/admin/appointments`
    );
    if (!res.ok) throw new Error("Failed to fetch Admin Appointments");
    return res.json();
  } catch (err) {
    console.error(`Error Fetching Admin Appointments : `, err);
    return {
      appointments: [],
    };
  }
}

const AdminAppointmentsPage = async () => {
  const data = await getAdminAppointments();
  const appointments = data.appointments || [];
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4">
      {appointments && appointments.length > 0 ? (
        appointments.map((appointment, index) => (
          <AppointmentCard data={appointment} key={index} admin />
        ))
      ) : (
        <div>
          <span>No Appointments Found !</span>
        </div>
      )}
    </div>
  );
};

export default AdminAppointmentsPage;
