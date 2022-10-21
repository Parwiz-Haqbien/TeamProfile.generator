const Employees = require('./Employess')

class Manager extends Employees {
    constructor({name , id , email , officenumber}) {
        super(name , id , email )
            this.officenumber = officenumber
    }
    getRole() {
        return 'Manager'
    }
}






module.exports = Manager;