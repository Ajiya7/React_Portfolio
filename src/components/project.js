import React from 'react'; 
import projects from '../projects.json'

function ProjectCard(props) {
    return (
      <div className="card"> 
        <div className="img-container">
          <img alt={props.name} src={props.image}/>
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

function Projects () {  
    return (
    <>
    <div className="project">
    <h1 className="title">Projects</h1>
    </div>

      <Wrapper>
        {projects.map((project) => (
          <ProjectCard 
          name={project.name}
          key={project.id}
          image={project.image}
          github={project.github}
          deployedapp={project.deployedapp}
          skills={project.skills}
          description={project.description}
          />
        ))}
      </Wrapper>
    </>
    
    );
  }
  
  export default Projects;