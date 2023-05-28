import {
  getTypeFromAbbrev
} from './abbreviations'
import {
  convertPitchToTone
} from './pitchTones'
import * as dictionary from '../models/dictionary.json'
const dict = dictionary as IChordDict; 

export interface IChordParams {
  root: string,
  type: string,
  shape: string,
  position: string,
  option: string
}

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
const shapes: Shape[] = ["C", "A", "G", "E", "D"]

export interface IChordDict {
  "major"?: IShapeOptions,
  "major 7th"?: IShapeOptions,
  "dominate 7th"?: IShapeOptions,
  "dominate 9th"?: IShapeOptions,
  "minor"?: IShapeOptions,
  "minor 7th"?: IShapeOptions,
  "minor 9th"?: IShapeOptions,
  "half diminished"?: IShapeOptions,
  "diminished"?: IShapeOptions,
}
export type Type = keyof IChordDict;

export interface TabCell {
  "fret": number | '',
  "tone": number | '',
}

export interface IChordTab {
  "e": TabCell
  "B": TabCell
  "G": TabCell
  "D": TabCell
  "A": TabCell
  "E": TabCell
}

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

function convertChordToTab(chordData: IChordData): IChordTab {
  function clearX(input: number | 'X'): (number | '') {
    if (input === 'X') return '';
    return input;
  }
  return {
    "e": {
      'fret': clearX(chordData['fret-6']),
      'tone': clearX(chordData['tone-6'])
    },
    "B": {
      'fret': clearX(chordData['fret-5']),
      'tone': clearX(chordData['tone-5'])
    },
    "G": {
      'fret': clearX(chordData['fret-4']),
      'tone': clearX(chordData['tone-4'])
    },
    "D": {
      'fret': clearX(chordData['fret-3']),
      'tone': clearX(chordData['tone-3'])
    },
    "A": {
      'fret': clearX(chordData['fret-2']),
      'tone': clearX(chordData['tone-2'])
    },
    "E": {
      'fret': clearX(chordData['fret-1']),
      'tone': clearX(chordData['tone-1'])
    },
  };
}

export function generateTabs(data: IChordParams): IChordTab {
  const {
    root,
    type: abbrev,
    shape,
    position,
    option=0
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
  const type = getTypeFromAbbrev(abbrev);

  console.log({
    root,
    tone,
    type
  })
  if (!tone || !type) {
    return emptyTab;
  }
  
  let shapeOptionsArray: IShapeOptions[] = [];
  const shapeOptions = dict[type];
  if (shapeOptions) {
    shapeOptionsArray.push(shapeOptions);
  }

  let chordArray: IChordData[] = filterChordsByShape(shapeOptionsArray, shape);
  if (!chordArray.length) {
    return emptyTab;
  }

  let index: number = 0;
  if (typeof option == 'number') {
    index = option;
  }

  const chord = chordArray[index];

  console.log({
    shapeOptions,
    chordArray
  })
  return convertChordToTab(chord);
}