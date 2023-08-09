/**  List of all large monster names, used for auto-complete. */
const monstersImgLinks = {
	greatJagras: 'assets/monsters-min/great-jagras.webp',
	kuluYaku: 'assets/monsters-min/kulu-ya-ku.webp',
	anjanath: 'assets/monsters-min/anjanath.webp',
	pukeiPukei: 'assets/monsters-min/pukei-pukei.webp',
	barroth: 'assets/monsters-min/barroth.webp',
	jyuratodus: 'assets/monsters-min/jyuratodus.webp',
	tobiKadachi: 'assets/monsters-min/tobi-kadachi.webp',
	viperTobiKadachi: 'assets/monsters-min/v-tobi-kadachi.webp',
	azureRathalos: 'assets/monsters-min/azure-rathalos.webp',
	bazelgeuse: 'assets/monsters-min/bazelgeuse.webp',
	behemoth: 'assets/monsters-min/behemoth.webp',
	deviljho: 'assets/monsters-min/deviljho.webp',
	diablos: 'assets/monsters-min/diablos.webp',
	blackDiablos: 'assets/monsters-min/black-diablos.webp',
	dodogama: 'assets/monsters-min/doodgama.png',
	greatGirros: 'assets/monsters-min/great-girros.webp',
	kirin: 'assets/monsters-min/kirin.webp',
	kulveTaroth: 'assets/monsters-min/kulve-taroth.webp',
	kushalaDaora: 'assets/monsters-min/kushala-daora.webp',
	lavasioth: 'assets/monsters-min/lavasioth.webp',
	legiana: 'assets/monsters-min/legiana.webp',
	lunastra: 'assets/monsters-min/lunastra.webp',
	nergigante: 'assets/monsters-min/nergigante.webp',
	odogaron: 'assets/monsters-min/odogaron.webp',
	paolumu: 'assets/monsters-min/paolumu.webp',
	radobaan: 'assets/monsters-min/radobaan.webp',
	rathalos: 'assets/monsters-min/rathalos.webp',
	rathian: 'assets/monsters-min/rathian.webp',
	pinkRathian: 'assets/monsters-min/pink-rathian.webp',
	teostra: 'assets/monsters-min/teostra.webp',
	tziTziYaku: 'assets/monsters-min/tzitzi-ya-ku.webp',
	uragaan: 'assets/monsters-min/uragaan.webp',
	vaalHazak: 'assets/monsters-min/vaal-hazak.webp',
	xenoJiiva: 'assets/monsters-min/xeno-jiiva.webp',
	zorahMagdaros: 'assets/monsters-min/zorah-magdaros.webp',
	leshen: 'assets/monsters-min/leshen.webp',
	ancientLeshen: 'assets/monsters-min/ancient-leshen.webp',
	safiJiiva: 'assets/monsters-min/safi-jiiva.webp',
	zinogre: 'assets/monsters-min/zinogre.webp',
	stygianZinogre: 'assets/monsters-min/stygian-zinogre.webp',
	rajang: 'assets/monsters-min/rajang.webp',
	namielle: 'assets/monsters-min/namielle.webp',
};

