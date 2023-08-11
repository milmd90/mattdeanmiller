import * as pitchTones from '../dictionary/pitchTones.json';
import { TabValue, stringPitch} from './common';

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
  console.log('getTone', {
    root,
    string,
    fret,
    result
  })

  return result;
}