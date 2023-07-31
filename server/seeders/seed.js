const db = require('../config/connection');
const { Chord } = require('../models');
const chordSeeds = require('./chordSeeds.json');

db.once('open', async () => {
  try {
    await Chord.deleteMany({});
    await Chord.create(chordSeeds);

    process.exit(0);
  } catch (err) {
    throw err;
  }
});
