import React from "react";
import "../styles/Home.css";
import hello from "../assets/hello.avif";
import SplitText from "./ui/SplitText";
import PixelSnow from "./ui/pixelSnow";

function Home() {
   const handleAnimationComplete = () => {
    console.log("All letters have animated!");
  };
  return (
    <section className="home-container">
      <div style={{position:"absolute",top:0,left:0,width:"100% ", height:"100% ", zIndex:0}}>
       
        <PixelSnow 
          color="#0e0d0d"
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
/>
      </div>

      <div className="home-text">
        <h2>Hello, I'm Harika</h2>

        <SplitText
          text="Frontend Developer MERN Developer"
          className="home-title"
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          onLetterAnimationComplete={handleAnimationComplete}
          showCallback
        />
        
        <p>Passionate web developer with strong skills in React, JavaScript, HTML, and CSS. I love building clean and user-friendly websites.</p>

        <a href="/harikaResume.pdf" download>
          <button>Download Resume</button>
        </a>
      </div>

        <div className="image">
          <img src={hello} alt="photo" />

        </div>
      
      
    </section>
  );
}

export default Home;