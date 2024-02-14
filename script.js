function firstNonRepeatedChar(str) {
    // Create a map to count the occurrences of each character
    const charCount = new Map();
    
    // Count the occurrences of each character in the string
    for (let char of str) {
        charCount.set(char, (charCount.get(char) || 0) + 1);
    }
    
    // Iterate through the string to find the first non-repeated character
    for (let char of str) {
        if (charCount.get(char) === 1) {
            return char; // Return the first non-repeated character
        }
    }
    
    return null; // Return null if there is no non-repeated character
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
