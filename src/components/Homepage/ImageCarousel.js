import React, { useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import "./ImageCarousel.css";

// data.allFile.edges.node.childImageSharp.fluid
const ImageCarousel = () => {
  const data = useStaticQuery(graphql`
    query bannerQuery {
      allFile(filter: { relativeDirectory: { eq: "home-banner" } }) {
        edges {
          node {
            base
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `);
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const captions = [
    {
      src: data.allFile.edges[0].node.childImageSharp.fluid,
      altText: "Slide 1",
      caption: "Slide 1",
    },
    {
      src: data.allFile.edges[1].node.childImageSharp.fluid,
      altText: "Slide 2",
      caption: "Slide 2",
    },
    {
      src: data.allFile.edges[2].node.childImageSharp.fluid,
      altText: "Slide 3",
      caption: "Slide 3",
    },
  ];

  const nextSlide = () => {
    if (animating) return;
    const nextIndex = activeIndex === captions.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previousSlide = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? captions.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToSlide = newIndex => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  const slides = captions.map(item => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={item.src}
      >
        <Img fluid={item.src} alt={item.altText} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={nextSlide}
      previous={previousSlide}
    >
      <CarouselIndicators
        items={captions}
        activeIndex={activeIndex}
        onClickHandler={goToSlide}
        className="h-banner-indicator"
      />
      {slides}
      {/* <CarouselControl
        direction="prev"
        directionText="Previous"
        onClickHandler={previousSlide}
      />
      <CarouselControl
        direction="next"
        directionText="Next"
        onClickHandler={nextSlide}
      /> */}
    </Carousel>
  );
};
export default ImageCarousel;
