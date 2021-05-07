// IMPORTANT if after npm start no logs appear, just retry once
// is for some reason not working in the same instance with dist folder creation

import { speedTextToNumber } from './helper';

const numbersAsText = [
  'ein',
  'zwei',
  'drei',
  'vier',
  'fünf',
  'sechs',
  'sieben',
  'acht',
  'neun',
  'zehn',
  'elf',
  'zwölf',
  'dreizehn',
  'vierzehn',
  'fünfzehn',
  'sechzehn',
  'siebzehn',
  'achtzehn',
  'neunzehn',
  'zwanzig',
  'einundzwanzig',
  'zweiundzwanzig',
  'dreiundzwanzig',
  'vierundzwanzig',
  'fünfundzwanzig',
  'sechsundzwanzig',
  'siebenundzwanzig',
  'achtundzwanzig',
  'neunundzwanzig',
  'dreißig',
];

const numberAsNumber = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
  21,
  22,
  23,
  24,
  25,
  26,
  27,
  28,
  29,
  30,
];

const testConversion = (): boolean => {
  let result = true;
  for (let i = 0; i < 30; i++) {
    if(speedTextToNumber(numbersAsText[i]) !== numberAsNumber[i]){
      result = false;
    }
  }
  return result;
}

console.log('Test speedTextToNumber: ', testConversion());
