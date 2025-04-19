const cards = document.getElementsByClassName('card');
let button = document.getElementById('start-button');

function waitForTransition(element) {
	return new Promise(resolve => {
	  element.addEventListener('transitionend', resolve, { once: true });
	});
}

/**
 * Sets the transform of a card and waits for the 
 * transform's completion.
 * 
 * @param {HTMLElement} card 
 * @param {string} transform 
 */
async function animateCard(card, transform) {
	card.style.transform = transform;
	await waitForTransition(card);
}

/**
 * Staggers the cards and places them in their 
 * starting positions.
 * 
 * @param {HTMLElement} cards 
 */
function setUpCards(cards) {
	let n = cards.length;
	for (let i = 0; i < n; i++) {
		cards[i].style.transitionDuration = '0s';
		cards[i].style.transform = `translate(${i*10}px, ${i*10}px)`
		cards[i].style.transitionDuration = '0.5s';
		cards[i].style.zIndex = (n - i).toString();
	}
}

/**
 * Performs the shuffle animation moving the bottom card out,
 * the remain cards down, and placing the bottom card on top.
 * This is done once for every card.
 * 
 * @param {HTMLElement[]} cards 
 */
async function doShuffleAnimation(cards) {
	let n = cards.length;
	for (let i = 1; i <= n; i++) {
		let toAnimate = []
		for (let c = 0; c < n; c++) {
			let pos = (i+c) % n;
			let x = pos*10;
			let y = pos*10;
			if (pos == 0) {
				x = 200 + 10*n;
				y = 10*n;
			} 
			toAnimate.push(animateCard(cards[c], `translate(${x}px, ${y}px)`))
		}
		await Promise.all(toAnimate);
		let bottom = n - i;
		for (let c = 0; c < n; c++) {
			let pos = (i+c) % n;
			cards[c].style.zIndex = (n - pos).toString();
		}
		await animateCard(cards[bottom], 'translate(0px, 0px)')
	}
}

async function handleButtonClick() {
	await doShuffleAnimation(cards)
}

setUpCards(cards)
button.addEventListener('click', handleButtonClick)

