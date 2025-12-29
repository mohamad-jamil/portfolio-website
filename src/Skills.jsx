import SkillCard from "./SkillCard";

export default function Skills() {
  const skills = [
    {
      skill: "Python",
      link: "https://www.python.org/",
      logo: "/skills/python.svg",
    },
    {
      skill: "JavaScript",
      link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
      logo: "/skills/javascript.svg",
    },
    {
      skill: "TypeScript",
      link: "https://www.typescriptlang.org/",
      logo: "/skills/typescript.svg",
    },
    {
      skill: "SQL",
      link: "https://learn.microsoft.com/en-us/sql/?view=sql-server-ver16",
      logo: "/skills/sql.svg",
    },
    {
      skill: "Angular",
      link: "https://angular.dev/",
      logo: "/skills/angular.svg",
    },
    {
      skill: "React",
      link: "https://react.dev/",
      logo: "/skills/react.svg",
    },
    {
      skill: "Bootstrap",
      link: "https://getbootstrap.com/",
      logo: "/skills/bootstrap.svg",
    },

    {
      skill: "Tailwind",
      link: "https://tailwindcss.com/",
      logo: "/skills/tailwind.svg",
    },
    {
      skill: "Cypress",
      link: "https://www.cypress.io/",
      logo: "/skills/cypress.svg",
    },
    {
      skill: "Selenium",
      link: "https://www.selenium.dev/",
      logo: "/skills/selenium.svg",
    },
    {
      skill: "Git",
      link: "https://git-scm.com/",
      logo: "/skills/git.svg",
    },
    {
      skill: "Postman",
      link: "https://www.postman.com/",
      logo: "/skills/postman.svg",
    },
  ];

  return (
    <section id="skills" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
          Skills
        </h2>
        <div className="mt-4 h-1 w-20 rounded-full bg-emerald-300/70" />
        <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
          Languages, frameworks, and tools I use to build and ship software.
        </p>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill) => (
            <SkillCard
              key={skill.skill}
              skill={skill.skill}
              link={skill.link}
              logo={skill.logo}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
