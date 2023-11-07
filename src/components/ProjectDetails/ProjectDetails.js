import React, { useState } from 'react';
import { useParams } from 'react-router';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import ReactCardFlip from 'react-card-flip';
import getTransitions from '../../utils/transitions';
import Routing from '../Routing/Routing';
import Footer from '../Footer/Footer';
import './ProjectDetails.css';

const projectsData = [
    {
        title: "Food Munch",
        desc: "An all-in-one restaurant app for seamless dining experiences.",
        src: "FoodMunch",
        about: "Food Munch is a restaurant app designed to provide an exceptional dining experience. Our goal is to make it easy and enjoyable for customers to explore a diverse menu, order fresh and delicious meals, and conveniently make payments. We've created a seamless journey from menu exploration to payment, ensuring your satisfaction at every step. Food Munch - your gateway to a world of culinary passion.",
        techDetails: [
            "Built a Responsive Website using the Bootstrap grid system",
            "Used Bootstrap display, d-flex, align, padding, margin, order for a given device or viewport",
            "Embedded modals and YouTube videos so that users can watch product videos directly on the webpage",
            "Used Bootstrap Navbar, hyperlinks for navigating across sections to enhance user experience"
        ],
        techUsed: [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        url: "https://syed-food-munch.vercel.app/",
        githubUrl: "https://github.com/Jiavuddin/food-munch"
    },
    {
        title: "Tourism",
        desc: "Your gateway to unforgettable travel experiences.",
        src: 'Tourism',
        about: "Welcome to Tourism, your gateway to unforgettable adventures. Discover dream destinations, from tranquil escapes to vibrant cities, and craft your ideal vacation effortlessly. We're committed to enhancing your travel experience with user-friendly tools and a world of resources. Join us on a journey of enriching exploration.",
        techDetails: [
            "Employed Bootstrap for creating a responsive and visually appealing design.",
            "Utilized Bootstrap Flex Box to establish a structured layout for content.",
            "Enhanced user engagement with Bootstrap Carousel for image displays.",
            "Leveraged an external CCBP script for efficient client-side routing and navigation.",
            "Crafted the static web page's foundation using HTML, CSS, and a touch of JavaScript to provide interactivity."
        ],
        techUsed: [
            "HTML",
            "CSS",
            "Bootstrap"
        ],
        url: "https://syed-tourism.vercel.app/",
        githubUrl: "https://github.com/Jiavuddin/syed-tourism"
    },
];

function ProjectDetails() {

    const { projectId } = useParams();

    const theme = useSelector(state => state.themeSlice.theme);

    const projectData = projectsData[parseInt(projectId)];

    const [flipped, setFlipped] = useState(false);

    return (
        <div className='pd-div'>

            <motion.h1 className='pd-h1 mt-2 mb-4' {...getTransitions(1)}>Project Details.</motion.h1>

            {!!projectData ? (

                <div>

                    <div className='mt-2 mb-3'>
                        <motion.a
                            href={projectData.url}
                            target='_blank'
                            rel="noreferrer"
                            className='pd-project-h1 pd-project-h1-link'
                            {...getTransitions(1.3)}
                        >
                            {projectData.title}
                        </motion.a>
                    </div>

                    <motion.p className={`pd-project-p ${theme ? '' : 'dark'} mb-4`} {...getTransitions(1.6)}>{projectData.desc}</motion.p>

                    <div className='pd-gif-card'>
                        <motion.img
                            alt={`${projectData.src} Website`}
                            src={`/assets/Projects/${projectData.src}/${projectData.src}.gif`}
                            className='pd-gif-img mb-4'
                            {...getTransitions(1.9)}
                        />
                    </div>

                    <ReactCardFlip isFlipped={flipped} flipDirection="horizontal" cardStyles={{ front: { transformStyle: 'flat' }, back: { transformStyle: 'flat' } }} flipSpeedBackToFront={1} flipSpeedFrontToBack={1}>

                        <div>

                            <motion.h1 className='pd-project-h1 mt-2 mb-3' {...getTransitions(2.2)}>About</motion.h1>

                            <motion.p className={`pd-project-p ${theme ? '' : 'dark'} mb-3`} {...getTransitions(2.2)}>{projectData.about}</motion.p>

                            <motion.p className={`pd-project-p ${theme ? '' : 'dark'} pd-project-flip-p mb-4`} {...getTransitions(2.2)}>
                                <span className='pd-project-flip-span' onClick={() => setFlipped(true)}>Technical Insights&ensp;{">>>"}</span>
                            </motion.p>

                        </div>

                        <div>

                            <motion.h1 className='pd-project-h1 mt-2 mb-3' {...getTransitions(2.2)}>Technical Insights</motion.h1>

                            <motion.ul className="pd-project-ul mb-3" {...getTransitions(2.2)}>
                                {projectData.techDetails.map((nerdPoint, index) => (
                                    <li key={`project-nerd-point-${index}`} className={theme ? '' : 'dark'}>{nerdPoint}</li>
                                ))}
                            </motion.ul>

                            <motion.p className={`pd-project-p ${theme ? '' : 'dark'} pd-project-flip-p mb-4`} {...getTransitions(2.2)}>
                                <span className='pd-project-flip-span' onClick={() => setFlipped(false)}>About&ensp;{">>>"}</span>
                            </motion.p>

                        </div>

                    </ReactCardFlip>

                    <motion.h1 className='pd-project-h1 mt-2 mb-3' {...getTransitions(2.2)}>Technologies</motion.h1>

                    <div className='pd-technologies-div mb-4'>

                        {projectData.techUsed.map(item => (
                            <motion.button
                                key={`project-details-btn-${item}`}
                                className={`pd-technology-btn ${theme ? '' : 'dark'}`}
                                {...getTransitions(2.2)}
                            >
                                {item}
                            </motion.button>
                        ))}

                    </div>

                    <div className='d-flex align-items-center mb-3'>

                        <motion.svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className={`pd-website-svg ${theme ? '' : 'dark'}`}
                            {...getTransitions(2.2)}
                        >
                            <path d="M13.144 8.171c-.035-.066.342-.102.409-.102.074.009-.196.452-.409.102zm-2.152-3.072l.108-.031c.064.055-.072.095-.051.136.086.155.021.248.008.332-.014.085-.104.048-.149.093-.053.066.258.075.262.085.011.033-.375.089-.304.171.096.136.824-.195.708-.176.225-.113.029-.125-.097-.19-.043-.215-.079-.547-.213-.68l.088-.102c-.206-.299-.36.362-.36.362zm13.008 6.901c0 6.627-5.373 12-12 12-6.628 0-12-5.373-12-12s5.372-12 12-12c6.627 0 12 5.373 12 12zm-8.31-5.371c-.006-.146-.19-.284-.382-.031-.135.174-.111.439-.184.557-.104.175.567.339.567.174.025-.277.732-.063.87-.025.248.069.643-.226.211-.381-.355-.13-.542-.269-.574-.523 0 0 .188-.176.106-.166-.218.027-.614.786-.614.395zm6.296 5.371c0-1.035-.177-2.08-.357-2.632-.058-.174-.189-.312-.359-.378-.256-.1-1.337.597-1.5.254-.107-.229-.324.146-.572.008-.12-.066-.454-.515-.605-.46-.309.111.474.964.688 1.076.201-.152.852-.465.992-.038.268.804-.737 1.685-1.251 2.149-.768.694-.624-.449-1.147-.852-.275-.211-.272-.66-.55-.815-.124-.07-.693-.725-.688-.813l-.017.166c-.094.071-.294-.268-.315-.321 0 .295.48.765.639 1.001.271.405.416.995.748 1.326.178.178.858.914 1.035.898.193-.017.803-.458.911-.433.644.152-1.516 3.205-1.721 3.583-.169.317.138 1.101.113 1.476-.029.433-.37.573-.693.809-.346.253-.265.745-.556.925-.517.318-.889 1.353-1.623 1.348-.216-.001-1.14.36-1.261.007-.094-.256-.22-.45-.353-.703-.13-.248-.015-.505-.173-.724-.109-.152-.475-.497-.508-.677-.002-.155.117-.626.28-.708.229-.117.044-.458.016-.656-.048-.354-.267-.646-.53-.851-.389-.299-.188-.537-.097-.964 0-.204-.124-.472-.398-.392-.564.164-.393-.44-.804-.413-.296.021-.538.209-.813.292-.346.104-.7-.082-1.042-.125-1.407-.178-1.866-1.786-1.499-2.946.037-.19-.114-.542-.048-.689.158-.352.48-.747.762-1.014.158-.15.361-.112.547-.229.287-.181.291-.553.572-.781.4-.325.946-.318 1.468-.388.278-.037 1.336-.266 1.503-.06 0 .038.191.604-.019.572.433.023 1.05.749 1.461.579.211-.088.134-.736.567-.423.262.188 1.436.272 1.68.069.15-.124.234-.93.052-1.021.116.115-.611.124-.679.098-.12-.044-.232.114-.425.025.116.055-.646-.354-.218-.667-.179.131-.346-.037-.539.107-.133.108.062.18-.128.274-.302.153-.53-.525-.644-.602-.116-.076-1.014-.706-.77-.295l.789.785c-.039.025-.207-.286-.207-.059.053-.135.02.579-.104.347-.055-.089.09-.139.006-.268 0-.085-.228-.168-.272-.226-.125-.155-.457-.497-.637-.579-.05-.023-.764.087-.824.11-.07.098-.13.201-.179.311-.148.055-.287.126-.419.214l-.157.353c-.068.061-.765.291-.769.3.029-.075-.487-.171-.453-.321.038-.165.213-.68.168-.868-.048-.197 1.074.284 1.146-.235.029-.225.046-.487-.313-.525.068.008.695-.246.799-.36.146-.168.481-.442.724-.442.284 0 .223-.413.354-.615.131.053-.07.376.087.507-.01-.103.445.057.489.033.104-.054.684-.022.594-.294-.1-.277.051-.195.181-.253-.022.009.34-.619.402-.413-.043-.212-.421.074-.553.063-.305-.024-.176-.52-.061-.665.089-.115-.243-.256-.247-.036-.006.329-.312.627-.241 1.064.108.659-.735-.159-.809-.114-.28.17-.509-.214-.364-.444.148-.235.505-.224.652-.476.104-.178.225-.385.385-.52.535-.449.683-.09 1.216-.041.521.048.176.124.104.324-.069.19.286.258.409.099.07-.092.229-.323.298-.494.089-.222.901-.197.334-.536-.374-.223-2.004-.672-3.096-.672-.236 0-.401.263-.581.412-.356.295-1.268.874-1.775.698-.519-.179-1.63.66-1.808.666-.065.004.004-.634.358-.681-.153.023 1.247-.707 1.209-.859-.046-.18-2.799.822-2.676 1.023.059.092.299.092-.016.294-.18.109-.372.801-.541.801-.505.221-.537-.435-1.099.409l-.894.36c-1.328 1.411-2.247 3.198-2.58 5.183-.013.079.334.226.379.28.112.134.112.712.167.901.138.478.479.744.74 1.179.154.259.41.914.329 1.186.108-.178 1.07.815 1.246 1.022.414.487.733 1.077.061 1.559-.217.156.33 1.129.048 1.368l-.361.093c-.356.219-.195.756.021.982 1.818 1.901 4.38 3.087 7.22 3.087 5.517 0 9.989-4.472 9.989-9.989zm-11.507-6.357c.125-.055.293-.053.311-.22.015-.148.044-.046.08-.1.035-.053-.067-.138-.11-.146-.064-.014-.108.069-.149.104l-.072.019-.068.087.008.048-.087.106c-.085.084.002.139.087.102z"></path>
                        </motion.svg>

                        <motion.h1 className='pd-project-h1 mb-0' {...getTransitions(2.2)}>Website</motion.h1>

                    </div>

                    <div className='mb-4'>
                        <motion.a
                            href={projectData.url}
                            target='_blank'
                            rel="noreferrer"
                            className={`pd-website-a ${theme ? '' : 'dark'} mb-4`}
                            {...getTransitions(2.2)}
                        >
                            {projectData.url}
                        </motion.a>
                    </div>

                    {!!projectData.projectCreds && (

                        <div>

                            <div className='d-flex align-items-center mb-3'>

                                <motion.i className="fa-solid fa-gears pd-icon" {...getTransitions(2.2)}></motion.i>

                                <motion.h1 className='pd-project-h1 mb-0' {...getTransitions(2.2)}>Login Credentials</motion.h1>

                            </div>

                            <div className='mb-4'>

                                <motion.p className={`pd-project-p ${theme ? '' : 'dark'} mb-3`} {...getTransitions(2.2)}>Username&emsp;:&emsp;{projectData.projectCreds.username}</motion.p>

                                <motion.p className={`pd-project-p ${theme ? '' : 'dark'} mb-3`} {...getTransitions(2.2)}>Password&emsp;&nbsp;:&emsp;{projectData.projectCreds.password}</motion.p>

                            </div>

                        </div>

                    )}

                    <div className='d-flex align-items-center mb-3'>

                        <motion.i className="pd-icon fa-brands fa-github" {...getTransitions(2.2)}></motion.i>

                        <motion.h1 className='pd-project-h1 mb-0' {...getTransitions(2.2)}>Github</motion.h1>

                    </div>

                    <div className='mb-5'>
                        <motion.a
                            href={projectData.githubUrl}
                            target='_blank'
                            rel="noreferrer"
                            className={`pd-website-a ${theme ? '' : 'dark'}`}
                            {...getTransitions(2.2)}
                        >
                            {projectData.githubUrl}
                        </motion.a>
                    </div>

                </div>
            ) : (
                <motion.h1 className='pd-no-data-h1 mt-2 mb-5' {...getTransitions(1.3)}>Project with this ID not found. Please check the ID or explore available projects.</motion.h1>
            )}

            <Routing />

            <Footer cond={true} />

            <div className='pt-5'></div>

        </div>
    );
}

export default ProjectDetails;