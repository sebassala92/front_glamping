import React, { useState } from 'react'
import Calendar from 'react-calendar';

import classes from '../scss/Finder.module.scss'

import PhotoCard from './PhotoCard'
import Stepper from "../../components/js/Stepper";




const Finder = () => {

  const [value, onChange] = useState(new Date());
  
  const[stepperOpen1, setStepperOpen1] = useState(true);
  const[stepperOpen2, setStepperOpen2] = useState(true);
  const[stepperOpen3, setStepperOpen3] = useState(true);

  const open1 = () => {
    setStepperOpen1((p) => !p)
  };

  const open2 = () => {
    setStepperOpen2((p) => !p)
  };

  const open3 = () => {
    setStepperOpen3((p) => !p)
  };
  
  return (
    <article className={classes.finder}>

      <div className={classes.search}>
        
        <Calendar selectRange={true} onChange={onChange} value={value} />

        <div className={classes.cont_1}>

          <div className={classes.btn}>BUSCAR</div>
              
        </div>

      </div>
      <div className={classes.cont_2}>

        <div className={classes.cont_21}>

          <div className={classes.cont_22} onClick={open1}>
            <PhotoCard />
          </div>

          <div className={`${classes.cont_23} ${stepperOpen1 ? classes.isOpen : ""}`} >
            <Stepper />
          </div>

        </div>

        <div className={classes.cont_21}>

          <div className={classes.cont_22} onClick={open2}>
            <PhotoCard />
          </div>

          <div className={`${classes.cont_23} ${stepperOpen2 ? classes.isOpen : ""}`} >
            <Stepper />
          </div>

        </div>

        <div className={classes.cont_21}>

          <div className={classes.cont_22} onClick={open3}>
            <PhotoCard />
          </div>

          <div className={`${classes.cont_23} ${stepperOpen3 ? classes.isOpen : ""}`} >
            <Stepper />
          </div>

        </div>

      </div>
      

    </article>
  )
}

export default Finder
