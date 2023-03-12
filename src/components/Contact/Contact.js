import React from "react";
import ContactCard from "./ContactCard";
import "./Contact.css";

function Contact() {
  return (
    <div className="container-fluid" id="fullContact">
      <div className="container" id="contactContainer">
        <div className="row my-3">
          <h2 className="text-center">Feel Free To Get in Touch</h2>
          <p className="text-center">As I'm starting on my journey as a frontend developer, please feel free to get in touch with any opportunities or advice.</p>
          <ContactCard />
        </div>
      </div>
    </div>
  );
}

export default Contact;
