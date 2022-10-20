const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(github) {
        this.github = github;
        this.getGithub = () => {
            return this.github;
        }
        this.getRole = () => {
            return "Engineer";
        }
    }
}

module.exports = Engineer;