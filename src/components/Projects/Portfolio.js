import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";
import "./Portfolio.css";


class Portfolio extends React.Component {

  state = {projects};

  removeProject(removeId){
    this.setState({projects: projects.filter(project => project.id !== removeId)})
  }

  render(){
    return (
      <div className="container-fluid" id="fullPortfolio">
        <div className="container" id="portfolioContainer">
          <h1 className="text-center">My Portfolio</h1>
          <p className="text-center">Here are a few projects I've recently worked on.</p>
          <div className="row g-3 mb-4">
            {projects.map((project) => {
              return (
                <ProjectCard key={project.id} {...project}/>
              )
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default Portfolio;
