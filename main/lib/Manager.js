const Employees = require("./Employess");

class Manager extends Employees {
    constructor (name, id, email, officeNumber) {
        super (name, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber(data) {
        return `${data.officeNumber}`;
    }

    getRole() {

        return `Team Manager`;

    }
}

module.exports = Manager;