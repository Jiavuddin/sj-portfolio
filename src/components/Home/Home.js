import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import getTransitions from '../../utils/transitions';
import TypeWriter from '../Typewriter/Typewriter';
import Routing from '../Routing/Routing';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {

    // Maintains Screen Orientation
    const [isPortrait, setOrientation] = useState(() => window.innerHeight > window.innerWidth);

    // Handles Window Resize
    useEffect(() => {

        const updateOrientation = () => {

            const newIsPortrait = window.innerHeight > window.innerWidth;

            // Only update the state if the orientation changes
            if (newIsPortrait !== isPortrait) {
                setOrientation(newIsPortrait);
            }
        };

        // Resize event listener
        window.addEventListener('resize', updateOrientation);

        // Cleanup for the Resize event listener
        return () => {
            window.removeEventListener('resize', updateOrientation);
        };

    }, [isPortrait]);

    return (
        <div className='home-main-div'>

            <Container fluid className='home-container'>

                <Row>

                    <Col xs={12} md={isPortrait ? 12 : 5} className='home-image-col'>

                        <div className='d-flex flex-column justify-content-start align-items-start'>

                            {/* Renders Home Logo */}
                            <motion.img
                                alt="Home Logo"
                                src='/assets/Home Image/home logo.png'
                                className='home-img'
                                {...getTransitions(1)}
                            />

                        </div>

                    </Col>

                    <Col xs={12} md={isPortrait ? 12 : 7}>

                        <div className='d-flex flex-column justify-content-start justify-content-md-center align-items-start h-100'>

                            {/* Renders Greeting Section */}
                            <motion.h1 className='home-greetings-h1' {...getTransitions(1)}>
                                Hello
                                <span className='home-greetings-wave'>👋</span>
                            </motion.h1>

                            {/* Renders Name Section */}
                            <div>
                                <motion.h1 data-text="I'M SYED JIAVUDDIN" className='home-name-h1' {...getTransitions(1.3)}>
                                    <mark className="mark">I'M SYED JIAVUDDIN</mark>
                                </motion.h1>
                            </div>

                            {/* Renders Typewriter Section */}
                            <motion.span className='home-typewriter-span' {...getTransitions(1.6)}>
                                <TypeWriter />
                            </motion.span>

                            {/* Renders Routing Component */}
                            <Routing />

                            {/* Renders Footer Component */}
                            <Footer cond={true} />

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default Home;