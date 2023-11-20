import React from "react";
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import getTransitions from "../../utils/transitions";
import './Offline.css';

function Offline({ setIsOnline }) {

    // Access Theme from the store
    const theme = useSelector(state => state.themeSlice.theme);

    // Handles Refresh of User internet
    const handleRefresh = () => {
        setIsOnline(window.navigator.onLine);
    };

    return (
        <div className='offline-div'>

            {/* Renders Offline Image */}
            <motion.img
                alt='offline'
                src='/assets/Offline/Offline.png'
                className='mb-3'
                {...getTransitions(1)}
            />

            {/* Renders Offline Message */}
            <motion.p {...getTransitions(1.3)}>Uh oh! It seems you're offline.</motion.p>

            {/* Renders Internet Connectivity check Suggestion */}
            <motion.p className="mb-4" {...getTransitions(1.6)}>Please check your internet connection and try again.</motion.p>

            {/* Renders Refresh Button */}
            <motion.button
                type="button"
                className={`${theme ? '' : 'dark'}`}
                onClick={handleRefresh}
                {...getTransitions(1.9)}
            >
                Refresh
            </motion.button>

        </div>
    );
}

export default Offline;