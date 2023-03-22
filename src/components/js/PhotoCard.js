import React from 'react'

import classes from '../scss/PhotoCard.module.scss'

const PhotoCard = () => {
  return (
    <div className={classes.main}>

        <div className={classes.cont_1}></div>

        <h2 className={classes.titulo}>COLLECTION</h2>

        <h3 className={classes.titulo_2}>Legoland & Water Park Combo</h3>

        <div className={classes.cont_2}>
            <div className={classes.cont_21}>4.5</div>
            <div className={classes.cont_22}>1262 Reviews</div>
        </div>

        <div className={classes.cont_3}>$300</div>

        <div className={classes.cont_4}>
            <div className={classes.cont_41}></div>
            <div className={classes.cont_42}>save upto 70% off</div>
            
        </div>

        <div className={classes.cont_5}>
            <div className={classes.cont_51}>$267</div>
        </div>

        <div className={classes.cont_6}>
            <div className={classes.cont_61}></div>
            <div className={classes.cont_62}></div>
        </div>
      
    </div>
  )
}

export default PhotoCard
