import React from "react";
import styles from "./styles/Navbar.module.css";

const Navbar = () => {
  const toTheTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };
  return (
    <nav className={styles.Navbar}>
      <div className={styles.navbarlogo} onClick={toTheTop}>
        Maxi Ruano
      </div>
    </nav>
  );
};

export default Navbar;
