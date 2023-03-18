import React from 'react'

import classes from '../scss/Contacto.module.scss'

import SecondBanner from "../../components/js/SecondBanner";
import Informacion from "../../components/js/Informacion";
import Mapa from "../../components/js/Mapa";

const Contacto = () => {

  const props = {
    name: 'DOMO 1',
    urlImage: '../img/domo1/domo1.png',
    urlImage2: '../img/domo1/domo1.png',
    photoList : {
      photo_1: '../img/domo1/photo1.png',
      photo_2: '../img/domo1/photo2.png',
      photo_3: '../img/domo1/photo3.png',
      photo_4: '../img/domo1/photo4.png',
      photo_5: '../img/domo1/photo5.png',
      photo_6: '../img/domo1/photo6.png',
      photo_7: '../img/domo1/photo7.png'
    }
  }

  return (
    <div className={classes.main}>

      <SecondBanner urlImage={props.urlImage}/>

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

      <Informacion />
      
      <Mapa />


    </div>
  )
}

export default Contacto
