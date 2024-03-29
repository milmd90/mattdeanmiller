const abbreviations = {
  "ma": "major",
  "maj": "major",
  "^": "major 7th",
  "M7": "major 7th",
  "ma 7": "major 7th",
  "maj7": "major 7th",
  "maj 7": "major 7th",
  "major7": "major 7th",
  "major 7": "major 7th",
  "7": "dominate 7th",
  "dominate 7": "dominate 7th",
  "dom": "dominate 7th",
  "dom7": "dominate 7th",
  "dom 7": "dominate 7th",
  "9": "dominate 9th",
  "dom9": "dominate 9th",
  "dom 9": "dominate 9th",
  "-": "minor",
  "m": "minor",
  "mi": "minor",
  "min": "minor",
  "-7": "minor 7th",
  "m7": "minor 7th",
  "m 7": "minor 7th",
  "mi 7": "minor 7th",
  "min 7": "minor 7th",
  "minor 7": "minor 7th",
  "-9": "minor 9th",
  "m9": "minor 9th",
  "m 9": "minor 9th",
  "mi 9": "minor 9th",
  "min 9": "minor 9th",
  "minor 9": "minor 9th",
  "7b5": "half diminished",
  "hd": "half diminished",
  "half": "half diminished",
  "half dim": "half diminished",
  "half-dim": "half diminished",
  "di": "diminished",
  "dim": "diminished"
};

export function getQualityFromAbbrev(abbrev: string): string {
  if (abbrev === "") return "major";
  const lowerCaseAbbrev = abbrev === 'M7' ? abbrev : abbrev.toLocaleLowerCase();
  // @ts-ignore
  const dictAbbrev: string = abbreviations[lowerCaseAbbrev];
  return dictAbbrev || lowerCaseAbbrev;
}