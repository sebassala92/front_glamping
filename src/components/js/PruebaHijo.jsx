import React, { useState } from 'react'
 
import classes from '../scss/Test.module.scss'

const PruebaHijo = (props) => {

  // const eventosumar = (event) => {
    
  // }


  return (

    <article className={classes.main}>

      <h2 className={classes.title}>{props.name}</h2>

      <img 
        className={classes.cont_1} 
        src={require(`../../img/${props.url_img}`)} 
        alt="" />

      <button onClick={props.eventosumar}>sumar</button>

      <div>mostrar informacion desde el padre en el hijo: {props.suma}</div>

    </article>
  )
}

export default PruebaHijo