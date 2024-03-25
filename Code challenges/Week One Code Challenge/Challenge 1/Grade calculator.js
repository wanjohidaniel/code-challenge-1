//Prompt the user to input the student's mark//
let mark = parseInt(prompt("Please input student marks (0-100):"));

if (mark > 79) {
    grade = "A";
    //If mark is greater than 79, award A//
} else if (mark >= 60 && mark <= 79) {
    grade = "B";
    //If mark is greater than 60 and less than 79, award B//
} else if (mark >= 49 && mark <= 59) {
    grade = "C";
    //If mark is greater than 49 and less than 59, award C//
} else if (mark >= 40 && mark <= 49) {
    grade = "D";
    //If mark is greater than 39 and less than 49, award C//
} else {
    grade = "E";
    //Anything below 40 award an E//
}

console.log(mark);
console.log(grade);