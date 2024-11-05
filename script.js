const numberDisplay = document.getElementById("numberDisplay"); 
const generateButton = document.getElementById("generateButton"); 

// Add an event listener to the button
generateButton.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 100); 
    numberDisplay.textContent = randomNumber; 
});