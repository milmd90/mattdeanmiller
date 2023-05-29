import {
  Type
} from '../helpers/tabs';
import * as abbreviations from '../models/abbreviations.json';
const abbrevs = abbreviations as IAbbreviations; 

interface IAbbreviations {
  "major": Type,
  "maj": Type,
  "ma": Type,
  "major 7th": Type,
  "^": Type,
  "M7": Type,
  "major 7": Type,
  "maj 7": Type,
  "ma 7": Type,
  "dominate 7th": Type,
  "7": Type,
  "dominate 7": Type,
  "dom 7": Type,
  "9": Type,
  "minor": Type,
  "-": Type,
  "m": Type,
  "min": Type,
  "mi": Type,
  "minor 7th": Type,
  "-7" : Type,
  "m7": Type,
  "minor 7": Type,
  "min 7": Type,
  "mi 7": Type,
  "minor 9th": Type,
  "-9": Type,
  "m9": Type,
  "minor 9": Type,
  "min 9": Type,
  "mi 9": Type,
  "half diminished": Type,
  "half dim": Type,
  "diminished": Type,
  "dim": Type
}

// export type Abbreviation = keyof IAbbreviations;

export function getTypeFromAbbrev(abbrev: string): Type | undefined {
  if (
    abbrev === "major" ||
    abbrev === "maj" ||
    abbrev === "ma" ||
    abbrev === "major 7th" ||
    abbrev === "^" ||
    abbrev === "M7" ||
    abbrev === "major 7" ||
    abbrev === "maj 7" ||
    abbrev === "ma 7" ||
    abbrev === "dominate 7th" ||
    abbrev === "7" ||
    abbrev === "dominate 7" ||
    abbrev === "dom 7" ||
    abbrev === "9" ||
    abbrev === "minor" ||
    abbrev === "-" ||
    abbrev === "m" ||
    abbrev === "min" ||
    abbrev === "mi" ||
    abbrev === "minor 7th" ||
    abbrev === "-7" ||
    abbrev === "m7" ||
    abbrev === "minor 7" ||
    abbrev === "min 7" ||
    abbrev === "mi 7" ||
    abbrev === "minor 9th" ||
    abbrev === "-9" ||
    abbrev === "m9" ||
    abbrev === "minor 9" ||
    abbrev === "min 9" ||
    abbrev === "mi 9" ||
    abbrev === "half diminished" ||
    abbrev === "half dim" ||
    abbrev === "diminished" ||
    abbrev === "dim"
  ) {
    return abbrevs[abbrev]
  }
}