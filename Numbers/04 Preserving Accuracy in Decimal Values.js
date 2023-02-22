/*
All numbers in JavaScript are floating point values, which suffer minute rounding
errors with certain operations. In some applications (for example, when dealing with
amounts of money), these errors may not be acceptable.
*/

const sum = 0.1 + 0.2;
console.log(sum); 
//this is wrong

// la solucion es por ejemplo en sumas de dinero es llevar el valor a su mas minima exprecion (centavos)
// hacer la suma y volver a convetirlo a lo que necesite

/*
If you perform a lot of financial calculations, you can simplify your life by using a
third-party library like bignumber.js, which provides a customized numeric data type
that works a lot like the ordinary Number, but preserves exact precision for a fixed
number of decimal places.
*/