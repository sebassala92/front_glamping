import React from 'react'

import classes from '../scss/Reserva.module.scss'

import SecondBanner from "../../components/js/SecondBanner";

const Reserva = () => {

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
    <div>
      <SecondBanner urlImage={props.urlImage}/>

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

    </div>
  )
}

export default Reserva
