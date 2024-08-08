let computerScore = 0;
let playerScore = 0;
let computerCards = document.querySelector(".computerCards");
let playerCards = document.querySelector(".playerCards");

let cards = {
    spade1: 1, spade2: 2, spade3: 3, spade4: 4, spade5: 5, spade6: 6, spade7: 7, spade8: 8, spade9: 9, spade10: 10, spadeJack: 10, spadeQueen: 10, spadeKing: 10, spadeAce: 11,
    club1: 1, club2: 2, club3: 3, club4: 4, club5: 5, club6: 6, club7: 7, club8: 8, club9: 9, club10: 10, clubJack: 10, clubQueen: 10, clubKing: 10, clubAce: 11,
    heart1: 1, heart2: 2, heart3: 3, heart4: 4, heart5: 5, heart6: 6, heart7: 7, heart8: 8, heart9: 9, heart10: 10, heartJack: 10, heartQueen: 10, heartKing: 10, heartAce: 11, 
    diamond1: 1, diamond2: 2, diamond3: 3, diamond4: 4, diamond5: 5, diamond6: 6, diamond7: 7, diamond8: 8, diamond9: 9, diamond10: 10, diamondJack: 10, diamondQueen: 10, diamondKing: 10, diamondAce: 11,
}
let keys = Object.keys(cards);

function playGame(){
    computerStart();
    playerStart();
}

/* The function for randomly choosing the two player cards*/
function playerStart() {
    
}

/* The function for randomly choosing the first computer card*/
function computerStart() {
    let index = Math.floor(Math.random() * Object.keys(cards).length);
    let card = document.createElement("p");
    card.textContent = keys[index];
    computerCards.appendChild(card);
    let target = keys[index];
    //console.log(target);
    keys.splice(index,1);
    //console.log(cards[target]);
    delete cards[target];
    //console.log(Object.keys(cards).length);
}