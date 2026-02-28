import React from "react";
import { Col, Row } from "react-bootstrap";
import CSS from "../../Assets/TechIcons/CSS.svg";
import HTML from "../../Assets/TechIcons/HTML.svg";
import Javascript from "../../Assets/TechIcons/Javascript.svg";
import Flask from "../../Assets/TechIcons/Flask.svg";
import ReactIcon from "../../Assets/TechIcons/React.svg";
import Bottle from "../../Assets/TechIcons/Bottle.png";
import MySQL from "../../Assets/TechIcons/MySQL.svg";
import Python from "../../Assets/TechIcons/Python.svg";
import PostgreSQL from "../../Assets/TechIcons/PostgreSQL.svg";
import Git from "../../Assets/TechIcons/Git.svg";
import SQLAlchemy from "../../Assets/TechIcons/SQLALchemy.svg";
import Bootstrap from "../../Assets/TechIcons/Bootstrap.png";
import Tailwind from "../../Assets/TechIcons/Tailwind.svg";


function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <img src={HTML} alt="HTML" />
        <div className="tech-icons-text">HTML</div>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <img src={CSS} alt="css" />
        <div className="tech-icons-text">CSS</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Python} alt="Python" />
        <div className="tech-icons-text">Python</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Flask} alt="flask" />
        <div className="tech-icons-text">Flask</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Bottle} alt="Bottle" />
        <div className="tech-icons-text">Bottle</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Javascript} alt="javascript" />
        <div className="tech-icons-text">Javascript</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={ReactIcon} alt="react" />
        <div className="tech-icons-text">React.Js</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={MySQL} alt="MySQL" />
        <div className="tech-icons-text">MySQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={SQLAlchemy} alt="SQLAlchemy" />
        <div className="tech-icons-text">SQL Alchemy</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={PostgreSQL} alt="PostgreSQL" />
        <div className="tech-icons-text">PostgreSQL</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Git} alt="git" />
        <div className="tech-icons-text">Git</div>
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <img src={Bootstrap} alt="Bootstrap" />
        <div className="tech-icons-text">BootStrap</div>
      </Col>

      <Col xs={4} md={2} className="tech-icons">
        <img src={Tailwind} alt="tailwind" />
        <div className="tech-icons-text">Tailwind CSS</div>
      </Col> 

    </Row>
  );
}

export default Techstack;
