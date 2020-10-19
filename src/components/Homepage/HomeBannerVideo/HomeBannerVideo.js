/* eslint-disable no-plusplus */
import React, { useState, useEffect } from "react";
import "./HomeBannerVideo.css";

const HomeBannerVideo = () => {
  // const [title, setTitle] = useState(captions[0]);
  const videoURL = [
    "https://res.cloudinary.com/zyclyxweb/video/upload/v1603096683/zyclyx_bg_green.mp4",
    "https://res.cloudinary.com/zyclyxweb/video/upload/v1603091244/zyclyx_video_bg.mp4",
    "https://res.cloudinary.com/zyclyxweb/video/upload/v1603115747/zyclyx_bg_blue.mp4",
  ];
  const [index, setIndex] = useState(0);
  const [videoIndex, setVideoIndex] = useState(0);
  const [video, setVideoURL] = useState(videoURL[0]);

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

    if (videoIndex < 3) {
      setTimeout(() => {
        setVideoURL(videoURL[videoIndex + 1]);
        setVideoIndex(videoIndex + 1);
      }, 20000);
    } else if (videoIndex === 3) {
      // Loop
      setVideoURL(videoURL[0]);
      setVideoIndex(0);
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
        <video src={video} id="bannerVideo" autoPlay muted loop />
      </div>
    </section>
  );
};
export default HomeBannerVideo;
