'use strict';
/*
console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.message`).textContent = `Correct Number`;

console.log(document.querySelector(`.message`).textContent);

document.querySelector(`.number`).textContent = 13;
document.querySelector(`.score`).textContent = 10;
document.querySelector(`.guess`).value = 23;
console.log(document.querySelector(`.guess`).value);
*/
/*
//JODJOJO'S ATTEMPT WITHOUT LECTURE
function Dred(max, min) {
  const newAss = Math.floor(Math.random() * (max - min + 1) + min);
  console.log(newAss);

  document.querySelector(`.check`).addEventListener(`click`, function (Dred) {
    // Dred(20, 1);
    const guesser = Number(document.querySelector(`.guess`).value);
    console.log(typeof guesser);
    const highScore = Number(document.querySelector(`.score`).textContent);
    console.log(typeof highScore);
    console.log(typeof guesser, guesser);
    if (!guesser) {
      document.querySelector(`.message`).textContent = `Please input a value`;
      console.log(`Please input a value`);
    } else if (guesser === newAss) {
      document.querySelector(`.message`).textContent = `WINNER!!!`;
      let newHigh = (document.querySelector(`.score`).textContent =
        highScore - 1);
      document.querySelector(`.highscore`).textContent = newHigh;
    } else {
      document.querySelector(`.message`).textContent = `Please try again`;
      document.querySelector(`.score`).textContent = highScore - 1;
    }
    document.querySelector(`.again`).addEventListener('click', function () {
      document.querySelector(`.highscore`).textContent = document.querySelector(
        `.score`
      ).textContent = highScore;

      document.querySelector(`.message`).textContent = `LET'S GO AGAIN!!`;
      document.querySelector(`.score`).textContent = 20;
    });
  });
}
Dred(20, 1);

*/
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let newScore = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};
const backgroundColorFor = function (backgroundColore) {
  document.querySelector(`body`).style.backgroundColor = backgroundColore;
};
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector(`.guess`).value);
  console.log(guess, typeof guess);

  // document.querySelector(`.btn:hover`).style.backgroundColor = `blue`;
  //when there is no input
  if (!guess) {
    displayMessage(`No number Selected`);

    //when player wins
  } else if (guess === secretNumber) {
    displayMessage(`you are the winner🎆🎆🎆🎆`);
    backgroundColorFor(`#60b347`);

    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`.number`).style.width = `30rem`;

    if (newScore > highscore) {
      highscore = newScore;
      document.querySelector(`.highscore`).textContent = highscore;
    }
    //when guess is too high
  } else if (guess !== secretNumber) {
    if (newScore > 1) {
      displayMessage(guess > secretNumber ? `TOO HIGH` : `TOO LOW🛹`);
      backgroundColorFor(guess > secretNumber ? `orange` : `pink`);
      //   guess > secretNumber ? `TOO HIGH` : `TOO LOW🛹`;
      // document.querySelector(`body`).style.backgroundColor =
      // guess > secretNumber ? `orange` : `pink`;
      // document.querySelector(`.message`).textContent =
      newScore--;
      document.querySelector(`.score`).textContent = newScore;
    } else {
      document.querySelector(`.message`).textContent = `YOU LOST THE GAME`;
      document.querySelector(`.score`).textContent = 0;
      document.querySelector(`body`).style.backgroundColor = `red`;
    }
  }
});

document.querySelector(`.again`).addEventListener(`click`, function () {
  newScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(`.message`).textContent = `Let's Try Again🛸`;
  document.querySelector(`.score`).textContent = newScore;
  document.querySelector(`body`).style.backgroundColor = `black`;
  document.querySelector(`.number`).style.width = `15rem`;
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = ``;
});

//   REPEAT YOURSELF
// } else if (guess > secretNumber) {
//   if (newScore > 1) {
//     document.querySelector(`.message`).textContent = `NUMBER TOO HIGH⛵`;
//     newScore--;
//     document.querySelector(`.score`).textContent = newScore;
//     document.querySelector(`body`).style.backgroundColor = `orange`;
//   } else {
//     document.querySelector(`.message`).textContent = `YOU LOST THE GAME🛹`;
//     document.querySelector(`.score`).textContent = 0;
//     document.querySelector(`body`).style.backgroundColor = `red`;
//   }

//   //when guess is too low
// } else if (guess < secretNumber) {
//   if (newScore > 1) {
//     document.querySelector(`.message`).textContent = `NUMBER TOO LOW🛬`;
//     newScore--;
//     document.querySelector(`.score`).textContent = newScore;
//     document.querySelector(`body`).style.backgroundColor = `pink`;
//   } else {
//     document.querySelector(`.message`).textContent = `YOU LOST THE GAME🛹`;
//     document.querySelector(`.score`).textContent = 0;
//     document.querySelector(`body`).style.backgroundColor = `red`;
//   }
