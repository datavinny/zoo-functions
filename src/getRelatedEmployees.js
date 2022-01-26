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
  const nameEmployees = [];
  employees.filter(({ firstName, lastName, managers }) => {
    for (let index = 0; index < employees.length; index += 1) {
      if (managers[index] === managerId) {
        nameEmployees.push(`${firstName} ${lastName}`);
      }
    }
    return nameEmployees;
  });
  return nameEmployees;
}

module.exports = { isManager, getRelatedEmployees };
