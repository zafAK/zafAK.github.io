import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import CubeCard from "../Projects/3DRender";
import Particle from "../Particle";
import CBOWLosses from "../../Assets/Projects/output.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="beige">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} className="project-card">
            <CubeCard
              title="Matrix computations for 3D Representations"
              description="This project is a React-based 3D rotating cube rendered using p5.js. By manually implementing matrix-based rotations and projections, this project offerred a hands-on way to explore computer graphics, linear algebra,
              and interactive visualizations while integrating seamlessly into my React-based web application.
              The rendering logic is implemented using custom matrix transformations for rotation and perspective projection, ensuring a mathematically accurate 3D effect.
              Unlike conventional 3D libraries like Three.js, this project manually handles matrix multiplication, 3D coordinate transformations, and perspective projection, making it an excellent
              example of computational geometry applied in a web environment."
            />
          </Col>

          <Col md={6} className="project-card">
            <ProjectCard
              imgPath={CBOWLosses}
              title="Continuous Bag of Words (CBOW) Model"
              description="The Continuous Bag of Words (CBOW) project is designed to explore how word embeddings can be trained to capture the relationships between words in a given dataset. 
              The goal is to develop a model that understands the connections between words based on their surrounding context, which is essential for natural language processing (NLP) tasks like text classification, sentiment analysis, and machine translation.
              It trains by adjusting word embeddings so that words appearing in similar contexts have closer vector representations, improving machine understanding of language patterns.
              
              The graph depicted shows the loss function of the CBOW model over time, illustrating how the model learns to predict the target word from its context words. The loss decreases as the model becomes more accurate at predicting the target word, indicating successful training."
              ghLink="https://github.com/zafAK/CBOW"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
