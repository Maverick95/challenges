import same_necklace from './sameNecklace';

describe('Verify functions returns true/false for appropriate values', () => {

    test.each([
      ["nicole", "coneli"],
      ["abc", "cba"],
      ["xxyyy", "xxxyy"],
      ["xyxxz", "xxyxz"],
      ["x", "xx"],
      ["x", ""],
      ["xxx", "yyy"],
    ])('Strings are NOT cycles of each other - %s %s', (s1, s2) => {

        expect(same_necklace(s1, s2)).toEqual(false);
    
    });

    test.each([
      ["nicole", "icolen"],
      ["nicole", "lenico"],
      ["aabaaaaabaab", "aabaabaabaaa"],
      ["", ""],
      ["x", "x"],
    ])('Strings are cycles - %s %s', (s1, s2) => {

      expect(same_necklace(s1, s2)).toEqual(true);
    
    });

});

