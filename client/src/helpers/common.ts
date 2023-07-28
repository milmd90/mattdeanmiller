type ChordTabValue = number | null;

export interface IStringData {
  "fret": ChordTabValue,
  "tone": ChordTabValue
};

export interface IChordData {
  "shape": any,
  "type": any,
  "option": any,
  "first": IStringData,
  "second": IStringData,
  "third": IStringData,
  "fourth": IStringData,
  "fifth": IStringData,
  "sixth": IStringData,
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

export function updateChordsWithPosition(tabArray: IChordTab[], position: string): IChordTab[] {
  let numPos: number = parseInt(position);
  if (isNaN(numPos)) numPos = 0;

  return tabArray.map((startTab) => {
    // let tab = {...startTab};
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

export function isValidTab(tab: IChordTab) {
  for (let s of tabStrings) {
    const f = tab[s].fret;
    if (typeof f === 'number') {
      return true
    }
  }
  return false;
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