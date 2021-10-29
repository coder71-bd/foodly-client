import React from 'react';
import Banner from './Banner/Banner';
import Faq from './Faq/Faq';
import Features from './Features/Features';
import Foods from './Foods/Foods';

const Home = () => {
  return (
    <div>
      <Banner />
      <Features />
      <Foods />
      <Faq />
    </div>
  );
};

export default Home;
