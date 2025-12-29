export default function ProjectCard({
  imgUrl,
  projectName,
  technologies,
  description,
  repoLink,
  deploymentLink,
}) {
  const techList = Array.isArray(technologies)
    ? technologies
    : String(technologies ?? "")
        .split(",")
        .map((t) => t.trim())
        .filter(Boolean);

  return (
    <article className="group relative overflow-hidden rounded-2xl border border-slate-900/10 bg-white/70 shadow-lg shadow-slate-950/5 transition hover:bg-white hover:shadow-emerald-500/10 dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/30 dark:hover:bg-white/7.5 dark:hover:shadow-emerald-500/5">
      <div className="relative">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={`image of ${projectName}`}
            className="h-44 w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-44 w-full bg-gradient-to-br from-emerald-400/15 via-sky-400/10 to-transparent" />
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/0" />
      </div>

      <div className="flex h-full flex-col p-5">
        <h3 className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
          {projectName}
        </h3>

        {techList.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {techList.map((tech) => (
              <span
                key={tech}
                className="inline-flex items-center rounded-full border border-slate-900/10 bg-white/70 px-2.5 py-1 text-[11px] font-medium text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <p className="mt-4 text-sm leading-6 text-slate-700 dark:text-slate-300">{description}</p>

        <div className="mt-5 flex flex-wrap items-center gap-3">
          {repoLink && (
            <a
              href={repoLink}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-slate-900/10 bg-white/70 px-3 py-2 text-xs font-semibold text-slate-900 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
            >
              Repo<sup style={{ fontFamily: "monospace" }}>↗</sup>
            </a>
          )}
          {deploymentLink && (
            <a
              href={deploymentLink}
              target="_blank"
              className="inline-flex items-center justify-center rounded-xl border border-emerald-500/25 bg-emerald-500/10 px-3 py-2 text-xs font-semibold text-emerald-900 transition hover:bg-emerald-500/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-emerald-300/25 dark:bg-emerald-300/10 dark:text-emerald-100 dark:hover:bg-emerald-300/15 dark:focus-visible:ring-offset-slate-950"
            >
              Live<sup style={{ fontFamily: "monospace" }}>↗</sup>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
