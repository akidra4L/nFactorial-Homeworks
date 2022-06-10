import prompt from 'prompt';

// Dalida's Footbal Club 
const clubName = "nFactorial FC";
let dateOfCreation = "6th June, 2022";

let dayOfCreation = 6;
let monthOfCreation = 6;
let yearOfCreation = 2022;
let dateOfCreationSTR = '0' + dayOfCreation + '.0' + monthOfCreation + '.' + yearOfCreation;

console.log(`Is team creation ${clubName}'s is 6?`);
console.log(Boolean(dayOfCreation == 6));
console.log(Boolean(dayOfCreation === "6"));

let captain = "Dalida";
let playersName = ["Dalida", "Aidana", "Aruzhan"];
let positionName = ["striker", "center back", "midfielder"];
let playersNameConCat = playersName.concat(positionName);
console.log(playersNameConCat);

let players = [
    {name : "Dalida", position : "striker"},
    {name : "Dalida", position : "goalkeeper"},
    {name : "Aidana", position : "center back"},
    {name : "Aruzhan", position : "midfielder"}
]

let flag = true;
while(flag === true){
    prompt.start()
    prompt.get(['name', 'age'], function (err, result) {
        console.log("name: " + result.name);
        console.log("age: " + result.age);
    })
    flag = false;
}