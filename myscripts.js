const choices = ['rock', 'paper', 'scissors']



function game(){
    playRound();
}


function playRound(){
    const playerSelection = playerChoice();
    const computerSelection = computerChoice();

    
}

function playerChoice (){
    let input = prompt('Type rock, paper, or scissors');
    input = input.toLocaleLowerCase();
    console.log(input)

}


function computerChoice (){
    return choices[Math.floor(Math.random()*choices.length)]

}

game();