import React from 'react'
 
import classes from '../scss/MainBanner.module.scss'

const MainBanner = ({title, url_img}) => {
  return (
    <article className={classes.article_main_banner}>
      <h2 className={classes.title}>{title}</h2>
      <img src={url_img} alt="" />
    </article>
  )
}

export default MainBanner
