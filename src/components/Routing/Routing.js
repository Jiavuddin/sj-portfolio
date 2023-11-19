import React from 'react';
import { useNavigate, useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import getTransitions from '../../utils/transitions';
import routingPaths from '../../utils/constants/routingConstants';
import './Routing.css';

// Handles Route Messages
const getRouteMsg = (pathname) => {
    switch (pathname) {
        case routingPaths.home:
            return 'Explore More About Me';
        case routingPaths.about:
            return 'Checkout My Projects';
        case routingPaths.projects:
            return 'Discover My Resume';
        case routingPaths.resume:
            return 'Get in Touch!';
        case routingPaths.contact:
            return 'Go Back Home';
        default:
            return 'Back To Projects';
    }
};

function Routing() {

    const navigate = useNavigate();

    const location = useLocation();

    // Access theme from store
    const theme = useSelector((state) => state.themeSlice.theme);

    // Route Handler
    const onClickRoute = () => {
        switch (location?.pathname) {
            case routingPaths.home:
                navigate(routingPaths.about);
                return;
            case routingPaths.about:
                navigate(routingPaths.projects);
                return;
            case routingPaths.projects:
                navigate(routingPaths.resume);
                return;
            case routingPaths.resume:
                navigate(routingPaths.contact);
                return;
            case routingPaths.contact:
                navigate(routingPaths.home);
                return;
            default:
                navigate(routingPaths.projects);
                return;
        }
    };

    return (
        <div>

            <motion.p className="routing-p mt-3 mb-5" onClick={onClickRoute} {...getTransitions(1.9)}>

                {getRouteMsg(location?.pathname)}

                {/* Renders Arrow Icon */}
                <svg className={`arrow-svg ${theme ? "" : "arrow-svg-dark"}`} width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd">
                    <path d="M21.883 12l-7.527 6.235.644.765 9-7.521-9-7.479-.645.764 7.529 6.236h-21.884v1h21.883z"></path>
                </svg>

            </motion.p>

        </div>
    );
}

export default Routing;