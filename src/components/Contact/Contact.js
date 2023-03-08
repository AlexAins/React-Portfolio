import React from "react";
import ContactCard from "./ContactCard";
import ContactLinks from "./ContactLinks";

function Contact() {
  return (
    <div>
      <div className="row">
        <h1>Connect with Me</h1>
        <ContactLinks />
      </div>
      <div className="row">
        <h2>Feel free to get in touch</h2>
        <ContactCard />
      </div>
    </div>
  );
}

export default Contact;
