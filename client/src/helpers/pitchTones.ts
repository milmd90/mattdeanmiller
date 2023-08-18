import { TabValue, stringPitch} from './common';

const pitchTones = {
  "Ab": 0,
  "A": 1,
  "A#": 2,
  "Bb": 2,
  "B": 3,
  "B#": 4,
  "Cb": 3,
  "C": 4,
  "C#": 5,
  "Db": 5,
  "D": 6,
  "D#": 7,
  "Eb": 7,
  "E": 8,
  "E#": 9,
  "Fb": 8,
  "F": 9,
  "F#": 10,
  "Gb": 10,
  "G": 11,
  "G#": 0
}

const tonePitchMap = ["Ab", "A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G"];


export function convertPitchToTone(pitch: string): TabValue {
  if (
    pitch === "Ab" ||
    pitch === "A" ||
    pitch === "A#" ||
    pitch === "Bb" ||
    pitch === "B" ||
    pitch === "B#" ||
    pitch === "Cb" ||
    pitch === "C" ||
    pitch === "C#" ||
    pitch === "Db" ||
    pitch === "D" ||
    pitch === "D#" ||
    pitch === "Eb" ||
    pitch === "E" ||
    pitch === "E#" ||
    pitch === "Fb" ||
    pitch === "F" ||
    pitch === "F#" ||
    pitch === "Gb" ||
    pitch === "G" ||
    pitch === "G#"
  ) {
    return pitchTones[pitch]
  }
  return null
}

export function pitchDifference(start: string, end: string): TabValue {
  const startTone = convertPitchToTone(start);
  const endTone = convertPitchToTone(end);
  if (null === startTone || null === endTone) return null;

  return (12 + endTone - startTone) % 12;
}

export function getTone(root: string, fret: TabValue, string: stringPitch): TabValue {
  if (null === fret) return null;
  const stringTone = convertPitchToTone(string);
  const rootTone = convertPitchToTone(root);
  if (null === stringTone || null === rootTone) return null;
  const result = (12 + (stringTone + fret) - rootTone) % 12;

  return result;
}

export function pitchUpInSemitones(root: string, semitones: number): string | null {
  const rootTone = convertPitchToTone(root);
  if (rootTone === null) return null;
  return tonePitchMap[(rootTone + semitones)%12];
}