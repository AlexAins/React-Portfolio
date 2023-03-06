import React from "react";

function ProjectCard(props){
    console.log(props)
    return (
        <div className="card col-4 ">
            <img src={props.image} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.desc}</p>
            </div>
            <div className="card-footer">
                <a href="#" className="btn btn-primary">Go somewhere</a>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    )
}

export default ProjectCard;