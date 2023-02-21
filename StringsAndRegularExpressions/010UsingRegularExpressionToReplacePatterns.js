/* You want to search a string for a pattern, rather than an exact sequence of characters.
You then want to create a new string, with the pattern replaced. */

// use Stringreplace() or String.replaceAll() wich supports regular expressions

/* For example, consider the regular expression pattern t\w{2}e. This translates into
look for any sequence of characters beginning with t, ending with e, and containing two
other alphanumeric characters. The solution matches time, but also matches tame. */

//Regular expressions are like a mini language.

const originalString = 'Now is the time, this is the tame';
const regex = /t\w{2}e/g;
const newString = originalString.replaceAll(regex, 'place');
// newString = 'Now is the place, this is the place'
