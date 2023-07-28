import {
  Quality
} from './tabs';
import * as abbreviations from '../dictionary/abbreviations.json';
const abbrevs = abbreviations as IAbbreviations; 

interface IAbbreviations {
  "major": Quality,
  "maj": Quality,
  "ma": Quality,
  "major 7th": Quality,
  "^": Quality,
  "M7": Quality,
  "major 7": Quality,
  "maj 7": Quality,
  "ma 7": Quality,
  "dominate 7th": Quality,
  "7": Quality,
  "dominate 7": Quality,
  "dom 7": Quality,
  "9": Quality,
  "minor": Quality,
  "-": Quality,
  "m": Quality,
  "min": Quality,
  "mi": Quality,
  "minor 7th": Quality,
  "-7" : Quality,
  "m7": Quality,
  "minor 7": Quality,
  "min 7": Quality,
  "mi 7": Quality,
  "minor 9th": Quality,
  "-9": Quality,
  "m9": Quality,
  "minor 9": Quality,
  "min 9": Quality,
  "mi 9": Quality,
  "half diminished": Quality,
  "half dim": Quality,
  "diminished": Quality,
  "dim": Quality
}

// export type Abbreviation = keyof IAbbreviations;

export function getQualityFromAbbrev(abbrev: string): Quality | undefined {
  if (abbrev === "") return "major";
  if (
    abbrev === "6" ||
    abbrev === "69" ||
    abbrev === "7#9" ||
    abbrev === "7b9" ||
    abbrev === "diminished" ||
    abbrev === "dominate 7th" ||
    abbrev === "dominate 9th" ||
    abbrev === "half diminished" ||
    abbrev === "major" ||
    abbrev === "major 7th" ||
    abbrev === "minor" ||
    abbrev === "minor 7th" ||
    abbrev === "minor 9th"
  ) {
    return abbrev;
  }

  if (
    abbrev === "maj" ||
    abbrev === "ma" ||
    abbrev === "^" ||
    abbrev === "M7" ||
    abbrev === "major 7" ||
    abbrev === "maj 7" ||
    abbrev === "ma 7" ||
    abbrev === "7" ||
    abbrev === "dominate 7" ||
    abbrev === "dom 7" ||
    abbrev === "9" ||
    abbrev === "-" ||
    abbrev === "m" ||
    abbrev === "min" ||
    abbrev === "mi" ||
    abbrev === "-7" ||
    abbrev === "m7" ||
    abbrev === "minor 7" ||
    abbrev === "min 7" ||
    abbrev === "mi 7" ||
    abbrev === "-9" ||
    abbrev === "m9" ||
    abbrev === "minor 9" ||
    abbrev === "min 9" ||
    abbrev === "mi 9" ||
    abbrev === "half dim" ||
    abbrev === "dim"
  ) {
    return abbrevs[abbrev]
  }
}