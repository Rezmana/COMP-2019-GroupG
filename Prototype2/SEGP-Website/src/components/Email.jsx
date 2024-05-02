import React, { useRef } from 'react'
import "./Email.css";
import emailjs from '@emailjs/browser';

export default function Email() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    // Send email to the user using emailjs service
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
      // Form for user to input their name, email and message 
      <div className='container'>
        <form ref={form} onSubmit={sendEmail}>
          <label>Name</label>
          <input type="text" name="user_name" />
          <label>Email</label>
          <input type="email" name="user_email" />
          <label>Message</label>
          <textarea name="message" />
          <br/>
          <button type="submit">Send</button>
        </form>
      </div>
    );
}
