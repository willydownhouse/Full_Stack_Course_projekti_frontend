import React from 'react';

import Header from './Header';
import Showcase from './Showcase';
import '../css/app.css';

const MainPage = () => {
  return (
    <div className="main">
      <Header />
      <Showcase
        title="Adventure Buddy"
        paragraph="Best ski and mtb trips on the planet"
        link1="Mtb"
        link2="Ski"
      />
    </div>
  );
};
export default MainPage;
