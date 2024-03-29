import React from 'react'

import classes from '../scss/Home.module.scss'

import MainVideo from "../../components/js/MainVideo";
import CardWrapper from "../../components/js/CardWrapper";
import Finder from "../../components/js/Finder";


const Home = () => {
  return (
    <div className={classes.main}>

      <MainVideo />

      <article className={classes.text_wrapper}>
        <div className={classes.cont_1}>

            <div className={classes.logo_1}></div>

            
            <h2 className={classes.titulo}>
                ¡BIENVENIDO!
            </h2>

            <p className={classes.text}>
            Entrenubes Glamping te invita a vivir la experiencia de disfrutar
            de momentos de tranquildad y dispersión. Relájate del día a día,
            desconéctate y ven a tu hogar fuera de casa.
            </p>

            <div className={classes.logo_2}></div>

            <p className={classes.text}>
            ¡Experimenta la naturaleza de una manera única!
            Ofrecemos <span className={classes.yellow_text}>Dos servicios</span> de glamping excepcionales.
            ¡Reserva ahora y descubre la verdadera aventura al aire libre!
            </p>


        </div>      
      </article>

      <CardWrapper />

      <article className={classes.text_wrapper}>
        <div className={classes.cont_1}>

            <div className={classes.logo_1}></div>

            
            <div className={classes.cont_2}>

              <div className={classes.logo_2}></div>

              <h2 className={classes.titulo}>
                  RESERVAS
              </h2>

            </div>

            <p className={classes.text_2}>
            <span className={classes.weigth}>¡Estamos aquí para guiarte!</span><br></br>
            Haz tu reserva abajo o comunícate con nosotros
            para que tu experiencia sea todo un hecho.
            </p>


        </div>      
    </article>

      <Finder />
      
    </div>
  )
}

export default Home
