console.log('week 3 - welcome');
// A - ARRAY FIND
var names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

function findLongNameThatStartsWithA(name) {
    return (name.length > 7 && name[0] === 'A');
}

var longNameStarsWithA = names.find(findLongNameThatStartsWithA);

console.log(longNameStarsWithA);

// B - ARRAY SOME
var pairsByIndex = [
    [0, 3],
    [1, 2],
    [2, 1], null, [3, 0]
];

function isNull(pair) {
    return pair == null;
}
var containNull = pairsByIndex.some(isNull);
console.log(containNull);

var students = ["Islam", "Lesley", "Harun", "Rukmini"];
var mentors = ["Daniel", "Irina", "Mozafar", "Luke"];

if (containNull = pairsByIndex.some(isNull)) {
    console.log('verify your pairsByIndex Array!')
} else {
    var pairs = pairsByIndex.map(function (indexes) {
        var student = students[indexes[0]];
        var mentor = mentors[indexes[1]];
        return [student, mentor];
    })
};

// console.log(pairs);

//C - ARRAY EVERY

var students = ["Omar", "Austine", "Dany", "Swathi", "Lesley", "Rukmini"];
var group = ["Austine", "Dany", "Swathi", "Daniel"];

function isStudent(name1, name2) {
    return name1.every(item => name2.includes(item))
}
var groupIsOnlyStudents = isStudent(group, students);

if (groupIsOnlyStudents) {
    console.log("The group contains only students");
} else {
    console.log("The group does not contain only students");
}

//D - ARRAY FILTER

console.log('exercise D')

let pairsBy = [
    [0, 'a'],
    [1, 2],
    [2, 1], null, [1], false, "whoops"
];
console.log(pairsBy);

let filterArr = pairsBy.filter(a => Array.isArray(a)).filter(b => b.length >= 2);


console.log(filterArr);