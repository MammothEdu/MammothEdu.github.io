// document.addEventListener('DOMContentLoaded', () => {
// const submitBtn = document.getElementById('submit');
// const output = document.getElementById('output');

// submitBtn.addEventListener('click', () => {
//   const dropdown1 = document.getElementById('dropdown1').value;
//   const dropdown2 = document.getElementById('dropdown2').value;
//   const textinput = document.getElementById('textinput').value;

//   const outputText = `${dropdown1} - ${dropdown2}\n\n${textinput}`;

//   output.textContent = outputText;
// });

document.addEventListener('DOMContentLoaded', () => {

  const submitBtn = document.getElementById('submit');
  const output = document.getElementById('output');

  submitBtn.addEventListener('click', () => {
    let outputText = '';
    outputText += `${dropdown1.value} - ${dropdown2.value}\n\n`; 
    outputText += textinput.value;
    
    output.textContent += outputText;
  });

});
