// ! --------------------> JAVASCRIPT FULL COURSE <--------------------- ! \\

// document.write('hello World');
// alert('Hello World!');
// console.log('Hello World!');

// document.write({name: 'Yusuf'});
// alert({name: 'Yusuf'});
// console.log({name: 'Yusuf'});

// * I woke,? up early today.
// statements - sets of instructions.
// ? comment - shortcut cntrl + /

// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");
// console.log("hello world!");

// *  variables - most basic building blocks
// !Variables - store, access, modify === value
// !Declare, Assignment Operators, Assign Value
// !Assign value later, modify existing

// let Firstname = "Yusuf Jamal";
// console.log(Firstname);
// let address, zip, state;
// address = "1001 main Street";
// console.log(address);
// zip = '841505';
// console.log(zip);
// state = "(Bihar)";
// console.log(state);
// Firstname = "Yash Raaj";
// overwrite firstname
// console.log(Firstname, address, zip, state);

// ! Variables Naming Rules

// Can contains digits, letters, underscores, $
// must starts with a letter, $ or _

// no keyword
// cannot starts with numbers

// case sensitive - fullname VS Fullname

// camelCase or underscore

// ! LET VS CONST VS VAR

// * Using Var
//*  var value = "some value";
//* value = "some other value";

//* Using let
// let name = "Yusuf";
// name =  "Yash";
//* Using const (CONSTANT) - can't re-assign
// const Lastname = "Jamal";
// Lastname = "siddique"; !it gets error because we cannot re-assign constants

// console.log(value);
// console.log(name);
// console.log(Lastname);

// ! Quotation Marks

// ! String Concatenation - combination string values
// ! '' - backticks (template strings) easier options

// const name = 'yusuf';
// const lastname = 'Jamal';
// let fullname = name + ' ' + lastname;

// console.log('Hello there your full name is:' + fullname);

// const website =  'google';
// const url = 'http://www.' + website + '.com';
// console.log(url);

// const website =  'youtube';
// const url = 'http://www.' + website + '.com';
// console.log(url);

// ! Numbers
// ! Loosely TYped = don't declare type

// const number = 34;
// let pants = 2.466;
// pants = 'are great';
// const number2 = 2.456;
// const number3 = '4.567';

// const add = number + number3;
// const addition = number + number2;
// const sub = number - number2;
// const multiply = number * number2;
// const div = number / number2;

// console.log(addition);
// console.log(add);
// console.log(sub);
// console.log(multiply);
// console.log(div);

// console.log(number);
// console.log(number2);
// console.log(number3);

// ! Numbers
// ! +=, -=, *=, /=, --, %
// ! Modulus (%) operators returns the remainder after integer division

// let number = 40;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number += 5;
// number -= 5;
// number --;
// number --;

// const slices = 10;
// const children = 4;
// const amount = slices % children; /* Modulus (%) gives us the remainder of the slice */

// const slices = 10;
// const children = 3;
// const amount = slices / children; /* but divide gives the actual division */

// const random = 4 + 6 + 10 * 10; /* result = 110 because first its multiply then add */
// const random2 = (4 + 6 + 10) * 10; /* result = 200  in this case the it is seperate from each other */

// console.log(random);
// console.log(random2);

// console.log(amount);

// ! Implicit Type Conversion

// const name = 'Yusuf';
// const lastName = 'Jamal';
// const fullName = name + ' ' + lastName;
// console.log(fullName);

// const number = 4;
// const number2 = 10;
// const result = number + number2;
// console.log(result);

// const value = name - lastName;
// console.log(value);

// let number4 = '23';
// const result2 = number3 - number4;
// let number3 = '10';
// *  it is a string number as we can see but the javascript convert the following result in number
// * note- if we add (+) number3 to number4 the result will be 1023.

// console.log(result2);

// let number3 = 10;
// let number4 = 23;
// * 100 lines
// number4 = 'pants';
// const result2 = number3 + ' ' + number4;
// console.log(result2);

// const randomNumber = 14;
// document.querySelector('.form').addEventListener('submit', function(e) {
//     e.preventDefault();
//     let value = document.getElementById('amount').value;
//     value = parseFloat(value);
//     console.log('Input Value Type');
//     console.log(value);
//     console.log('Sum of Two values');
//     console.log(randomNumber + value);
// });

// ! Data Types - 7 Total
// ! Primitive -- Strings, Numbers, Null, Undefined, Symbol

// ! Objects -- Arrays, Functions, Objects

// ! Typeof -- operators (typeof variables) (typeof value)

// * String
//  const text = 'some text';

// * Number
// const number = 45;

