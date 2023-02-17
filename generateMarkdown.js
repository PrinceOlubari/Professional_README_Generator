// function to generate markdown for README
function generateMarkdown(data) {
  return `
   
 # ${data.projectTitle}
        
 # ${data.installation}
  
  
  `;
}

module.exports = generateMarkdown;
