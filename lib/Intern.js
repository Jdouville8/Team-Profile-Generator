const Employee = require('./Employee')

class Intern extends Employee {
    constructor (name, id, email, school) {
        super(name, id, email);
        this.school = school;
        // this.role = 'Manager'
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }

// OfficeNumber , getRole 
}

module.exports = Intern