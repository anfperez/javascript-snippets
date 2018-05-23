/*
an anagram of a palindrome can be thought of in the following way:
original word: madam
palindrome: madam
anagram: mmaad
so a function would take (madam, adama) and determine if
1) 'madam' is a palindrome 
2) if 'mmaad' is an anagram of that palindrome
*/

//function to determine if word is an anagram of a palindrome
let isAnaOfPal = (s1, s2) => {
    //Part 1 - check if s1 is palindrome
    let reverse = "";
    let length = s1.length;
    for (let i = length -1; i >=0; i--) {
        reverse = reverse + s1[i];
    } 
    if (s1 === reverse) {
        //if s1 is a palindrome, on to Part 2 - check if s2 is an anagram
        if (s1.length === s2.length) {
            let s1Arr = new Array();
            let s2Arr = new Array()
            for (let i = 0; i < s1.length; i++) {
                s1Arr.push(s1[i]);
            }
            for (let j = 0; j < s2.length; j++) {
                s2Arr.push(s2[j]);
            }
            if (s1Arr.sort().join('') === s2Arr.sort().join('')) {
                console.log(s1 + " is a palindrome and " + s2 + " is its anagram.");
            }
            else {
                console.log(s1 + " is a palindrome, but " + s2 + " is not its anagram.");
            }
        }
        else {
                console.log(s1 + " and " + s2 + " are not the same length, so they cannot be not anagrams.");
            }
    }
    else {
        console.log(s1 + " is not a palindrome, so " + s1 + " and " + s2 + " cannot be anagrams.");
    }
}

isAnaOfPal("madam", "mmaad");
isAnaOfPal("city", "town");
isAnaOfPal("racecar", "daytona");
isAnaOfPal("mom", "grandma");
