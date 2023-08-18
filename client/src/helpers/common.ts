import {
  pitchDifference,
  getTone,
  pitchUpInSemitones
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

function getMinOrMaxFretValue(tab: IChordTab, comparator: (a: number, b: number) => boolean): number {
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

  // Add variations for diminished
  const roots = [root];
  chords.forEach(chord => {
    if (chord.type === 'diminished') {
      [3, 6, 9].forEach(offset => {
        const newRoot = pitchUpInSemitones(root, offset)
        if (newRoot !== null) {
          roots.push(newRoot);
        }
      });
    }
  });

  const tabs: IChordTab[] = [];
  roots.forEach(root => {
    chords.map((chord) => {
      tabs.push({
        first: getStringValue(root, chord, "first"),
        second: getStringValue(root, chord, "second"),
        third: getStringValue(root, chord, "third"),
        fourth: getStringValue(root, chord, "fourth"),
        fifth: getStringValue(root, chord, "fifth"),
        sixth: getStringValue(root, chord, "sixth"),
      });
    });
  });

  return tabs;
}

export function createChordVariations(tabArray: IChordTab[]): IChordTab[] {
  const resultsLog: string[] = [];
  const resultAray: IChordTab[] = [];

  const createTab = (tab: IChordTab, filter: boolean[]): {newTab: IChordTab, resultKey: string} => {
    const newTab = {
      first: filter[0] ? tab.first : emptyStringData,
      second: filter[1] ? tab.second : emptyStringData,
      third: filter[2] ? tab.third : emptyStringData,
      fourth: filter[3] ? tab.fourth : emptyStringData,
      fifth: filter[4] ? tab.fifth : emptyStringData,
      sixth: filter[5] ? tab.sixth : emptyStringData,
    }
    const values = [];
    values.push(newTab.first.fret == null ? 'X' : newTab.first.fret);
    values.push(newTab.second.fret == null ? 'X' : newTab.second.fret);
    values.push(newTab.third.fret == null ? 'X' : newTab.third.fret);
    values.push(newTab.fourth.fret == null ? 'X' : newTab.fourth.fret);
    values.push(newTab.fifth.fret == null ? 'X' : newTab.fifth.fret);
    values.push(newTab.sixth.fret == null ? 'X' : newTab.sixth.fret);
    const resultKey = values.join('.');

    return {newTab, resultKey}
  }

  const getNumTones = (tab: IChordTab) => {
    const tones: number[] = [];
    tabStrings.forEach(tabString => {
      const tone = tab[tabString].tone;
      if (tone !== null && !tones.includes(tone)) {
        // console.log('de dup!', {tone});
        tones.push(tone);
      } 
    })
    return tones.length;
  }

  const createPermutations = async (tab: IChordTab) => {
    const numTones = getNumTones(tab);

    // Every combination
    // const filterArray: boolean[][] = [];
    // const AMOUNT_OF_VARIABLES = 6;
    // for (let i = 0; i < (1 << AMOUNT_OF_VARIABLES); i++) {
    //   let boolArr = [];
    //   for (let j = AMOUNT_OF_VARIABLES - 1; j >= 0; j--) {
    //     boolArr.push(Boolean(i & (1 << j)));
    //   }
    //   filterArray.push(boolArr);
    // }

    // Select Combinations
    const filterArray: boolean[][] = [
      // X     X     X     X     X     X 
      [true, true, true, true, true, true],
      // X     X     X     X     X       
      [true, true, true, true, true, false],
      // X     X     X     X     
      [true, true, true, true, false, false],
      // X     X     X           X       
      [true, true, true, false, true, false],
      // X     X     X                   X
      [true, true, true, false, false, true],
      // X     X     X       
      [true, true, true, false, false, false],
      //       X     X     X     X    
      [false, true, true, true, true, false],
      //       X     X      X            X
      [false, true, true, true, false, true],
    ];
    filterArray.forEach((filter) => {
      const {newTab, resultKey} = createTab(tab, filter);
      const newNumTones = getNumTones(newTab);
      if (numTones === newNumTones && !resultsLog.includes(resultKey)) {
        resultsLog.push(resultKey);
        resultAray.push(newTab);
      }
    })
  }

  tabArray.forEach((tab) => {
    createPermutations(tab);
  })
  return resultAray;
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

const getStringPitch = (tabString: TabString): stringPitch | null => {
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