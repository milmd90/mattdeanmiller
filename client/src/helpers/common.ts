import {
  pitchDifference,
  getTone
} from './pitchTones';

export type TabValue = number | null;

export interface IStringData {
  "fret": TabValue,
  "tone": TabValue
};

export interface IChordData {
  "shape": any,
  "type": any,
  "option": any,
  "frets": TabValue[],
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
export const tabStrings: TabString[] = ['first', 'second', 'third', 'fourth', 'fifth', 'sixth'];
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

  function getStringValue(root: string, chord: IChordData, string: TabString): IStringData {
    const {shape, frets} = chord;
    const offset = pitchDifference(shape, root);
    const index = tabStrings.indexOf(string);
    const relativeFret = frets[index];
    const fret = getValue(relativeFret, offset);
    const stringPitch = getStringPitch(string);
    if (!stringPitch) return emptyStringData;
    const tone = getTone(root, fret, stringPitch)

    return {
      fret,
      tone
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

export const getStringName = (tabString: TabString): stringPitch | null => {
  if (tabString === "first") return "e";	
  if (tabString === "second") return "B";	
  if (tabString === "third") return "G";	
  if (tabString === "fourth") return "D";	
  if (tabString === "fifth") return "A";	
  if (tabString === "sixth") return "E";	
  return null;	
}

export const getStringPitch = (tabString: TabString): stringPitch | null => {
  const name = getStringName(tabString);
  if (name === null) return null;
  if (name === 'e') return 'E';
  return name;
}

export const emptyStringData: IStringData = {
  fret: null,
  tone: null
}

export const emptyTab: IChordTab = {
  "first": emptyStringData,
  "second": emptyStringData,
  "third": emptyStringData,
  "fourth": emptyStringData,
  "fifth": emptyStringData,
  "sixth": emptyStringData,
}