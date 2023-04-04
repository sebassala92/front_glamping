import React, {useRef} from 'react'
 
import classes from '../scss/MainVideo.module.scss'
import { TweenMax, Power3 } from 'gsap/gsap-core'

const MainVideo = () => {
  return (
    <article className={classes.article_main_video}>
      
      <h1 className={classes.titulo}>VIVE LA EXPERIENCIA</h1>

      <video src={require(`../../img/general/video2.MOV`)}  autoPlay loop muted />
    </article>
  )
}

export default MainVideo
