import { Routes, Route, Link, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Recommendations from "./pages/Recommendations";
import Compare from "./pages/Compare";
// import Analytics from "./pages/Analytics";
import Analytics from "./components/Analytics.jsx";
import Header from "./components/Header";
import "./index.css"; // import the CSS we added
import Footer from "../src/components/Footers.jsx";
import AllPhones from "./pages/AllPhones.jsx";
import About from './pages/About.jsx';

function App() {
  const location = useLocation();

  const links = [
    { to: "/", label: "Home" },
    { to: "/recommendations", label: "AI Recommendations" },
    {to:"/allphones", label:"All Phones"},
    { to: "/compare", label: "Comparison" },
    { to: "/analytics", label: "Analytics" },
    { to: "/about", label: "About" },
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
          <Route path="/allphones" element={<AllPhones />} />
          <Route path="/recommendations" element={<Recommendations />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
