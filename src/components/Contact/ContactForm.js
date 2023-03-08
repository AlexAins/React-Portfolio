import React from "react";
import emailjs from "emailjs-com";

const SERVICE_ID = "portfolio-Contact";
const TEMPLATE_ID = "template_4bfwp8u";
const USER_ID = "Bp9fnQxdhd9rJL6XO";

function ContactForm(){
    const handleOnSubmit = (e) => {
        e.preventDefault();
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
          .then((result) => {
            console.log(result.text);
          }, (error) => {
            console.log(error.text);
          });
        e.target.reset()
    };
    
    return (
        <div className="contactForm" >
          <form onSubmit={handleOnSubmit}>
            <input
              id='form-input-control-email'
              label='Email'
              name='from_email'
              placeholder='Email…'
              required
            />
            <input
              id='form-input-control-last-name'
              label='Name'
              name='from_name'
              placeholder='Name…'
              required
            />
            <textarea
              id='form-textarea-control-opinion'
              label='Message'
              name='message'
              placeholder='Message…'
              required
            />
            <button type='submit' color='green'>Submit</button>
          </form>
        </div>
    );
}
    
export default ContactForm;