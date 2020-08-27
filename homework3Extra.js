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