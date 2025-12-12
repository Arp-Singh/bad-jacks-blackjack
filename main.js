let player = {
    name: "Player",
    chips: 200
}

document.getElementById("submit").addEventListener("click", () => {
    const input = document.getElementById("username-el").value;
        player.name = input;
});

function hideElement() {
    if(player.name !== ""){
        const element = document.querySelector("#user");
        element.id = "hideElement";
        console.log(element);
    }
}

function showElement() {
    let element = document.querySelector("#hideElement");
    if (element != null) {
        element.id = "";
    } else {
        return null;
    }
}

    showElement();

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let cardsEl = document.querySelector("#cards-el");
let sumEl = document.querySelector("#sum-el");
let messageEl = document.getElementById("message-el");
let playerEl = document.getElementById("player-el");



function startGame() {
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = cards[0] + cards[1];
    renderGame();
    
}

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1;
    if (randomCard === 1) {
        return 11;
    } else if (randomCard >= 11) {
        return 10;
    } else {
        return randomCard;
    }
}

function renderGame() {
    cardsEl.textContent = "Cards: "
    for (i = 0; i < cards.length; i++) {
        cardsEl.textContent += " " + cards[i];
    }
    sumEl.textContent = "Sum: " + sum;
    if (sum <= 20) {
        message = "Do you want to draw a card?";
    } else if (sum === 21) {
        message = "BLACKJACK!!!";
        hasBlackJack = true;
    } else {
        message = "YOU'VE GONE BUST";
        isAlive = false;
    }
    
    messageEl.textContent = message;
    playerEl.textContent = player.name + ": £" + player.chips; 
}

function newCard() {
    if (isAlive && !hasBlackJack){
        let card = getRandomCard();
        sum += card;
        cards.push(card);
    }
    renderGame();
}
