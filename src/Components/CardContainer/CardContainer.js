import React from 'react';
import './CardContainer.css';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import swLoadGif from '../../images/2048.svg';

const CardContainer = ({ starWarsDirectory, favoriteACard, favorited, category }) => {
  const cardCategory = category;
  let cards = [];
  if (typeof starWarsDirectory === 'object') {
    cards = starWarsDirectory.map((card, i) => {
      return <Route
        exact path={`/${cardCategory}`}
        render={() => {
          return (
            <Card
              key={i + [cardCategory]}
              name={card.name}
              properties={card.properties}
              favoriteACard={favoriteACard}
              id={card.id}
              favorited={card.favorited}
            />
          );
        }
      }
      />;
    });
  }
  if (cards.length <= 0 && cardCategory === 'favorites') {
    return (
      <section className={`${cards.length <= 0 ? 'no-favs-container' : ''}card-container`}>
        {cards.length <= 0 ? <div className="no-favs">NoFavs</div> : cards}
      </section>);
  } else {
    return (
      <section className={`${cards.length <= 0 ? 'load' : ''}card-container`}>
        {cards.length <= 0 ? <img className="load-image" src={swLoadGif} /> :cards}
      </section>
    );
  }
};

CardContainer.propTypes = {
  starWarsDirectory: PropTypes.array,
  stateOfButtons: PropTypes.object,
  favoriteACard: PropTypes.func,
  favorited: PropTypes.object,
  category: PropTypes.string,
};

export default CardContainer;
