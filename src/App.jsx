import { Routes, Route } from "react-router-dom";

import UserSidebar from "./components/layouts/UserSidebar";

import Projects from "./pages/Projects/Index";
import Home from "./pages/Home/Index";
import UnderDevelopment from "./components/UnderDevelopment";
import Experience from "./pages/Experience/Index";
import Tools from "./pages/Tools/Index";
import Recommendations from "./pages/Recommendation/Index";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Routes>
      {/* UserSidebar has no path of its own — it just wraps every route
          nested inside it, rendering them via its <Outlet />. It mounts
          once and stays mounted across navigation between these pages. */}
      <Route element={<UserSidebar />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/recommendation" element={<Recommendations />} />

        {/* Pages not built yet — swap each for a real page as you build it.
            `active`/`title` no longer need to be passed manually; drop them
            from UnderDevelopment's props once it stops rendering its own
            UserSidebar (see note below). */}
        <Route path="/shop" element={<UnderDevelopment title="Shop" />} />
        <Route path="/resume" element={<UnderDevelopment title="Resume" />} />
        <Route
          path="/resources"
          element={<UnderDevelopment title="Resources" />}
        />
        <Route
          path="/certification"
          element={<UnderDevelopment title="Certification" />}
        />

        {/* Catch-all — must stay last. Matches any URL that didn't hit a
            route above. */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}