// * Boolean
// let value1 = true;
// let value2 = false;

// * Null
// const result = null;

// * Undefined
// let name;

// * Symbol(ES6)
// console.log(typeof text);
// console.log(typeof number);
// console.log(typeof true);
// console.log(typeof value1);
// console.log(typeof value2);
// console.log(typeof null);
//  console.log(typeof name);

// ! Arrays, Functions and objects
// ! Arrays - [], 0 index based

// const friend1 = 'Minhaz';
// const friend2 = 'Minhaz';
// const friend3 = 'Minhaz';
// const friend4 = 'Minhaz';

// const friends = ['john','peter','bob','susy', 405, undefined, null];
// console.log(friends[2]);
// console.log(friends[0]);
// console.log(friends[5]);

// let bestFriend = friends[2];
// friends[4] = 'Yusuf'
// console.log(bestFriend);
// console.log(friends);
// console.log(friends[4]);

// ! Arrays, Functions and Objects
// ! Functions - Declare, invoke
// ! params - when declare/define
// ! Placeholders, local vars
// ! arguments - when invoke/call/run
// ! use vars/values, multiple params, undefined

// const yusuf = "Yusuf";
// const sonu = "sonu";
// const shadab = "shadab";
// function greet(name) {
//     console.log('Hello there' + ' ' + name);
// }

// // greet Yusuf
// greet("yusuf");
// // greet Sonu
// greet("sonu");
// // greet shadab
// greet("shadab");
// greet(3);

// ! Array, Functions and objects
// ! return
// ! default undefined, shortcuts, ignores after

// 1 inch 2.54cm
// const wallHeight = 80;

// function calculate(value) {
//     const newValue = value * 2.54;
//     // console.log('The value in cm is : ' + value * 2.54 + 'cm');
//     // return newValue;
//     return value * 2.54;
//           /* you can return anything that you want. */
// }

// const width = calculate(100);
// const height = calculate(wallHeight);

// const dimensions = [width, height];
// console.log(dimensions);

// ! Arrays, Functions and objects
// ! expressions - another way to define a function
// ! create a variable, assign to FUNCTION (not value), use var
// ! diff - hoisting, use - arrow func, libraries

// ! Function definition/declaration
// function addValues(num1, num2) {
//     return num1 + num2;
// }

// const firstValue = addValues(3, 4);
// const secondValue = addValues(12, 34);
// const thirdValue = addValues(20, 10);
// // * function expression
// const add = function (num1, num2) {
//     return num1 + num2;
// }

// // const Third value (5, 6)
// const values = [firstValue, secondValue, thirdValue, add(5, 6)]; /* use square brackets otherwise it prints only last value */
// console.log(values);
// const multiply = (num1, num2) => num1 * num2;

//! Array, Functions and objects
//! Objects - key/value pairs method
//! dot notation

// const person = {
//     name: 'Yusuf',
//     lastName: 'Jamal',
//     age: 18,
//     education: true,
//     married: false,
//     siblings: ['sohail', 'irfan', 'obaid', 'tauqir'],
//     greeting(){
//         console.log('Hello My name is YUSUF');
//     },
// };

// const age = person.age;
// console.log(age);
// person.name = 'Yash';
// console.log(person.name);
// console.log(person.siblings[3]);
// person.greeting();

// ! Conditional Statements
// ! Comparison operators
// ! >, <, <=, >=, ==, ===, !=, !===
// ! else if and !
//* if(){} Syntax

// const value = 2 > 1;
// // console.log(typeof value);
// const value2 = 1 > 2;
// if(value){
//     console.log("My condition is met");
// } else {
//     console.log("hii people");
// }

// ! Conditional Statements
// ! Comparison operators
// ! >, <, <=, >=, ==, ===, !=, !===
// ! else if and !

// const num1 = 6;
// const num2 = 6;
// const result = num1 >= num2;

// const value = true;
// if (!value){ //? the exclamation mark (!) return opposite of given value to the variable (value) if it is true it returns false or if it is false it returns true.
//     console.log("Value is false");
// }

// if(num1 < num2) {
//     console.log("first number is bigger than  second number");
// } else if (result){
//     console.log("first number equals to second number");
// } else {
//     console.log("second number is bigger than first number");
// }

// ! Conditional Statements
// ! Comparison operators
// ! >, <, <=, >=, ==, ===, !=, !===
// ! == checks only value
// ! === checks value and type

// const num1 = 6;
// const num2 = 10;

// // const value = num1 == num2;
// const value = num1 != num2; // not equal to
// const value2 = num1 !== num2;
// console.log(value);
// console.log(value2);

