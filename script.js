// Create MHW retrievable data for every monster.
// Make menu to select monster, which will change the fetch URL to that specific monster.
async function FindMonster() {
    let response = await fetch('https://mhw-db.com/monsters/17');
    let data = await response.json();
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("species").innerHTML = data.species;
    document.getElementById("description").innerHTML = data.description;
    console.log(data);
}

function changeBG(area) {
    switch (area) {
        case 'af':
            document.body.setAttribute("class", "AF");
            break;
        case 'ww':
            document.body.setAttribute("class", "WW");
            break;
        case 'ch':
            document.body.setAttribute("class", "CH");
            break;
        case 'rv':
            document.body.setAttribute("class", "RV");
            break;
        case 'er':
            document.body.setAttribute("class", "ER");
            break;
        default:
            break;
    }
}