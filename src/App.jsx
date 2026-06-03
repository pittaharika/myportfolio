import React from "react";
import { Routes, Route } from "react-router-dom";
// import PixelSnow from './components/ui/pixelSnow';
import Ferrofluid from "./components/ui/Ferrofluid";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";



function App() {
  return (
    <>
    <div style={{  width: "100%",
    minHeight: "100vh", }}>

  {/* Ferrofluid Background */}
  <div
    style={{
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      zIndex: -1,
    }}
  >
    <Ferrofluid
      colors={["#4F46E5", "#06B6D4", "#E0F2FE"]}
      speed={0.5}
      scale={1.6}
      turbulence={1}
      fluidity={0.1}
      rimWidth={0.2}
      sharpness={2.5}
      shimmer={1.5}
      glow={2}
      flowDirection="down"
      opacity={1}
      mouseInteraction
      mouseStrength={1}
      mouseRadius={0.35}
    />
  </div>

  {/* Portfolio Content */}
  <div
    style={{
      position: "relative",
      zIndex: 1,
    }}
  >
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/skills" element={<Skills />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    <Footer />
  </div>

</div>
    </>
  );
}

export default App;