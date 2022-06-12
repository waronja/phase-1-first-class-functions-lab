// Declare the variable returnFirstTwoDrivers with const and assign an anonymous function to it. 

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};




// Declare a variable called selectingDrivers .
// This is an array containing two elements: 
// The two functions that we previously defined (returnFirstTwoDrivers() and returnLastTwoDrivers()).createFareMultiplier()

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// Declare a variable called createFareMultiplier . It returns a function, should multiply a given value using the created multiplier


const createFareMultiplier = function (multiplyValue) {
  return function (value) {
    return multiplyValue * value;
  };
};

// Declare a variable called createFareMultiplier . It returns a function, should multiply a given value using the created multiplier

const fareDoubler = createFareMultiplier(2);


// A variable that triples the fare of a given value.

const fareTripler = createFareMultiplier(3);

// A variable that returns diffrent drivers from the array.

const selectDifferentDrivers = function (drivers, driversToReturn) {
  return driversToReturn(drivers);
};

