import React from 'react'

import classes from '../scss/ContentWrapper.module.scss'

const ContentWrapper = () => {
  return (
    <div className={classes.main}>

        <div className={classes.cont_1}>
            <div className={classes.cont_2}></div>
            <div className={classes.cont_2}></div>
        </div>
      
    </div>
  )
}

export default ContentWrapper
