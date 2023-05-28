import * as pitchTones from '../models/pitchTones.json';

// export type Pitch = "Ab" | "A" | "A#" | "Bb" | "B" | "B#" | "Cb" | "C" | "C#" | "Db" | "D" | "D#" | "Eb" | "E" | "E#" | "Fb" | "F" | "F#" | "Gb" | "G" | "G#"

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