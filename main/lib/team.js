const inquirer = require('inquirer');
const Engineer = require('./Engineer');
const Employee = require('./Employess');
const Intern = require('./Intern');
const displayPage = require('../html-template');
const Manager = require('./Manager');

class team {
    constructor() {
        this.member = [];
    }

    async teamGenerator () {
        await this.addManager();
        await this.makeChoice();
    }
    async addManager() {
        await inquirer
        .prompt([
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
        ])
        .then((managerOption) => {
            this.member.push(new Manager(managerOption))
        });
    }
    async answerQuestion() {
        await inquirer.prompt({
                type: 'list',
                name: 'option',
                message: 'Would you like to finish or keep adding?',
                choices : ['Add Engineer' , 'Add Intern' , 'I am finshed'],
        })
        .then(async ({Option}) => {
            if (Option === 'I am Finished') {
                console.log('Generating your templet!')
                this.yourTeam(this.member)
                return // means the html is generated
            } else {
                await this.addEmployee(Option)
                this.answerQuestion()
            }
        });
    }
    async addEmployee(addMore) {
    if (addMore === 'Add Engineer') {
        await this.addEngineer()
    } else { //want to add Intern 
        await this.addIntern()
    }
    }
async addEngineer () {
    await inquirer
    .prompt([

            {
                type: 'input',
                name: 'name',
                message: 'what is your ngineers name?'
            }, 

            {
                type: 'input',
                name: 'id',
                message: 'what is your engineers id?'
            }, 

            {
                type: 'input',
                name: 'email',
                message: 'what is your engineers email?'
            }, 
            {
                type: 'input',
                name: 'github',
                message: 'what is your engineers github username?'
            }, 
    ])
    .then((engineerOption) => {
        this.member.push(new Engineer(engineerOption));
    });
}
async addIntern () {
    await inquirer 
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is your interns name?'
        }, 

        {
            type: 'input',
            name: 'id',
            message: 'what is your interns id?'
        }, 

        {
            type: 'input',
            name: 'email',
            message: 'what is your interns email?'
        }, 

        {
            type: 'input',
            name: 'school',
            message: 'what is your interns school?'
        }, 
    ])
    .then((internOption) => {
        this.member.push(new Intern(internOption));
    });
}
async finishProduct(allOptions) {
    console.log('your team is build!')
}

}
module.exports = team