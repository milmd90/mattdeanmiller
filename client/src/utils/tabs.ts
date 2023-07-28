export type ChordTabValue = number | 'X';
export interface IChordData {
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