// Store the correct password in a variable
var correctPassword = "MySecretPassword123";

// Ask the user to enter their password
var userPassword = prompt("Enter your password:");

// Validate the passwords
if (userPassword === "") {
  console.log("Please enter your password");
} else if (userPassword === correctPassword) {
  console.log("Correct! The password you entered matches the original password.");
} else {
  console.log("Incorrect password");
}
