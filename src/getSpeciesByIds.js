const data = require('../data/zoo_data');

function getSpeciesByIds(...ids) {
  if (ids === undefined) {
    return [];
  }
  // retorna => array vazio
  // const filterSpecies = data.species.filter(({ id }) => id === ids);

  //  retorna => um array a mais
  const filterSpecies = [];
  for (let index = 0; index < ids.length; index += 1) {
    filterSpecies.push(data.species.find(({ id }) => id === ids[index]));
  }
  const result = filterSpecies.filter((e) => e);
  return result;
}

console.log(
  getSpeciesByIds(
    '0938aa23-f153-4937-9f88-4858b24d6bce',
    'e8481c1d-42ea-4610-8e11-1752cfc05a46',
  ),
);

module.exports = getSpeciesByIds;
