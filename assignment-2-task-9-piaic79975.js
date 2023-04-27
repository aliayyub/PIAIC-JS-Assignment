// Function to check if a character is a vowel
function isVowel(char) {
  // Convert the character to lowercase for case insensitivity
  var lowerChar = char.toLowerCase();

  // Check if the character is a vowel
  if (
    lowerChar === 'a' ||
    lowerChar === 'e' ||
    lowerChar === 'i' ||
    lowerChar === 'o' ||
    lowerChar === 'u'
  ) {
    return true;
  } else {
    return false;
  }
}

// Test the function with different characters
console.log(isVowel('a')); // Output: true
console.log(isVowel('E')); // Output: true
console.log(isVowel('b')); // Output: false
console.log(isVowel('x')); // Output: false
