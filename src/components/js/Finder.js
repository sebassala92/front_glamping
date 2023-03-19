import React from 'react'

import classes from '../scss/Finder.module.scss'
import Calendar from './Calendar';


const Finder = () => {
  return (
    <article className={classes.finder}>

      <div className={classes.search}>

        <div className={classes.cont_1}>

          <p>Inicio estadía y finalización</p>

          <div className={classes.display}></div>    

        </div>

        <div className={classes.cont_1}>

          <p>Inicio estadía y finalización</p>

          <div className={classes.display}></div>    
                
        </div>

        <div className={classes.btn}>
          
      </div>

      </div>

      <div className={classes.cont_2}>
        <div className={classes.cont_3}></div>
        <div className={classes.cont_4}></div>
        <div className={classes.cont_5}></div>      
      </div>

    </article>
  )
}

export default Finder
