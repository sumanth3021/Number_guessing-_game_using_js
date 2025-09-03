let randomNumber = Math.floor(Math.random() * 100) + 1;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const result = document.getElementById("result");

  if (!userGuess) {
    result.textContent = "⚠️ Please enter a number!";
  } else if (userGuess === randomNumber) {
    result.textContent = "🎉 Correct! You guessed it!";
  } else if (userGuess > randomNumber) {
    result.textContent = "📈 Too high! Try again.";
  } else {
    result.textContent = "📉 Too low! Try again.";
  }
}
