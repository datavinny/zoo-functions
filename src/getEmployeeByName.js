const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  if (employeeName === undefined) {
    return {};
  }
  const { employees } = data; // array com os employees
  const filterFirstName = employees.find(
    ({ firstName, lastName }) =>
      firstName === employeeName || lastName === employeeName,
  );
  return filterFirstName;
}

console.log(getEmployeeByName('Emery'));

module.exports = getEmployeeByName;
