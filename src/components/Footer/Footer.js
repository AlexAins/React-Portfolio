import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";
import CV from "../../assets/AlexanderAinslieCV.pdf";
import logoBlack from "../../assets/logoBlack.png";
import "./Footer.css";

function Footer(){
    return(
        <div className="container" id="footerContainer">
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 mt-4 border-top">
                <div className="col-md-4 d-flex align-items-center">
                    <h4 className="footer-title">Developed and Designed by Alexander Ainslie</h4>
                </div>
                <div className="col-md-4 d-flex align-items-center justify-content-center">
                    <img src={logoBlack} alt="Logo in black and white" style={{height: '25px'}}/>
                </div>
                <div className="col-md-4">
                    <ul className="footerLinks nav list-unstyled d-flex justify-content-end">
                        <li className="footerIcons mx-3">
                            <a
                                href="https://github.com/AlexAins"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialLink"
                            >
                                <AiFillGithub className="footerSocialIcons" size={20}/>
                            </a>
                        </li>
                         <li className="footerIcons mx-3">
                            <a
                                href="https://linkedin.com/in/alexander-ainslie/"
                                target="_blank"
                                rel="noreferrer"
                                className="footerSocialLink"
                            >
                                <FaLinkedinIn className="footerSocialIcons" size={20}/>
                            </a>
                            </li>
                            <li className="footerIcons mx-3"> 
                                <a
                                    href={CV}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="footerSocialLink"
                                >
                                    <CgFileDocument className="footerSocialIcons" size={20}/>
                                </a>
                            </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;

