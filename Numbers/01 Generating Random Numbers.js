//You want to generate a random whole number that falls in a set range (for example, from 1 to 6).

//use the Math.random() method

let min = 6
let max = 1

const randomNumber = Math.floor(Math.random() * (max - min + 1) ) + min;
console.log(randomNumber);


//For example, if you want to pick a random number between 1 and 6, the code becomes:
const randomNumber2 = Math.floor(Math.random()*6) + 1;
console.log(randomNumber2);

//Producing decimals
const randomNumber3 = Math.random();
console.log(randomNumber3);
