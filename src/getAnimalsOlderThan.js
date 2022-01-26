const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minAge) {
  const filterName = data.species.find(({ name }) => name === animal);

  const { residents } = filterName;

  const everyAge = residents.every(({ age }) => age >= minAge);
  return everyAge;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
