import { Routes, Route } from "react-router-dom";

import Projects from "./pages/Projects/Index";

import Home from "./pages/Home/Index";
import UnderDevelopment from "./components/UnderDevelopment";
import Experience from "./pages/Experience/Index";
import Tools from "./pages/Tools/Index";
import Recommendations from "./pages/Recommendation/Index";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="/tools" element={<Tools />} />
      <Route path="/recommendation" element={<Recommendations />} />

      {/* Pages not built yet — swap each for a real page as you build it */}

      <Route
        path="/shop"
        element={<UnderDevelopment active="shop" title="Shop" />}
      />
      <Route
        path="/resume"
        element={<UnderDevelopment active="resume" title="Resume" />}
      />
      <Route
        path="/resources"
        element={<UnderDevelopment active="resources" title="Resources" />}
      />
      <Route
        path="/certification"
        element={<UnderDevelopment active="certification" title="Certification" />}
      />
    </Routes>
  );
}