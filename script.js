const numberDisplay = document.getElementById("numberDisplay"); 
const generateButton = document.getElementById("generateButton"); 

generateButton.addEventListener("click", function() {
    const randomNumber = Math.floor(Math.random() * 100); 
    numberDisplay.textContent = randomNumber; 
});
