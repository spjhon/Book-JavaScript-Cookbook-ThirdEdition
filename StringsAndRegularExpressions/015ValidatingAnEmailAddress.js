//You want to catch and reject common errors in email addresses.

//SOLUTION

//use regex

const emailValid = "abeLincoln@gmail.com";
const emailInvalid = "abeLincoln@gmail .com";
const regex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
if (regex.test(emailInvalid)) {
  // This code is executed, because the email passes.
  console.log("success");
} else {
  console.log("fail");
}
