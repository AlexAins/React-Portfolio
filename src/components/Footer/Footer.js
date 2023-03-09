import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import CV from "../../assets/AlexanderAinslieCV.pdf"

function Footer(){
    return(
        <div className="container">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="col-md-6 d-flex align-items-center">
                    <h4 className="fst-italic">Developed and Designed by Alexander Ainslie</h4>
                </div>
                <div className="col-md-3 offset-md-3">
                    <ul className="footerLinks nav list-unstyled d-flex justify-content-center">
                        <li className="footerIcons mx-3">
                            <a
                                href="https://github.com/AlexAins"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialIcons"
                            >
                                <AiFillGithub size={20} color={'black'}/>
                            </a>
                        </li>
                         <li className="footerIcons mx-3">
                            <a
                                href="https://linkedin.com/in/alexander-ainslie/"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialIcons"
                            >
                                <FaLinkedinIn size={20} color={'black'}/>
                            </a>
                            </li>
                            <li className="footerIcons mx-3"> 
                                <a
                                    href={CV}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footerSocialIcon"
                                >
                                    <CgFileDocument size={20} color={'black'}/>
                                </a>
                            </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

