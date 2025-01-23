export default function SkillCard({ skill, link, logo }) {
  return (
    <a
      href={link}
      target="_blank"
      className="bg-[#0d1213] h-36 w-28 p-4 flex flex-col items-center justify-evenly rounded-xl cursor-pointer hover:bg-gray-800"
    >
      <img src={logo} alt={`${skill} logo`} className="w-16 h-16" />
      <h4 className="text-white text-center font-mono">{skill}</h4>
    </a>
  );
}
