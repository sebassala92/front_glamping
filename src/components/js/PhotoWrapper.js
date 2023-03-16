import React from 'react'

import classes from '../scss/PhotoWrapper.module.scss'

const PhotoWrapper = (props) => {

  return (
    <article className={classes.photo_wrapper}>

        <div className={classes.cont_1}>
            {

            props.photoList[1]

            }
        </div>
      
    </article>
  )
}

export default PhotoWrapper
