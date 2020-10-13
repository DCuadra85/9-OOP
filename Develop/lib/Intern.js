const Employee = require("./Employee");

// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.
class Intern extends Employee{
    constructor(name, email, id, school) {
        super(name, "Intern", email, id)
        this.school = school;
    }
    getSchool(){
        return this.school;
    }
}

module.exports = Intern