import React, { useState, useRef } from "react";
import { useSelector } from "react-redux";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import axios from "axios";
import getTransitions from "../../utils/transitions";
import Routing from "../Routing/Routing";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";
import "./Contact.css";

function Contact() {
  // Access App Theme
  const theme = useSelector((state) => state.themeSlice.theme);

  // Handles User Contact Details
  const [data, setdata] = useState({
    userName: "",
    email: "",
    message: "",
  });

  // Handles Contact Form
  const form = useRef();

  // Handles Notification
  const notification = useRef(null);

  // Contact Input's Change Handler
  const onInputChange = (e) => {
    setdata({ ...data, [e.target.name]: e.target.value });
  };

  // Form Submit Handler
  const onFormSubmit = (e) => {
    e.preventDefault();

    // Fetches Valid Email Conformation
    axios({
      method: "get",
      url: `https://api.zerobounce.net/v2/validate?api_key=8fad08bdf271426d96d7e870df41d60f&email=${data.email}&ip_address=127.0.0.1`,
    })
      .then((res) => {
        const status = res?.["data"]?.["status"];

        if (status === "invalid") {
          // Handles when entered invalid Email
          notification.current?.("Please enter a valid Email!");
        } else {
          // contact Service
          emailjs
            .sendForm(
              "service_115gbis",
              "template_g27bwmi",
              form.current,
              "f4zrte3jDpvAWBo3h"
            )
            .then((res) => {
              // On Successfully contacting
              notification.current?.(
                "Thanks for contacting me! I'll respond within 24 hours."
              );
            })
            .catch((error) => {
              // Faced Issue while contacting
              notification.current?.(
                "Service currently unavailable. Please try again later. Thank you."
              );
            });

          e.target.reset();

          // Resets Contact Details
          setdata({
            userName: "",
            email: "",
            message: "",
          });
        }
      })
      .catch((err) => {
        // Faced Issue while validating Email
        notification.current?.(
          "Service currently unavailable. Please try again later. Thank you."
        );
      });
  };

  return (
    <div className="contact-div">
      {/* Renders Contact Heading */}
      <motion.h1 className="contact-h1 mt-2 mb-4" {...getTransitions(1)}>
        Contact.
      </motion.h1>

      {/* Renders Contact mail */}
      <motion.p
        className={`contact-p ${theme ? "" : "dark"} mb-4`}
        {...getTransitions(1.3)}
      >
        Get in touch or shoot me an email directly on &nbsp;
        <a href="mailto:syed.jiavuddin99@gmail.com">
          syed.jiavuddin99@gmail.com
        </a>
        &nbsp;.
      </motion.p>

      {/* Renders Contact Form */}
      <form ref={form} className="contact-form" onSubmit={onFormSubmit}>
        {/* Renders UserName Input */}
        <motion.input
          type="text"
          id="fullname"
          name="userName"
          placeholder="Name"
          className={`contact-input ${theme ? "" : "dark"} mb-4`}
          onChange={onInputChange}
          required
          {...getTransitions(1.6)}
        />

        {/* Renders Email Input */}
        <motion.input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          className={`contact-input ${theme ? "" : "dark"} mb-4`}
          onChange={onInputChange}
          data-nb
          required
          {...getTransitions(1.9)}
        />

        {/* Render Contact Message Input */}
        <motion.textarea
          id="message"
          name="message"
          placeholder="Message"
          className={`contact-textarea ${theme ? "" : "dark"} mb-4`}
          onChange={onInputChange}
          required
          {...getTransitions(2.2)}
        ></motion.textarea>

        {/* Renders Contact */}
        <motion.button
          type="submit"
          className={`contact-button ${theme ? "" : "dark"} mb-4`}
          {...getTransitions(2.2)}
        >
          Send Message
        </motion.button>
      </form>

      {/* Renders Routing Component */}
      <Routing />

      {/* Renders Footer Component */}
      <Footer cond={true} />

      {/* Maintains Spacing at the end of the screen */}
      <div className="contact-space-div"></div>

      {/* Renders Notification Component */}
      <Notification
        children={(add) => {
          notification.current = add;
        }}
      />
    </div>
  );
}

export default Contact;
