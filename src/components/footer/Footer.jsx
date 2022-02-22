import React from "react";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div>
      <footer className={styles.footer}>
        <div className={styles.footerinfo}>
          <h1>Maximiliano Ruano</h1>
          <p>Buenos Aires ,CABA</p>
        </div>
        <div className={styles.footercontact}>
          <h5>Contactame: ruanomaxi@gmail.com</h5>
        </div>
        <div className={styles.footericonos}>
          <div className={styles.diseñadopor}>
            <p> Diseñado por : Maximiliano Ruano</p>
          </div>
          <div className={styles.iconoslinks}>
            <a
              href="https://www.linkedin.com/in/maximiliano-ruano/"
              target="_blank"
              rel="noreferrer"
            >
              <li className="fab fa-linkedin linkedin"></li>
            </a>{" "}
            &nbsp;
            <a
              href="https://github.com/maxi-ruano"
              target="_blank"
              rel="noreferrer"
            >
              <li className="fab fa-github github"></li>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
