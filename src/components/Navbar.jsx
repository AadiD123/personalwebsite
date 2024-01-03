import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="max-w-md mx-auto flex flex-col sm:flex-row justify-evenly rounded-3xl md:rounded-full py-2 px-5 bg-gray-300 filter drop-shadow-lg text-black">
        <NavLink label="About" />
        <NavLink label="Work" />
      </div>
    </>
  );
}

function NavLink({ label }) {
  const location = useLocation();

  // Check if the current NavLink is active
  const isActive =
    location.pathname === `/${label.toLowerCase()}` ||
    (location.pathname === "/" && label.toLowerCase() === "about");

  return (
    <Link
      to={label.toLowerCase()}
      className={`cursor-pointer transition duration-100 hover:bg-gray-100 group rounded-full py-2 px-6 my-1 md:my-0 ${
        isActive ? "bg-gray-100" : ""
      }`}
    >
      <p>{label}</p>
    </Link>
  );
}
