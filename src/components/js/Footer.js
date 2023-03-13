import React from 'react'

import classes from '../scss/Footer.module.scss'

const Footer = () => {
  

  return (
    <footer className={classes.footer}>

      <div className={classes.cont_1}>

        <div className={classes.cont_2}>

          <div className={classes.logo}></div>

          <div className={classes.redes}>
            <div className={classes.redes__tw}></div>
            <div className={classes.redes__yt}></div>
            <div className={classes.redes__ig}></div>
            <div className={classes.redes__fb}></div>            
          </div>

          <p className={classes.derechos}>
            ©2022 por Entrenubes Glamping. Diseñador por ED Gráfico
            Todos los derechos reservados
          </p>

        </div>

      </div>


      
    </footer>
  )
}

export default Footer
