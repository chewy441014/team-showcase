const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, github) {
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