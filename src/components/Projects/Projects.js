import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficons%2Fset%2Fgithub--white&psig=AOvVaw1wQMiNWWDLwDVwVVMo5-1c&ust=1737248435653000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCjr6iW_ooDFQAAAAAdAAAAABAE"
              isBlog={false}
              title="Discord Handler"
              description="Discord Bot Handler built using TypeScript and Discord.js. Easy-to-use but feature-rich handler with well documented code and an upcoming plugin store."
              ghLink="https://github.com/cptcr/discord-development/tree/main/handler"
              demoLink="https://cptcr.cc/discord-development/docs/handler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficons%2Fset%2Fgithub--white&psig=AOvVaw1wQMiNWWDLwDVwVVMo5-1c&ust=1737248435653000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCjr6iW_ooDFQAAAAAdAAAAABAE"
              isBlog={false}
              title="CPTCR.DB"
              description="Node Package built with TypeScript which creates a BSON based database locally in your project with the same management system as MongoDB."
              ghLink="https://github.com/cptcr/cptcr.db"
              demoLink="https://github.com/cptcr/cptcr.db"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath="https://www.google.com/url?sa=i&url=https%3A%2F%2Ficons8.com%2Ficons%2Fset%2Fgithub--white&psig=AOvVaw1wQMiNWWDLwDVwVVMo5-1c&ust=1737248435653000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJCjr6iW_ooDFQAAAAAdAAAAABAE"
              isBlog={false}
              title="Website Builder"
              description="A website portfolio builder using a json file to configure the whole website with several themes."
              ghLink="https://github.com/cptcr/website-builder"
              demoLink="https://github.com/cptcr/website-builder"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

