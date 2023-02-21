import fs from "fs/promises";
// import path from 'path';
import inquirer from "inquirer";
import generateMarkdown from "./generateMarkdown.js";

// array of questions for user
const questions = [
  {
    type: "input",
    name: "fileName",
    message: "What is the name of your file? ",
  },
  {
    type: "input",
    name: "projectTitle",
    message: "What is your project title",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project.",
  },
  {
    type: "input",
    name: "gitHubUsername",
    message: "What is your gitHub Username.",
  },
  {
    type: "input",
    name: "email",
    message: "What is your gitHub email address.",
  },
  {
    type: "input",
    name: "installation",
    message: "What are the installation and instructions required",
  },
  {
    type: "input",
    name: "usage",
    message: "Provide test instructions and examples for use.",
  },
  {
    type: "input",
    name: "credits",
    message:"List your collaborators, if any, with links to their GitHub profiles.",
  },
  {
    type: "input",
    name: "contributions",
    message: "How will you want people to contribute to future developement",
  },
  {
    type: "input",
    name: "tests",
    message: "Give your test instructions",
  },
  
  {
    type: "list",
    name: "license",
    message: "What license type is required?",
    choices: ["MIT", "ISC", "Zlib"] ,
  },
  
    
];

// function to write README file
async function writeToFile(fileName, data) {
  await fs.writeFile(fileName, generateMarkdown(data));
  console.log("Success");
}

// function to initialize program
async function init() {
  let data = await inquirer.prompt(questions);

  writeToFile(data.fileName + ".md", data);
  
}

// function call to initialize program
init();
