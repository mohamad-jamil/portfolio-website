export default function ProjectCard({
  imgUrl,
  projectName,
  technologies,
  description,
}) {
  return (
    <div className="w-80 h-96 p-4 bg-[#151d1e] rounded-2xl text-white font-mono flex flex-col items-center text-center">
      <img
        src={imgUrl}
        alt={`image of ${projectName}`}
        className="rounded-lg h-40"
      />
      <h4 className="text-2xl font-black mt-2">{projectName}</h4>
      <h5 className="text-xs">{technologies}</h5>
      <h5 className="mt-4">{description}</h5>
    </div>
  );
}
