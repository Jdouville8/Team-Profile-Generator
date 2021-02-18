const Employee = require('./Employee')

class Engineer extends Employee {
    constructor (name, id, email, github) {
        super(name, id, email);
        this.github = github;
        // this.role = 'Manager'
    }

    getGithub() {
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

// OfficeNumber , getRole 
}

module.exports = Engineer