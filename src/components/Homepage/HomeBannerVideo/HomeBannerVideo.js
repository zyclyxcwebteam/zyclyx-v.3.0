/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";
import "./HomeBannerVideo.css";

const HomeBannerVideo = () => {
  // const [title, setTitle] = useState(captions[0]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // eslint-disable-next-line no-unused-vars
    if (index < 3) {
      setTimeout(() => {
        setIndex(index + 1);
      }, 5000);
    } else if (index === 3) {
      // Loop
      setIndex(0);
    }
  });
  return (
    <section className="home-banner">
      <div className="row home-inner h-100 w-100">
        <div className="col-12 order-1 order-md-0 order-sm-1 home-titles d-flex justify-content-center align-items-center">
          <div className="hero-carousel">
            <div className={`title-container ${index === 0 && "t-active"}`}>
              <h1 className="banner-title light-text text-center">
                Rooted in Knowledge
                <br />
                Built on Trust
              </h1>
            </div>

            <div className={`title-container ${index === 1 && "t-active"}`}>
              <h1 className="banner-title light-text text-center">
                Taking Technology Forward
                <br />
                with Possibilities
              </h1>
            </div>

            <div className={`title-container ${index === 2 && "t-active"}`}>
              <h1 className="banner-title light-text text-center">
                Save Time and Money with
                <br />
                Business Automation
              </h1>
            </div>
          </div>
        </div>

        <div className="home-video">
          <video
            src="https://res.cloudinary.com/zyclyxweb/video/upload/v1603096683/zyclyx_bg_green.mp4"
            id="bannerVideo"
            autoPlay
            muted
            loop
          />
        </div>
      </div>
    </section>
  );
};
export default HomeBannerVideo;
