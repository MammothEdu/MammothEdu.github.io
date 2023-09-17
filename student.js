
// document.addEventListener('DOMContentLoaded', () => {

//   const submitBtn = document.getElementById('submit');
//   const output = document.getElementById('output');

//   submitBtn.addEventListener('click', () => {
//     let outputText = '';
//     outputText += `${dropdown1.value} - ${dropdown2.value}\n\n`; 
//     outputText += textinput.value;
    
//     output.textContent += outputText;
//   });

// });
////////////////////////////////
////////////////////////////////
// const form = document.getElementById('form');
// const output = document.getElementById('output');

// form.addEventListener('submit', e => {
//   e.preventDefault();
  
//   let outputText = '';
  
//   outputText += `${dropdown1.value} - ${dropdown2.value}\n\n`;
//   outputText += textinput.value;

//   output.textContent = outputText;
// });

// JavaScript code 

const outputDiv = document.getElementById('output');

document.getElementById('submit-btn').addEventListener('click', () => {

  // Get values
  const textboxVal = document.getElementById('textbox').value;
  const dropdown1Val = document.getElementById('dropdown1').value;
  const dropdown2Val = document.getElementById('dropdown2').value;

  // Construct output text
  let outputText = `Text Input: ${textboxVal} \nDropdown 1: ${dropdown1Val} \nDropdown 2: ${dropdown2Val}`;

  // Display output
  outputDiv.textContent = outputText;

});
