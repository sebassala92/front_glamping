import React from 'react'
 
import classes from '../scss/Test.module.scss'

const PruebaHijo = (props) => {

  return (

    <article className={classes.main}>

      <h2 className={classes.title}>{props.name}</h2>

      <img 
        className={classes.cont_1} 
        src={require(`../../img/${props.url_img}`)} 
        alt="" />

      <button>sumar</button>

      <div>mostrar informacion desde el padre en el hijo:</div>

    </article>
  )
}

export default PruebaHijo