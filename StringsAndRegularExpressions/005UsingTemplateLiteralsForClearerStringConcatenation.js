'use strict'
//You want a simpler, clearer way to write long string concatenation operations.


const firstName = 'juan';
const lastName = 'aristizabal';
const team = 'construction';
const hireDate = 'february'

const employeeDetail = `Our team includes ${firstName} ${lastName} who works on the
${team} team. They've been a team member since ${hireDate}!`;

console.log(employeeDetail);