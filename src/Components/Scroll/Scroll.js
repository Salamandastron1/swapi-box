import React from 'react';
import './Scroll.css';
import Crawl from 'react-star-wars-crawl';
import 'react-star-wars-crawl/lib/index.css';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import CardContainer from '../CardContainer/CardContainer';

const Scroll = ({ movieScroll, starWarsDirectory, stateOfButtons, favoriteACard }) => {
  const getRandomIndice = Math.floor(Math.random() * Math.floor(6));
  const randomMovie = movieScroll[getRandomIndice];

  return (
    <section className="scroll-container">
      <Route
        path="/favorites"  
        render={() => {
          return(<CardContainer
            starWarsDirectory={starWarsDirectory.favorites}
            stateOfButtons={stateOfButtons}
            favoriteACard={favoriteACard}
            category="favorites"
            />);
        }
        }
      />
      <Route
        path="/people"   
        render={() => {
          return (<CardContainer
            starWarsDirectory={starWarsDirectory.people}
            stateOfButtons={stateOfButtons}
            favoriteACard={favoriteACard}
            category="people"
          />);
        }
      }
      />
      <Route
        path="/planets"
        render={() => {
          return (<CardContainer
            starWarsDirectory={starWarsDirectory.planets}
            stateOfButtons={stateOfButtons}
            favoriteACard={favoriteACard}
            category="planets"
          />);
        }
      }
      />
      <Route
        path="/vehicles"
        render={() => {
          return (<CardContainer
            starWarsDirectory={starWarsDirectory.vehicles}
            stateOfButtons={stateOfButtons}
            favoriteACard={favoriteACard}
            category="vehicles"
          />);
        }
      }
      />
      <Crawl>
        <p>{randomMovie.opening_crawl}</p>
        <h3>{randomMovie.title}</h3>
        <h4>{randomMovie.release_date}</h4>
      </Crawl>
    </section>
  );
};

Scroll.propTypes = {
  starWarsDirectory: PropTypes.array,
  movieScroll: PropTypes.array,
  favoriteACard: PropTypes.func,
  stateOfButtons: PropTypes.object,
};

export default Scroll;
