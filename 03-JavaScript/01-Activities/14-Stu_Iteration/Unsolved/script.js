// WRITE YOUR CODE BELOW
const students = ["Gab", "Rion", "Ace", "Andrew"];

console.log(students.length);

for (const names of students) {
    console.log("Great to see you " + names)
}

for (i = 0; i<students.length; i++) {
    console.log("Great to see you," + students[i])
}