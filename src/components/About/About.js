import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Collapse } from 'react-bootstrap';
import { motion } from 'framer-motion';
import getTransitions from '../../utils/transitions';
import Routing from '../Routing/Routing';
import Footer from '../Footer/Footer';
import './About.css';

const experienceAndEdu = {
    work: {
        napier: {
            logo: "Napier Logo.png",
            title: "Napier Healthcare Solutions",
            role: "Associate Software Engineer",
            duration: "Sep 2021 - Present",
            location: "Hyderabad, Telangana.",
            points: [
                "Demonstrated expertise in ReactJs frontend development at Napier Healthcare Solutions.",
                "Led the successful conversion of the HIS product from AngularJS to ReactJs, optimizing user experience and performance.",
                "Led critical upgrades for a government client project, aligning the HIS product with industry standards and client requirements.",
                "Developed numerous screens, showcasing design expertise and contributing to the usability and functionality of healthcare software solutions.",
                "Created efficient reusable components, aiding developers in seamless service integration and test case implementation, optimizing project efficiencyz.",
                "Swiftly resolved intricate issues, consistently delivering prompt and precise solutions to ensure the seamless operation of healthcare systems.",
                "Made substantial contributions to test case coverage, ensuring software robustness and reliability.",
                "Thrived in collaborative environments, fostering teamwork and shared project success.",
            ]
        }
    },
    education: {
        sathyabama: {
            logo: "Sathyabama logo.png",
            title: "Sathyabama Institute of science and technology",
            role: "Bachelor of Engineering",
            duration: "Jun 2016 - May 2020",
            location: "Chennai, Tamilnadu.",
            points: [
                "Graduated with a Bachelor's in Electronics and Communication Engineering (ECE) with a commendable overall CGPA of 7.02.",
                "Earned an online certification in Microprocessors and Microcontrollers through NPTEL, showcasing expertise in embedded systems.",
                "Successfully completed industrial automation and robotics training by the MSME Technology Development Centre, enhancing practical skills.",
                "Received a certificate of participation for actively engaging in a workshop on launch vehicle aerodynamics led by ISRO scientists, gaining insights into aerospace technology.",
                "Actively contributed as an active member of the Robotics Club, fostering a passion for automation and cutting-edge technology."
            ]
        }
    },
    courses: {
        nxtwave: {
            logo: "Nxtwave.svg",
            title: "Nxtwave",
            role: "Full Stack Developer Course (MERN)",
            duration: "Dec 2020 - Sep 2021",
            location: "Online Course.",
            points: [
                "Gained comprehensive skills in the MERN (MongoDB, Express.js, React, Node.js) stack, covering both frontend and backend development.",
                "Mastered the art of building static and responsive websites, utilizing HTML5, CSS3, Bootstrap, and Flexbox for efficient layout design.",
                "Achieved proficiency in creating responsive web designs using CSS Flexbox and Media Queries.",
                "Developed dynamic web applications with JavaScript, focusing on core concepts like DOM manipulation, event handling, and asynchronous programming.",
                "Enhanced JavaScript skills, including advanced topics like asynchronous programming, closures, and array manipulation.",
                "Acquired a strong foundation in Python programming, including data structures, loops, functions, and object-oriented programming (OOP).",
                "Learned efficient version control with Git, enabling collaborative coding and code management.",
                "Gained expertise in querying databases with SQL, data modeling, and utilizing SQL databases for various applications.",
                "Delved into Node.js, building server-side applications, creating CRUD APIs, implementing middleware, and securing APIs.",
                "Applied React.js knowledge hands-on by creating applications similar to LinkedIn, Netflix, and Amazon, showcasing proficiency in this popular frontend library."
            ]
        },
        mongoDb: {
            logo: "udemy logo.svg",
            logoDark: "udemy logo dark.svg",
            title: "Udemy",
            role: "MongoDB - The Complete Developer's Guide 2023",
            duration: "Mar 2023",
            location: "Online Course.",
            points: [
                "Achieved expertise in MongoDB, covering fundamental concepts and practical applications.",
                "Gained proficiency in Create, Read, Update, and Delete operations within MongoDB, essential for database management.",
                "Learned how to structure documents, define schemas, and establish relationships between data.",
                "Explored MongoDB using the MongoDB Compass tool, providing a visual representation of data.",
                "Mastered the art of optimizing database performance through the use of indexes.",
                "Acquired skills in working with geospatial data, enabling location-based queries and analysis.",
                "Understood and utilized MongoDB's powerful aggregation framework for data transformation.",
                "Learned MongoDB security practices to protect data and ensure compliance.",
                "Explored techniques for improving database performance, fault tolerance, and deployment strategies.",
                "Gained knowledge of MongoDB transactions, ensuring data consistency in multi-operation scenarios.",
                "Successfully transitioned from using the MongoDB shell to integrating MongoDB with programming languages through drivers.",
                "Explored MongoDB Stitch for serverless application development.",
                "Covered a wide range of MongoDB topics, from basics to advanced concepts, enabling robust database management."
            ]
        }
    }
};

