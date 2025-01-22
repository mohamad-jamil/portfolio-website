import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}
