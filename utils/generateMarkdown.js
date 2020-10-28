// function passing in liscense as an arg
function renderLicenseBadge(license){
  if (license !== "None"){
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ''
}
//fucntion for creating link
function renderLicenseLink(license){
  if (license !== "None") {
    return (`\n* [License](#license)\n`)
  }
  return ''

}
//function for license section
function renderLicenseSection(license){
  if (license !== "None") {
    return (`## License: ${license} is the current license used for this application.`)
  }
  return ''

}
// validate lisense exists

// return ![GitHub license](https://img.shields.io/badge/license- ROUTE HERE -blue.svg)


// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.github}
  ${renderLicenseBadge(data.license)}
  ## GitHub Name
  ${data.email}
  ## Contact 
  ${data.projectTitle}
  # Project Title
  ${data.description}
  ## Application Description
  ${data.dependencies}
  ### Application Dependencies
  ${data.license}
  ### License Used
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
`;
}

module.exports = generateMarkdown;
