'use strict';
//define secret number
let secretNumber = Math.trunc(Math.random() * 20) + 1; //random number between 0 and 19 to 0dp. then add 1
//define score
let score = 20;
let highscore = 0;
//check if the guess is correct when button is pushed
document.querySelector('.check').addEventListener('click', function () {
    const guess = document.querySelector('.guess').value;
    console.log(document.querySelector('.guess').value);

    if (!guess) {  //no input
        document.querySelector('.message').textContent = 'No number!';
    } else if (guess == secretNumber) { //when you win
        document.querySelector('.message').textContent = 'Corect!';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        if (score > highscore) {
            highscore = score;
        }
        document.querySelector('.highscore').textContent = highscore;
    } else if (guess > secretNumber) { //guess too high
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too High!';
            score--;
            document.querySelector('.score').textContent = score;
        }
        else {
            document.querySelector('.message').textContent = 'You Lose :(';
        }
    } else if (guess < secretNumber) { //guess too low
        if (score > 0) {
            document.querySelector('.message').textContent = 'Too Low!';
            score--;
            document.querySelector('.score').textContent = score;
        }
    }
});

document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    score = 20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
});