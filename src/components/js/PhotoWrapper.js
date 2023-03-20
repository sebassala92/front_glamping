import React from 'react'

import classes from '../scss/PhotoWrapper.module.scss'

const PhotoWrapper = (props) => {

  

  return (
    <article className={classes.photo_wrapper}>

        <div className={classes.cont_1}>
          {/* <div className={classes.cont_2}> */}
          
          {

            props.photo_list.map(person => 

                <img 
                  className={classes.img} 
                  src={require(`../../img/${person}`)} 
                  alt="" 
                />    
            )
          }       

          {/* </div> */}

        </div>
      
    </article>
  )
}

export default PhotoWrapper
