let peopleNamesList = require("./country/state/city/index.js");

let getFirstNames = require("./utilities/utils/index.js");

let getPeopleInCity = (peopleNamesList, getFirstNames) => {
  return getFirstNames(peopleNamesList);
};
console.log(getPeopleInCity);

module.exports = getPeopleInCity;
