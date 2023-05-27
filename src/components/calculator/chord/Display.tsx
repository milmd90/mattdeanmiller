import React from 'react';
import { IChordParams } from './Chord';
import * as dictionary from '../../../utilities/dictionary.json';
const dict = dictionary as IChordDict; 

export type Pitch = "Ab" | "A" | "A#" | "Bb" | "B" | "B#" | "Cb" | "C" | "C#" | "Db" | "D" | "D#" | "Eb" | "E" | "E#" | "Fb" | "F" | "F#" | "Gb" | "G" | "G#"

interface IChordData {
  "shape": any,
  "type": any,
  "option": any,
  "fret-6": string | number,
  "fret-5": string | number,
  "fret-4": string | number,
  "fret-3": string | number,
  "fret-2": string | number,
  "fret-1": string | number,
  "pitch-6": string | number,
  "pitch-5": string | number,
  "pitch-4": string | number,
  "pitch-3": string | number,
  "pitch-2": string | number,
  "pitch-1": string | number,
};

interface IShapeOptions {
  "C"?: IChordData[],
  "A"?: IChordData[],
  "G"?: IChordData[],
  "E"?: IChordData[],
  "D"?: IChordData[]
}
export type Shape = keyof IShapeOptions;
const shapes: Shape[] = ["C", "A", "G", "E", "D"]

interface IChordDict {
  "major"?: IShapeOptions,
  "minor"?: IShapeOptions
}

function Display(props: {
  data: IChordParams;
}) {
  const {
    root,
    type,
    shape,
    position,
    option
  } = props.data;

  let shapeOptionsArray: IShapeOptions[] = [];
  if (
    type === "major" || 
    type === "minor"
  ) {
    const shapeOptions = dict[type];
    if (shapeOptions) {
      shapeOptionsArray.push(shapeOptions);
    }
  }

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
    } else {
      // todo add logic to search in lowest shape first
      for (let shape of shapes) {
        const chords = shapeOptions[shape];
        if (chords) {
          chordArray.push(...chords);
        }
      }
    }
  }

  const chord = chordArray[0];

  console.log({
    type,
    shape,
    // shapeOptionsArray,
    chordArray
  })

  return (
    <div className="display tab-column">
      <div>
        {chord && chord['fret-6']}
      </div>
      <div>
        {chord && chord['fret-5']}
      </div>
      <div>
        {chord && chord['fret-4']}
      </div>
      <div>
        {chord && chord['fret-3']}
      </div>
      <div>
        {chord && chord['fret-2']}
      </div>
      <div>
        {chord && chord['fret-1']}
      </div>
    </div>
  );
}

export default Display;
