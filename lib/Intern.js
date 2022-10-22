const Employee = require('./Employee');

class Intern extends Employee {
    constructor(name, id, email, school) {
        if (typeof school !== "string" || !school.trim().length) {
            throw new Error("Expected school to be a string");
        }
        super(name, id, email);
        this.school = school;
        this.role = "Intern";
    }
    getSchool() {
        return this.school;
    }
    getDetail() {
        return `School: ${this.school}`;
    }
}

module.exports = Intern;