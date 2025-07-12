import React from "react";
import { motion } from "framer-motion";
import reactImg from "./imgs/image.png";
import javascriptImg from "./imgs/javascript-logo-javascript-icon-transparent-free-png.webp";
import cssImg from "./imgs/CSS3_logo_and_wordmark.svg.png";
import htmlImg from "./imgs/HTML5_logo_and_wordmark.svg.png";
import bootstrapImg from "./imgs/Bootstrap_logo.svg.png";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className="home"
    >
      <h1 className="title">Welcome to my page!</h1>
      <p className="border rounded p-2 shadow paragraph">
        Hello! I'm Davide! A front end developer.
        <br />I was born in 1994 and I live in Italy.
        <br />
        I've always had a passion for coding. I like to keep up to date about
        what's new following courses or simply reading some articles.
      </p>

      <h4 className="title">Technologies:</h4>
      <div className="technologies">
        <img className="technologies-img" src={reactImg} alt="react"></img>
        <img
          className="technologies-img"
          src={javascriptImg}
          alt="javascript"
        ></img>
        <img className="technologies-img" src={cssImg} alt="css"></img>
        <img className="technologies-img" src={htmlImg} alt="html"></img>
        <img
          className="technologies-img"
          src={bootstrapImg}
          alt="bootstrap"
        ></img>
      </div>
    </motion.div>
  );
}

export default Home;
