/* You have a string with several sentences, one of which includes a list of items. The list
begins with a colon (:), ends with a period (.), and separates each item with a comma
(,). You want to extract just the list.
Before:
This is a list of items: cherries, limes, oranges, apples.
After:
['cherries','limes','oranges','apples'] */

/*let fruits = list.split(',');
// now fruits has these elements: ['cherries', ' oranges', ' apples', ' bananas']*/

const sentence = 'This is one sentence. This is a sentence with a list of items:' +
'cherries, oranges, apples, bananas. That was the list of items.';
const start = sentence.indexOf(':');
const end = sentence.indexOf('.', start + 1);
console.log(end);

const list = sentence.slice(start + 1, end);
console.log(list);

let fruits = list.split(',');
console.log(fruits);

//deleteing white space
fruits = fruits.map(s => s.trim());
// now fruits has these elements: ['cherries', 'oranges', 'apples', 'bananas']
console.log(fruits);