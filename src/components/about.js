import React from "react";
import "../";
import { Col } from 'react-bootstrap';

export default function About() {
  return (
    <section className="title">
      <div className="row justify-content-center" id="about-container">
        <Col lg={6} md={12}>
          <center>
          <h1 class="name">Faruk Ajiya</h1>
          <h2 class="job">Full stack web developer</h2>
          </center>
          <p>
            <h4>Hi i'm Faruk.</h4>
          </p>
        </Col>
      </div>
    </section>
  );
}
