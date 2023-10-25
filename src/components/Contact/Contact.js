import React, { useState, useRef } from "react";
import { useSelector } from 'react-redux';
import emailjs from "emailjs-com";
import { motion } from 'framer-motion';
import axios from "axios";
import getTransitions from "../../utils/transitions";
import Routing from "../Routing/Routing";
import Footer from "../Footer/Footer";
import Notification from "../Notification/Notification";
import "./Contact.css";

function Contact() {

    const theme = useSelector(state => state.themeSlice.theme);

    const [data, setdata] = useState({
        userName: "",
        email: "",
        message: "",
    });

    const form = useRef();

    const notification = useRef(null);

    const onInputChange = (e) => {
        setdata({ ...data, [e.target.name]: e.target.value });
    };

    const onFormSubmit = (e) => {

        e.preventDefault();

        axios({
            method: 'get',
            url: `https://api.zerobounce.in/v2/validate?api_key=60be41121a974dde99cd800e7291add9&email=${data.email}&ip_address=156.124.12.145`
        })
            .then(res => {

                const status = res?.['data']?.['status'];

                if (status === "invalid") {
                    notification.current?.("Please enter a valid Email!");
                }
                else {

                    emailjs.sendForm("service_115gbis", "template_g27bwmi", form.current, "f4zrte3jDpvAWBo3h")
                        .then(res => {
                            notification.current?.("Thanks for contacting me! I'll respond within 24 hours.");
                        })
                        .catch(error => {
                            notification.current?.("Service currently unavailable. Please try again later. Thank you.");
                        });

                    e.target.reset();

                    setdata({
                        userName: "",
                        email: "",
                        message: "",
                    });

                }
            })
            .catch(err => {
                notification.current?.("Service currently unavailable. Please try again later. Thank you.");
            })

    };

    return (
        <div className="contact-div">

            <motion.h1 className="contact-h1 mt-2 mb-4" {...getTransitions(1)}>Contact.</motion.h1>

            <motion.p className={`contact-p ${theme ? '' : 'dark'} mb-4`} {...getTransitions(1.3)}>
                Get in touch or shoot me an email directly on
                &nbsp;
                <a href="mailto:syed.jiavuddin99@gmail.com">syed.jiavuddin99@gmail.com</a>
                &nbsp;.
            </motion.p>

            <form
                ref={form}
                className="contact-form"
                onSubmit={onFormSubmit}
            >
                <motion.input
                    type="text"
                    id="fullname"
                    name="userName"
                    placeholder="Name"
                    className={`contact-input ${theme ? '' : 'dark'} mb-4`}
                    onChange={onInputChange}
                    required
                    {...getTransitions(1.6)}
                />

                <motion.input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className={`contact-input ${theme ? '' : 'dark'} mb-4`}
                    onChange={onInputChange}
                    data-nb
                    required
                    {...getTransitions(1.9)}
                />

                <motion.textarea
                    id="message"
                    name="message"
                    placeholder="Message"
                    className={`contact-textarea ${theme ? '' : 'dark'} mb-4`}
                    onChange={onInputChange}
                    required
                    {...getTransitions(2.2)}
                ></motion.textarea>

                <motion.button type="submit" className={`contact-button ${theme ? '' : 'dark'} mb-4`} {...getTransitions(2.2)}>
                    Send Message
                </motion.button>

            </form>

            <Routing />

            <Footer cond={true} />

            <div className='contact-space-div'></div>

            <Notification
                children={add => {
                    notification.current = add
                }}
            />

        </div>
    );
}

export default Contact;