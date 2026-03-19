import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/navbar";
import Glimpse from "./components/pages/glimpse";
import StarryBackground from "./components/StarryBackground";
import GameCompanySection from "./components/GameCompanySection";
import LifeAndHobbies from "./components/LifeSection";
import HeroSection from "./components/HeroSection";
import About from "./components/AboutMe";
import './style/App.css';
import './style/Sunrise.css';
import MusicJourney from "./components/blogs/MusicJourney";
import Travel from "./components/blogs/Travel";
import Cooking from "./components/blogs/Cooking";
import Books from "./components/blogs/Books";
import Movies from "./components/blogs/Movies";
import Anime from "./components/blogs/Anime";
import Placeholder from "./components/blogs/Placeholder";

function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        {/* 🏠 Landing Page */}
        <Route
          path="/"
          element={
            <>
              <StarryBackground>
                <HeroSection />
              </StarryBackground>
              <GameCompanySection />
              <LifeAndHobbies />
              <About />
            </>
          }
        />

        {/* Blog Routes */}
        <Route path="/blog/music-journey" element={<Placeholder title="My Music Journey" emoji="🎸" />} />
        <Route path="/blog/travel" element={<Travel />} />
        <Route path="/blog/cooking" element={<Placeholder title="Cooking Experiments" emoji="🍳" />} />
        <Route path="/blog/books" element={<Placeholder title="Books That Changed Me" emoji="📚" />} />
        <Route path="/blog/movies" element={<Placeholder title="Movies" emoji="📽️" />} />
        <Route path="/blog/anime" element={<Anime />} />

        {/* ✨ Glimpse (Personal feed, photography, etc.)
        <Route
          path="/glimpse"
          element={
            <div className="page glimpse-page">
              <Glimpse />
            </div>
          }
        /> */}

        {/* 👤 About Page (separate route) */}
        <Route
          path="/about"
          element={
            <div className="page about-page">
              <About />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;