"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { twMerge } from "tailwind-merge";

const links = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/products",
    label: "Products",
  },
  {
    href: "/about-us",
    label: "About Us",
  },
];

const Header = () => {
  const pathname = usePathname();

  return (
    <header className="p-5 flex items-center">
      <Image
        src="/images/logo.png"
        alt="Logo"
        height={48}
        width={88}
        className="w-[5.5rem] h-12"
      />
      <div className="flex ml-auto gap-4 sm:gap-6 md:gap-8 sm:pr-[5vw]">
        {links.map(({ href, label }) => (
          <Link
            className={twMerge(
              "text-gray-500 hover:text-gray-900 font-[500] transition-colors duration-200",
              pathname === href ? "text-primary" : ""
            )}
            key={`${href}${label}`}
            href={href}
          >
            {label}
          </Link>
        ))}
      </div>
    </header>
  );
};

export default Header;
