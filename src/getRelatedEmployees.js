const data = require('../data/zoo_data');

const { employees } = data; // array com os employees

function isManager(employerId) {
  const filterManagers = employees.some(({ managers }) => {
    for (let index = 0; index < managers.length; index += 1) {
      if (managers[index] === employerId) {
        return true;
      }
    }
    return false;
  });
  return filterManagers;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const filterManagers = employees.filter(({ managers }) =>
    managers.includes(managerId));
  const nameEmployees = filterManagers.map(
    (element) => `${element.firstName} ${element.lastName}`,
  );
  return nameEmployees;
}

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
