const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

// const manager = new Manager(name, email)

const responses = []
const questionList = [
    {
        type: "list",
        choices: ["Manager", "Engineer", "Intern"],
        name: "role",
        message: "What type of employee are you adding?"
    },
    {
        type: "input",
        message: "What is your name?",
        name: "name",
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email",
    },
    {
        type: "input",
        message: "What is your github",
        name: "github",
        when:
            (answers) => answers.role === "Engineer",
    },
    {
        type: "input",
        message: "What is your office number?",
        name: "officenumber",
        when:
            (answers) => answers.role === "Manager",
    },
    {
        type: "input",
        message: "What is your school?",
        name: "school",
        when:
            (answers) => answers.role === "Intern"
    },
    {
        type: "confirm",
        name: "newEmployee",
        message: "Do you want to add another employee?",
    },
]

function questionStart() {
    inquirer.prompt(questionList)
        .then(answers => {
            responses.push(answers)
            if (answers.addEmployee) {
                questionStart();
            } else {
                console.log(render(responses))
                const team = responses.map(answers => {
                    switch (answers.role) {
                        case "Engineer":
                            return new Engineer(answers.name, answers.id, answers.email, answers.github)
                        case "Intern":
                            return new Intern(answers.name, answers.id, answers.email, answers.school)
                        case "Manager":
                            return new Manager(answers.name, answers.id, answers.email, answers.officenumber)
                        default:
                            throw "Choose an Employee"
                    }
                });
                fs.writeFile(outputPath, render(team), err => {
                    if(err){
                        throw err
                    }
                    console.log("Write Successful")
                });
            }
        })
        .catch(err => {
            if(err){
                console.log("Error, ", err);
            }
        })
}

questionStart()
    // .then(answers => {
    //     userInput.push(answers)
    // })
    // .then(answers)

// Make a master class of employee (name tbd), have the
// employee/engineer/manager/intern inherit this class and use the 
// unique identifiers.

// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
