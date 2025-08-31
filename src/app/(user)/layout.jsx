import Navbar from "@/components/user/navbar/Navbar";
import Footer from "@/components/user/footer/Footer";

export default function UserLayout({ children }) {
  return (
    <>
      <Navbar />
      <main className="mx-auto px-2 max-w-7xl space-y-6">{children}</main>
      <Footer />
    </>
  );
}
