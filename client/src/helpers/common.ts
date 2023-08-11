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

export type TabString = keyof IChordTab;
export const tabStrings: TabString[] = ['sixth', 'fifth', 'fourth', 'third', 'second', 'first'];
export type stringPitch = 'E' | 'A' | 'D' | 'G' | 'B' | 'e';

export function getMinOrMaxFretValue(tab: IChordTab, comparator: (a: number, b: number) => boolean): number {
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

export function getMinFretValue(tab: IChordTab): number {
  return getMinOrMaxFretValue(tab, (a: number, b: number) => {
    return a < b
  })
}

export function getMaxFretValue(tab: IChordTab): number {
  return getMinOrMaxFretValue(tab, (a: number, b: number) => {
    return a > b
  })
}

export function convertChordsToTabs(chords: IChordData[], root: string): IChordTab[] {
  function getValue(input: TabValue, offset: number | null): TabValue {
    if (input === null || offset === null) return input;
    return input + offset;
  }

  function getTone(root: string, fret: TabValue, string: TabString): TabValue {
    const pitch = getPitch(string, fret);
    return pitchDifference(pitch, root);

  }

  function getStringValue(root: string, chord: IChordData, string: TabString): IStringData {
    const {shape, frets} = chord;
    const fret = frets[tabStrings.indexOf(string)];
    const offset = pitchDifference(shape, root);
    const stringPitch = stringToNote(string);
    if (!stringPitch) return {
      fret: null,
      tone: null
    }

    return {
      fret: getValue(frets[tabStrings.indexOf(string)], offset),
      tone: getTone(root, fret, stringPitch)
    };
  }

  return chords.map((chord) => {
    return {
      first: getStringValue(root, chord, "first"),
      second: getStringValue(root, chord, "second"),
      third: getStringValue(root, chord, "third"),
      fourth: getStringValue(root, chord, "fourth"),
      fifth: getStringValue(root, chord, "fifth"),
      sixth: getStringValue(root, chord, "sixth"),
    };
  });
}

export function updateChordsWithPosition(tabArray: IChordTab[], position: string): IChordTab[] {
  let numPos: number = parseInt(position);
  if (isNaN(numPos)) numPos = 0;

  return tabArray.map((startTab) => {
    let tab = JSON.parse(JSON.stringify(startTab));
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

export function sortChordsByLowest(tabArray: IChordTab[]): IChordTab[] {
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

export const stringToNote = (tabString: TabString): string => {	
  if (tabString === "sixth") return "e";	
  if (tabString === "fifth") return "B";	
  if (tabString === "fourth") return "G";	
  if (tabString === "third") return "D";	
  if (tabString === "second") return "A";	
  if (tabString === "first") return "E";	
  return "";	
}

export const emptyTab: IChordTab = {
  "sixth": {
    fret: null,
    tone: null
  },
  "fifth": {
    fret: null,
    tone: null
  },
  "fourth": {
    fret: null,
    tone: null
  },
  "third": {
    fret: null,
    tone: null
  },
  "second": {
    fret: null,
    tone: null
  },
  "first": {
    fret: null,
    tone: null
  },
}