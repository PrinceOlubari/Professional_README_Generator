// function to generate markdown for README
function generateLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "PERL") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0";
  } else {
    return "";
  }
}

function generateLicenseDescription(license, user) {
  let currentYear = new Date().getFullYear();

  if (license == "MIT") {
    return `Copyright ${currentYear} ${user}

      Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
      
      The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
      
      THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.`;
  } else if (license == "PERL") {
    return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
  } else if (license == "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0";
  } else {
    return "";
  }
}

function generateMarkdown(data) {
  let badge = generateLicenseBadge(data.license);

  let licenseDescription = generateLicenseDescription(
    data.license,
    data.gitHubUsername
  );

  return `
   
  

 # ${data.projectTitle} ${badge}


 * [Install](#installation)
 * [Usage](#usage)
 * [Credits](#credits)
 * [License](#license)  
 
 
 ## Description
 ${data.description}
 
 
 ## Installation
 
 ${data.installation}
 
 ## Usage
  ${data.usage}
  
  ## License
  ${data.installation}
  ${licenseDescription}
  
  ## Contributions
  ${data.contributions}
  
  
  ## Tests
  ${data.tests}
  
  
  ## Questions
  [${data.gitHubUsername}]()
  
  * Email Address: 
  ${data.email}
  
  
  
  `;
}

module.exports = generateMarkdown;
