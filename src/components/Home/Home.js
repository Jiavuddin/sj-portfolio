import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import getTransitions from '../../utils/transitions';
import TypeWriter from '../Typewriter/Typewriter';
import Routing from '../Routing/Routing';
import Footer from '../Footer/Footer';
import './Home.css';

function Home() {

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

                            <motion.img
                                alt="Home Logo"
                                src='assets/Home Image/home logo.png'
                                className='home-img'
                                srcSet="assets/Home Image/home logo.png 280w,
                                    assets/Home Image/home logo.png 800w,
                                    assets/Home Image/home logo.png 1200w,
                                    assets/Home Image/home logo.png 1800w"
                                sizes="(max-width: 600px) 280px,
                                    (max-width: 1200px) 800px,
                                    (max-width: 1800px) 1200px,
                                    1800px"
                                width="800"
                                height="600"
                                {...getTransitions(1)}
                            />

                        </div>

                    </Col>

                    <Col xs={12} md={isPortrait ? 12 : 7}>

                        <div className='d-flex flex-column justify-content-start justify-content-md-center align-items-start h-100'>

                            <motion.h1 className='home-greetings-h1' {...getTransitions(1)}>
                                Hello
                                <span className='home-greetings-wave'>👋</span>
                            </motion.h1>

                            <div>
                                <motion.h1 data-text="I'M SYED JIAVUDDIN" className='home-name-h1' {...getTransitions(1.3)}>
                                    <mark className="mark">I'M SYED JIAVUDDIN</mark>
                                </motion.h1>
                            </div>

                            <motion.span className='home-typewriter-span' {...getTransitions(1.6)}>
                                <TypeWriter />
                            </motion.span>

                            <Routing />

                            <Footer cond={true} />

                        </div>

                    </Col>

                </Row>

            </Container>

        </div>
    );
};

export default Home;