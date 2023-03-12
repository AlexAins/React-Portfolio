import React from "react";

function ProjectCard(props){
    return (
        <div className="col-md-6 col-lg-4">
            <div className="card h-100">
                <img src={props.image} className="card-img-top projectImages" alt={props.title}/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.desc}</p>
                </div>
                <div className="card-footer text-center d-flex justify-content-evenly">
                    <a href={props.github} target="_blank" rel="noreferrer" className="btn btn-info">GitHub</a>
                    {props.deployed ? (<a href={props.deployedURL} target="_blank" rel="noreferrer" className="btn btn-info">Visit App</a>) : ("")}
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;