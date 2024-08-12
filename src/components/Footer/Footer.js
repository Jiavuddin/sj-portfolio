import React from "react";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";
import CIcon from "@coreui/icons-react";
import { cibLeetcode } from "@coreui/icons";
import getTransitions from "../../utils/transitions";
import routingPaths from "../../utils/constants/routingConstants";
import "./Footer.css";

function Footer({ cond }) {
  // Access History Object
  const navigate = useNavigate();

  return (
    <div className={cond ? "footer-medium-div" : "footer-div"}>
      {/* Renders Linkedin Icon */}
      <motion.i
        className="fa-brands fa-linkedin-in"
        onClick={() =>
          window.open("https://www.linkedin.com/in/jiavuddin-syed/")
        }
        {...getTransitions(2.2)}
      ></motion.i>

      {/* Renders Github Icon */}
      <motion.i
        className="fa-brands fa-github"
        onClick={() => window.open("https://github.com/Jiavuddin")}
        {...getTransitions(2.2)}
      ></motion.i>

      {/* Renders Leetcode Icon */}
      <motion.span {...getTransitions(2.2)}>
        <CIcon
          className={cond ? "footer-medium-svg" : "footer-svg"}
          icon={cibLeetcode}
          onClick={() => window.open("https://leetcode.com/SyedJiavuddin/")}
        />
      </motion.span>

      {/* Renders Gitlab Icon */}
      <motion.i
        className="fa-brands fa-gitlab"
        onClick={() => window.open("https://gitlab.com/syed.jiavuddin99")}
        {...getTransitions(2.2)}
      ></motion.i>

      {/* Renders Youtube Icon */}
      <motion.i
        className="fa-brands fa-youtube"
        onClick={() => window.open("https://www.youtube.com/@JoyBoy6823")}
        {...getTransitions(2.2)}
      ></motion.i>

      {/* Renders Resume Icon */}
      <motion.i
        className="fa-regular fa-file"
        onClick={() => navigate(routingPaths.resume)}
        {...getTransitions(2.2)}
      ></motion.i>
    </div>
  );
}

export default Footer;
