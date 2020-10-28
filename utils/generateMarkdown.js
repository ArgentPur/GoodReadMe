// function passing in liscense as an arg
function renderLicenseBadge(license){
  if (license !== "None"){
    return ""
  }
}
//fucntion for creating link
function renderLicenseLink(license){

}
//function for license section
function renderLicenseSection(license){

}
// validate lisense exists

// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.name}
  ${data.gitub}
  

  # GitHub Name

  ## Project Titleindex

  ${data.projectName}
`;
}

module.exports = generateMarkdown;
