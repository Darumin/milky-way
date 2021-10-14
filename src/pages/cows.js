import * as React from 'react';
import { graphql, Link } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import './cows.css';

const Cows = ({ data }) => {
  return (
    <div className="blog">
      <Link to="/" className="link-style-blog">
        <img src="https://img.icons8.com/ios-glyphs/30/000000/circled-left-2.png"/>
      </Link>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id} className="blog-item">
              <h1 className="head">{node.frontmatter.title}</h1>
              <span className="date">{node.frontmatter.date}</span>
              <div className="blog-body">
              <MDXRenderer>
              {node.body}
              </MDXRenderer>
              </div>
            </article>
          ))
        }
      </ul>
      <span id="copyright">© Jan, All Rights Reserved.</span>
    </div>
  )
}

export const query = graphql`
  query {
    allMdx(sort: {fields: frontmatter___date, order: DESC}) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
        }
        id
        body
      }
    }
  }
`;
export default Cows;