import React, { useState, useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import getTransitions from '../../utils/transitions';
import routingPaths from '../../utils/constants/routingConstants';
import Routing from '../Routing/Routing';
import Footer from '../Footer/Footer';
import './Projects.css';

// Holds Projects Details
const projects = [
    {
        id: 0,
        alt: "Tourism Website",
        src: "Tourism",
        title: "Tourism",
        desc: "Unveil the world's wonders, where exploration has no bounds.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery",
            "JavaScript"
        ],
    },
    {
        id: 1,
        alt: "VR Website",
        src: "VR",
        title: "VR",
        desc: "Transcend into boundless realities, embracing every experience.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery",
            "JavaScript"
        ],
    },
    {
        id: 2,
        alt: "Ecommerce Website",
        src: "Ecommerce",
        title: "Ecommerce",
        desc: "Unlock desires, the world is your choice.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery",
            "JavaScript"
        ],
    },
    {
        id: 3,
        alt: "Food Munch Website",
        src: "FoodMunch",
        title: "Food Munch",
        desc: "Savor every flavor, a delight worth relishing.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery",
            "JavaScript"
        ],
    },
    {
        id: 4,
        alt: "Nxt Trendz Website",
        src: "NxtTrendz",
        title: "Nxt Trendz",
        desc: "Revamp your style, shop trends with flair.",
        tech: [
            "ReactJS",
            "React Router",
            "JWT Authentication",
            "Context API",
            "Responsive Design"
        ],
    },
];

function Projects() {

    // Access History Object
    const navigate = useNavigate();

    // Handles Screen Mode
    const [isDesktop, setIsDesktop] = useState(false);

    // Handles Project card Hover
    const [hoveredCard, setHoveredCard] = useState(null);

    // Handles Shuffling Project Data 
    const projectsData = useMemo(() => {

        const shuffledData = [];

        projects.forEach(element => {
            shuffledData.unshift(element);
        });

        return shuffledData;
    }, []);

    // Handles Screen Mode
    useEffect(() => {

        const mediaQuery = window.matchMedia('(min-width: 768px)');

        setIsDesktop(mediaQuery.matches);

        const handleResize = (e) => {
            setIsDesktop(e.matches);
        };

        mediaQuery.addEventListener('change', handleResize);

        return () => {
            mediaQuery.removeEventListener('change', handleResize);
        };

    }, []);

    // Handles Mouse Enter Event Over Card
    const handleMouseEnter = (cardId) => {
        setHoveredCard(cardId);
    };

    // Handles Mouse Leave Event Over Card
    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className='projects-div'>

            {/* Renders Projects Heading */}
            <motion.h1 className='projects-h1 mt-2 mb-4' {...getTransitions(1)}>Projects.</motion.h1>

            <div className='projects-cards-div mb-4'>

                {/* Renders Projects Data */}
                {projectsData.map(item => (

                    <motion.div
                        key={`${item.title}-${item.id}`}
                        className="d-flex align-items-start projects-card-div"
                        onMouseEnter={() => handleMouseEnter(item.id)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => navigate(routingPaths.projects + `/${item.id}`)}
                        {...getTransitions(1.3)}
                    >

                        <div className='projects-card-inside-div'>

                            {/* Renders Project Image */}
                            <picture className='projects-card-picture'>
                                <source srcSet={`/assets/Projects/${item.src}/${item.src}.webp`} type="image/webp" />
                                <img className='projects-card-img' src={`/assets/Projects/${item.src}/${item.src}.png`} alt={`${item.src} project`} />
                            </picture>

                        </div>

                        {/* Renders Project Overlay Card */}
                        {((isDesktop && hoveredCard === item.id) || (!isDesktop)) && (

                            <div className='project-card-overlay'>

                                {/* Renders Project Title */}
                                <motion.h1 className='project-card-overlay-h1 ml-2' {...getTransitions(isDesktop ? 0.3 : 1.3)}>{item.title}</motion.h1>

                                {/* Renders Project Description */}
                                <motion.p className='project-card-overlay-p ml-2' {...getTransitions(isDesktop ? 0.6 : 1.6)}>{item.desc}</motion.p>

                                {/* Renders Skilled Used in Project */}
                                <div className='project-card-btn-div ml-2 mb-3 mb-lg-4'>

                                    {item.tech.map(techItem => (

                                        <motion.button
                                            key={`${item.title}-${item.id}-${techItem}`}
                                            className='project-card-btn'
                                            {...getTransitions(isDesktop ? 0.9 : 1.9)}
                                        >
                                            {techItem}
                                        </motion.button>

                                    ))}

                                </div>

                            </div>

                        )}

                    </motion.div>

                ))}

            </div>

            {/* Renders Route Component */}
            <Routing />

            {/* Renders Footer Component */}
            <Footer cond={true} />

            {/* Adjust Spacing at the bottom of the screen */}
            <div className='pt-5'></div>

        </div>
    );
}

export default Projects;