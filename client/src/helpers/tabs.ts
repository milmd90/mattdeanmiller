import {
  getQualityFromAbbrev
} from './abbreviations'
import {
  convertPitchToTone, pitchDifference
} from './pitchTones'
import { IChordParams } from '../components/calculator/chord/Chord'
import * as dictionary from '../dictionary/dictionary.json'
const dict = dictionary as IChordDict;

type ChordTabValue = number | 'X';
interface IChordData {
  "shape": any,
  "type": any,
  "option": any,
  "fret-6": ChordTabValue,
  "fret-5": ChordTabValue,
  "fret-4": ChordTabValue,
  "fret-3": ChordTabValue,
  "fret-2": ChordTabValue,
  "fret-1": ChordTabValue,
  "tone-6": ChordTabValue,
  "tone-5": ChordTabValue,
  "tone-4": ChordTabValue,
  "tone-3": ChordTabValue,
  "tone-2": ChordTabValue,
  "tone-1": ChordTabValue,
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

interface IChordDict {
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

interface IChordTabStringData {
  "fret": ChordTabValue,
  "tone": ChordTabValue
}
interface IChordTab {
  "e": IChordTabStringData
  "B": IChordTabStringData
  "G": IChordTabStringData
  "D": IChordTabStringData
  "A": IChordTabStringData
  "E": IChordTabStringData
}

type EmptyTabValue = '-';
interface IEmptyTabStringData {
  "fret": EmptyTabValue,
  "tone": EmptyTabValue
}
interface IEmptyTab {
  "e": IEmptyTabStringData
  "B": IEmptyTabStringData
  "G": IEmptyTabStringData
  "D": IEmptyTabStringData
  "A": IEmptyTabStringData
  "E": IEmptyTabStringData
}

export type TabValue = ChordTabValue | EmptyTabValue;
export type TabStringData = IChordTabStringData | IEmptyTabStringData;
export type TabColumn = IChordTab | IEmptyTab;

export type TabString = keyof TabColumn;
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

function convertChordsToTabs(chords: IChordData[], root: string): TabColumn[] {
  function getFretValue(input: ChordTabValue, offset: number | undefined): ChordTabValue {
    if (input === 'X') return input;
    if (offset) return input + offset;
    return input;
  }

  function getToneValue(input: ChordTabValue): ChordTabValue {
    if (input === 'X') return input;
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

function getMinOrMaxFretValue(tab: TabColumn, comparator: (a: number, b: number) => boolean): number {
  let minOrMax: number | undefined;
  for (let tabString of tabStrings) {
    const fretValue = tab[tabString].fret;
    if (
      typeof fretValue === 'number' &&
      (minOrMax === undefined || comparator(fretValue, minOrMax))
    ) {
      minOrMax = fretValue;
    }
  }
  if (minOrMax === undefined) throw Error();
  return minOrMax;
}

export function getMinFretValue(tab: TabColumn): number {
  return getMinOrMaxFretValue(tab, (a: number, b: number) => {
    return a < b
  })
}

export function getMaxFretValue(tab: TabColumn): number {
  return getMinOrMaxFretValue(tab, (a: number, b: number) => {
    return a > b
  })
}

function updateChordsWithPosition(tabArray: TabColumn[], position: string): TabColumn[] {
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

function sortChordsByLowest(tabArray: TabColumn[]): TabColumn[] {
  return tabArray.sort((a: TabColumn, b: TabColumn) => {
    const minA = getMinFretValue(a);
    const minB = getMinFretValue(b);
    if (
      minA === undefined || 
      minB === undefined
      ) return 0;
    return minA - minB;
  });
}

export function isValidTab(tab: TabColumn) {
  for (let s of tabStrings) {
    const f = tab[s].fret;
    if (typeof f === 'number') {
      return true
    }
  }
  return false;
}

export function generateTabs(data: IChordParams): TabColumn {
  const {
    root,
    type: abbrev,
    shape,
    position,
    option
  } = data;

  const emptyTab: IEmptyTab = {
    "e": {
      fret: '-',
      tone: '-'
    },
    "B": {
      fret: '-',
      tone: '-'
    },
    "G": {
      fret: '-',
      tone: '-'
    },
    "D": {
      fret: '-',
      tone: '-'
    },
    "A": {
      fret: '-',
      tone: '-'
    },
    "E": {
      fret: '-',
      tone: '-'
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

  let tabArray: TabColumn[] = convertChordsToTabs(chordArray, root);
  tabArray = updateChordsWithPosition(tabArray, position);
  tabArray = sortChordsByLowest(tabArray);

  const index: number = option % tabArray.length;
  return tabArray[index];
}