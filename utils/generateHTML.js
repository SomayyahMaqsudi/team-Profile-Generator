const fs = require("fs");

const path = require("path");
const Employee = require("../class/employee");

const templatesDir = path.resolve(__dirname, "../templates");

const generateHTML = (Employees) => {
    const HTML = [];
    HTML.push(
        Employees
        .filter((Employee) => Employee.getRole()==="Manager")
    .map((manager) => renderManager(manager))
);
HTML.push(
    Employees
    .filter((Employee) => Employee.getRole()==="Engineer")
    .map((engineer) => renderEngineer(engineer))
);
HTML.push(
    Employees
    .filter((Employee) => Employee.getRole()==="Intern")
    .map((intern) => renderIntern(intern))
);
return renderFullMarkdown(HTML.join(""));
};

const renderManager=(manager) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "manager.html"),
        "utf8"
    );

    template=replaceTemplates(template, "name", manager.getName());
    template=replaceTemplates(template, "ID", manager.getid());
    template=replaceTemplates(template, "email", manager.getEmail());
    template=replaceTemplates(template, "role", manager.getRole());
    template = replaceTemplates(
    template,
    "officeNumber",
    manager.getOfficeNumber()
    );
    return template;
};



const renderEngineer = (engineer) => {
    let template=fs.readFileSync(
        path.resolve(templatesDir, "engineer.html"),
        "utf8"
    );
    template=replaceTemplates(template, "name", engineer.getName());
    template=replaceTemplates(template, "ID", engineer.getId());
    template=replaceTemplates(template, "role", engineer.getRole());
    template=replaceTemplates(template, "email", engineer.getEmail());
    template=replaceTemplates(template, "Github", engineer.getGithub());
    return template;
};

const renderIntern = (intern) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "intern.html"),
        "utf8"
    );
    template=replaceTemplates(template, "name", intern.getName());
    template=replaceTemplates(template, "ID", intern.getId());
    template=replaceTemplates(template, "role", intern.getRole());
    template=replaceTemplates(template, "email", intern.getEmail());
    template=replaceTemplates(template, "School", intern.getSchool());
    return template;
};

const renderFullMarkdown = (html) => {
    let template = fs.readFileSync(
        path.resolve(templatesDir, "full-markdown.html"),
        "utf8"
    );

    return replaceTemplates(template,"team", html);
};

const replaceTemplates = (template,placeholder,value)=> {
    const pattern = new RegExp('{{${placeholder}}}',"gm");
    return template.replace(pattern,value);
};

module.exports=generateHTML;
