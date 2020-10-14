# Team Page Generator

You will be asked a series of questions that need to be entered. Once you enter in all of your answers and made the employee type selection, the program will automatically write a team HTML file for you. This will create a basic contacts page with all of the staff you entered. You have the option to add as many people as you would like.

* Use of JavaScript.
* Use of Node.Js.
* Use of HTML.

## Installation

You will first need to make sure you have Node.JS installed within your Visual Studio Code application. The next step would be to right click the Develop folder and select "Open in Integrated Terminal". When your terminal opens, type the command "npm install". Once the dependencies have installed, type the command "node app.js" to start the program.

## Code

How Prompts Are Converted by Employee Type:

```
function questionStart() {
    inquirer.prompt(questionList)
        .then(answers => {
            responses.push(answers)
            if (answers.newEmployee) {
                questionStart();
            } else {
                // console.log(render(responses))
                const teams = responses.map(answers => {
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
```

Distinction Between Employee Types:

```
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
```


## Usage

This page's function was create through JavaScript with Node.js. Start the program using node index.js and fill in the series of prompts will start. Your HTML file will generate based on what you enter. Be sure to go into the develop folder and use the command "node app.js" to initiate the program. When completed, the team.HTML file will be entered in the Output folder.

<img src="./teambuildergif.gif">



## Credits

* https://github.com/coding-boot-camp/
* https://stackoverflow.com/questions/
* https://guides.github.com/features/mastering-markdown/
* https://www.tutorialsteacher.com/nodejs/nodejs-file-system


## Built With

* [HTML](https://developer.mozilla.org/en-US/docs/Web/HTML)
* [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Deployed Link

* https://dcuadra85.github.io/9-OOP/


## Authors

* **Daniel Cuadra** 

- [GitHub](https://github.com/DCuadra85)
- [LinkedIn](https://www.linkedin.com/in/daniel-cuadra-3705aa39/)


## License

MIT License

Copyright (c) [2020] [DanielCuadra]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.