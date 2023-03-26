import React from 'react'

import classes from '../scss/Escapada.module.scss'

import MainBanner from "../../components/js/MainBanner";
import PhotoWrapper2 from "../../components/js/PhotoWrapper2";

const Escapada = () => {

  const props_main_banner = {
    name: 'DATE UNA ESCAPADA',
    url_img: 'galeria/banner.png',
  }

  const props_photo_wrapper = {
    photoList : [
      'galeria/photo1.png',
      'galeria/photo2.png',
      'galeria/photo3.png',
      'galeria/photo4.png',
      'galeria/photo5.png',
      'galeria/photo6.png',
      'galeria/photo7.png',
      'galeria/photo8.png',
      'galeria/photo9.png',
      'galeria/photo10.png',
      'galeria/photo11.png',
      'galeria/photo12.png',
      'galeria/photo13.png',
      'galeria/photo14.png',
      'galeria/photo15.png',
      'galeria/photo16.png',
      'galeria/photo17.png',
      'galeria/photo18.png',
      'galeria/photo19.png',
      'galeria/photo20.png',
      'galeria/photo21.png',
      'galeria/photo22.png',
      'galeria/photo23.png',
      'galeria/photo24.png',
      'galeria/photo25.png',
      'galeria/photo26.png',
      'galeria/photo27.png',
      'galeria/photo28.png',
      'galeria/photo29.png',
      'galeria/photo30.png',
      'galeria/photo31.png',
      'galeria/photo32.png',
      'galeria/photo33.png',
      'galeria/photo34.png',
      'galeria/photo35.png',
    ] 
  }

  return (
    <div className={classes.main}>

      <MainBanner 
        name={props_main_banner.name}
        url_img={props_main_banner.url_img}
      />

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

      <PhotoWrapper2 photo_list={props_photo_wrapper.photoList} />

    </div>
  )
}

export default Escapada
