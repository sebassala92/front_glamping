import React from 'react'

import classes from '../scss/ContactCard.module.scss'

const ContactCard = () => {
  return (
    <div className={classes.main}>

      <div className={classes.cont_1}>

        <div className={classes.cont_11}>

          <div className={classes.cont_111}>

            <div className={classes.cont_title}>
              <span className={classes.title_1}>DÉJANOS</span><br />
              <span className={classes.title_2}>Tu mensaje</span>
            </div>

            <input className={classes.input} type="text" placeholder='nombre'/>
            <input className={classes.input} type="text" placeholder='correo'/>
            <input className={classes.input} type="text" placeholder='mensaje'/>


          </div>
          
        </div>

        <div className={classes.cont_12}></div>

          <div className={classes.cont_13}>

          <h2 className={classes.titulo}>Información</h2>

            <div className={classes.info}>

              <span className={classes.logo__mail}></span>
              <span className={classes.text}>carlosjim84@hotmail.com</span>

            </div>

            <div className={classes.info}>

              <span className={classes.logo__wp}></span>
              <span className={classes.text}>+57 312 2941890</span>

            </div>

            <div className={classes.info}>

              <span className={classes.logo__clock}></span>
              <span className={classes.text}>7:00 - 16:00</span>

            </div>

            <div className={classes.info}>

              <span className={classes.logo__place}></span>
              <span className={classes.text}>Granada - Antioquia</span>

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
