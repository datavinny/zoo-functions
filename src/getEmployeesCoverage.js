const data = require('../data/zoo_data');

// const { employees } = data;
// const { species } = data;

function getEmployeesCoverage(obj) {
  // if(obj === undefined) {

  // }
  // const employee = employees.find(({ firstName, lastName, id }) => firstName === obj.name || lastName === obj.name || id === obj.id);
  // if (employee === undefined) {
  //   throw new Error('Informações inválidas');
  // }
  // const { firstName, lastName, id } = employee;
  // const fullName = `${firstName} ${lastName}`;
  // const { responsibleFor } = employee;
  // const speciesEmployee = [];
  // const locationsEmployee = [];
  // species.forEach(({ id, name, location }) => {
  //   for (let index = 0; index < responsibleFor.length; index += 1) {
  //     if (id === responsibleFor[index]) {
  //       speciesEmployee.push(name);
  //       locationsEmployee.push(location);
  //     }
  //   }
  // });
  // const result = {};
  // result.id = id;
  // result.fullName = fullName;
  // result.species = speciesEmployee;
  // result.locations = locationsEmployee;
  // return result;
}

// console.log(getEmployeesCoverage({ name: 'Sharonda' }));
// console.log(getEmployeesCoverage({ name: 'Spry' }));
// console.log(getEmployeesCoverage({ id: '4b40a139-d4dc-4f09-822d-ec25e819a5ad' }));

module.exports = getEmployeesCoverage;
