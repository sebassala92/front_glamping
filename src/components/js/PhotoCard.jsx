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
            <div className={classes.cont_23}>$300</div>
        </div>


        <div className={classes.cont_3}>
            {/* <div className={classes.cont_31}></div> */}
            <div className={classes.cont_32}>save upto 70% off</div>
            <div className={classes.cont_33}>$267</div>
            
        </div>

        <div className={classes.cont_4}>
            {/* <div className={classes.cont_41}></div> */}
            <div className={classes.cont_42}>98 people viewing now</div>
        </div>
      
    </div>
  )
}

export default PhotoCard
