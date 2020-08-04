import React from "react";
import { Controller, Scene } from "react-scrollmagic";
import "../styles/scroll.css";

const SplitScreen = () => {
  return (
    <>
      <div className="scroll-header">
        <h1>Robotic Process Automation</h1>
      </div>

      <section className="scroll">
        <Controller>
          <Scene duration="200%" triggerElement=".scroll" triggerHook="0" pin>
            <div className="scroll-title">
              <h2>Custom solutions for increased business value</h2>
            </div>
          </Scene>
          <div className="scroll-pages">
            <div>
              <h3>Personalized Solutions</h3>
              <p>
                RPA performs best when it is customised according to the
                requirement. With the execution of custom solutions that suits
                your business needs and capabilities, it is assured to deliver
                better results and enhance company value.
              </p>
            </div>
            <div>
              <h3>Personalized Solutions</h3>
              <p>
                RPA performs best when it is customised according to the
                requirement. With the execution of custom solutions that suits
                your business needs and capabilities, it is assured to deliver
                better results and enhance company value.
              </p>
            </div>
            <div>
              <h3>Personalized Solutions</h3>
              <p>
                RPA performs best when it is customised according to the
                requirement. With the execution of custom solutions that suits
                your business needs and capabilities, it is assured to deliver
                better results and enhance company value.
              </p>
            </div>
          </div>
        </Controller>
      </section>
      <footer className="foo" />
    </>
  );
};

export default SplitScreen;
