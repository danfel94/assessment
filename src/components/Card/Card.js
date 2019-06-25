import React from 'react';

import './Card.css';

const Card = ({ title, description, index }) => {
  let photo;
  if (index % 2 === 1) {
    photo = 'cat';
  } else {
    photo = 'bird';
  }
  return (
    <article className="card__container">
      <div className={`card__preview ${photo}`} />
      <div className="card__footer">
        <h3 className="card__title">
          {title} {index}
        </h3>
        <p className="card__info">{description}</p>
      </div>
      <a href="#">Click & go!</a>
    </article>
  );
};

export default Card;
