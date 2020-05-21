import React from "react";
import "./banner.css";

function Homebanner() {
  return (
    <>
      <div className="split-slideshow">
        <div className="slideshow">
          <div className="slider">
            <div className="item">
              <h2>item-1</h2>
            </div>
            <div className="item">
              <h2>item-2</h2>
            </div>
            <div className="item">
              <h2>item-3</h2>
            </div>
            <div className="item">
              <h2>item-4</h2>
            </div>
          </div>
        </div>
        <div className="slideshow-text">
          <div className="item">Canyon</div>
          <div className="item">Desert</div>
          <div className="item">Erosion</div>
          <div className="item">Shape</div>
        </div>
      </div>

      {/* <a class="the-most" target="_blank" href="https://codepen.io/2017/popular/pens/10/">
  <img src="https://raw.githubusercontent.com/supahfunk/supah-codepen/master/themost-2017.png">
</a>
     */}
    </>
  );
}

export default Homebanner;
