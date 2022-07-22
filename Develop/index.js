// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of the project?",
  },
  {
    type: "input",
    message: "Please write a description of the project",
    name: "description",
  },
  {
    type: "input",
    message: "Please provide the installation process",
    name: "installation",
  },
  {
    type: "input",
    message: "Please provide how to use instructions",
    name: "usage",
  },

  {
    type: "input",
    message:
      "Please list your collaborates, if any, with links to github profiles",
    name: "credits",
  },
  {
    type: "input",
    message: "Please list any tests, if any",
    name: "tests",
  },
  {
    type: "list",
    message: "What license would you like to include for your project? ",
    name: "license",
    choices: ["Apache", "CC0", "GNU GPL v3", "MIT License", "None"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  return inquirer.prompt(questions);
}

// Function call to initialize app
init()
  .then((data) => {
    return generateMarkdown(data);
  })
  .then((markdownData) => {
    return writeToFile("../README.md", markdownData);
  });
