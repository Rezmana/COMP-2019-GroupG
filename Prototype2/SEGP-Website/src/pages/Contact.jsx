import React, {useRef, useEffect, useState} from 'react';
import emailjs from '@emailjs/browser';
import Email from '../components/Email';
import "./Contact.css";
import Rollingpic from "../components/Rollingpic";


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

    <footer className="footer">
        <div className="contact-info-left">
          <h2>Our Service Number</h2>
          <p>Malaysia +60 12-3456-7890</p>
          <p>China +86 123456790</p>
          <p>UK +44 1234567890</p>
        </div>
        <div className="contact-info-right">
          <h2>Our Email</h2>
          <p>seaturtle@outlook.com</p>
          <p>admin@outlook.com</p>
          <p>service@outlook.com</p>
        </div>
      </footer>
    </div>
  );
};
