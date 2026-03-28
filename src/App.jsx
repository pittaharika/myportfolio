import React from "react";
import { Routes, Route } from "react-router-dom";
// import PixelSnow from './components/ui/pixelSnow';
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
    <div style={{width: '100%', height: '100vh', overflow:"hidden"}}>
      {/* <div style={{ width: '100%', height: '600px', position: 'absolute',zIndex:0 }}>
       
  <PixelSnow 
    color="#000000"
    flakeSize={0.01}
    minFlakeSize={1.25}
    pixelResolution={200}
    speed={1.25}
    density={0.3}
    direction={125}
    brightness={1}
    depthFade={8}
    farPlane={20}
    gamma={0.4545}
    variant="square"
/> */}

      {/* </div> */}
      <div style={{position:"relative",zIndex:1}}>
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