function About() {

    const theme = useSelector(state => state.themeSlice.theme);

    const [collapsable, setCollapsable] = useState({
        work: false,
        education: false,
        courses: false
    });

    // Collapsable Handler
    const onClickCollapsable = (key) => {
        setCollapsable(prevState => ({
            ...prevState,
            [key]: !prevState[key]
        }));
    };

    return (
        <div className='about-div'>

            <motion.h1 className='about-h1 mt-2 mb-4' {...getTransitions(1)}>About Mé.</motion.h1>

            <motion.p className='about-p mb-4' {...getTransitions(1.3)}>
                I'm a dedicated Frontend Developer with over two years of hands-on experience in React.js. My web development journey began with intensive training, igniting my passion for crafting user-centric digital experiences. I excel at translating complex concepts into intuitive interfaces, continually pushing the boundaries of design and functionality.
                <br />
                <br />
                Beyond my professional life, I find inspiration in the world of entertainment. Whether engaged in intense BGMI battles, captivated by the immersive storytelling of anime series, or exploring the occasional movie, I'm a storyteller at heart. I also enjoy creating content that offers fellow BGMI enthusiasts a glimpse into my gaming adventures.
                <br />
                <br />
                I'm actively seeking collaborative, full-time, and freelance opportunities to apply my frontend development expertise. Let's join forces to create more engaging, user-friendly web experiences and enhance the digital landscape.
            </motion.p>

            <motion.h1 className='about-h1 mb-5' {...getTransitions(1.6)}>Tech Stack</motion.h1>

            <div className='d-flex flex-row justify-content-start align-items-center about-tech-stack-div mb-4'>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>HTML</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>CSS</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#6c19ff" d="M6.391,10.671c-0.085-2.448,1.822-4.706,4.401-4.706h26.42c2.578,0,4.486,2.258,4.401,4.706	c-0.082,2.352,0.024,5.398,0.791,7.882c0.769,2.492,2.066,4.067,4.19,4.269v2.295c-2.124,0.202-3.421,1.777-4.19,4.269	c-0.767,2.484-0.873,5.53-0.791,7.882c0.085,2.448-1.822,4.706-4.401,4.706h-26.42c-2.578,0-4.486-2.258-4.4-4.706	c0.082-2.352-0.025-5.398-0.791-7.882c-0.769-2.492-2.069-4.067-4.194-4.269v-2.295c2.124-0.202,3.425-1.777,4.194-4.269	C6.367,16.07,6.473,13.023,6.391,10.671z"></path><linearGradient id="Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1" x1="17.846" x2="27.078" y1="-147.541" y2="-163.153" gradientTransform="matrix(1 0 0 -1 0 -132)" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#fff"></stop><stop offset="1" stopColor="#f1e5fc"></stop></linearGradient><path fill="url(#Is-EGaxKcc0Cic9QMqyzGa_EzPCiQUqWWEa_gr1)" d="M25.042,34.016c4.366,0,6.997-2.138,6.997-5.664c0-2.665-1.877-4.595-4.665-4.9v-0.111	c2.048-0.333,3.655-2.235,3.655-4.359c0-3.026-2.389-4.997-6.03-4.997h-8.192v20.031H25.042z M19.994,16.525h4.238	c2.304,0,3.612,1.027,3.612,2.887c0,1.985-1.522,3.096-4.281,3.096h-3.57V16.525z M19.994,31.475v-6.594h4.21	c3.015,0,4.579,1.11,4.579,3.276c0,2.165-1.522,3.318-4.394,3.318H19.994z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>Bootstrap</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="none" stroke="#000001" strokeMiterlimit="10" strokeWidth="3.3" d="M23.783,22.352v9.819 c0,3.764-4.38,4.022-6.283,0.802"></path><path fill="none" stroke="#000001" strokeMiterlimit="10" strokeWidth="3.3" d="M34.69,25.343 c-1.739-2.727-5.674-2.345-5.84,0.558c-0.214,3.757,6.768,2.938,6.247,7.107c-0.365,2.92-4.874,3.858-7.193-0.065"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>Javascript</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 40 40" {...getTransitions(1.9)}>
                        <path fill="#98ccfd" d="M23.5,20c0,1.935-1.565,3.5-3.5,3.5s-3.5-1.565-3.5-3.5s1.565-3.5,3.5-3.5S23.5,18.065,23.5,20z"></path><path fill="#4788c7" d="M20,24c-2.206,0-4-1.794-4-4s1.794-4,4-4s4,1.794,4,4S22.206,24,20,24z M20,17c-1.654,0-3,1.346-3,3 s1.346,3,3,3s3-1.346,3-3S21.654,17,20,17z"></path><path fill="#98ccfd" d="M39.5,20c0-2.796-2.912-5.232-7.492-6.787c0.576-2.671,0.655-5.055,0.166-6.881 c-0.408-1.522-1.181-2.617-2.296-3.253c-0.671-0.382-1.438-0.577-2.279-0.577c-2.207,0-4.893,1.401-7.597,3.791 C17.296,3.902,14.609,2.5,12.4,2.5c-0.842,0-1.608,0.194-2.279,0.577C9.006,3.714,8.232,4.81,7.825,6.333 c-0.489,1.826-0.41,4.21,0.165,6.88C3.412,14.768,0.5,17.205,0.5,20s2.912,5.232,7.491,6.786c-0.576,2.67-0.655,5.054-0.165,6.88 c0.407,1.524,1.181,2.619,2.297,3.257c0.671,0.382,1.438,0.577,2.279,0.577c0.001,0,0,0,0.001,0c2.208,0,4.894-1.401,7.598-3.793 c2.704,2.389,5.39,3.789,7.597,3.79c0.001,0,0.001,0,0.001,0c0.842,0,1.608-0.194,2.28-0.577c1.114-0.636,1.887-1.731,2.294-3.253 c0.489-1.826,0.41-4.21-0.165-6.88C36.587,25.233,39.5,22.796,39.5,20z M28.888,4.817c0.634,0.362,1.09,1.046,1.354,2.033 c0.401,1.496,0.322,3.509-0.158,5.79c-1.596-0.417-3.343-0.734-5.208-0.938c-1.11-1.502-2.269-2.855-3.44-4.041 c2.397-2.087,4.598-3.158,6.163-3.158C28.089,4.503,28.522,4.609,28.888,4.817z M25.784,23.287 c-0.653,1.117-1.324,2.152-2.003,3.119c-1.205,0.105-2.467,0.162-3.782,0.162c-1.316,0-2.578-0.058-3.784-0.162 c-0.679-0.967-1.35-2.002-2.003-3.119C13.576,22.197,13,21.096,12.481,20c0.519-1.095,1.095-2.197,1.732-3.287 c0.653-1.117,1.325-2.152,2.004-3.12c1.205-0.105,2.468-0.162,3.783-0.162c1.315,0,2.577,0.057,3.781,0.162 c0.679,0.968,1.35,2.002,2.003,3.119c0.637,1.09,1.214,2.192,1.733,3.287C26.998,21.096,26.421,22.197,25.784,23.287z M28.558,22.392c0.41,1.036,0.756,2.052,1.041,3.035c-0.99,0.258-2.057,0.478-3.194,0.655c0.377-0.582,0.748-1.174,1.106-1.787 C27.881,23.663,28.226,23.028,28.558,22.392z M20,30.983c-0.729-0.738-1.467-1.556-2.205-2.47c0.724,0.034,1.457,0.055,2.205,0.055 c0.747,0,1.48-0.021,2.203-0.055C21.466,29.427,20.729,30.246,20,30.983z M13.593,26.082c-1.136-0.177-2.203-0.397-3.193-0.655 c0.285-0.983,0.63-1.998,1.04-3.034c0.332,0.635,0.677,1.271,1.046,1.903C12.844,24.908,13.216,25.5,13.593,26.082z M11.44,17.607 c-0.41-1.036-0.755-2.051-1.04-3.034c0.99-0.258,2.057-0.478,3.194-0.655c-0.377,0.582-0.749,1.174-1.107,1.786 C12.117,16.337,11.772,16.972,11.44,17.607z M20.001,9.018c0.729,0.737,1.466,1.555,2.202,2.469 c-0.723-0.034-1.456-0.055-2.203-0.055s-1.48,0.021-2.203,0.055C18.534,10.573,19.272,9.755,20.001,9.018z M27.511,15.704 c-0.358-0.613-0.729-1.205-1.106-1.787c1.137,0.177,2.204,0.397,3.194,0.655c-0.285,0.984-0.631,1.999-1.041,3.036 C28.226,16.973,27.881,16.337,27.511,15.704z M9.757,6.851c0.265-0.989,0.721-1.674,1.355-2.037C11.478,4.606,11.911,4.5,12.4,4.5 c1.567,0,3.768,1.072,6.166,3.161c-1.172,1.187-2.332,2.539-3.443,4.042c-1.865,0.204-3.612,0.522-5.208,0.939 C9.435,10.359,9.356,8.346,9.757,6.851z M2.5,20c0-1.729,2.231-3.566,5.983-4.857C8.935,16.708,9.538,18.342,10.28,20 c-0.742,1.658-1.345,3.292-1.797,4.857C4.731,23.566,2.5,21.729,2.5,20z M12.401,35.5c-0.49,0-0.924-0.106-1.288-0.313 c-0.636-0.363-1.092-1.048-1.356-2.037c-0.401-1.496-0.322-3.509,0.158-5.79c1.596,0.417,3.342,0.734,5.207,0.938 c1.111,1.503,2.271,2.856,3.444,4.043C16.168,34.429,13.967,35.5,12.401,35.5z M30.241,33.15c-0.265,0.987-0.72,1.671-1.354,2.033 c-0.365,0.208-0.799,0.314-1.289,0.314c-1.566,0-3.767-1.071-6.164-3.157c1.172-1.187,2.331-2.54,3.441-4.042 c1.865-0.204,3.611-0.522,5.207-0.938C30.563,29.641,30.642,31.654,30.241,33.15z M31.515,24.858 c-0.452-1.565-1.055-3.199-1.797-4.858c0.742-1.659,1.345-3.293,1.797-4.858C35.268,16.433,37.5,18.271,37.5,20 C37.5,21.729,35.268,23.567,31.515,24.858z"></path><path fill="#4788c7" d="M12.402,38c-0.93,0-1.78-0.216-2.528-0.642c-1.237-0.708-2.089-1.906-2.532-3.563 c-0.472-1.762-0.446-4.064,0.07-6.682C2.694,25.42,0,22.842,0,20s2.694-5.42,7.412-7.114c-0.517-2.617-0.542-4.92-0.07-6.682 C7.785,4.548,8.637,3.35,9.873,2.643c2.52-1.438,6.178-0.393,10.128,2.988c3.949-3.378,7.604-4.422,10.125-2.986 c1.235,0.705,2.087,1.902,2.531,3.558c0.472,1.763,0.446,4.066-0.071,6.683C37.305,14.579,40,17.158,40,20 c0,2.842-2.695,5.421-7.414,7.115c0.518,2.617,0.542,4.919,0.07,6.682c-0.443,1.656-1.294,2.853-2.529,3.558 C27.604,38.793,23.946,37.746,20,34.37C17.224,36.747,14.604,38,12.402,38z M12.4,3c-0.753,0-1.437,0.172-2.031,0.511 C9.373,4.081,8.68,5.074,8.309,6.462c-0.458,1.707-0.398,4.005,0.171,6.646l0.094,0.436l-0.422,0.144C3.606,15.23,1,17.531,1,20 s2.606,4.77,7.151,6.313l0.422,0.144l-0.094,0.436c-0.569,2.641-0.629,4.939-0.171,6.646c0.371,1.389,1.064,2.382,2.062,2.952 C10.965,36.828,11.648,37,12.401,37h0.001c2.012,0,4.592-1.302,7.267-3.667L20,33.04l0.331,0.293 c2.674,2.362,5.255,3.664,7.267,3.664c0.754,0,1.438-0.172,2.034-0.511c0.994-0.568,1.687-1.56,2.058-2.948 c0.458-1.707,0.398-4.004-0.171-6.645l-0.094-0.436l0.422-0.144C36.393,24.771,39,22.469,39,20c0-2.47-2.607-4.771-7.153-6.313 l-0.422-0.144l0.095-0.436c0.569-2.641,0.629-4.939,0.171-6.646c-0.372-1.389-1.065-2.38-2.061-2.948 c-0.595-0.339-1.278-0.511-2.031-0.511c-2.011,0-4.591,1.302-7.267,3.666l-0.331,0.293L19.67,6.668C16.994,4.303,14.413,3,12.4,3z M12.401,36c-0.577,0-1.094-0.127-1.535-0.379c-0.756-0.432-1.292-1.22-1.593-2.342c-0.408-1.527-0.355-3.61,0.152-6.022 l0.108-0.513l0.507,0.132c1.591,0.415,3.317,0.727,5.135,0.925l0.217,0.024L15.523,28c1.073,1.451,2.217,2.793,3.397,3.989 l0.374,0.379l-0.401,0.35C16.464,34.834,14.158,36,12.401,36z M10.303,27.973c-0.468,2.04-0.482,3.777-0.063,5.047 c0.278,0.841,0.605,1.438,1.121,1.732c1.294,0.739,3.813-0.237,6.473-2.446c-1.033-1.08-2.035-2.267-2.984-3.536 C13.257,28.588,11.73,28.32,10.303,27.973z M27.599,35.997c-1.757,0-4.063-1.165-6.491-3.28l-0.401-0.349l0.374-0.379 c1.185-1.202,2.327-2.543,3.394-3.988l0.13-0.176l0.218-0.024c1.819-0.199,3.548-0.51,5.137-0.925l0.508-0.132l0.107,0.513 c0.507,2.414,0.56,4.496,0.151,6.022c-0.301,1.121-0.836,1.908-1.589,2.338C28.693,35.87,28.176,35.997,27.599,35.997z M22.166,32.306c2.66,2.207,5.171,3.184,6.475,2.443c0.513-0.292,0.839-0.889,1.117-1.728c0.422-1.271,0.405-3.008-0.062-5.047 c-1.427,0.347-2.954,0.614-4.549,0.797C24.204,30.035,23.203,31.221,22.166,32.306z M20,31.695l-0.355-0.36 c-0.773-0.782-1.526-1.625-2.238-2.508l-0.7-0.867l1.112,0.053c1.431,0.068,2.931,0.068,4.361,0l1.111-0.053l-0.698,0.866 c-0.71,0.879-1.462,1.723-2.237,2.507L20,31.695z M18.898,29.054c0.359,0.417,0.728,0.822,1.102,1.212 c0.374-0.392,0.741-0.796,1.101-1.212C20.372,29.073,19.627,29.073,18.898,29.054z M20,27.068c-1.284,0-2.571-0.055-3.827-0.164 l-0.232-0.02l-0.134-0.191c-0.721-1.027-1.402-2.089-2.025-3.154c-0.619-1.061-1.209-2.179-1.753-3.325L11.927,20l0.102-0.214 c0.544-1.146,1.134-2.265,1.753-3.325c0.63-1.078,1.293-2.109,2.027-3.155l0.134-0.19l0.232-0.02c2.508-0.218,5.142-0.218,7.649,0 l0.232,0.02l0.134,0.191c0.736,1.05,1.399,2.082,2.025,3.154c0.625,1.07,1.215,2.188,1.753,3.326L28.069,20l-0.101,0.214 c-0.538,1.137-1.128,2.256-1.753,3.326c-0.626,1.072-1.289,2.104-2.025,3.154l-0.134,0.191l-0.232,0.02 C22.57,27.013,21.284,27.068,20,27.068z M16.491,25.928c2.309,0.187,4.71,0.187,7.015,0c0.667-0.961,1.272-1.91,1.847-2.893 c0.571-0.977,1.112-1.997,1.61-3.035c-0.498-1.038-1.039-2.058-1.61-3.035c-0.574-0.983-1.18-1.932-1.847-2.893 c-2.306-0.187-4.711-0.187-7.013,0c-0.665,0.958-1.271,1.906-1.849,2.894c-0.565,0.968-1.107,1.988-1.61,3.034 c0.503,1.045,1.044,2.065,1.61,3.035C15.215,24.01,15.836,24.982,16.491,25.928z M25.377,26.749l0.607-0.938 c0.373-0.576,0.74-1.162,1.095-1.767c0.366-0.626,0.707-1.255,1.035-1.883l0.506-0.968l0.402,1.016 c0.405,1.023,0.761,2.06,1.057,3.081l0.143,0.494l-0.497,0.129c-1.017,0.264-2.107,0.488-3.243,0.665L25.377,26.749z M28.479,23.6 c-0.174,0.316-0.353,0.633-0.537,0.949c-0.168,0.288-0.34,0.571-0.513,0.851c0.528-0.1,1.042-0.209,1.54-0.329 C28.819,24.581,28.655,24.09,28.479,23.6z M14.621,26.749l-1.105-0.172c-1.136-0.177-2.227-0.401-3.241-0.665l-0.497-0.129 l0.143-0.493c0.294-1.017,0.649-2.053,1.056-3.08l0.402-1.017l0.506,0.97c0.327,0.628,0.668,1.256,1.034,1.882 c0.354,0.605,0.722,1.191,1.095,1.767L14.621,26.749z M11.029,25.069c0.496,0.119,1.01,0.229,1.537,0.329 c-0.173-0.279-0.344-0.562-0.512-0.85c-0.185-0.315-0.362-0.631-0.536-0.948C11.342,24.092,11.179,24.582,11.029,25.069z M31.18,25.502l-0.146-0.505c-0.446-1.548-1.043-3.16-1.772-4.792L29.17,20l0.092-0.204c0.729-1.63,1.326-3.243,1.773-4.792 l0.146-0.505l0.498,0.171C35.637,16.031,38,18.024,38,20c0,1.977-2.363,3.969-6.322,5.331L31.18,25.502z M30.265,20 c0.63,1.427,1.159,2.84,1.579,4.209C34.993,23.039,37,21.412,37,20s-2.007-3.039-5.156-4.209 C31.424,17.162,30.894,18.574,30.265,20z M8.817,25.501L8.32,25.33C4.363,23.968,2,21.976,2,20s2.363-3.968,6.32-5.33l0.497-0.171 l0.146,0.505c0.449,1.554,1.045,3.167,1.772,4.792L10.828,20l-0.092,0.204c-0.728,1.625-1.323,3.238-1.772,4.792L8.817,25.501z M8.155,15.791C5.006,16.962,3,18.589,3,20s2.006,3.038,5.155,4.209c0.421-1.375,0.95-2.787,1.578-4.209 C9.105,18.578,8.576,17.166,8.155,15.791z M11.378,18.809l-0.402-1.017c-0.406-1.027-0.762-2.063-1.056-3.08l-0.143-0.493 l0.497-0.129c1.016-0.264,2.106-0.488,3.242-0.665l1.106-0.172l-0.61,0.939c-0.373,0.575-0.74,1.161-1.095,1.766 c-0.366,0.625-0.707,1.254-1.034,1.882L11.378,18.809z M11.029,14.931c0.149,0.487,0.313,0.978,0.489,1.469 c0.174-0.316,0.352-0.632,0.536-0.948c0.168-0.287,0.339-0.57,0.512-0.85C12.039,14.701,11.525,14.812,11.029,14.931z M28.62,18.809l-0.506-0.969c-0.328-0.629-0.669-1.257-1.035-1.883c-0.354-0.605-0.722-1.191-1.095-1.767l-0.607-0.938l1.104,0.172 c1.137,0.177,2.229,0.401,3.243,0.666l0.497,0.129l-0.143,0.494c-0.296,1.02-0.651,2.057-1.057,3.081L28.62,18.809z M27.43,14.601 c0.173,0.28,0.345,0.563,0.513,0.851c0.185,0.316,0.363,0.632,0.537,0.949c0.176-0.491,0.34-0.982,0.49-1.47 C28.473,14.811,27.958,14.701,27.43,14.601z M30.465,13.257l-0.507-0.132c-1.587-0.415-3.315-0.726-5.137-0.925l-0.218-0.024 l-0.13-0.176c-1.07-1.449-2.212-2.791-3.394-3.987l-0.374-0.379l0.401-0.35c3.229-2.811,6.243-3.919,8.027-2.901 c0.755,0.431,1.29,1.218,1.591,2.338c0.408,1.527,0.355,3.61-0.152,6.023L30.465,13.257z M25.147,11.229 c1.597,0.183,3.123,0.451,4.549,0.798c0.517-1.907,0.59-3.595,0.063-5.048c-0.302-0.83-0.604-1.435-1.119-1.729 c-1.298-0.74-3.812,0.236-6.473,2.444C23.2,8.775,24.201,9.962,25.147,11.229z M9.534,13.257l-0.108-0.513 c-0.508-2.413-0.561-4.495-0.152-6.022c0.301-1.123,0.836-1.911,1.591-2.341c1.789-1.02,4.801,0.091,8.03,2.904l0.402,0.35 l-0.375,0.379c-1.184,1.197-2.326,2.539-3.396,3.987l-0.13,0.176l-0.218,0.024c-1.818,0.199-3.547,0.51-5.137,0.925L9.534,13.257z M12.4,5c-0.401,0-0.751,0.083-1.041,0.249c-0.514,0.293-0.774,0.916-1.119,1.731c-0.54,1.275-0.449,3.011,0.063,5.047 c1.428-0.347,2.954-0.615,4.549-0.798c0.946-1.267,1.948-2.453,2.983-3.534C15.766,5.977,13.803,5,12.4,5z M16.709,12.039 l0.699-0.866c0.71-0.88,1.463-1.723,2.237-2.507l0.355-0.36l0.355,0.36c0.777,0.787,1.529,1.63,2.236,2.506l0.697,0.866 l-1.11-0.052c-1.43-0.067-2.93-0.067-4.359,0L16.709,12.039z M20,10.932c0.37,0,0.737,0.005,1.101,0.014 c-0.357-0.415-0.726-0.819-1.1-1.211c-0.374,0.391-0.742,0.795-1.101,1.211C19.264,10.937,19.63,10.932,20,10.932z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>ReactJs</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#7e57c2" d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"></path><path fill="#7e57c2" d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"></path><path fill="#7e57c2" d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>Redux</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#21a366" d="M24.007,45.419c-0.574,0-1.143-0.15-1.646-0.44l-5.24-3.103c-0.783-0.438-0.401-0.593-0.143-0.682	c1.044-0.365,1.255-0.448,2.369-1.081c0.117-0.067,0.27-0.043,0.39,0.028l4.026,2.389c0.145,0.079,0.352,0.079,0.486,0l15.697-9.061	c0.145-0.083,0.24-0.251,0.24-0.424V14.932c0-0.181-0.094-0.342-0.243-0.432L24.253,5.446c-0.145-0.086-0.338-0.086-0.483,0	L8.082,14.499c-0.152,0.086-0.249,0.255-0.249,0.428v18.114c0,0.173,0.094,0.338,0.244,0.42l4.299,2.483	c2.334,1.167,3.76-0.208,3.76-1.591V16.476c0-0.255,0.2-0.452,0.456-0.452h1.988c0.248,0,0.452,0.196,0.452,0.452v17.886	c0,3.112-1.697,4.9-4.648,4.9c-0.908,0-1.623,0-3.619-0.982l-4.118-2.373C5.629,35.317,5,34.216,5,33.042V14.928	c0-1.179,0.629-2.279,1.646-2.861L22.36,3.002c0.994-0.562,2.314-0.562,3.301,0l15.694,9.069C42.367,12.656,43,13.753,43,14.932	v18.114c0,1.175-0.633,2.271-1.646,2.861L25.66,44.971c-0.503,0.291-1.073,0.44-1.654,0.44"></path><path fill="#21a366" d="M28.856,32.937c-6.868,0-8.308-3.153-8.308-5.797c0-0.251,0.203-0.452,0.455-0.452h2.028	c0.224,0,0.413,0.163,0.448,0.384c0.306,2.066,1.218,3.108,5.371,3.108c3.308,0,4.715-0.747,4.715-2.502	c0-1.01-0.401-1.76-5.54-2.263c-4.299-0.424-6.955-1.371-6.955-4.809c0-3.167,2.672-5.053,7.147-5.053	c5.026,0,7.517,1.745,7.831,5.493c0.012,0.13-0.035,0.255-0.122,0.35c-0.086,0.09-0.208,0.145-0.334,0.145h-2.039	c-0.212,0-0.397-0.149-0.44-0.354c-0.491-2.173-1.678-2.868-4.904-2.868c-3.611,0-4.031,1.257-4.031,2.2	c0,1.143,0.495,1.477,5.367,2.122c4.825,0.64,7.116,1.544,7.116,4.935c0,3.418-2.853,5.379-7.827,5.379"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>NodeJs</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <linearGradient id="Xfeb2ANkiLrn2PxL5jJHLa_PZQVBAxaueDJ_gr1" x1="3.851" x2="34.471" y1="2.596" y2="33.216" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#6d7479"></stop><stop offset="1" stopColor="#323538"></stop></linearGradient><path fill="url(#Xfeb2ANkiLrn2PxL5jJHLa_PZQVBAxaueDJ_gr1)" d="M33.244,25l-9.121-12h1.18c0.84,0,1.631,0.392,2.139,1.061l7.059,9.287l7.059-9.287	C42.067,13.392,42.858,13,43.698,13h1.18l-9.121,12l9.547,12.56h-1.18c-0.84,0-1.631-0.392-2.139-1.061L34.5,26.652l-7.485,9.847	c-0.508,0.668-1.299,1.061-2.139,1.061h-1.18L33.244,25z M4,26v0.783c0,4.199,2.776,8.032,6.868,8.972	c4.439,1.02,8.49-1.247,10.228-4.842C21.366,30.355,21.928,30,22.547,30h1.028c-1.319,4.655-5.616,8.059-10.707,7.999	C6.777,37.927,2,32.694,2,26.142V26v-2l0-0.716c0-5.427,3.812-10.273,9.171-11.136C18.055,11.039,24,16.325,24,23v3H4z M4,24h18v-1	c0-5.648-5.202-10.08-11.076-8.768C6.804,15.153,4,19.002,4,23.71V24z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>Express</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#5d4037" d="M42,17.3C42,37.8,24,44,24,44S6,37.8,6,17.3c0-2.5,0.2-4.6,0.4-6.3c0.3-2.5,2-4.5,4.4-5.1 C13.9,5,18.8,4,24,4s10.1,1,13.3,1.9c2.4,0.6,4.1,2.7,4.4,5.1C41.8,12.7,42,14.9,42,17.3z"></path><path fill="#4caf50" d="M24,7c4.9,0,9.5,1,12.5,1.8c1.2,0.3,2,1.3,2.2,2.6c0.2,1.9,0.3,3.9,0.3,5.9c0,15.6-11.5,21.9-15,23.4 c-3.5-1.6-15-7.9-15-23.4c0-2,0.1-4,0.3-5.9c0.1-1.3,1-2.3,2.2-2.6C14.5,8,19.1,7,24,7 M24,4c-5.2,0-10.1,1-13.3,1.9 C8.4,6.5,6.6,8.6,6.4,11C6.2,12.7,6,14.9,6,17.3C6,37.8,24,44,24,44s18-6.2,18-26.7c0-2.5-0.2-4.6-0.4-6.3c-0.3-2.5-2-4.5-4.4-5.1 C34.1,5,29.2,4,24,4L24,4z"></path><path fill="#dcedc8" d="M23 28H25V36H23z"></path><path fill="#4caf50" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3l1,3c1.7-1.5,5-4.8,5-10C30,15,24,10,24,10z"></path><path fill="#81c784" d="M24,10c0,0-6,5-6,13c0,5.2,3.3,8.5,5,10l1-3V10z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>MongoDB</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <linearGradient id="eDMgMixeD6M6EYSYBuJ8ya_9nLaR5KFGjN0_gr1" x1="9.8" x2="11.081" y1="25.236" y2="36.899" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#058f92"></stop><stop offset=".5" stopColor="#038489"></stop><stop offset="1" stopColor="#026d71"></stop></linearGradient><path fill="url(#eDMgMixeD6M6EYSYBuJ8ya_9nLaR5KFGjN0_gr1)" d="M0.002,35.041h1.92v-7.085l2.667,6.057c0.329,0.755,0.779,1.022,1.662,1.022 s1.315-0.267,1.644-1.022l2.667-5.902v6.93h1.92v-7.258c0-0.697-0.277-1.035-0.849-1.209c-1.367-0.43-2.285-0.059-2.7,0.872 l-2.735,6.16l-2.649-6.16c-0.398-0.93-1.332-1.302-2.7-0.872C0.277,26.748,0,27.085,0,27.782v7.258H0.002z M13.441,29.281h1.92 v4.055c-0.015,0.2,0.064,0.731,0.99,0.745c0.472,0.008,2.821,0,2.85,0v-4.8h1.92c0.008,0,0,5.968,0,5.993 c0.01,1.472-1.828,1.662-2.673,1.687h-5.006v-0.96c0.01,0,4.787,0.001,4.801,0c1.088-0.115,0.959-0.714,0.959-0.896v-0.064H16.19 c-1.67-0.015-2.735-0.751-2.747-1.59C13.441,33.373,13.479,29.317,13.441,29.281z"></path><linearGradient id="eDMgMixeD6M6EYSYBuJ8yb_9nLaR5KFGjN0_gr2" x1="34.224" x2="35.101" y1="25.644" y2="35.217" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ff9c0f"></stop><stop offset=".813" stopColor="#d67e00"></stop></linearGradient><path fill="url(#eDMgMixeD6M6EYSYBuJ8yb_9nLaR5KFGjN0_gr2)" d="M22.081,35.041h4.807c0.63,0,1.242-0.132,1.728-0.36c0.81-0.372,1.144-0.875,1.144-1.536 v-1.368c0-1.476-1.83-1.536-2.88-1.536h-1.92c-0.755,0-0.87-0.456-0.96-0.96v-0.96c0.09-0.384,0.258-0.9,0.923-0.96 c0.773,0,4.836,0,4.836,0v-0.96h-4.566c-0.755,0-3.114,0.09-3.114,1.92v1.187c0,0.84,0.738,1.524,2.34,1.692 c0.18,0.012,0.36,0.024,0.539,0.024c0,0,1.866-0.036,1.92-0.024c1.08,0,0.96,0.84,0.96,0.96v0.96c0,0.132-0.03,0.96-0.971,0.96 c-0.072,0-4.789,0-4.789,0V35.041z M40.32,33.08c0,1.159,0.655,1.809,2.392,1.939c0.162,0.011,0.325,0.021,0.488,0.021H48v-0.96 h-4.435c-0.991,0-1.325-0.416-1.325-1.011v-6.669h-1.92V33.08z M30.704,33.121v-4.8c0-1.02,0.5-1.724,1.916-1.92h0.672h3.447h0.525 c1.416,0.196,2.08,0.899,2.08,1.92v4.782c0,0.827-0.215,1.271-0.916,1.559L39.916,36h-2.16l-1.07-0.96h-1.257l-2.136,0.012 c-0.309,0-0.635-0.043-0.993-0.141C31.226,34.618,30.704,34.054,30.704,33.121z M32.624,33.121c0.098,0.467,0.473,0.96,1.14,0.96 h1.864l-1.068-0.96h2.175l0.519,0.482c0,0,0.186-0.152,0.186-0.482c0-0.33-0.016-4.8-0.016-4.8c-0.098-0.434-0.538-0.96-1.188-0.96 h-2.471c-0.749,0-1.14,0.548-1.14,1.058L32.624,33.121L32.624,33.121z"></path><linearGradient id="eDMgMixeD6M6EYSYBuJ8yc_9nLaR5KFGjN0_gr3" x1="35.029" x2="40.355" y1="11.716" y2="26.75" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#058f92"></stop><stop offset=".5" stopColor="#038489"></stop><stop offset="1" stopColor="#026d71"></stop></linearGradient><path fill="url(#eDMgMixeD6M6EYSYBuJ8yc_9nLaR5KFGjN0_gr3)" d="M46.199,25.389c-1.031-0.028-1.818,0.068-2.491,0.351c-0.191,0.081-0.496,0.083-0.528,0.323 c0.105,0.11,0.121,0.275,0.205,0.41c0.16,0.26,0.432,0.609,0.674,0.791c0.265,0.2,0.538,0.414,0.821,0.587 c0.504,0.307,1.067,0.483,1.553,0.791c0.286,0.181,0.57,0.411,0.85,0.615c0.138,0.102,0.23,0.259,0.41,0.323 c0-0.01,0-0.019,0-0.029c-0.094-0.12-0.119-0.285-0.205-0.411c-0.127-0.127-0.254-0.254-0.381-0.381 c-0.372-0.494-0.846-0.929-1.348-1.289c-0.401-0.288-1.298-0.677-1.466-1.143c-0.01-0.01-0.019-0.019-0.03-0.03 c0.284-0.032,0.617-0.135,0.879-0.205c0.441-0.118,0.834-0.087,1.289-0.205c0.205-0.059,0.41-0.117,0.615-0.176 c0-0.039,0-0.078,0-0.117c-0.23-0.236-0.395-0.548-0.645-0.762c-0.657-0.559-1.373-1.117-2.11-1.583 c-0.409-0.258-0.915-0.426-1.348-0.645c-0.146-0.074-0.402-0.112-0.498-0.234c-0.228-0.29-0.351-0.659-0.527-0.996 c-0.368-0.708-0.73-1.482-1.055-2.227c-0.223-0.508-0.368-1.01-0.645-1.466c-1.331-2.188-2.764-3.509-4.982-4.807 c-0.472-0.276-1.041-0.385-1.642-0.528c-0.323-0.019-0.645-0.039-0.968-0.059c-0.197-0.083-0.401-0.323-0.587-0.44 c-0.735-0.465-2.621-1.475-3.165-0.147c-0.344,0.838,0.514,1.656,0.821,2.081c0.215,0.298,0.491,0.632,0.645,0.968 c0.101,0.22,0.119,0.441,0.205,0.674c0.213,0.574,0.55,1.228,0.826,1.759c0.139,0.269,0.293,0.551,0.469,0.791 c0.108,0.147,0.293,0.212,0.323,0.44c-0.181,0.253-0.191,0.646-0.293,0.968c-0.458,1.445-0.285,3.24,0.381,4.308 c0.204,0.328,0.686,1.032,1.348,0.762c0.579-0.236,0.45-0.967,0.615-1.612c0.037-0.146,0.014-0.253,0.088-0.351 c0,0.01,0,0.019,0,0.03c0.176,0.351,0.351,0.704,0.528,1.055c0.391,0.629,1.084,1.286,1.67,1.73 c0.304,0.23,0.544,0.628,0.938,0.762c0-0.01,0-0.019,0-0.03c-0.01,0-0.019,0-0.03,0c-0.076-0.119-0.196-0.168-0.293-0.264 c-0.229-0.225-0.485-0.504-0.674-0.762c-0.534-0.725-1.006-1.519-1.436-2.345c-0.205-0.395-0.384-0.829-0.557-1.231 c-0.067-0.155-0.066-0.389-0.205-0.469c-0.19,0.294-0.468,0.532-0.615,0.879c-0.234,0.555-0.265,1.233-0.351,1.934 c-0.052,0.018-0.029,0.006-0.059,0.029c-0.408-0.099-0.552-0.518-0.704-0.879c-0.384-0.912-0.455-2.38-0.117-3.429 c0.087-0.272,0.482-1.127,0.323-1.378c-0.076-0.251-0.328-0.396-0.468-0.587c-0.175-0.236-0.348-0.548-0.469-0.821 c-0.314-0.711-0.612-1.538-0.943-2.257c-0.158-0.344-0.425-0.691-0.645-0.996c-0.243-0.338-0.516-0.587-0.704-0.996 c-0.067-0.145-0.158-0.378-0.059-0.528c0.032-0.101,0.076-0.143,0.176-0.176c0.17-0.132,0.643,0.043,0.821,0.117 c0.47,0.195,0.862,0.381,1.26,0.645c0.191,0.127,0.384,0.372,0.615,0.44c0.088,0,0.176,0,0.264,0 c0.413,0.095,0.875,0.03,1.26,0.147c0.682,0.207,1.292,0.529,1.846,0.879c1.69,1.067,3.071,2.585,4.016,4.397 c0.152,0.292,0.218,0.57,0.351,0.879c0.27,0.624,0.611,1.266,0.879,1.876c0.268,0.609,0.53,1.223,0.909,1.73 c0.2,0.266,0.97,0.409,1.319,0.557c0.245,0.104,0.647,0.211,0.879,0.351c0.444,0.268,0.874,0.587,1.289,0.879 C45.528,24.803,46.167,25.124,46.199,25.389z"></path><path fill="#00796b" d="M33.098,14.223c-0.215-0.004-0.367,0.023-0.528,0.059c0,0.01,0,0.019,0,0.03c0.01,0,0.019,0,0.03,0 c0.103,0.21,0.283,0.347,0.41,0.528c0.098,0.205,0.195,0.41,0.293,0.615c0.01-0.01,0.019-0.019,0.029-0.029 c0.181-0.128,0.265-0.332,0.264-0.645c-0.073-0.077-0.084-0.173-0.147-0.264C33.365,14.394,33.203,14.325,33.098,14.223z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>MySQL</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>Python</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#F4511E" d="M42.2,22.1L25.9,5.8C25.4,5.3,24.7,5,24,5c0,0,0,0,0,0c-0.7,0-1.4,0.3-1.9,0.8l-3.5,3.5l4.1,4.1c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3c0,0.5-0.1,0.9-0.3,1.3l4,4c0.4-0.2,0.8-0.3,1.3-0.3c1.7,0,3,1.3,3,3s-1.3,3-3,3c-1.7,0-3-1.3-3-3c0-0.5,0.1-0.9,0.3-1.3l-4-4c-0.1,0-0.2,0.1-0.3,0.1v10.4c1.2,0.4,2,1.5,2,2.8c0,1.7-1.3,3-3,3s-3-1.3-3-3c0-1.3,0.8-2.4,2-2.8V18.8c-1.2-0.4-2-1.5-2-2.8c0-0.5,0.1-0.9,0.3-1.3l-4.1-4.1L5.8,22.1C5.3,22.6,5,23.3,5,24c0,0.7,0.3,1.4,0.8,1.9l16.3,16.3c0,0,0,0,0,0c0.5,0.5,1.2,0.8,1.9,0.8s1.4-0.3,1.9-0.8l16.3-16.3c0.5-0.5,0.8-1.2,0.8-1.9C43,23.3,42.7,22.6,42.2,22.1z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>Git</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <path fill="#e53935" d="M24 43L16 20 32 20z"></path><path fill="#ff7043" d="M24 43L42 20 32 20z"></path><path fill="#e53935" d="M37 5L42 20 32 20z"></path><path fill="#ffa726" d="M24 43L42 20 45 28z"></path><path fill="#ff7043" d="M24 43L6 20 16 20z"></path><path fill="#e53935" d="M11 5L6 20 16 20z"></path><path fill="#ffa726" d="M24 43L6 20 3 28z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>GitLab</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 30 30" {...getTransitions(1.9)}>
                        <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>Github</motion.span>

                </div>

                <div className='d-flex flex-column justify-content-start align-items-center about-skill-div'>

                    <motion.svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100" height="100" viewBox="0 0 48 48" {...getTransitions(1.9)}>
                        <linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1" x1="37.8" x2="37.8" y1="43.37" y2="7.42" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#29b6f6"></stop><stop offset="1" stopColor="#13b2f6"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sa_0OQR1FYCuA9f_gr1)" d="M34.176,4.249c0.188,0.092,5.688,2.716,8.374,3.998C43.437,8.67,44,9.564,44,10.546v26.86	c0,0.981-0.559,1.874-1.443,2.299c-2.548,1.228-7.611,3.666-7.948,3.826C34.361,43.649,33.709,44,33.181,44	c-0.678,0-1.133-0.316-1.58-0.73L34,35.711V5.715l-2.254-1.135C32.228,4.109,32.896,4,33.291,4C33.653,4,33.948,4.138,34.176,4.249z"></path><linearGradient id="HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2" x1="6.085" x2="34.793" y1="34.801" y2="7.173" gradientUnits="userSpaceOnUse"><stop offset=".115" stopColor="#0076bb"></stop><stop offset=".257" stopColor="#0069b0"></stop><stop offset=".28" stopColor="#0069b0"></stop><stop offset=".424" stopColor="#0069b0"></stop><stop offset=".491" stopColor="#0072b7"></stop><stop offset=".577" stopColor="#0076bb"></stop><stop offset=".795" stopColor="#0076bb"></stop><stop offset="1" stopColor="#006eb9"></stop></linearGradient><path fill="url(#HjBUFHyNtcsDcBgnZBZ2Sb_0OQR1FYCuA9f_gr2)" d="M9,33.896l25-19.023V5.83c0-1.299-1.662-1.808-2.337-1.184	C31.008,5.25,4.658,29.239,4.658,29.239c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574	C7.304,34.37,8.271,34.43,9,33.896z"></path><path fill="#0288d1" d="M9,14.104l25,19.054v8.771c0,1.198-1.42,2.193-2.399,1.341L4.658,18.761	c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"></path>
                    </motion.svg>

                    <motion.span {...getTransitions(1.9)}>VSC</motion.span>

                </div>

            </div>

            <motion.h1 className='about-h1 mb-4' {...getTransitions(2.2)}>Experience and Education</motion.h1>

            <div className='mb-5'>

                {Object.keys(experienceAndEdu).map(item => {

                    return (

                        <div key={item}>

                            <motion.div className='about-collapsable-div' onClick={() => onClickCollapsable(item)} {...getTransitions(2.2)}>

                                <h1>{item[0].toUpperCase() + item.slice(1)}</h1>

                                {collapsable[item] ? (
                                    <i className="fa-solid fa-minus"></i>
                                ) : (
                                    <i className="fa-solid fa-plus"></i>
                                )}

                            </motion.div>

                            <Collapse in={collapsable[item]}>

                                <div>

                                    {Object.keys(experienceAndEdu[item]).map(subItem => {

                                        const dataObj = experienceAndEdu[item][subItem];

                                        return (

                                            <div key={item + subItem} className='about-details-div'>

                                                <div className="about-card-div">

                                                    <img
                                                        alt='napier-logo'
                                                        src={`/assets/About/${theme ? dataObj?.['logo'] : dataObj?.['logoDark'] ?? dataObj?.['logo']}`}
                                                        className={`about-img ${subItem === "sathyabama" ? 'about-edu-img' : ''} mb-3 mb-md-0`}
                                                    />

                                                    <div className='about-card-company-div'>

                                                        <div className='mt-md-2'>

                                                            <h1 className='about-card-h1 mb-1'>{dataObj?.['title']}</h1>

                                                            <p className='about-card-p mb-1'>{dataObj?.['role']}</p>

                                                        </div>

                                                        <div className='mt-md-2 me-md-2'>

                                                            <p className='about-card-p about-text-end mb-1'>{dataObj?.['duration']}</p>

                                                            <p className='about-card-p mb-1'>{dataObj?.['location']}</p>

                                                        </div>


                                                    </div>

                                                    <ul className='about-card-ul mt-2'>
                                                        {dataObj?.['points'].map((liItem, index) => (
                                                            <li key={`${item}-${subItem}-li-${index}`}>{liItem}</li>
                                                        ))}
                                                    </ul>

                                                </div>

                                            </div>

                                        );

                                    })}

                                </div>

                            </Collapse>

                        </div>

                    );

                })}

            </div>

            <Routing />

            <Footer cond={true} />

            <div className='pt-1 pt-md-5'></div>

        </div>
    );
}

export default About;