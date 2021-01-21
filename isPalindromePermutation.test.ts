import isPalindromePermutation from './isPalindromePermutation';

describe('Verify functions returns true/false for appropriate values', () => {

    test.each([
        ['This is not a palindrome'],
        ['Neither is this'],
        ['I can keep doing this for a while if I want'],
        ['But I think I will stop'],
        ['After doing about 5 of these, hey look this one had some punctuation in']
    ])('String is not a palindrome - "%s"', (s) => {

        expect(isPalindromePermutation(s)).toEqual(false);
    
    });

    test.each([
        [''],
        ['ten animals I slam in a net'],
        ['bender the offender both'],
        ['cynical cis async'],
        ['coders did deserve covid']
    ])('String is a palindrome - "%s"', (s) => {

        expect(isPalindromePermutation(s)).toEqual(true);
    
    });

});

