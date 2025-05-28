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



function playGame(){

        
    let humanScore=0;
    let computerScore=0;
    let results=document.querySelector("#results");
    let para=document.createElement("p");

    function playRound(humanChoice, computerChoice) {     

        if(humanChoice=="rock" && computerChoice=="scissors"){
            humanScore+=1;
            results.textContent=`You won! Rock beats Scissors. Your score is ${humanScore}. Computer score is ${computerScore}.`
            
        }

        else if (computerChoice=="rock" && humanChoice=="scissors"){
            computerScore+=1;
            results.textContent=`You lose! Rock beats Scissors. Your score is ${humanScore}. Computer score is ${computerScore}.`
            
        }

        else if(humanChoice=="paper" && computerChoice=="rock"){
            humanScore+=1;
            results.textContent=`You won! Paper beats Rock. Your score is ${humanScore}. Computer score is ${computerScore}.`
            
            
        }

        else if (computerChoice=="paper" && humanChoice=="rock"){
            computerScore+=1;
            results.textContent=`You lose! Paper beats Rock. Your score is ${humanScore}. Computer score is ${computerScore}.`
            
        }

        else if(humanChoice=="scissors" && computerChoice=="paper"){
            humanScore+=1;
            results.textContent=`You won! Scissors beat Paper. Your score is ${humanScore}. Computer score is ${computerScore}.`
            
        }

        else if (computerChoice=="scissors" && humanChoice=="paper"){
            computerScore+=1;
            results.textContent=`You lose! Scissors beat Paper. Your score is ${humanScore}. Computer score is ${computerScore}.`
            
        }

        else{

            results.textContent= `It's a tie! Your score is ${humanScore}. Computer score is ${computerScore}`;
            
        }  
            

    }

    

    let rock=document.querySelector("#rock");
    let paper=document.querySelector("#paper");
    let scissors=document.querySelector("#scissors");


    
    rock.addEventListener("click", () => {

       let computerSelection=getComputerChoice();
       playRound("rock", computerSelection);
       decideWinner();
    

     });
       

     paper.addEventListener("click", () => {

        let computerSelection=getComputerChoice(); 
        playRound("paper", computerSelection);
        decideWinner();

    });


     scissors.addEventListener("click", () => {

        let computerSelection=getComputerChoice();
        playRound("scissors", computerSelection);
        decideWinner();

    });

               
    function decideWinner(){

        if(humanScore==5 || computerScore==5)
        
            {

                if (humanScore>computerScore){

                para.textContent="The final winner is you!";
                results.appendChild(para);
                humanScore=0;
                computerScore=0;
            
                }

                else {
            
                para.textContent="The final Winner is Computer!";
                results.appendChild(para);
                humanScore=0;
                computerScore=0;
            
                }
               
        }
    
    }


}


playGame();