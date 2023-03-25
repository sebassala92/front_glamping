import React, { useState }  from 'react'

import classes from '../scss/Contacto.module.scss'

import TestComp from "../../components/js/PruebaHijo";

const PruebaPadre = () => {

  const [datos, estableceDatos] = useState('');

  const padreAHijo = () => {
    estableceDatos("Esta es la data del componente Padre al componente Hijo.");
  }

  const props_second_banner = {
    name: 'CONTÁCTANOS',
    url_img: 'contacto/lago.png',
  }

  return (
    <div className={classes.main}>

      <TestComp 
        name={props_second_banner.name}
        url_img={props_second_banner.url_img}
      />

    <button>sumar</button>

    <div>mostrar información desde el hijo en el padre:</div>



    </div>
  )
}

export default PruebaPadre
