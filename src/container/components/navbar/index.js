import React, { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import { animateScroll as scroll } from 'react-scroll';
import {
    Nav,
    NavContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavBtnLink,
    NavBtn
} from './styleElement.js';

const NavBar = ({ toggle }) => {

    const [scrollNav, setScrollNav] = useState(false);

    const changeNav = () => {
        if (window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);

    const toggleHome = () => {
        scroll.scrollToTop();
    }

    return (
        <>
            <Nav scrollNav={scrollNav}>
                <NavContainer>
                    <NavLogo to="/" onClick={toggleHome}>
                        Dolla
                    </NavLogo>
                    <MobileIcon onClick={ toggle }>
                        <FaBars/>
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to="about"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'
                            >About</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="services"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'>Services</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="discovery"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'>discovery</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="contact"
                                smooth={true}
                                duration={500}
                                spy={true}
                                offset={-80}
                                exact='true'>ContactUs</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to="signUp">SignUp</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="SignIn">SignIn</NavBtnLink>
                    </NavBtn>
                </NavContainer>
            </Nav>
        </>
    );
}

export default NavBar;