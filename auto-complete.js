/**  Class to create node for Trie. */
class TrieNode {
	constructor(key) {
		this.key = key;
		this.parent = null;
		this.children = {};
		this.end = false;
	}
	getWord() {
		let output = [];
		let node = this;
		while (node) {
			output.unshift(node.key);
			node = node.parent;
		}
		return output.join('');
	}
}
/**  Trie used for autocomplete for search bar. */
class Trie {
	constructor() {
		this.root = new TrieNode(null);
	}
	insert(word) {
		let node = this.root;
		for (let i = 0; i < word.length; i++) {
			if (!node.children[word[i]]) {
				node.children[word[i]] = new TrieNode(word[i]);
				node.children[word[i]].parent = node;
			}
			node = node.children[word[i]];
			if (i === word.length - 1) {
				node.end = true;
			}
		}
	}
	find(prefix) {
		let node = this.root;
		let output = [];
		for (let i = 0; i < prefix.length; i++) {
			if (node.children[prefix[i]]) {
				node = node.children[prefix[i]];
			} else {
				return output;
			}
		}
		this.findAllWords(node, output);
		return output;
	}
	findAllWords(node, arr) {
		if (node.end) {
			arr.unshift(node.getWord());
		}
		for (let child in node.children) {
			this.findAllWords(node.children[child], arr);
		}
	}
}

/**  Trie to store all monster names. */
const monsterNamesTrie = new Trie();
// Add all monster names via 'insert' so trie can build nodes with names.
monsterNamesTrie.insert('Great Jagras');
monsterNamesTrie.insert('Kulu-Ya-Ku');
monsterNamesTrie.insert('Pukei-Pukei');
monsterNamesTrie.insert('Barroth');
monsterNamesTrie.insert('Jyuratodus');
monsterNamesTrie.insert('Tobi-Kadachi');
monsterNamesTrie.insert('Anjanath');
monsterNamesTrie.insert('Azure Rathalos');
monsterNamesTrie.insert('Bazelgeuse');
monsterNamesTrie.insert('Behemoth');
monsterNamesTrie.insert('Deviljho');
monsterNamesTrie.insert('Diablos');
monsterNamesTrie.insert('Black Diablos');
monsterNamesTrie.insert('Dodogama');
monsterNamesTrie.insert('Great Girros');
monsterNamesTrie.insert('Kirin');
monsterNamesTrie.insert('Kulve Taroth');
monsterNamesTrie.insert('Kushala Daora');
monsterNamesTrie.insert('Lavasioth');
monsterNamesTrie.insert('Legiana');
monsterNamesTrie.insert('Lunastra');
monsterNamesTrie.insert('Nergigante');
monsterNamesTrie.insert('Odogaron');
monsterNamesTrie.insert('Paolumu');
monsterNamesTrie.insert('Radobaan');
monsterNamesTrie.insert('Rathalos');
monsterNamesTrie.insert('Rathian');
monsterNamesTrie.insert('Pink Rathian');
monsterNamesTrie.insert('Teostra');
monsterNamesTrie.insert('Tzitzi-Ya-Ku');
monsterNamesTrie.insert('Uragaan');
monsterNamesTrie.insert('Vaal Hazak');
monsterNamesTrie.insert("Xeno'jiiva");
monsterNamesTrie.insert('Zorah Magdaros');
monsterNamesTrie.insert('Leshen');
monsterNamesTrie.insert('Ancient Leshen');
monsterNamesTrie.insert("Safi'jiiva");
monsterNamesTrie.insert('Stygian Zinogre');
monsterNamesTrie.insert('Rajang');
monsterNamesTrie.insert('Viper Tobi-Kadachi');
monsterNamesTrie.insert('Namielle');
monsterNamesTrie.insert('Zinogre');

/**  Current word being searched. */
let word = [];
/**  Element that shows autocomplete options below search bar. */
const dropdown = document.getElementById('autocomplete-options');

/**  Helper function for loading suggestions */
function loadSuggestions() {
	for (let i = 0; i < monsterNamesTrie.find(word).length; i++) {
		const newSuggestion = document.createElement('p');
		newSuggestion.appendChild(
			document.createTextNode(monsterNamesTrie.find(word)[i])
		);
		dropdown.appendChild(newSuggestion);
	}
}
/**  Helper function for deleting all suggestions. */
function deleteSuggestions() {
	while (dropdown.firstChild) {
		dropdown.removeChild(dropdown.firstChild);
	}
}

/**  Auto-complete function for search bar. */
function autoComplete(input) {
	// If 'Backspace' then remove all current suggestions, then
	// load suggestions of new input.
	if (input === 'Backspace') {
		word.pop();
		lastInput--;
		deleteSuggestions();
		// If-statement to prevent loading all names on an
		// empty word array.
		if (word.length > 0) {
			loadSuggestions();
		}
		console.log('wordDel: ' + word.join(''));
	}
	// Otherwise, add new input to word array, clear previous
	// suggestions, and load new ones.
	else {
		word.push(input);
		console.log('wordAdd: ' + word.join(''));
		deleteSuggestions();
		loadSuggestions();
	}
}
