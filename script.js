/*Fonction qui génère le choix de l'ordinateur au hasard selon un nombre de 1 à 3.
1 = Rock
2 = Paper
3 = Scissors
*/
function getComputerChoice(min, max){
    function randomComputerChoice(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    let intComputerChoice = randomComputerChoice(1, 3);

    if (intComputerChoice === 1){
        console.log("Computer choice : Rock");
    
    } else if(intComputerChoice === 2){
        console.log("Computer choice : Paper");

    } else {
        console.log("Computer choice : Scissors");
    }
}

getComputerChoice();