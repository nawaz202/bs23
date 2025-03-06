let randomNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  let userGuess = parseInt(document.getElementById("guess").value);
  let message = document.getElementById("message");

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.innerText = "Please enter a number between 1 and 100!";
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.innerText = `🎉 Congratulations! You guessed it in ${attempts} tries!`;
  } else if (userGuess < randomNumber) {
    message.innerText = "Too low! Try again.";
  } else {
    message.innerText = "Too high! Try again.";
  }
}
