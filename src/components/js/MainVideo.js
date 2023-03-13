import React from 'react'
 
import classes from '../scss/MainVideo.module.scss'

const MainVideo = () => {
  return (
    <article className={classes.article_main_video}>
      <video src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" autoPlay loop muted />
    </article>
  )
}

export default MainVideo
