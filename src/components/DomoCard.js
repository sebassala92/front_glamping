import React, { useState } from 'react'

import classes from './DomoCard.module.scss'


const DomoCard = () => {
  const[Title, setTitle] = useState('DOMO 1');

  return (
    <div className={classes.cont_1}>

      <h2 className={classes.title_1}>{Title}</h2>

      <div className={classes.cont_2}></div>
      
    </div>
  )
}

export default DomoCard
