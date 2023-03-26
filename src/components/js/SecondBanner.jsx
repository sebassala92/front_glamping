import React from 'react'
 
import classes from '../scss/SecondBanner.module.scss'

const SecondBanner = (props) => {

  return (

    <article className={classes.main}>

      <h2 className={classes.title}>{props.name}</h2>

      <img 
        className={classes.cont_1} 
        src={require(`../../img/${props.url_img}`)} 
        alt="" />

    </article>
  )
}

export default SecondBanner