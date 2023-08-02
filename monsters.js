// List of all large monster names, used for auto-complete.
const monstersImgLinks = {
	greatJagras:
		'https://static.wikia.nocookie.net/monsterhunter/images/f/f5/MHW-Great_Jagras_Render_001.png/revision/latest?cb=20171012121738',
	kuluYaku:
		'https://static.wikia.nocookie.net/monsterhunter/images/0/0e/MHRise-Kulu-Ya-Ku_Render_001.png/revision/latest?cb=20210308150155',
	anjanath:
		'https://static.wikia.nocookie.net/monsterhunter/images/6/6b/MHRise-Anjanath_Render_001.png/revision/latest?cb=20210308144806',
	pukeiPukei:
		'https://static.wikia.nocookie.net/monsterhunter/images/1/13/MHRise-Pukei-Pukei_Render_001.png/revision/latest?cb=20210308150521',
	barroth:
		'https://static.wikia.nocookie.net/monsterhunter/images/3/3a/MHRise-Barroth_Render_001.png/revision/latest?cb=20210501170957',
	jyuratodus:
		'https://static.wikia.nocookie.net/monsterhunter/images/7/70/MHRise-Jyuratodus_Render_001.png/revision/latest?cb=20210308135419',
	tobiKadachi:
		'https://static.wikia.nocookie.net/monsterhunter/images/2/22/MHRise-Tobi-Kadachi_Render_001.png/revision/latest?cb=20210308135404',
	viperTobiKadachi:
		'https://static.wikia.nocookie.net/monsterhunter/images/0/0f/MHWI-Viper_Tobi-Kadachi_Render_001.png/revision/latest?cb=20190830163335',
	azureRathalos:
		'https://static.wikia.nocookie.net/monsterhunter/images/5/50/MHW-Azure_Rathalos_Render_001.png/revision/latest?cb=20200929162339',
	bazelgeuse:
		'https://static.wikia.nocookie.net/monsterhunter/images/e/e2/MHW-Bazelgeuse_Render_001.png/revision/latest?cb=20180224091735',
	behemoth:
		'https://static.wikia.nocookie.net/monsterhunter/images/c/cc/MHW-Behemoth_Render_001.png/revision/latest?cb=20180712144027',
	deviljho:
		'https://static.wikia.nocookie.net/monsterhunter/images/c/cb/MHW-Deviljho_Render_001.png/revision/latest?cb=20180105132807',
	diablos:
		'https://static.wikia.nocookie.net/monsterhunter/images/3/39/MHRise-Diablos_Render_001.png/revision/latest?cb=20210217223736',
	blackDiablos:
		'https://static.wikia.nocookie.net/monsterhunter/images/d/dc/MHW-Black_Diablos_Render_001.png/revision/latest?cb=20180228105958',
	dodogama:
		'https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhw-dodogama_render_001.png',
	greatGirros:
		'https://static.wikia.nocookie.net/monsterhunter/images/4/4c/MHW-Great_Girros_Render_001.png/revision/latest?cb=20171112140027',
	kirin:
		'https://static.wikia.nocookie.net/monsterhunter/images/f/f5/MHW-Kirin_Render_001.png/revision/latest?cb=20180307103956',
	kulveTaroth:
		'https://static.wikia.nocookie.net/monsterhunter/images/0/00/MHW-Kulve_Taroth_Render_002.png/revision/latest?cb=20180419051425',
	kushalaDaora:
		'https://static.wikia.nocookie.net/monsterhunter/images/0/07/MHRise-Kushala_Daora_Render_001.png/revision/latest?cb=20210427142445',
	lavasioth:
		'https://static.wikia.nocookie.net/monsterhunter/images/8/84/MHW-Lavasioth_Render_001.png/revision/latest?cb=20180610063924',
	legiana:
		'https://static.wikia.nocookie.net/monsterhunter/images/3/34/MHW-Legiana_Render_001.png/revision/latest?cb=20171112123234',
	lunastra:
		'https://static.wikia.nocookie.net/monsterhunter/images/f/f8/MHW-Lunastra_Render_001.png/revision/latest?cb=20180530122508',
	nergigante:
		'https://static.wikia.nocookie.net/monsterhunter/images/8/89/MHW-Nergigante_Render_001.png/revision/latest?cb=20190914060417',
	odogaron:
		'https://static.wikia.nocookie.net/monsterhunter/images/9/9f/MHW-Odogaron_Render_001.png/revision/latest?cb=20171112161310',
	paolumu:
		'https://static.wikia.nocookie.net/monsterhunter/images/b/b2/MHW-Paolumu_Render_001.png/revision/latest?cb=20171011093216',
	radobaan:
		'https://static.wikia.nocookie.net/monsterhunter/images/d/d3/MHW-Radobaan_Render_001.png/revision/latest?cb=20171112152824',
	rathalos:
		'https://static.wikia.nocookie.net/monsterhunter/images/0/00/MHRise-Rathalos_Render_001.png/revision/latest?cb=20210107154630',
	rathian:
		'https://static.wikia.nocookie.net/monsterhunter/images/b/be/MHRise-Rathian_Render_001.png/revision/latest?cb=20210217224035',
	pinkRathian:
		'https://static.wikia.nocookie.net/monsterhunter/images/1/14/MHW-Pink_Rathian_Render_001.png/revision/latest?cb=20180610063906',
	teostra:
		'https://static.wikia.nocookie.net/monsterhunter/images/2/29/MHRise-Teostra_Render_001.png/revision/latest?cb=20210427142335',
	tziTziYaku:
		'https://static.wikia.nocookie.net/monsterhunter/images/0/04/MHW-Tzitzi-Ya-Ku_Render_001.png/revision/latest?cb=20171011132236',
	uragaan:
		'https://static.wikia.nocookie.net/monsterhunter/images/5/52/MHW-Uragaan_Render_001.png/revision/latest?cb=20180224094156',
	vaalHazak:
		'https://static.wikia.nocookie.net/monsterhunter/images/5/54/MHW-Vaal_Hazak_Render_001.png/revision/latest?cb=20180214002433',
	xenoJiiva:
		'https://static.wikia.nocookie.net/monsterhunter/images/2/2f/MHW-Xeno%27jiiva_Render_001.png/revision/latest?cb=20190412154741',
	zorahMagdaros:
		'https://static.wikia.nocookie.net/monsterhunter/images/7/73/MHW-Zorah_Magdaros_Render_001.png/revision/latest?cb=20170921090345',
	leshen:
		'https://static.wikia.nocookie.net/monsterhunter/images/0/07/MHW-Leshen_Render_001.png/revision/latest?cb=20191126211820',
	ancientLeshen:
		'https://static.wikia.nocookie.net/monsterhunter/images/9/9f/MHW-Ancient_Leshen_Render_001.png/revision/latest?cb=20191126211836',
	safiJiiva:
		'https://static.wikia.nocookie.net/monsterhunter/images/9/92/MHWI-Safi%27jiiva_Render_001.png/revision/latest?cb=20191207124403',
	zinogre:
		'https://static.wikia.nocookie.net/monsterhunter/images/3/37/MHRise-Zinogre_Render_001.png/revision/latest?cb=20210308141128',
	stygianZinogre:
		'https://static.wikia.nocookie.net/monsterhunter/images/e/ee/MHWI-Stygian_Zinogre_Render_001.png/revision/latest?cb=20191124095634',
	rajang:
		'https://static.wikia.nocookie.net/monsterhunter/images/6/6d/MHRise-Rajang_Render_001.png/revision/latest?cb=20210217224211',
	namielle:
		'https://static.wikia.nocookie.net/monsterhunter/images/d/d6/MHWI-Namielle_Render_001.png/revision/latest/scale-to-width-down/1200?cb=20190829150307',
};

// Retrieve image link of monster online.
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
			document.querySelector('img').src = monstersImgLinks.greatJagras;
			break;
		case 'Leshin':
			document.querySelector('img').src = monstersImgLinks.leshen;
			break;
		case 'Ancient Leshin':
			document.querySelector('img').src = monstersImgLinks.ancientLeshen;
			break;
		case "Safi'Jiiva":
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
