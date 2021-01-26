const is_palindrome_permutation_internal = function isPalindromePermutation(s: String) : boolean {

    /*
    Basically a sequence of characters a-z (assume lower case WLOG) is a palindrome if
    there is AT MOST one character that appears an odd number of times in the sequence.
    The other characters present must appear an even number of times.
    
    If a sequence is a palindrome, a character found on the left hand side must also be on the right hand side,
    hence it appears an even number of times. The only exception is if the string is length 1, 3, 5, etc...
    there is a "middle character" that doesn't have a partner on the opposite side.

    Complexity O(n) where n is length of input string s
    */

    const lettersCount = {};

    s.toLowerCase().split('')
    .filter(c => c.match(/[a-z]/))
    .forEach(c => {
        if (lettersCount[c]) { lettersCount[c]++; }
        else { lettersCount[c] = 1; }
    });

    let oddCharFound: boolean = false;

    for (const l in lettersCount) {

        if (lettersCount[l] % 2) {
            if (oddCharFound) { return false; }
            oddCharFound = true;
        }
    }

    return true;

};

export default is_palindrome_permutation_internal;

export const isPalindromePermutation = is_palindrome_permutation_internal;
