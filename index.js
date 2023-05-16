//Packages needed for application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');
const { default: inquirer } = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        messsage: 'Title'
    },
    {
        type: 'input',
        name: 'description',
        messsage: 'Description'
    },
    {
        type: 'input',
        name: 'installation',
        messsage: 'Installation'
    },
    {
        type: 'input',
        name: 'table of contents',
        message: 'Table of Contents'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Usage'
    },
    {
        type: 'input',
        name: 'lincense',
        message: 'License'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Contributing'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Tests'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'Questions'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //TODO add fs code here to save file
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(answers){
        const markdownText = generateMarkdown(answers);
        writeToFile('whatevs', markdownText);
        //TODO: Finish change filename
    });
}

// Function call to initialize app
init();
