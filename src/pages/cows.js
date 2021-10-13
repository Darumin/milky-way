import * as React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const Cows = ({ data }) => {
  return (
    <div>
      <ul>
        {
          data.allMdx.nodes.map(node => (
            <article key={node.id}>
              <h1>{node.frontmatter.title}</h1>
              <span>{node.frontmatter.date}</span>
              <MDXRenderer>
              {node.body}
              </MDXRenderer>
            </article>
          ))
        }
      </ul>
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