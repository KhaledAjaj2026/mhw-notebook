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

const newTrie = new Trie();
newTrie.insert('Kulu-Ya-Ku');
newTrie.insert('Kulve Taroth');
newTrie.insert('Kirin');
newTrie.insert('Kushala Daora');
newTrie.insert('Great Jagras');
newTrie.insert('Great Girros');

let word = [];

function autoComplete(input) {
	if (input === 'Backspace') {
		word.pop();
		if (word.length > 0) {
			console.log(newTrie.find(word));
		}
	} else {
		word.push(input);
		console.log(newTrie.find(word));
	}
}
