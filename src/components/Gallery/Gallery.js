import React from 'react';
import Card from '../Card/Card';
import './Gallery.css';

const Gallery = () => {
  const panels = [
    {
      title: 'This is card ',
      description:
        'Cats use thier whiskers to determine space between objects in the dark.'
    },
    {
      title: 'This is card ',
      description:
        'Some birds have membranes that cover their eyes like goggles, enabling them to see while traveling at high speeds.'
    },
    {
      title: 'This is card ',
      description: `The cheetah is the only cat that can't retract its claws.`
    },
    {
      title: 'This is card ',
      description:
        'Peregrine falcons can fly up to and sometimes surpassing 200mph as they hunt prey.'
    }
  ];
  return (
    <section className="gallery__container">
      <div className="gallery__details">
        <h5 className="gallery__title">These are cards!</h5>
        <p className="gallery__info">
          These cards are cool & tell you things about animals! Did you know a
          bird can run up to 65mph? And a cat can jump 26 feet in the air to
          catch prey? Animals are so cool.
        </p>
        <p className="gallery__info">
          <a href="#">Check out more animal facts</a> There are so many facts to
          learn.
        </p>
        <div className="gallery__filters">
          <p>I want to see:</p>
          <input type="checkbox" id="birds" />
          <label htmlFor="birds">Birds</label>
          <input type="checkbox" id="cats" />
          <label htmlFor="cats">Cats</label>
        </div>
        <div className="gallery__cardList">
          {panels.map((panel, index) => {
            return (
              <Card
                title={panel.title}
                description={panel.description}
                index={index + 1}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
