import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import './Loader.css';

function Loader() {

    // Access App Theme
    const theme = useSelector(state => state.themeSlice.theme);

    // Handles Loader Transition
    const [flag, setFlag] = useState(false);

    // Handles Hexagon drawing
    const [drawHexagon, setDrawHexagon] = useState(false);

    // Handles Loader Animation Timing
    useEffect(() => {

        const intervalId = setTimeout(() => {

            setDrawHexagon(true);

            setTimeout(() => {
                setFlag(true);
            }, 4000);

        }, 2000);

        return () => {

            clearInterval(intervalId);

            setFlag(false);

            setDrawHexagon(false);
        }

    }, []);

    return (
        <div className='d-flex flex-column justify-content-center align-items-center loader-div'>

            {/* Renders Loader Overlay Section */}
            <div className={`overlay ${flag ? 'transitioning' : ''} ${theme ? '' : 'dark'}`}>

                {/* Renders Loader page Section */}
                <div className={`page ${flag ? 'fade-out' : ''} ${theme ? '' : 'dark'}`}>

                    {/* Renders Hexagon */}
                    <div className={drawHexagon ? "hexagon-container" : ""}>
                        {drawHexagon ? (
                            <>
                                <svg className={`hexagon ${theme ? '' : 'dark'}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 115.47">
                                    <polygon points="50,2.8868 97.8868,29.8868 97.8868,85.5832 50,112.47 2.1132,85.5832 2.1132,29.8868" />
                                </svg>
                                <div className="text">S J</div>
                            </>
                        ) : null}
                    </div>

                    {/* Renders Name */}
                    <div className='w-100'>
                        {drawHexagon ? (
                            <h1 className='loader-h1'>Syed Jiavuddin</h1>
                        ) : null}
                    </div>

                </div>

            </div>

        </div>
    );
}

export default Loader;