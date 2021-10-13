import * as React from 'react';
import { useState } from 'react';
import Sketch from 'react-p5';
import { Link } from 'gatsby';

const About = () => {
  const [age, toggleAge] = useState(0);
  const [job, toggleJob] = useState(0);

  const ages = [
    "28 years old, 🤓",
    "older than time itself, 💀",
    "just a baby, 👶",
    "in a simulation called The Matrix, 🤖",
    "a Klingon from outer space, 👾"
  ];

  const jobs = [
    "an actual NASA astronaut, 🧑‍🚀",
    "a software engineer, 💾",
    "a fictional Belgian detective, 🔍"
  ];

  const hobbies = [
    "remember the Alamo 🤠"
  ];

  const linkStyle = {
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    cursor: "pointer",
    fontSize: "1.3rem",
    fontWeight: "bold",
    top: "2%",
    left: "2%",
    position: "absolute",
    border: "none",
    background: "none",
    color: "#D28271",
  };

  const aboutStyle = {
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
    position: "absolute",
    width: "70rem",
    color: "#8D2D54",
    fontSize: "2.3rem",
    top: "30%",
    left: "20%",
  };

  const b = {
    cursor: "pointer",
    padding: 5,
    color: "#D28271",
    background: "#EECCA5",
    fontWeight: "bold",
    fontFamily: "Courier New",
    fontSize: "1.5rem",
  };

  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  const [px, setPx] = useState(0);
  const [py, setPy] = useState(0);
  const [easing, setEasing] = useState(0.5);

  const setup = (p5, canvasParentRef) => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight * 2).parent(canvasParentRef);
    p5.background('#fdfff5');
  };

  const mousePressed = p5 => {
    // Assign current mouse position to variables.
    setX(p5.mouseX);
    setY(p5.mouseY);
    setPx(p5.mouseX);
    setPy(p5.mouseY);
    // Prevent default functionality.
    return false;
  };

   // Run when the mouse/touch is dragging.
  const mouseDragged = p5 => {
    let targetX = p5.mouseX;
    let targetY = p5.mouseY;
    setX(x + (targetX - x) * easing);
    setY(y + (targetY - y) * easing);
    p5.strokeWeight(5);
    p5.stroke('#D28271');
    p5.line(x, y, px, py);
    setPx(x);
    setPy(y);
    // Prevent default functionality.
    return false;
  };

  return(
    < >
      <div style={aboutStyle}>
        <p>
          My name is Jan. I'm <span
            role="button"
            onClick={() => age === ages.length - 1 ? toggleAge(0) : toggleAge(age+1)}
            style={b}>
              {ages[age]}
            </span>
          <br></br>I work as <span
            role="button"
            onClick={() => job === jobs.length - 1 ? toggleJob(0) : toggleJob(job+1)}
            style={b}>
              {jobs[job]}
            </span>
          <br></br>
          and I <span style={b}>am a lover of all things code. </span>
          <br></br>
          I am made of <span style={b}>molten lava.</span>
          <br></br>
          I live <span style={b}>5000 miles above the earth</span>
          <br></br>
          and I have a pet <span style={b}>turtle.</span>
        </p>
      </div>
      <Link to="/" style={linkStyle}>Back</Link>
      <Sketch setup={setup} mousePressed={mousePressed} mouseDragged={mouseDragged} />
    </>
  );

}

export default About;