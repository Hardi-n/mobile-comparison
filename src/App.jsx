import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Compare from "./pages/Compare";
// import Analytics from "./pages/Analytics";
import Analytics from "./components/Analytics.jsx";
import Header from "./components/Header";
import "./index.css"; // import the CSS we added
import Footer from "../src/components/Footers.jsx";

function App() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Browse Phones" },
    { to: "/recommendations", label: "AI Recommendations" },
    { to: "/compare", label: "Comparison" },
    { to: "/analytics", label: "Analytics" },
  ];

  return (
    <div>
      <Header />

      <nav className="navbar">
        <div className="nav-inner">
          {links.map((l) => {
            const isActive = location.pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`nav-link ${isActive ? "active" : ""}`}
                aria-current={isActive ? "page" : undefined}
              >
                {l.label}
              </Link>
            );
          })}
        </div>
      </nav>

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
