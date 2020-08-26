console.log('hello, it is week no2!');

//A - EXPRESSIONS nothing to put
//B - BOOLEAN LITERALS
//given:
let codeYourFutureIsGreat = true;
let mozafarIsCool = false;
let calculationCorrect = true;
let moreThan10Students = false;


console.log("Is Code Your Future great?", codeYourFutureIsGreat);
console.log("Is Mozafar cool?", mozafarIsCool);
console.log("Does 1 + 1 = 2?", calculationCorrect);
console.log("Are there more than 10 students?", moreThan10Students);

//C - COMPARISON OPERATORS

//given:
var studentCount = 16;
var mentorCount = 9;
var moreStudentsThanMentors = (studentCount > mentorCount); // finish this statement

var roomMaxCapacity = 25;
var enoughSpaceInRoom = (roomMaxCapacity >= studentCount + mentorCount); // finish this statement

var personA = "Daniel";
var personB = "Irina";
var sameName = (personA === personB); // finish this statement

console.log("Are there more students than mentors?", moreStudentsThanMentors);
console.log(
    "Is there enough space in the room for all students and mentors?",
    enoughSpaceInRoom
);
console.log("Do person A and person B have the the same name?", sameName);


//D - PREDICATES

function isNegative(number) {
    return result = number < 0
}

function isBetweenZeroAnd10(number) {
    return result = (number > 0 && number < 10)
}

var number = 5;
var numberNegative = isNegative(number);
var numberBetweenZeroAnd10 = isBetweenZeroAnd10(number);
console.log("The number in test is " + number);
console.log("Is the number negative? " + numberNegative);
console.log("Is the number between 0 and 10? " + numberBetweenZeroAnd10);

//E - CONDITIONALS

var name = "Daniel";
var danielsRole = "mentor";

if (danielsRole == 'mentor') {
    console.log('Hi, I`m Daniel, I`m mentor');
} else {
    console.log('Hi, I`m Daniel, I`m student');
}

//F - LOGICAL - OPERATORS

var htmlLevel = 8;
var cssLevel = 4;
var htmlLevelAbove5 = htmlLevel > 5;
var cssLevelAbove5 = cssLevel > 5;
var cssAndHtmlAbove5 = (htmlLevelAbove5 && cssLevelAbove5);
var cssOrHtmlAbove5 = (htmlLevelAbove5 || cssLevelAbove5);

console.log("Is Html knowledge above 5?", htmlLevelAbove5);
console.log("Is CSS knowledge above 5?", cssLevelAbove5);
console.log("Is Html And CSS knowledge above 5?", cssAndHtmlAbove5);
console.log("Is either Html or CSS knowledge above 5?", cssOrHtmlAbove5);


function isBetween5and10(number) {
    return result = (number >= 5 && number <= 10)
}

const isShortName = name => {
    return name.length < 7
}

const startsWithD = name => {
    return name.charAt(0) == 'D'

}

console.log("Is -10 is a negative number?", isNegative(-10));
console.log("Is 5 a negative number?", isNegative(5));
console.log("Is 10 in the range 5-10?", isBetween5and10(10));
console.log("Is Daniel a short name?", isShortName("Daniel"));
console.log("Does Daniel start with 'D'?", startsWithD("Daniel"));

//G - CONDITIONALS -2 

function negativeOrPositive(number) {
    if (number < 0) {
        return 'negative'
    } else {
        return 'positive'
    }

}
var number1 = 5;
var number2 = -1;
var number3 = 0;

console.log(number1 + " is " + negativeOrPositive(number1));
console.log(number2 + " is " + negativeOrPositive(number2));
console.log(number3 + " is " + negativeOrPositive(number3));

//

function studentPassed(grade) {
    if (grade >= 50) {
        return 'passed'
    } else {
        return 'failed'
    }

}
var grade1 = 49;
var grade2 = 50;
var grade3 = 100;

console.log("'" + grade1 + "': " + studentPassed(grade1))
console.log("'" + grade2 + "': " + studentPassed(grade2))
console.log("'" + grade3 + "': " + studentPassed(grade3))
//

function calculateGrade(mark) {
    if (mark >= 80) {
        return 'A'
    } else if (mark >= 60) {
        return 'B'
    } else if (mark >= 50) {
        return 'C'
    } else {
        return 'failed'
    }
}

var grade1 = 49;
var grade2 = 90;
var grade3 = 70;
var grade4 = 55;

console.log("'" + grade1 + "': " + calculateGrade(grade1));
console.log("'" + grade2 + "': " + calculateGrade(grade2));
console.log("'" + grade3 + "': " + calculateGrade(grade3));
console.log("'" + grade4 + "': " + calculateGrade(grade4));

//

function containsCode(sentence) {
    return sentence.includes('code')
}

var sentence1 = "code your future";
var sentence2 = "draw your future";
var sentence3 = "design your future";

console.log("'" + sentence1 + "': " + containsCode(sentence1))
console.log("'" + sentence2 + "': " + containsCode(sentence2))
console.log("'" + sentence3 + "': " + containsCode(sentence3))

//H ARRAYS
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // add numbers from 1 to 10 into this array
var mentors = ['Daniel', 'Irina', 'Rares']; //Create an array with the names of the mentors: Daniel, Irina and Rares

console.log(numbers);
console.log(mentors);
//J ARRAY GET SET

function first(arr) {
    return arr[0]; // complete this statement
}

function last(arr) {
    return arr[arr.length - 1]; // complete this statement
}

var numbers = [1, 2, 3];
var names = ["Irina", "Ashleigh", "Mozafar", "Joe"];

console.log(first(numbers));
console.log(last(numbers));
console.log(last(names));

///MODULE 2