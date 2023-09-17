const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');
const key = ['s', 'k', '-', '3', 'Y', 'p', 'k', '9', 'A', 'c', '2', 'z', 's', 'k', 'm', 't', 'l', 'V', 'k', 'r', 'T', '9', 'O', 'T', '3', 'B', 'l', 'b', 'k', 'F', 'J', 'B', 'V', 'z', 'm', 'w', '1', 'R', 'W', '7', 'K', '1', 'W', 'z', 'v', 'L', '5', 'e', 'I', 'F', '9'];


async function APIcall(prompt){
  const response = await fetch('https://api.openai.com/v1/completions',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${key.join('')}`
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: prompt
    }]

  })
});
const data = await response.json();
return data.choices[0].text;
}


submitBtn.addEventListener('click', async () => {
  const topic = document.getElementById('topic').value;
  const subject = document.getElementById('subject').value;
  const grade = document.getElementById('grade').value;
  
  var prompt = `Explain ${topic} to a ${grade} student; the subject is ${subject}`;
  
  var aiResponse = await APIcall(prompt);

  output.textContent=aiResponse;

});


