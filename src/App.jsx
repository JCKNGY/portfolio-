import { useState } from "react";
import { Routes, Route, Link, NavLink } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Cards from "./pages/Cards.jsx";
import "./App.css";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const close = () => setMenuOpen(false);

  return (
    <div className="app">
      <nav className="nav">
        <Link to="/" className="nav-logo" onClick={close}>
          {/*
            LOGO: drop your own image into /public/ (e.g. /public/logo.png)
            then swap the emoji below for:
            <img src="/logo.png" alt="logo" className="nav-logo-img" />
          */}
          <img src="/logo.png" alt="logo" className="nav-logo-img" /> jack
        </Link>

        <button className="nav-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? "✕" : "☰"}
        </button>

        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={close}>portfolio</NavLink></li>
          <li><NavLink to="/cards" onClick={close}>card collection</NavLink></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cards" element={<Cards />} />
      </Routes>

      <footer className="footer">
        <p>built by jack · {new Date().getFullYear()} · 💤</p>
      </footer>
    </div>
  );
}
