import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import routingPaths from "./utils/constants/routingConstants";
import { changeTheme } from "./utils/StoreSetup/themeSlice";
import Offline from "./components/Offline/Offline";
import Loader from "./components/Loader/Loader";
import Navbar from './components/Navbar/Navbar';
import MobileNavbar from "./components/MobileNavbar/MobileNavbar";
import Home from "./components/Home/Home";
import About from './components/About/About';
import Projects from "./components/Projects/Projects";
import ProjectDetails from "./components/ProjectDetails/ProjectDetails";
import Contact from './components/Contact/Contact';
import Resume from "./components/Resume/Resume";
import Footer from "./components/Footer/Footer";
import './App.css';

function App() {

    // Access Location Details
    const location = useLocation();

    // Access Dispatch
    const dispatch = useDispatch();

    // Access Theme
    const theme = useSelector((state) => state.themeSlice.theme);

    // Handles User is Online
    const [isOnline, setIsOnline] = useState(window.navigator.onLine);

    // Handles Loader
    const [loader, setLoader] = useState(true);

    // Handles Width
    const [width, setWidth] = useState(() => window.innerWidth);

    // Handles Screen
    const scrollContainerRef = useRef();

    // Handles the user internet availability 
    useEffect(() => {

        const handleOnlineStatus = () => {

            setIsOnline(window.navigator.onLine);

            if (window.navigator.onLine) {

                setLoader(true);

                setTimeout(() => {
                    setLoader(false);
                }, 8000);
            }
            else {
                setLoader(false);
            }
        };

        window.addEventListener('online', handleOnlineStatus);
        window.addEventListener('offline', handleOnlineStatus);

        return () => {
            window.removeEventListener('online', handleOnlineStatus);
            window.removeEventListener('offline', handleOnlineStatus);
        };
    }, []);

    // Handles the system theme
    useEffect(() => {

        const lightMode = window.matchMedia('(prefers-color-scheme: light)');

        if (sessionStorage.getItem('Theme') === null) {
            sessionStorage.setItem('Theme', lightMode.matches);
        }

        const setTheme = (e) => {
            sessionStorage.setItem('Theme', e.matches);

            dispatch(changeTheme(e.matches));
        };

        lightMode.addEventListener('change', setTheme);

        return () => {
            lightMode.removeEventListener('change', setTheme);
        };

    }, [dispatch]);

    // Handles the app loader
    useEffect(() => {

        setLoader(true);

        const timeout = setTimeout(() => {
            setLoader(false);
        }, 8000);

        return () => {

            clearTimeout(timeout);

            setLoader(false);
        };

    }, [dispatch]);

    // Handles Window resizing
    useEffect(() => {

        const updateOrientation = () => {
            if (window.innerWidth !== width) {
                setWidth(window.innerWidth);
            }
        };

        // Resize event listener
        window.addEventListener('resize', updateOrientation);

        // Cleanup for the Resize event listener
        return () => {
            window.removeEventListener('resize', updateOrientation);
        };
    }, [width]);

    // Resets Scrollbar
    useEffect(() => {
        scrollContainerRef.current.scrollTo(0, 0);
    }, [location.pathname]);

    return (
        <div ref={scrollContainerRef} className={`app ${theme ? '' : 'dark'} ${(!isOnline || (location.pathname === routingPaths.mobileNavMenu) || loader) ? 'mobile-nav-app' : ''}`}>

            {/* Renders User offline Page */}
            {!isOnline ? (
                <Offline setIsOnline={setIsOnline} />
            ) : (
                // Renders User Online Page
                <>

                    {/* Renders Loader */}
                    {loader ? (
                        <Loader />
                    ) : (

                        <>

                            {/* Renders Navbar */}
                            {location.pathname !== routingPaths.mobileNavMenu && (
                                <Navbar />
                            )}

                            <Routes>

                                {/* Renders Home Page */}
                                <Route
                                    exact
                                    path={routingPaths.home}
                                    element={
                                        <Home />
                                    }
                                />

                                {/* Renders Mobile Navbar Page */}
                                <Route
                                    exact
                                    path={routingPaths.mobileNavMenu}
                                    element={
                                        <MobileNavbar />
                                    }
                                />

                                {/* Renders About Me Page */}
                                <Route
                                    exact
                                    path={routingPaths.about}
                                    element={
                                        <About />
                                    }
                                />

                                {/* Renders Projects Page */}
                                <Route
                                    exact
                                    path={routingPaths.projects}
                                    element={
                                        <Projects />
                                    }
                                />

                                {/* Renders Project Details Page */}
                                <Route
                                    exact
                                    path={routingPaths.projectDetails}
                                    element={<ProjectDetails />}
                                />

                                {/* Renders Contact Page */}
                                <Route
                                    exact
                                    path={routingPaths.contact}
                                    element={
                                        <Contact />
                                    }
                                />

                                {/* Renders Resume Page */}
                                <Route
                                    exact
                                    path={routingPaths.resume}
                                    element={
                                        <Resume />
                                    }
                                />

                                {/* Handles Fallback Navigation */}
                                <Route
                                    exact
                                    path="*"
                                    element={
                                        <Navigate to={routingPaths.home} replace />
                                    }
                                />

                            </Routes>

                            {/* Renders Footer */}
                            {(width <= 767 && location.pathname !== routingPaths.mobileNavMenu) && (
                                <Footer cond={false} />
                            )}

                        </>

                    )}

                </>
            )}

        </div >
    );
}

export default App;