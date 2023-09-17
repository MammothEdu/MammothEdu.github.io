document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit');
  const output = document.getElementById('output');
  const textinput = document.getElementById('Topic'); // Added textinput

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    let outputText = '';
    const Subject = document.getElementById('Subject'); // Added Subject
    const Grade = document.getElementById('Grade'); // Added Grade

    if (Subject.value === 'Choose' || Grade.value === 'Choose') {
      alert('Please select a subject and grade.'); // Display an alert if subject or grade is not selected
      return;
    }

    outputText += `Subject: ${Subject.value}\nGrade: ${Grade.value}\nTopic: ${textinput.value}\n\n`;

    // Clear previous content and append new output in a box
    const outputBox = document.createElement('div');
    outputBox.className = 'output-box';
    outputBox.textContent = outputText;
    output.appendChild(outputBox);

    // Reset form fields after submission
    textinput.value = '';
    Subject.value = 'Choose';
    Grade.value = 'Choose';
  });
});
