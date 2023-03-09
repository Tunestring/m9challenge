const inquirer = require('inquirer');
const fs = require('fs');

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'Title?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Enter a description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the installation instructions for your project?',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'How is your project used?',
    },
    {
      type: 'list',
      name: 'license',
      message: 'What license does your project use?',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'ISC'],
    },
    {
      type: 'input',
      name: 'contributing',
      message: 'How can others contribute to your project?',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'What tests have you written for your project?',
    },
    {
      type: 'input',
      name: 'questions',
      message: 'Questions:',
    },
    {
      type: "input",
      message: "What's your e-mail address?",
      name: "email",
    },
    {  
      type: "input",
      message: "Please enter GitHub username",
      name: "github",
    },

  ])
  .then((answers) => {
    const licenseBadge = `![License](https://img.shields.io/badge/License-${answers.license}-brightgreen.svg)`;
    const readmeBody = `
# ${answers.title}

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
${licenseBadge}\r\r

This project uses the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
${answers.questions}

Any further questions e-mail me: ${answers.email}\r\r
Check out my other projects: https://www.github.com/${answers.github}
`;

    fs.writeFile('README.md', readmeBody, (err) =>
      err ? console.log(err) : console.log('README successfully created. Happy coding!')
    );
  });