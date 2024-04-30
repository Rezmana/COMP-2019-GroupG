import React, {useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import Email from '../components/Email';
import "./Contact.css";
import Rollingpic from "../components/Rollingpic";
import Footer from "../components/Footer"


export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_r3vbrxd', 'template_057ur2c', form.current, {
        publicKey: 'b_1jIXYInLL0ONMuP',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <div className='Content'>
      <h1>Contact Us</h1>
      <p>If you have any queries please do not hesitate to ask.<br></br> We will do our best to get back to you within 24 hours.</p>
      <Email></Email>

      <Rollingpic></Rollingpic>

    </div>
  );
};
