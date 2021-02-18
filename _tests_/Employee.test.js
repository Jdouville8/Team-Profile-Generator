const Employee = require("../lib/Employee");
// const Manager = require("../lib/Manager");

describe("Employee class", () => {
  describe("getName method", () => {
    it("displays the employee name", () => {
      const Employee1 = new Employee("Dave", 5, 'dave@manager.com')
      Employee1.getName();
      expect(Employee1.name).toBe("Dave");
    });
  });

  describe("getId method", () => {
    it("displays the employee ID", () => {
      const Employee1 = new Employee("Dave", 5, 'dave@manager.com')
      Employee1.getId();
      expect(Employee1.id).toBe(5);
    });
  });

  describe("getEmail method", () => {
    it("displays the employee Email", () => {
      const Employee1 = new Employee("Dave", 5, 'dave@manager.com')
      Employee1.getEmail();
      expect(Employee1.email).toBe('dave@manager.com');
    });
  });

  describe("getRole method", () => {
    it("displays the employee role", () => {
      const Employee1 = new Employee("Dave", 5, 'dave@manager.com')
      Employee1.getRole();
      expect(Employee1.getRole()).toBe('Employee');
    });
  });


});
