export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-900/10 py-8 dark:border-white/10">
      <div className="mx-auto max-w-6xl container-px">
        <div className="text-center text-sm text-slate-500 dark:text-slate-400">
          &copy; {year} Mohamad Jamil. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
