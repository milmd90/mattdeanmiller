import * as pitchTones from '../dictionary/pitchTones.json';

export function convertPitchToTone(pitch: string): number | undefined {
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
}

export function pitchDifference(start: string, end: string): number | null {
  const startTone = convertPitchToTone(start);
  const endTone = convertPitchToTone(end);
  if (!startTone || !endTone) return null;

  return (12 + endTone - startTone) % 12;
}