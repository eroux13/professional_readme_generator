// Function to generate Markdown
const generateMd = (data) =>
    `# ${data.title}
![License](https://img.shields.io/badge/License-${data.license}-blue)

## Description

${data.description}

## Table of Contents

* [Description](#description)
* [License](#license)
* [Installation](#installation)
* [Usage](#usage)
* [Contributors](#contributors)
* [Tests](#tests)
* [Questions](#questions)
    
## License

License chosen: ${data.license}.
More information about the license chosen can be found on [Open Source Initiative](https://opensource.org/licenses/${data.license}).
    
## Installation

${data.install}

## Usage

${data.usage}

## Contributors

[${data.contributor}](https://www.github.com/${data.contributor})

## Tests

${data.test}

## Questions

Feel free to follow my GitHub [profile](https://www.github.com/${data.username}).
If you have any questions about this project, please reach out to me via ${data.email}.`;

// Export generateMd()
module.exports = generateMd;