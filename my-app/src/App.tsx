import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";
import ProjectPage from "./Pages/ProjectPage";
import ProjectMBPage from "./Pages/ProjectMBPage";
import ProjectFinancePage from "./Pages/ProjectFinancePage";
import ProjectEPQPage from "./Pages/ProjectEPQPage"

function App() {
  return (
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/project" element={<ProjectPage />} />
        <Route path="/project/mob" element={<ProjectMBPage />} />
        <Route path="/project/finance" element={<ProjectFinancePage />} />
        <Route path="/project/epq" element={<ProjectEPQPage />} />
      </Routes>
  );
}

export default App;
