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
  

function reloadDealerHand(numCards) {
    const dealerHand = document.getElementById("dealer-hand");

    dealerHand.innerHTML = "";
  
    for (let i = 0; i < numCards; i++) {
      dealerHand.appendChild(createCard());
    }
}

function reloadPlayerHand(numCards) {
    const playerHand = document.getElementById("player-hand");

    playerHand.innerHTML = "";
  
    for (let i = 0; i < numCards; i++) {
        playerHand.appendChild(createCard());
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
  