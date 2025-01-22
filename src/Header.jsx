export default function Header() {
  return (
    <div className="header font-mono text-white bg-[#0d1213]">
      <nav className="flex justify-between items-center p-6 mx-2">
        <div className="text-xl font-black">Mohamad Jamil</div>
        <div className="flex text-base gap-8">
          <div className="cursor-pointer hover:text-[#5ce546]">About</div>
          <div className="cursor-pointer hover:text-[#5ce546]">Projects</div>
          <div className="cursor-pointer hover:text-[#5ce546]">Skills</div>
          <div className="cursor-pointer hover:text-[#5ce546]">Contact</div>
        </div>
      </nav>
    </div>
  );
}
