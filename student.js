const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');

submitBtn.addEventListener('click', () => {
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const question = document.getElementById('question').value;

  const outputText = `${subject} - ${difficulty}\n\n${question}`;

  output.textContent = outputText; 
});

