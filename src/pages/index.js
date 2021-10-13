import * as React from "react"
import { useState, useEffect } from "react"
import ParticleBackground from "../ParticleBackground.js"
import ThemeChanger from "../ThemeChanger.js"

// styles

const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#D28271",
}
const paragraphStyles = {
  marginBottom: 48,
}
const codeStyles = {
  color: "#8A6534",
  fontFamily: "Verdana (sans-serif)",
  padding: 5,
  backgroundColor: "#FFF4DB",
  fontSize: "1rem",
  borderRadius: 4,
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#EECCA5",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const docLinkStyle = {
  ...linkStyle,
  listStyleType: "none",
  marginBottom: 24,
}

const docLink = {
  text: "Documentation",
  url: "https://www.gatsbyjs.com/docs/",
  color: "#8954A8",
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "About",
    url: "/about",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
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
    text: "My Art",
    url: "/",
    description:
      "A collection of my art works over the past few years.",
    color: "#0D96F2",
  },
  {
    text: "Hack Reactor",
    url: "/",
    description:
      "Want to elevate your career and enter a challenging, yet rewarding, industry? Sign up for Hack Reactor, the Harvard of coding bootcamps! You won't be disappointed. Unless...?",
    color: "#8EB814",
  },
  {
    text: "My Blog",
    url: "/cows",
    badge: true,
    description:
      "Read my most private thoughts.",
    color: "#663399",
  },
]

// markup
const IndexPage = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const globalColor = !darkTheme ? "#232129" : "#fdfff5";

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



  return (
    <main style={pageStyles}>
      <ParticleBackground darkTheme={darkTheme} />
      <ThemeChanger darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <title>Milky Way</title>
      <h1 style={headingStyles}>
        Welcome to the
        <br />
        <span style={headingAccentStyles}>milky way. </span>
        <span role="img" aria-label="rocket emojis">
          🚀
        </span>
      </h1>
      <p style={paragraphStyles}>
        A guide to <code style={codeStyles}>per5i5ting</code> in a universe of unknowns.{" "}
        <span
          role="img"
          aria-label="Sunglasses smiley emoji"
          style={{fontSize:"2rem"}}>
          🕵️
        </span>
      </p>
      <p style={paragraphStyles}>
        This site is formatted using Gatsby's automatically generated boilerplate.
        <br></br>Sketches are built with p5 and react-p5, with examples from the p5 website.
      </p>
      <ul style={listStyles}>
        {/* <li style={docLinkStyle}>
          <a
            style={linkStyle}
            href={`${docLink.url}?utm_source=starter&utm_medium=start-page&utm_campaign=minimal-starter`}
          >
            {docLink.text}
          </a>
        </li> */}
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
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
