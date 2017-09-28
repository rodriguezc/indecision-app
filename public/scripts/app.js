"use strict";

console.log("SALUT");

//Argments objects - no longer bound with arrow functions

var add = function add(a, b) {
  //console.log(arguments);
  return a + b;
};

console.log(add(55, 1, 3));

var user = {
  name: "Andrew",
  cities: ["Geneva", "Lausanne", "Dublin"],
  printPlacesLived: function printPlacesLived() {
    var _this = this;

    return this.cities.map(function (city) {
      return _this.name + " has lived in " + city;
    });
  }
};
console.log(user.printPlacesLived());

// Challenge area
var multiplier = {
  numbers: [10, 20, 30],
  multiplyBy: 3,
  multiply: function multiply() {
    var _this2 = this;

    return this.numbers.map(function (number) {
      return number * _this2.multiplyBy;
    });
  }
};

console.log(multiplier.multiply());
