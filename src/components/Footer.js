import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import CV from "../assets/AlexanderAinslieCV.pdf"

function Footer(){
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-6 d-flex align-items-center">
                    <h4>Developed and Designed by Alexander Ainslie</h4>
                </div>
                <div className="col-md-6">
                    <ul className="footerLinks nav list-unstyled d-flex justify-content-end">
                        <li className="footerIcons mx-2">
                            <a
                                href="https://github.com/AlexAins"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialIcons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                         <li className="footerIcons mx-2">
                            <a
                                href="linkedin.com/in/alexander-ainslie/"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialIcons"
                            >
                                <FaLinkedinIn />
                            </a>
                            </li>
                            <li className="footerIcons mx-2"> 
                                <a
                                    href={CV}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footerSocialIcon"
                                >
                                    <CgFileDocument />
                                </a>
                            </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

