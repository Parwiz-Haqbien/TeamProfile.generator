const Employees = require('./Employess')
class Engineer extends Employees {
        constructor({name , id , email , github}) {
        super( name , id , email)
        this.github = github
        }
        getGithub(){
                return this.github
        }
        getRle(){
        return "Engineer"
        }
}









module.exports = Engineer;