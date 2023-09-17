document.addEventListener('DOMContentLoaded', () => {

    const submitBtn = document.getElementById('submit');
    const output = document.getElementById('output');
    const textinput = document.getElementById('Topic'); // Added textinput
    
    submitBtn.addEventListener('click', () => {
      let outputText = '';
      const Subject = document.getElementById('Subject'); // Added Subject
      const Grade = document.getElementById('Grade'); // Added Grade
      
      outputText += `${Subject.value} - ${Grade.value}\n\n`; 
      outputText += textinput.value;
      
      // Clear previous content and append new output in a box
      output.innerHTML += `<div class="output-box">${outputText}</div>`;
    });
  
  });

// document.addEventListener('DOMContentLoaded', () => {

//   const submitBtn = document.getElementById('submit');
//   const output = document.getElementById('output');

//   submitBtn.addEventListener('click', () => {
//     let outputText = '';
//     outputText += `${Subject.value} - ${Grade.value}\n\n`; 
//     outputText += textinput.value;
    
    
//     // output.textContent += outputText;
//     output.innerHTML = `<div class="output-box">${outputText}</div>`; // Enclose in a box
//   });

// });


