import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
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
              isBlog={false}
              title="Blog Management System"
              description={[
                "Full-stack blog platform built with Flask and SQLAlchemy.",
                "Implemented authentication, role-based access control, and complete CRUD operations.",
                "Designed modular architecture using Blueprints with ORM-based database models.",
                "Applied secure password hashing, pagination, and server-side validation.",
                "Deployed on Render with production-ready environment configuration."
              ]}
              ghLink="https://github.com/JaniceBetty/Blog-Management-System"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="RFM Analysis Dashboard"
              description={[
                "Flask-based RFM (Recency, Frequency, Monetary) analytics dashboard.",
                "Performed data preprocessing and feature engineering using Pandas.",
                "Implemented customer segmentation with SQLAlchemy ORM integration.",
                "Built dynamic visualizations for actionable business insights.",
                "Deployed on Render with backend and database integration."
              ]}
              ghLink="https://github.com/JaniceBetty/RFM-Analytics-Dashboard"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Multi-Modal AI Chatbot"
              description={[
                "Multi-modal AI chatbot for personalized book recommendations.",
                "Integrated OCR, Google Gemini-Pro (NLP), and OpenAI CLIP for image-text matching.",
                "Implemented genre/author-based personalization layer.",
                "Built interactive real-time application using Streamlit.",
                "Deployed scalable solution supporting text and image inputs."
              ]}
              ghLink="https://github.com/JaniceBetty/BookRecommendationSystem"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              isBlog={false}
              title="Churn Modeling Analysis"
              description={[
                "Customer churn analysis using data-driven modeling techniques.",
                "Performed data preprocessing, EDA, and feature engineering.",
                "Built predictive models to identify churn-risk customers.",
                "Generated actionable insights for retention strategy optimization."
              ]}
              ghLink="https://github.com/JaniceBetty/Churn_Modelling_Analysis"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
