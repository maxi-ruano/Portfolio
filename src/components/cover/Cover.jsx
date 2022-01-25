import React from "react";
import styles from "../styles/Cover.module.css";

const Cover = () => {
  return (
    <div className={styles.covercontainer}>
      <video
        classname="video"
        src="/video/covervideo.mp4"
        autoPlay
        loop
        muted
      />
      <h1>Maximiliano Ruano</h1>
      <p>Full Stack Developer</p>
    </div>
  );
};

export default Cover;
