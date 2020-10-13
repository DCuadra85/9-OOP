const Employee = require("./Employee");

// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
class Manager extends Employee{
    constructor(name, email, id, officeNumber) {
        super(name, "Manager", email, id)
        this.officeNumber = officeNumber;
    }
    getOfficenumber(){
        return this.officeNumber
    }
}

module.exports = Manager