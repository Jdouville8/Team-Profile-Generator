const Engineer = require("../lib/Engineer");
// const Manager = require("../lib/Manager");

describe("Engineer class", () => {
  describe("getGithub method", () => {
    it("returns the employee Github", () => {
      const Employee1 = new Engineer("Dave", 5, 'dave@manager.com', 'daveman7')
      Employee1.getGithub();
      expect(Employee1.getGithub()).toBe('daveman7');
    });

    describe("getRole method", () => {
      it("returns the employee role", () => {
        const Employee1 = new Engineer("Dave", 5, 'dave@manager.com')
        Employee1.getRole();
        expect(Employee1.getRole()).toBe('Engineer');
      });
    });
  });

});