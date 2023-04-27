// 2. Traffic Signal Message

// Prompt the user to enter the color of the traffic signal
var signalColor = prompt("Enter the color of the traffic signal (Red, Yellow, or Green):");

// Convert the user input to lowercase for comparison
signalColor = signalColor.toLowerCase();

// Display the corresponding message based on the signal color
switch (signalColor) {
  case "red":
    console.log("Must stop");
    break;
  case "yellow":
    console.log("Ready to move");
    break;
  case "green":
    console.log("Move on");
    break;
  default:
    console.log("Invalid color entered");
}