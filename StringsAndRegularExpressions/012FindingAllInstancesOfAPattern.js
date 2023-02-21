/* You want to find all instances of a pattern within a string and iterate over them.*/

/*Use a regular expression with the String.matchAll() method. The matchAll()
method returns an iterator that lets you loop over all the matches.
The next example uses a regular expression to find any word that begins with t and
ends with e, with any number of characters in between.*/

const searchString = 'Now is the time and this is the time and that is the time';
const regex = /t\w*e/g;
const matches = searchString.matchAll('is');

//iterating throught object iterator
/*for (const iterator of matches) {
    console.log(iterator.index);
}*/

//form object to array
const matches2 = [...searchString.matchAll(regex)];
console.log(matches2[0].index);

/*const list = [];

//printing form the iterator
for (const match of matches) {
 list.push(`at ${match.index} we found ${match[0]}`);
}

console.log(list); */
