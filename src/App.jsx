import Header from "./Header";
import Content from "./Content";
import Projects from "./Projects";
import Skills from "./Skills";
import Footer from "./Footer";
import Contact from "./Contact";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(900px_circle_at_15%_0%,rgba(16,185,129,0.08),transparent_55%),radial-gradient(900px_circle_at_90%_15%,rgba(56,189,248,0.06),transparent_50%)] dark:bg-[radial-gradient(900px_circle_at_15%_0%,rgba(16,185,129,0.10),transparent_55%),radial-gradient(900px_circle_at_90%_15%,rgba(56,189,248,0.08),transparent_50%)]" />
      <Header />
      <main>
        <Content />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
