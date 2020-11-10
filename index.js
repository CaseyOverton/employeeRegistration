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




.then(function (answers) {
    // console.log(answers)
    // const html = generateHTML(answers);
    // console.log(generateHTML(answers))
    let html = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
        <title>Document</title>
        <style>
            body {
                font-family: 'Open Sans Condensed', sans-serif;
                background-color: grey;
                color: black;
            }
            #tableOfContents {
                text-align: center;
            }
            #description {
                text-align: center;
            }
            h1 {
                text-align: center;
            }
             #bodyInfo{
                text-align: left;
            }
        </style>
    </head>
    <body>
        <h1>${answers.project}</h1><br>
        <div id='description'>
        <h2>Project Description: </h2><h3>${answers.description}</h3><br>
        </div>  
    
        <div id=tableOfContents>
        <h1>Table of Contents </h1>
            <p>
            <a id="installation">Installation</a><br>
            <a id="license">License</a><br>
            <a id="usage">Usage</a><br>
            <a id="contribution">Contribution</a><br>
            <a id="tests">Test Installation</a><br>
            <a id="contact">Contact Me/Questions</a><br><br>
        </p>
    </div>
    
    <div id='bodyInfo'>
        <h2 id="installation">Installation: ${answers.installation}</h2><br>
        <h2 id="license">License: ${answers.license}</h2><br>
        <h2 id='usage'>Usage: ${answers.toKnow}</h2><br>
        <h2 id='contribution'>Contribution Guidelines: ${answers.contribution}</h2><br>
        <h2 id='tests'>Test Instructions: ${answers.tests}</h2><br>
        <p id='contact'>Questions? Contact Me @ <a href="github.com/${answers.github}">My Github Profile</a><br> Email: ${answers.email}</p>
    </div>
    </body>
    </html>`
    fs.writeFileSync('readme.md', html);
})


const generateHTML = answers => {
return 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans+Condensed:wght@300&display=swap" rel="stylesheet">
    <title>Document</title>
    <style>
        body {
            font-family: 'Open Sans Condensed', sans-serif;
            background-color: grey;
            color: black;
        }
        #tableOfContents {
            text-align: center;
        }
        #description {
            text-align: center;
        }
        h1 {
            text-align: center;
        }
         #bodyInfo{
            text-align: left;
        }
    </style>
</head>
<body>
    <h1>${answers.project}</h1><br>
    <div id='description'>
    <h2>Project Description: </h2><h3>${answers.description}</h3><br>
    </div>  

    <div id=tableOfContents>
    <h1>Table of Contents </h1>
        <p>
        <a id="installation">Installation</a><br>
        <a id="license">License</a><br>
        <a id="usage">Usage</a><br>
        <a id="contribution">Contribution</a><br>
        <a id="tests">Test Installation</a><br>
        <a id="contact">Contact Me/Questions</a><br><br>
    </p>
</div>

<div id='bodyInfo'>
    <h2 id="installation">Installation: ${answers.installation}</h2><br>
    <h2 id="license">License: ${answers.license}</h2><br>
    <h2 id='usage'>Usage: ${answers.toKnow}</h2><br>
    <h2 id='contribution'>Contribution Guidelines: ${answers.contribution}</h2><br>
    <h2 id='tests'>Test Instructions: ${answers.tests}</h2><br>
    <p id='contact'>Questions? Contact Me @ <a href="github.com/${answers.github}">My Github Profile</a><br> Email: ${answers.email}</p>
</div>
</body>
</html>`;
};

questions()
.then(answers => {
    const html = generateHTML(answers);
    return writeFileAsync('index.html', html);
})
.then(() => {
    console.log('wrote index.html');
})
.catch(err => console.log(err))};
// .then(() => {
//     console.log('successfully wrote index.html');
// })
// .catch(err => console.log(err));