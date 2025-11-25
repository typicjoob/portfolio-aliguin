import Link from "next/link";

const NavLink = ({ href, title }) => {
  return (
    <Link
      href={href}
      className="
    inline-block w-full py-2 px-4 text-white sm:text-xl rounded font-semibold
    transition-colors duration-300
    hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r
    hover:from-amber-500 hover:via-orange-500 hover:to-red-700
  "
    >
      {title}
    </Link>
  );
};

export default NavLink;
