/* You want to insert markup into a web page, and escape the markup (so the browser
    displays the angle brackets rather than interpreting them as HTML tags). This could
    be because you want to show some example HTML markup, for example, in a tutorial
    article. Or it may be because you need to safely sanitize outside data, like text submit‐
    ted by a user or pulled out of a database */


// use String.replaceAll()

const originalPieceOfHtml = '<p>This is a <span>paragraph</span></p>';
// Get a new string with no < characters
let safePieceOfHtml = originalPieceOfHtml.replaceAll('<', '&lt;');
// Get a new string with no > characters
safePieceOfHtml = safePieceOfHtml.replaceAll('>', '&gt;');
// Show it in the page
//document.getElementById('placeholder').innerHtml = safePieceOfHtml;

console.log(safePieceOfHtml);


//remember method chaining
// const safePieceOfHtml = originalPieceOfHtml.replaceAll('<', '&lt;').replaceAll('>', '&gt;');
