import {
  getQualityFromAbbrev
} from './abbreviations'
import {
  convertPitchToTone, pitchDifference
} from './pitchTones'
import { IChordParams } from '../components/calculator/chord/Chord'
import * as dictionary from '../models/dictionary.json'
const dict = dictionary as IChordDict;

interface IChordData {
  "shape": any,
  "type": any,
  "option": any,
  "fret-6": number | 'X',
  "fret-5": number | 'X',
  "fret-4": number | 'X',
  "fret-3": number | 'X',
  "fret-2": number | 'X',
  "fret-1": number | 'X',
  "tone-6": number | 'X',
  "tone-5": number | 'X',
  "tone-4": number | 'X',
  "tone-3": number | 'X',
  "tone-2": number | 'X',
  "tone-1": number | 'X',
};

interface IShapeOptions {
  "C"?: IChordData[],
  "A"?: IChordData[],
  "G"?: IChordData[],
  "E"?: IChordData[],
  "D"?: IChordData[]
}
type Shape = keyof IShapeOptions;
const shapes: Shape[] = ["C", "A", "G", "E", "D"];

export interface IChordDict {
  "6"?: IShapeOptions,
  "69"?: IShapeOptions,
  "7#9"?: IShapeOptions,
  "7b9"?: IShapeOptions,
  "diminished"?: IShapeOptions,
  "dominate 7th"?: IShapeOptions,
  "dominate 9th"?: IShapeOptions,
  "half diminished"?: IShapeOptions,
  "major"?: IShapeOptions,
  "major 7th"?: IShapeOptions,
  "minor"?: IShapeOptions,
  "minor 7th"?: IShapeOptions,
  "minor 9th"?: IShapeOptions,
}
export type Quality = keyof IChordDict;

type fretValue = number | 'X' | '';
type toneValue = number | '';
export interface ITabStringValue {
  "fret": fretValue,
  "tone": toneValue
}

export interface IChordTab {
  "e": ITabStringValue
  "B": ITabStringValue
  "G": ITabStringValue
  "D": ITabStringValue
  "A": ITabStringValue
  "E": ITabStringValue
}
export type TabString = keyof IChordTab;
export const tabStrings: TabString[] = ['e', 'B', 'G', 'D', 'A', 'E'];

function filterChordsByShape(shapeOptionsArray: IShapeOptions[], shape: string): IChordData[] {
  let chordArray: IChordData[] = [];
  for (let shapeOptions of shapeOptionsArray) {
    if (
      shape === "C" ||
      shape === "A" ||
      shape === "G" ||
      shape === "E" ||
      shape === "D"
    ) {
      const chords = shapeOptions[shape];
      if (chords) {
        chordArray.push(...chords);
      }
    } else if (shape  === '') {
      // todo add logic to search in lowest shape first
      for (let shape of shapes) {
        const chords = shapeOptions[shape];
        if (chords) {
          chordArray.push(...chords);
        }
      }
    }
  }
  return chordArray;
}

function convertChordsToTab(chords: IChordData[], root: string): IChordTab[] {
  function getFretValue(input: number | 'X', offset: number | undefined): fretValue {
    if (input === 'X') return input;
    if (offset) return input + offset;
    return input;
  }

  // todo: remove
  function getToneValue(input: number | 'X'): toneValue {
    if (input === 'X') return '';
    return input;
  }

  return chords.map((chord) => {
    const offset = pitchDifference(chord.shape, root);
    return {
      "e": {
        'fret': getFretValue(chord['fret-6'], offset),
        'tone': getToneValue(chord['tone-6'])
      },
      "B": {
        'fret': getFretValue(chord['fret-5'], offset),
        'tone': getToneValue(chord['tone-5'])
      },
      "G": {
        'fret': getFretValue(chord['fret-4'], offset),
        'tone': getToneValue(chord['tone-4'])
      },
      "D": {
        'fret': getFretValue(chord['fret-3'], offset),
        'tone': getToneValue(chord['tone-3'])
      },
      "A": {
        'fret': getFretValue(chord['fret-2'], offset),
        'tone': getToneValue(chord['tone-2'])
      },
      "E": {
        'fret': getFretValue(chord['fret-1'], offset),
        'tone': getToneValue(chord['tone-1'])
      },
    };
  })
}

export function getMinFretValue(tab: IChordTab): number {
  let min: number | undefined;
  for (let tabString of tabStrings) {
    const fretValue = tab[tabString].fret;
    if (
      typeof fretValue === 'number' &&
      (min === undefined || fretValue < min)
    ) {
      min = fretValue;
    }
  }
  if (min === undefined) throw Error();
  return min;
}

export function getMaxFretValue(tab: IChordTab): number {
  let max: number | undefined;
  for (let tabString of tabStrings) {
    const fretValue = tab[tabString].fret;
    if (
      typeof fretValue === 'number' &&
      (max === undefined || fretValue > max)
    ) {
      max = fretValue;
    }
  }
  if (max === undefined) throw Error();
  return max;
}

function updateChordsWithPosition(tabArray: IChordTab[], position: string): IChordTab[] {
  let numPos: number = parseInt(position);
  if (isNaN(numPos)) numPos = 0;

  return tabArray.map((tab) => {
    let minFret = getMinFretValue(tab);
    if (typeof minFret !== 'number') return tab;

    while (minFret < numPos) {
      for (let s of tabStrings) {
        const f = tab[s].fret;
        if (typeof f === 'number') {
          tab[s].fret = f + 12;
        }
      }
      minFret = getMinFretValue(tab);
      if (typeof minFret !== 'number') return tab;
    }
    return tab;
  })
}

function sortChordsByLowest(tabArray: IChordTab[]): IChordTab[] {
  return tabArray.sort((a: IChordTab, b: IChordTab) => {
    const minA = getMinFretValue(a);
    const minB = getMinFretValue(b);
    if (
      minA === undefined || 
      minB === undefined
      ) return 0;
    return minA - minB;
  });
}

export function isValidTab(tab: IChordTab) {
  for (let s of tabStrings) {
    const f = tab[s].fret;
    if (typeof f === 'number') {
      return true
    }
  }
  return false;
}

export function generateTabs(data: IChordParams): IChordTab {
  const {
    root,
    type: abbrev,
    shape,
    position,
    option
  } = data;

  const emptyTab: IChordTab = {
    "e": {
      fret: '',
      tone: ''
    },
    "B": {
      fret: '',
      tone: ''
    },
    "G": {
      fret: '',
      tone: ''
    },
    "D": {
      fret: '',
      tone: ''
    },
    "A": {
      fret: '',
      tone: ''
    },
    "E": {
      fret: '',
      tone: ''
    },
  }

  const tone = convertPitchToTone(root);
  const type = getQualityFromAbbrev(abbrev);
  if (!tone || !type) {
    return emptyTab;
  }
  
  const shapeOptionsArray: IShapeOptions[] = [];
  const shapeOptions = dict[type];
  if (shapeOptions) {
    shapeOptionsArray.push(shapeOptions);
  }

  const chordArray: IChordData[] = filterChordsByShape(shapeOptionsArray, shape);
  if (!chordArray.length) {
    return emptyTab;
  }

  let tabArray: IChordTab[] = convertChordsToTab(chordArray, root);
  tabArray = updateChordsWithPosition(tabArray, position);
  tabArray = sortChordsByLowest(tabArray);

  const index: number = option % tabArray.length;
  return tabArray[index];
}