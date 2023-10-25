import React from 'react';
import Typewriter from "typewriter-effect";
import './Typewriter.css';

function TypeWriter() {
  return (
    <Typewriter
      options={{
        strings: [
          "React Js Developer",
          "Front End Developer",
          "Full Stack Developer",
          "MERN Stack Developer",
          "Content Creator"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default TypeWriter;