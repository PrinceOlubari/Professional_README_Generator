// import fs from "fs";
// import path from 'path';
import inquirer from "inquirer";
// import generateMarkdown from ("./generateMarkdown");

// array of questions for user
// const questions = [""

// ];

// function to write README file
// function writeToFile(fileName, data) {


// }

// function to initialize program
function init() {

}

// function call to initialize program
init();


let {} = await inquirer
    .prompt([
        {
            type: 'input',
            name: 'first_name',
            message: "What's your first name",
        },
        {
            type: 'input',
            name: 'title',
            message: "What's your first name",
        },
        {
            type: 'input',
            name: 'setUp',
            message: "What's your first name",
        },
        {
            type: 'input',
            name: 'credit',
            message: "What's your last name",
           
        },


    ])

    // fs.writeFile(
    //     "README.md",
    //     `
    //   # example 
    //   ${process.argv[2]}
    //   # license
    //   ${process.argv[3]}`,
    //     (err) => (err ? console.error(err) : console.log("Success!"))
    //   );