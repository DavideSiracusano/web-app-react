import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import start2impactImg from "./imgs/cropped-Logo_University-09.webp";
import degreeImg from "./imgs/degree.jpg";

function About() {
  return (
    <Container className="mt-1">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
        className="about"
      >
        <Row className="justify-content-center">
          <h1 className="text-center"> About me 🤝🏻</h1>
          <Col
            sm={12}
            md={4}
            className="mt-3 mx-1  border rounded p-2 shadow"
            style={{ maxWidth: "350px" }}
          >
            <p className="text-center">
              Some of my social skills are certainly:
            </p>
            <ul>
              <li>Communication </li>
              <li>Creativity </li>
              <li>Adaptability</li>
              <li>Empathy</li>
              <li>Team Work</li>
              <li>Networking </li>
              <li>Customer </li>
              <li>Service </li>
              <li>Conflict Resolution</li>
              <li>Time Management </li>
              <li>Problem Solving</li>
            </ul>
          </Col>
          <Col
            sm={12}
            md={4}
            className="mt-3 mx-1  text-center border rounded p-2 shadow"
            style={{ maxWidth: "350px" }}
          >
            I have hands-on experience in web development technologies such as
            HTML5, CSS3, Javascript Flexbox, Bootstrap and React. I am committed
            to continuous learning and staying updated with the latest
            technologies trends. I started a master with Start2Impact and some
            courses on Udemy Academy, enhancing my skills in Web Development.
            This reflects my dedication to staying at the forefront of
            technological advancements.
            <img
              src={start2impactImg}
              alt="start2impact"
              className="img-fluid"
            ></img>
          </Col>
          <Col
            sm={12}
            md={4}
            className="mt-3 mx-1 text-center border rounded p-2 shadow"
            style={{ maxWidth: "350px" }}
          >
            I have a bachelor's degree in communication and a master's degree in
            foreign languages and literatures.🎓
            <img src={degreeImg} alt="degree" className="img-fluid"></img>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default About;
