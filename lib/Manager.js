const Employee = require('./Employee');

class Manager extends Employee {
    constructor(offNum) {
        this.offNum = offNum;
        this.getRole = () => {
            return "Manager";
        }
    }
}

module.exports = Manager;