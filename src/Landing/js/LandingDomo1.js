import React from 'react'

import MainBanner from "../../components/js/MainBanner";
import TextWrapper3 from "../../components/js/TextWrapper3";
import ContentWrapper from "../../components/js/ContentWrapper";

const Landing2 = () => {

  const props = {
    name: 'DOMO 1',
    urlImage: '../img/domo1/domo1.png',
    urlImage2: '../img/domo1/domo1.png',
    text: '¡Experimenta la comodidad y el lujo en plena naturaleza con nuestro Domo Glamping. Este alojamiento único te permitirá disfrutar de las estrellas desde la comodidad de tu propia cama, gracias a su techo transparente. Equipado con todas las comodidades necesarias, el Domo Glamping es perfecto para aquellos que buscan una experiencia de camping sin sacrificar la comodidad.',
  }

  return (
    <div>
        <MainBanner name_url={props.name} />
        <TextWrapper3 />
        <ContentWrapper name={props.name} urlImage={props.urlImage} urlImage2={props.urlImage2} text={props.text}/>
      
    </div>
  )
}

export default Landing2
