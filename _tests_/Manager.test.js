const Manager = require('../lib/Manager')
// const Manager = require("../lib/Manager");

describe("Manager class", () => {
  describe("getRole method", () => {
    it("displays the employee role", () => {
      const Employee1 = new Manager("Dave", 5, 'dave@manager.com')
      Employee1.getRole();
      expect(Employee1.getRole()).toBe('Manager');
    });
  });

});