// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = ({
  title,
  description,
  install,
  usage,
  contribute,
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
## Questions
#### GitHub Profile
[${github}](https://github.com/shayosullivan) 
#### LinkedIn Profile(https://www.linkedin.com/in/seamus-o-sullivan-2274b1238/)
[${linkedIn}]
  `;
};

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      message: "Title of project:",
      name: "title",
    },
    {
      type: "input",
      message: "Description of project:",
      name: "description",
    },
    {
      type: "input",
      message: "Installation instructions:",
      name: "install",
    },
    {
      type: "input",
      message: "How is this project used:",
      name: "usage",
    },
    {
      type: "input",
      message: "How do you contribute to this project:",
      name: "contribute",
    },

    {
      type: "list",
      message: "What license did you use:",
      name: "license",
      choices: [
        "The MIT License",
        "The GPL License",
        "Apache License",
        "GNU License",
      ],
    },
    {
      type: "input",
      message: "GitHub username:",
      name: "github",
    },
    {
      type: "input",
      message: "LinkedIn username:",
      name: "linkedIn",
    },
  ])
  .then((data) => {
    //generateMarkdown(data);
    fs.writeFile("README.md", generateMarkdown(data), (err) => {
      if (err) console.log(err);
      else {
        console.log("Success!");
      }
    });
  });
