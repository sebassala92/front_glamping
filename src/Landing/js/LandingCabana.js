import React from 'react'

import classes from '../scss/LandingEspacio.module.scss'

import MainBanner from "../../components/js/MainBanner";
import ContentWrapper from "../../components/js/ContentWrapper";
import PhotoWrapper from "../../components/js/PhotoWrapper";

const Cabana = () => {

  const props_main_banner = {
    name: 'CABAÑA',
    url_img: 'cabana/cabana.png',
  }

  const props_content_wrapper = {
    name: 'CABAÑA',
    url_img: 'cabana/circular.png',
    text: '¡Experimenta la comodidad y el lujo en plena naturaleza con nuestro Domo Glamping. Este alojamiento único te permitirá disfrutar de las estrellas desde la comodidad de tu propia cama, gracias a su techo transparente. Equipado con todas las comodidades necesarias, el Domo Glamping es perfecto para aquellos que buscan una experiencia de camping sin sacrificar la comodidad.'
  }

  const props_photo_wrapper = {
    photoList :[
      'cabana/photo1.png',
      'cabana/photo2.png',
      'cabana/photo3.png',
      'cabana/photo4.png',
      'cabana/photo5.png',
      'cabana/photo6.png',
      'cabana/photo7.png',
      'cabana/photo8.png'
    ]
  }

  return (
    <div className={classes.main}>

      <MainBanner 
        name={props_main_banner.name} 
        url_img={props_main_banner.url_img}  
      />

      <article className={classes.text_wrapper}>
        <div className={classes.cont_1}>

          <div className={classes.logo_1}></div>

          <p className={classes.text}>
            ¡Disfruta de la naturaleza con elegancia! Ofrecemos              
            <span className={classes.weigth}> dos opciones de glamping</span><br></br>
            para que elijas la que mejor se adapte a ti
          </p>

        </div>      
      </article>

      <ContentWrapper 
        name={props_content_wrapper.name} 
        url_img={props_content_wrapper.url_img} 
        text={props_content_wrapper.text}
      />
      
      <PhotoWrapper photo_list={props_photo_wrapper.photoList} />

    </div>
  )
}

export default Cabana
