const start = document.getElementById('gamePanel-start');
const reset = document.getElementById('gamePanel-reset');
const destroy = document.getElementById('gamePanel-delete');
const showCards = document.getElementById('gamePanel-show');
const field = document.getElementById('memoryField');
let cards = document.getElementsByClassName('memoryField__card');
let idsArray = ['card1', 'card2', 'card3', 'card4', 'card5', 'card6', 'card7', 'card8', 'card9', 'card10', 'card11', 'card12'];
let usedIdsArray = [];
let cardN = [];
let slicedRandArr = [];
const quantity = 12;
const winReq = 6;
var winCount = 0;
var lastPosition = 0;
var moves = 0;
let blank = '#DDD';

document.getElementById('gamePanel-start').addEventListener('click', function () {
	newSettingOfCards(12);
});
document.getElementById('gamePanel-reset').addEventListener('click', function () {
	reShuffle(12);
});
document.getElementById('gamePanel-delete').addEventListener('click', function () {
	removeCards(12);
});
document.getElementById('gamePanel-show').addEventListener('click', function () {
	show();
});

const randomID = () => {
	let rand;
	(rand = idsArray[Math.floor(Math.random() * idsArray.length)]);
	usedIdsArray.push(rand);
	let idIndex = idsArray.indexOf(rand);
	idsArray.splice(idIndex, 1);
	return rand;
};

function newSettingOfCards(quantity) {
	if (cards.length < quantity && idsArray.length === quantity) {
		for (let i = 0; i < quantity; i++) {
			let rand = randomID();
			let div = document.createElement('div');
			div.classList.add('memoryField__card');
			div.id = rand;
			div.classList.add(rand);
			field.appendChild(div);
			cardN[i] = document.getElementById(rand);
			slicedRandArr[i] = rand.slice(4) - 1;
			cardN[i].addEventListener('click', function () {
				cardComparision(slicedRandArr[i], i);
			});

			reset.disabled = true;
			destroy.disabled = false;
			showCards.disabled = false;
		}
	}
}

newSettingOfCards(12);

function reShuffle(quantity) {
	if (usedIdsArray.length === quantity) {
		for (let i = 0; i < quantity; i++) {
			let reRand;
			(reRand = usedIdsArray[Math.floor(Math.random() * usedIdsArray.length)]);
			idsArray.push(reRand);
			let reIdIndex = usedIdsArray.indexOf(reRand);
			usedIdsArray.splice(reIdIndex, 1);
			start.disabled = false;
			reset.disabled = true;
			destroy.disabled = true;
		}
	}
}

function removeCards(quantity) {
	for (let iterations = 0; iterations < quantity; iterations++) {
		cards[0].remove();
		reset.disabled = false;
		destroy.disabled = true;
		resetGlobalFlags();
	}
}

start.disabled = true;
reset.disabled = true;

var matchCheaker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var alreadyMatched = [0, 0, 0, 0, 0, 0];

function cardComparision(id, position) {
	matchCheaker[id]++;
	moves++;

	let matchInstanceCheaker = matchCheaker.reduce(function (a, b) {
		return a + b;
	});

	if (matchInstanceCheaker === 2) {
		if (matchCheaker[0] === 1 && matchCheaker[1] === 1 && alreadyMatched[0] !== 1) {
			cardN[position].style.backgroundColor = blank;
			cardN[lastPosition].style.backgroundColor = blank;
			winCount++;
			alreadyMatched[0]++;
		} else if (matchCheaker[2] === 1 && matchCheaker[3] === 1 && alreadyMatched[1] !== 1) {
			cardN[position].style.backgroundColor = blank;
			cardN[lastPosition].style.backgroundColor = blank;
			winCount++;
			alreadyMatched[1]++;
		} else if (matchCheaker[4] === 1 && matchCheaker[5] === 1 && alreadyMatched[2] !== 1) {
			cardN[position].style.backgroundColor = blank;
			cardN[lastPosition].style.backgroundColor = blank;
			winCount++;
			alreadyMatched[2]++;
		} else if (matchCheaker[6] === 1 && matchCheaker[7] === 1 && alreadyMatched[3] !== 1) {
			cardN[position].style.backgroundColor = blank;
			cardN[lastPosition].style.backgroundColor = blank;
			winCount++;
			alreadyMatched[3]++;
		} else if (matchCheaker[8] === 1 && matchCheaker[9] === 1 && alreadyMatched[4] !== 1) {
			cardN[position].style.backgroundColor = blank;
			cardN[lastPosition].style.backgroundColor = blank;
			winCount++;
			alreadyMatched[4]++;
		} else if (matchCheaker[10] === 1 && matchCheaker[11] === 1 && alreadyMatched[5] !== 1) {
			cardN[position].style.backgroundColor = blank;
			cardN[lastPosition].style.backgroundColor = blank;
			winCount++;
			alreadyMatched[5]++;
		}
		matchCheaker = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	}
	lastPosition = position;

	if (winCount === winReq) {
		let paragraph = document.createElement('p');
		let textnode = document.createTextNode('The memory is strong in you. You won in ' + moves + ' moves');
		paragraph.appendChild(textnode);
		document.getElementById('consoleField').appendChild(paragraph);
		showCards.disabled = true;
		resetGlobalFlags();
	}
}

function show() {
	for (let i = 0; i < quantity; i++) {
		cards[i].classList.add('active' + slicedRandArr[i]);
	}

	setTimeout(function () {
		for (let i = 0; i < quantity; i++) {
			cards[i].classList.remove('active' + slicedRandArr[i]);
		}
	}, 3500);
}

window.onload = show();

function resetGlobalFlags() {
	moves = 0;
	alreadyMatched = [0, 0, 0, 0, 0, 0];
	winCount = 0;
}