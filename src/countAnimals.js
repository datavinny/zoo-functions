const data = require('../data/zoo_data');

function countAnimals(animal) {
  const { species } = data; // array species
  if (animal === undefined) {
    const totalSpecie = species.map((obj) => {
      const newObj = {};
      newObj[obj.name] = obj.residents.length;
      return newObj;
    });
    return totalSpecie;
  }
  const findSpecie = species.find(({ name }) => animal.specie === name); // obj da specie
  const { residents } = findSpecie; // array dos residents
  if (animal.sex !== undefined) {
    const filterSex = residents.filter(({ sex }) => animal.sex === sex);
    const totalSpecie = filterSex.length;
    return totalSpecie;
  }
  const totalSpecie = residents.length;
  return totalSpecie;
}

console.log(countAnimals({ specie: 'penguins' }));

module.exports = countAnimals;
