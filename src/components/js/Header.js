import React, {useState} from 'react'


import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

import {Switch, Route, Link} from 'react-router-dom';
 
import classes from '../scss/Header.module.scss'

const Header = () => {

    // const[menuOpen, setMenuOpen] = useState(false);

    // const menuToggleHandler = () => {
    //     setMenuOpen((p) => !p)
    // };

    return <header className={classes.header}>

        <div className={classes.header__content}>
            
            <h2 className={classes.header__content__logo}></h2>

            <nav className={classes.header__content__nav}>

                <ul>
                    <li>
                        <Link href="/">Inicio</Link>
                    </li>

                    <li>
                        <Link href='/domo1'>Domo 1</Link>
                    </li>

                    <li>
                        <Link href='/domo2'>Domo 2</Link>
                    </li>

                    <li>
                        <Link href='/cabana'>Cabaña</Link>
                    </li>

                    <li>
                        <Link href='/reserva'>Reserva</Link>
                    </li>

                    <li>
                        <Link href='/contacto'>Contacto</Link>
                    </li>

                    <li>
                        <Link href='/escapada'>Galeria</Link>
                    </li>
                </ul>

                {/* <div className={classes.header__content__toggle}>
                        {!menuOpen ? (
                            <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                            <AiOutlineClose onClick={menuToggleHandler} />
                        )}
                </div> */}

            </nav>

        </div>

  </header>;
}

export default Header
