import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import ProjectCard from "./ProjectCards";

import PrivateChat from "../../Assets/Projects/PrivateChat.png";
import Portfolio from "../../Assets/Projects/Portfolio.png";
import Ecart from "../../Assets/Projects/ecart.png";


import "./project.css";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="Fluorescent-Blue">Works </strong>
        </h1>
        <p>Here are a few projects I've worked on recently.</p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Ecart}
              title="Automated CI/CD Pipeline for React.js Application Using Jenkins, Docker, and 
              Kubernetes"
              description="Developed and implemented a continuous integration and continuous deployment (CI/CD) pipeline using Jenkins on an EC2 Ubuntu server. Integrated the pipeline with GitHub to automate the build, test, and deployment processes of a React.js application. Utilized Docker to containerize the application and DockerHub to manage and distribute Docker images. Deployed the Docker image on a Kubernetes cluster to ensure scalability and efficient management of the application. This project streamlined the development workflow, ensuring efficient, consistent, and scalable deployment of the application across different environments."
              ghLink="https://github.com/myrmayur/CICD-For-React-App"
          
            />
          </Col>

          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={PrivateChat}
              title="Centralized Windows System Logging and SageMaker Monitoring: A Linux System
              Administrator's Initiative"
              description="Developed and implemented a logging solution for all Windows systems within the company infrastructure by creating a shell script to deploy Winlogbeat across all computers via group policy, ensuring standardized logging configuration. Integrated Winlogbeat with Elasticsearch and Grafana to collect and visualize logs effectively, and utilized Grafana to monitor SageMaker instances and establish alerts for training interruptions. This resulted in streamlined log management, improved monitoring capabilities, and proactive response to system events."
              ghLink="https://github.com/myrmayur/Centralized-Windows-system-loging-and-monitoring-using-Grafana"
              
            />
          </Col>
          <Col md={6} lg={4} className="project-card">
            <ProjectCard
              imgPath={Portfolio}
              title="Portfolio Website"
              description="My personal Portfolio Website build with React and Bootstrap. It is fully responsive website which supports both dark and light mode."
              ghLink="https://github.com/myrmayur/Portfolio-Website.git"
              demoLink="https://portfolio-f5d22.web.app/"
            />
          </Col>
        </Row>
      </Container>
      <ScrollToTop />
    </Container>
  );
}

export default Projects;
