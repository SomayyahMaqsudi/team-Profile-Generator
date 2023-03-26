const inquirer = require('inquirer');
const fs = require('fs');

const generateTeamHTML = require('./utils/generateHTML');
const Manager = require('./class/manager');
const Employee = require('./class/employee');
const Engineer = require('./class/engineer');
const Intern = require('./class/intern');

const employee=[];
const engineer=[];
const intern=[];
const manager=[];

let isTeamComplete = false;

const validateInput = (userInput) => {
  if (userInput===""){
    return "please type your answers before proceeding.";
    }else{
    return true;
  }
};

const init = async() => {
  // await createManager();

  // while (!isTeamComplete){
  //   const employeeTypeQuestion = [
  //     {
  //       type:"list",
  //       message:"Please select the employee type you wish to add",
  //       name:"employeeType",
  //       choices:[
  //         {name: "Engineer", value:"engineer", short: "Engineer"},
  //         {name: "Intern", value:"intern", short: "Intern"},
  //         {name: "None", value:"none", short: "None"},
  //       ],
  //     },
  //   ];

  //   const{employeeType} = await inquirer.createPromptModule(employeeTypeQuestion);
  //   if (employeeType==="none"){
  //     isTeamComplete=true;
  //   }else{
  //     if (employeeType==="engineer"){
  //       await createEngineer();
  //     }
  //     if (employeeType==="intern"){
  //       await createIntern();
  //     }
  //     }
  //   }

  //   const HTML = generateHTML(Employees);
  //   fs.writeFileSync("team-profile.html",HTML,(err) => {
  //     if (err){
  //       console.log(err);
  //     }else{
  //       console.log("HTLM file created");
  //     }
  //   });
  //   };


  //   const createManager = async() => {
  //     const managerQuestions = [
  //       {
  //         type:"input",
  //         message: "Enter manager name",
  //         name:"name",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter Employee ID",
  //         name:"id",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter your office number",
  //         name:"officeNumber",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter work email",
  //         name:"email",
  //         validate:validateInput,
  //       },
        
  //     ];

  //     const managerAnswers = await inquirer.createPromptModule(managerQuestions);
  //     const manager = new Manager(managerAnswers);
  //     Employees.push(manager);
  //   };



  //   const createEngineer = async() => {
  //     const engineerQuestions = [
  //       {
  //         type:"input",
  //         message: "Enter engineer name",
  //         name:"name",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter engineer ID",
  //         name:"id",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter engineer email",
  //         name:"email",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter engineer github",
  //         name:"github",
  //         validate:validateInput,
  //       },
        
  //     ];

  //     const engineerAnswers = await inquirer.createPromptModule(engineerQuestions);
  //     const engineer = new Engineer(engineerAnswers);
  //     Employees.push(engineer);
  //   };

  //   const createIntern = async() => {
  //     const InternQuestions = [
  //       {
  //         type:"input",
  //         message: "Enter intern name",
  //         name:"name",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter intern ID",
  //         name:"id",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter inten email",
  //         name:"email",
  //         validate:validateInput,
  //       },
  //       {
  //         type:"input",
  //         message: "Enter intern school",
  //         name:"school",
  //         validate:validateInput,
  //       },
        
  //     ];

  //     const internAnswers = await inquirer.createPromptModule(internQuestions);
  //     const intern = new Intern(internAnswers);
  //     Employees.push(intern);
  //   };


    //the below should be contained in a function
}
    function startQuestions(){
    inquirer.prompt(  {
      type:"list",
      message:"Please select the employee type you wish to add",
      name:"employeeType",
      choices:[
        "Employee","Engineer","Intern","Manager"
      ],
    }).then(function(answers){
      switch(answers.employeeType){
        case "Employee":
          newEmployee()
          break;
       case "Engineer":
          newEngineer()
          break;
      case "Intern":
        newIntern()
        break;
      case "Manager":
        newManager()
        break;
      }
    })
  }

    function newEmployee (){
      inquirer.prompt([{
        type:"input",
        name:"name",
        message:"What is the name of the Employee?"
      },{
        type:"input",
        name:"id",
        message:"What is the id of the Employee?"
      },
      {
        type:"input",
        name:"email",
        message:"What is the email of the Employee?"
      }])
      .then(function(employeeAnswers){
        const newEmployee = {
          name:employeeAnswers.name,
          email: employeeAnswers.email,
          id:employeeAnswers.id
        }
        employee.push(newEmployee)
        again();
      
      })
    }

    function again(){
      inquirer.prompt({
        type:"confirm",
        name:"again",
        message:"do you want to add another employee?"
      }).then(function(answer){
        if(answer.again){
          startQuestions();
        }
        else{
          generateTeamHTML(employee);
          console.log("thank you for updating the employee database. goodbye!");
          return;
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
      .then(function(engineerAnswers){
        const newEngineer = {
          name:engineerAnswers.name,
          email: engineerAnswers.email,
          id:engineerAnswers.id,
          github:engineerAnswers.github
        }
        engineer.push(newEngineer)
        again();
      
      })
    }

    function again(){
      inquirer.prompt({
        type:"confirm",
        name:"again",
        message:"do you want to add another engineer?"
      }).then(function(answer){
        if(answer.again){
          startQuestions();
        }
        else{
          generateTeamHTML(engineer);
          console.log("thank you for updating the engineeer database. goodbye!");
          return;
        }
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
      .then(function(internAnswers){
        const newIntern = {
          name:internAnswers.name,
          email: internAnswers.email,
          id:internAnswers.id,
          school:internAnswers.school
        }
        intern.push(newIntern)
        again();
      
      })
    }

    function again(){
      inquirer.prompt({
        type:"confirm",
        name:"again",
        message:"do you want to add another intern?"
      }).then(function(answer){
        if(answer.again){
          startQuestions();
        }
        else{
          generateTeamHTML(intern);
          console.log("thank you for updating the intern database. goodbye!");
          return;
        }
      })
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
      .then(function(managerAnswers){
        const newManager = {
          name: managerAnswers.name,
          email: managerAnswers.email,
          id: managerAnswers.id,
          officeNumber: managerAnswers.officeNumber
        }
        manager.push(newManager)
        again();
      
      })
    }

    function again(){
      inquirer.prompt({
        type:"confirm",
        name:"again",
        message:"do you want to add another manager?"
      }).then(function(answer){
        if(answer.again){
          startQuestions();
        }
        else{
          generateTeamHTML(manager);
          console.log("thank you for updating the manager database. goodbye!");
          return;
        }
      })
    }

startQuestions();