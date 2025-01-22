import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      imgUrl: "/kanbanize.png",
      projectName: "Kanbanize",
      technologies: ["React", "TypeScript", "Bootstrap", "Git"],
      description: "Generates recipe suggestions with a mistral AI backend.",
    },
  ];

  return (
    <main className="bg-[#0d1213] flex flex-col items-center py-12">
      <div className="text-white font-mono text-4xl">Projects</div>
      <div className="w-20 h-1 bg-white mt-4"></div>
      <div className="flex gap-10 my-12">
        {projects.map((project) => (
          <ProjectCard
            imgUrl={project.imgUrl}
            projectName={project.projectName}
            technologies={project.technologies.join(", ")}
            description={project.description}
          />
        ))}
      </div>
    </main>
  );
}
