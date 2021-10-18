import * as React from "react"
import { useState } from "react"
import "./index.css"

import ParticleBackground from "../ParticleBackground.js"
import ThemeChanger from "../ThemeChanger.js"

// data
const links = [
  {
    text: "About the Author",
    url: "/about",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit... and more!",
    color: "#1099A8",
  },
  {
    text: "LinkedIn",
    url: "https://linkedin.com/in/jandeo",
    description:
      "My personal LinkedIn profile. Connect with me!",
    color: "#E95800",
  },
  {
    text: "Github",
    url: "https://github.com/Darumin",
    description:
      "Where you can find my public code repositories.",
    color: "#BC027F",
  },
  {
    text: "My Blog",
    url: "/cows",
    badge: true,
    description:
      "Browse my most private thoughts.",
    color: "#663399",
  },
  {
    text: "Hack Reactor",
    url: "/",
    description:
      "Want to elevate your career and enter a challenging, yet rewarding, industry? Sign up for Hack Reactor, the Harvard of coding bootcamps! You won't be disappointed.",
    color: "#8EB814",
  },
]

// markup
const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const globalColor = !darkTheme ? "#232129" : "#fdfff5";
  const globalAccent = !darkTheme ? "#D28271" : "#EECCA5";
  const globalAccentInverted = !darkTheme ? "#639EAA" : "#D28271";

  const pageStyles = {
    color: globalColor,
    padding: 96,
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
  }

  const descriptionStyle = {
    color: globalColor,
    fontSize: 14,
    marginTop: 10,
    marginBottom: 0,
    lineHeight: 1.25,
  }

  const linkStyle = {
    color: globalAccent,
    fontWeight: "bold",
    fontSize: 16,
    verticalAlign: "5%",
  }

  const headingAccentStyles = {
    color: globalAccentInverted,
  }

  const paragraphAccentStyles = {
    color: globalAccentInverted,
    fontWeight: "bolder",
  }

  return (
    <main style={pageStyles}>
      <ParticleBackground darkTheme={darkTheme} />
      <ThemeChanger darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <title>Milky Way</title>
      <h1 className="heading">
        Welcome to the
        <br />
        <span style={headingAccentStyles}>milky way. </span>
        <span role="img" aria-label="rocket emojis">
          🚀
        </span>
      </h1>
      <p className="par">
        A way to <code className="code-style">per5i5t</code> in a universe of unknowns.{" "}
        <span
          role="img"
          aria-label="Sunglasses smiley emoji"
          style={{fontSize:"2rem"}}>
          🕵️
        </span>
      </p>
      <span id="b-gatsby" className="badge" aria-label="gatsby-badge">Gatsby</span>
      <span id="b-graphql" className="badge" aria-label="graphql-badge">GraphQL</span>
      <span id="b-p5" className="badge" aria-label="p5-badge">p5.js</span>
      <span id="wizardry" className="badge" aria-label="wizardry-badge">Wizardry ⭐</span>
      <p className="par" style={{width: "30rem"}}>
        <span style={paragraphAccentStyles}>Unleash your creative side.</span> Milky Way is currently under construction as a personal website for the author. Try playing around with <span style={paragraphAccentStyles}>About the Author</span>.
      </p>
      <p className="par" style={{width: "30rem"}}>
        Deployed with <span style={paragraphAccentStyles}>Gatsby </span>
        and a <span style={paragraphAccentStyles}>GraphQL </span>
        data layer for easy blogging, as well as some eye-catching visuals through <span style={paragraphAccentStyles}>p5js</span>,
        <br></br>
        Milky Way is React at its most fun.
      </p>

      <p style={descriptionStyle}>Credit for p5 code goes to <a
        style={linkStyle}
        href="https://p5js.org/examples/">p5js.org.</a></p>
      <ul className="list">
        {links.map(link => (
          <li key={link.url} className="list-item" style={{color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span id="b-new" className="badge" aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
      <img
        alt="Gatsby G Logo"
        src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
      />
    </main>
  )
}

export default IndexPage
