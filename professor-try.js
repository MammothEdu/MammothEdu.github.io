const submitBtn = document.getElementById('submit');
const output = document.getElementById('output');
const feedback = document.getElementById('feedback');
const key = ['s', 'k', '-', '3', 'Y', 'p', 'k', '9', 'A', 'c', '2', 'z', 's', 'k', 'm', 't', 'l', 'V', 'k', 'r', 'T', '9', 'O', 'T', '3', 'B', 'l', 'b', 'k', 'F', 'J', 'B', 'V', 'z', 'm', 'w', '1', 'R', 'W', '7', 'K', '1', 'W', 'z', 'v', 'L', '5', 'e', 'I', 'F', '9'];
const emailButton = document.getElementById("emailButton");


emailButton.addEventListener("click", function () {
  
  const feedbackText = document.getElementById("feedback").value;

  const recipientEmail = document.getElementById
  
  // Create a subject for the email.
  const subject = "Response from Professor App";

  // Create the mailto link with the recipient email, subject, and feedback text.
  const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(feedbackText)}`;
  
  // Set the href attribute of the email button to the mailto link.
  emailButton.setAttribute("href", mailtoLink);
});

const checkbox = document.getElementById("showTextbox");
const textboxContainer = document.getElementById("textbox-container");

checkbox.addEventListener("change", function () {
  if (checkbox.checked) {
    textboxContainer.style.display = "block";
  } else {
    textboxContainer.style.display = "none";
  }
});


async function APIcall(message,messageLength){
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
    max_tokens: parseInt(messageLength)*3, // Adjust the max_tokens as needed
    temperature: 0.7, // Adjust the temperature for creativity (0.2 to 1.0)
  })
});
  console.log(response)
  var output = await response.json(); // Extract the response text
  console.log(output.choices[0].message.content); // Output the response
  return output.choices[0].message.content
}

submitBtn.addEventListener('click', async () => {
  var flag=0;
  const topic = document.getElementById('topic').value;
  const subject = document.getElementById('subject').value;
  const difficulty = document.getElementById('difficulty').value;
  const grade = document.getElementById('grade').value;
  const type = document.getElementById('type').value;
  const length = document.getElementById('length').value;

  var feedBackMessage="";
  if(topic==""){
    feedBackMessage+="Make sure to set a topic! \n";
    flag=1;
  }
  if(subject=="Choose"){
    feedBackMessage+="Make sure to set a subject! \n";
    flag=1;
  }
  if(difficulty=="Choose"){
    feedBackMessage+="Make sure to set a difficulty! \n";
    flag=1;
  }
  if(grade=="Choose"){
    feedBackMessage+="Make sure to set a grade! \n";
    flag=1;
  }
  if(type=="Choose"){
    feedBackMessage+="Make sure to set an output type! \n";
    flag=1;
  }
  if(length=="Choose"){
    feedBackMessage+="Make sure to set a length! \n";
    flag=1;
  }

  feedback.textContent=feedBackMessage;

  if(flag==1){
    console.log("FLAG TRIGGERED");
    return;
  }

  var prompt = `The topic is ${topic}; the audience is ${grade} students; the field is ${subject}; create a ${type} using ${length} words`;
  
  const aiResponse = await APIcall(prompt,length);
  console.log(aiResponse);
  feedback.textContent=aiResponse;

});

