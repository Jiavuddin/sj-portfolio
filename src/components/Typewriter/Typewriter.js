import React from 'react';
import Typewriter from "typewriter-effect";
import './Typewriter.css';

// Renders TypeWriter
function TypeWriter() {
    return (
        <Typewriter
            options={{
                strings: [
                    "React Js Developer",
                    "Front End Developer",
                    "MERN Stack Developer",
                    "Full Stack Developer"
                ],
                autoStart: true,
                loop: true,
                deleteSpeed: 50,
            }}
        />
    );
}

export default TypeWriter;