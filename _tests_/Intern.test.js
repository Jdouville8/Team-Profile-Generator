const Intern = require('../lib/Intern')
// const Manager = require("../lib/Manager");

describe("Intern class", () => {
  describe("getRole method", () => {
    it("displays the employee role", () => {
      const Employee1 = new Intern("Dave", 5, 'dave@manager.com')
      Employee1.getRole();
      expect(Employee1.getRole()).toBe('Intern');
    });
  });

});