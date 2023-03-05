import React from "react";
import "../";
import { Col } from "react-bootstrap";

export default function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          <br />
          <br />
          <center>
            <h1 class="name">Faruk Ajiya</h1>
            <h2 class="job">Full-Stack Web Developer</h2>
          </center>
          <br />
          <br />
          <br />
          <p>
            <center>
              {" "}
              <h4>Hi i'm Faruk.I'm a Full-Stack Web Developer</h4>
            </center>
          </p>
          <br />
          <br />
          <br />
          <center>
            <h2>Skills</h2>
          </center>
          <br />
          <br />
          <div class="skills">
            <center>
            <div class="skills_skill">HTML</div>
            <div class="skills_skill">CSS</div>
            <div class="skills_skill">GIT</div>
            <div class="skills_skill">Github</div>
            </center>
            <center>
            <div class="skills_skill">Responsive Design</div>
            <div class="skills_skill">Terminal</div>
            <div class="skills_skill">Javascript</div>
            <div class="skills_skill">React</div>
            </center>
            <center>
            <div class="skills_skill">Node.js</div>
            <div class="skills_skill">JSON</div>
            <div class="skills_skill">Express</div>
            <div class="skills_skill">Mysql</div>
            </center>
            <center>
            <div class="skills_skill">MongoDB</div>
            </center>
          </div>
        </Col>
      </div>
    </section>
  );
}
