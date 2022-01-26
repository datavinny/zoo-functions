const data = require('../data/zoo_data');

function isManager(employerId) {
  const { employees } = data; // array com os employees
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
  const { employees } = data; // array com os employees
  const nameEmployees = [];
  const filterManager = employees.filter(
    ({ firstName, lastName, managers }) => {
      for (let index = 0; index < employees.length; index += 1) {
        if (managerId === managers[index]) {
          nameEmployees.push(`${firstName} ${lastName}`);
        }
        return nameEmployees;
      }
    },
  );
  return nameEmployees;
}

console.log(getRelatedEmployees('0e7b460e-acf4-4e17-bcb3-ee472265db83'));

module.exports = { isManager, getRelatedEmployees };
