var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jen";
nameLet = "toto";
console.log("nameLet:", nameLet);

const nameConst = "Franck";
console.log("nameConst", nameConst);

function getPetName() {
  var petName = "Hal";
  return petName;
}

const petName = getPetName();
console.log(petName);

const fullName = "Andrew Mead";
let firstName;

if (fullName) {
  firstName = fullName.split(" ")[0];
}

console.log(firstName);
