import * as pitchTones from '../dictionary/pitchTones.json';
import { TabValue, TabString} from './common';

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
  if (!startTone || !endTone) return null;

  return (12 + endTone - startTone) % 12;
}

export function getPitch(string: TabString, fret: TabValue): TabValue {
  const stringTone = convertPitchToTone(string);
  if (!stringTone || !fret) return null;

  return (12 + stringTone + fret) % 12;
}