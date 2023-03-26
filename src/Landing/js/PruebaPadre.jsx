import React, { useState }  from 'react'

import classes from '../scss/Contacto.module.scss'

import TestComp from "../../components/js/PruebaHijo";

const PruebaPadre = () => {

  const [suma, setSuma] = useState(0);

  const aumentar = () => {
    setSuma (suma + 2)
  }

  const props_second_banner = {
    name: 'CONTÁCTANOS',
    url_img: 'contacto/lago.png',
  }

  const [suma2, setSuma2] = (0);

  const aumentar2 = () => {
    setSuma2 (suma2 + 3)
  }



  return (
    <div className={classes.main}>

      <TestComp 
        name={props_second_banner.name}
        url_img={props_second_banner.url_img}
        suma={suma}
        eventosumar={aumentar2}
      />

    <div>mostrar información desde el hijo en el padre: {suma2}</div>



    </div>
  )
}

export default PruebaPadre
