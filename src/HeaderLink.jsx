export default function HeaderLink({ section, active }) {
  const underlineClassList =
    "underline underline-offset-8 decoration-[#5ce546]";

  return (
    <div
      className={`cursor-pointer hover:text-[#5ce546] ${
        active && underlineClassList
      }`}
    >
      {section}
    </div>
  );
}
