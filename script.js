// Object to hold all large monsters.
let monstObj = {};
// Create MHW data for every large monster.
// Used for matching names with id only.
async function FetchMonsterAll() {
	let response = await fetch(`https://mhw-db.com/monsters/`);
	let data = await response.json();
	for (let i = 0; i < data.length; i++) {
		if (data[i].type === 'large') {
			monstObj[i] = [];
			monstObj[i].push(
				data[i].id,
				data[i].name,
				data[i].locations[0].name,
				data[i].locations[0].id
			);
		}
	}
	console.log(monstObj);
}
FetchMonsterAll();

// get monster's name from search input.
let searchInput = document.getElementsByName('monster-search');

// Event listener for pressing 'Enter' button on keyboard.
window.addEventListener('keydown', (event) => {
	if (searchInput[0].value && event.key === 'Enter') {
		FetchMonster();
		searchInput[0].value = '';
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
	document.getElementById('description').innerHTML = target.description;
}
function changeBiome(area) {}
