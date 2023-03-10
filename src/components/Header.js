import React, {useState} from 'react'

import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'
 
import classes from './Header.module.scss'

const Header = () => {

    const[menuOpen, setMenuOpen] = useState(false);

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    };

    return <header className={classes.header}>

        <div className={classes.header__content}>
            
            {/* <h2 className={classes.header__content__logo}></h2>

            <nav cclassName={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>

                <ul>
                    <li>
                        <a href='/'>Inicio</a>
                    </li>

                    <li>
                        <a href='/'>Glamping </a>
                    </li>

                    <li>
                        <a href='/'>
                            Reserva</a>
                    </li>

                    <li>
                        <a href='/'>Contacto</a>
                    </li>

                    <li>
                        <a href='/'>Galeria</a>
                    </li>
                </ul>

                <div className={classes.header__content__toggle}>
                        {!menuOpen ? (
                            <BiMenuAltRight onClick={menuToggleHandler} />
                        ) : (
                            <AiOutlineClose onClick={menuToggleHandler} />
                        )}
                    </div>

            </nav> */}

        </div>

  </header>;
}

export default Header
