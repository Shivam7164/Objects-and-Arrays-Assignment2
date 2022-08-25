// What will be the output and explain the reason.
let obj = { name: 'Arya' };
obj = { surname: 'Stark' };
let newObj = { name: 'Arya' };
// let user = obj; 
let arr = ['Hi'];
let arr2 = arr;
// Answer the following with reason after going through the above code:

[10] === [10] //false
// What is the value of obj? // answer
obj == newObj// false
obj === newObj// false
user === newObj// false
user == newObj// false
user == obj// true
arr == arr2// true
arr === arr2// true

// What's will be the value of person1 and person2 ? Explain with reason. Draw the memory representation diagram.

function personDetails(person) {
  person.age = 25;
  person = { name: 'John', age: 50 };
  return person;
}
var person1 = { name: 'Alex', age: 30 };
var person2 = personDetails(person1);
console.log(person1);// { name: 'Alex', age: 30 };
console.log(person2);//// same memory location 
// What will be the output of the below code:
var brothers = ['Bran', 'John'];
var user = {
  name: 'Sansa',
};
/*user.brothers = brothers;*/   user = {
    name: 'Sansa',
    brothers:['Bran', 'John']
  };
brothers.push('Robb'); // 3
console.log(user.brothers === brothers); //false. 
console.log(user.brothers.length === brothers.length); // false
