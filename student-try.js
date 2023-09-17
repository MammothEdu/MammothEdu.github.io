const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');
const key = ['s', 'k', '-', '3', 'Y', 'p', 'k', '9', 'A', 'c', '2', 'z', 's', 'k', 'm', 't', 'l', 'V', 'k', 'r', 'T', '9', 'O', 'T', '3', 'B', 'l', 'b', 'k', 'F', 'J', 'B', 'V', 'z', 'm', 'w', '1', 'R', 'W', '7', 'K', '1', 'W', 'z', 'v', 'L', '5', 'e', 'I', 'F', '9'];


async function APIcall(message){
// Make the API call
const response = await fetch('https://api.openai.com/v1/chat/completions', {
  method: 'POST', // You need to specify the HTTP method as 'POST' for this request
  headers: {
    'Authorization': `Bearer ${key.join('')}`,
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    messages: [
      {
        role: 'user',
        content: message
      } 
    ],
    model: "gpt-3.5-turbo",
    max_tokens: 50, // Adjust the max_tokens as needed
    temperature: 0.7, // Adjust the temperature for creativity (0.2 to 1.0)
  })
});
  console.log(response)
  var output = await response.json(); // Extract the response text
  console.log(output.choices[0].message.content); // Output the response
  return output.choices[0].message.content
}

submitBtn.addEventListener('click', async () => {
  const topic = document.getElementById('topic').value;
  const subject = document.getElementById('subject').value;
  const grade = document.getElementById('grade').value;
  
  var prompt = `Explain ${topic} to a ${grade} student; the subject is ${subject}`;
  
  var aiResponse = await APIcall(prompt);
  console.log(aiResponse);
  output.textContent=aiResponse;

});


