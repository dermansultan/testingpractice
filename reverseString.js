function reverseString(string){
    // split into an array of substrings, reverse that array, join the array of substrings back together
 return string.split("").reverse().join("");
}
module.exports = reverseString