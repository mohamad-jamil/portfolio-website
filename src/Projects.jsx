import ProjectCard from "./ProjectCard";

export default function Projects() {
  const projects = [
    {
      imgUrl: "/aoclytic.png",
      projectName: "Aoclytic",
      technologies: ["React", "JavaScript", "Git"],
      description: "An Advent of Code utility that turns a given year and private leaderboard code into player-focused metrics by day/part.",
      repoLink: "https://github.com/mohamad-jamil/aoclytic",
      deploymentLink: "https://aoclytic.vercel.app",
    },
    {
      imgUrl: "/chef-mistral.png",
      projectName: "Chef Mistral",
      technologies: ["React", "JavaScript", "Mistral AI", "Git"],
      description:
        "A tool that generates recipe suggestions by sending user-inputted ingredients to a Mistral AI backend with a custom prompt.",
      repoLink: "https://github.com/mohamad-jamil/chef-mistral",
      deploymentLink: "https://chef-mistral.vercel.app/",
    },
    {
      imgUrl: "/linux.png",
      projectName: "C Shell",
      technologies: ["C", "Unix", "Git"],
      description:
        "Developed a Unix shell in C that implemented command execution, I/O redirection, pipelines, background processes, and conditional operations using system calls like fork() and exec().",
      repoLink: "https://github.com/mohamad-jamil/unix-shell",
      deploymentLink: "",
    },
    {
      imgUrl: "/navpog.png",
      projectName: "NavPog",
      technologies: ["Unity", "C#", "OpenARCloud", "Git"],
      description:
        "An augmented reality navigation and information system for UCL allowing users to view locations and collaborate with others to remotely place virtual objects on campus.",
      repoLink: "https://github.com/AdnanBen/oscp-unity-NavPOG",
      deploymentLink: "",
    },
    {
      imgUrl: "/pseudopass.png",
      projectName: "PseudoPass",
      technologies: ["React", "JavaScript", "Bootstrap", "Git"],
      description:
        "A React-based pseudorandom password generator that creates secure and customisable passwords with adjustable length and complexity settings.",
      repoLink: "https://github.com/mohamad-jamil/pseudopass",
      deploymentLink: "https://pseudopass.vercel.app/",
    },
    {
      imgUrl: "/tetris_ai.jpg",
      projectName: "Tetris AI",
      technologies: ["Python", "Tensorflow", "Git"],
      description:
        "Developed and trained an AI tool with Python and Tensorflow to play Tetris with high accuracy using reinforcement learning techniques.",
      repoLink: "",
      deploymentLink: "",
    },
    {
      imgUrl: "/neural_nets.png",
      projectName: "Credit Card Default Prediction",
      technologies: ["Python", "Jupyter Notebook", "SciKit-Learn"],
      description:
        "Compared machine learning models in Python to determine which was best for the application of predicting credit card default.",
      repoLink: "",
      deploymentLink: "",
    },
    {
      imgUrl: "/kanbanize.png",
      projectName: "Kanbanize",
      technologies: ["React", "TypeScript", "Bootstrap", "Git"],
      description:
        "An interactive Kanban board that has dynamic card management functionality, with drag-and-drop functions implemented with dnd-kit.",
      repoLink: "https://github.com/mohamad-jamil/kanbanize",
      deploymentLink: "https://kanbanize-two-eta.vercel.app/",
    },
    {
      imgUrl: "/tend.png",
      projectName: "TendVR",
      technologies: ["Unity", "C#", "REST APIs", "Figma", "Git"],
      description:
        "Developed features for a virtual reality mindfulness app at Tend, including a speech-to-text questionnaire, custom shaders, and gamification elements to enhance user engagement.",
      repoLink: "https://github.com/mohamad-jamil/tend-vr-enhancements",
      deploymentLink: "https://mohamad-jamil.github.io/tend-vr-enhancements/",
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Projects
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-emerald-300/70" />
            <p className="mt-6 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300">
              A curated selection of projects across web development, machine learning, and XR.
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <ProjectCard
              key={project.projectName}
              imgUrl={project.imgUrl}
              projectName={project.projectName}
              technologies={project.technologies}
              description={project.description}
              repoLink={project.repoLink}
              deploymentLink={project.deploymentLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
