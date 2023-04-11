`use strict`;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let newScore = 20;
let highscore = 0;

const higherSCore = function (highcore) {
  document.querySelector(`.highscore`).textContent = highcore;
};
const DisplayMessage = function (mess) {
  document.querySelector(`.message`).textContent = mess;
};
const colorBackgroundHead = function (color) {
  document.querySelector(`header`).style.backgroundColor = color;
};

const colorBackgroundMain = function (color) {
  document.querySelector(`main`).style.backgroundColor = color;
};
console.log(secretNumber);
const newscore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  if (!guess) {
    DisplayMessage(`Please Input a Guess🎡`);
    colorBackgroundHead(`black`);
    colorBackgroundMain(`grey`);
  } else if (guess === secretNumber) {
    DisplayMessage(`CONGRATULATIONS!!🎇🎆🎆`);
    colorBackgroundHead(`black`);
    colorBackgroundMain(`green`);
    document.querySelector(`.number`).style.width = `40rem`;
    document.querySelector(`.number`).style.background = `grey`;
    document.querySelector(`.number`).textContent = secretNumber;
    if (newScore > highscore) {
      highscore = newScore;
      higherSCore(highscore);
    }
  } else if (guess !== secretNumber) {
    if (newScore > 1) {
      DisplayMessage(guess > secretNumber ? `TOO HIGH👙` : `TOO LOW🕶`);
      colorBackgroundHead(guess > secretNumber ? `pink` : `black`);
      colorBackgroundMain(guess > secretNumber ? `grey` : `grey`);
      newScore--;
      newscore(newScore);
    } else {
      DisplayMessage(`YOU HAVE FAILED`);
      colorBackgroundHead(`red`);
      colorBackgroundMain(`red`);
    }
  }
  document.querySelector(`.again`).addEventListener(`click`, function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    newScore = 20;
    console.log(secretNumber);

    DisplayMessage(`Let's Try again!🦺`);
    colorBackgroundHead(`black`);
    colorBackgroundMain(`grey`);
    newscore(`20`);
    document.querySelector(`.guess`).value = ``;
    document.querySelector(`.number`).textContent = `?`;
    document.querySelector(`.number`).style.width = `15rem`;
    document.querySelector(`.number`).style.background = `white`;
  });
});
