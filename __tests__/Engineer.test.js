const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should use the passed in arguments to create an obj with valid properties and values", () => {
            const engineer = new Engineer("Bob", 1, "bob@gmail.com", "BobGit");
            expect(engineer.name).toEqual("Bob");
            expect(engineer.id).toEqual(1);
            expect(engineer.email).toEqual("bob@gmail.com");
            expect(engineer.github).toEqual("BobGit");
        });
        it("should require a github field", () => {
            const engineer = () => new Engineer("Bob", 1, "bob@gmail.com");
            const err = new Error("Expected github to be a string");
            expect(engineer).toThrow(err);
        });
        it("should accept only a string as the correct type for some fields", () => {
            const engineer = () => new Engineer(1, 1, "bob@gmail.com", "bobgit");
            const err = new Error("Expected name to be a string");
            expect(engineer).toThrow(err);
        });
        it("should accept only a string as the correct type for some fields", () => {
            const engineer = () => new Engineer("Bob", 1, 1, "bobgit");
            const err = new Error("Expected email to be a string");
            expect(engineer).toThrow(err);
        });
        it("should accept only a number as the correct type id", () => {
            const engineer = () => new Engineer("Bob", "1", "bob@gmail.com", "bobgit");
            const err = new Error("Expected id to be a number");
            expect(engineer).toThrow(err);
        });
    });
    describe("Get Name", () => {
        it("Should return the name using the correct method", () => {
            const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bobgit");
            expect(engineer.getName()).toEqual("Bob");
        });
    });
    describe("Get ID", () => {
        it("Should return the id using the correct method", () => {
            const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bobgit");
            expect(engineer.getId()).toEqual(1);
        });
    });
    describe("Get email", () => {
        it("Should return the id using the correct method", () => {
            const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bobgit");
            expect(engineer.getEmail()).toEqual("bob@gmail.com");
        });
    });
    describe("Get role", () => {
        it("Should return the role using the correct method", () => {
            const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bobgit");
            expect(engineer.getRole()).toEqual("Engineer");
        });
    });
    describe("Get github", () => {
        it("Should return the github of the engineer", () => {
            const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bobgit")
            expect(engineer.getGithub()).toEqual("bobgit");
        })
    });
    describe("Get Detail", () => {
        it("Should return the detail of the engineer", () => {
            const engineer = new Engineer("Bob", 1, "bob@gmail.com", "bobgit")
            expect(engineer.getDetail()).toEqual(`<a href="https://github.com/bobgit" target="_blank">Github</a>`);
        })
    });
});