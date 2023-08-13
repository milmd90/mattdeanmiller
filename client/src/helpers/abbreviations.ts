import * as abbrevs from '../dictionary/abbreviations.json';

export function getQualityFromAbbrev(abbrev: string): string {
  if (abbrev === "") return "major";
  const lowerCaseAbbrev = abbrev === 'M7' ? abbrev : abbrev.toLocaleLowerCase();
  // @ts-ignore
  const dictAbbrev: string = abbrevs[lowerCaseAbbrev];
  return dictAbbrev || lowerCaseAbbrev;
}