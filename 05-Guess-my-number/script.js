'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉 Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 23;
*/

let secretNumber = Math.trunc(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const displayScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess);

    // When there is no input
    if (!guess) {
        // document.querySelector('.message').textContent = '⛔ No number!';
        displayMessage('⛔ No number!');

    }
    // When player wins
    else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';

        document.querySelector('.number').style.width = '30rem';

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

    }
    // When guess is wrong
    else if (guess !== secretNumber) {

        if (score > 1) {
            // document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High!' : '📉 Too Low';
            displayMessage(guess > secretNumber ? '📈 Too High!' : '📉 Too Low');
            score--;
            displayScore(score);
        }
        else {
            displayMessage('💥 You lost the game!');
            displayScore(0);
        }
    }

});

// Again button resetting
document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    displayMessage('Start guessing number ...');
    document.querySelector('.number').textContent = '?';
    displayScore(score);
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';

    secretNumber = Math.trunc(Math.random() * 20 + 1);
});