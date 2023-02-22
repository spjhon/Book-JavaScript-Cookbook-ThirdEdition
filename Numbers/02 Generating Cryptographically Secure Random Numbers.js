//You want to create a random number that can’t be easily reverse engineered (guessed).

/* Use the window.crypto property to get an instance of the Crypto object. Use the
Crypto.getRandomValues() method to generate random values that have more
entropy than those produced by Math.random(). */

/* Este codigo solo funciona en el navegador ya que requeire acceso a window
const randomBuffer = new Uint32Array(1);
window.crypto.getRandomValues(randomBuffer);
const randomFraction = randomBuffer[0] / (0xffffffff + 1);
console.log(randomBuffer[0]);
console.log(randomFraction);
*/

//const crypto = require('crypto').webcrypto;
import { webcrypto as crypto } from 'crypto';

const randomBuffer = new Uint32Array(1);
crypto.getRandomValues(randomBuffer);

console.log(randomBuffer[0]);

const randomFraction = randomBuffer[0] / (0xffffffff + 1);

console.log(randomFraction);


