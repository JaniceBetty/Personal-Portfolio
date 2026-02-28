import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi everyone! I’m <span className="purple">Janice Betty</span>{" "}
            from <span className="purple">Bangalore, India</span>.
            <br />
            I’m currently working as a{" "}
            <span className="purple">Software Developer Intern</span> at{" "}
            <span className="purple">AI4SEES pvt ltd</span>.
            <br />I hold a B.Tech in {"Computer Science and Engineering"} with a specialization in {"Artificial Intelligence and Machine Learning"}
            <span className="purple"></span> from{" "}
            <span className="purple">SRM Institute of Science and Technology</span>.
            <br />
            <br />
            Outside of coding, I love engaging in activities that keep me
          creative and inspired:
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Reading Books 📚 and watching mystery thrillers 📺
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Blogs ✍️
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places 🌍
            </li>
          </ul>

        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
