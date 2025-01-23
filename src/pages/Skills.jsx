import React from "react";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="title-section">Habilidades</h2>
      <div className="skills-sections">
        <div className="skill">
          <img
            src="https://img.icons8.com/color/48/html-5--v2.png"
            alt="html-5"
          />
          <div>
            <h4>Html</h4>
            <p>Lenguaje de marcas de Hipertexto</p>
          </div>
        </div>
        <div className="skill">
          <img src="https://img.icons8.com/color/48/css3.png" alt="css3" />
          <div>
            <h4>CSS</h4>
            <p>Hojas de estilo en cascada</p>
          </div>
        </div>
        <div className="skill">
          <img
            src="https://img.icons8.com/color/48/javascript--v1.png"
            alt="javascript--v1"
          />
          <div>
            <h4>Java Script</h4>
            <p>Lenguaje de programación interpretado</p>
          </div>
        </div>
        <div className="skill">
          <img
            src="https://img.icons8.com/color/48/java-coffee-cup-logo--v1.png"
            alt="java"
          />
          <div>
            <h4>Java</h4>
            <p>Lenguaje de programación</p>
          </div>
        </div>
        <div className="skill">
          <img
            src="https://img.icons8.com/color/48/python--v1.png"
            alt="python"
          />
          <div>
            <h4>Python</h4>
            <p>Lenguaje de programación interpretado</p>
          </div>
        </div>
        <div className="skill">
          <img
            src="https://img.icons8.com/color/48/github--v1.png"
            alt="github"
          />
          <div>
            <h4>Git</h4>
            <p>Controlador de versiones</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
