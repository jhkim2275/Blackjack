let computerScore = 0;
let playerScore = 0;
let playerTurn = true;
let computerTurn = true;
// let computerCards = document.querySelector(".computerCards");
// let playerCards = document.querySelector(".playerCards");
const cardHolder = document.querySelector(".cardHolder");

/* Styling for Computer Cards section*/
let computerCards = document.createElement("div");
computerCards.style.display = "flex";
computerCards.style.flexDirection = "row";
computerCards.style.justifyContent = "center";
computerCards.style.gap = "30px";

/* Styling for Player Cards section*/
let playerCards = document.createElement("div");
playerCards.style.display = "flex";
playerCards.style.flexDirection = "row";
playerCards.style.justifyContent = "center";
playerCards.style.gap = "30px";

/* Styling for Player action section*/
const stayButton = document.createElement("button");
stayButton.textContent = "Stay";
const hitButton = document.createElement("button");
hitButton.textContent = "Hit";
let playerButtons = document.createElement("div");
playerButtons.appendChild(stayButton);
playerButtons.appendChild(hitButton);
playerButtons.style.display = "flex";
playerButtons.style.flexDirection = "row";
playerButtons.style.justifyContent = "center";
playerButtons.style.gap = "50px";
cardHolder.appendChild(computerCards);
cardHolder.appendChild(playerCards);
cardHolder.appendChild(playerButtons);


let cards = {
    spade1: 1, spade2: 2, spade3: 3, spade4: 4, spade5: 5, spade6: 6, spade7: 7, spade8: 8, spade9: 9, spade10: 10, spadeJack: 10, spadeQueen: 10, spadeKing: 10, spadeAce: 11,
    club1: 1, club2: 2, club3: 3, club4: 4, club5: 5, club6: 6, club7: 7, club8: 8, club9: 9, club10: 10, clubJack: 10, clubQueen: 10, clubKing: 10, clubAce: 11,
    heart1: 1, heart2: 2, heart3: 3, heart4: 4, heart5: 5, heart6: 6, heart7: 7, heart8: 8, heart9: 9, heart10: 10, heartJack: 10, heartQueen: 10, heartKing: 10, heartAce: 11, 
    diamond1: 1, diamond2: 2, diamond3: 3, diamond4: 4, diamond5: 5, diamond6: 6, diamond7: 7, diamond8: 8, diamond9: 9, diamond10: 10, diamondJack: 10, diamondQueen: 10, diamondKing: 10, diamondAce: 11,
}
let keys = Object.keys(cards);
playGame();
function playGame(){
    computerStart();
    playerStart(2);
    playerChoice();
}

function computerChoice() {
    while (computerScore<15){
        computerStart();
    }
    if (computerScore>21){
        playerWin();
    } else {
        if (playerScore>computerScore){
            playerWin();
        } else if (playerScore==computerScore){
            tie();
        } else {
            computerWin();
        }
    }
}

function playerChoice() {
    if (!playerTurn){
        return;
    }
    stayButton.addEventListener("click", () => {
        if (playerTurn){
            playerTurn = false;
            computerChoice();
        }
    });
    hitButton.addEventListener("click", () => {
        if (playerTurn){
            playerStart(1);
            if (playerScore>21){
                playerTurn = false;
                // Prompt Bust Message
                computerWin();
            }
        }
    });
    
}

/* The function for randomly choosing the two player cards*/
function playerStart(numCards) {
    for (let i=0; i<numCards; i++){
        let index = Math.floor(Math.random() * Object.keys(cards).length);
        let card = document.createElement("p");
        card.textContent = keys[index];
        playerCards.appendChild(card);
        let target = keys[index];
        keys.splice(index,1);
        playerScore+=cards[target];
        delete cards[target];
    }
    
}

/* The function for randomly choosing the first computer card*/
function computerStart() {
    let index = Math.floor(Math.random() * Object.keys(cards).length);
    let card = document.createElement("p");
    card.textContent = keys[index];
    computerCards.appendChild(card);
    let target = keys[index];
    keys.splice(index,1);
    computerScore+=cards[target];
    delete cards[target];
}

function playerWin(){
    // stayButton.style.visibility = "hidden";
    // hitButton.style.visibility = "hidden";
    setTimeout(function() {
        // playerCards.style.visibility = "hidden";
        // computerCards.style.visibility = "hidden";
        cardHolder.removeChild(computerCards);
        cardHolder.removeChild(playerCards);
        cardHolder.removeChild(playerButtons);
        const winMessage = document.createElement("h1");
        winMessage.textContent = "Congratulations! You Win!";
        cardHolder.appendChild(winMessage); 
    },3000);
}
function computerWin() {
    // stayButton.style.visibility = "hidden";
    // hitButton.style.visibility = "hidden";
    setTimeout(function() {
        //playerCards.style.visibility = "hidden";
        //computerCards.style.visibility = "hidden";
        cardHolder.removeChild(computerCards);
        cardHolder.removeChild(playerCards);
        cardHolder.removeChild(playerButtons);
        const winMessage = document.createElement("h1");
        winMessage.textContent = "Sorry ... You Lose";
        cardHolder.appendChild(winMessage); 
    },3000); 
}
function tie() {
    //stayButton.style.visibility = "hidden";
    //hitButton.style.visibility = "hidden";
    setTimeout(function() {
        //playerCards.style.visibility = "hidden";
        //computerCards.style.visibility = "hidden";
        cardHolder.removeChild(computerCards);
        cardHolder.removeChild(playerCards);
        cardHolder.removeChild(playerButtons);
        const winMessage = document.createElement("h1");
        winMessage.textContent = "You Tied!";
        cardHolder.appendChild(winMessage); 
    },3000); 
}