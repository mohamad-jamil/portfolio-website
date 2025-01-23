import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      imgUrl: "/kanbanize.png",
      projectName: "Kanbanize",
      technologies: ["React", "TypeScript", "Bootstrap", "Git"],
      description:
        "An interactive Kanban board that has dynamic card management functionality, with drag-and-drop functions implemented with dnd-kit.",
    },
    {
      imgUrl: "/pseudopass.png",
      projectName: "PseudoPass",
      technologies: ["React", "JavaScript", "Bootstrap", "Git"],
      description:
        "A React-based pseudorandom password generator that creates secure and customisable passwords with adjustable length and complexity settings.",
    },
    {
      imgUrl: "",
      projectName: "Chef Mistral",
      technologies: ["React", "JavaScript", "Mistral AI", "Git"],
      description:
        "A tool that generates recipe suggestions by sending user-inputted ingredients to a Mistral AI backend with a custom prompt.",
    },
    {
      imgUrl: "",
      projectName: "Tetris AI",
      technologies: ["Python", "Tensorflow", "Git"],
      description:
        "Developed and trained an AI tool with Python and Tensorflow to play Tetris with high accuracy using reinforcement learning techniques.",
    },
    {
      imgUrl: "",
      projectName: "NavPog",
      technologies: ["Unity", "C#", "OpenARCloud", "Git"],
      description:
        "An augmented reality navigation and information system for UCL allowing users to view locations and collaborate with others to remotely place virtual objects on campus.",
    },
    {
      imgUrl: "",
      projectName: "TendVR",
      technologies: ["Unity", "C#", "REST APIs", "Figma", "Git"],
      description:
        "Volunteered for a startup called Tend to implement a speech-to-text questionnaire in a virtual reality meditation environment using Google's Speech-to-Text API.",
    },
    {
      imgUrl: "",
      projectName: "Credit Card Default Prediction",
      technologies: ["Python", "Jupyter Notebook", "SciKit-Learn"],
      description:
        "Compared machine learning models in Python to determine which was best for the application of predicting credit card default.",
    },
    {
      imgUrl: "",
      projectName: "Java Shell",
      technologies: ["Java", "Unix", "Git"],
      description:
        "Developed a custom shell from scratch, designed to replicate the functionality of a traditional Unix shell. Supports file manipulation, process management, and redirection.",
    },
  ];

  return (
    <main
      id="projects"
      className="bg-[#0d1213] flex flex-col items-center py-36"
    >
      <div className="text-white font-mono text-4xl">Projects</div>
      <div className="w-20 h-1 bg-white mt-4"></div>
      <div className="flex flex-wrap justify-center gap-10 my-12">
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
