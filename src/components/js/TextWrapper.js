import React from 'react'

import classes from '../scss/TextWrapper.module.scss'

const TextWrapper = () => {
  return (
    <article className={classes.text_wrapper}>
        <div className={classes.cont_1}>

            <div className={classes.logo_1}></div>

            
            <h2 className={classes.titulo}>
                ¡BIENVENIDO!
            </h2>

            <p className={classes.text}>
            Entrenubes Glamping te invita a vivir la experiencia de disfrutar
            de momentos de tranquildad y dispersión. Relájate del día a día,
            desconéctate y ven a tu hogar fuera de casa.
            </p>

            <div className={classes.logo_2}></div>

            <p className={classes.text}>
            ¡Experimenta la naturaleza de una manera única!
            Ofrecemos <span className={classes.yellow_text}>Dos servicios</span> de glamping excepcionales.
            ¡Reserva ahora y descubre la verdadera aventura al aire libre!
            </p>


        </div>      
    </article>
  )
}

export default TextWrapper
