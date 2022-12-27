
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

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'what is your interns name?'
    }, 

    {
        type: 'number',
        name: 'internId',
        message: 'what is your interns id?'
    }, 

    {
        type: 'input',
        name: 'internEmail',
        message: 'what is your interns email?'
    }, 

    {
        type: 'input',
        name: 'school',
        message: 'what is your interns school?'
    }, 
    {
        type: 'list',
        message: ' Would you like to add another team member?',
        name: 'menu',
        choices: ["Add Engineer", "Add Intern", "Finish"],
      },
];

//creating function for the app to start

function init() {
    //using inquirer to start the question
    inquirer
      .prompt(managerQuestions)
      //gather the user input data and allow the user to choose from a list of options
      .then((managerData) => {
        if(managerData.menu === "Add Engineer") {
            addEngineer(managerData);
        }
         else if (managerData.menu === "Add Intern") {
            addIntern(managerData)
         }
         else {
            renderAnswers(managerData, allEngineers , allIntern);
         }
      });
}

function addEngineer(managerData, engineerData, internData) {
    inquirer
      .prompt(engineerQuestions)
      //gather the user input data and allow the user to choose from a list of options
      .then((engineerData) => {

        const engineers = new Engineer(engineerData.engineerName, engineerData.engineerId, engineerData.engineerEmail, engineerData.github);
        allEngineers.push(engineers);

        if(engineerData.menu === "Add Engineer") {
            addEngineer(managerData, allEngineers, allIntern);
        }
         else if (engineerData.menu === "Add Intern") {
            addIntern(managerData, allEngineers, allIntern)
         }
         else {
            renderAnswers(managerData, allEngineers , allIntern);
         }
});
}

function addIntern(managerData, engineerData, internData) {
    inquirer
      .prompt(internQuestions)
      //gather the user input data and allow the user to choose from a list of options
      .then((internData) => {

        const interns = new Intern(internData.internName, internData.internId, internData.internEmail, internData.School);
        allIntern.push(interns);

        if(internData.menu === "Add Engineer") {
            addEngineer(managerData, allEngineers, allIntern);
        }
         else if (internData.menu === "Add Intern") {
            addIntern(managerData)
         }
         else {
            renderAnswers(managerData, allEngineers , allIntern);
         }
});
}

// Create a function to start the app
function renderAnswers(managerData, allEngineers, allInterns) {

    const htmlManagerContent = generateHtml(managerData, allEngineers, allInterns);
  
    fs.writeFile('./main/dist/output.html', htmlManagerContent, (err) =>
      err ? console.log(err) : console.log('Html successfully created!')
    );
  }

  // Function call to start the app
init();




