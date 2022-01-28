const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const checkId = (obj) => {
  const employee = employees.find(
    ({ firstName, lastName, id }) =>
      firstName === obj.name || lastName === obj.name || id === obj.id,
  );
  if (employee === undefined) {
    throw new Error('Informações inválidas');
  }
  return employee;
};

const getEmployeeInfo = (obj) => {
  const { firstName, lastName, id, responsibleFor } = checkId(obj);
  const speciesEmployee = [];
  const locationsEmployee = [];
  species.forEach(({ id: specieId, name, location }) => {
    responsibleFor.forEach((element) => {
      if (specieId === element) {
        speciesEmployee.push(name);
        locationsEmployee.push(location);
      }
    });
  });
  const infoEmployee = { id };
  infoEmployee.fullName = `${firstName} ${lastName}`;
  infoEmployee.species = speciesEmployee;
  infoEmployee.locations = locationsEmployee;
  return infoEmployee;
};

const noParam = () => {
  const infoAllEmployees = [];
  employees.forEach((employee) => {
    const infoEmployees = getEmployeeInfo(employee);
    infoAllEmployees.push(infoEmployees);
  });
  return infoAllEmployees;
};

function getEmployeesCoverage(obj) {
  if (obj === undefined) {
    return noParam();
  }
  return getEmployeeInfo(obj);
}

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
console.log(getEmployeesCoverage());

module.exports = getEmployeesCoverage;
