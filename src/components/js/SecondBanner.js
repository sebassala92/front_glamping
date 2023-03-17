import React from 'react'
 
import classes from '../scss/SecondBanner.module.scss'

const SecondBanner = ({props}) => {
  return (
    <article className={classes.article_second_banner}>
      <img src={props.urlImage} alt="" />
    </article>
  )
}

export default SecondBanner