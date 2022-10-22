const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, offNum) {
        if (typeof offNum !== "number" || isNaN(offNum)) {
            throw new Error("Expected offNum to be a number");
        }
        super(name, id, email);
        this.offNum = offNum;
        this.role = "Manager";
    }
    getDetail() {
        return `Office No. : ${this.offNum}`;
    }
}

module.exports = Manager;