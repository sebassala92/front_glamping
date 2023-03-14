import React from 'react'

import classes from '../scss/TextWrapper2.module.scss'

const TextWrapper = () => {
  return (
    <div className={classes.text_wrapper}>
        <div className={classes.cont_1}>

            <div className={classes.logo_1}></div>

            <p className={classes.text}>
              ¡Disfruta de la naturaleza con elegancia! Ofrecemos              
              <span className={classes.weigth}> dos opciones de glamping</span><br></br>
              para que elijas la que mejor se adapte a ti
            </p>

        </div>      
    </div>
  )
}

export default TextWrapper
