const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');

submitBtn.addEventListener('click', () => {
  const topic = document.getElementById('topic').value;
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  
  output.textContent = `${topic} - ${subject} - ${difficulty}`;
});
