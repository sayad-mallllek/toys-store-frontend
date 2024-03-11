import Link from "next/link";

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
  return (
    <header className="py-10 px-5 flex gap-4 items-center">
      <img src="/images/logo.png" alt="Logo" className="w-20 h-20" />
      {links.map(({ href, label }) => (
        <Link
          className="text-gray-500 font-semibold"
          key={`${href}${label}`}
          href={href}
        >
          {label}
        </Link>
      ))}
    </header>
  );
};

export default Header;