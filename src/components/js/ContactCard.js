import React from 'react'

import classes from '../scss/ContactCard.module.scss'

const ContactCard = () => {
  return (
    <div className={classes.main}>

        <div className={classes.cont_1}>

            <div className={classes.cont_11}></div>

            <div className={classes.cont_12}></div>

            <div className={classes.cont_13}>
                <h2 className={classes.titulo}>Información</h2>

                <div className={classes.info}></div>

            </div>

            <div className={classes.cont_14}></div>

            <div className={classes.cont_14__2}>
                <span className={classes.logo}></span>
                <span className={classes.text}></span>
            </div>

        </div>

      
    </div>
  )
}

export default ContactCard
