// Code your solution in this file!
// Return the first two drivers from an array
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0, 2);
  };
  
  // Return the last two drivers from an array
  const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
  };
  
  // Array containing the two functions
  const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
  
  // Higher-order function that returns a function for fare multiplication
  const createFareMultiplier = function(multiplier) {
    return function(fare) {
      return fare * multiplier;
    };
  };
  
  // Function to double the fare
  const fareDoubler = createFareMultiplier(2);
  
  // Function to triple the fare
  const fareTripler = createFareMultiplier(3);
  
  // Function to select different drivers based on the function passed
  const selectDifferentDrivers = function(arrayOfDrivers, driverFunction) {
    return driverFunction(arrayOfDrivers);
  };
  
  // Export the functions for testing
  module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
  };
  