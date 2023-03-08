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
                <div className="nav col-md-6 justify-content-end d-flex">
                    <ul className="contactLinks">
                        <li className="socialIcons">
                            <a
                                href="https://github.com/AlexAins"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialIcons"
                            >
                                <AiFillGithub />
                            </a>
                        </li>
                         <li className="socialIcons">
                            <a
                                href="linkedin.com/in/alexander-ainslie/"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialIcons"
                            >
                                <FaLinkedinIn />
                            </a>
                            </li>
                            <li>
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

