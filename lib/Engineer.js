const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        if (typeof github !== "string" || !github.trim().length) {
            throw new Error("Expected github to be a string");
        }
        super(name, id, email);
        this.github = github;
        this.role = "Engineer";
    }
    getGithub() {
        return this.github;
    }
    getDetail () {
        return `<a href="https://github.com/${this.github}" target="_blank">Github</a>`;
    }
}

module.exports = Engineer;