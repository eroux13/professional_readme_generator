// Require inquirer for user input
const inquirer = require("inquirer");
// Require generateMd.js from utils folder
const generateMd = require("./utils/generateMd.js");
// Require util to use promisify to use promises
const util = require("util");
// Requre fs to write file
const fs = require("fs");

// Inquirer prompt for user input
const userQuestions = () => {
    return inquirer
        .prompt([
            {
                type: "input",
                message: "What is the title of your project?",
                name: "title"
            },
            {
                type: "input",
                message: "Please describe your project:",
                name: "description"
            },
            {
                type: "input",
                message: "What are the installation instructions for this project?",
                name: "install"
            },
            {
                type: "input",
                message: "What is the usage of this project?",
                name: "usage"
            },
            {
                type: "list",
                message: "What license would you like to add for this project?",
                name: "license",
                // Choices came from popular licenses from https://opensource.org/licenses
                choices: ["Apache-2.0", "BSD-3-Clause", "BSD-2-Clause", "GPL-2.0", "GPL-3.0", "LGPL-2.0", "LGPL-2.1", "LGPL-3.0", "MIT", "MPL-2.0", "CDDL-1.0", "EPL-2.0"]
            },
            {
                type: "input",
                message: "Who are the contributors for this project? (Enter their GitHub username)",
                name: "contributor"
            },
            {
                type: "input",
                message: "How does a user test this project?",
                name: "test"
            },
            {
                type: "input",
                message: "What is your GitHub username?",
                name: "username"
            },
            {
                type: "input",
                message: "What is your email address?",
                name: "email"
            }
        ])
};

// Function to generate Markdown
const generateMdFile = util.promisify(fs.writeFile);

// Function to initialize app
const init = () => {
    userQuestions()
        .then((data) => generateMdFile("README.md", generateMd(data)))
        .then(() => console.log("README.md has been created!"))
        .catch((err) => console.error(err));
}

// Call init()
init();