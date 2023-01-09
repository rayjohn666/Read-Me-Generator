// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
//internal Modules
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
inquirer.prompt()
const questions = [
    {  
        type: 'input',
        name: 'github',
        message: 'Enter your github username'
    },

    {   
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }, 

    {   
        type: 'input',
        name: 'title',
        message: 'Enter the title of your project'
    },

    {   
        type: 'input',
        name: 'description',
        message: 'Description of your project'
    },

    {  
        type: 'input',
        name: 'installation',
        message: 'Instructions to install your application'
    },

    {   
        type: 'input',
        name: 'usage',
        message: 'How is this application to be used?'
    },

    {  
        type: 'input',
        name: 'contribute',
        message: 'Instructions on how to contribute to your project'
    },

    {   
        type: 'input',
        name: 'test',
        message: 'How would one test this application?'
    },

    {   
        type: 'list',
        name: 'license',
        choices: ['MIT License', 'Apache 2.0 License', 'GNU General Public License v3.0']
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
const initReadme = () => {
    inquirer.prompt(questions).then((answers) => {
        fs.writeFile("test.md", generateMarkdown(answers), (err) => {
        err ? console.error(err) : console.log('Your README has been generated!');
        })
    })
}
// Function call to initialize app
initReadme();
