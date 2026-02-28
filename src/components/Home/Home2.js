import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/home-main.jpg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I’m a Software Engineer who loves transforming ideas into reliable, scalable backend systems. Over time, I’ve explored different technologies and found my passion in building structured APIs, designing efficient databases, and developing clean, maintainable server-side architectures using Python and Flask.
              <br />
              <br />
              I’m proficient in
              <i>
                <b className="purple">
                  {" "}
                  Python, Flask, SQL, RESTful API development, database design, authentication systems, and backend architecture.{" "}
                </b>
              </i>
              I also have foundational knowledge of
              <i>
                <b className="purple">
                  {" "}
                  HTML, CSS, and JavaScript,{" "}
                </b>
              </i>
              allowing me to understand how frontend and backend systems integrate effectively.
              <br />
              <br />
              My key areas of interest include developing
              <i>
                <b className="purple">
                  {" "}
                  Web Applications, Artificial Intelligence and Machine Learning,{" "}
                </b>
              </i>
              and exploring new ways to bridge both these systems.
              <br />
              <br />
              Whenever possible, I love building projects with
              <b className="purple"> Python </b> and modern frameworks like{" "}
              <i>
                <b className="purple">Flask</b> and{" "}
                <b className="purple">Bottle</b>.
              </i>
            </p>
          </Col>
            <Col md={4} className="img-fluid">
              <Tilt>
                <img src={homeLogo} className="img-fluid" alt="home pic" style={{ marginTop: "250px", marginLeft: "30px"}} />
              </Tilt>
            </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
