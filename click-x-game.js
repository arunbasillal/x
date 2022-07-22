'use strict';

const button = document.getElementById('button');
const timer = document.getElementById('timer');
const counter = document.getElementById('counter');
const highscore = document.getElementById('highscore');
const output = document.getElementById('output');
const gameEndedWrapper = document.getElementById('gameEndedWrapper');
const gameEnded = document.getElementById('gameEnded');

let firstClick = false;
let clickCount = 0;
let timeElapsed = 0;
let highScoreCount = 0;

function buttonClicked() {

    firstClick = true;
    button.textContent = 'x';

    button.style.marginLeft = Math.random() * 500;
    button.style.marginTop = Math.random() * 300 * Math.random();
    button.style.fontSize = Math.random() * 100;

    clickCount++;
    counter.innerHTML = 'Clicks: ' + clickCount;
}

setInterval( () => {

    if ( firstClick === false ) {
        return; 
    }

    timeElapsed++;
    timer.innerHTML = 'Time: ' + timeElapsed;

    if ( timeElapsed >= 50 ) {
        
        firstClick = false;
        highScoreCount = clickCount > highScoreCount ? clickCount : highScoreCount;

        displayScores();
    }
}, 100 );

function displayScores() {
    output.style.display='none';
    gameEndedWrapper.style.display='flex';

    gameEnded.innerHTML=`
        <p>Game Ended!</p>
        <p>Your Score: ${clickCount}</p>
    `;
}

function restartGame() {
    gameEndedWrapper.style.display='none';
    output.style.display='flex';
    
    timeElapsed = 0;
    clickCount = 0;
    highscore.innerHTML = 'High Score: ' + highScoreCount;

    counter.innerHTML = 'Clicks: ' + clickCount;
    timer.innerHTML = 'Time: ' + timeElapsed;

    firstClick = false;
}