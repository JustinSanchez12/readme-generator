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
            name: 'usage',
            message: 'Usage'
        },
        {
            type: 'input',
            name: 'lincense',
            message: 'License',
        },
        {
            type: 'input',
            name: 'contributions',
            message: 'Contributions'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Tests'
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub Username:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your Email:',
        },
    ])
    //this function will generate the markdown file for the ReadMe.md
    .then((answers) =>{
        const markdownText = generateMarkdown(answers);
        //this will write the file and if no errors will generate a message that it is successul
        fs.writeFile('README.md', markdownText, (err) =>
            err ? console.log(err) : console.log('Successfully created README.md'));
    });
