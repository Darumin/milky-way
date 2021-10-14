import * as React from 'react';
import { useState } from 'react';
import { Link } from 'gatsby';
import './about.css';

var Sketch = null;

if(typeof window !== 'undefined') {
  Sketch = require('react-p5');
}

const About = () => {
  const [age, toggleAge] = useState(0);
  const [job, toggleJob] = useState(0);
  const [hobby, toggleHobby] = useState(0);
  const [self, toggleSelf] = useState(0);
  const [location, toggleLocation] = useState(0);
  const [pet, togglePet] = useState(0);

  const ages = [
    "28 years old, 🤓",
    "older than time itself, 💀",
    "just a baby, 👶",
    "in a simulation called The Matrix, 🤖",
    "a Klingon from outer space, 👾"
  ];

  const jobs = [
    "an actual NASA astronaut, 🧑‍🚀",
    "a software engineer, 👨‍💻",
    "a fictional Belgian detective, 🕵️‍♂️"
  ];

  const hobbies = [
    "am a lover of all things code. 📟",
    "remember the Alamo. 🤠",
  ];

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
      <div className="about-style">
        <p>
          <Link to="/" className="link-style">
            <img src="https://img.icons8.com/ios-glyphs/30/000000/circled-left-2.png"/>
          </Link>
          My name is Jan. I'm <span
            role="button"
            onClick={() => age === ages.length - 1 ? toggleAge(0) : toggleAge(age+1)}
            className="tag-style">
              {ages[age]}
            </span>
          <br></br>I work as <span
            role="button"
            onClick={() => job === jobs.length - 1 ? toggleJob(0) : toggleJob(job+1)}
            className="tag-style">
              {jobs[job]}
            </span>
          <br></br>
          and I <span
            role="button"
            onClick={() => hobby === hobbies.length - 1 ? toggleHobby(0) : toggleHobby(hobby+1)}
            className="tag-style">
              {hobbies[hobby]}
            </span>
          <br></br>
          I am made of <span className="tag-style">molten lava.</span>
          <br></br>
          I live <span className="tag-style">5000 miles above the earth</span>
          <br></br>
          and I have a pet <span className="tag-style">turtle.</span>
        </p>
      </div>
      {(
        () => {
          if(Sketch) {
            return (<Sketch setup={setup} mousePressed={mousePressed} mouseDragged={mouseDragged} />);
          } else {
            return;
          }
        }
      )()}

    </>
  );

}

export default About;