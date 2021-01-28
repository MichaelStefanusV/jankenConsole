

function computerPlay(){
    let randNum = Math.random()*100%3;
    if(randNum===0){
        return `rock`;
    }
    else if(randNum===1){
        return `paper`;
    }
    else{
        return `scissor`;
    }
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection===computerSelection){
        alert(`Tie`);
    }
    else{
        if(playerSelection===`rock`){
            if(computerSelection===`paper`){
                alert(`Paper beats rock! you lose!`);
                return false;
                
            }else{
                alert(`Rock beats scissor! you win!`);
                return true;
            }
        }
        else if(playerSelection===`paper`){
            if(computerSelection===`scissor`){
                alert(`Scissor beats paper! you lose!`);
                return false;
            }else{
                alert(`Paper beats rock! you win!`);
                return true;
            }
        }else{
            if(computerSelection===`paper`){
                alert(`Scissor beats paper! you win!`);
                return true;
            }else{
                alert(`Rock beats scissor! you lose!`);
                return false;
            }
        }
    }

}

function game(){
    let countUser = 0;
    let countPC = 0;
    for(let i=0;i<10;i++){
        const playerSelection = prompt();
        let selectionUnsensitive = playerSelection.toLowerCase();
        const computerSelection = computerPlay();
        let result = playRound(selectionUnsensitive, computerSelection)
        if(result===true){
            countUser++;
        }else{
            countPC++;
        }
        if(countUser===3){
            alert(`Victory`);
            countPC=0;
            countUser=0;
            break;
        }else if(countPC===3){
            alert(`Defeat`);
            countPC=0;
            countUser=0;
            break;
        }
      }
}

game();

  