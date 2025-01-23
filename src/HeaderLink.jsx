export default function HeaderLink({ section, active }) {
  const underlineClassList =
    "underline underline-offset-8 decoration-[#5ce546]";

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <button
      className={`cursor-pointer hover:text-[#5ce546] ${
        active && underlineClassList
      }`}
      onClick={() => scrollToSection(section.toLowerCase())}
    >
      {section}
    </button>
  );
}
