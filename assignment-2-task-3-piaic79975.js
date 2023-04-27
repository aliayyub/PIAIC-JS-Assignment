
// a. Check condition for variable a
var a = 4;
if (++a === 5) {
  alert("Given condition for variable a is true");
}

// b. Check condition for variable b
var b = 82;
if (b++ === 83) {
  alert("Given condition for variable b is true");
}

// c. Check conditions for variable c
var c = 12;
if (c++ === 13) {
  alert("Condition 1 is true");
}
if (c === 13) {
  alert("Condition 2 is true");
}
if (++c < 14) {
  alert("Condition 3 is true");
}
if (c === 14) {
  alert("Condition 4 is true");
}

// d. Check condition for totalCost
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}

// e. Check conditions with boolean values
if (true) {
  alert("True");
}
if (false) {
  alert("False"); // This block won't be executed
}

// f. Compare strings
if ("car" < "cat") {
  alert("Car is smaller than cat");
}
