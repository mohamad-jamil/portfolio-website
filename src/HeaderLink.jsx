export default function HeaderLink({
  section,
  active,
  onNavigate,
  onActiveChange,
}) {
  const scrollToSection = (sectionId) => {
    onActiveChange?.(sectionId);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    onNavigate?.();
  };

  return (
    <button
      type="button"
      className="rounded-md px-3 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:focus-visible:ring-offset-slate-950"
      onClick={() => scrollToSection(section.toLowerCase())}
    >
      {section}
    </button>
  );
}
