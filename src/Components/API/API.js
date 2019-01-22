export const searchStarWarsAPI = async (url) => {
  const response = await fetch(url || 'https://swapi.co/api/');
  try {
    if (response.status >= 400) {
      throw new Error('fetch recieved an invalid response');
    } else {
      return await response.json();
    }
  }
  catch {
    throw Error('Problem with fetch');
  }
};

export const fetchPeopleData = async (url) => {
  const people = await searchStarWarsAPI(url);
  const unresolvedPromises = people.results.map(async (person) => {
    const species = await searchStarWarsAPI(person.species);
    const planet = await searchStarWarsAPI(person.homeworld);
    return ({ species: species, properName: person.name, ...planet });
  });
  return Promise.all(unresolvedPromises);
};

export const fetchPlanetData = async (url) => {
  const planets = await searchStarWarsAPI(url);
  const unresolvedPromises = planets.results.map(async (planet) => {
    const planetResidents = await Promise.all(planet.residents.map(async (resident) => {
      return searchStarWarsAPI(resident);
    }));
    const planetCard = {
      name: planet.name,
      population: planet.population,
      climate: planet.climate,
      terrain: planet.terrain,
      residents: planetResidents,
    };
    return planetCard;
  });
  return Promise.all(unresolvedPromises);
};

export const fetchVehicleData = async (url) => {
  const vehicles = await searchStarWarsAPI(url);
  const vehicleData = vehicles.results.map((vehicle, i) => {
    return {
      name: vehicle.name,
      id: i + 'vehicles',
      favorited: false,
      properties: [
        `Model: ${vehicle.model}`,
        `Class: ${vehicle.vehicle_class}`,
        `# Of Passengers: ${vehicle.passengers}`,
      ],
    }; 
  });
  return vehicleData;
};

export const makePlanetCard = category => {
  const planetCard = category.map((item, i) => {
    return {
      name: item.name,
      id: i + 'planets',
      favorited: false,
      properties: [
        `Terrain: ${item.terrain}`,
        `Population: ${item.population}`,
        `Climate: ${item.climate}`,
        `Residents: ${item.residents.map(resident => {
          return resident.name;
        })}`,
      ],
    };
  });
  return planetCard;
};

export const makePeopleCard = category => {
  const personCard = category.map((item, i) => {
    return {
      name: item.properName,
      id: i + 'people',
      favorited: false,
      properties: [
        `Planet: ${item.name}`,
        `Population: ${item.population}`,
        `Species: ${item.species.name}`,
      ],
    };
  });
  return personCard;
};

export const putDataIntoStorage = (key, data) => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const checkLocalStorage = key => {
  const retrievedJSON = localStorage.getItem(key);
  if (typeof retrievedJSON === 'string') {
    const newData = JSON.parse(retrievedJSON);
    return newData;
  } else {
    return null;
  }
};
