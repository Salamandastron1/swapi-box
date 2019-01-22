import React from 'react';
import './Card.css';
import PropTypes from 'prop-types';
import img1 from '../../images/mil-falc.svg';
import img2 from '../../images/death-star.svg';

const Card = (props) => {
  const cardData = props.properties.map((property, i) => {
    return <div key={property + i}>{property}</div>;
  });
  return(
    <div className="card">
      <button
        type="button"
        onClick={() => props.favoriteACard(props.id)}
        className={props.favorited ? 'favorited' : 'null'}
      >
        <img src={props.favorited ? img2 : img1} className="mil-falc" alt="mil-falc" />
        <h3>Favorite</h3>
      </button>
      <h3>{props.name}</h3>
      {cardData}
      <div />
    </div>
  );
};

Card.propTypes = {
  properties: PropTypes.string,
  favoriteACard: PropTypes.func,
  id: PropTypes.string,
  favorited: PropTypes.func,
  name: PropTypes.string,
};

export default Card;
