import React from 'react'

import classes from '../scss/LandingDomo1.module.scss'

import MainBanner from "../../components/js/MainBanner";
import ContentWrapper from "../../components/js/ContentWrapper";
import PhotoWrapper from "../../components/js/PhotoWrapper";

import domo1 from '../../img/domo_1/domo1.png';
import circular from '../../img/domo_1/circular.png';

const Landingdomo1 = () => {

  const props = {
    name: 'DOMO 1',
    text: '¡Experimenta la comodidad y el lujo en plena naturaleza con nuestro Domo Glamping. Este alojamiento único te permitirá disfrutar de las estrellas desde la comodidad de tu propia cama, gracias a su techo transparente. Equipado con todas las comodidades necesarias, el Domo Glamping es perfecto para aquellos que buscan una experiencia de camping sin sacrificar la comodidad.',
    img: circular,
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

        <MainBanner title={props.name} url_img={domo1}  />

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
          name={props.name} 
          circle_img={props.img} 
          urlImage2={props.urlImage2} 
          text={props.text}
        />
        
        <PhotoWrapper photoList={props.photoList} />

    </div>
  )
}

export default Landingdomo1
