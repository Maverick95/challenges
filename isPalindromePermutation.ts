const isPalindromePermutation = function isPalindromePermutation(s: String) : boolean {

    const letters = {};

    s.toLowerCase().split('').filter(c => c.match(/[a-z]/))
    .forEach(c => {
        if (letters[c]) {
            letters[c]++;
        }
        else {
            letters[c] = 1;
        }
    });

    let oneCharFound: boolean = false;

    let letters_array = Object.keys(letters).map(k => letters[k]);

    for (let i=0; i < letters_array.length; i++) {

        if ((letters_array[i] % 2) === 1) {
            if (oneCharFound) {
                return false;
            }
            oneCharFound = true;
        }
    }

    return true;

};

export default isPalindromePermutation;
