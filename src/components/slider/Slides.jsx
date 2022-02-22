import React from "react";
import styles from "../styles/Slider.module.css";

const slidesInfo = [
  {
    href: "https://drive.google.com/file/d/1czdVRGOm_2J7s1haJhdDeZQFHSsXN0Oy/view?usp=sharing",
    src: "https://cdn.pixabay.com/photo/2016/12/19/08/39/mobile-phone-1917737_960_720.jpg",

    alt: "Proyect 1",
    desc: "Proyect 1 - Cursos (CRUD).Pagina donde el administrador puede crear /editar/eliminar cursos mediante una base de datos . Contiene Login/Register. Utilice  MY SQL para la base de datos , LARAVEL(PHP) como framework y Bootstrap y CSS para el FRONTEND",
  },
  {
    href: "https://drive.google.com/file/d/1LNlS9f7ng45YjiRjHO8ZZx4Dfmgm3aej/view?usp=sharing",
    src: "https://images.pexels.com/photos/3184454/pexels-photo-3184454.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=720",
    alt: "Proyect 2",
    desc: "Proyect 2 - Proyecto en equipo(NO COUNTRY) destinado a la compra de paquetes turisticos. Me encargue  del  FRONTEND de la pagina About us .Utilice NEXT JS (REACT) ,SCSS ,NODE JS.",
  },
  {
    href: "https://drive.google.com/file/d/1MhDZFiecnD0vNEwIQ65FfhlT9WDHzpCg/view?usp=sharing",
    src: "https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159_960_720.jpg",
    alt: "Proyect 3",
    desc: "Proyect 3 -Frontend Diario. Destinado a webs de diarios/noticias .Utilice  REACT y CSS GRID).",
  },
  {
    href: "https://drive.google.com/file/d/1xtjclIknkalDAHNQilE1HSdrXMTjRnPM/view?usp=sharing",
    src: "https://cdn.pixabay.com/photo/2015/02/05/08/06/macbook-624707_960_720.jpg",
    alt: "Proyect 4",
    desc: "Proyect 4 - Diseñado para artistas en donde pueden mostrar lo que hacen mediante videos , book de fotos , links de redes , fechas /agenda  (HTML , CSS, JAVASCRIPT, BOOTSTRAP).",
  },
  // {
  //   // src: "https://images.pexels.com/photos/2764676/pexels-photo-2764676.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=960&w=720",
  //   alt: "Proyect 5",
  //   desc: "Proyect 5 - Ecommerce (en proceso)",
  // },
];

const slides = slidesInfo.map((slide) => (
  <div className={styles.slidecontainer}>
    <a href={slide.href}>
      <img src={slide.src} alt={slide.alt} />
    </a>
    <div className={styles.slidedesc}>
      <span>{slide.desc}</span>
    </div>
  </div>
));

export default slides;
