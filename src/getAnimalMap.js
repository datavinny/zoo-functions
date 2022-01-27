const data = require('../data/zoo_data');

const { species } = data;
const spl = { NE: '' }; // speciesPerLocation

function getAnimalMap(options) {
  if (
    options === undefined ||
    !Object.keys(options).length ||
    options.includeNames !== undefined && options.includeNames === false ||
    options.sex !== undefined
  ) {
    spl.NE = species
      .filter(({ location }) => location === 'NE')
      .map((element) => element.name);
    spl.NW = species
      .filter(({ location }) => location === 'NW')
      .map((element) => element.name);
    spl.SE = species
      .filter(({ location }) => location === 'SE')
      .map((element) => element.name);
    spl.SW = species
      .filter(({ location }) => location === 'SW')
      .map((element) => element.name);
    return spl;
  }
  if (options.includeNames !== undefined && options.includeNames === true) {
    spl.NE = species
      .filter(({ location }) => location === 'NE')
      .map(({ name, residents }) => {
        const newObj = {};
        newObj[name] = residents.name;
        return newObj;
      });
    spl.NW = species
      .filter(({ location }) => location === 'NW')
      .map(({ name, residents }) => {
        const newObj = {};
        newObj[name] = residents;
        return newObj;
      });
    spl.SE = species
      .filter(({ location }) => location === 'SE')
      .map(({ name, residents }) => {
        const newObj = {};
        newObj[name] = residents;
        return newObj;
      });
    spl.SW = species
      .filter(({ location }) => location === 'SW')
      .map(({ name, residents }) => {
        const newObj = {};
        newObj[name] = residents;
        return newObj;
      });
    return spl;
  }
  return 'erro';
}

console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
