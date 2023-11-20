import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import routingPaths from '../../utils/constants/routingConstants';
import getTransitions from '../../utils/transitions';
import './MobileNavbar.css';

function MobileNavbar() {

    // Access History Object
    const navigate = useNavigate();

    // Access App Theme
    const theme = useSelector(state => state.themeSlice.theme);

    // Access Location Object
    const location = useLocation();

    // Menu Close Handler
    const onCloseMenu = () => {
        setTimeout(() => {
            navigate(-1);
        }, 300);
    };

    return (
        <div className="mobile-nav">

            {/* Renders Close Icon */}
            <div className='d-flex justify-content-end align-items-center mobile-nav-btn-div'>
                <motion.button type='button' className="toggle-btn" onClick={onCloseMenu} {...getTransitions(1)}>
                    <i className="fa-solid fa-xmark fa-lg"></i>
                </motion.button>
            </div>

            {/* Renders Mobile Navigation Menu Items */}
            <ul className={`d-flex flex-column justify-content-center align-items-center mobile-nav-ul ${theme ? '' : 'dark'}`}>
                <motion.li className={`${location.state === routingPaths.home ? 'active' : ''}`} {...getTransitions(1.3)}>
                    <Link to={routingPaths.home}>Home</Link>
                </motion.li>
                <motion.li className={`${location.state === routingPaths.about ? 'active' : ''}`} {...getTransitions(1.6)}>
                    <Link to={routingPaths.about}>About</Link>
                </motion.li>
                <motion.li className={`${location.state === routingPaths.projects ? 'active' : ''}`} {...getTransitions(1.9)}>
                    <Link to={routingPaths.projects}>Projects</Link>
                </motion.li>
                <motion.li className={`${location.state === routingPaths.contact ? 'active' : ''}`} {...getTransitions(2.2)}>
                    <Link to={routingPaths.contact}>Contact</Link>
                </motion.li>
            </ul>

        </div>
    );
}

export default MobileNavbar;