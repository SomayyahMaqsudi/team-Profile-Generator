const generateHTML = team => {

const generateManager = manager => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        <h2 class="card-title">${manager.getName()}</h2>
        <h3 class="card-title">${manager.getRole()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${manager.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${manager.getEmail()}">${manager.getEmail()}</a></li>
            <li class="list-group-item">OfficeNumber: ${manager.getOfficeNumber()}</li>
        </ul>
    </div>
    `
}

const generateEngineer = engineer => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        <h2 class="card-title">${engineer.getName()}</h2>
        <h3 class="card-title">${engineer.getRole()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${engineer.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${engineer.getEmail()}">${engineer.getEmail()}</a></li>
            <li class="list-group-item">Github: ${engineer.getGithub()}</li>
        </ul>
    </div>
    `
}

const generateIntern = intern => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-header">
        <h2 class="card-title">${intern.getName()}</h2>
        <h3 class="card-title">${intern.getRole()}</h3>
    </div>

    <div class="card-body">
        <ul class="list-group">
            <li class="list-group-item">ID: ${intern.getId()}</li>
            <li class="list-group-item">Email: <a href="mailto:${intern.getEmail()}">${intern.getEmail()}</a></li>
            <li class="list-group-item">School: ${intern.getSchool()}</li>
        </ul>
    </div>
    `
}


const htmlCard = []
htmlCard.push(team
    .filter(employee => employee.getRole() === "Manager")
    .map(manager => generateManager(manager))
)
htmlCard.push(team
    .filter(employee => employee.getRole() === "Engineer")
    .map(engineer => generateEngineer(engineer))
    .join("")
)
htmlCard.push(team
    .filter(employee => employee.getRole() === "Intern")
    .map(intern => generateIntern(intern))
    .join("")
)
return htmlCard.join("")

};




module.exports = team => {

 return `
 <!DOCTYPE html>
 <html lang="en">
 <head>
     <meta charset="UTF-8">
     <meta http-equiv="X-UA-Compatible" content="IE=edge">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
     <link rel="stylesheet" href="style.css">
     <title>Team Profile</title>
 </head>
 <body>
     <div class="container-fluid">
         <div class="row">
           <div class="col-12 jumbotron mb-3 team-title">
             <h1 class="text-center">My team</h1>
           </div>
           
       </div>
     </div>
     <div class="container">
         <div class="row">
           <div class="col-12 d-flex justify-content-center team-box">
             ${generateHTML(team)}
           </div>
           
       </div>
     </div>
 </body>
 </html>
    `
;
};



