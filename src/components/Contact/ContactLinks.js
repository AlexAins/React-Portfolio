import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import CV from "../../assets/AlexanderAinslieCV.pdf"

function ContactLinks(){
    return(
        <ul className="contactLinks nav list-unstyled d-flex justify-content-center">
            <li className="socialIcons">
                <a
                    href="https://github.com/AlexAins"
                    target="_blank"
                    rel="noreferrer"
                    className="contactSocialIcons mx-3"
                >
                    <AiFillGithub />
                </a>
            </li>
            <li className="socialIcons">
                <a
                    href="https://linkedin.com/in/alexander-ainslie/"
                    target="_blank"
                    rel="noreferrer"
                    className="contactSocialIcons mx-3"
                >
                    <FaLinkedinIn />
                </a>
            </li>
            <li className="socialIcons"> 
                <a
                    href={CV}
                    target="_blank"
                    rel="noreferrer"
                    className="contactSocialIcon mx-3"
                >
                    <CgFileDocument />
                </a>
            </li>
      </ul>
    );
};

export default ContactLinks;