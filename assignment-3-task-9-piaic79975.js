// Given array
var A = [24, 53, 78, 91, 12];

// Function to find the largest number in an array
function findLargestNumber(arr) {
  var largestNumber = arr[0]; // Assume the first element is the largest

  // Loop through the array and compare each element with the current largest number
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > largestNumber) {
      largestNumber = arr[i];
    }
  }

  return largestNumber;
}

// Find the largest number in array A
var largestNumber = findLargestNumber(A);

// Display the largest number in the console
console.log("Largest Number:", largestNumber);
