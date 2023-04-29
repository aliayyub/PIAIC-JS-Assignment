// Given arrays
var aCities = ["Karachi", "Lahore", "Islamabad", "Faisalabad"];
var o = ["th", "st", "nd", "rd"];

// Display the choices in the specified format
for (var i = 0; i < aCities.length; i++) {
  var choiceNumber = i + 1;
  var suffix = o[choiceNumber] || o[0]; // Use "th" for all other choices beyond 3rd
  
  console.log(choiceNumber + suffix + " choice is " + aCities[i]);
}
