import React, { useState } from "react";
import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";
import "./ImageCarousel.css";
import image1 from "../../../static/images/home-banner/img-1.jpg";
import image2 from "../../../static/images/home-banner/img-2.jpg";
import image3 from "../../../static/images/home-banner/img-3.jpg";

// data.allFile.edges.node.childImageSharp.fluid
const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const captions = [
    {
      src: image1,
      altText: "Slide 1",
      caption: "Rooted in knowledge built on trust",
      index: 1,
    },
    {
      src: image2,
      altText: "Slide 2",
      caption: "Taking technology forward with possibilities",
      index: 2,
    },
    {
      src: image3,
      altText: "Slide 3",
      caption: "Save time and money with business automation",
      index: 3,
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
        key={item.index}
        className={`slide-${item.index}`}
      >
        <h1 className="home-banner-title">{item.caption}</h1>
        {/* <img src={item.src} alt={item.altText} className="banner-img" /> */}
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={nextSlide}
      previous={previousSlide}
      className="banner-carousel"
    >
      <CarouselIndicators
        items={captions}
        activeIndex={activeIndex}
        onClickHandler={goToSlide}
        className="h-banner-indicator"
      />
      {slides}
    </Carousel>
  );
};
export default ImageCarousel;
