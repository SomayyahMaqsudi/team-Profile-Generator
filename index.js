const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateTeamHTML = require('./src/generateHTML');

const Manager = require('./class/manager');
const Engineer = require('./class/engineer');
const Intern = require('./class/intern');

const teamArray=[];

const distDIR = path.resolve(__dirname, "dist")
const outPutHTML = path.join(distDIR, "teamProfile.html")

const validateInput = (userInput) => {
  if (userInput===""){
    return "please type your answers before proceeding.";
    }else{
    return true;
  }
};

const init = async() => {
}

function newManager (){
  inquirer.prompt([{
    type:"input",
    name:"name",
    message:"What is the name of the Manager?"
  },{
    type:"input",
    name:"id",
    message:"What is the id of the Manager?"
  },
  {
    type:"input",
    name:"email",
    message:"What is the email of the Manager?"
  },
  {
    type:"input",
    name:"officeNumber",
    message:"What is the officeNumber of the Manager?"
  }])
  .then(managerAnswers => {
    const manager = new Manager  (
      managerAnswers.name,
      managerAnswers.email,
      managerAnswers.id,
      managerAnswers.officeNumber
    )
    teamArray.push(manager)
    startQuestions();
  
  })
}

    function startQuestions(){
    inquirer.prompt(  {
      type:"list",
      message:"Please select the employee type you wish to add",
      name:"employeeType",
      choices:[
        "Engineer","Intern","I'm done"
      ],
    }).then(function(answers){
      switch(answers.employeeType){
       case "Engineer":
          newEngineer()
          break;
      case "Intern":
        newIntern()
        break;
      default:
        buildTeam()
      }
    })
  }

    function newEngineer (){
      inquirer.prompt([{
        type:"input",
        name:"name",
        message:"What is the name of the Engineer?"
      },{
        type:"input",
        name:"id",
        message:"What is the id of the Engineer?"
      },
      {
        type:"input",
        name:"email",
        message:"What is the email of the Engineer?"
      },
      {
        type:"input",
        name:"github",
        message:"What is the github of the Engineer?"
      }])
      .then(engineerAnswers => {
        const engineer = new Engineer  (
          engineerAnswers.name,
          engineerAnswers.email,
          engineerAnswers.id,
          engineerAnswers.github
        )
        teamArray.push(engineer)
        startQuestions();
      
    })
    }
    
    function newIntern (){
      inquirer.prompt([{
        type:"input",
        name:"name",
        message:"What is the name of the Intern?"
      },{
        type:"input",
        name:"id",
        message:"What is the id of the Intern?"
      },
      {
        type:"input",
        name:"email",
        message:"What is the email of the Intern?"
      },
      {
        type:"input",
        name:"school",
        message:"What is the school of the Intern?"
      }])
      .then(internAnswers => {
        const inten = new Intern  (
          internAnswers.name,
          internAnswers.email,
          internAnswers.id,
          internAnswers.school
        )
        teamArray.push(inten)
        startQuestions();
      
      })
    }

    newManager();
    
    function buildTeam(){
      fs.writeFileSync(outPutHTML, generateTeamHTML(teamArray), "utf-8")
    };