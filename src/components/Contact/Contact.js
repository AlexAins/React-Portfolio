import React from "react";
import ContactCard from "./ContactCard";
import ContactLinks from "./ContactLinks";

function Contact() {
  return (
    <div className="container">
      <div className="row">
        <h1>Connect with Me</h1>
        <ContactLinks />
      </div>
      <div className="row">
        <h2>Feel Free To Get in Touch</h2>
        <p>As I'm starting on my journey as a frontend developer, please feel free to get in touch with any opportunities or advice.</p>
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
