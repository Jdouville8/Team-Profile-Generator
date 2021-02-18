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
        name: "ManagerEmail",
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
  
  const HTML = `<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
      <title>TeamBuilder</title>
  </head>
  <body>
      <div class="row bg-success">
          <h1 class="fs-1 fw-bold text-center m-4">The Team Builder</h1>
      </div>
  
      <!-- Manager Card -->
      <div class="row bg-success m-4">
          <div class="card">
              <div class="card-header text-center fs-2">
                Manager
              </div>
              <div class="card-body">
                <h5 class="card-title">Name: ${theManager.name}</h5>
                <p class="card-text">Employee ID: ${theManager.id}</p>
                <p class="card-text">Office number: ${theManager.officeNumber}</p>
                <a href="#" class="btn btn-primary">Email Address: ${theManager.email}</a>
              </div>
            </div>
      </div>
      
  </body>
  </html>`
  
  fs.writeFile("index.html", HTML, (err) => {
    if (err) {
      throw err;
    } else {
      console.log("Your Team builder website has been built!");
    }
  });


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
