const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");
const employees = [];

function teamAdd() {
inquirer.prompt([
    {
    type: 'list',
    name: 'employeeRole',
    message: 'Add member!',
    choices: [
        'Manager',
        'Engineer',
        'Intern',
        'Finished adding employees'
    ]
}

]) .then(function(response) {
    switch (response.employeeRole) {
        case "Manager":
            addManager();
            break;

            case "Engineer":
                addEngineer();
                break;
            
                case "Intern":
                    addIntern();
                    break;

                    case 'Finished adding employees':
                    buildTeam();
                    break;
    }
})
}


const addManager = () => {
inquirer.prompt([
        {
            type: 'input', 
            name: 'managerName',
           message: "What is your manager's name? "
        },
        {
             type: 'input', 
            name: 'managerID',
            message: "What is your manager's ID? "
        },
{
            type: 'input', 
            name: 'managerEmail',
           message: "What is your manager's email? "
},
{
            type: 'input', 
            name: 'managerOfficeNumber',
            message: "What is your manager's office number?? "
},
]).then(addMember => {
    const manager = new Manager(addMember.managerName, addMember.managerID, addMember.managerEmail, addMember.managerOfficeNumber)
    employees.push(manager)
    teamAdd();
})
}

const addIntern = () => {
    inquirer.prompt([

{
    type: 'input',
    name: 'internName',
   message: "What is your intern's name?"
},
{
    type: 'input',
    name: 'internId',
   message: "What is your intern's ID?"
},
{
    type: 'input',
    name: 'internEmail',
   message: "What is your intern's email?",
},
{
    type: 'input',
    name: 'internSchool',
   message: "What is your intern's school?",
}
]).then(addMember => {
    const intern = new Intern(addMember.internName, addMember.internID, addMember.internEmail, addMember.internSchool)
    employees.push(intern)
    teamAdd();
})};



const addEngineer = () => {
    inquirer.prompt([
{
    type: 'input',
    name: 'engineerName',
   message: "What is your engineer's name?"
},
{
    type: 'input',
    name: 'engineerID',
   message: "What is your engineer's ID?"
},
{
    type: 'input',
    name: 'engineerEmail',
   message: "What is your engineer's email?"
},
{
    type: 'input',
    name: 'engineerGithub',
   message: "What is your engineer's github address?"
}
]).then(addMember => {
    const engineer = new Engineer(addMember.engineerName, addMember.engineerID, addMember.engineerEmail, addMember.engineerGithub)
    employees.push(engineer)
    teamAdd();
})};


const buildTeam = () => {
    fs.writeFileSync(outputPath, render(employees), 'utf8')
}
teamAdd();


