// Require npm package jest,fs and inquirer as well as classes.js for any classes used
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const fs = require("fs");

// Psuedocode for command line app

// Create function for Manager Prompt
// Give option to add other team members at the end
// Ultimately pass prompt answers into a new Manager object
// Pull values from manager object to populate html
// make a new object for each employee and put it in a team members array to then be iterated through and populate html
// Split up the last few ending tags of html to be inserted after all information has been appended, attach to the add members question

//   Function that holds logic for html creation
const teamBuilder = () => {
// Function that creates a new intern after collecting information
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
              message: "Please provide the school this intern is attending",
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
                  <div class="card-header text-center fs-2 internStyle">
                    Intern
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">Name: ${theIntern.name}</h5>
                    <p class="card-text">Employee ID: ${theIntern.id}</p>
                    <p class="card-text">Employee School: ${theIntern.school}</p>
                    <a href="mailto: ${theIntern.email}" class="btn emailStyle">Email Address: ${theIntern.email}</a>
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
              <div class="card-header text-center fs-2 engineerStyle">
                Engineer
              </div>
              <div class="card-body">
                <h5 class="card-title">Name: ${theEngineer.name}</h5>
                <p class="card-text">Employee ID: ${theEngineer.id}</p>
                <a href="mailto: ${theEngineer.email}" class="btn emailStyle">Email Address: ${theEngineer.email}</a>
                <a href="https://github.com/${theEngineer.github}" class="btn titleStyle m-1">Github: ${theEngineer.github}</a>
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
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Bungee&display=swap" rel="stylesheet">
      <link rel="stylesheet" href="./dist/style.css">
      <title>TeamBuilder</title>
  </head>
  <body>
      <div class="row titleStyle titleFont">
          <h1 class="fs-1 fw-bold text-center m-4"><svg xmlns="http://www.w3.org/2000/svg" width="38" height="38" fill="currentColor" class="bi bi-hammer" viewBox="0 0 16 16">
          <path d="M9.972 2.508a.5.5 0 0 0-.16-.556l-.178-.129a5.009 5.009 0 0 0-2.076-.783C6.215.862 4.504 1.229 2.84 3.133H1.786a.5.5 0 0 0-.354.147L.146 4.567a.5.5 0 0 0 0 .706l2.571 2.579a.5.5 0 0 0 .708 0l1.286-1.29a.5.5 0 0 0 .146-.353V5.57l8.387 8.873A.5.5 0 0 0 14 14.5l1.5-1.5a.5.5 0 0 0 .017-.689l-9.129-8.63c.747-.456 1.772-.839 3.112-.839a.5.5 0 0 0 .472-.334z"/>The Team Builder</h1>
      </div>
  
      <!-- Manager Card -->
      <div class="row bg-success m-4">
          <div class="card">
              <div class="card-header text-center fs-2 managerStyle">
                Manager
              </div>
              <div class="card-body">
                <h5 class="card-title">Name: ${theManager.name}</h5>
                <p class="card-text">Employee ID: ${theManager.id}</p>
                <p class="card-text">Office number: ${theManager.officeNumber}</p>
                <a href="mailto: ${theManager.email}" class="btn emailStyle">Email Address: ${theManager.email}</a>
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
