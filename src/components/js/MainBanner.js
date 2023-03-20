import React from 'react'
 
import classes from '../scss/MainBanner.module.scss'

const MainBanner = (props) => {

  return (

    <article className={classes.main}>

      <h2 className={classes.title}>{props.title}</h2>

      <img 
        className={classes.cont_1} 
        src={require(`../../img/${props.url_img}`)} 
        alt="Foto Domo 1" />

    </article>

  )
}

export default MainBanner
