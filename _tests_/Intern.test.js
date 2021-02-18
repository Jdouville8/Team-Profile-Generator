const Intern = require('../lib/Intern')
// const Manager = require("../lib/Manager");

describe("Intern class", () => {
  describe("getSchool method", () => {
    it("returns the employee school", () => {
      const Employee1 = new Intern("Dave", 5, 'dave@manager.com', 'CU Boulder')
      Employee1.getSchool();
      expect(Employee1.getSchool()).toBe('CU Boulder');
    });
  });

  describe("getRole method", () => {
    it("displays the employee role", () => {
      const Employee1 = new Intern("Dave", 5, 'dave@manager.com')
      Employee1.getRole();
      expect(Employee1.getRole()).toBe('Intern');
    });
  });

});