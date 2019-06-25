import React from 'react';
// import catPhoto from '../../assets/cat.png';
// import birdPhoto from '../../assets/birds.png';
import './Card.css';

const Card = ({ title, description, index }) => {
  let photo;
  if(index%2===1){
    photo="cat";
  }else{
    photo="bird";
  }
  return (
    <article className="card__container">
      <div className= {`card__preview ${photo}`} >
        {/* <img src={src} /> */}
      </div>
      <div className="card__footer">
        <h3 className="card__title">{title} {index}</h3>
        <p className="card__info">{description}</p>
        
      </div><a href="#">Click & go!</a>
    </article>
  );
};

export default Card;
