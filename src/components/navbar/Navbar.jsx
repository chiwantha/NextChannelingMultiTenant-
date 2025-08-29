import Image from "next/image";
import Link from "next/link";
import Links from "./links/Links";

const Navbar = () => {
  const logo = false;

  return (
    <nav
      className="w-full py-1 shadow-md overflow-hidden"
      role="navigation"
      aria-label="Main navigation"
    >
      <div
        className="bg-white px-2 mx-auto max-w-7xl h-[45px] 
      flex items-center justify-between"
      >
        <div className="flex items-center gap-5">
          <Link
            href="/"
            className="relative overflow-hidden"
            aria-label="Arogya Hospital Homepage"
          >
            <Image
              src={`/hospital/logo/${logo || `arogya_logo.png`}`}
              alt="Arogya Hospital - Sri Lanka's Premier Doctor Channeling Portal"
              title="Arogya Hospital - Best Doctor Channeling Service in Sri Lanka"
              width={100}
              height={100}
              className="object-contain aspect-auto"
              priority
            />
          </Link>
        </div>
        <Links />
      </div>
    </nav>
  );
};

export default Navbar;
