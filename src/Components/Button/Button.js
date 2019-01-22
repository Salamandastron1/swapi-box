import React from 'react';
import './Button.css';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const Button = ({ buttonHasBeenPressed, directory, selected }) => {
  return (
    <section className="button-container">
      <NavLink
        to="/favorites"
        onClick={() => buttonHasBeenPressed(null, 'favorites')}
        className={`${selected.favorites ? 'selected' : null} favorites-btn button`}
      >
        <i className="fab fa-trade-federation" />
        {`Favorites ${directory.favorites.length}`}
      </NavLink>
      <NavLink
        to="/people"
        onClick={() => buttonHasBeenPressed(directory.people, 'people')}
        className={`${selected.people ? 'selected' : null} people-btn button`}
      >
        <i className="fab fa-jedi-order" />
          People
      </NavLink>
      <NavLink
        to="/planets"
        onClick={() => buttonHasBeenPressed(directory.planets, 'planets')}
        className={`${selected.planets ? 'selected' : null} planets-btn button`}
      >
        <i className="fab fa-empire" />
          Planets
      </NavLink>
      <NavLink
        to="/vehicles"
        onClick={() => buttonHasBeenPressed(directory.vehicles, 'vehicles')}
        className={`${selected.vehicles ? 'selected' : null} vehicles-btn button`}
      >
        <i className="fab fa-galactic-republic" />
          Vehicles
      </NavLink>
    </section>
  );
};

Button.propTypes = {
  buttonHasBeenPressed: PropTypes.func,
  directory: PropTypes.object,
  selected: PropTypes.object,
};

export default Button;
