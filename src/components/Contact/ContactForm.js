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
            <div className="">
              <label for="inputEmail" class="form-label">Email address</label>
              <input 
                id="inputEmail"
                class="form-control"
                type="email"
                name='from_email'
                required
              />
            </div>
            <div className="">
              <label for="inputName" class="form-label">Name</label>
              <input 
                id="inputName"
                class="form-control"
                type="name"
                name='from_name'
                required
              />
            </div>
            <div className="">
              <label for="inputMessage" class="form-label">Name</label>
              <textarea 
                id="inputMessage"
                class="form-control"
                type="message"
                name='message'
                required
              />
            </div>
            <button className="btn" type='submit'>Submit</button>
          </form>
        </div>
    );
}
    
export default ContactForm;