// You need to work with very large integers (above 2**53), without losing precision.

/* Use the BigInt data type, which can hold integers of any size, limited only by system
memory (or the BigInt implementation of the JavaScript engine you’re using).
You can create a BigInt in two ways. You use the BigInt() function, like this: */

// Create a BigInt and set it to 10

const bigInteger = BigInt(10);
console.log(bigInteger);
// Or you can add the letter n to the end of a number:
const bigInteger2 = 10n;
console.log(bigInteger2);

// Ordinarily, large integers suffer from imprecision
const maxInt = Number.MAX_SAFE_INTEGER // Probably about 9007199254740991
console.log(maxInt + 1); // 9007199254740992 (reasonable)
console.log(maxInt + 2); // 9007199254740992 (not a typo, this seems wrong)
console.log(maxInt + 3); // 9007199254740994 (sure)
console.log(maxInt + 4); // 9007199254740996 (wait, what now?)
// BigInts behave more reliably
const bigInt = BigInt(maxInt);
console.log(bigInt + 1n); // 9007199254740992 (as before)
console.log(bigInt + 2n); // 9007199254740993 (this is better)
console.log(bigInt + 3n); // 9007199254740994 (still good)
console.log(bigInt + 4n); // 9007199254740995 (excellent!)

