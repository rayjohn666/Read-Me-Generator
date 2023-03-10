// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license == "MIT License") {
    return "https://opensource.org/licenses/MIT"
  } 

  else if (license == "Apache 2.0 License") {
    return "https://opensource.org/licenses/Apache-2.0" 
  } 

  else if (license == "GNU General Public License v3.0") {
    return "https://www.gnu.org/licenses/gpl-3.0"
  }
    else {
      return ""
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}


  ## Table of Contents 
  - [Installation](#installation)
  - [Usage](#usage)
  - [Description](#description)
  - [Testing](#testing)
  - [Contributing](#contributing)
  - [Contact Info Links](#Contact-Info-Links)


### Installation:

${data.installation}




### Usage:

${data.usage}





## Description:

 ${data.description}




### Test:




* ${data.test}


### Contributing:



* ${data.contribute}

Email: 



* ${data.email}

Github: 



* ${data.github}

`;
}

module.exports = generateMarkdown;
