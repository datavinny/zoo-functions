const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, minAge) {
  const filterName = data.species.filter(({ name }) => name === animal);
  console.log(filterName);

  const everyAge = filterName.every(({ residents: { age } }) => age >= minAge);
  return everyAge;
}

console.log(getAnimalsOlderThan('otters', 7));

module.exports = getAnimalsOlderThan;
