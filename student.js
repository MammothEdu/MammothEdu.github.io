
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


const form = document.getElementById('form');
const output = document.getElementById('output');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  let outputText = '';
  
  outputText += `${dropdown1.value} - ${dropdown2.value}\n\n`;
  outputText += textinput.value;

  output.textContent = outputText;
});
