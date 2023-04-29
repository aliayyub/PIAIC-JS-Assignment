// Store student names in an array
var studentNames = ["John Doe", "Jane Smith", "Robert Johnson"];

// Store scores of students in an array
var studentScores = [420, 380, 450];

// Calculate the percentage for each student
var totalMarks = 500;
var studentPercentages = [];
for (var i = 0; i < studentScores.length; i++) {
  var percentage = (studentScores[i] / totalMarks) * 100;
  studentPercentages.push(percentage.toFixed(2)); // Round the percentage to 2 decimal places
}

// Display the scores and percentages of students
for (var i = 0; i < studentNames.length; i++) {
  console.log("Name: " + studentNames[i]);
  console.log("Score: " + studentScores[i]);
  console.log("Percentage: " + studentPercentages[i] + "%");
  console.log("----------------------");
}
