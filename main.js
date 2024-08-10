/* Rule explanation in an alert message*/
window.alert("In this example of BlackJack, the aces are all valued as 1 and there are two joker cards valued at 11!")

/* Initial values for the properties needed*/
let computerScore = 0;
let playerScore = 0;
let playerTurn = true;
let computerTurn = true;
const cardHolder = document.querySelector(".cardHolder");

/* Styling for Computer Cards section*/
let computerCards = document.createElement("div");
computerCards.style.display = "flex";
computerCards.style.flexDirection = "row";
computerCards.style.justifyContent = "center";
computerCards.style.gap = "30px";
computerCards.style.padding = "30px";

/* Styling for Player Cards section*/
let playerCards = document.createElement("div");
playerCards.style.display = "flex";
playerCards.style.flexDirection = "row";
playerCards.style.justifyContent = "center";
playerCards.style.gap = "30px";
playerCards.style.padding = "30px";

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
playerButtons.style.margin = "30px";

/* Score Board*/
let computerValue = document.createElement("h2");
computerValue.textContent = "Computer Score: ";
let playerValue = document.createElement("h2");
playerValue.textContent = "Player Score: ";

/* Styling scoreboard*/
computerValue.style.display = "flex";
computerValue.style.justifyContent = "center";
playerValue.style.display = "flex";
playerValue.style.justifyContent = "center";

/* Appends the elements to the cardHolder in the DOM*/
cardHolder.appendChild(computerValue);
cardHolder.appendChild(computerCards);
cardHolder.appendChild(playerCards);
cardHolder.appendChild(playerButtons);
cardHolder.appendChild(playerValue);

/* Setting the cards in the deck*/
let cards = {
    spade2: 2, spade3: 3, spade4: 4, spade5: 5, spade6: 6, spade7: 7, spade8: 8, spade9: 9, spade10: 10, spadeJack: 10, spadeQueen: 10, spadeKing: 10, spadeAce: 1,
    club2: 2, club3: 3, club4: 4, club5: 5, club6: 6, club7: 7, club8: 8, club9: 9, club10: 10, clubJack: 10, clubQueen: 10, clubKing: 10, clubAce: 1,
    heart2: 2, heart3: 3, heart4: 4, heart5: 5, heart6: 6, heart7: 7, heart8: 8, heart9: 9, heart10: 10, heartJack: 10, heartQueen: 10, heartKing: 10, heartAce: 1, 
    diamond2: 2, diamond3: 3, diamond4: 4, diamond5: 5, diamond6: 6, diamond7: 7, diamond8: 8, diamond9: 9, diamond10: 10, diamondJack: 10, diamondQueen: 10, diamondKing: 10, diamondAce: 1,
    redJoker: 11, blackJoker: 11
}
let keys = Object.keys(cards);

playGame();

/* Function that runs the game*/
function playGame(){
    computerStart();
    playerStart(2);
    playerChoice();
}

/* Computer Algorithm for making the choice*/
function computerChoice() {
    while (computerTurn){
        let target = 21-computerScore;
        let favorableCards = 0;
        let unfavorableCards = 0;
        for (let i = 0; i<Object.keys(cards).length;i++){
            if(cards[keys[i]]<=target){
                favorableCards++;
            } else {
                unfavorableCards++;
            }
        }
        if (favorableCards>unfavorableCards){
            computerStart();
        } else {
            computerTurn = false;
        }
    }
    // Displaying Winner Message
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

/* Responding to the player's choice during the game*/
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
                computerWin();
            }
        }
    });
    
}

/* The function for randomly choosing the numCards amount of cards*/
function playerStart(numCards) {
    for (let i=0; i<numCards; i++){
        let index = Math.floor(Math.random() * Object.keys(cards).length);
        let card = document.createElement("img");
        card.src = "./Cards/" + keys[index] + ".png";
        playerCards.appendChild(card);
        let target = keys[index];
        keys.splice(index,1);
        playerScore+=cards[target];
        playerValue.textContent = "Player Score: " + playerScore;
        delete cards[target];
        if (playerScore == 21){
            playerWin();
        }
    }
    
}

/* The function for randomly choosing the first computer card*/
function computerStart() {
    let index = Math.floor(Math.random() * Object.keys(cards).length);
    let card = document.createElement("img");
    card.src = "./Cards/" + keys[index] + ".png";
    computerCards.appendChild(card);
    let target = keys[index];
    keys.splice(index,1);
    computerScore+=cards[target];
    computerValue.textContent = "Computer Score: " + computerScore;
    delete cards[target];
}

/* What to do when player wins*/
function playerWin(){
    setTimeout(function() {
        if (confirm("Congratulations! You Win! Press Ok to play another round!")){
            window.location.href = "./index.html";
        }
    },1000);
}
/* What to do when computer wins*/
function computerWin() {
    setTimeout(function() {
        if (confirm("Sorry ... You Lose. Press Ok to play another round!")){
            window.location.href = "./index.html";
        }
    },1000); 
}
/* What to do when there is a tie*/
function tie() {
    setTimeout(function() {
        if (confirm("You Tied! Press Ok to play another round!")){
            window.location.href = "./index.html";
        }
    },1000); 
}