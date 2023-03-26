import React from 'react'

import classes from '../scss/ContactCard.module.scss'

const ContactCard = () => {
  return (
    <div className={classes.main}>

      <div className={classes.cont_1}>

        <div className={classes.cont_11}>

          <span className={classes.title_1}>DÉJANOS</span><br />
          <span className={classes.title_2}>Tu mensaje</span>
          
        </div>

        <div className={classes.cont_12}></div>

          <div className={classes.cont_13}>

          <h2 className={classes.titulo}>Información</h2>

            <div className={classes.info}>

              <span className={classes.logo__mail}></span>
              <span className={classes.text}></span>

            </div>

            <div className={classes.info}>

              <span className={classes.logo__wp}></span>
              <span className={classes.text}></span>

            </div>

            <div className={classes.info}>

              <span className={classes.logo__clock}></span>
              <span className={classes.text}></span>

            </div>

            <div className={classes.info}>

              <span className={classes.logo__place}></span>
              <span className={classes.text}></span>

            </div>

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
