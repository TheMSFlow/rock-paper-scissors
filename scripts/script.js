
const resetStatus = document.querySelector('.js-result-info')
.innerHTML = `
<img src="icons/Player.svg" class="player-icon"> vs.
<img src="icons/MSFavicon.png" class="player-icon">`;
    
document.querySelector('.js-result').innerHTML = `Play Game!`;


let score = JSON.parse(localStorage.getItem('myScore')) ||  {
    wins: 0,
    losses: 0,
    ties: 0
  };

  updateScoreElem();

function updateScoreElem() {
  document.querySelector('.js-stats')
    .innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
}

function pickComputerMove() {
  const randomNumber = Math.random();

  let computerOption = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
      computerOption = 'Rock';
    } else if(randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
      computerOption = 'Paper';
    } else if(randomNumber >= 2 / 3 && randomNumber < 1) {
      computerOption = 'Scissors';
    }
    return computerOption;
}

function playGame(playerMove) {
  const computerOption = pickComputerMove();

  let result = '';
    if (playerMove === 'Scissors') {
      if (computerOption === 'Rock') {
        result = 'You Lose'
      } else if (computerOption === 'Paper') {
        result = 'You Win'
      } else if (computerOption === 'Scissors') {
        result = 'Tie'
      }

    } else if (playerMove === 'Paper') {
      if (computerOption === 'Rock') {
        result = 'You Win'
      } else if (computerOption === 'Paper') {
        result = 'Tie'
      } else if (computerOption === 'Scissors') {
        result = 'You Lose'
      }

    } else if (playerMove === 'Rock') {
      if (computerOption === 'Rock') {
        result = 'Tie'
      } else if (computerOption === 'Paper') {
        result = 'You Lose'
      } else if (computerOption === 'Scissors') {
        result = 'You Win'
      }
    }

    document.querySelector('.js-result').innerHTML = `${result}.`;

    if (result === 'You Win') {
      score.wins += 1;
    } else if (result === 'You Lose') {
      score.losses += 1;
    } else if (result === 'Tie') {
      score.ties += 1;
    }
    
    localStorage.setItem('myScore', JSON.stringify(score));

    updateScoreElem();

    document.querySelector('.js-result-info')
    .innerHTML = `<img src="icons/Player.svg" class="player-icon"> 
    <img src="icons/${playerMove}-emoji.png" class="move-icon">
    <img src="icons/${computerOption}-emoji.png" class="move-icon">
    <img src="icons/MSFavicon.png" class="player-icon"> `;

}