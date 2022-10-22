class Employee {
    constructor(name, id, email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected name to be a string");
        }
        if (typeof id !== "number" || isNaN(id)) {
            throw new Error("Expected id to be a number");
        }
        if (typeof email !== "string" || !email.trim().length) {
            throw new Error("Expected email to be a string");
        }
        this.name = name;
        this.id = id;
        this.email = email;
        this.role = "Employee";
    }
    getName() {
        return this.name;
    };
    getId() {
        return this.id;
    };
    getEmail() {
        return this.email;
    };
    getRole() {
        return this.role;
    }
}

module.exports = Employee;