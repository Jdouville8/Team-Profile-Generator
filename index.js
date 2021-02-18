// Require npm package jest,fs and inquirer as well as classes.js for any classes used
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

// Create function for Manager Prompt
// Give option to add other team members at the end
// Ultimately pass prompt answers into a new Manager object
// Pull values from manager object to populate html
// make a new object for each employee and put it in a team members array to then be iterated through and populate html
// Split up the last few ending tags of html to be inserted after all information has been appended, attach to the add members question

var teamBuilder = () => {
  var managerCreate = () => {
    inquirer.prompt([
      {
        type: "input",
        name: "ManagerName",
        message: "What is the name of the Manager?",
      },
      {
        type: "input",
        name: "ManagerID",
        message: "Please provide a manager ID",
      },
      {
        type: "input",
        name: "Email",
        message: "What is a good Email to reach you at?",
      },
      {
        type: "input",
        name: "OfficeNumber",
        message: "Please provide an Office Number",
      },
      {
        type: "list",
        name: "AddMember",
        choices: ['Engineer', 'Intern', 'No thanks!'],
        message: "Would you like to add another team member?",
      },
    ])
    .then((answers) => {
  const {
    ManagerName,
    ManagerID,
    ManagerEmail,
    OfficeNumber,
    AddMember
  } = answers;
  const theManager = new Manager(ManagerName, ManagerID, ManagerEmail, OfficeNumber)
  if (AddMember == "Engineer" || "Intern") {
      console.log("yoooooo")
  }
// if ()
})
  };
  managerCreate();
};

teamBuilder();

//   .then((answers) => {
// const {
//   Title,
//   Description,
//   Installation,
//   Usage,
//   License,
//   Contribution,
//   Tests,
//   Github,
//   Email,
// } = answers;
// let badge = (license) => {
//   // const license = license
//   let badge;
//   switch (license) {
//     case "Apache":
//       badge = '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
//       break;
//     case "MIT":
//       badge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
//       break;
//     case "BSD 3":
//       badge = '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
//       break;
//   }
//   return badge
// }
//     const README = `# ${Title}

// ## Badge
// ${badge(License)}

// ## Description
// ${Description}

// ## Table of Contents
// [Description](#Description)
// [Installation](#Installation)
// [Usage](#Usage)
// [License](#License)
// [Contribution](#Contribution)
// [Tests](#Tests)
// [Questions](#Questions)

// ## Installation
// ${Installation}

// ## Usage
// ${Usage}

// ## License
// ${License}

// ## Contribution
// ${Contribution}

// ## Tests
// ${Tests}

// ## Questions
// https://github.com/${Github}
// You can reach me at the following email with any additional questions you may have: ${Email}`

// console.log("Your Answers: ");
// console.log(answers);
// fs.writeFile("README.md", README, (err) => {
//   if (err) {
//     throw err;
//   } else {
//     console.log("The file has been saved!");
//   }
// });
//   });
