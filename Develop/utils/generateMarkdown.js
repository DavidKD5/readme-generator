function renderLicenseLink(data) {
  if (data.license === "Apache") {
    return "https://opensource.org/licenses/Apache-2.0";
  } else if (data.license === "CC0") {
    return "http://creativecommons.org/publicdomain/zero/1.0/";
  } else if (data.license === "GNU GPL v3") {
    return "https://www.gnu.org/licenses/gpl-3.0";
  } else if (data.license === "MIT License") {
    return "https://opensource.org/licenses/MIT";
  } else {
    return "No License";
  }
}

function renderLicenseSection(data) {
  if (data.license === "Apache") {
    return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
  } else if (data.license === "CC0") {
    return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
  } else if (data.license === "GNU GPL v3") {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
  } else if (data.license === "MIT License") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else {
    return "No License";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Description

  ${data.description}

  ![](assets/images/img1.png)
  ![](assets/images/img2.png)
  ![](assets/images/img3.png)

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Credits

  ${data.credits}

  ## Tests

  ${data.tests}

  ## License

  ${renderLicenseSection(data)}

  Copyright ${new Date().getFullYear()} David KD

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    ${renderLicenseLink(data)}

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;
}

module.exports = generateMarkdown;
