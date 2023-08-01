let monstObj = new Set();
async function fetchMonstersAll() {
	const response = await fetch(`https://mhw-db.com/monsters/`);
	const data = await response.json();
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === 'large' && !monstObj.has(data[i].locations[0])) {
			monstObj.add(data[i].locations[0].name);
		}
	}
}
fetchMonstersAll();
console.log(monstObj);

// get monster's name from search input.
let searchInput = document.getElementsByName('monster-search');

// Event listener for pressing 'Enter' button on keyboard.
window.addEventListener('keydown', (event) => {
	if (searchInput[0].value && event.key === 'Enter') {
		FetchMonster();
	}
});

// fetch monster data (name, species, biome/s, description, resistances & weaknesses, rewards).
async function FetchMonster() {
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
	// output data as text on right panel.
	document.getElementById('name').innerHTML = target.name;
	document.getElementById('species').innerHTML = target.species;
	document.getElementById('biome').innerHTML = target.locations[0].name;
	document.getElementById('description').innerHTML = target.description;
	// call function 'changeBiome' with monster's main location as parameter.
	changeBiome(target.locations[0].name);
	searchInput[0].value = '';
}

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
