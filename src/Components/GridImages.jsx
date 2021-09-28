import React from "react";
import "./Style/GridImages.css";
import egg from './images/image-transform.jpg';
import cup from './images/image-stand-out.jpg';
import cherry from './images/image-graphic-design.jpg';
import orange from './images/image-photography.jpg';

const GridImages = () => {
  return (
    <div className="container">
      <div className="text">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do most
          of the marketing for you.
        </p>
        <h4>Learn more</h4>
      </div>
      <div className="egg" style={{ backgroundImage: `url(${egg})` }}></div>
      <div className="cup" style={{ backgroundImage: `url(${cup})` }}></div>
      <div className="text">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers,
          photographers, videographers, and copywriters, we’ll build and extend
          your brand in digital places.
        </p>
        <h4>Learn more</h4>
      </div>
      <div className="cherry" style={{ backgroundImage: `url(${cherry})` }}>
        <h2>Graphic design</h2>
        <p>
          Great design makes you memorable. We deliver artwork that underscores
          your brand message and captures potential clients’ attention.
        </p>
      </div>
      <div className="orange" style={{ backgroundImage: `url(${orange})` }}>
        <h2>Photography</h2>
        <p>
          Increase your credibility by getting the most stunning, high-quality
          photos that improve your business image.
        </p>
      </div>
    </div>
  );
};

export default GridImages;
