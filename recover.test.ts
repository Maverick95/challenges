import recover from './recover';

describe('recover', () => {

  test.each([
    ["NEO", "1"],
    ["ONETWO", "12"],
    ["ONENO", "11"],
    ["TWWTONE", "21"],
    ["ZYX", "No digits found"],
    ["NEOTWONEINEIGHTOWSVEEN", "12219827"],
    ])('recover %s to %s', (input, expected) => {

      expect(recover(input)).toEqual(expected);
      
    });

})