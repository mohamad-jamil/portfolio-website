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
    <main className="bg-[#141d1e] flex flex-col items-center py-36">
      <div className="text-white font-mono text-4xl">Skills</div>
      <div className="w-20 h-1 bg-white mt-4"></div>
      <div className="flex gap-6 mt-8">
        {skills.map((skill) => (
          <SkillCard
            key={skill.skill}
            skill={skill.skill}
            link={skill.link}
            logo={skill.logo}
          />
        ))}
      </div>
    </main>
  );
}
