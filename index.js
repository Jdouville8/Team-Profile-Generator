// Require npm package jest and inquirer as well as classes.js for any classes used
const Employee = require('./lib/Employee')
const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

const Manager1 = new Intern('Ben', 42, 'ben@ben', 'CU');

console.log(Manager1.getSchool());