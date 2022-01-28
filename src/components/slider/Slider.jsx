import React from "react";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import styles from "../styles/Slider.module.css";
import Slides from "./Slides";

const Slider = () => {
  return (
    <div className={styles.carouselcontainer}>
      <div className={styles.carouseltittle}>
        <h2>Mis Proyectos</h2>
      </div>

      <Carousel plugins={["infinite", "arrows"]} slides={Slides}></Carousel>
    </div>
  );
};

export default Slider;
