//Packages needed for application
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require('fs');

//Created an array of questions for user input using inquirer node modules
inquirer
    .prompt([
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
    ])
    //this function will generate the markdown file for the ReadMe.md
    .then((answers) =>{
        const markdownText = generateMarkdown(answers);
        //this will write the file and if no errors will generate a message that it is successul
        fs.writeFile('ReadMe.md', markdownText, (err) =>
            err ? console.log(err) : console.log('Successfully created ReadME.md'));
    });



/*const questions = [
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
init();*/
