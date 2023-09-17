document.addEventListener('DOMContentLoaded', () => {
  const submitBtn = document.getElementById('submit');
  const outputContainer = document.getElementById('output'); // Updated to target the output container

  submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    const textinput = document.getElementById('Topic');
    const Subject = document.getElementById('Subject');
    const Grade = document.getElementById('Grade');

    if (Subject.value === 'Choose' || Grade.value === 'Choose') {
      alert('Please select a subject and grade.'); // Display an alert if subject or grade is not selected
      return;
    }

    const outputText = `Subject: ${Subject.value}\nGrade: ${Grade.value}\nTopic: ${textinput.value}\n\n`;

    // Create a new div element for the output content
    const outputBox = document.createElement('div');
    outputBox.className = 'output-box';
    outputBox.textContent = outputText;

    // Append the new output to the output container
    outputContainer.appendChild(outputBox);

    // Reset form fields after submission
    textinput.value = '';
    Subject.value = 'Choose';
    Grade.value = 'Choose';
  });
});

