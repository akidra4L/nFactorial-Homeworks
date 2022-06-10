const clubName = "nFactorial FC";
let dateOfCreation = "6th June, 2022";

let captain = "Dalida";
let players = [
    {name : "Dalida", position : "striker"},
    {name : "Dalida", position : "goalkeeper"},
    {name : "Aidana", position : "center back"},
    {name : "Aruzhan", position : "midfielder"}
]
let playersName = ["Dalida", "Aidana", "Aruzhan"];

function getFullTeam(item) {
    return [item.name, item.position].join(" - ");
}
let playersWithPosition = players.map(getFullTeam);
    
console.log(`${clubName}: `)
for(let i=0; i<playersWithPosition.length; i++) {
    console.log(playersWithPosition[i])
}

function getDalida(name) {
    return name == "Dalida";
}

const arrayOfDalidas = playersName.filter(getDalida);
console.log(arrayOfDalidas);

function countPlayers(...team) {
    return team.length;
}
console.log(countPlayers(playersName))
console.log(playersName)