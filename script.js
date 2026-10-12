let maxNumber = 50;

let secretNumber = Math.floor(Math.random() * maxNumber) + 1;
let guesses = 0;
let score = 1000;
let highScore = localStorage.getItem("highScore") || 0;
let gameOver = false;


document.getElementById("highScore").textContent =
    "🏆 High Score: " + highScore;

function checkGuess() {

    if (gameOver) {
        return;
    }

    let guess = Number(document.getElementById("guessInput").value);
    let message = document.getElementById("message");
    message.style.animation = "none";
message.offsetHeight;
message.style.animation = "popIn 0.3s ease";


    if (guess < 1 || guess > maxNumber || !guess) {
        message.textContent =
    "⚠️ Enter a number from 1 to " + maxNumber + "!";
        return;
    }

    guesses++;
    score -= 50;

    if (guess < secretNumber) {
        message.textContent = "Too low! ⬆️";
    }
    else if (guess > secretNumber) {
        message.textContent = "Too high! ⬇️";
    }
    else {
        message.textContent = "🎉 YOU WIN!";
        gameOver = true;

        if (score > highScore) {
            highScore = score;

            localStorage.setItem("highScore", highScore);

            document.getElementById("highScore").textContent =
                "🏆 High Score: " + highScore;
        }
    }

    document.getElementById("guessCount").textContent =
        "Guesses: " + guesses;

    document.getElementById("score").textContent =
        "Score: " + score;
}

function newGame() {

secretNumber = Math.floor(Math.random() * maxNumber) + 1;

    guesses = 0;
    score = 1000;
    gameOver = false;

    document.getElementById("guessInput").value = "";

    document.getElementById("message").textContent = "";

    document.getElementById("guessCount").textContent =
        "Guesses: 0";

    document.getElementById("score").textContent =
        "Score: 1000";
}

function setDifficulty(number) {
    maxNumber = number;

    secretNumber = Math.floor(Math.random() * maxNumber) + 1;

    document.getElementById("rangeText").textContent =
        "I'm thinking of a number from 1 to " + maxNumber + ".";

    newGame();
}

document.getElementById("guessInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        checkGuess();
    }
});

