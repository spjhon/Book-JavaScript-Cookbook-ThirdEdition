//You want to parse a number in a string and convert it to the number data type.

//Siempre es recomendable si el numero es un numero o no

let numbers = "7abc"


for (let t = 0; t < numbers.length; t++) {
    let character = numbers.charAt(t);
    if (!isNaN(parseInt(character))) {
        console.log('is a number')
    }else{
        console.log('it not a number')
    }
} 

const stringData = '45.8';

// let x = stringData.trim() === '';
//console.log(x);

if (stringData.trim() === '') {
    console.log('esta vacio o solo hay espacio')
}else{
    // This is an all-whitespace or empty string
    console.log('no hay espacios y no esta vacio')

    const numberData = Number(stringData);

    if (isNaN(numberData)) {
        // It's NOT safe to process this data as a number
        console.log('NO se puede procesar')
    }else{
    // It's safe to process this data as a number
        console.log('Se puede procesar' + ' ' + (numberData + 0.1))

    };

};

//A PESAR DE TODO SE RECOMIENDA UTILIZAR LA LIBRERIA Numeral
   