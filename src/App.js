import React, { useState, useRef, useEffect } from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import routingPaths from "./utils/constants/routingConstants";
import { changeTheme } from "./utils/StoreSetup/themeSlice";
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

    const location = useLocation();

    const dispatch = useDispatch();

    const theme = useSelector((state) => state.themeSlice.theme);

    const [loader, setLoader] = useState(true);

    const [width, setWidth] = useState(() => window.innerWidth);

    const scrollContainerRef = useRef();

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
        <div ref={scrollContainerRef} className={`app ${theme ? '' : 'dark'} ${(location.pathname === routingPaths.mobileNavMenu || loader) ? 'mobile-nav-app' : ''}`}>

            {loader ? (
                <Loader />
            ) : (

                <>

                    {location.pathname !== routingPaths.mobileNavMenu && (
                        <Navbar />
                    )}

                    <Routes>

                        <Route
                            exact
                            path={routingPaths.home}
                            element={
                                <Home />
                            }
                        />

                        <Route
                            exact
                            path={routingPaths.mobileNavMenu}
                            element={
                                <MobileNavbar />
                            }
                        />

                        <Route
                            exact
                            path={routingPaths.about}
                            element={
                                <About />
                            }
                        />

                        <Route
                            exact
                            path={routingPaths.projects}
                            element={
                                <Projects />
                            }
                        />

                        <Route
                            exact
                            path={routingPaths.projectDetails}
                            element={<ProjectDetails />}
                        />

                        <Route
                            exact
                            path={routingPaths.contact}
                            element={
                                <Contact />
                            }
                        />

                        <Route
                            exact
                            path={routingPaths.resume}
                            element={
                                <Resume />
                            }
                        />

                        <Route
                            exact
                            path="*"
                            element={
                                <Navigate to={routingPaths.home} replace />
                            }
                        />

                    </Routes>

                    {(width <= 767 && location.pathname !== routingPaths.mobileNavMenu) && (
                        <Footer cond={false} />
                    )}

                </>

            )}

        </div>
    );
}

export default App;