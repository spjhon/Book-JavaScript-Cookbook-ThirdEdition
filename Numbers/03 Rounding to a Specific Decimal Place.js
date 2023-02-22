/*
You want to round a number to a certain precision (for example, 124.793 to 124.80 or
120).
*/

// You can use the Math.round() method to round a number to the nearest whole number:

const fractionalNumber = 19.48918;
const roundedNumber = Math.round(fractionalNumber);

console.log(roundedNumber);
// Now roundedNumber is 19

/* For example, if you want to round to two decimal places, the code becomes this: */

const fractionalNumber2 = 19.48938;
const numberToRound = fractionalNumber * (10**3);
let roundedNumber2 = Math.round(numberToRound);
roundedNumber2 = roundedNumber2 / (10**3);

console.log(roundedNumber2);
// Now roundedNumber is 19.49

