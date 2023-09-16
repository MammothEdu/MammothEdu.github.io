function typeOutInput() {
    const wordsInput = document.getElementById('words').value;
    const dropdown1Input = document.getElementById('dropdown1').value;
    const dropdown2Input = document.getElementById('dropdown2').value;
    const outputBox = document.getElementById('outputBox');
    
    const text = `Words: ${wordsInput}\nDropdown 1: ${dropdown1Input}\nDropdown 2: ${dropdown2Input}`;
    
    outputBox.innerHTML = ''; // Clear the output box
    
    let i = 0;
    const typeInterval = setInterval(() => {
        if (i < text.length) {
            outputBox.innerText += text.charAt(i);
            i++;
        } else {
            clearInterval(typeInterval);
        }
    }, 50); // Adjust the interval for typing speed
}
