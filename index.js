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

//   Function that holds logic for html creation
const teamBuilder = () => {
    const internCreate = () => {
        inquirer
          .prompt([
            {
              type: "input",
              name: "InternName",
              message: "What is the name of the Intern?",
            },
            {
              type: "input",
              name: "InternID",
              message: "Please provide an ID for the Intern",
            },
            {
              type: "input",
              name: "InternEmail",
              message: "What is a good Email to reach them at?",
            },
            {
              type: "input",
              name: "School",
              message: "Please provide a Github username",
            },
            {
              type: "list",
              name: "AddMember",
              choices: ["Engineer", "Intern", "No thanks!"],
              message: "Would you like to add another team member?",
            },
          ])
          .then((answers2) => {
            const {
                InternName,
                InternID,
                InternEmail,
                School,
              AddMember,
            } = answers2;
            const theIntern = new Intern(
                InternName,
                InternID,
                InternEmail,
                School
            );
    
            const HTML = `
          <!-- Intern Card -->
          <div class="row bg-success m-4">
              <div class="card">
                  <div class="card-header text-center fs-2 bg-info">
                    Intern
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Name: ${theIntern.name}</h5>
                    <p class="card-text">Employee ID: ${theIntern.id}</p>
                    <p class="card-text">Employee School: ${theIntern.school}</p>
                    <a href="#" class="btn btn-primary">Email Address: ${theIntern.email}</a>
                  </div>
                </div>
          </div>
          `;
    
            const htmlEnd = `  </body>
          </html>`;
    
            fs.appendFile("index.html", HTML, (err) => {
              if (err) {
                throw err;
              } else {
              }
            });
    
            if (AddMember == "Engineer") {
              engineerCreate();
            } else if (AddMember == "Intern") {
              internCreate();
            } else {
              fs.appendFile("index.html", htmlEnd, (err) => {
                if (err) {
                  throw err;
                }
              });
              console.log("Your team has been assembled!");
            }
          });
      };

//  Function that creates a new Engineer after collecting information
  const engineerCreate = () => {
    inquirer
      .prompt([
        {
          type: "input",
          name: "EngineerName",
          message: "What is the name of the Engineer?",
        },
        {
          type: "input",
          name: "EngineerID",
          message: "Please provide an ID for the Engineer",
        },
        {
          type: "input",
          name: "EngineerEmail",
          message: "What is a good Email to reach them at?",
        },
        {
          type: "input",
          name: "Github",
          message: "Please provide a Github username",
        },
        {
          type: "list",
          name: "AddMember",
          choices: ["Engineer", "Intern", "No thanks!"],
          message: "Would you like to add another team member?",
        },
      ])
      .then((answers2) => {
        const {
          EngineerName,
          EngineerID,
          EngineerEmail,
          Github,
          AddMember,
        } = answers2;
        const theEngineer = new Engineer(
          EngineerName,
          EngineerID,
          EngineerEmail,
          Github
        );

        const HTML = `
      <!-- Engineer Card -->
      <div class="row bg-success m-4">
          <div class="card">
              <div class="card-header text-center fs-2 bg-danger">
                Engineer
              </div>
              <div class="card-body">
                <h5 class="card-title">Name: ${theEngineer.name}</h5>
                <p class="card-text">Employee ID: ${theEngineer.id}</p>
                <a href="#" class="btn btn-primary">Email Address: ${theEngineer.email}</a>
                <a href="#" class="btn btn-success">Github: ${theEngineer.github}</a>
              </div>
            </div>
      </div>
      `;

        const htmlEnd = `  </body>
      </html>`;

        fs.appendFile("index.html", HTML, (err) => {
          if (err) {
            throw err;
          } else {
          }
        });

        if (AddMember == "Engineer") {
          engineerCreate();
        } else if (AddMember == "Intern") {
          internCreate();
        } else {
          fs.appendFile("index.html", htmlEnd, (err) => {
            if (err) {
              throw err;
            }
          });
          console.log("Your team has been assembled!");
        }
      });
  };

//  function that creates a manager file and most of html
  const managerCreate = () => {
    inquirer
      .prompt([
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
          message: "What is a good Email to reach them at?",
        },
        {
          type: "input",
          name: "OfficeNumber",
          message: "Please provide an Office Number",
        },
        {
          type: "list",
          name: "AddMember",
          choices: ["Engineer", "Intern", "No thanks!"],
          message: "Would you like to add another team member?",
        },
      ])
      .then((answers) => {
        const {
          ManagerName,
          ManagerID,
          ManagerEmail,
          OfficeNumber,
          AddMember,
        } = answers;
        const theManager = new Manager(
          ManagerName,
          ManagerID,
          ManagerEmail,
          OfficeNumber
        );

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
              <div class="card-header text-center fs-2 bg-warning">
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
`;

        const htmlEnd = `  </body>
</html>`;

        fs.writeFile("index.html", HTML, (err) => {
          if (err) {
            throw err;
          } else {
          }
        });

        if (AddMember == "Engineer") {
          engineerCreate();
        } else if (AddMember == "Intern") {
          internCreate();
        } else {
          fs.appendFile("index.html", htmlEnd, (err) => {
            if (err) {
              throw err;
            }
          });
          console.log("Your team has been assembled!");
        }
      });
  };
  managerCreate();
};

teamBuilder();
