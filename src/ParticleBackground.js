import * as React from 'react';
import { useState } from 'react';
import Sketch from 'react-p5';

const ParticleBackground = (props) => {
  const { darkTheme } = props;
  const [particles, setParticles] = useState([]);

  let particleFill;
  let particleStroke;
  let particleBg;
  let topSpeed;

  // darktheme
  if(darkTheme) {
    particleFill = 'rgba(250,190,88,.5)';
    particleStroke = 'rgba(255,255,255,.04)';
    particleBg = '#0f0f3f';
    topSpeed = 2;
  } else {
    // light theme
    particleFill = 'rgba(141,45,84,0.5)';
    particleStroke = 'rgba(0,0,0,.04)';
    particleBg = '#fdfff5';
    topSpeed = 6;
  }

  let setup = (p5, canvasParentRef) => {
    class Particle {
      // setting the co-ordinates, radius and the
      // speed of a particle in both the co-ordinates axes.
      constructor(particleFill, particleStroke, topSpeed) {
        this.particleFill = particleFill;
        this.particleStroke = particleStroke;
        this.x = p5.random(0, p5.width);
        this.y = p5.random(0, p5.height);
        this.r = p5.random(1,8);
        this.topSpeed = topSpeed;
        this.xSpeed = p5.random(-2,topSpeed);
        this.ySpeed = p5.random(-1,topSpeed);
      }

      setParticleStyle(particleFill, particleStroke, topSpeed) {
        this.particleFill = particleFill;
        this.particleStroke = particleStroke;
        this.topSpeed = topSpeed;
      }

      // creation of a particle.
      createParticle() {
        p5.noStroke();
        p5.fill(this.particleFill);
        p5.circle(this.x,this.y,this.r);
      }

    // setting the particle in motion.
      moveParticle() {
        if(this.x < 0 || this.x > p5.width)
          this.xSpeed*=-1;
        if(this.y < 0 || this.y > p5.height)
          this.ySpeed*=-1;
        this.x+=this.xSpeed;
        this.y+=this.ySpeed;
      }

    // this function creates the connections(lines)
    // between particles which are less than a certain distance apart
      joinParticles(particles) {
        particles.forEach(element =>{
          let dis = p5.dist(this.x,this.y,element.x,element.y);
          if(dis<85) {
            p5.stroke(this.particleStroke);
            p5.line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }

    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight * 2)
      .parent(canvasParentRef);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('background', 'cover');

    for(let i = 0; i < p5.width/10; i++){
      setParticles(particles => (
        [...particles, new Particle(particleFill, particleStroke)]
      ));
    }
  }

  const draw = p5 => {
    p5.background(particleBg);
    for(let i = 0; i < particles.length; i++) {
      particles[i].setParticleStyle(particleFill, particleStroke, topSpeed);
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
    }
  }

  return (
    <Sketch setup={setup} draw={draw} />
  );
};

export default ParticleBackground;