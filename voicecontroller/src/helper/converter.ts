/**
 * converts a german number between 1 and 130 from string to number
 *
 * @param text number between 1 and 130 as german text
 * @returns the string value as number or undefined if string is invalid
 */
export const convertTextToNumber = (text: string | undefined): number | undefined => {
  let result: number | undefined;
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
    case 'einunddreißig':
      result = 31;
      break;
    case 'zweiunddreißig':
      result = 32;
      break;
    case 'dreiunddreißig':
      result = 33;
      break;
    case 'vierunddreißig':
      result = 34;
      break;
    case 'fünfunddreißig':
      result = 35;
      break;
    case 'sechsunddreißig':
      result = 36;
      break;
    case 'siebenunddreißig':
      result = 37;
      break;
    case 'achtunddreißig':
      result = 38;
      break;
    case 'neununddreißig':
      result = 39;
      break;
    case 'vierzig':
      result = 40;
      break;
    case 'einundvierzig':
      result = 41;
      break;
    case 'zweiundvierzig':
      result = 42;
      break;
    case 'dreiundvierzig':
      result = 43;
      break;
    case 'vierundvierzig':
      result = 44;
      break;
    case 'fünfundvierzig':
      result = 45;
      break;
    case 'sechsundvierzig':
      result = 46;
      break;
    case 'siebenundvierzig':
      result = 47;
      break;
    case 'achtundvierzig':
      result = 48;
      break;
    case 'neunundvierzig':
      result = 49;
      break;
    case 'fünfzig':
      result = 50;
      break;
    case 'einundfünfzig':
      result = 51;
      break;
    case 'zweiundfünfzig':
      result = 52;
      break;
    case 'dreiundfünfzig':
      result = 53;
      break;
    case 'vierundfünfzig':
      result = 54;
      break;
    case 'fünfundfünfzig':
      result = 55;
      break;
    case 'sechsundfünfzig':
      result = 56;
      break;
    case 'siebenundfünfzig':
      result = 57;
      break;
    case 'achtundfünfzig':
      result = 58;
      break;
    case 'neunundfünfzig':
      result = 59;
      break;
    case 'sechzig':
      result = 60;
      break;
    case 'einundsechzig':
      result = 61;
      break;
    case 'zweiundsechzig':
      result = 62;
      break;
    case 'dreiundsechzig':
      result = 63;
      break;
    case 'vierundsechzig':
      result = 64;
      break;
    case 'fünfundsechzig':
      result = 65;
      break;
    case 'sechsundsechzig':
      result = 66;
      break;
    case 'siebenundsechzig':
      result = 67;
      break;
    case 'achtundsechzig':
      result = 68;
      break;
    case 'neunundsechzig':
      result = 69;
      break;
    case 'siebzig':
      result = 70;
      break;
    case 'einundsiebzig':
      result = 71;
      break;
    case 'zweiundsiebzig':
      result = 72;
      break;
    case 'dreiundsiebzig':
      result = 73;
      break;
    case 'vierundsiebzig':
      result = 74;
      break;
    case 'fünfundsiebzig':
      result = 75;
      break;
    case 'sechsundsiebzig':
      result = 76;
      break;
    case 'siebenundsiebzig':
      result = 77;
      break;
    case 'achtundsiebzig':
      result = 78;
      break;
    case 'neunundsiebzig':
      result = 79;
      break;
    case 'achtzig':
      result = 80;
      break;
    case 'einundachtzig':
      result = 81;
      break;
    case 'zweiundachtzig':
      result = 82;
      break;
    case 'dreiundachtzig':
      result = 83;
      break;
    case 'vierundachtzig':
      result = 84;
      break;
    case 'fünfundachtzig':
      result = 85;
      break;
    case 'sechsundachtzig':
      result = 86;
      break;
    case 'siebenundachtzig':
      result = 87;
      break;
    case 'achtundachtzig':
      result = 88;
      break;
    case 'neunundachtzig':
      result = 89;
      break;
    case 'neunzig':
      result = 90;
      break;
    case 'einundneunzig':
      result = 91;
      break;
    case 'zweiundneunzig':
      result = 92;
      break;
    case 'dreiundneunzig':
      result = 93;
      break;
    case 'vierundneunzig':
      result = 94;
      break;
    case 'fünfundneunzig':
      result = 95;
      break;
    case 'sechsundneunzig':
      result = 96;
      break;
    case 'siebenundneunzig':
      result = 97;
      break;
    case 'achtundneunzig':
      result = 98;
      break;
    case 'neunundneunzig':
      result = 99;
      break;
    case 'hundert':
    case 'einhundert':
      result = 100;
      break;
    case 'hundertein':
    case 'hundertundein':
    case 'einhundertein':
    case 'einhundertundein':
      result = 101;
      break;
    case 'hundertzwei':
    case 'hundertundzwei':
    case 'einhundertzwei':
    case 'einhundertundzwei':
      result = 102;
      break;
    case 'hundertdrei':
    case 'hundertunddrei':
    case 'einhundertdrei':
    case 'einhundertunddrei':
      result = 103;
      break;
    case 'hundertvier':
    case 'hundertundvier':
    case 'einhundertvier':
    case 'einhundertundvier':
      result = 104;
      break;
    case 'hundertfünf':
    case 'hundertundfünf':
    case 'einhundertfünf':
    case 'einhundertundfünf':
      result = 105;
      break;
    case 'hundertsechs':
    case 'hundertundsechs':
    case 'einhundertsechs':
    case 'einhundertundsechs':
      result = 106;
      break;
    case 'hundertsieben':
    case 'hundertundsieben':
    case 'einhundertsieben':
    case 'einhundertundsieben':
      result = 107;
      break;
    case 'hundertacht':
    case 'hundertundacht':
    case 'einhundertacht':
    case 'einhundertundacht':
      result = 108;
      break;
    case 'hundertneun':
    case 'hundertundneun':
    case 'einhundertneun':
    case 'einhundertundneun':
      result = 109;
      break;
    case 'hundertzehn':
    case 'hundertundzehn':
    case 'einhundertzehn':
    case 'einhundertundzehn':
      result = 110;
      break;
    case 'hundertelf':
    case 'hundertundelf':
    case 'einhundertelf':
    case 'einhundertundelf':
      result = 111;
      break;
    case 'hundertzwölf':
    case 'hundertundzwölf':
    case 'einhundertzwölf':
    case 'einhundertundzwölf':
      result = 112;
      break;
    case 'hundertdreizehn':
    case 'hundertunddreizehn':
    case 'einhundertdreizehn':
    case 'einhundertunddreizehn':
      result = 113;
      break;
    case 'hundertvierzehn':
    case 'hundertundvierzehn':
    case 'einhundertvierzehn':
    case 'einhundertundvierzehn':
      result = 114;
      break;
    case 'hundertfünfzehn':
    case 'hundertundfünfzehn':
    case 'einhundertfünfzehn':
    case 'einhundertundfünfzehn':
      result = 115;
      break;
    case 'hundertsechzehn':
    case 'hundertundsechzehn':
    case 'einhundertsechzehn':
    case 'einhundertundsechzehn':
      result = 116;
      break;
    case 'hundertsiebzehn':
    case 'hundertundsiebzehn':
    case 'einhundertsiebzehn':
    case 'einhundertundsiebzehn':
      result = 117;
      break;
    case 'hundertachtzehn':
    case 'hundertundachtzehn':
    case 'einhundertachtzehn':
    case 'einhundertundachtzehn':
      result = 118;
      break;
    case 'hundertneunzehn':
    case 'hundertundneunzehn':
    case 'einhundertneunzehn':
    case 'einhundertundneunzehn':
      result = 119;
      break;
    case 'hundertzwanzig':
    case 'hundertundzwanzig':
    case 'einhundertzwanzig':
    case 'einhundertundzwanzig':
      result = 120;
      break;
    case 'hunderteinundzwanzig':
    case 'hundertundeinundzwanzig':
    case 'einhunderteinundzwanzig':
    case 'einhundertundeinundzwanzig':
      result = 121;
      break;
    case 'hundertzweiundzwanzig':
    case 'hundertundzweiundzwanzig':
    case 'einhundertzweiundzwanzig':
    case 'einhundertundzweiundzwanzig':
      result = 122;
      break;
    case 'hundertdreiundzwanzig':
    case 'hundertunddreiundzwanzig':
    case 'einhundertdreiundzwanzig':
    case 'einhundertunddreiundzwanzig':
      result = 123;
      break;
    case 'hundertvierundzwanzig':
    case 'hundertundvierundzwanzig':
    case 'einhundertvierundzwanzig':
    case 'einhundertundvierundzwanzig':
      result = 124;
      break;
    case 'hundertfünfundzwanzig':
    case 'hundertundfünfundzwanzig':
    case 'einhundertfünfundzwanzig':
    case 'einhundertundfünfundzwanzig':
      result = 125;
      break;
    case 'hundertsechsundzwanzig':
    case 'hundertundsechsundzwanzig':
    case 'einhundertsechsundzwanzig':
    case 'einhundertundsechsundzwanzig':
      result = 126;
      break;
    case 'hundertsiebenundzwanzig':
    case 'hundertundsiebenundzwanzig':
    case 'einhundertsiebenundzwanzig':
    case 'einhundertundsiebenundzwanzig':
      result = 127;
      break;
    case 'hundertachtundzwanzig':
    case 'hundertundachtundzwanzig':
    case 'einhundertachtundzwanzig':
    case 'einhundertundachtundzwanzig':
      result = 128;
      break;
    case 'hundertneunundzwanzig':
    case 'hundertundneunundzwanzig':
    case 'einhundertneunundzwanzig':
    case 'einhundertundneunundzwanzig':
      result = 129;
      break;
    case 'hundertdreißig':
    case 'hundertunddreißig':
    case 'einhundertdreißig':
    case 'einhundertunddreißig':
      result = 130;
      break;
    default:
      result = undefined;
      break;
  }
  return result;
};

/**
 * helper methode to generate german numbers as string and print to console
 */
export const converterGenerator20to99 = (): void => {
  const tens = [
    'zwanzig',
    'dreißig',
    'vierzig',
    'fünfzig',
    'sechzig',
    'siebzig',
    'achtzig',
    'neunzig',
  ];
  const single = ['', 'ein', 'zwei', 'drei', 'vier', 'fünf', 'sechs', 'sieben', 'acht', 'neun'];
  let j = 0;
  for (let i = 20; i < 100; i++) {
    console.log(
      `case '${single[i % 10]}${i % 10 != 0 ? 'und' : ''}${tens[j]}':
        result = ${i};
        break;`,
    );
    if (i % 10 === 0 && i != 40) {
      j++;
    }
  }
};
