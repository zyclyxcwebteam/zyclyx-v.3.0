import React, { useState, useEffect } from "react";
import "./HomeBannerVideo.css";

const HomeBannerVideo = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
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
    <section className="home-banner d-flex justify-content-center align-items-center">
      <div className="home-titles">
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
          src="https://res.cloudinary.com/zyclyxweb/video/upload/v1603173272/zyclyx_bg_video_ureqii.mp4"
          id="bannerVideo"
          autoPlay
          muted
          loop
        />
      </div>
    </section>
  );
};
export default HomeBannerVideo;
