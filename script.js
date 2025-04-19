// @ts-check

function flipCard(element) {
  element.classList.toggle('flipped');
}

function createCard() {
    const article = document.createElement("article");
    article.classList.add("card");
  
    const header = document.createElement("header");
    header.classList.add("card-front");
    header.style.color = "black";
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
  

function reloadDealerHand() {
    const dealerHand = document.getElementById("dealer-hand");

    dealerHand.innerHTML = "";
  
    const numCards = 2;
    for (let i = 0; i < numCards; i++) {
      dealerHand.appendChild(createCard());
    }
}

function reloadPlayerHand() {
    const playerHand = document.getElementById("player-hand");

    playerHand.innerHTML = "";
  
    const numCards = 2;
    for (let i = 0; i < numCards; i++) {
        playerHand.appendChild(createCard());
    }
} 

document.addEventListener("DOMContentLoaded", () => {
    const newGameButton = document.getElementById("new-game");
    newGameButton.addEventListener("click", function () {
        reloadDealerHand();
        reloadPlayerHand();
      });
});
  