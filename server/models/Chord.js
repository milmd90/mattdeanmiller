const { Schema, model } = require('mongoose');

const chordSchema = new Schema({
  "type": {
    type: String,
    required: 'missing type',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
  "shape": {
    type: String,
    required: 'missing shape',
    minlength: 1,
    maxlength: 280,
    trim: true,
  },
});

const Chord = model('Chord', chordSchema);

module.exports = Chord;


// "fret-1": {
//   type: Schema.Types.Mixed,
//   required: 'missing fret 1',
// },
// "fret-2": {
//   type: Schema.Types.Mixed,
//   required: 'missing fret 2',
// },
// "fret-3": {
//   type: Schema.Types.Mixed,
//   required: 'missing fret 3',
// },
// "fret-4": {
//   type: Schema.Types.Mixed,
//   required: 'missing fret 4',
// },
// "fret-5": {
//   type: Schema.Types.Mixed,
//   required: 'missing fret 5',
// },
// "fret-6": {
//   type: Schema.Types.Mixed,
//   required: 'missing fret 6',
// },
// "tone-1": {
//   type: Schema.Types.Mixed,
//   required: 'missing tone 1',
// },
// "tone-2": {
//   type: Schema.Types.Mixed,
//   required: 'missing tone 2',
// },
// "tone-3": {
//   type: Schema.Types.Mixed,
//   required: 'missing tone 3',
// },
// "tone-4": {
//   type: Schema.Types.Mixed,
//   required: 'missing tone 4',
// },
// "tone-5": {
//   type: Schema.Types.Mixed,
//   required: 'missing tone 5',
// },
// "tone-6": {
//   type: Schema.Types.Mixed,
//   required: 'missing tone 6',
// },
