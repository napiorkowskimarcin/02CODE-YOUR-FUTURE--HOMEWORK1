/*
Many years into the future, a team of Space Voyagers find their ship is low on Oxygen and need to dock
somewhere safe while they call home for help.
  
Their computer detects a list of nearby planets that have Oxygen in their atmosphere. It has produced an array of their Oxygen levels.
To be safe to land on, a planet needs to have an Oxygen level between 19.5% and 23.5%.
Write a function that finds the first safe oxygen level in the array - Oxygen between 19.5% and 23.5%
*/

function safeLevels(element) {
    return (element >= 19.5 && element <= 23.5);
}
oxygenLevels12 = [12, 24, 20, 21];

console.log(oxygenLevels12.find(safeLevels));
/* ======= TESTS - DO NOT MODIFY ===== */

const oxygenLevels1 = ["24.2%", "11.3%", "19.9%", "23.1%", "29.3%", "20.2%"];
const oxygenLevels2 = ["30.8%", "23.5%", "18.8%", "19.5%", "20.2%", "31.6%"];
const oxygenLevels3 = ["200%", "21.1%"];

const oxy1 = oxygenLevels1.map(x => {
    return parseFloat(x, 10)
})
console.log(oxy1.find(safeLevels));


// IT DOES NOT WORK AS IT SUPPOSED TO WORK - IT DOES NOT HAVE ACCESS TO THE STRINGS, I NEED TO CONVERT THEM FIRST SO:

let oxy1New = oxygenLevels1.map(x => {
    return parseFloat(x, 10)
}).find(element => {
    return (element > 19.5 && element < 23.5)
});
console.log(oxy1New);

let oxy2New = oxygenLevels2.map(x => {
    return parseFloat(x, 10)
}).find(element => {
    return (element > 19.5 && element < 23.5)
});
console.log(oxy2New);

let oxy3New = oxygenLevels3.map(x => {
    return parseFloat(x, 10)
}).find(element => {
    return (element > 19.5 && element < 23.5)
});
console.log(oxy3New);

let oxyTrial = oxygenLevels1.map(x => parseFloat(x, 10)).find(y => y > 19.5 && y < 23.5);
/*
  The space travellers have safely landed and are foraging for food in the natural wildlife.
  There are bushes with many different colour berries.
  The pink berries are the ONLY safe ones to eat.
  If any other berries are present, it's best not to eat from the bush at all!
  Create a function which checks if the bush has ALL PINK berries and is safe for the astronauts to eat from the bush.
  Use the tests to confirm which message to return
*/

bushChecker = (name) => {
    return name.every(a => a === 'pink');
}

/* ======= TESTS - DO NOT MODIFY ===== */

let bushBerryColours1 = ["pink", "pink", "pink", "neon", "pink", "transparent"]
let bushBerryColours2 = ["pink", "pink", "pink", "pink"]

/*
  The voyagers decide that they quite like this planet, and some of them want to settle there and colonise it.
  They call the planet "Alpha" and they decide that the FAMILIES whose last names start with 'A' should stay,
  while the others go on in search of other planets to call home.
  Create a function that returns an array of colonisers that will stay, according to the above rules.
  NOTE: don't include any element that is not a "family".
*/

colonisers = name => {
    return name.filter(a => a[0] === 'A')
}


/* ======= TESTS - DO NOT MODIFY ===== */

const voyagers = [
    "Adam family",
    "Potter family",
    "Eric",
    "Aldous",
    "Button family",
    "Jude",
    "Carmichael",
    "Bunny",
    "Asimov",
    "Oscar family",
    "Avery family",
    "Archer family"
];

/*
  Only students who have attended enough classes are eligible to sit an exam.
  Create a function which:
  - Accepts an array which contains all the students' names and their attendance counts
    (see tests to confirm how this data will be structured)
  - Returns an array containing only the names of the who have attended AT LEAST 8 classes
*/

let eli = array => array.filter((item) => item[1] >= 8).flat().filter((item) => {
    return typeof item === 'string'
});


/* ======= TESTS - DO NOT MODIFY ===== */

const attendances = [
    ["Ahmed", 8],
    ["Clement", 10],
    ["Elamin", 6],
    ["Adam", 7],
    ["Tayoa", 11],
    ["Nina", 10]
]

/*
  I am new to London and would like to know what transport I can take to different famous locations.
  An array with London locations, and the forms of transport you can take to get there, have been provided.
  Return an array of where I can go if I only want to use a specific mode of transport.
  NOTE: only the names should be returned, not the means of transport.
*/

let locFilter = transportWay => {
    return londonLocations.filter(name => name.includes(transportWay));
}
let locFilter2 = transportWay => {
    return londonLocations.filter(name => name.includes(transportWay)).flat().filter(a => {
        return (a != 'bus' && a != 'tube' && a != 'river boat' && a != 'tube' && a != 'air line' && a != 'dlr') //IT IS NOT A NICE SOLUTION, I NEED TO FILTER IT BY ARRAY
    })
}
ways = ["bus", "river boat", "dlr", "air line", "tube"]

let locFilter3 = transportWay => {
    return londonLocations.filter(name => name.includes(transportWay)).flat().filter(name => !ways.includes(name)); // -----------------------------------TO CHECK
}

function isStudent(name1, name2) {
    return name1.every(item => name2.includes(item))
}

/* ======= TESTS - DO NOT MODIFY ===== */

const londonLocations = [
    ["Angel", "tube", "bus"],
    ["Greenwich", "bus", "river boat", "dlr", "air line", "tube"],
    ["London Bridge", "tube", "river boat"],
    ["Tower Bridge", "tube", "bus"],
]

let journeyPlanner =
    londonLocations.filter(name => name.includes('bus'));


/*
  You are given a list of some London street names.
  
  Write a function that will return all street names which contain 'Lane' in their name.
*/



/* ======= TESTS - DO NOT MODIFY ===== */

const streetNames = [
    "Abchurch Lane",
    "Adam's Court",
    "Addle Hill",
    "Addle Lane",
    "Alban Highwalk"
]

laneFilter = arr => {
    return arr.filter(a => a.includes("Lane"));
}

/* 

- Have at least 5 characters.
- Have at least one English uppercase letter (A-Z)
- Have at least one English lowercase letter (a-z)
- Have at least one number (0-9)
- Have at least one non-alphanumeric symbol ("!", "#", "$", "%", ".", "*", "&")

*/


const regex = /[A-Z]/
const regex2 = /[a-z]/
const regex3 = /[0-9]/
const regex4 = /[!#$%^&*]/

const regexM = /((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])).{5,}/


checkPassShort2 = str => regex.test(str) && regex2.test(str) && regex3.test(str) && regex4.test(str) && str.length >= 5;
checkPassShort3 = str => regexM.test(str);

Pass = arr => arr.filter(a => regexM.test(a));

/* ======= TESTS - DO NOT MODIFY ===== */

const passwords1 = ["Se%5", "TktE.TJTU", "384#HsHF", "dvyyeyy!5", "tryT3729"];
const passwords2 = ["StUFf27%", "Pl3nty!", "Jai33", "shajsaUA**&&", "Pl3nty!"];
const password = "StUFf27%";