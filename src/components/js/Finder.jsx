import React, { useState } from 'react'
import Calendar from 'react-calendar';

import classes from '../scss/Finder.module.scss'

import PhotoCard from './PhotoCard'



const Finder = () => {

  const [value, onChange] = useState(new Date());
  
  return (
    <article className={classes.finder}>

      <div className={classes.search}>

        <div className={classes.cont_1}>

          <p className={classes.title}>Inicio estadía y finalización</p>

          <div className={classes.display}></div>    

        </div>

        <div className={classes.cont_1}>

          <p className={classes.title}>Cantidad de personas</p>

          <div className={classes.display}></div>    
                
        </div>

        <div className={classes.cont_1}>

          <p className={classes.space}></p>

          <div className={classes.btn}>BUSCAR</div>
 
                
        </div>

      </div>

      <div className={classes.cont_2}>
        <div className={classes.cont_3}>
          <Calendar onChange={onChange} value={value} />
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
