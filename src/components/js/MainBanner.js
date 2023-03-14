import React from 'react'
 
import classes from '../scss/MainBanner.module.scss'

const MainBanner = ({name_url}) => {
  return (
    <article className={classes.article_main_banner}>
      <img src={name_url.urlImage} alt="" />
    </article>
  )
}

export default MainBanner
