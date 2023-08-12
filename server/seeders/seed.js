const db = require('../config/connection');
const { Chord, User } = require('../models');
const chords = require('./chordSeeds.json');

db.once('open', async () => {
  await User.deleteOne({username: "system"});
  await Chord.deleteMany({})

  const user = await User.create({
    username: "system",
    password: "testing",
    userType: "system"
  });

  try {
    const userChords = chords.map((chord) => {
      return {
        type: chord.type,
        shape: chord.shape,
        frets: [
          chord.first,
          chord.second, 
          chord.third, 
          chord.fourth, 
          chord.fifth, 
          chord.sixth,
        ],
        user: user._id,
      }
    });
    await Chord.create(userChords);

    process.exit(0);
  } catch (err) {

    console.log({err})
    throw err;
  }
});