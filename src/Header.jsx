import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header font-mono text-white bg-[#0d1213]">
      <nav className="flex justify-between items-center p-6 mx-2">
        <div className="text-xl font-black">Mohamad Jamil</div>
        <div className="flex text-base gap-8">
          <Link to="/" className="cursor-pointer hover:text-[#5ce546]">
            Home
          </Link>
          <Link to="/projects" className="cursor-pointer hover:text-[#5ce546]">
            Projects
          </Link>
          <Link to="/skills" className="cursor-pointer hover:text-[#5ce546]">
            Skills
          </Link>
          <Link to="/contact" className="cursor-pointer hover:text-[#5ce546]">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}
