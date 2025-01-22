import { Link } from "react-router-dom";
import HeaderLink from "./HeaderLink";

export default function Header() {
  return (
    <div className="header font-mono text-white bg-[#0d1213]">
      <nav className="flex justify-between items-center p-6 mx-2">
        <div className="text-xl font-black">Mohamad Jamil</div>
        <div className="flex text-base gap-8">
          <HeaderLink route="/" />
          <HeaderLink route="/projects" />
          <HeaderLink route="/skills" />
          <HeaderLink route="/contact" />
        </div>
      </nav>
    </div>
  );
}