/**  Retrieve image link of monster online. */
function monsterImg(name) {
	switch (name) {
		case 'Great Jagras':
			document.querySelector('img').src = monstersImgLinks.greatJagras;
			break;
		case 'Kulu-Ya-Ku':
			document.querySelector('img').src = monstersImgLinks.kuluYaku;
			break;
		case 'Pukei-Pukei':
			document.querySelector('img').src = monstersImgLinks.pukeiPukei;
			break;
		case 'Barroth':
			document.querySelector('img').src = monstersImgLinks.barroth;
			break;
		case 'Jyuratodus':
			document.querySelector('img').src = monstersImgLinks.jyuratodus;
			break;
		case 'Tobi-Kadachi':
			document.querySelector('img').src = monstersImgLinks.tobiKadachi;
			break;
		case 'Anjanath':
			document.querySelector('img').src = monstersImgLinks.anjanath;
			break;
		case 'Azure Rathalos':
			document.querySelector('img').src = monstersImgLinks.azureRathalos;
			break;
		case 'Bazelgeuse':
			document.querySelector('img').src = monstersImgLinks.bazelgeuse;
			break;
		case 'Behemoth':
			document.querySelector('img').src = monstersImgLinks.behemoth;
			break;
		case 'Deviljho':
			document.querySelector('img').src = monstersImgLinks.deviljho;
			break;
		case 'Diablos':
			document.querySelector('img').src = monstersImgLinks.diablos;
			break;
		case 'Black Diablos':
			document.querySelector('img').src = monstersImgLinks.blackDiablos;
			break;
		case 'Dodogama':
			document.querySelector('img').src = monstersImgLinks.dodogama;
			break;
		case 'Great Girros':
			document.querySelector('img').src = monstersImgLinks.greatGirros;
			break;
		case 'Kirin':
			document.querySelector('img').src = monstersImgLinks.kirin;
			break;
		case 'Kulve Taroth':
			document.querySelector('img').src = monstersImgLinks.kulveTaroth;
			break;
		case 'Kushala Daora':
			document.querySelector('img').src = monstersImgLinks.kushalaDaora;
			break;
		case 'Lavasioth':
			document.querySelector('img').src = monstersImgLinks.lavasioth;
			break;
		case 'Legiana':
			document.querySelector('img').src = monstersImgLinks.legiana;
			break;
		case 'Lunastra':
			document.querySelector('img').src = monstersImgLinks.lunastra;
			break;
		case 'Nergigante':
			document.querySelector('img').src = monstersImgLinks.nergigante;
			break;
		case 'Odogaron':
			document.querySelector('img').src = monstersImgLinks.odogaron;
			break;
		case 'Paolumu':
			document.querySelector('img').src = monstersImgLinks.paolumu;
			break;
		case 'Radobaan':
			document.querySelector('img').src = monstersImgLinks.radobaan;
			break;
		case 'Rathalos':
			document.querySelector('img').src = monstersImgLinks.rathalos;
			break;
		case 'Rathian':
			document.querySelector('img').src = monstersImgLinks.rathian;
			break;
		case 'Pink Rathian':
			document.querySelector('img').src = monstersImgLinks.pinkRathian;
			break;
		case 'Teostra':
			document.querySelector('img').src = monstersImgLinks.teostra;
			break;
		case 'Tzitzi-Ya-Ku':
			document.querySelector('img').src = monstersImgLinks.tziTziYaku;
			break;
		case 'Uragaan':
			document.querySelector('img').src = monstersImgLinks.uragaan;
			break;
		case 'Vaal Hazak':
			document.querySelector('img').src = monstersImgLinks.vaalHazak;
			break;
		case "Xeno'jiiva":
			document.querySelector('img').src = monstersImgLinks.xenoJiiva;
			break;
		case 'Zorah Magdaros':
			document.querySelector('img').src = monstersImgLinks.zorahMagdaros;
			break;
		case 'Leshen':
			document.querySelector('img').src = monstersImgLinks.leshen;
			break;
		case 'Ancient Leshen':
			document.querySelector('img').src = monstersImgLinks.ancientLeshen;
			break;
		case "Safi'jiiva":
			document.querySelector('img').src = monstersImgLinks.safiJiiva;
			break;
		case 'Zinogre':
			document.querySelector('img').src = monstersImgLinks.zinogre;
			break;
		case 'Stygian Zinogre':
			document.querySelector('img').src = monstersImgLinks.stygianZinogre;
			break;
		case 'Rajang':
			document.querySelector('img').src = monstersImgLinks.rajang;
			break;
		case 'Viper Tobi-Kadachi':
			document.querySelector('img').src = monstersImgLinks.viperTobiKadachi;
			break;
		case 'Namielle':
			document.querySelector('img').src = monstersImgLinks.namielle;
			break;
		default:
			break;
	}
}