// // * Ex:- Conditional Ternary operator
// let Age = 18;
// let voteable = (Age < 18) ? "Too young to vote" : "Old enough to vote";
// console.log(voteable);

// ! Logical Operators
// ! (|| OR), (&& AND), !

// const name = 'Yusuf';
// const age = 18;

// if(name === 'Yash' || age === 18){ //? if any of the value is true, it prints Hey there user!
//     console.log("Hey there user!");
// }else{
//     console.log("wrong user!");
// }

// if(name === 'Yusuf' && age === 18){ //? both the values should be match
//     console.log("Hey there user!");
// }else{
//     console.log("wrong user!");
// }

// if(name !== 'Yash' && age === 18){ //? it prints only if the name value not match and the age value matched
//     console.log("Hey there user!");
// }else{
//     console.log("wrong user!");
// }

// TODO: ! Switch
// ! dice value : 1 - 6

// const dice = 4;

// switch (dice) {
//     case 1:
//         console.log("you got one!");
//         break;
//     case 2:
//         console.log("you got two!");
//         break;
//     case 3:
//         console.log("you got three!");
//         break;
//     case 4:
//         console.log("you got four!");
//         break;
//     case 5:
//         console.log("you got five!");
//         break;
//     default:
//         console.log("you got six!");

// }

// //* else if
// if (dice === 1) {
//     console.log("you got one");
// } else if (dice === 2) {
//     console.log("you got two");
// } else {
//     console.log("you did not roll the dice.");
// }

//* all if
// if (dice === 1) {
//     console.log("you got one");
// }
// if (dice === 2) {
//     console.log("you got two");
// }
// if (dice < 1 || dice > 6) {
//     console.log("you did not roll the dice.");
// }

// ! loops
// ! repeatedly run a block of code while condition is true
// ! while loop
// ! TURN OFF AUTOSAVE

// let amount = 10;

// while(amount > 0){
//     console.log(' I have ' + amount + " dollars and I'm going to the mall.");
//     amount--; //escape from endless loop
// }

// ! loops
// ! repeatedly run a block of code while condition is true
// ! do while loop
// ! code block first, condition second
// ! run at least

// let money = 0;

// do{
//     console.log('You have ' + money + ' dollars in your pocket');
//     money++;
// } while (money < 10);

// ! Loops
// ! repeatedly run a block of code while condition is true
// ! for loop

// let i;
// for (i = 0; i < 10; i++){
//     console.log('and the number is : ' + i);
// }

// for ( let number = 11; number >= 0; number--){
//     console.log('and the number is : '+ number);
// }

// ! String properties and methods
// ! wrapper string methods, Don't memorize try to learn

// let text = "  Yusuf Jamal ";
// let result = text.length; //* it also add white spaces in the length
// // console.log(result);
// // console.log(text.length);
// console.log(text.toLowerCase());
// console.log(text.toUpperCase());
// console.log(text.charAt(1));
// console.log(text.indexOf('Y'));
// console.log(text);
// console.log(text.trim()); //* removes the leading and trailing white spaces
// console.log(text.startsWith('yusuf'));
// console.log(text.trim().toLowerCase().startsWith('yusuf')); //* removes the white spaces, lower the case and then starts with 'yusuf' and then it shows true
// console.log(text.includes('suf')); //* console: Yes bro, this is true I got it in yusuf
// console.log(text.slice(0, 6)); //* it shows the text from 0 to 6
// console.log(text.slice(-4));
// console.log(text.replace("Yusuf", "Yash")); //* replaces Yusuf with Yash

// const person = {
//     name: 'Yusuf', // property
//     greeting() {
// method
//         console.log("Hey, I'm Peter");
//     },
// };

// console.log(person);

// console.log(person.name);
// person.greeting();

// ! Template Literals - ES6+
// ! Backtick Characters `` - above the tab key  ( left from 1 )
// ! Interpolation ${} - insert expression value ${}

// const name = ' yusuf ';
// const age = 18;
// const sentence = "Hey it's " + name + " I am " + age + " years old.";
// const value = `Hey It's ${name} I am ${age} years old, and here is some math ${
//         4 + 4
// }`; // interpolation

// console.log(value);
// console.log(sentence);

// ! Arrays properties and methods

// let names = ['yusuf', 'sohail', 'asif', 'minhaz', 'sadik', 'sajid'];

// console.log(names.length);
// // console.log(names[5]);
// console.log(names[names.length - 1]);

//* Concat - This method merges two or more arrays together and returns a new array.
// const lastNames = ['onion', 'banana', 'pepper']
// const allNames = names.concat(lastNames);
// console.log(allNames);
// // reverse
// console.log(allNames.reverse());

