const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("Initialization", () => {
    it("should use the passed in arguments to create an obj with valid properties and values", () => {
      const employee = new Employee("Bob", 1, "bob@gmail.com");
      expect(employee.name).toEqual("Bob");
      expect(employee.id).toEqual(1);
      expect(employee.email).toEqual("bob@gmail.com");
    });
    it("should accept only a string as the correct type for some fields", () => {
      const employeeCb = () => new Employee(1, 1, "bob@gmail.com");
      const err = new Error("Expected name to be a string");
      expect(employeeCb).toThrow(err);
    });
    it("should accept only a string as the correct type for some fields", () => {
      const employeeCb = () => new Employee("Bob", 1, 1);
      const err = new Error("Expected email to be a string");
      expect(employeeCb).toThrow(err);
    });
    it("should accept only a number as the correct type id", () => {
      const employeeCb = () => new Employee("Bob", "1", "bob@gmail.com");
      const err = new Error("Expected id to be a number");
      expect(employeeCb).toThrow(err);
    });
  });
  describe("Get Name", () => {
    it("Should return the name using the correct method", () => {
      const employee = new Employee("Bob", 1, "bob@gmail.com");
      expect(employee.getName()).toEqual("Bob");
    });
  });
  describe("Get ID", () => {
    it("Should return the id using the correct method", () => {
      const employee = new Employee("Bob", 1, "bob@gmail.com");
      expect(employee.getId()).toEqual(1);
    });
  });
  describe("Get email", () => {
    it("Should return the id using the correct method", () => {
      const employee = new Employee("Bob", 1, "bob@gmail.com");
      expect(employee.getEmail()).toEqual("bob@gmail.com");
    });
  });
  describe("Get role", () => {
    it("Should return the role using the correct method", () => {
      const employee = new Employee("Bob", 1, "bob@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });
  });
});