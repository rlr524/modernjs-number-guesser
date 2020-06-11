/*
GAME FUNCTON 
- Player must guess a number between a min and a max 
- Player gets a certain amount of guesses 
- Notify player of guesses remaining 
- Notify player of correct answer on loss 
- Let player choose to play again
*/

let min = 1,
  max = 100,
  winningNum = getRandomNum(min, max),
  guessesLeft = 3;

const uiGame = document.querySelector("#game"),
  uiMinNum = document.querySelector(".min-num"),
  uiMaxNum = document.querySelector(".max-num"),
  uiGuessBTN = document.querySelector("#guess-btn"),
  uiGuessInput = document.querySelector("#input-field"),
  uiMessage = document.querySelector(".result");

uiMinNum.textContent = min;
uiMaxNum.textContent = max;

uiGame.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

uiGuessBTN.addEventListener("click", function () {
  let guess = parseInt(uiGuessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}`, "red");
  } else if (guess === 42) {
    setMessage(
      "That's not the number I was thinking of, but it is the answer, nonetheless. You should stop playing games with me and go solve the world's problems.",
      "purple"
    );
    uiGuessInput.style.borderColor = "purple";
    uiGuessInput.disabled = true;
    uiGuessBTN.textContent = "Bye";
  } else if (guess === winningNum) {
    gameOver(true, `${winningNum} is correct! You win!`, "green");
  } else {
    guessesLeft -= 1;
    if (guessesLeft === 0) {
      gameOver(
        false,
        `Game over. You did not guess correctly. The correct number is ${winningNum}`,
        "red"
      );
    } else {
      uiGuessInput.style.borderColor = "blue";
      setMessage(
        `${guess} is not correct. You have ${guessesLeft} guesses remaining.`,
        "blue"
      );
      uiGuessInput.value = "";
    }
  }
});

function gameOver(won, msg, msgcolor) {
  let color;
  won === true ? (color = "green") : (color = "red");
  uiGuessInput.disabled = true;
  uiGuessInput.style.borderColor = color;
  uiMessage.style.color = msgcolor;
  setMessage(msg);
  uiGuessBTN.textContent = "Play Again?";
  uiGuessBTN.className += "play-again";
}

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function setMessage(msg, color) {
  uiMessage.style.color = color;
  uiMessage.textContent = msg;
}

// // testing randos
// function testRandos() {
//   for (let i = 0; i < 1000; i++) {
//     let rando = Math.floor(Math.random() * (max - min + 1) + min);
//     console.log("The index is: " + i + " and the random number is: " + rando);
//   }
// }

// testRandos();

// my original code

// function generateNumber(max) {
//   let randNumber = Math.random();
//   return Math.ceil(randNumber * Math.ceil(max));
// }

// document.querySelector("#game").addEventListener("submit", function (e) {
//   let myNumber = generateNumber(10);
//   let guessNumber = parseInt(document.querySelector("#input-field").value);
//   let gameOver = `Sorry, game over. The correct answer was ${myNumber}.`;
//   if (guessNumber === myNumber) {
//     document.querySelector(".result").textContent =
//       "You guessed correctly. That's amazing!!";
//     document.querySelector(".result").style.color = "green";
//     document.querySelector(".result").style.marginBottom = "6px";
//     document.querySelector("#input-field").style.border = "solid 1px green";
//   } else {
//     document.querySelector(".result").textContent = gameOver;
//     document.querySelector(".result").style.color = "red";
//     document.querySelector(".result").style.marginBottom = "6px";
//     document.querySelector("#input-field").style.border = "solid 1px red";
//   }
//   console.log("The number was: " + myNumber);
//   console.log("The guess was: " + guessNumber);
//   e.preventDefault();
// });
