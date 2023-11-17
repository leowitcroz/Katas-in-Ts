let roman = "MDCLXIV";
let roman_separted = roman.split("");

function romanToNumber(roman) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    const currentRomanValue = romanNumerals[roman[i]];
    const nextRomanValue = romanNumerals[roman[i + 1]] || 0;
    console.log(nextRomanValue < nextRomanValue);

    if (currentRomanValue < nextRomanValue) {
      result += nextRomanValue - currentRomanValue; // Skip next iteration since it was accounted for
    } else {
      result += currentRomanValue;
    }
  }

  return result;
}

console.log(romanToNumber(roman));
