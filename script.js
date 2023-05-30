// Create MHW retrievable data for every monster.
// Make menu to select monster, which will change the fetch URL to that specific monster.
let monstObj = {};
async function FetchMonsterAll() {
    let response = await fetch(`https://mhw-db.com/monsters/`);
    let data = await response.json();
    for (let i = 0; i < data.length; i++) {
        if (data[i].type === "large") {
            monstObj[i] = [];
            monstObj[i].push(data[i].id, data[i].name, data[i].locations[0].name, data[i].locations[0].id);
        }
    }
    console.log(monstObj);
}
FetchMonsterAll();

async function FetchMonster() {
    // get selected monster's number from dropdown input.
    const monsterId = document.getElementsByName("monster-dropdown")[0].value;
    // fetch data of provided number.
    let response = await fetch(`https://mhw-db.com/monsters/${monsterId}`);
    let data = await response.json();
    // output data as text on right panel.
    let monsterLoc = monstObj[monsterId][2];
    document.getElementById("name").innerHTML = data.name;
    document.getElementById("species").innerHTML = data.species;
    document.getElementById("description").innerHTML = data.description;
    document.body.setAttribute("class", monsterLoc);
}
function changeBiome(area) {
    
}