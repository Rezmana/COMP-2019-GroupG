import React, { useRef } from 'react'
import "./Email.css";
import emailjs from '@emailjs/browser';

export default function Email() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_8i1du6q', 'template_057ur2c', form.current, {
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
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
    );
}
