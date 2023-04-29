// Given array
var A = ["cake", "apple pie", "cookie", "chips", "patties"];

// Function to search for an item in the array
function searchItem(arr, item) {
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === item) {
      return true; // Item found
    }
  }
  return false; // Item not found
}

// Get user input
var userInput = prompt("Enter an item to search:");

// Search for the item in the array
var isFound = searchItem(A, userInput);

// Display the result
if (isFound) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list!");
}
