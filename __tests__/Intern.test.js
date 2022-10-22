const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("Initialization", () => {
        it("should use the passed in arguments to create an obj with valid properties and values", () => {
            const intern = new Intern("Bob", 1, "bob@gmail.com", "UTAUSTIN");
            expect(intern.name).toEqual("Bob");
            expect(intern.id).toEqual(1);
            expect(intern.email).toEqual("bob@gmail.com");
            expect(intern.school).toEqual("UTAUSTIN");
        });
        it("should require a school field", () => {
            const intern = () => new Intern("Bob", 1, "bob@gmail.com");
            const err = new Error("Expected school to be a string");
            expect(intern).toThrow(err);
        });
        it("should accept only a string as the correct type for some fields", () => {
            const intern = () => new Intern(1, 1, "bob@gmail.com", "UTAUSTIN");
            const err = new Error("Expected name to be a string");
            expect(intern).toThrow(err);
        });
        it("should accept only a string as the correct type for some fields", () => {
            const intern = () => new Intern("Bob", 1, 1, "UTAUSTIN");
            const err = new Error("Expected email to be a string");
            expect(intern).toThrow(err);
        });
        it("should accept only a number as the correct type id", () => {
            const intern = () => new Intern("Bob", "1", "bob@gmail.com", "UTAUSTIN");
            const err = new Error("Expected id to be a number");
            expect(intern).toThrow(err);
        });
    });
    describe("Get Name", () => {
        it("Should return the name using the correct method", () => {
            const intern = new Intern("Bob", 1, "bob@gmail.com", "UTAUSTIN");
            expect(intern.getName()).toEqual("Bob");
        });
    });
    describe("Get ID", () => {
        it("Should return the id using the correct method", () => {
            const intern = new Intern("Bob", 1, "bob@gmail.com", "UTAUSTIN");
            expect(intern.getId()).toEqual(1);
        });
    });
    describe("Get email", () => {
        it("Should return the id using the correct method", () => {
            const intern = new Intern("Bob", 1, "bob@gmail.com", "UTAUSTIN");
            expect(intern.getEmail()).toEqual("bob@gmail.com");
        });
    });
    describe("Get role", () => {
        it("Should return the role using the correct method", () => {
            const intern = new Intern("Bob", 1, "bob@gmail.com", "UTAUSTIN");
            expect(intern.getRole()).toEqual("Intern");
        });
    });
    describe("Get school", () => {
        it("Should return the school of the intern", () => {
            const intern = new Intern("Bob", 1, "bob@gmail.com", "UTAUSTIN")
            expect(intern.getSchool()).toEqual("UTAUSTIN");
        })
    });
    describe("Get Detail", () => {
        it("Should return the detail of the intern", () => {
            const intern = new Intern("Bob", 1, "bob@gmail.com", "UTAUSTIN")
            expect(intern.getDetail()).toEqual(`School: UTAUSTIN`);
        })
    });
});