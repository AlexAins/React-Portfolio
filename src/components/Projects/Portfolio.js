import React from "react";
import ProjectCard from "./ProjectCard";
import projects from "./projects.json";


class Portfolio extends React.Component {

  state = {projects};

  removeProject(removeId){
    this.setState({projects: projects.filter(project => project.id !== removeId)})
  }

  render(){
    return (
      <div className="container">
        <h1>My Portfolio</h1>
        <p>
          Here are a few projects I've recently worked on.
        </p>
        <div className="row row-cols-md-2 row-cols-lg-3 g-3">
          {projects.map((project) => {
            return (
              <ProjectCard key={project.id} {...project}/>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Portfolio;
