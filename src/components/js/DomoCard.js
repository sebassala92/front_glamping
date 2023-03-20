import React, { useState } from 'react'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import classes from '../scss/DomoCard.module.scss'


const DomoCard = (props) => {

  return (
    <div className={classes.cont_1}>

      <h2 className={classes.title_1}>{props.name}</h2>

      <div className={classes.cont_2}></div>

      <Carousel>
        <div>
          <img src="assets/1.jpeg" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src="assets/2.jpeg" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src="assets/3.jpeg" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
      
    </div>
  )
}

export default DomoCard
