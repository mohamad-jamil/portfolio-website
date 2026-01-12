export default function Content() {
  return (
    <section id="about" className="pt-28">
      <div className="mx-auto max-w-6xl container-px">
        <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-gradient-to-b from-white/80 to-slate-50/70 shadow-2xl shadow-emerald-500/5 dark:border-white/10 dark:from-slate-900/60 dark:to-slate-950/40">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(16,185,129,0.14),transparent_55%),radial-gradient(700px_circle_at_90%_10%,rgba(56,189,248,0.12),transparent_50%)] dark:bg-[radial-gradient(700px_circle_at_20%_0%,rgba(16,185,129,0.18),transparent_55%),radial-gradient(700px_circle_at_90%_10%,rgba(56,189,248,0.15),transparent_50%)]" />

          <div className="relative grid gap-10 p-8 sm:p-10 lg:grid-cols-[1fr_auto] lg:items-center lg:gap-14">
            <div>
              <h1 className="text-balance text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl dark:text-white">
                Hello world, I'm Jamil.
              </h1>
              <div className="mt-4 h-1 w-28 rounded-full bg-emerald-300/70" />

              <p className="mt-8 max-w-3xl text-pretty text-base leading-7 text-slate-700 dark:text-slate-200">
                Hey! I'm Jamil, a CS master's graduate from UCL with a passion
                for software development and data science. With a strong
                foundation in Computer Science, I'm well equipped with a solid
                technical skillset and a curiosity to explore and innovate!
              </p>
              <p className="mt-4 max-w-3xl text-pretty text-base leading-7 text-slate-700 dark:text-slate-200">
                Beyond my career and academics, I enjoy exploring new places,
                and staying active through running and football. I also have a
                creative side, which I channel through sewing and cross
                stitching!
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="https://github.com/mohamad-jamil/"
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                >
                  <img
                    src="/github.svg"
                    alt="github logo"
                    className="h-5 w-5 opacity-90 invert dark:invert-0"
                  />
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/mohamad-jamil"
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                >
                  <img
                    src="/linkedin.svg"
                    alt="linkedin logo"
                    className="h-5 w-5 opacity-90 invert dark:invert-0"
                  />
                  LinkedIn
                </a>
                <a
                  href="https://www.credly.com/users/mohamad-jamil/"
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                >
                  <img
                    src="/credly.svg"
                    alt="credly logo"
                    className="h-5 w-5 opacity-90 invert dark:invert-0"
                  />
                  Credly
                </a>
                <a
                  href="https://leetcode.com/u/ItsJam/"
                  target="_blank"
                  className="group inline-flex items-center gap-2 rounded-xl border border-slate-900/10 bg-white/70 px-4 py-2 text-sm font-medium text-slate-900 shadow-sm transition hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:border-white/10 dark:bg-white/5 dark:text-slate-100 dark:hover:bg-white/10 dark:focus-visible:ring-offset-slate-950"
                >
                  <img
                    src="/leetcode.svg"
                    alt="leetcode logo"
                    className="h-5 w-5 opacity-90 invert dark:invert-0"
                  />
                  LeetCode
                </a>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <div className="rounded-3xl border border-slate-900/10 bg-white/70 p-2 shadow-xl shadow-slate-950/10 dark:border-white/10 dark:bg-white/5 dark:shadow-slate-950/40">
                <img
                  src="/profile_picture.png"
                  alt="profile picture"
                  className="h-56 w-56 rounded-2xl object-cover sm:h-64 sm:w-64"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