//* unshift - add items to the beginning of an array and returns a new length of the array.
// allNames.unshift('shahbaj');
// allNames.unshift('rohit');
// console.log(allNames);

//* shift - removes items from the beginning of an array and returns the removed element.
// allNames.shift();
// allNames.shift();
// console.log(allNames);

//* push - add items to the end of an array and returns a new length of the array.
// allNames.push('sajid');
// console.log(allNames);

//* pop  - removes items from the end of an array and returns the removed element.
// allNames.pop();
// allNames.pop();
// allNames.pop();
// allNames.pop();
// console.log(allNames);

// // splice - mutates original array
// const specificNames = allNames.splice(2, 2);
// console.log(specificNames); // removes all the arrays except from 2 to 2 arrays
// console.log(allNames); // show only arrays except onion & sajid

//* sort - sorts the elements in alphabetical order
// const fruits = ['Banana', 'Apple', 'Orange', 'Mango']
// console.log(fruits.sort());

// ! Array and for loop

// const names = ['yusuf', 'sohail','irfan', 'obaid', 'musharrat' ];
// const lastName = 'Siddique';
// let newArray = [];

// // for loop
// for(let i = 0; i < names.length; i++){
//         console.log(i);
//         console.log(names[i]);
//         // newArray.push(names[i]);
//         const fullName = `${names[i]} ${lastName}`
//         newArray.push(fullName); //* push add new elements to the array
// };

// console.log(names);
// console.log(newArray);

// ! Functions, return, if, array, for loop

// const gas = [40, 10, 100, 60];
// const food = [10, 40, 50];

// function calculateTotal(arr) {
//   let total = 0;
//   for (let i = 0; i < arr.length; i++) {
//     total += arr[i];
//   }
//   if (total > 500){
//         console.log(`Whoa! You are spending too much.`);
//         return total;
//   }
//   console.log(`You are good total is less than 100`);

//   return total;
// }

// let gasTotal = calculateTotal(gas);
// let foodTotal = calculateTotal(food);
// let randomTotal = calculateTotal([100, 4000, 300, 1]);

// console.log({
//   gas: gasTotal,
//   food: foodTotal,
//   random: randomTotal,
// });

// ! reference Vs Value
// ! Primitive data types
// ! String, Boolean, Numbers, Symbol, Undefined, Null
// ! Arrays, Functions, Objects = object
// ! Typeof

// ? When assigning primitive data type value to a variable any changes that are made directly to that value, Without affecting the original value

// const number = 1;
// let number2 = number;
// number2 = 7;
// console.log(`The first number is ${number}`);
// console.log(`The second number is ${number2}`);

// ? When assigning non-primitive data type value to a variable is done by reference so any changes will affect all the references

// let person = { name: 'Yusuf' };
// // let person2 = person;
// let person2 = {...person};
// person2.name = "Yash";

// console.log(`The name of the first person is ${person.name}`);
// console.log(`The name of the second person is ${person2.name}`);

// ! Null and Undefined
// ! both represents "no value"

// ! Undefined - " Javascript can not find value for this"

// ! variable without value
// ! missing function arguments
// ! missing objects properties

// ! Null - "developer sets the value"

// let number = 20 + null; //* 20 + 0;
// console.log(number); // result = 20

// let number2 = 20 + undefined; //* 20 + 0;
// console.log(number2); // result = NaN

// ! Truthy and Falsy
// ! "", '', ``, 0, -0, null, undefined, false, NaN

// const bool = true;
// const bool2 = 2 > 1;
// if (bool) {
//   console.log("Hey It's works.");
// }
// if (bool2) {
//   console.log("Hey it is also works.");
// }

// const text = 'yusuf'; // result = hey the value is truthy!
// const text = 'y'; // result = hey the value is truthy!

// const text = ' '; // result = hey the value is falsy!

// if (text){
//         console.log("hey the value truthy!");
// }
// else {
//         console.log("hey the value falsy!");
// }

// ! unary operator - typeof
// let text = 'some text';
// console.log(typeof text);

// ! binary operator - assignment
// let number = 3;
// let number2 = 2 + 5;

// ! ternary operator
// ! condition ? (run if true) : (run if false)
// * syntax - variablename = (condition) ? value1 : value2

// const value = 2 < 1;

// value ? console.log("value is true") : console.log("value is false"); // Example:

// if (value){
//         console.log("value is true");
// } else {
//         console.log("value is false");
// }

// ! Global scope vs  local scope

