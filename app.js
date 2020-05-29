/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
window.alert('Love you YMMH 🧡');

var score, currentScore, active, dice, dicepic, limit, gamestatus;
reset();
limit = window.prompt('Enter Game Winning Points!')
document.querySelector('.btn-roll').addEventListener('click', function () {
    if (gamestatus) {
        dice = Math.floor(Math.random() * 6) + 1;
        dicepic.style.display = 'block';
        dicepic.src = 'dice-' + dice + '.png';
        if (dice > 1) {
            currentScore += dice;
            document.querySelector('#current-' + active).textContent = currentScore;
        } else {
            next();
        };
    } else {
        window.alert('Pls Start New Game');
    };
});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if (gamestatus) {
        score[active] += currentScore;
        document.querySelector('#score-' + active).textContent = score[active];
        if (score[active] >= limit) {
            gamestatus = false;
            // window.alert('Player' + active + ' is Winner!');
            document.querySelector('#player-' + active).textContent = 'Winner!';
            document.querySelector('.panel-' + active).classList.remove('active');
            document.querySelector('#player-' + active).classList.add('winner');
        } else {
            next();
        }
    } else {
        window.alert('Pls Start New Game');
    };
});
function next() {
    active === 0 ? active = 1 : active = 0;
    currentScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.querySelector('.panel-0').classList.toggle('active');
    document.querySelector('.panel-1').classList.toggle('active');
};
document.querySelector('.btn-new').addEventListener('click', reset);
function reset() {
    gamestatus = true;
    score = [0, 0];
    currentScore = 0;
    active = 0;
    dicepic = document.querySelector('#dice');
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0'; dicepic.style.display = 'none';
    document.getElementById('player-0').textContent = 'Player 1';
    document.getElementById('player-1').textContent = 'Player 2';
    document.querySelector('#player-0').classList.remove('winner');
    document.querySelector('#player-1').classList.remove('winner');
    document.querySelector('.panel-1').classList.remove('active');
    document.querySelector('.panel-0').classList.remove('active');
    document.querySelector('.panel-0').classList.add('active');
};
