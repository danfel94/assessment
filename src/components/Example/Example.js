import React from 'react';
import Gallery from '../Gallery/Gallery';
import Constrained from '../Constrained/Constrained';
import './Example.css';

const Example = () => {
  return (
    <div className="example__container">
      <Gallery />
      <Constrained />
    </div>
  );
};

export default Example;
