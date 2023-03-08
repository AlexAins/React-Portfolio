import React from "react";
import ContactForm from "./ContactForm";


function ContactCard(){
    return(
        <div className="row">
            <div className="col">
                <div className="card">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
};

export default ContactCard;