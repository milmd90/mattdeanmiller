const db = require('../config/connection');
const { Chords } = require('../models');
const chordSeeds = require('./chordSeeds.json');

db.once('open', async () => {
  try {
    await Chords.deleteMany({});
    await Chords.create(chordSeeds);

    console.log('all done!');
    process.exit(0);
  } catch (err) {
    throw err;
  }
});
