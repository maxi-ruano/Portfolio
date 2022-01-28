import React from "react";
import styles from "../styles/Slider.module.css";

const slidesInfo = [
  {
    src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",
    alt: "Proyect 1",
    desc: "Proyect 1 -Frontend Page About us(NO COUNTRY)",
  },
  {
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Proyect 2",
    desc: "Proyect 2 -Frontend Diario ",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Proyect 3",
    desc: "Proyect 3 - Full Stack Ecommerce",
  },
  {
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Proyect 3",
    desc: "Proyect 3",
  },
];

const slides = slidesInfo.map((slide) => (
  <div className={styles.slidecontainer}>
    <img src={slide.src} alt={slide.alt} />
    <div className={styles.slidedesc}>
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
