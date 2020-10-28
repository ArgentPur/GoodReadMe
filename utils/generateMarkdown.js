// function passing in liscense as an arg
function renderLicenseBadge(license){
  if (license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
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
  ${data.github}
  
  # GitHub Name

  ${data.projectName}
`;
}

module.exports = generateMarkdown;
