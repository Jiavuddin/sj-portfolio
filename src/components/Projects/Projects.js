import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { motion } from 'framer-motion';
import getTransitions from '../../utils/transitions';
import routingPaths from '../../utils/constants/routingConstants';
import Routing from '../Routing/Routing';
import Footer from '../Footer/Footer';
import './Projects.css';

const projectsData = [
    {
        alt: "Food Munch Website",
        src: "FoodMunch",
        title: "Food Munch",
        desc: "An all-in-one restaurant app for seamless dining experiences.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
    },
    {
        alt: "VR Website",
        src: "VR",
        title: "VR",
        desc: "Escape reality, embrace virtual - Where experiences defy boundaries.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery",
            "JavaScript"
        ],
    },
    {
        alt: "Tourism Website",
        src: "Tourism",
        title: "Tourism",
        desc: "Your gateway to unforgettable travel experiences.",
        tech: [
            "HTML",
            "CSS",
            "Bootstrap",
            "jQuery",
            "JavaScript"
        ],
    },
];

function Projects() {

    const navigate = useNavigate();

    const [isDesktop, setIsDesktop] = useState(false);
    const [hoveredCard, setHoveredCard] = useState(null);

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

    const handleMouseEnter = (cardId) => {
        setHoveredCard(cardId);
    };

    const handleMouseLeave = () => {
        setHoveredCard(null);
    };

    return (
        <div className='projects-div'>

            <motion.h1 className='projects-h1 mt-2 mb-4' {...getTransitions(1)}>Projects.</motion.h1>

            <div className='projects-cards-div mb-4'>

                {projectsData.map((item, index) => (

                    <motion.div
                        key={`${item.title}-${index}`}
                        className="d-flex align-items-start projects-card-div"
                        onMouseEnter={() => handleMouseEnter(index)}
                        onMouseLeave={handleMouseLeave}
                        onClick={() => navigate(routingPaths.projects + `/${index}`)}
                        {...getTransitions(1.3)}
                    >

                        <div className='projects-card-inside-div'>

                            <picture className='projects-card-picture'>
                                <source srcSet={`/assets/Projects/${item.src}/${item.src}.webp`} type="image/webp" />
                                <img className='projects-card-img' src={`/assets/Projects/${item.src}/${item.src}.png`} alt={`${item.src} project`} />
                            </picture>

                        </div>

                        {((isDesktop && hoveredCard === index) || (!isDesktop)) && (

                            <div className='project-card-overlay'>

                                <motion.h1 className='project-card-overlay-h1 ' {...getTransitions(isDesktop ? 0.3 : 1.3)}>{item.title}</motion.h1>

                                <motion.p className='project-card-overlay-p ml-2' {...getTransitions(isDesktop ? 0.6 : 1.6)}>{item.desc}</motion.p>

                                <div className='project-card-btn-div ml-2 mb-3 mb-lg-4'>

                                    {item.tech.map(techItem => (

                                        <motion.button
                                            key={`${item.title}-${index}-${techItem}`}
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

            <Routing />

            <Footer cond={true} />

            <div className='pt-5'></div>

        </div>
    );
}

export default Projects;