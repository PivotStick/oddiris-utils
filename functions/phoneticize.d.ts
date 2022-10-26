/**
 * Creates a french phonetic string allowing to guess that `sottereleu` _(misspelled)_ is similar to `sauterelle` _(correctly spelled)_
 *
 * 1. clean the string making all chars only letters, numbers and spaces
 * 2. remove duplicate letters
 * 3. replace some similar phonems by an univoque one
 *
 * Factorizing the words that way allow to compare 2 words and find if they sounds the same or not.
 * it is more accurate than any soundex functions since it not based on differences of raw words
 * it is more faster and less greedy
 */
export function phoneticize(str: string): string;
