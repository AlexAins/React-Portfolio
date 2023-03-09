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
        <div className="container contactForm" >
          <form onSubmit={handleOnSubmit}>
            <div className="container my-2">
              <label for="inputName" class="form-label">Name</label>
              <input 
                id="inputName"
                class="form-control"
                type="name"
                name='from_name'
                required
              />
            </div>
            <div className="container my-2">
              <label for="inputEmail" class="form-label">Email Address</label>
              <input 
                id="inputEmail"
                class="form-control"
                type="email"
                name='from_email'
                required
              />
            </div>
            <div className="container my-2">
              <label for="inputMessage" class="form-label">Message</label>
              <textarea 
                id="inputMessage"
                class="form-control"
                type="message"
                name='message'
                required
              />
            </div>
            <div className="container d-flex justify-content-center my-2">
              <button className="btn btn-outline-success" type='submit'>Get In Touch</button>
            </div>
          </form>
        </div>
    );
}
    
export default ContactForm;