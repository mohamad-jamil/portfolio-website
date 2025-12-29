export default function SkillCard({ skill, link, logo }) {
  return (
    <a
      href={link}
      target="_blank"
      className="group flex items-center gap-3 rounded-2xl border border-slate-900/10 bg-white/70 p-4 shadow-sm shadow-slate-950/5 transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/30 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
    >
      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-slate-900/10 dark:bg-slate-950/40">
        <img src={logo} alt={`${skill} logo`} className="h-7 w-7" loading="lazy" />
      </div>
      <h4 className="text-sm font-medium text-slate-900 group-hover:text-slate-950 dark:text-slate-100 dark:group-hover:text-white">
        {skill}
      </h4>
    </a>
  );
}
