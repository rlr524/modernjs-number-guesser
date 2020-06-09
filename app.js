function generateNumber(max) {
  randNumber = Math.random();
  return Math.floor(randNumber * Math.floor(max));
}

document.querySelector("#guess-form").addEventListener("submit", function (e) {
  let myNumber = generateNumber(10);
  let guessNumber = parseInt(document.querySelector("#guess").value);
  let type = typeof guessNumber;
  let gameOver = `Sorry, game over. The correct answer was ${myNumber}.`;
  if (guessNumber === myNumber) {
    document.querySelector(".result").textContent =
      "You guessed correctly. That's amazing!!";
    document.querySelector(".result").style.color = "green";
    document.querySelector(".result").style.marginBottom = "6px";
  } else {
    document.querySelector(".result").textContent = gameOver;
    document.querySelector(".result").style.color = "red";
    document.querySelector(".result").style.marginBottom = "6px";
  }
  console.log("The number was: " + myNumber);
  console.log("The guess was: " + guessNumber);
  console.log(type);
  e.preventDefault();
});
