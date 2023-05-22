// This function returns the badge of the license. For now I have only listed four badge that I have looked up online and their markdown files on github
function renderLicenseBadge(license) {
  const licenseBadge = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    Apache: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    GNU: '[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)',
    BSD: '[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)',
  };

  return licenseBadge[license] || '';
}

//This function creates the links where you can find the information of these licenses
function renderLicenseLink(license) {
  const licenseLink = {
    MIT: 'https://opensource.org/licenses/MIT',
    Apache: 'https://opensource.org/licenses/Apache-2.0',
    GNU: 'https://opensource.org/license/gpl-2-0/',
    BSD: 'https://opensource.org/licenses/BSD-3-Clause',
  };

  return licenseLink[license] || "";
}

// This function creates the section on the generated readme file 
function renderLicenseSection(license) {
  const licenseText = {
    MIT: 'MIT License',
    Apache: 'Apache License 2.0',
    GNU: 'GNU License 2.0',
    BSD: 'BSD License 3.0'
  };

  const licenseSection = `## License:
  This project is using the license ${licenseText[license]}.`;

  return licenseSection;

}

// This function creates the README.md file
function generateMarkdown(data) {

  const {license} = data;

  const licenseBadge = renderLicenseBadge(license);
  const licenseLink = renderLicenseLink(license);
  const licenseSection = renderLicenseSection(license);

  return `# ${data.title}
  ${licenseBadge}
  ## Description:
  ${data.description}
  ## Table of Contents:
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributions](#contributions)
  * [Tests](#tests)
  * [Questions](#questions)
  ### Installation:
  ${data.installation}
  ### Usage:
  ${data.usage}
  ### License:
  ${licenseSection}

  License Information: [License](${licenseLink})
  ### Contributions:
  ${data.contributions}
  ### Tests:
  ${data.tests}
  ### Questions:
  
  For any questions you may have please contact me either at https://github.com/${data.github} 
  or email me at ${data.email}

  ### Note to Grader: 
  5/21: 
  - When I run the script, the licenses are considered as "Undefined". Also this might just be on the VSCode portion, but whenever I open the README.md file the content inside is different
  to when I preview the README.md
  - The recording is inside the utils folder but the link doesn't seem to work and I am not sure how to fix it. 
`;
}

module.exports = generateMarkdown;
