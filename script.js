//Fonction qui génère le choix de l'ordinateur au hasard selon un nombre de 1 à 3.
function getComputerChoice(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
const playerSelection = prompt("Enter your choice").toLowerCase(); //Choix de l'utilisateur converti en minuscule pour que le choix soit insensible à la casse
let computerSelection;

/*
La selection de l'ordinateur dépend du chiffre généré au hasard
1 = rock
2 = paper
3 = scissors
En miniscule pour permettre la comparaison avec le choix de l'utilisateur
*/
if(getComputerChoice(1,3)===1){
    computerSelection = "rock";
} else if(getComputerChoice(1, 3)===2){
    computerSelection = "paper";
} else{
    computerSelection = "scissors";
} 

//Fonction qui compare le choix de l'utilisateur au choix généré de l'ordinateur
function playRound() {
        if(playerSelection === computerSelection){ //En cas d'égalité
            return("You both chose " + playerSelection + ". It's a tie.");

        //Cas où l'utilisateur gagne
        }else if (playerSelection === "rock" && computerSelection === "scissors"){
            return("Rock beats scissors, you win.");
        }else if (playerSelection === "paper" && computerSelection === "rock"){
            return("Paper beats rock, you win.");
        }else if (playerSelection === "scissors" && computerSelection === "paper"){
            return("Scissors beats paper, you win.");
        
        //Cas où l'ordinateur gagne
        }else if (playerSelection === "rock" && computerSelection === "paper"){
            return("Paper beats rock, you lose.");
        }else if (playerSelection === "paper" && computerSelection === "scissors"){
            return("Scissors beats paper, you lose.");
        }else if(playerSelection === "scissors" && computerSelection === "Rock"){
            return("Rock beats scissors, you lose.");

        //Si aucune des comparaison ne fonctionne, c'est que l'utilisateur a entré une réponse invalide
        }else{
            alert("Wrong input, try again");
        }
    }
console.log(playRound());