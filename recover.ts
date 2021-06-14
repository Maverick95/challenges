const alph = {
  "ZERO": 0,
  "ONE": 1,
  "TWO": 2,
  "THREE": 3,
  "FOUR": 4,
  "FIVE": 5,
  "SIX": 6,
  "SEVEN": 7,
  "EIGHT": 8,
  "NINE": 9
};

// Useful example - NINENI -> 999

interface RecoverDataStore {
  modified: string,
  result: string
};

const recover = (input: string): string => {

  const alph_data: RecoverDataStore[] = Object.keys(alph).map(
    (key) => ({
      modified: key,
      result: alph[key].toString(),
    }));

  let alph_data_found: RecoverDataStore[] = [];

  let output = '';

  input.split('').forEach((char) => {

    // Remove candidates where char not found.

    alph_data_found = alph_data_found.filter(
      (d: RecoverDataStore) => d.modified.includes(char));

    // Remove char from remaining candidates.

    alph_data_found.forEach(
      (d: RecoverDataStore) => { d.modified = d.modified.replace(char, ''); });

    // Add candidate to output if entire string has been found.

    output += alph_data_found.filter(
      (d: RecoverDataStore) => !d.modified.length)
      .map((d: RecoverDataStore) => d.result).join('');

    // Add new candidates.

    alph_data_found = alph_data_found.concat(
      alph_data.filter(
        (d: RecoverDataStore) => d.modified.includes(char))
        .map((d: RecoverDataStore) => ({ ...d, modified: d.modified.replace(char, '') })));

  });

  return output || 'No digits found';

};

export default recover;