// You want to trim extra spaces that pad the beginning or end of a string.

//SOLUTION
/*Use the String.trim() method. It removes all whitespace from both ends of a string,
including spaces, tabs, no-break spaces, and line terminator characters.*/

const paddedString = ' The road is long, with many a winding turn. ';
const trimmedString = paddedString.trim();

console.log(trimmedString);
