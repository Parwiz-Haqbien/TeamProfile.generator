
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
        name: 'managerName',
        message: 'what is your team managers name?'
    },
    {
        type: 'number',
        name: 'managerId',
        message: 'what is your employee id?'
    },
    {
        type: 'input',
        name: 'mangerEmail',
        message: 'what is your team managers email address?'
    },
    {
        type: 'number',
        name: 'officeNumber',
        message: 'what is your team managers office number?'
    },
    {
        type: 'list',
        message: ' Would you like to add another team member?',
        name: 'menu',
        choices: ["Add Engineer", "Add Intern", "Finish"],
      },
];

const engineerQuestions = [
    {
        type: 'input',
        name: 'engineerName',
        message: 'what is your Engineers name?'
    }, 

    {
        type: 'number',
        name: 'engineerId',
        message: 'what is your engineers id?'
    }, 

    {
        type: 'input',
        name: 'engineerEmail',
        message: 'what is your engineers email?'
    }, 
    {
        type: 'input',
        name: 'github',
        message: 'what is your engineers github username?'
    }, 
    {
        type: 'list',
        message: ' Would you like to add another team member?',
        name: 'menu',
        choices: ["Add Engineer", "Add Intern", "Finish"],
      },
];



