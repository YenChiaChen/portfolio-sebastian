import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import AboutPage from "./Pages/AboutPage";

function App() {
  return (
      <Routes>
        <Route path="" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
  );
}

export default App;
