import * as React from 'react';
import Sketch from 'react-p5';

const ParticleBackground = () => {
  let particles = [];

  const setup = (p5, canvasParentRef) => {
    class Particle {
      // setting the co-ordinates, radius and the
      // speed of a particle in both the co-ordinates axes.
      constructor() {
        this.x = p5.random(0, p5.width);
        this.y = p5.random(0, p5.height);
        this.r = p5.random(1,8);
        this.xSpeed = p5.random(-2,2);
        this.ySpeed = p5.random(-1,1.5);
      }

    // creation of a particle.
      createParticle() {
        p5.noStroke();
        p5.fill('rgba(69,0,0,0.5)');
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
            p5.stroke('rgba(0,0,0,0.04)');
            p5.line(this.x,this.y,element.x,element.y);
          }
        });
      }
    }

    const canvas = p5.createCanvas(p5.windowWidth, p5.windowHeight * 2);
    canvas.position(0, 0);
    canvas.style('z-index', '-1');
    canvas.style('background', 'cover');
    for(let i = 0; i < p5.width/10; i++){
      particles.push(new Particle());
    }
  }

  const draw = p5 => {
    p5.background('#ffffff');
    for(let i = 0; i < particles.length; i++) {
      particles[i].createParticle();
      particles[i].moveParticle();
      particles[i].joinParticles(particles.slice(i));
    }
  }

  return <Sketch setup={setup} draw={draw} />;
};

export default ParticleBackground;