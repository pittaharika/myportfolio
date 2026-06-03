import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h2>My Skills</h2>

      <div className="skills-container">
        <div className="skill-box">
          <h3><b>Programming</b></h3>
          <ul style={{listStyleType:"none"}}>

               <li><i class="devicon-python-plain colored"></i> Python</li> 
               <li><i class="devicon-javascript-plain colored"></i> JavaScript</li> 
               
            </ul>
        </div>

        <div className="skill-box">
             <ul style={{listStyleType:"none"}}>
              <h3><b>Frontend</b></h3>
            
               <li><i class="devicon-html5-plain colored"></i>HTML</li> 
               <li><i class="devicon-css3-plain colored"></i> CSS</li> 
               <li><i class="devicon-bootstrap-plain colored"></i> Bootstap</li> 
               <li><i class="devicon-react-original colored"></i> React.js</li> 
            </ul>
        </div>

        <div className="skill-box">
          <ul style={{listStyleType:"none"}}>
            <h3><b>Backend</b></h3>
          
            <li><i class="devicon-nodejs-plain colored"></i> Node.js</li>
            <li><i class="devicon-express-original colored"></i> Express.js</li>
          </ul>
           
        </div>

        <div className="skill-box">
         <ul style={{listStyleType:"none"}}>
            <h3><b>Database</b></h3>
          
            <li><i class="devicon-mongodb-plain colored"></i> MongoDB</li>
          </ul>
        </div>

        <div className="skill-box">
          <ul style={{listStyleType:"none"}}>
            <h3><b>Tools</b></h3>
            <li><i class="devicon-git-plain colored"></i> Git</li>
            <li><i class="devicon-github-plain colored"></i> Github</li>
            <li><i class="devicon-vscode-plain colored"></i> VS Code</li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Skills;