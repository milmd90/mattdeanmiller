import * as abbrevs from '../dictionary/abbreviations.json';

export function getQualityFromAbbrev(abbrev) {
  if (abbrev === "") return "major";
  const dictAbbrev = abbrevs[abbrev];
  return dictAbbrev || abbrev;
}