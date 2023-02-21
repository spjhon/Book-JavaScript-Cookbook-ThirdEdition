//You want to check if one string cotins another substring

//Se recomienda utilizar el string.includes()

const searchString = 'infinitely';
const fullText = 'I know not where I was born, save that the castle was' + ' infinitely old and infinitely horrible.'

if (fullText.includes(searchString)){
    console.log('founded');
} else {
    console.log('not found');
}
//ojo, eso es case sensitive, para case insensitive utilizar toLowerCase() primero
//para saber donde fue encontrado utilizar el indexOf()


