import React from 'react'

import classes from '../scss/Escapada.module.scss'

import MainBanner from "../../components/js/MainBanner";
import PhotoWrapper from "../../components/js/PhotoWrapper";

const Escapada = () => {

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

      <MainBanner urlImage={props.urlImage}/>

      <div className={classes.cont_text}>
        
        <div className={classes.logo_1}></div>

        <h2 className={classes.titulo}>GALERÍA</h2>

        <p className={classes.text_1}>
        Explora nuestra galería y déjate inspirar por la belleza del glamping. 
        En esta sección, encontrarás una gran variedad de fotos que te 
        mostrarán lo que puedes esperar al reservar con nosotros. Desde 
        las vistas  espectaculares de la naturaleza hasta los interiores 
        acogedores y lujosos de nuestras opciones de glamping, nuestra galería 
        te permitirá imaginar tu experiencia en plena naturaleza. ¡Explora 
        nuestra galería y comienza a planificar tu escapada única hoy mismo!
        </p>

      </div>

      <PhotoWrapper />

    </div>
  )
}

export default Escapada
