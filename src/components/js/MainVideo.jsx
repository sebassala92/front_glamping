import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";
 
import classes from '../scss/MainVideo.module.scss'

const MainVideo = () => {

  const textRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(textRef.current,   {
      x: "-50%", // Inicia desde la izquierda
      opacity: 0 // Comienza con opacidad cero
    },
    {
      x: "0%", // Llega al centro
      opacity: 1, // Opacidad completa
      duration: 3 // Duración de la animación en segundos
    }
      );}, []);
  
  return (
    <article className={classes.article_main_video}>
      
      <h1 ref={textRef} className={classes.titulo}>VIVE LA EXPERIENCIA</h1>

      <video src={require(`../../img/general/video2.MOV`)}  autoPlay loop muted />
    </article>
  )
}

export default MainVideo
