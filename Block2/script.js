// Understanding copy by reference
let brothers = ['John', 'Bran', 'Robb'];
let house = 'Stark';
let user = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user2 = {
  name: 'Arya',
  house: house,
  brothers: brothers,
};

let user3 = {
  name: 'Arya',
  house: 'Stark',
  brothers: ['John', 'Bran', 'Robb'],
};
// After going through above code answer the following with reason:
user.house === user2.house; //true
user.house == user2.house; // true
user.brothers === user2.brothers; //true
user.brothers == user2.brothers; // true
user.name == user2.name; // true
user.name === user2.name; // true
user.brothers == user3.brothers; // false
user.brothers === user3.brothers; // false
user.house === user2.house; // true
user.house === user3.house; // true
user.brothers[0] === user2.brothers[0]; //  true
user.brothers[0] === user3.brothers[0]; // true

// Copy the value of character variable into variable named characterOne and characterTwo.

// let character = {
//   charactorName: 'Sansa',
//   sisters: 1,
//   brothers: 4,
// };
// let characterOne = character;
// let characterTwo = character 

// Check the output of be/low code after copying. The output of all of all of the below should be true

// character === characterOne; 
// characterOne == characterTwo;
// characterTwo == character;

// Clone (no reference) the value of character variable into variables named characterThree and characterFour.
let character = {
  charactorName: 'Sansa',
  sisters: 1,
  brothers: 4,
};
let characterThree = {
    charactorName: 'Sansa',
    sisters: 1,
    brothers: 4,
  };
let characterFour = {
    charactorName: 'Sansa',
    sisters: 1,
    brothers: 4,
  };
// Your code
// Check your result by comparing the values: All the below result should be false.

character === characterThree;
characterThree == characterFour;
characterFour == character;