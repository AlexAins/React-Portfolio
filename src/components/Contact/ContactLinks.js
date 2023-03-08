import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import CV from "../../assets/AlexanderAinslieCV.pdf"

function ContactLinks(){
    return(
        <ul className="socialLinks">
            <li className="socialIcons">
                <a
                    href="https://github.com/AlexAins"
                    target="_blank"
                    rel="noreferrer"
                    className="contactSocialIcons"
                >
                    <AiFillGithub />
                </a>
            </li>
            <li className="socialIcons">
                <a
                    href="linkedin.com/in/alexander-ainslie/"
                    target="_blank"
                    rel="noreferrer"
                    className="contactSocialIcons"
                >
                    <FaLinkedinIn />
                </a>
            </li>
            <li>
                <a
                    href={CV}
                    target="_blank"
                    rel="noreferrer"
                    className="contactSocialIcon"
                >
                    <CgFileDocument />
                </a>
            </li>
      </ul>
    );
};

export default ContactLinks;