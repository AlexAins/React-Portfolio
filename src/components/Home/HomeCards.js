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
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiHtml5 size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">HTML</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiCss3 size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">CSS</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiJavascript size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">JavaScript</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiBootstrap size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">Bootstrap</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiNodedotjs size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">Node.JS</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiNpm size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">NPM</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiReact size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">React</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiGit size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">GIT</p>
                    </div>
                </div>
            </div>
            <div className="col-md-2 col-sm-6">
                <div className="card h-100 text-center techCard">
                    <div className="card-body">
                        <SiGithub size={75}/>
                    </div>
                    <div className="card-footer p-0">
                        <p className="m-1">GitHub</p>
                    </div>
                </div>
            </div>        
        </div>
    )
}

export default HomeCards;