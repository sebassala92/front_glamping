import React from 'react'

import classes from '../scss/CardWrapper.module.scss'
import DomoCard from './DomoCard'


const CardWrapper = () => {

  const props = {
    name_1: 'DOMO 1',
    name_2: 'DOMO 2',
    name_3: 'CABAÑA',

    list_1: {

    },

    list_2: {

    },

    list_3: {

    },
  }

  return (
    <div className={classes.card_Wrapper}>

      <div className={classes.cont_1}>
        <DomoCard name={props.name_1} />
        <DomoCard name={props.name_2} />
        <DomoCard name={props.name_3} />
      </div>
      
    </div>
  )
}

export default CardWrapper
