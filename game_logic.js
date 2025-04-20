
function createDeck() {
    const suits = ['♠', '♥', '♦', '♣'];
    const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let deck = [];
  
    for (let suit of suits) {
      for (let value of values) {
        deck.push({ suit, value });
      }
    }
}

function getCardValue(card) {
    if (['J', 'Q', 'K'].includes(card.value)) return 10;
    if(card.value === 'A') return 11;
    return parseInt(card.value);
}

function getHandValue(hand) {
    let total = 0;
    let aces = 0;

    for(let card of hand) {
        total += getCardValue(card);
        if(card.value == 'A') aces++;
    }

    while(total > 21 && aces > 0) {
        total -= 10;
        aces--;
    }

    return total;
}

function playBlackJack() {
    //create deck function not in this implementation
    const deck = createDeck();
    const playerHand = [deck.pop(), deck.pop()];
    const dealerHand = [deck.pop(), deck.pop()];

    let playerDone = false;
    let dealerDone = false;

    while(!playerDone) {
        const value = getHandValue(playerHand);
        if (value < 17) {
            playerHand.push(deck.pop());
        }
        else {
            playerDone = true;
        }
    }

    while(!dealerDone) {
        const value = getHandValue(dealerHand);
        if (value < 17) {
            dealerHand.push(deck.pop());
        }
        else {
            dealerDone = true;
        }
    }


}