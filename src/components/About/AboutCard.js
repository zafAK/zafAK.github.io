import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone, I am <span className="beige">Zafar Khan </span>
            <br />
            I am currently employed as a software developer at Wabtec.
            <br />
            I have an undergraduate degree in Computer Science and Engineering from the University of Iowa and 
            a Master's degree in Software Engineering from Pennsylvania State Univesity. 
            <br />
            <br />
            Fun fact, this website was built using <span className="beige">React.js </span> and <span className="beige">Bootstrap. </span>
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Staying Active
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
