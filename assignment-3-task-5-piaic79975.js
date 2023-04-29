// Sample array
var arr1 = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

// Function to remove duplicate items from the array
function removeDuplicates(arr) {
  var uniqueArray = [];
  
  // Loop through the array
  for (var i = 0; i < arr.length; i++) {
    // Check if the current item is not already in the uniqueArray
    if (uniqueArray.indexOf(arr[i]) === -1) {
      uniqueArray.push(arr[i]);
    }
  }
  
  return uniqueArray;
}

// Remove duplicates from the array
var result = removeDuplicates(arr1);

// Display the unique array in the console
console.log("Sample Output:", result);
