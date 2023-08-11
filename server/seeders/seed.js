const db = require('../config/connection');
const { Chord } = require('../models');
const chords = require('./chordSeeds.json');

db.once('open', async () => {
  try {
    formattedChords = chords.map(chord => {
      const {
        type,
        shape,
        first, 
        second, 
        third, 
        fourth, 
        fifth, 
        sixth,
      } = chord;
      return {
        type,
        shape,
        frets: [
          first,
          second, 
          third, 
          fourth, 
          fifth, 
          sixth,
        ]
      }
    })
    await Chord.deleteMany({});
    await Chord.create(formattedChords);

    process.exit(0);
  } catch (err) {
    throw err;
  }
});
