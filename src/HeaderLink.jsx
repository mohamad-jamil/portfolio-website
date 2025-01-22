import { Link, useLocation } from "react-router-dom";

export default function HeaderLink({ route }) {
  const location = useLocation();
  const underlineClassList =
    "underline underline-offset-8 decoration-[#5ce546]";

  return (
    <Link
      to={route}
      className={`cursor-pointer hover:text-[#5ce546] ${
        location.pathname === route && underlineClassList
      }`}
    >
      {route.slice(1) ? route.charAt(1).toUpperCase() + route.slice(2) : "Home"}
    </Link>
  );
}
