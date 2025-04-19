// @ts-check

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let card3 = document.getElementById('card3');
let button = document.getElementById('start-button')
let cycleCount = 0;

// const cards = [card1, card2, card3];
const cards = document.getElementsByClassName('card')
for (let c of cards) {
	console.log(c);
}

function waitForTransition(element) {
	return new Promise(resolve => {
	  element.addEventListener('transitionend', resolve, { once: true });
	});
}

async function animateCard(card, transform) {
	card.style.transform = transform;
	await waitForTransition(card);
}
  

async function shuffleCards(top, middle, bottom) {
	console.log("start")

	await new Promise(resolve => {
		bottom.addEventListener('transitionend', resolve, { once: true});
		bottom.style.transform = 'translate(20px, 20px)';
		middle.style.transform = 'translate(10px, 10px)';
		top.style.transform = 'translate(0px, 0px)';
	})

	await new Promise(resolve => {
		bottom.addEventListener('transitionend', resolve, { once: true});
		bottom.style.transform = 'translate(200px, 20px)'
		middle.style.transform = 'translate(20px, 20px)'
		top.style.transform = 'translate(10px, 10px)'

	})
	
	console.log("after");

	await new Promise(resolve => {
		bottom.addEventListener('transitionend', resolve, { once: true});
		bottom.style.zIndex = 3;
		top.style.zIndex = 2;
		middle.style.zIndex = 1;
		bottom.style.transform = 'translate(0px, 0px)';

	})
	

	console.log("set tranform")
        
}


// async function fullShuffle() {
// 	await shuffleCards(card1, card2, card3);
// 	await shuffleCards(card3, card1, card2);
// 	await shuffleCards(card2, card3, card1);
// }

// fullShuffle()

/**
 * 
 * @param {HTMLElement[]} cards 
 */
async function testShuffleCards(cards) {
	let n = cards.length;
	// set up
	for (let i = 0; i < n; i++) {
		cards[i].style.transitionDuration = '0s';
		cards[i].style.transform = `translate(${i*10}px, ${i*10}px)`
		cards[i].style.transitionDuration = '0.5s';
		cards[i].style.zIndex = (n - i).toString();
	}

	for (let i = 1; i <= n; i++) {
		let aniList = []
		for (let c = 0; c < n; c++) {
			let pos = (i+c) % n;
			let x = pos*10;
			let y = pos*10;
			if (pos == 0) {
				x = 200 + 10*n;
				y = 10*n;
			} 
			aniList.push(animateCard(cards[c], `translate(${x}px, ${y}px)`))
		}
		await Promise.all(aniList);
		let bottom = n - i;
		for (let c = 0; c < n; c++) {
			let pos = (i+c) % n;
			cards[c].style.zIndex = (n - pos).toString();
		}
		await animateCard(cards[bottom], 'translate(0px, 0px)')
	}
}

async function handleButtonClick() {
	// await Promise.all([
	// 	animateCard(card1, 'translate(0px, 0px'),
	// 	animateCard(card2, 'translate(10px, 10px'),
	// 	animateCard(card3, 'translate(20px, 20px')
	// ]);
	// await Promise.all([
	// 	animateCard(card1, 'translate(10px, 10px'),
	// 	animateCard(card2, 'translate(20px, 20px'),
	// 	animateCard(card3, 'translate(220px, 20px)'),
	// ]);
	// card3.style.zIndex = 3;
	// card1.style.zIndex = 2;
	// card2.style.zIndex = 1;
	// await animateCard(card3, 'translate(0px, 0px');

	await testShuffleCards(cards);
	// You can trigger more functions or logic here
}

button.addEventListener('click', handleButtonClick)

