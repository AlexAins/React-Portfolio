import React from "react";
import {
    SiHtml5,
    SiCss3,
    SiBootstrap,
    SiJavascript,
    SiNodedotjs,
    SiNpm,
    SiReact,
    SiGit,
    SiGithub
} from "react-icons/si";

function HomeCards(){
    return(
        <div className="row g-3 justify-content-md-center">
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiHtml5 />
                    </div>
                    <div className="card-footer">
                        <p>HTML</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiCss3 />
                    </div>
                    <div className="card-footer">
                        <p>CSS</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiJavascript />
                    </div>
                    <div className="card-footer">
                        <p>JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiBootstrap />
                    </div>
                    <div className="card-footer">
                        <p>Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiNodedotjs />
                    </div>
                    <div className="card-footer">
                        <p>Node.JS</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiNpm />
                    </div>
                    <div className="card-footer">
                        <p>NPM</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiReact />
                    </div>
                    <div className="card-footer">
                        <p>React</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiGit />
                    </div>
                    <div className="card-footer">
                        <p>GIT</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100">
                    <div className="card-body">
                        <SiGithub />
                    </div>
                    <div className="card-footer">
                        <p>GitHub</p>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default HomeCards;