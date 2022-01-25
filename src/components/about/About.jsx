import React from "react";
import styles from "../styles/About.module.css";

const About = () => {
  return (
    <div className={styles.aboutcontainer}>
      <div className={styles.aboutdesc}>
        <h3>Dejame decirte algo sobre mí</h3>
        <p>
          Mi caracteristica principal es la curiosidad , lo cual me motiva a
          estar en constante aprendizaje y descubrimiento. Ser autodidacta me
          pone a prueba al presentarse problemas y siendo una persona optimista
          no paro hasta resolverlos
        </p>
      </div>
      <div className={styles.aboutimg}>
        <img src="/img/maxi.jpg" alt="about" />
      </div>
    </div>
  );
};

export default About;
