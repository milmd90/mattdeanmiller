import {
  pitchDifference,
  getPitch,
} from './pitchTones';

export type TabValue = number | null;

export interface IChordData {
  "shape": any,
  "type": any,
  "option": any,
  "frets": TabValue[],
};

export interface IStringData {
  "fret": TabValue,
  "tone": TabValue
};

export interface IChordTab {
  "first": IStringData,
  "second": IStringData,
  "third": IStringData,
  "fourth": IStringData,
  "fifth": IStringData,
  "sixth": IStringData,
}

export type tabString = 'E' | 'A' | 'D' | 'G' | 'B' | 'e';
export const tabStrings: tabString[] = ['E', 'A', 'D', 'G', 'B', 'e'];

export function getMinOrMaxFretValue(frets: TabValue[], comparator: (a: number, b: number) => boolean): number {
  let minOrMax: number | undefined;
  for (let fretValue of frets) {
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

export function getMinFretValue(tab: TabValue[]): number {
  return getMinOrMaxFretValue(tab, (a: number, b: number) => {
    return a < b
  })
}

export function getMaxFretValue(tab: TabValue[]): number {
  return getMinOrMaxFretValue(tab, (a: number, b: number) => {
    return a > b
  })
}

export function convertChordsToTabs(chords: IChordData[], root: string): IChordTab[] {
  function getValue(input: TabValue, offset: number | null): TabValue {
    if (input === null || offset === null) return input;
    return input + offset;
  }

  function getTone(root: string, fret: TabValue, string: number): TabValue {
    const pitch = getPitch(fret, string);
    const offset = pitchDifference(pitch, root);
  }

  function getStringValue(root: string, chord: IChordData, string: number): IStringData {
    const {shape, frets} = chord;
    const fret = frets[string];
    const offset = pitchDifference(shape, root);

    return {
      fret: getValue(frets[string], offset),
      tone: getTone(root, fret, string)
    };
  }

  return chords.map((chord) => {
    return {
      first: getStringValue(root, chord, 0),
      second: getStringValue(root, chord, 1),
      third: getStringValue(root, chord, 2),
      fourth: getStringValue(root, chord, 3),
      fifth: getStringValue(root, chord, 4),
      sixth: getStringValue(root, chord, 5),
    };
  });
}

export function updateChordsWithPosition(tabArray: TabValue[][], position: string): TabValue[][] {
  let numPos: number = parseInt(position);
  if (isNaN(numPos)) numPos = 0;

  return tabArray.map((startTab) => {
    let frets: TabValue[] = JSON.parse(JSON.stringify(startTab));
    let minFret = getMinFretValue(frets);
    if (typeof minFret !== 'number') return frets;

    while (minFret < numPos) {
      frets = frets.map(fret => {
        if (typeof fret === 'number') {
          return fret + 12;
        }
        return fret;
      })
      minFret = getMinFretValue(frets);
    }
    return frets;
  })
}

export function sortChordsByLowest(tabArray: TabValue[][]):TabValue[][] {
  return tabArray.sort((a: TabValue[], b: TabValue[]) => {
    const minA = getMinFretValue(a);
    const minB = getMinFretValue(b);
    if (
      minA === undefined ||
      minB === undefined
    ) return 0;
    return minA - minB;
  });
}

export const emptyTab: TabValue[] = [null, null, null, null, null, null];