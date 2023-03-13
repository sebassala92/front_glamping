import React from 'react'

import classes from '../scss/CardWrapper.module.scss'
import DomoCard from './DomoCard'


const CardWrapper = () => {
  return (
    <div className={classes.card_Wrapper}>

      <div className={classes.cont_1}>
        <DomoCard />
        <DomoCard />
        <DomoCard />
      </div>
      
    </div>
  )
}

export default CardWrapper
