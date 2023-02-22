/* You have an angle in degrees. To use the value in the Math object’s trigonometric
functions, you need to convert the degrees to radians. */

// To convert degrees to radians, multiply the degree value by (Math.PI/180):
const degrees = 20;
const radians = degrees * (Math.PI / 180);
console.log(radians);
// So if you have a 90 degree angle, the calculation becomes:
const radians2 = 90 * (Math.PI / 180);
console.log(radians2); // 1.5707963267948966
// To convert radians to degrees, multiply the radians value by (180/Math.PI):
const degrees2 = radians * (180 / Math.PI);
console.log(degrees2);

/* All the trigonometric methods of the Math object (sin(), cos(), tan(), asin(),
acos(), atan(), and atan2()) take values in radians, and return radians as a result.
Yet it’s not unusual for people to provide values in degrees rather than radians, as
degrees are the more familiar unit of measure.*/

