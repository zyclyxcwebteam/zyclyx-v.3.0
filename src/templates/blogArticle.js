import React from "react";
import { graphql } from "gatsby";

const BlogArticle = props => {
  console.log(props);
  return (
    <div>
      <h1>Article title</h1>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allStrapiBlogPosts {
      edges {
        node {
          Title
          strapiId
          Image {
            absolutePath
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default BlogArticle;
