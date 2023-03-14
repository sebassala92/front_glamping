import React from 'react'

import MainBanner from "../../components/js/MainBanner";
import TextWrapper3 from "../../components/js/TextWrapper3";
import ContentWrapper from "../../components/js/ContentWrapper";

const Landing2 = () => {

  const name_url = {
    name: 'DOMO 1',
    urlImage: '../img/domo1/domo1.png'
  }

  return (
    <div>
        <MainBanner name_url={name_url} />
        <TextWrapper3 />
        <ContentWrapper />
      
    </div>
  )
}

export default Landing2
