const data = require('../data/zoo_data');

const { species } = data;
const { employees } = data;

function getOldestFromFirstSpecies(employeeId) {
  const employee = employees.find(({ id }) => id === employeeId);
  const { responsibleFor } = employee;
  const filterResponsibleFor = species.find(
    ({ id }) => id === responsibleFor[0],
  );
  const { residents } = filterResponsibleFor;
  const boxOldest = residents.reduce((previousValue, currentValue) => {
    if (currentValue.age >= previousValue.age) {
      return currentValue;
    }
    return previousValue;
  });
  const oldest = [];
  oldest.push(boxOldest.name);
  oldest.push(boxOldest.sex);
  oldest.push(boxOldest.age);
  return oldest;
}

// console.log(getOldestFromFirstSpecies('c5b83cb3-a451-49e2-ac45-ff3f54fbe7e1'));
console.log(getOldestFromFirstSpecies('4b40a139-d4dc-4f09-822d-ec25e819a5ad'));

module.exports = getOldestFromFirstSpecies;
