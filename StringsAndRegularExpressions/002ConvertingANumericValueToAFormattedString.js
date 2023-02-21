'use strinc'

// You want to create a string representation of a number.
// absolutamente todos los objetos en javascript posee un toString() method incluido el objeto Number.

const someNumber = 42.2365447;
const someString = someNumber.toString();

console.log(someNumber);
console.log(someString);

//estos otros metodos es solo para los numeros
//el toFixed(), el toExponential(), el toPrecision()
const fixedString = someNumber.toFixed(2);
console.log(fixedString);
//Lets you specify the number of digits to keep after the decimal point.

//para darle un formato tipo moneda teniendo en cuenta ciertas convenciones
const formatter = new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' });
const someNumber2 = 1242.0005;
const moneyString = formatter.format(someNumber2);
console.log(moneyString);


//existe una libreria llamada Numeral.js para los formatos
