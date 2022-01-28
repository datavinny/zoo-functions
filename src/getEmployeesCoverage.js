const data = require('../data/zoo_data');

const { employees } = data;
const { species } = data;

const noParam = () => {
  // const allSpecies = [];
  // const allLocations = [];
  const infoAllEmployees = [];
  employees.forEach(({ firstName, lastName, id, responsibleFor }) => {
    const allSpecies = [];
    const allLocations = [];
    species.forEach(({ id, name, location }) => {
      responsibleFor.forEach((element) => {
        if (id === element) {
          allSpecies.push(name);
          allLocations.push(location);
        }
      });
    });
    const infoEmployees = { id };
    infoEmployees.fullName = `${firstName} ${lastName}`;
    infoEmployees.species = allSpecies;
    infoEmployees.locations = allLocations;
    infoAllEmployees.push(infoEmployees);
  });
  return infoAllEmployees;
};

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
  const employee = checkId(obj);
  const { firstName, lastName, id, responsibleFor } = employee;
  const speciesEmployee = [];
  const locationsEmployee = [];
  species.forEach(({ id, name, location }) => {
    responsibleFor.forEach((element) => {
      if (id === element) {
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
