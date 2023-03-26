import React, { useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import classes from '../scss/DomoCard.module.scss'


const DomoCard = (props) => {

  return (
    <div className={classes.cont_1}>

      <h2 className={classes.title_1}>{props.name}</h2>

      <div className={classes.cont_2}>

        <Carousel 
          autoPlay='true' 
          infiniteLoop='true'>

          <div>
            <img 
              src={require(`../../img/general/carru1.png`)} 
              alt=''
            />
          </div>

          <div>
            <img 
              src={require(`../../img/general/carru2.png`)} 
              alt='' />
          </div>

          <div>
            <img 
              src={require(`../../img/general/carru3.png`)} 
              alt='' />
          </div>

        </Carousel>

      </div>

      <btn className={classes.btn}>ver más</btn>
      
    </div>
  )
}

export default DomoCard
