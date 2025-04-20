// @ts-check

const deck = [];
const deckVals = {}

const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
const suits = ["heart", "spade", "diamond", "club"];

// Loop through values and suits to create card strings
// adds the values to a hashmap for easy value retrieval 
for (let value of values) {
  for (let suit of suits) {
    deck.push(suit + "-" + value);
    // suit + "-" + value + ".png"
    if (value == "jack" || value == "queen" || value == "king") {
      deckVals[suit + "-" + value] = 10;
    }
    else if (value == "ace") {
      deckVals[suit + "-" + value] = "ace";
      // can be 1 or 11, handle and calculate later
    }
    else {
      deckVals[suit + "-" + value] = Number(value);
    }
  }
}

function randomCard(){
  if (deck.length === 0) {
    console.log("The deck is empty!");
    return null;
  }

  const randomIndex = Math.floor(Math.random() * deck.length);
  const chosenCard = deck[randomIndex];

  // Remove the chosen card from the deck
  deck.splice(randomIndex, 1);

  return chosenCard;
}

function createCard(cardClass) {
    const article = document.createElement("article");
    article.classList.add("card");
  
    const header = document.createElement("header");
    header.classList.add(cardClass);
    header.classList.add("card-front");
    header.style.backgroundImage = `url(\"/card/${cardClass}.png\")`;
    header.style.backgroundSize = "281%";
    header.style.backgroundPosition = "46% 44%";
    header.textContent = "Front";
    
  
    const footer = document.createElement("footer");
    footer.classList.add("card-back");
    footer.style.color = "white";
    footer.textContent = "Back";
  
    article.appendChild(header);
    article.appendChild(footer);

    article.addEventListener("click", () => {
      article.classList.toggle("flipped");
    });
  
    return article;
}
  

function reloadDealerHand(numCards) {
  const dealerHand = document.getElementById("dealer-hand");

  dealerHand.innerHTML = "";

  for (let i = 0; i < numCards; i++) {
    const chooseCard = randomCard();

    if (chooseCard == null){
      console.log("empty deck")
      return;
    }

    dealerHand.appendChild(createCard(chooseCard));
  }
}

function reloadPlayerHand(numCards) {
    const playerHand = document.getElementById("player-hand");

    playerHand.innerHTML = "";
  
    for (let i = 0; i < numCards; i++) {
      const chooseCard = randomCard();

      if (chooseCard == null){
        console.log("empty deck")
        return;
      }

      playerHand.appendChild(createCard(chooseCard));
    }
} 

// the new game button
document.addEventListener("DOMContentLoaded", () => {
    const newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener("click", function () {
        reloadDealerHand(2);
        reloadPlayerHand(2);
      });
});
  
// flip card whenever you want
function flipCard(element) {
  element.classList.toggle('flipped');
}