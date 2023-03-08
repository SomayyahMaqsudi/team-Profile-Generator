const fs = require('fs');
const inquirer = require('inquirer');
const open = require('open');

const team = [];

function promptManager() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the team manager’s name:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the team manager’s ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the team manager’s email address:',
      },
      {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the team manager’s office number:',
      },
    ])
    .then((answers) => {
      const manager = {
        name: answers.name,
        id: answers.id,
        email: answers.email,
        officeNumber: answers.officeNumber,
        role: 'Manager',
      };
      team.push(manager);
      promptMenu();
    });
}

function promptMenu() {
  inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What would you like to do?',
        choices: ['Add an Engineer', 'Add an Intern', 'Finish Building My Team'],
      },
    ])
    .then((answer) => {
      switch (answer.choice) {
        case 'Add an Engineer':
          promptEngineer();
          break;
        case 'Add an Intern':
          promptIntern();
          break;
        case 'Finish Building My Team':
          generateTeamHTML();
          break;
      }
    });
}

function promptEngineer() {
  inquirer
    .prompt([
      {
        type: 'input',
        name: 'name',
        message: 'Enter the engineer’s name:',
      },
      {
        type: 'input',
        name: 'id',
        message: 'Enter the engineer’s ID:',
      },
      {
        type: 'input',
        name: 'email',
        message: 'Enter the engineer’s email address:',
      },
      {
        type: 'input',
        name: 'github',
        message: 'Enter the engineer’s GitHub username:',
      },
    ])
    .then((answers) => {
      const engineer = {
        name: answers.name,
        id: answers.id,
        email: answers.email,
        github: answers.github,
        role: 'Engineer',
      };
      team.push(engineer);
      promptMenu()})};
