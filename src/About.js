import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import start2impactImg from "./imgs/cropped-Logo_University-09.webp";

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
            <p className="text-center">Some of my soft skills are certainly:</p>
            <ul>
              <li>Communication </li>
              <li>Creativity </li>
              <li>Adaptability</li>
              <li>Empathy</li>
              <li>Team Work</li>
              <li>Networking </li>
              <li>Customer Service </li>
              <li>Patience</li>
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
          </Col>
          <Col
            sm={12}
            md={4}
            className="mt-3 mx-1 text-center border rounded p-2 shadow"
            style={{ maxWidth: "350px" }}
          >
            <ul>
              <li>
                26/09/2014 - 20/07/2018: Bachelor's Degree in Communication
                Science
              </li>
              <li>
                12/04/2021 - 04/11/2022: Master's Degree in foreign languages
                and literatures
              </li>
              <li>
                01/11/2023 - 24/05/2025: Master in Web Development{" "}
                <a
                  href="https://www.start2impact.it/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link text-decoration-none "
                >
                  Start2impact University
                </a>
              </li>
            </ul>
            <img
              src={start2impactImg}
              alt="start2impact"
              className="img-fluid"
            ></img>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
}

export default About;
