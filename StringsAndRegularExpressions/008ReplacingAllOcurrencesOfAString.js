//You want to find all occurrences of a scpecific substring in a string, and replace 
//them with something else

//utilizar el replaceAll()

const storyText = 'I know not where I was born, save that the castle was' + ' infinitely old and infinitely horrible.';
const changedStoty = storyText.replaceAll('infinitely', 'somewhat');

console.log(changedStoty);