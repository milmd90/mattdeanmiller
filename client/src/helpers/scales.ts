import { IScale, tabStrings } from "./common";

export function transposeScale(scale: IScale, offset: number): IScale {
  let minFret = getMinScaleFretValue(scale);
  if (minFret + offset > 12) offset -= 12;
  let newScale: IScale = {
    'first': [],
    'second': [],
    'third': [],
    'fourth': [],
    'fifth': [],
    'sixth': []
  };
  for (let tabString of tabStrings) {
    newScale[tabString] = scale[tabString].map((fret) => {
      return fret + offset;
    });
  }
  return newScale;
}

export function getMinScaleFretValue(scale: IScale): number {
  const fretValues: number[] = [];
  for (let tabString of tabStrings) {
    fretValues.push(...scale[tabString]);
  }
  return Math.min(...fretValues);
}