import React from "react";
import styles from "../styles/Skills.module.css";

const Skills = () => {
  return (
    <div className={styles.conteiner}>
      <div className={styles.desc}>
        <h3> SKILLS</h3>

        <ul>
          <li>
            <p>
              <li>Autodidacta</li>
              <li> Meticuloso Proactividad</li>
              <li> Curiosidad</li>
              <li> Creatividad</li>
              <li> Capacidad de adaptación</li>
              <li> Empatía y buenas habilidades sociales</li>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.desc}>
        <h3>TECH SKILLS</h3>
        <ul>
          <li>
            <p>
              <li> Html</li>
              <li> CSS</li>
              <li> SCSS</li>
              <li> Javascript</li>
              <li> React</li>
              <li> Node Js</li>
              <li> My Sql</li>
              <li> Laravel</li>
              <li> PHP</li>
              <li> Git</li>
            </p>
          </li>
        </ul>
      </div>
      <div className={styles.desc}>
        <h3>EXPERIENCIA</h3>
        <br></br>
        <ul>
          <li>
            <p>
              ANALISTA DESARROLLADOR EN EL GOBIERNO DE LA CIUDAD (Direccion
              general de habilitacion de conductores)
            </p>

            <p>02/02/2022 (Hasta la actualidad)</p>
          </li>
        </ul>

        <hr></hr>
        <h3>PROYECTOS</h3>
        <ul>
          <li>
            <p>
              <li>
                Proyecto 1- GITHUB :
                <a href=" https://github.com/maxi-ruano/Cursos">
                  https://github.com/maxi-ruano/Cursos
                </a>
              </li>
              <li>
                Proyecto 2- GITHUB :
                <a href=" https://github.com/No-Country/Cohorte-1-G10">
                  https://github.com/No-Country/Cohorte-1-G10
                </a>
              </li>
              <li>
                Proyecto 3- GITHUB :
                <a href=" https://github.com/maxi-ruano/Diario">
                  https://github.com/maxi-ruano/Diario
                </a>
              </li>
              <li>
                Proyecto 4- GITHUB :
                <a href=" https://github.com/No-Country/Cohorte-1-G10">
                  https://github.com/No-Country/Cohorte-1-G10
                </a>
              </li>
              {/* <li>
                Proyecto 5- GITHUB :
                <a href=" https://github.com/maxi-ruano/e-commerce">
                  https://github.com/maxi-ruano/e-commerce
                </a>
              </li> */}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Skills;
