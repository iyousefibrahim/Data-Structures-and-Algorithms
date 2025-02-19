"use strict";
/*
    Given two strings, write a function to determine
    if the second string is an anagram of the first.
    An anagram is a word, pharse, or name formed by
    rearranging the letters of another, such as:
    cinema, formed from iceman
    - cinema
    - iceman

    Output Examples:
    validAnagram('',''); // true
    validAnagram('aaz','zza'); // false
    validAnagram('anagram','nagaram'); // true
    validAnagram('awesome','awesom'); // false
 */
// My Solution O(n²):
function validAnagram(str1, str2) {
    if (str1 === '' && str2 === '') {
        return true;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    let result = false;
    for (let i = 0; i < str1.length; i++) {
        for (let j = 0; j < str2.length; j++) {
            if (str1[i] === str2[j]) {
                result = true;
            }
            else {
                result = false;
            }
        }
    }
    return result;
}
// Testing My Solution -- All OK!
console.log("========================");
console.log("My Solution:");
console.log(validAnagram('', '')); // true
console.log(validAnagram('aaz', 'zza')); // false
console.log(validAnagram('anagram', 'nagaram')); // true
console.log(validAnagram('awesome', 'awesom')); // false
console.log("========================");
// Colt Solution Using Frequency Counter O(n):
function anagram(str1, str2) {
    if (str1 && str2 === '') {
        return true;
    }
    if (str1.length !== str2.length) {
        return false;
    }
    let lookup = {};
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }
    for (let j = 0; j < str2.length; j++) {
        let letter = str2[j];
        if (!lookup[letter]) {
            return false;
        }
        else {
            lookup[letter] -= 1;
        }
    }
    return true;
}
console.log("Colt Solution");
console.log(anagram('', ''));
console.log(anagram('zza', 'azz'));
console.log("========================");
