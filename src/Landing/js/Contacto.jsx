import React from 'react'

import classes from '../scss/Contacto.module.scss'

import SecondBanner from "../../components/js/SecondBanner";
import ContactCard from "../../components/js/ContactCard";
import Mapa from "../../components/js/Mapa";

const Contacto = () => {

  const props_second_banner = {
    name: 'CONTÁCTANOS',
    url_img: 'contacto/lago.png',
  }

  return (
    <div className={classes.main}>

      <SecondBanner 
        name={props_second_banner.name}
        url_img={props_second_banner.url_img}
      />

      <div className={classes.cont_text}>
        
        <div className={classes.logo_1}></div>

          <p className={classes.text_1}>
            ¡Estamos aquí para ayudarte en todo lo que necesites! Si tienes 
            preguntas, comentarios, no dudes en ponerte en contacto con nosotros.
            Nuestro equipo de atención al cliente está disponible para ayudarte 
            con cualquier consulta que puedas tener. Ya sea que quieras hacer
            una reserva o simplemente obtener más información sobre nuestras 
            opciones de glamping, estamos aquí para ayudarte. ¡No dudes 
            en contactarnos hoy mismo!
          </p>

      </div>

      <ContactCard />
      
      <Mapa />


    </div>
  )
}

export default Contacto
