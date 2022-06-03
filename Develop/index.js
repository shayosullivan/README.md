// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  title,
  description,
  install,
  usage,
  contribute,
  test,
  license,
  github,
  linkedIn,
}) => {
  return `# ${title}
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
    
## Description
${description}
## Installation
${install}
## Usage
${usage}
## License
${license}
## Contributing
${contribute}
## Tests
${test}
## Questions
#### GitHub Profile
[${github}](https://github.com/shayosullivan) 
#### LinkedIn Profile
[${linkedIn}](https://www.linkedin.com/in/seamus-o-sullivan-2274b1238/) 
  `;
};

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
