import React from 'react'
 
import classes from '../scss/MainVideo.module.scss'

const MainVideo = () => {
  return (
    <article className={classes.article_main_video}>
      
      <h1 className={classes.titulo}>VIVE LA EXPERIENCIA</h1>

      <video src={require(`../../img/general/video.MOV`)}  autoPlay loop muted />
    </article>
  )
}

export default MainVideo
