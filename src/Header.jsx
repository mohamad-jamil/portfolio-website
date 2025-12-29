import HeaderLink from "./HeaderLink";
import { useEffect, useMemo, useState } from "react";

export default function Header() {
  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [theme, setTheme] = useState("dark");

  const sections = useMemo(
    () => ["about", "projects", "skills", "contact"],
    []
  );

  const toggleMobileMenu = () => {
    setMobileMenuActive((prevMobileMenuActive) => !prevMobileMenuActive);
  };

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    const prefersDark = window.matchMedia?.("(prefers-color-scheme: dark)")?.matches;
    const initial = stored ?? (prefersDark ? "dark" : "light");

    setTheme(initial);
    document.documentElement.classList.toggle("dark", initial === "dark");
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === "dark" ? "light" : "dark";
      localStorage.setItem("theme", next);
      document.documentElement.classList.toggle("dark", next === "dark");
      return next;
    });
  };

  useEffect(() => {
    const elements = sections
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveSection(visible.target.id);
      },
      {
        root: null,
        threshold: [0.15, 0.25, 0.4],
        rootMargin: "-10% 0px -70% 0px",
      }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-900/10 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/55 dark:border-white/10 dark:bg-slate-950/70 dark:supports-[backdrop-filter]:bg-slate-950/55">
      <div className="mx-auto max-w-6xl container-px">
        <nav className="flex h-16 items-center justify-between">
          <button
            type="button"
            className="text-sm font-semibold tracking-tight text-slate-900 hover:text-slate-900/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-white dark:hover:text-white/90 dark:focus-visible:ring-offset-slate-950"
            onClick={() => {
              setActiveSection("about");
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Mohamad Jamil
          </button>

          <div className="hidden sm:flex items-center gap-1">
            <HeaderLink
              section="About"
              active={activeSection === "about"}
              onActiveChange={setActiveSection}
            />
            <HeaderLink
              section="Projects"
              active={activeSection === "projects"}
              onActiveChange={setActiveSection}
            />
            <HeaderLink
              section="Skills"
              active={activeSection === "skills"}
              onActiveChange={setActiveSection}
            />
            <HeaderLink
              section="Contact"
              active={activeSection === "contact"}
              onActiveChange={setActiveSection}
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
              onClick={toggleTheme}
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.364 6.364-1.414-1.414M7.05 7.05 5.636 5.636m12.728 0-1.414 1.414M7.05 16.95l-1.414 1.414M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z"
                  />
                </svg>
              )}
            </button>

            <button
              type="button"
              className="sm:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-slate-700 hover:bg-slate-900/5 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-200 dark:hover:bg-white/5 dark:hover:text-white dark:focus-visible:ring-offset-slate-950"
              onClick={toggleMobileMenu}
              aria-label={mobileMenuActive ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuActive}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={mobileMenuActive ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </nav>
      </div>

      {mobileMenuActive && (
        <div className="sm:hidden border-t border-white/10">
          <div className="mx-auto max-w-6xl container-px py-2 flex flex-col">
            <HeaderLink
              section="About"
              active={activeSection === "about"}
              onNavigate={() => setMobileMenuActive(false)}
              onActiveChange={setActiveSection}
            />
            <HeaderLink
              section="Projects"
              active={activeSection === "projects"}
              onNavigate={() => setMobileMenuActive(false)}
              onActiveChange={setActiveSection}
            />
            <HeaderLink
              section="Skills"
              active={activeSection === "skills"}
              onNavigate={() => setMobileMenuActive(false)}
              onActiveChange={setActiveSection}
            />
            <HeaderLink
              section="Contact"
              active={activeSection === "contact"}
              onNavigate={() => setMobileMenuActive(false)}
              onActiveChange={setActiveSection}
            />
          </div>
        </div>
      )}
    </header>
  );
}
