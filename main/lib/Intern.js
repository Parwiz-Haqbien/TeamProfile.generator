const Employees = require("./Employess");

class Intern extends Employees {
    constructor (name, id, email, school) {
        super (name, id, email);
        this.school = school;
    }
    

    getSchool(data) {
        return `${data.school}`;
    }

    getRole() {

        return `Intern`;

    }
}

module.exports = Intern;