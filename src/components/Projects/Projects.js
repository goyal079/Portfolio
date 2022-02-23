import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import netflix from "../../Assets/Projects/netflix.png";
import weather from "../../Assets/Projects/weather.png";
import store from "../../Assets/Projects/store.png";
import clock from "../../Assets/Projects/clock.png";
import battery from "../../Assets/Projects/battery.png";
import todo from "../../Assets/Projects/todo.png";
import bootstrap from "../../Assets/Projects/bootstrap.png";
import github from "../../Assets/Projects/github.png";
import mole from "../../Assets/Projects/mole.png";

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
              imgPath={todo}
              isBlog={false}
              title="TODO App"
              description="Personalised todo app which enables the user to login/register, add,delete,and check tasks. The app notifies the user of the tasks via micro service workers set in the backend. Micro services setup was done using the node scheduler rather than via cronjobs,to ensure not exposing in process validations.JWT has been used all private routes in express. The app was deployed via GCP and uses nginx as the load balancer and to reverse proxy the app to the sub-domain todo.hgoyal.in, Server level Encryption has been implemented. (MERN,Redux for state management)"
              link="https://todo.hgoyal.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={store}
              isBlog={false}
              title="E-Store"
              description="End to End e-commerce store, allows users to login/register,view,review,rate,add to cart,and order products. The admin dashboard is accessible only via an admin account, admin can create/edit/delete products and update order status. The backend models are refernce based/relational. JWT has been used all private routes in express. User login sessions are being maintained via cookie parser.The app was deployed via GCP and uses nginx as the load balancer and to reverse proxy the app to the sub-domain store.hgoyal.in, Server level Encryption has been implemented. The DevOps pipleline was automated using jenkins. (MERN,Redux for state management, material-UI)"
              link="https://store.hgoyal.in"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Widget"
              description="The app uses open weather API to get weather Data of the location input by the user, the API calls were made using axios and responses were handled using asynchronous javascript. Once fetched, the data is correspondingly rendered across the UI. (React, JSX, CSS)"
              link="https://github.com/goyal079/WeatherApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix UI page"
              description="Netlfix Explore page Clone built using HTML, Vanilla JS, Vanilla CSS. This project focuses on replicating the UI of the highly popular OTT platform."
              link="https://github.com/goyal079/projects/tree/master/netflix%20page%20clone"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={github}
              isBlog={false}
              title="Github App"
              description="This app uses the github user public API to fetch user data by their user names. On the userprofile route a similar UI to the github profiles is rendered and links redirect to original github repos. Focuses on React Functional Components and Hooks."
              link="https://github.com/soumyajit4419/AI_For_Social_Good"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mole}
              isBlog={false}
              title="Whack A Mole Game"
              description="A whack a mole game. The game focuses on the Javascript DOM concepts and keeps the user updated of the score of their accurate hits to mole. The layout uses CSS grids and the minute bit of animation was done using CSS keyframes."
              link="https://github.com/goyal079/projects/tree/master/mole"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bootstrap}
              isBlog={false}
              title="Bootstrap Page"
              description="Simplistic landing page for a developer course with enrollment form components. UI only.(HTML,Vanilla JS, Bootstrap)"
              link="https://github.com/goyal079/projects/tree/master/bootstrap"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clock}
              isBlog={false}
              title="Clock Widget"
              description="The clock widget displays local time and uses CSS transisitions for the hand tickings. The app uses HTML, Vanilla JS & CSS"
              link="https://github.com/goyal079/clock-widget"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={battery}
              isBlog={false}
              title="Battery Status Widget"
              description="This application uses the battery status API and renders information an=bout the battery percentage and health, as well as the charging status.(HTML, CSS,JS)"
              link="https://github.com/goyal079/projects/tree/master/Battery%20API"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
