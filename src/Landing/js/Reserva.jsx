import React from 'react'

import classes from '../scss/Reserva.module.scss'

import SecondBanner from "../../components/js/SecondBanner";
import Finder from "../../components/js/Finder";

const Reserva = () => {

  const props_second_banner = {
    name: 'RESERVA',
    url_img: 'reserva/sky.png',
  }

  return (
    <div className={classes.main}>

      <SecondBanner 
        name = {props_second_banner.name}
        url_img = {props_second_banner.url_img}
      />

      <div className={classes.cont_text}>
        
        <div className={classes.logo_1}></div>

        <div className={classes.logo_2}></div>

        <div className={classes.logo_3}></div>

          <p className={classes.text_1}>
            "¡Reserva ahora y vive una experiencia única en la naturaleza!
            En nuestra sección de reservas, podrás elegir entre nuestras 
            dos opciones de glamping, el Domo Glamping y La Casita Carpintera 
            Glamping. Con opciones de reserva flexibles y una atención al 
            cliente excepcional, estamos comprometidos a brindarte la mejor 
            experiencia de alojamiento. ¡Haz tu reserva hoy y prepárate para 
            disfrutar de la naturaleza con estilo!"
          </p>

      </div>

      <Finder />

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

      <div className={classes.cont_wp}>

        <div className={classes.cont_logo}></div>

        <btn className={classes.btn}>¡Clic aquí!</btn>

        <p className={classes.text_2}>Reserva en mínutos...</p>
      </div>

    </div>
  )
}

export default Reserva
