const same_necklace = (str1: string, str2: string) : boolean => {
  
  // ### Strings are only comparable if they are equal length.

  if (str1.length === str2.length) {

    const strLength = str1.length;

    // ### Edge case - two blank strings are equal.

    if (strLength === 0) { return true; }

    const charMatch = str1.charAt(0);
    let arrayMatches: number[] = [];
    let maxIndex: number = null;

    /// ### First pass through strings.
    /// ### Find all indices of characters in str2 that match the FIRST character of str1.
    /// ### Also continuously check whether the matches you've found already still apply.

    for (let i=0; i < strLength; i++) {
      arrayMatches = arrayMatches.filter((value) => str1.charAt(i - value) === str2.charAt(i));
      if (str2.charAt(i) === charMatch) {
        arrayMatches.push(i);
        maxIndex = i;
      }
    }

    /// ### Second pass.
    /// ### Check the matches you've found for as long as you need to ensure you've made a complete cycle.

    for (let i=0; i <= maxIndex; i++) {
      if (arrayMatches.some((value) => value === i)) {
        return true;
      }
      arrayMatches = arrayMatches.filter((value) => str1.charAt(strLength + i - value) === str2.charAt(i));
    }
  }

  return false;

}

export default same_necklace;