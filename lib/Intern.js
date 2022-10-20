const Employee = require('./Employee');

class Intern extends Employee {
    constructor(school) {
        this.school = school;
        this.getSchool = () => {
            return this.school;
        }
        this.getRole = () => {
            return "Intern";
        }
    }
}

module.exports = Intern;