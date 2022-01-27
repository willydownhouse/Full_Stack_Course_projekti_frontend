import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/showcase.css';

type ShowcaseProps = {
  title: string;
  paragraph: string;
  link1: string;
  link2: string;
};

const Showcase = ({ title, paragraph, link1, link2 }: ShowcaseProps) => {
  const [img1Loaded, setImg1Loaded] = useState(false);
  const [img2Loaded, setImg2Loaded] = useState(false);

  return (
    <>
      <div className="showcase">
        <div className="logo"></div>
        <div className="showcase-content">
          <h2 className="title">{title}</h2>
          <p className="paragraph">{paragraph}</p>
          <div className="btn-group mt-4" role="group">
            <Link to="/mtb" className="link1">
              <button id="btn-mtb" className="button mr-5">
                {link1}
              </button>
            </Link>
            <Link to="/ski" className="link2">
              <button id="btn-ski" className="button">
                {link2}
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className={`bg-1 ${img1Loaded ? 'visible-anim-delay' : ''}`}>
        <img
          onLoad={() => setImg1Loaded(true)}
          className="bg-1-img"
          src="./img/win2.jpg"
        />
      </div>
      <div className={`bg-2 ${img2Loaded ? 'visible-anim-delay' : ''}`}>
        <img
          onLoad={() => setImg2Loaded(true)}
          className="bg-1-img"
          src="./img/sum3.jpg"
        />
      </div>
      <div className="bg-3"></div>
    </>
  );
};

export default Showcase;
