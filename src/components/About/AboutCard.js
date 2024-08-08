import React from "react";
import Card from "react-bootstrap/Card";
import { AiOutlineArrowRight } from "react-icons/ai";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0" data-aos="zoom-in">
          <p style={{ textAlign: "justify"}}>
          Welcome to my professional portfolio! I am <span className="primary-header">Mayur Waghmare</span>  a DevOps and Cloud Engineer with a strong background in Linux system administration and AWS cloud services. My expertise lies in optimizing cloud infrastructures, automating workflows, and ensuring robust system performance and security. Throughout my career, I have demonstrated my ability to streamline development processes, reduce deployment errors, and enhance system reliability. I thrive in dynamic environments and am committed to leveraging my skills to drive innovation and efficiency.
            <br />
            <br />
            here are some other things I enjoy doing!
          </p>
          <ul>
            <li className="about-activity">
              <AiOutlineArrowRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Reading Books
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Playing Games
            </li>
            <li className="about-activity">
              <AiOutlineArrowRight /> Traveling 
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
