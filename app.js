const fs = require('fs');
const util = require('util');
const employee = require(./employee)
const inquirer = require('inquirer');

const employee = new employee();

const writeFileAsync = util.promisify(fs.writeFile);


const employees = [];

const teamAdd = () => 
inquirer.prompt([
    {
    type: 'list'
    name: 'employeeRole'
    message: 'Add member!'
    Choices: [
        'Manager',
        'Engineer'
        'Intern'
        'Finished adding employees'
    ]
}

]) .then(addMember => {
    switch (addMember.employeeRole) {
        case "Manager":
            addManager();
            break;

            case "Engineer":
                addEngineer();
                break;
            
                case "Intern":
                    addIntern();
                    break;

                    case 'Finished adding employees'
                    render(teamMembers);
                    break;
    }
})

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
{
            type: "list",
            name: "teamMemberSelection",
            message: "Whice type of team member would you like to add?",
            choices: ["Intern", "Engineer", "None"] 
    }
]).then(addMember => {
    const manager = new manager(addMember.managerName, addMember.managerID, addMember.managerEmail, addMember.managerOfficeNumber)
    employees.push(manager)
    teamAdd();
})


const addIntern = () => {
    inquirer.prompt([

{
    type: 'input',
    name: 'internName',
   message: "What is your intern's name?"
}
{
    type: 'input',
    name: 'internId'
   message: "What is your intern's ID?"
}
{
    type: 'input',
    name: 'internEmail',
   message: "What is your intern's email?"
}
{
    type: 'input',
    name: 'internSchool',
   message: "What is your intern's school?"
}
]).then(addMember => {
    const intern = new intern(addMember.internName, addMember.internID, addMember.internEmail, addMember.internSchool)
    employees.push(intern)
    teamAdd();
})};



const addEngineer = () => {
    inquirer.prompt([
{
    type: 'input',
    name: 'engineerName',
   message: "What is your engineer's name?"
}
{
    type: 'input',
    name: 'engineerID',
   message: "What is your engineer's ID?"
}
{
    type: 'input',
    name: 'engineerEmail',
   message: "What is your engineer's email?"
}
{
    type: 'input',
    name: 'engineerGithub',
   message: "What is your engineer's github address?"
}
]).then(addMember => {
    const engineer = new engineer(addMember.engineerName, addMember.engineerID, addMember.engineerEmail, addMember.engineerGithub)
    employees.push(engineer)
    teamAdd();
})};
module.exports = employees
teamAdd();



    // fs.writeFileSync('index.html', html);
};
