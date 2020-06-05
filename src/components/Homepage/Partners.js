import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import Slider from "react-slick";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
};

const Partners = () => {
  const clients = useStaticQuery(graphql`
    query partnersQuery {
      allFile(filter: { relativeDirectory: { eq: "partners" } }) {
        edges {
          node {
            base
            childImageSharp {
              fixed(height: 50) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);
  return (
    <>
      {/*  eslint-disable-next-line react/jsx-props-no-spreading */}
      <Slider {...settings}>
        {clients.allFile.edges.map(image => {
          return (
            <div key={image.node.base}>
              <Img fixed={image.node.childImageSharp.fixed} />
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default Partners;
