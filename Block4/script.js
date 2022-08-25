// Write the output with reason
const person = {
  firstName: 'John',
  lastName: 'Doe',
};

let person2 = person;

person.firstName = 'Arya';

console.log(person2.firstName); //"Arya"
console.log(person.firstName); // "Arya"
console.log(person.lastName); // "Deo"
console.log(person == person2); // true
console.log(person === person2); // true
console.log(person.lastName === person2.lastName); // true copy by reference

// Write the output with reason:
let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person };

person.firstName = 'Arya';
person.address.city = 'Navada';

console.log(personTwo.firstName); // "John"
console.log(person.firstName); // "Arya"
console.log(personTwo.lastName); // 'Doe'
console.log(person.firstName === personTwo.firstName); // false
console.log(person == personTwo); // false
console.log(person === personTwo); // false  creat a new memori address;
console.log(person.address === personTwo.address); // true 
console.log(person.address == personTwo.address); // true  same  address
console.log(personTwo.address.city); // "Navada"
console.log(person.address.city); // "Navada"
console.log(person.address.city == personTwo.address.city); // true

// Write the output with reason:

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let personTwo = { ...person, address: { ...person.address } };

person.firstName = 'Arya';
person.address.city = 'Navada';

console.log(personTwo.firstName); // 'John'
console.log(person.firstName); // 'Arya'
console.log(personTwo.lastName); // 'Doe'
console.log(person.firstName === personTwo.firstName); // false
console.log(person == personTwo); // false
console.log(person === personTwo); // false
console.log(person.address === personTwo.address); // false 
console.log(person.address == personTwo.address); //  false
console.log(personTwo.address.city); // 'San Jose'
console.log(person.address.city); // 'Navada'
console.log(person.address.city == personTwo.address.city); // false

// Clone the blogs variable into a new variable named clonedBlogs

let blogs = [
  {
    id: 1,
    title: 'Post #1',
    body: 'My first blog post',
  },
  {
    id: 2,
    title: 'Post #2',
    body: 'My second blog post',
  },
  {
    id: 3,
    title: 'Post #3',
    body: 'My third blog post',
  },
];

// Your code goes here

let clonedBlogs = [...blogs];

// Clone the question variable into a new variable named questionClone

var questions = [
  {
    prompt: 'Why is the sky blue?',
    responses: [
      'Because the color blue was on sale at Wallmart',
      'Because blue is the prettiest color',
      'Because the air molecules difract blue light more than any other color',
    ],
  },
  {
    prompt: 'Why are leaves usually green?',
    responses: [
      'So green caterpillars can hide better.',
      'Because leaves can more easily make energy with green light',
      "Because leaves absorb red and blue light so it's green that is reflected",
    ],
  },
];

// Your code goes here

let questionClone = [
  {...questions[0],responses:[
    ...questions[0].responses
 ]},
 {...questions[1],responses:[
  ...questions[1].responses
]},
]

// Clone the allBlogs variable into a new variable named allBlogsClone

var allBlogs = {
  id: 1,
  title: 'Alamofire JSON Serialization',
  body: 'All about serialization in Alamofire...',
  author: {
    id: 1,
    fullName: 'Jeff Potter',
    username: 'jpotts18',
  },
  comments: [
    {
      id: 1,
      body: 'Thanks for the help Jeff, this saved me hours',
    },
    {
      id: 2,
      body: 'Your welcome. I am happy to help!',
    },
  ],
};

// Your code goes here
 
let allBlogsClone = {...allBlogs,
author:{
  ...allBlogs.author
},
comments:[
  {...allBlogs.comments[0]},
  {...allBlogs.comments[1]},

]
}

// Clone the person variable into a new variable named clonedPerson

let person = [
  {
    input: { name: 'Ryan' },
    output: { name: 'Ryan' },
  },
  {
    input: { name: { first: 'Ryan', last: 'Haskell-Glatz' } },
    output: { firstName: 'Ryan', lastName: 'Haskell-Glatz' },
  },
  {
    input: { name: 'Ryan', age: 24 },
    output: { name: 'Ryan', age: 24 },
  },
  {
    input: {
      name: { first: 'Ryan', last: 'Haskell-Glatz' },
      birthday: { year: 1993, month: 'Nov' },
    },
    output: {
      firstName: 'Ryan',
      lastName: 'Haskell-Glatz',
      birthdayYear: 1993,
      birthdayMonth: 'Nov',
    },
  },
];

// Your code goes here

let clonedPerson = JSON.parse(JSON.stringify(person));

// Write a function named cloneObject that accepts an object and returns the clone of the object

function cloneObject(user) {
  return {...user}
}

// Run the test below to check your function

let user = {
  name: 'John',
  house: 'Stark',
  sisters: ['Arya', 'Sansa'],
};
let cloned = cloneObject(user);

let person = {
  firstName: 'John',
  lastName: 'Doe',
  address: {
    street: 'North 1st',
    city: 'San Jose',
    state: 'CA',
    country: 'USA',
  },
};

let clonedPerson = cloneObject(user);

console.log(
  `The user object is ${
    user == cloned ? `not clone` : `cloned successfully 😁👑`
  }`
);
console.log(
  `The person object is ${
    person == clonedPerson ? `not clone` : `cloned successfully 😁👑`
  }`
);