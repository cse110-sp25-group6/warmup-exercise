export class Deck {
	constructor() {
	  this.suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
	  this.ranks = [
		'Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10',
		'Jack', 'Queen', 'King'
	  ];
	  this.cards = [];
	  this.reset();
	}
  
	/**
	 * Resets and rebuilds the deck
	 */
	reset() {
	  this.cards = [];
	  for (let suit of this.suits) {
		for (let rank of this.ranks) {
		  this.cards.push({ suit, rank });
		}
	  }
	}
  
	/**
	 * Shuffles the deck using Fisher-Yates shuffle algorithm
	 */
	shuffle() {
	  for (let i = this.cards.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
	  }
	}
  
	/**
	 * Draws a card from the top of the deck
	 * @returns a card (suit, rank) 
	 */
	draw() {
	  return this.cards.pop(); // returns undefined if deck is empty
	}
  
	/**
	 * @returns number of cards left
	 */
	count() {
	  return this.cards.length;
	}

  }
  