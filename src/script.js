/**  Get monster's name from search input. */
let searchInput = document.getElementsByName('monster-search');
/**  RegExp for checking if search-bar input is English alphabet or space or hyphen. */
const inputRegex = new RegExp(/^[a-z]|-|\s$/i);

// Event listener for 'Backspace' or 'Enter'.
document.querySelector('input').addEventListener('keyup', (event) => {
	if (event.key === 'Backspace') {
		autoComplete('Backspace');
	} else if (event.key === 'Enter') {
		commenceFetchAndClear();
	}
});

/** Length of previous input into search bar, used to prevent input of
 * keys such as 'Shift'.
 */
let lastInputLength = 0;
// Event listener for keyboard input.
document.querySelector('input').addEventListener('input', (event) => {
	let char = event.target.value;
	if (char.length === 0) {
		lastInputLength = 0;
		word = [];
	}
	if (
		char.length > lastInputLength &&
		searchInput[0].value.length > 0 &&
		inputRegex.test(char)
	) {
		if (
			(char[char.length - 1] === char[char.length - 1].toLowerCase() &&
				searchInput[0].value.length === 1) ||
			word[char.length - 2] === ' ' ||
			word[char.length - 2] === '-'
		) {
			autoComplete(char[char.length - 1].toUpperCase());
		} else {
			autoComplete(char[char.length - 1]);
		}
		lastInputLength++;
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

/** Helper function for executing data fetch and clearing input & suggestion data. */
function commenceFetchAndClear() {
	FetchMonster();
	word = [];
	lastInputLength = 0;
	deleteSuggestions();
}

/**  fetch monster data (name, species, biome/s, description,
resistances & weaknesses, rewards). */
async function FetchMonster() {
	// removes text 'Awaiting search...' from image box once fetch initiated.
	document.getElementById('img-span').textContent = '';
	/** Holds reference to previous image if search input cannot be found. */
	let prevImg = document.querySelector('img').src;
	document.querySelector('img').src = '';
	showLoading();
	/** get monster name from search to compare with API fetch. */
	const monsterName = word.join('');
	// fetch data of provided monster name.
	const response = await fetch(`https://mhw-db.com/monsters/`);
	const data = await response.json();
	/** Variable to hold monster data, if found. */
	let target;
	for (let i = 0; i < data.length; i++) {
		if (data[i].name === monsterName) {
			target = data[i];
		}
	}
	// Input is invalid, does not return monster, and previous image is returned to view.
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
			// set 'Ecology' tab to show once monster loads, if separate tab is open instead.
			changeInformationCard('description');
		}
		searchInput[0].value = '';
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

// Checks for tablet/mobile viewport to set elements into mobile-view mode.
window.onload = () => {
	if (document.getElementById('m-img').getAttribute('src') === '') {
	}
	if (window.innerWidth < 900) {
		document.getElementById('card_weakness').classList.remove('hide');
		document.getElementById('card_weakness').classList.add('spacing');
		document.getElementById('card_reward').classList.remove('hide');
		document.getElementById('card_reward').classList.add('spacing');
		document.getElementById('info-tabs').remove();
		document.querySelector('hr').remove();
		document.getElementById('card_description').classList.add('spacing');
	}
};
