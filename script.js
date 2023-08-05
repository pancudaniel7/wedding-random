
function generateRandomNumber() {
    return Math.floor(Math.random() * 101) + 1; // Generates a random number between 1 and 101
}

function updateNumber() {
    const bigNumberElement = document.getElementById('big-number');
    bigNumberElement.classList.add('fade-out');
    
    setTimeout(() => {
        bigNumberElement.innerText = generateRandomNumber();
        bigNumberElement.classList.remove('fade-out');
    }, 100);
}

let interval;

clearInterval(interval);

interval = setInterval(updateNumber, 400);
setTimeout(() => {
    clearInterval(interval);
}, 6000);
