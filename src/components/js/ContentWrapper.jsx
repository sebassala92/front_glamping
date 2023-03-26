import React from 'react'

import classes from '../scss/ContentWrapper.module.scss'

const ContentWrapper = (props) => {
  return (
    <article className={classes.content_wrapper}>

        <div className={classes.cont_1}>

            <div className={classes.cont_2}>
              <img 
                className={classes.img} 
                src={require(`../../img/${props.url_img}`)} 
                alt="Foto Domo 1" />
            </div>

            <div className={classes.cont_3}>

              <div className={classes.logo}></div>

              <div className={classes.title}>{props.name}</div>

              <p className={classes.text}>{props.text}</p>
              
              <btn className={classes.btn}>Reservar</btn>
            </div>
        </div>
      
    </article>
  )
}

export default ContentWrapper
