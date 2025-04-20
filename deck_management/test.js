import { Deck } from "./deck.js"

const deck = new Deck();

deck.shuffle();

for (let i = 0; i < 10; i++) {
	console.log(deck.draw()); 
	console.log(deck.count()); 
}