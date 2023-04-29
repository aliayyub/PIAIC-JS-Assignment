// Given arrays
var a = [10, 20, 4, 40, 60, 70];
var b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Function to compute the union of two arrays
function computeUnion(arr1, arr2) {
  var mergedArray = arr1.concat(arr2); // Merge the arrays using concat()
  var uniqueArray = Array.from(new Set(mergedArray)); // Remove duplicates using Set and Array.from()

  return uniqueArray;
}

// Compute the union of arrays a and b
var result = computeUnion(a, b);

// Display the union array in the console
console.log("Output:", result);
