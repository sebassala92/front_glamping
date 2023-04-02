import React, {useEffect, useState} from 'react'


import {BiMenuAltRight} from 'react-icons/bi'
import {AiOutlineClose} from 'react-icons/ai'

import {Switch, Route, Link} from 'react-router-dom';
 
import classes from '../scss/Header.module.scss'

const Header = () => {

    const[menuOpen, setMenuOpen] = useState(false);

    const [size, setSize] = useState({
        width: undefined,
        height: undefined,
    })

    const handleScroll = () => {
        setMenuOpen(false)
    };

    const menuToggleHandler = () => {
        setMenuOpen((p) => !p)
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    useEffect(() => {
        const handleResize = () => {
            setSize({
                width: window.innerWidth,
                height: window.innerHeight,
            })
        };
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, [])

    useEffect(() => {
        if (size.width > 768 && menuOpen) {
            setMenuOpen(false)
        }
    }, [size.width, menuOpen])


    return <header className={classes.header}>

        <div className={classes.header__content}>
            
            
            <div className={classes.header__content__logo}></div>

            <nav className={`${classes.header__content__nav} ${menuOpen ? classes.isMenu : ""}`}>

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

            </nav>

            <div className={classes.header__content__toggle}>
                    {!menuOpen ? (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    ) : (
                        <BiMenuAltRight onClick={menuToggleHandler} />
                    )}
            </div>

        </div>

  </header>;
}

export default Header
