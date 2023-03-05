import React from "react";
import projects from "../projects.json";
import image2 from "../assets/images/vapour.png";
import image1 from "../assets/images/movielookup.png"
const imagesarray = [image1,image2] 

function ProjectCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <p className="project-title">{props.name}</p>
          </li>
          <li>
            <p className="project-description">{props.description}</p>
          </li>
          <li>
            <div className="project-link">
              <a href={props.deployedapp}>Link to application</a>
              <br />
              <a href={props.githublink}>Link to code</a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

function Wrapper(props) {
  return <div className="wrapper">{props.children}</div>;
}

function Projects() {
  return (
    <>
      <div class="project">
        <div class="heading_section_title_container">
          <h2 class="heading_section_title heading_section_title_C">
            Portfolio
          </h2>
        </div>

        <Wrapper>
          {projects.map((project,i) => (
            <ProjectCard
              name={project.name}
              key={project.id}
              github={project.github}
              deployedapp={project.deployedapp}
              description={project.description}
              githublink={project.githublink}
              image = {imagesarray[i]}
            />
          ))}
        </Wrapper>
      </div>
    </>
  );
}

export default Projects;
