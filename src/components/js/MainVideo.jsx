import React, {useEffect, useRef} from 'react'
import { gsap } from "gsap";
 
import classes from '../scss/MainVideo.module.scss'

const MainVideo = () => {

  const textRef = useRef(null);

  useEffect(() => {
    gsap.to(textRef.current, {
      opacity: 0,
      y: -50,
      duration: 1,
      ease: "power2.out"
    });
  }, []);
  
  return (
    <article className={classes.article_main_video}>
      
      <h1 ref={textRef} className={classes.titulo}>VIVE LA EXPERIENCIA</h1>

      <video src={require(`../../img/general/video2.MOV`)}  autoPlay loop muted />
    </article>
  )
}

export default MainVideo
