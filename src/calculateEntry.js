const data = require('../data/zoo_data');

function countEntrants(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const findChild = entrants.filter((obj) => obj.age < 18).length;
  const findAdult = entrants.filter(
    (obj) => obj.age >= 18 && obj.age < 50,
  ).length;
  const findSenior = entrants.filter((obj) => obj.age >= 50).length;

  const newObj = { child: 0 };
  newObj.child = findChild;
  newObj.adult = findAdult;
  newObj.senior = findSenior;
  return newObj;
}

function calculateEntry(entrants) {
  if (entrants === undefined || Object.keys(entrants).length === 0) {
    return 0;
  }
  const { prices } = data;
  const entradas = countEntrants(entrants);
  const sum = entradas.child * prices.child
    + entradas.adult * prices.adult
    + entradas.senior * prices.senior;
  return sum;
}

const entrants = [
  { name: 'Lara Carvalho', age: 5 },
  { name: 'Frederico Moreira', age: 5 },
  { name: 'Pedro Henrique Carvalho', age: 5 },
  { name: 'Maria Costa', age: 18 },
  { name: 'Núbia Souza', age: 18 },
  { name: 'Carlos Nogueira', age: 50 },
];

console.log(calculateEntry(entrants));

module.exports = { calculateEntry, countEntrants };
