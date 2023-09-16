const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');
const OPENAI_API_KEY=process.env.OPENAI_API_KEY;

async function APIcall(prompt){
  const response = await fetch('https://api.openai.com/v1/completions',{
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${OPENAI_API_KEY}`
  },
  body: JSON.stringify({
    model: 'gpt-3.5-turbo',
    messages: [{
      role: 'user',
      content: str
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
  
  const str = `Explain ${topic} to a ${grade} student; the subject is ${subject}`;
  
  const aiResponse = await APIcall(str);

  output.textContent=aiResponse;

});


