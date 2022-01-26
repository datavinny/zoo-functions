const data = require('../data/zoo_data');

const { species } = data; // array species
function countAnimals(animal) {
  if (animal === undefined) {
    let newObj = {};
    species.map((obj) => {
      newObj[obj.name] = obj.residents.length;
      return newObj;
    });
    return newObj;
  }
  const findSpecie = species.find(({ name }) => animal.specie === name); // obj da specie
  const { residents } = findSpecie; // array dos residents
  if (animal.sex !== undefined) {
    const filterSex = residents.filter(({ sex }) => animal.sex === sex);
    return filterSex.length;
  }
  return residents.length;
}

console.log(countAnimals());

module.exports = countAnimals;
