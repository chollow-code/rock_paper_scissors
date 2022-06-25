
const choices = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}


function playRound(playerSelection, computerSelection){
    const capitalize = word => { return word.charAt(0).toUpperCase() + word.slice(1);}
    const winStatement = (winner, loser) => { return `You Win! ${capitalize(winner)} beats ${capitalize(loser)}`; }
    
}

