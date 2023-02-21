/*You want to make the first letter of a string an uppercase letter, without changing the
rest of the string*/

//SOLUTION
/*Split off the first letter and capitalize it with String.toUpper(). Join the uppercase
letter to the remainder of the string, which you can get with String.slice():*/

const original = 'if you cut an orange, there is a risk it will orbisculate.';
const fixed = original[0].toUpperCase() + original.slice(1);
console.log(fixed);
// fixed = 'If you cut an orange, there is a risk it will orbisculate.';
