const Engineer = require("../lib/Engineer");
// const Manager = require("../lib/Manager");

describe("Engineer class", () => {
  describe("getRole method", () => {
    it("displays the employee role", () => {
      const Employee1 = new Engineer("Dave", 5, 'dave@manager.com')
      Employee1.getRole();
      expect(Employee1.getRole()).toBe('Engineer');
    });
  });

});