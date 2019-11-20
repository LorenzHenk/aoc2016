export const isLowerCase = (character: string) =>
  character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122;

const lowerCharCode = "a".charCodeAt(0);
const upperCharCode = "A".charCodeAt(0);

export const normalizeShift = (shift: number): number => (26 + shift) % 26;

export const shift = (char: string, shift: number): string => {
  const normalizedShift = normalizeShift(shift);

  const code = char.charCodeAt(0);
  const limit = isLowerCase(char) ? lowerCharCode : upperCharCode;

  return String.fromCharCode(((code - limit + normalizedShift) % 26) + limit);
};

export const caesar = (text: string | string[], shiftBy: number): string =>
  (Array.isArray(text) ? text : text.split(""))
    .map(char => shift(char, shiftBy))
    .join("");
