import React from 'react'

import classes from '../scss/TextWrapper.module.scss'

const TextWrapper2 = () => {
  return (
    <article className={classes.text_wrapper}>
        <div className={classes.cont_1}>

            <div className={classes.logo_1}></div>

            
            <div className={classes.cont_2}>

              <div className={classes.logo_2}></div>

              <h2 className={classes.titulo}>
                  RESERVAS
              </h2>

            </div>

            <p className={classes.text_2}>
            <span className={classes.weigth}>¡Estamos aquí para guiarte!</span><br></br>
            Haz tu reserva abajo o comunícate con nosotros
            para que tu experiencia sea todo un hecho.
            </p>


        </div>      
    </article>
  )
}

export default TextWrapper2
