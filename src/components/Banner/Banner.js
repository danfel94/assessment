import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <section className="banner__container">
      <div className="banner__welcome">
        <h1 className="banner__title">Welcome to my example page</h1>
        <p className="banner__subtitle">This is our new assessment</p>
      </div>
      <div className="banner__img" />
    </section>
  );
};

export default Banner;
