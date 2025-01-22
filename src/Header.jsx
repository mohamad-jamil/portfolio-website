import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";
import { useState } from "react";

export default function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuActive((prevMobileMenuActive) => !prevMobileMenuActive);
  };

  return (
    <div className="header font-mono text-white bg-[#0d1213] fixed w-full top-0 left-0">
      <nav className="flex justify-between items-center p-6 mx-2">
        <div className="text-xl font-black">Mohamad Jamil</div>

        <div className="hidden sm:flex text-base gap-8">
          <HeaderLink route="/" />
          <HeaderLink route="/projects" />
          <HeaderLink route="/skills" />
          <HeaderLink route="/contact" />
        </div>

        <button className="sm:hidden" onClick={toggleMobileMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </nav>
      {mobileMenuActive && (
        <div className="sm:hidden flex flex-col p-6 gap-3">
          <HeaderLink route="/" />
          <HeaderLink route="/projects" />
          <HeaderLink route="/skills" />
          <HeaderLink route="/contact" />
        </div>
      )}
    </div>
  );
}
