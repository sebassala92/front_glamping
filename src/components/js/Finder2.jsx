import React, { useState } from 'react'
import Calendar from 'react-calendar';

import classes from '../scss/Finder2.module.scss'
import 'react-calendar/dist/Calendar.css';



const Finder2 = () => {

  const [value, onChange] = useState(new Date());
  
  return (
    <article className={classes.finder2}>



      <div className={classes.cont_2}>
        <div className={classes.cont_3}>
          <Calendar onChange={onChange} value={value} />
        </div>

      </div>

      <div className={classes.search}>

        <div className={classes.cont_1}>

          <p className={classes.space}></p>

          <div className={classes.btn}>BUSCAR</div>
                
        </div>

      </div>

    </article>
  )
}

export default Finder2
