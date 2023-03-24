const inquirer = require('inquirer');
const fs = require('fs');

const generateTeamHTML = require('../utils/generateHTML');
const Manager = require('../class/manager');
const Employee = require('../class/employee');
const Engineer = require('../class/engineer');
const Intern = require('../class/intern');

const Employees=[];
let isTeamComplete = false;

const validateInput = (userInput) => {
  if (userInput===""){
    return "please type your answers before proceeding.";
    }else{
    return true;
  }
};

const init = async() => {
  await createManager();

  while (!isTeamComplete){
    const employeeTypeQuestion = [
      {
        type:"list",
        message:"Please select the employee type you wish to add",
        name:"employeeType",
        choices:[
          {name: "Engineer", value:"engineer", short: "Engineer"},
          {name: "Intern", value:"intern", short: "Intern"},
          {name: "None", value:"none", short: "None"},
        ],
      },
    ];

    const{employeeType} = await inquirer.createPromptModule(employeeTypeQuestion);
    if (employeeType==="none"){
      isTeamComplete=true;
    }else{
      if (employeeType==="engineer"){
        await createEngineer();
      }
      if (employeeType==="intern"){
        await createIntern();
      }
      }
    }

    const HTML = generateHTML(Employees);
    fs.writeFileSync("team-profile.html",HTML,(err) => {
      if (err){
        console.log(err);
      }else{
        console.log("HTLM file created");
      }
    });
    };


    const createManager = async() => {
      const managerQuestions = [
        {
          type:"input",
          message: "Enter manager name",
          name:"name",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter Employee ID",
          name:"id",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter your office number",
          name:"officeNumber",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter work email",
          name:"email",
          validate:validateInput,
        },
        
      ];

      const managerAnswers = await inquirer.createPromptModule(managerQuestions);
      const manager = new Manager(managerAnswers);
      Employees.push(manager);
    };



    const createEngineer = async() => {
      const engineerQuestions = [
        {
          type:"input",
          message: "Enter engineer name",
          name:"name",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter engineer ID",
          name:"id",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter engineer email",
          name:"email",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter engineer github",
          name:"github",
          validate:validateInput,
        },
        
      ];

      const engineerAnswers = await inquirer.createPromptModule(engineerQuestions);
      const engineer = new Engineer(engineerAnswers);
      Employees.push(engineer);
    };

    const createIntern = async() => {
      const InternQuestions = [
        {
          type:"input",
          message: "Enter intern name",
          name:"name",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter intern ID",
          name:"id",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter inten email",
          name:"email",
          validate:validateInput,
        },
        {
          type:"input",
          message: "Enter intern school",
          name:"school",
          validate:validateInput,
        },
        
      ];

      const internAnswers = await inquirer.createPromptModule(internQuestions);
      const intern = new Intern(internAnswers);
      Employees.push(intern);
    };
    init();