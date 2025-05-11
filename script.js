function getComputerChoice(){
            
    randomNum=Math.floor(Math.random()*3);

    if(randomNum==0) {

        return "rock";
        
    }

    else if(randomNum==1) {

        return "paper";
            
    }

    else {

        return "scissors";
            
    }
}


function getHumanChoice(){

    humanInput =prompt("Choose rock paper or scissors");

    return humanInput;
        
}


function playGame(){

        
    let humanScore=0;
    let computerScore=0;

    function playRound(humanChoice, computerChoice) {     

        if(humanChoice.toLowerCase()=="rock" && computerChoice=="scissors"){

            console.log("You won! Rock beats Scissors");
            humanScore+=1;
            
        }

        else if (computerChoice=="rock" && humanChoice.toLowerCase()=="scissors"){

            console.log("You lose! Rock beats Scissors");
            computerScore+=1;        
            
        }

        else if(humanChoice.toLowerCase()=="paper" && computerChoice=="rock"){

            console.log("You won! Paper beats Rock");
            humanScore+=1;
            
        }

        else if (computerChoice=="paper" && humanChoice.toLowerCase()=="rock"){

            console.log("You lose! Paper beats Rock");
            computerScore+=1;
            
        }

        else if(humanChoice.toLowerCase()=="scissors" && computerChoice=="paper"){

            console.log("You won! Scissors beat Paper");
            humanScore+=1;
            
        }

        else if (computerChoice=="scissors" && humanChoice.toLowerCase()=="paper"){

            console.log("You lose! Scissors beat Paper");
            computerScore+=1;
            
        }

        else{

            console.log("It's a tie"); //it is a tie or invalid user input
            
        }      

    }

    for (let i=0; i<5; i++){

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log("Your Input: " + humanSelection);
    console.log("Computer Input: " + computerSelection);

    playRound(humanSelection, computerSelection);

    console.log("Human score is " +humanScore + " and Computer score is " +computerScore);

    }
        
        
    function decideWinner(){

        if (humanScore>computerScore){

            console.log("The final winner is you!");
            
        }

        else if(humanScore<computerScore) {
            
            console.log("The final Winner is Computer!");
            
        }

        else{

            console.log("The game is tied after 5 rounds")
            
        }
    }

    decideWinner();
      

}


playGame();