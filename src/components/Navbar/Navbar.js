import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { changeTheme } from '../../utils/StoreSetup/themeSlice';
import routingPaths from '../../utils/constants/routingConstants';
import getTransitions from '../../utils/transitions';
import './Navbar.css';

const Navbar = () => {

    // Access History Object
    const navigate = useNavigate();

    // Access Location Object
    const location = useLocation();

    // Access Dispatch Function
    const dispatch = useDispatch();

    // Access App Theme
    const theme = useSelector(state => state.themeSlice.theme);

    // On Change Theme Handler
    const onChangeTheme = () => {

        sessionStorage.setItem('Theme', !theme);

        dispatch(changeTheme(!theme));
    };

    // Handles Mobile Menu Toggle Bar
    const toggleMenu = () => {
        navigate(routingPaths.mobileNavMenu, { state: location.pathname });
    };

    // Logo Onclick Handler
    const onClickLogo = () => {
        navigate(routingPaths.home);
    };

    return (
        <div className="app-navbar">

            {/* Renders Website Logo */}
            <div>
                <motion.h1 className='navbar-logo-h1' onClick={onClickLogo} {...getTransitions(1)}>{"< Syed Jiavuddin />"}</motion.h1>
            </div>

            <div className='d-flex justify-content-end align-items-center'>

                {/* Renders Navbar Menu On Desktop */}
                <motion.ul className={`navbar-menu-ul ${theme ? '' : 'dark'}`} {...getTransitions(1)}>
                    {location.pathname !== routingPaths.about && (
                        <li>
                            <Link to={routingPaths.about}>About</Link>
                        </li>
                    )}
                    {location.pathname !== routingPaths.projects && (
                        <li>
                            <Link to={routingPaths.projects}>Projects</Link>
                        </li>
                    )}
                    {location.pathname !== routingPaths.contact && (
                        <li>
                            <Link to={routingPaths.contact}>Contact</Link>
                        </li>
                    )}
                </motion.ul>

                <div className='d-flex justify-content-start align-items-center'>

                    {/* Renders Theme Button */}
                    <motion.button
                        type='button'
                        className={`d-flex flex-column justify-content-center align-items-center navbar-theme-btn ${theme ? '' : 'dark'}`}
                        onClick={onChangeTheme}
                        {...getTransitions(1)}
                    >
                        {theme ? (
                            <i className='fa-solid fa-moon'></i>
                        ) : (
                            <svg
                                viewBox="0 0 24 24"
                                focusable="false"
                                className="navbar-light-icon"
                            >
                                <g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2" fill="none" stroke="currentColor"><circle cx="12" cy="12" r="5"></circle><path d="M12 1v2"></path><path d="M12 21v2"></path><path d="M4.22 4.22l1.42 1.42"></path><path d="M18.36 18.36l1.42 1.42"></path><path d="M1 12h2"></path><path d="M21 12h2"></path><path d="M4.22 19.78l1.42-1.42"></path><path d="M18.36 5.64l1.42-1.42"></path></g>
                            </svg>
                        )}
                    </motion.button>

                    {/* Renders Hamburger Menu */}
                    <motion.svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="navbar-hamburger-menu"
                        viewBox="0 0 24 24"
                        onClick={toggleMenu}
                        {...getTransitions(1)}
                    >
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2">
                            <path d="M2 12h20M2 6h20M2 18h20" />
                        </g>
                    </motion.svg>

                </div>

            </div>

        </div>
    );
};

export default Navbar;