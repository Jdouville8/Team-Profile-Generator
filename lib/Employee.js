class Employee {
    // Create employee parent class
    constructor(name, id, email) {
    // properties
      this.name = name;
      this.id = id;
      this.email = email;
    //   this.role = 'Employee'
    }
  
    getName() {
      console.log(`Name: ${this.name}`);
    }

    getId() {
      console.log(`ID: ${this.id}`);
    }

    getEmail() {
      console.log(`Email: ${this.email}`);
    }

    getRole() {
      return 'Employee'
    }
  }
  
//   Create extended classes of manager, engineer, intern
module.exports = Employee