// function to generate markdown for README
function generateLicenseBadge(license) {
  if (license == "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license == "ISC") {
    return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
  } else if (license == "Zlib") {
    return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
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
   } else if (license == "ISC") {
    return `Copyright ${currentYear} ${user}

    Permission to use, copy, modify, and/or distribute this software for any purpose with or without fee is hereby granted, provided that the above copyright notice and this permission notice appear in all copies.
    
    THE SOFTWARE IS PROVIDED “AS IS” AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.`;
   } else if (license == "Zlib") {
    return `Copyright (c) ${currentYear} ${user}

    This software is provided ‘as-is’, without any express or implied
    warranty. In no event will the authors be held liable for any damages
    arising from the use of this software.
    
    Permission is granted to anyone to use this software for any purpose,
    including commercial applications, and to alter it and redistribute it
    freely, subject to the following restrictions:
    
    1. The origin of this software must not be misrepresented; you must not
    claim that you wrote the original software. If you use this software
    in a product, an acknowledgment in the product documentation would be
    appreciated but is not required.
    
    2. Altered source versions must be plainly marked as such, and must not be
    misrepresented as being the original software.
    
    3. This notice may not be removed or altered from any source`;
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


 * [Description](#description)
 * [Installation](#installation)
 * [Usage](#usage)
 * [License](#license)  
 * [Credits](#credits)
 * [Contributions](#contributions)
 * [Tests](#tests)
 * [Questions](#questions)
 
 
 ## Description
 ${data.description}
 
  ## Installation
  ${data.installation}
 
 ## Usage
  ${data.usage}
  
  ## License
  ${licenseDescription}
  
  ## Contributions
  ${data.contributions}
  
  ## Credits
  ${data.credits}
  
  
  ## Tests
  ${data.tests}
  
  
  ## Questions
  Contact my GitHub Username:  ${data.gitHubUsername} Email Address: ${data.email}
  
    
  `;
}

module.exports = generateMarkdown;
