"use strict";

const containerEL = document.querySelector(".container");
const btnPlayEL = document.querySelector(".btn_again");
const btnChckEL = document.querySelector(".btn_check");
const hideNumEL = document.querySelector(".hide_num");
const msgEL = document.querySelector(".message");
const inputNumEL = document.querySelector(".input_number");
const highhScoreEL = document.querySelector(".high_score");
const scoreEL = document.querySelector(".score");

//generate random num from 1 to 100;

let scretNum = Math.trunc(Math.random() * 100 + 1);
let score = 10;
let highScore = 0;

console.log(scretNum);

//event to check the hide sum

btnChckEL.addEventListener("click", () => {
  const guess = Number(inputNumEL.value);

  if (guess) {
    if (guess != scretNum) {
      if (score > 1) {
        score--;
        scoreEL.textContent = score;

        msgEL.textContent =
          guess > scretNum
            ? "Your Guess is Too High "
            : "Your Guess is Too Low";
        scoreEL.textContent = score;
      } else {
        displayMessage("You've Lossed the Game");

        containerEL.style.backgroundColor = "transparent";
        scoreEL.textContent = 0;
      }
    } else {
      //Success

      hideNumEL.textContent = scretNum;
      hideNumEL.style.width = "50%";
      hideNumEL.style.transition = "all 0.5s ease-in";
      containerEL.style.backgroundColor = "transparent";

      displayMessage("Congtratulation You've Won the Game :)");
    }
  } else {
    displayMessage("Plese Enter the Number :(");
  }
});

const displayMessage = function (message) {
  msgEL.textContent = message;
};

//reset the game

btnPlayEL.addEventListener("click", () => {
  score = 10;
  scretNum = Math.floor(Math.random() * 100) + 1;
  scoreEL.textContent = score;
  hideNumEL.textContent = "?";
  hideNumEL.style.width = "25%";
  hideNumEL.style.transition = "all 0.5s ease-in";
  inputNumEL.value = "";
  containerEL.style.backgroundColor = rgb(36, 117, 223);
  displayMessage("Start Guessing......");
});
