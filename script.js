
// Part 1: Variables & Conditionals
let students = 0; 
let classroomOpen = true;

if (classroomOpen && students === 0) {
  console.log("The classroom is open but empty.");
} else {
  console.log("Students are already inside.");
}

// Part 2: Functions
function studentCount(total) {
  return `There are now ${total} student(s) in the class.`;
}

function gradeEstimate(score) {
  if (score >= 50) {
    return `Score ${score}: Pass`;
  } else {
    return `Score ${score}: Fail`;
  }
}

console.log(studentCount(5));
console.log(gradeEstimate(72));

// Part 3: Loops
let subjects = ["Math", "English", "Science"];
for (let i = 0; i < subjects.length; i++) {
  console.log("Subject:", subjects[i]);
}

let days = 3;
while (days > 0) {
  console.log("Exams in", days, "day(s)");
  days--;
}

// Part 4: DOM Interactions
document.getElementById("addStudentBtn").addEventListener("click", function() {
  students++;
  document.getElementById("status").textContent = studentCount(students);
});

document.getElementById("showGradesBtn").addEventListener("click", function() {
  let list = document.getElementById("gradesList");
  list.innerHTML = "";
  let scores = [45, 67, 82, 30];
  scores.forEach(score => {
    let li = document.createElement("li");
    li.textContent = gradeEstimate(score);
    list.appendChild(li);
  });
});

document.body.style.backgroundColor = "#e6f7ff";