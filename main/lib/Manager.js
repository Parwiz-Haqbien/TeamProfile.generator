const Employees = require('./Employess')

class Manager extends Employees {
    constructor({name , id , email , officenumber}) {
        super(name , id , email )
            this.officenumber = officenumber
    }

    getOfficeNumber(answers) {
        return `${answers.officeNumber}`;
    }

    getRole() {
        return 'Manager'
    }
}






module.exports = Manager;