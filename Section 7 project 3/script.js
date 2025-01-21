'use strict';
//selecting the score elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.querySelector('#score--0');
const score1El = document.getElementById('score--1');
const current0El = document.getElementById('current--0')
const current1El = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');
//start conditions
let currentScore, scores, activePlayer, playing;

const init = function () {
    score0El.textContent = 0;
    score1El.textContent = 0;
    diceEl.classList.add('hidden');

    scores = [0, 0];
    currentScore = 0;
    activePlayer = 0;
    playing = true;
    player0El.classList.remove('player--winner');
    player1El.classList.remove('player--winner');
    player1El.classList.remove('player--active');
    player0El.classList.add('player--active');
    current1El.textContent = '0';
    current0El.textContent = '0';
}
init();
const switchPlayer = function () {
    //switch player
    currentScore = 0;
    document.getElementById(`current--${activePlayer}`).textContent = '0';
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}
//Rolling the dice

btnRoll.addEventListener('click', function () {
    if (playing) {
        const dice = Math.trunc(Math.random() * 6) + 1; //get random dice roll

        diceEl.classList.remove('hidden');
        diceEl.src = `dice-${dice}.png`; //display result of die roll

        if (dice != 1) {
            //add to score
            currentScore = currentScore + dice;
            document.getElementById(`current--${activePlayer}`).textContent = currentScore;
        }
        else {
            //switch player
            switchPlayer();
        }
    }
})

//holding the score
btnHold.addEventListener('click', function () {
    if (playing) {

        //add current score to player score
        scores[activePlayer] += currentScore;
        document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
        //check score for win condition
        if (scores[activePlayer] >= 5) {
            playing = false;
            document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
            document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
            diceEl.classList.add('hidden');
        }
        else {
            switchPlayer();
        }
    }
})

//resetting the game
btnNew.addEventListener('click', init)