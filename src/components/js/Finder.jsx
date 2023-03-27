import React, { useState } from 'react'
import Calendar from 'react-calendar';

import classes from '../scss/Finder.module.scss'

import PhotoCard from './PhotoCard'



const Finder = () => {

  const [value, onChange] = useState(new Date());
  
  return (
    <article className={classes.finder}>

      <div className={classes.search}>
        
        <Calendar selectRange={true} onChange={onChange} value={value} />

        <div className={classes.cont_1}>

          <div className={classes.btn}>BUSCAR</div>
              
        </div>

      </div>

      <div className={classes.cont_2}>


        <div className={classes.cont_4}>
          <PhotoCard />
        </div>

        <div className={classes.cont_4}>
          <PhotoCard />
        </div> 

        <div className={classes.cont_4}>
          <PhotoCard />
        </div>    

      </div>

    </article>
  )
}

export default Finder
