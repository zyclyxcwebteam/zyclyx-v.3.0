import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

const ImageFluid = ({ fileName, altText }) => {
  const data = useStaticQuery(
    graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `
  );

  const img = data.allImageSharp.edges.find(imgFile => {
    return imgFile.node.fluid.src.includes(fileName);
  });

  if (!img) {
    return null;
  }
  return <Img fluid={img.node.fluid} alt={altText} />;
};

export default ImageFluid;
