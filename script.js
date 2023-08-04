/**  Get monster's name from search input. */
let searchInput = document.getElementsByName('monster-search');
/**  RegExp for checking if search-bar input is English alphabet or space or hyphen. */
const inputRegex = new RegExp(/^[a-z]|-|\s$/i);

// Event listener for 'Backspace' or 'Enter'.
document.querySelector('input').addEventListener('keyup', (event) => {
	if (event.key === 'Backspace') {
		autoComplete('Backspace');
	} else if (event.key === 'Enter') {
		FetchMonster();
		word = [];
		lastInput = 0;
		deleteSuggestions();
	}
});

let lastInput = 0;
// Event listener for keyboard input.
document.querySelector('input').addEventListener('input', (event) => {
	let char = event.target.value;
	if (
		char.length > lastInput &&
		searchInput[0].value.length > 0 &&
		inputRegex.test(char)
	) {
		lastInput++;
		autoComplete(char[char.length - 1]);
	}
});

/** Show loading animation while fetch in progress. */
function showLoading() {
	document.getElementById('loading').classList.add('display');
}

/** Hide loading animation once fetch is complete. */
function hideLoading() {
	document.getElementById('loading').classList.remove('display');
}

/**  fetch monster data (name, species, biome/s, description,
resistances & weaknesses, rewards). */
async function FetchMonster() {
	let prevImg = document.querySelector('img').src;
	document.querySelector('img').src = '';
	showLoading();
	// get monster name from search.
	const monsterName = searchInput[0].value;
	// fetch data of provided monster name.
	const response = await fetch(`https://mhw-db.com/monsters/`);
	const data = await response.json();
	let target;
	for (let i = 0; i < data.length; i++) {
		if (data[i].name === monsterName) {
			target = data[i];
		}
	}
	// Input is invalid, does not return monster.
	if (!target) {
		searchInput[0].value = '';
		word = [];
		alert('Monster not found, or incorrect input.');
		hideLoading();
		document.querySelector('img').src = prevImg;
	} else {
		// output data as text on right panel.
		document.getElementById('name').textContent = target.name;
		document.getElementById('species').textContent = target.species;
		document.getElementById('biome').textContent = target.locations[0].name;
		document.getElementById('description').textContent = target.description;
		populateWeaknesses(target);
		populateResistances(target);
		populateRewards(target);
		// call functions 'changeBiome' and 'monsterImg' with monster's name and
		// main location as parameters, respectively.
		changeBiome(target.locations[0].name);
		monsterImg(target.name);
		if (
			document.getElementById('card_description').classList.contains('hide')
		) {
			changeInformationCard('description');
		}
		prevImg = document.querySelector('img').src;
		searchInput[0].value = '';
		deleteSuggestions();
		word = [];
		hideLoading();
	}
}

/** Load weaknesses as list-items in DOM. */
function populateWeaknesses(target) {
	const weakList = document.getElementById('weaknesses');
	while (weakList.firstChild) {
		weakList.removeChild(weakList.firstChild);
	}
	for (let i = 0; i < target.weaknesses.length; i++) {
		const w = document.createElement('li');
		const text = document.createTextNode(target.weaknesses[i].element);
		w.appendChild(text);
		weakList.appendChild(w);
	}
}
/** Load resistances as list-items in DOM. */
function populateResistances(target) {
	const resisList = document.getElementById('resistances');
	while (resisList.firstChild) {
		resisList.removeChild(resisList.firstChild);
	}
	for (let i = 0; i < target.resistances.length; i++) {
		const w = document.createElement('li');
		const text = document.createTextNode(target.resistances[i].element);
		w.appendChild(text);
		resisList.appendChild(w);
	}
}
/** Load rewards as list-items in DOM. */
function populateRewards(target) {
	const rewardList = document.getElementById('rewards');
	while (rewardList.firstChild) {
		rewardList.removeChild(rewardList.firstChild);
	}
	if (target.rewards.length === 0) {
		rewardList.textContent = 'No Rewards';
	} else {
		for (let i = 0; i < target.rewards.length; i++) {
			const w = document.createElement('li');
			const text = document.createTextNode(target.rewards[i].item.name);
			w.appendChild(text);
			rewardList.appendChild(w);
		}
	}
}

/**  Change site background to monster's main biome. */
function changeBiome(area) {
	switch (area) {
		case 'Ancient Forest':
			document.body.className = 'af';
			break;
		case 'Wildspire Waste':
			document.body.className = 'ww';
			break;
		case 'Coral Highlands':
			document.body.className = 'ch';
			break;
		case 'Rotten Vale':
			document.body.className = 'rv';
			break;
		case "Elder's Recess":
			document.body.className = 'er';
			break;
		case 'Caverns of El Dorado':
			document.body.className = 'coed';
			break;
		case 'Hoarfrost Reach':
			document.body.className = 'hr';
			break;
		case 'Confluence of Fates':
			document.body.className = 'cof';
			break;
		case 'Secluded Valley':
			document.body.className = 'sv';
			break;
		case 'Guiding Lands':
			document.body.className = 'gl';
			break;
		case 'Great Ravine':
			document.body.className = 'gr';
			break;

		default:
			break;
	}
}

/** Change information card being shown by clicking on navigation tab. */
function changeInformationCard(card) {
	if (card === 'description') {
		document.getElementById('card_description').classList.remove('hide');
		document.getElementById('card_weakness').classList.add('hide');
		document.getElementById('card_reward').classList.add('hide');
	} else if (card === 'weakness') {
		document.getElementById('card_description').classList.add('hide');
		document.getElementById('card_weakness').classList.remove('hide');
		document.getElementById('card_reward').classList.add('hide');
	} else if (card === 'reward') {
		document.getElementById('card_description').classList.add('hide');
		document.getElementById('card_weakness').classList.add('hide');
		document.getElementById('card_reward').classList.remove('hide');
	}
}
