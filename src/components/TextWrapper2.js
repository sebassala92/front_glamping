import React from 'react'

import classes from './TextWrapper.module.scss'

const TextWrapper = () => {
  return (
    <div className={classes.text_wrapper}>
        <div className={classes.cont_1}>

            <div className={classes.logo_1}></div>

            
            <div className={classes.cont_2}>

              <div className={classes.logo_2}></div>

              <h2 className={classes.titulo}>
                  RESERVAS
              </h2>

            </div>

            <p className={classes.text}>
            <span className={classes.weigth}>¡Estamos aquí para guiarte!</span><br></br>
            Haz tu reserva abajo o comunícate con nosotros
            para que tu experiencia sea todo un hecho.
            </p>


        </div>      
    </div>
  )
}

export default TextWrapper
