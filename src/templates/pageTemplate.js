import React from "react";
import { graphql } from "gatsby";

const PageTemplate = () => {
  return (
    <>
      <div>
        <h2>Service page Template</h2>
      </div>
    </>
  );
};

export default PageTemplate;

export const pageQuery = graphql`
  query($slug: String!) {
    dataJson(path: { eq: $slug }) {
      path
      title
      id
      caption
      description
      services {
        content
        title
      }
    }
  }
`;
