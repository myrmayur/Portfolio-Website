import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
          Welcome to my portfolio! I’m <span className="primary-header">Mayur Waghmare</span>  a DevOps and Cloud Engineer passionate about building reliable, scalable, and secure infrastructure. With a strong foundation in Linux system administration and deep experience in AWS cloud services, I specialize in automating workflows, optimizing cloud environments, and improving system performance. My work focuses on streamlining development lifecycles, minimizing deployment risks, and boosting operational efficiency.
            <br /> With a strong foundation in Linux system administration and deep experience in AWS cloud services, I specialize in automating workflows, optimizing cloud environments, and improving system performance. My work focuses on streamlining development lifecycles, minimizing deployment risks, and boosting operational efficiency.
            <br />
            Beyond tech, I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> 🖊️ Writing tech blogs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> 📚 Diving into a good book
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> 🎮 Gaming in my downtime
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> ✈️ Exploring new places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
