
const Engineer = require('./main/lib/Engineer');
const Intern = require('./main/lib/Intern');
const fs = require('fs');
const inquirer = require('inquirer');
const generateHtml = require('./main/src/generateHtml');

//create array to store multiple Interns
const allIntern = [];

//To store multiple Engineers
const allEngineers = [];

//create manager questions for user input

const managerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'what is your team managers name?'
    },
    {
        type: 'input',
        name: 'id',
        message: 'what is your employee id?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'what is your team managers email address?'
    },
    {
        type: 'input',
        name: 'number',
        message: 'what is your team managers office number?'
    },
    {
        type: 'list',
        message: ' Would you like to add another team member?',
        name: 'menu',
        choices: ["Add Engineer", "Add Intern", "Finish"],
      },
]



