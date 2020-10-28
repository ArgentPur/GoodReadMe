const inquirer = require("inquirer")
const fs = require("fs")
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// array of questions for user
const questions = [
{
    type: "input",
    name: "Github",
    message: "What is your github username?"
},
{
    type: "input",
    name: "email",
    message: "Enter your email:"
},
{
    type: "input",
    name: "Project Title",
    message: "What is the title of your project?"
  
},
{
    type: "input",
    name: "Description",
    message: "Provide a desriction of your project:"
   
},
{
    type: "input",
    name: "dependencies",
    message: "Please provide all dependencies related to this application."

},
{
    type:"list",
    name:"license",
    message:"What license is used for repo?",
    choices: ["MIT", "APACHE 2.0", "GLP 3.0", "BSD 3", "None"]  
}

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// function to initialize program
function init() {
    inquirer.prompt(questions) 
    // .then function
    .then((answers) => {
        console.log("Generating README");
        writeToFile("README.md", generateMarkdown({...answers}))
    })
    // call the function writeToFile using the data that we pass (ie the inquirer responses)
    writeToFile(fileName, data);
}

// function call to initialize program
init();
