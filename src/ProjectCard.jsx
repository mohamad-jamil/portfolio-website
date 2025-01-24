export default function ProjectCard({
  imgUrl,
  projectName,
  technologies,
  description,
  repoLink,
  deploymentLink,
}) {
  return (
    <div className="w-80 h-auto p-4 mx-4 bg-[#151d1e] rounded-2xl text-white font-mono flex flex-col items-center text-center justify-between">
      <img
        src={imgUrl}
        alt={`image of ${projectName}`}
        className="rounded-lg h-40"
      />
      <h4 className="text-2xl font-black mt-2">{projectName}</h4>
      <h5 className="text-xs">{technologies}</h5>
      <h5 className="mt-4">{description}</h5>
      <nav className="flex items-center gap-4 mt-4">
        {repoLink && (
          <a
            href={repoLink || "https://www.mohamadjamil.dev"}
            target="_blank"
            className="bg-[#1e2a2f] px-2 py-1 w-32 rounded-md"
          >
            Repo<sup>↗</sup>
          </a>
        )}
        {deploymentLink && (
          <a
            href={deploymentLink || "https://www.mohamadjamil.dev"}
            target="_blank"
            className="bg-[#1e2a2f] px-2 py-1 w-32 rounded-md cursor-pointer"
          >
            Deployment<sup>↗</sup>
          </a>
        )}
      </nav>
    </div>
  );
}
