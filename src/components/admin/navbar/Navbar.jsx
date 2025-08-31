import Image from "next/image";
import Link from "next/link";
import NavLinks from "./links/Links";

const Navbar = () => {
  const logo = false;

  return (
    <nav
      className="w-full py-1 shadow-md sticky top-0 z-50 overflow-hidden
      bg-white"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="px-2 mx-auto max-w-7xl h-[45px] 
      flex items-center justify-between"
      >
        <div className="flex items-center gap-5">
          <Link
            href="/admin"
            className="relative overflow-hidden"
            aria-label="Arogya Hospital Homepage"
          >
            <Image
              src={`/hospital/logo/${logo || `default.png`}`}
              alt="Arogya Hospital - Sri Lanka's Premier Doctor Channeling Portal"
              title="Arogya Hospital - Best Doctor Channeling Service in Sri Lanka"
              width={120}
              height={100}
              className="object-contain aspect-auto"
              priority
            />
          </Link>
        </div>
        <NavLinks />
      </div>
    </nav>
  );
};

export default Navbar;
