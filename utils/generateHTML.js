const fs = require("fs");
const path = require("path");
const employee = require("../class/employee");

const templatesDir = path.resolve(__dirname, "../templates");

let cards = "";

const generateHTML = (Employees) => {

    for (employee of Employees) {
        let card = `<div>
        <ul>
        <li>${employee.name}</li>
        <li><span>ID:</span>${employee.id}</li>
        <li><span>Email:</span> <a href="mailto:${employee.email}">${employee.email}</a></li>
        ${employee.github ? `<li><span>GitHub:</span> <a href="https://github.com/${employee.github}">${employee.github}</a></li>` : ""}   
        ${employee.school ? `<li><span>School:</span>${employee.school}` : ""}  
        ${employee.officenumber ? `<li><span>office number:</span> ${employee.officenumber}` : ""}  
    </ul>
    </div>
    `
        cards += card;
    }
};
    const finalHtml = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Team Profile Generator</title>
    <link rel="stylesheet" href="style.css">
    </head>
    <body>
    <header>
        <h1>My Team</h1>
    </header>

    <div class="cards">
    ${cards}
    </div>

    <script src="script.js"></script>
</body>
</html>
    `
    ;
fs.writeFile('./dist/teamProfile.html',finalHtml,'utf8',function(err){
    if (err) throw err;
});

module.exports = generateHTML;