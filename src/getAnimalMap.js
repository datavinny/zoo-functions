const data = require('../data/zoo_data');

// const { species } = data;
// const spl = { NE: '' }; // speciesPerLocation

// const array = ['NE', 'NW', 'SE', 'SW'];
function getAnimalMap(options) {
  // if (options === undefined || !Object.keys(options).length ||options.includeNames !== undefined && options.includeNames === false ||options.sex !== undefined) {
  //   for (let index = 0; index < array.length; index += 1) {
  //     spl[array[index]] = species.filter(({ location }) => location === array[index]).map((element) => element.name);
  //   }
  //   return spl;
  // }
  // if (options.includeNames) {
  //   for (let index = 0; index < array.length; index += 1) {
  //     spl[array[index]] = species.filter(({ location }) => location === array[index]).map(({ name, residents }) => {
  //       const newObj = {};
  //       arrResidents = [];
  //       arrResidents.push(residents[index].name);
  //       newObj[name] = arrResidents;
  //       console.log(residents[index].name)
  //       return newObj;
  //     }); 
  //   }
  //   return spl;
  // }
  // return 'erro';
}

// console.log(getAnimalMap({ includeNames: true }));

module.exports = getAnimalMap;
