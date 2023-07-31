const { Schema, model } = require('mongoose');

const guitarString = new Schema({
  "fret": {
    type: Number,
  },
  "tone": {
    type: Number,
  },
});

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
  "first": {
    type: guitarString,
    required: 'missing first',
  },
  "second": {
    type: guitarString,
    required: 'missing second',
  },
  "third": {
    type: guitarString,
    required: 'missing third',
  },
  "fourth": {
    type: guitarString,
    required: 'missing fourth',
  },
  "fifth": {
    type: guitarString,
    required: 'missing fifth',
  },
  "sixth": {
    type: guitarString,
    required: 'missing sixth',
  },
});

const Chord = model('Chord', chordSchema);

module.exports = Chord;