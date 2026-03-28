import React from "react";
import GradientText from './ui/GradientText'



function About() {
  return (
    <section id="about" className="about-container">
      <div className="about-text">
        <h2>About Me</h2>
         
  
<GradientText
  colors={["#5227FF","#FF9FFC","#B19EEF"]}
  animationSpeed={8}
  showBorder={false}
  className="custom-class"
>
  Add a splash of color!
</GradientText>
       
      </div>
    </section>
  );
}

export default About;