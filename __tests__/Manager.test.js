const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("Initialization", () => {
        it("should use the passed in arguments to create an obj with valid properties and values", () => {
            const manager = new Manager("Bob", 1, "bob@gmail.com", 1);
            expect(manager.name).toEqual("Bob");
            expect(manager.id).toEqual(1);
            expect(manager.email).toEqual("bob@gmail.com");
            expect(manager.offNum).toEqual(1);
        });
        it("should require a offNum field", () => {
            const manager = () => new Manager("Bob", 1, "bob@gmail.com");
            const err = new Error("Expected offNum to be a number");
            expect(manager).toThrow(err);
        });
        it("should accept only a string as the correct type for some fields", () => {
            const manager = () => new Manager(1, 1, "bob@gmail.com", 1);
            const err = new Error("Expected name to be a string");
            expect(manager).toThrow(err);
        });
        it("should accept only a string as the correct type for some fields", () => {
            const manager = () => new Manager("Bob", 1, 1, 1);
            const err = new Error("Expected email to be a string");
            expect(manager).toThrow(err);
        });
        it("should accept only a number as the correct type id", () => {
            const manager = () => new Manager("Bob", "1", "bob@gmail.com", 1);
            const err = new Error("Expected id to be a number");
            expect(manager).toThrow(err);
        });
    });
    describe("Get Name", () => {
        it("Should return the name using the correct method", () => {
            const manager = new Manager("Bob", 1, "bob@gmail.com", 1);
            expect(manager.getName()).toEqual("Bob");
        });
    });
    describe("Get ID", () => {
        it("Should return the id using the correct method", () => {
            const manager = new Manager("Bob", 1, "bob@gmail.com", 1);
            expect(manager.getId()).toEqual(1);
        });
    });
    describe("Get email", () => {
        it("Should return the id using the correct method", () => {
            const manager = new Manager("Bob", 1, "bob@gmail.com", 1);
            expect(manager.getEmail()).toEqual("bob@gmail.com");
        });
    });
    describe("Get role", () => {
        it("Should return the role using the correct method", () => {
            const manager = new Manager("Bob", 1, "bob@gmail.com", 1);
            expect(manager.getRole()).toEqual("Manager");
        });
    });
    describe("Get Detail", () => {
        it("Should return the detail of the manager", () => {
            const manager = new Manager("Bob", 1, "bob@gmail.com", 4)
            expect(manager.getDetail()).toEqual(`Office No. : 4`);
        })
    });
});

