import Link from "next/link";
import Image from "next/image";
import { headerLogo } from "@/assets/images";
import { navLinks } from "@/constants";
import { hamburger } from "@/assets/icons";

const Navbar = () => {
  return (
    <header className="padding-x py-8 z-10 w-full sticky">
      <nav className="flex justify-between items-center max-container">
        <Link href="/">
          <Image
            src={headerLogo}
            alt="logo"
            width={129}
            height={29}
            className="m-0 w-[129px] h-[29px]"
          />
        </Link>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item: any) => (
            <li key={item.label}>
              <Link
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex gap-2 text-lg leading-normal font-medium font-montserrat max-lg:hidden wide:mr-24">
          {/* Add Authentication */}
          <Link href="/">Sign In</Link>
          <span>/</span>
          <Link href="/">Sign Up</Link>
        </div>
        <div className="hidden max-lg:block">
          <Image src={hamburger} alt="hamburger icon" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
