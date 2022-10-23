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
                message: 'what is your team managers email adress?'
            },
            {
                type: 'input',
                name: 'number',
                message: 'what is your team managers office number?'
            },
        ])
        .then((maangerOption) => {
            this.member.push(new Manager(maangerOption))
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
                this.youTeam(this.member)
                return // means the html is generated
            } else {
                await this.addEmployee(Option)
                this.answerQuestion()
            }
        })
    }
    async addEmployee(passCoices) {
        console.log('Adding Engineer')
    }
}