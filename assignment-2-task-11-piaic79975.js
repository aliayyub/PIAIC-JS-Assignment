// Ask the user to enter the time in 24-hour clock format
var time = prompt("Enter the time in 24-hour clock format (e.g., 1900):");

// Extract the hours and convert it to a number
var hours = parseInt(time.substr(0, 2));

// Initialize a variable to store the converted time
var convertedTime;

// Implement the case using if, else if, and else statements
if (hours >= 0 && hours <= 11) {
  convertedTime = hours + "am";
} else if (hours === 12) {
  convertedTime = "12pm";
} else if (hours >= 13 && hours <= 23) {
  convertedTime = (hours - 12) + "pm";
} else {
  convertedTime = "Invalid time";
}

// Output the converted time
console.log("Converted time: " + convertedTime);
