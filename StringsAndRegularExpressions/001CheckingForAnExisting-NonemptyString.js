'use strict'

//You want to verify that a variable is defined, is a string, and is not empty before you use it.

const varString = 'word';
if (typeof varString === 'string'){
    console.log('es un string');
}

const varString2 = 5;
if (typeof varString2 === 'string'){
    console.log('es un string');
}else{
    console.log('no es un string');
}

//para verificar si el string tiene algo
const varString3 = '';
if (typeof varString3 === 'string' && varString3.length > 0){
    console.log('el string tiene letras o un espacio en blanco');
} else {
    console.log('no es un string valido')
}

const unknownVariable = new String('test');
console.log(unknownVariable[3]);

//con estos se puede preguntar no solo si es string sino si el string esta metido en un objeto
if (typeof unknownVariable === 'string' ||
 String.prototype.isPrototypeOf(unknownVariable)) {
 console.log('1');
}else{
    console.log('2');
}

if (unknownVariable) {
    /* We get here as long as:
    unknownVariable has been declared
    unknownVariable is not null
    unknownVariable is not the empty string ''
    */
   }
// NULL, UNDEFIENED Y EMPTY STRING salen false in javascript   
