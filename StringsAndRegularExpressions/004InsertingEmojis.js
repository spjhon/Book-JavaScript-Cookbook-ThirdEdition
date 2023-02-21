'use strict'

//You want to insert an extended Unicode character that has a 4-byte encoding, like an
//emoji or certain types of accented non-English letters.


const hamburgerStory = 'I like hamburgers ' + String.fromCodePoint(0x1F354);
console.log(hamburgerStory);

// esta es la direccion recomendada de la lista de casi 3000 emojis que estan en el formato
//hexadecimal http://unicode.org/emoji/charts/full-emoji-list.html

//si se desea manipular el texto con emojis se recomienda la libreria Grapheme Splitter