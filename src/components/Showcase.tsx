import React from 'react';
import { Link } from 'react-router-dom';
import '../css/showcase.css';

type ShowcaseProps = {
  title: string;
  paragraph: string;
  link1: string;
  link2: string;
};

const Showcase: React.FC<ShowcaseProps> = ({
  title,
  paragraph,
  link1,
  link2,
}): JSX.Element => {
  return (
    <>
      <div className="showcase">
        <div className="logo"></div>
        <div className="showcase-content">
          <h2 className="title">{title}</h2>
          <p className="paragraph">{paragraph}</p>
          <div className="btn-group mt-4" role="group">
            <Link to="trips/mtb" className="link1">
              <button className="button mr-5">{link1}</button>
            </Link>
            <Link to="trips/ski" className="link2">
              <button className="button">{link2}</button>
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-2"></div>
      <div className="bg-3"></div>
    </>
  );
};

export default Showcase;