// ? Global scope --
// ! any variable outside the code block {} is said to be in global scope
// ! can be access anywhere in the program

// let name = 'yusuf';
// name = 'peter';

// function calculate() {
//     console.log(name);
//     name = 'orange';
//     function inner (){
//         name = `inner name value`;
//         console.log(`this is from inner name value ${name}`);
//     }
//     inner();
// }

// if (true) {
//     console.log(name);
//     name = `pants`;
// }
// calculate();
// console.log(` my name is ${name} I'm awesome `);

// ? Local scope --
// ! variable declared inside a {} block cannot be accessed from the outside block
//! if - NOT VAR

// let name = 'yusuf';

// function calculate() {
//      const name = 'yash';
//      const age = 20;
//      // codes goes here
//      becomesGlobal = 'global variable';
// }
// calculate();
// console.log(becomesGlobal);

// if (true) {
//     const name = 'yusuf';
// }

// console.log(` my name is ${name} I'm awesome `);

// ! Variable lookup -- Check on internet for more info.
// ! {} - code block

// const GlobalNumber = 5;

// function add(num1, num2)
// {
//     const GlobalNumber = 20;
//     const result = num1 + num2 * GlobalNumber;

//     function multiply()
//     {
//         const GlobalNumber = 100;
//         const multiplyResult = result * GlobalNumber;
//         console.log(multiplyResult);
//     }
//     multiply();
//     return result;
// }

// console.log(add(3, 4));

//! Callback functions, higherOrder functions, function as first class Objects\Citizens
//! functions are the first class objects - stored in a variable (expressions), passed as an argument to another function, return from the function (closures)

//* Higher Order functions - accepts another functions as an argument and return another function as a result

//* Callback functions - passed to a another function as an argument and executed inside that function

// function greetMorning(name){
//     const myName = `Yusuf`;
//     console.log(`Good Morning ${name}, my name is ${myName} `);
// }
// function greetAfternoon(name){
//     const myName = `Shahbaj`;
//     console.log(`Good Afternoon ${name}, my name is ${myName} `);
// }
// greetMorning(`Yash`);
// greetAfternoon(`Minhaz`);

// function morning(name){
//     return `good morning ${name.toUpperCase()}`;
// }

// function greet(name, cb){
//     const myName = `Yusuf`;
//     console.log(`${name}, my name is ${myName}`);
//     cb();
// }

// greet('minhaz',morning);
// greet('shahbaj',morning);

// TODO can't understand this topic so check this out again to understand better.

//! Powerful Array methods
//! forEach, map, filter, find, reduce
//! Iterate over array - not for loop requirement
//! accept CALLBACK function as an argument and, calls callback against each item in a array. Reference Item in the Callback Parameter.

// const numbers = [0, 1, 2, 3, 4];

// //show all Numbers
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
// }

// //* forEach
// //* does not return new array

// const people = [
//     {name:'bob', age: 22, position:'developer'},
//     {name:'peter', age: 27, position:'designer'},
//     {name:'susan', age: 34, position:'the boss'}
// ];

// function showPerson(person){
//     console.log(person.position.toUpperCase());
// }

// // people.forEach(showPerson);
// people.forEach(function (item){
//     console.log(item.position.toUpperCase());
// });

//* map
//* does return a new array
//* does not change size of new array
//* use values from original array when making new one

// const people = [
//   { name: "bob", age: 22, position: "developer" },
//   { name: "peter", age: 27, position: "designer" },
//   { name: "susan", age: 34, position: "the boss" },
//   { name: "anna", age: 25, position: "secretary" },
// ];
// const ages = people.map(function (person) {
//   return person.age + 20;
// });

// const newPeople = people.map(function (person) {
//     return {
//         firstName: person.name.toUpperCase(),
//         oldAge: person.age + 20, 
//     };
// });

// console.log(newPeople);

// const names = people.map(function(person){
//     return `<h1>${person.name}</h1>`;
// });

// document.body.innerHTML = names.join('');

//  console.log(names);


//* filter
//* can manipulate the size of new array
//* returns based on the condition

const people = [
  { name: "bob", age: 22, position: "developer" },
  { name: "peter", age: 27, position: "designer" },
  { name: "susan", age: 34, position: "the boss" },
  { name: "anna", age: 25, position: "secretary" },
];

const youngPeople = people.filter(function(person){
    return person.age <= 25;
});

// const developers = people.filter(function(person){
//     return person.position === "developer";
// });
const developers = people.filter(function(person){
    return person.position === "senior developer"; //? it prints empty string bcz there is no senior developer in position array.
});

console.log(developers);
console.log(youngPeople);