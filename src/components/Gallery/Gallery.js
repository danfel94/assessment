import React from 'react';
import './Gallery.css';

const Gallery = () => {
  return (
    <section className="gallery__container">
      <div className="gallery__cardList">
        <h4>These are cards!</h4>
        <p>
          These cards are cool & tell you things about animals! Did you know a
          bird can run up to 65mph? And a cat can jump 26 feet in the air to
          catch prey? Animals are so cool.
        </p>
        <p>
          <a href="#">Check out more animal facts</a> There are so many facts to
          learn.
        </p>
        <div className="gallery__filters">
          <p>I want to see:</p>
          <input type="checkbox" id="birds" />
          <label for="birds">Birds</label>
          <input type="checkbox" id="cats" />
          <label for="cats">Cats</label>
        </div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
        <div>card</div>
      </div>
    </section>
  );
};

export default Gallery;
