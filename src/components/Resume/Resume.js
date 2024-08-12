import React from "react";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import getTransitions from "../../utils/transitions";
import routingPaths from "../../utils/constants/routingConstants";
import Routing from "../Routing/Routing";
import Footer from "../Footer/Footer";
import "./Resume.css";

function Resume() {
  // Access Navigation Object
  const navigate = useNavigate();

  // Access theme from store
  const theme = useSelector((state) => state.themeSlice.theme);

  return (
    <div className="d-flex flex-column justify-content-start align-items-start resume-div pt-2">
      <motion.h1 className="resume-h1 mb-4" {...getTransitions(1)}>
        Resumé.
      </motion.h1>

      <motion.p
        className={`resume-p ${theme ? "" : "dark"} mb-4`}
        {...getTransitions(1.3)}
      >
        Reach out to me via my&nbsp;
        {/* Navigates to Contact Page */}
        <span onClick={() => navigate(routingPaths.contact)}>Contact Page</span>
        &nbsp;and&nbsp;
        {/* Navigates to Resume View Page */}
        <span
          onClick={() =>
            window.open(
              "https://drive.google.com/file/d/1otKRP0pZ95v0kaRlJH-ac7KygVoCLofI/view?usp=sharing"
            )
          }
        >
          view
        </span>
        &nbsp;or&nbsp;
        {/* Downloads the Resume */}
        <a href="/assets/Resume/Front End Developer.pdf" download>
          download
        </a>
        &nbsp;my resume.
      </motion.p>

      {/* Renders Resume */}
      <motion.img
        alt="Resume"
        className={`resume-img ${theme ? "" : "dark"} mb-4`}
        src="/assets/Resume/Front End Developer.png"
        {...getTransitions(1.6)}
      />

      {/* Renders Routing Element */}
      <Routing />

      {/* Renders Footer */}
      <Footer cond={true} />

      {/* Maintains Spacing below the screen */}
      {window.innerWidth >= 768 && <div className="resume-space-div"></div>}
    </div>
  );
}

export default Resume;
