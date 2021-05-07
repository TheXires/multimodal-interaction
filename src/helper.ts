/**
 * convers a germand number between 1 and 30 from string to number
 * 
 * @param text number between 1 and 30 as german text
 * @returns the string value as number or -1 if string is invalid
 */
export const speedTextToNumber = (text: string) => {
  let result = -1;
  switch (text) {
    case 'ein':
      result = 1;
      break;
    case 'zwei':
      result = 2;
      break;
    case 'drei':
      result = 3;
      break;
    case 'vier':
      result = 4;
      break;
    case 'fünf':
      result = 5;
      break;
    case 'sechs':
      result = 6;
      break;
    case 'sieben':
      result = 7;
      break;
    case 'acht':
      result = 8;
      break;
    case 'neun':
      result = 9;
      break;
    case 'zehn':
      result = 10;
      break;
    case 'elf':
      result = 11;
      break;
    case 'zwölf':
      result = 12;
      break;
    case 'dreizehn':
      result = 13;
      break;
    case 'vierzehn':
      result = 14;
      break;
    case 'fünfzehn':
      result = 15;
      break;
    case 'sechzehn':
      result = 16;
      break;
    case 'siebzehn':
      result = 17;
      break;
    case 'achtzehn':
      result = 18;
      break;
    case 'neunzehn':
      result = 19;
      break;
    case 'zwanzig':
      result = 20;
      break;
    case 'einundzwanzig':
      result = 21;
      break;
    case 'zweiundzwanzig':
      result = 22;
      break;
    case 'dreiundzwanzig':
      result = 23;
      break;
    case 'vierundzwanzig':
      result = 24;
      break;
    case 'fünfundzwanzig':
      result = 25;
      break;
    case 'sechsundzwanzig':
      result = 26;
      break;
    case 'siebenundzwanzig':
      result = 27;
      break;
    case 'achtundzwanzig':
      result = 28;
      break;
    case 'neunundzwanzig':
      result = 29;
      break;
    case 'dreißig':
      result = 30;
      break;
    default:
      break;
  }
  return result;
};