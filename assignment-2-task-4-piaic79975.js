// Take input for marks obtained in three subjects
var subject1Marks = parseFloat(prompt("Enter marks obtained in subject 1:"));
var subject2Marks = parseFloat(prompt("Enter marks obtained in subject 2:"));
var subject3Marks = parseFloat(prompt("Enter marks obtained in subject 3:"));

// Take input for total marks
var totalMarks = parseFloat(prompt("Enter total marks:"));

// Calculate the total marks obtained
var totalMarksObtained = subject1Marks + subject2Marks + subject3Marks;

// Calculate the percentage
var percentage = (totalMarksObtained / totalMarks) * 100;

// Initialize grade and remarks variables
var grade, remarks;

// Determine the grade based on the percentage
if (percentage >= 80) {
  grade = "A+";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else if (percentage >= 50) {
  grade = "Fail";
  remarks = "Sorry";
} else {
  grade = "N/A";
  remarks = "No remarks available";
}

// Display the information on the page
document.write("<h1>Result</h1>");
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + totalMarksObtained + "</p>");
document.write("<p>Percentage: " + percentage.toFixed(2) + "%</p>");
document.write("<p>Grade: " + grade + "</p>");
document.write("<p>Remarks: " + remarks + "</p>");
