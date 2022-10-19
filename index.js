/* GOALS
GIVEN a command-line application that accepts user input
WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input
WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address
WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab
WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number
WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team
WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu
WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu
WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

AS A manager
I WANT to generate a webpage that displays my team's basic info
SO THAT I have quick access to their emails and GitHub profiles
*/

// install prerequisites
const inquirer = require('inquirer');
const fs = require('fs');


// intialize global variables
const questions = [
    {name: "job", message: "Enter team member job title ", type: "list", choices: ["Engineer", "Intern", "Manager"]},
    {name: "name", message: "Enter team member name "},
    {name: "eID", message: "Enter team member employee ID "},
    {name: "email", message: "Enter team member email address "},
    {name: "office", message: "Enter team member office number "}
];

function genericQuestions () {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            return answers
        });
}

function getHTMLHead (title, cssPath) {
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

function getCardHTML (answers) {
    // use answers to populate the card html
    return ` <div class="card m-1 p-1" style="width: 20rem">
    <div class="card-body">
        <h5 class="card-title">Person Name</h5>
        <h6 class="card-subtitle mb-2 text-muted">Job Title</h6>
        <ul class="list-group list-group-flush">
            <li class="list-group-item">ID: </li>
            <li class="list-group-item">Email: </li>
            <li class="list-group-item">Office No.: </li>
        </ul>
    </div>
</div>`
}

function getHTMLFoot () {
    return `</main>
    <script src="./index.js"></script>
</body>

</html>`
}

function writeHTML () {
    let htmlDoc = getHTMLHead("Our Team", "./assets/style.css");
    htmlDoc += getCardHTML()
    htmlDoc += getHTMLFoot();
    fs.writeFile('index.html', htmlDoc, (err) => err ? console.error(err) : console.log('Success, created index.html'))
}

function onLoad() {
    // genericQuestions();
    // let htmlDoc = getHTMLHead("Our Team", "./assets/style.css");
    // htmlDoc += getCardHTML()
    // htmlDoc += getHTMLFoot();
    writeHTML();
}

onLoad();