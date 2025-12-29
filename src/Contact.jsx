export default function Contact() {
  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl container-px">
        <div className="relative overflow-hidden rounded-3xl border border-slate-900/10 bg-gradient-to-b from-slate-50 to-emerald-50/40 p-8 shadow-2xl shadow-emerald-500/5 sm:p-10 dark:border-white/10 dark:from-slate-900/50 dark:to-slate-950/30">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(700px_circle_at_20%_0%,rgba(16,185,129,0.10),transparent_55%)] dark:bg-[radial-gradient(700px_circle_at_20%_0%,rgba(16,185,129,0.14),transparent_55%)]" />

          <div className="relative">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl dark:text-white">
              Contact
            </h2>
            <div className="mt-4 h-1 w-20 rounded-full bg-emerald-300/70" />

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-700 dark:text-slate-200">
              Feel free to drop me an email at{" "}
              <a
                href="mailto:mohamadjamil411@gmail.com"
                className="font-semibold text-emerald-700 underline underline-offset-4 decoration-emerald-700/30 transition hover:text-emerald-800 hover:decoration-emerald-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-emerald-200 dark:decoration-emerald-200/60 dark:hover:text-emerald-100 dark:hover:decoration-emerald-100 dark:focus-visible:ring-offset-slate-950"
              >
                mohamadjamil411@gmail.com
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
