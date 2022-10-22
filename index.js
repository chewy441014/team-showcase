// install prerequisites
const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/Manager.js');
const Engineer = require('./lib/Engineer.js');
const Intern = require('./lib/Intern.js');
inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer))


// initialize questions
const questions = [
    { type: 'loop', name: "employees", message: "Add a team member? ", questions: [
            { name: "job", message: "Enter team member job title ", type: "list", choices: ["Engineer", "Intern", "Manager"] },
            { name: "name", message: "Enter team member name " },
            { name: "eID", message: "Enter team member employee ID " },
            { name: "email", message: "Enter team member email address " },
            { name: "offNum", message: "Enter team member office number ", when: (answers) => answers.job === "Manager" },
            { name: "school", message: "Enter team member school ", when: (answers) => answers.job === "Intern" },
            { name: "github", message: "Enter team member github username ", when: (answers) => answers.job === "Engineer" }]
    }
];

// generate the html document in order, iterating for each employee to generate a unique card
function genHTML(employees) {
    // takes an array of answers with which to create employee objs
    // htmlDoc will be the html text we wish to generate and save, start out by adding the top of the html document. 
    let htmlDoc = getHTMLHead("Our Team", "./src/style.css");
    // for each employee entered, generate an employee object and corresponding card
    for (let i = 0; i < employees.length; i++) {
        // new employee obj each iteration
        let employee;
        // if the current employee is a manager, make a manager obj and so on. 
        switch (employees[i].job) {
            case "Manager":
                employee = new Manager(employees[i].name, employees[i].eID, employees[i].email, employees[i].offNum);
                break;
            case "Engineer":
                employee = new Engineer(employees[i].name, employees[i].eID, employees[i].email, employees[i].github);
                break;
            case "Intern":
                employee = new Intern(employees[i].name, employees[i].eID, employees[i].email, employees[i].school);
                break;
        }
        // add the current employee card to the html doc
        htmlDoc += getCardHTML(employee);
    }
    // after the loop, add the foot of the html doc then write it to the index.html file
    htmlDoc += getHTMLFoot();
    fs.writeFile('./dist/index.html', htmlDoc, (err) => err ? console.error(err) : console.log('Success, created index.html'))
}

// generate the top of the html document
function getHTMLHead(title, cssPath) {
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>${title}</title>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
        <link rel="stylesheet" href="${cssPath}">
    </head>
    
    <body>
        <nav class="jumbotron text-center m-3 p-5">
            <h1>${title}</h1>
        </nav>
        <main class="d-flex flex-wrap m-3 p-5">`
}

// generate a card based on the employee object passed into it. 
function getCardHTML(employee) {
    return ` <div class="card m-1 p-1" style="width: 20rem">
    <div class="card-body">
        <h5 class="card-title">${employee.getName()}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${employee.getRole()}</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: ${employee.getId()}</li>
            <li class="list-group-item">Email: <a href = "mailto: ${employee.getEmail()}">${employee.getEmail()}</a></li>
            <li class="list-group-item">${employee.getDetail()}</li>
        </ul>
    </div>
</div>`
}

// generate the ending part of the html doc
function getHTMLFoot() {
    return `</main>
    <script src="../index.js"></script>
</body>

</html>`
}

// function to start things off
function onLoad() {
    // start the questions loop, asking for all the employee info
    inquirer.prompt(questions)
        .then((answers) => {
            // after the loop, generate html from their responses
            genHTML(answers.employees);
        });
}

// run on load
onLoad();