const db = require('../config/connection');
const { Chord, User } = require('../models');
const chords = require('./chordSeeds.json');

let completeDictionary = [];

const createPermutations = async (chord, userId) => {
  const { 
    type,
    shape,
    first,
    second,
    third,
    fourth,
    fifth,
    sixth
  } = chord;
  
  completeDictionary.push({
    type,
    shape,
    frets: [
      first,
      second, 
      third, 
      fourth, 
      fifth, 
      null,
    ],
    user: userId,
  });
  completeDictionary.push({
    type,
    shape,
    frets: [
      first,
      second, 
      third, 
      fourth, 
      null, 
      null,
    ],
    user: userId,
  });
  completeDictionary.push({
    type,
    shape,
    frets: [
      null,
      second, 
      third, 
      fourth, 
      fifth, 
      null,
    ],
    user: userId,
  });
  completeDictionary.push({
    type,
    shape,
    frets: [
      first,
      second, 
      third, 
      null, 
      null, 
      sixth,
    ],
    user: userId,
  });
  completeDictionary.push({
    type,
    shape,
    frets: [
      null,
      second, 
      third, 
      fourth, 
      null, 
      sixth,
    ],
    user: userId,
  });
}

const createDictionary = async (chords, userId) => {
  try {
    chords.forEach((chord) => {
      completeDictionary.push({
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
        user: userId,
      });

      if (
        chord.first !== null &&
        chord.second !== null &&
        chord.third !== null &&
        chord.fourth !== null &&
        chord.fifth !== null &&
        chord.sixth !== null
      ) {
        createPermutations(chord, userId);
      }
    })

  } catch (err) {
    console.log({err})
    throw err;
  }
}


db.once('open', async () => {
  await User.deleteOne({username: "system"});
  await Chord.deleteMany({})

  const user = await User.create({
    username: "system",
    password: "testing",
    userType: "system"
  });

  try {
    createDictionary(chords, user._id);
    await Chord.create(completeDictionary);

    process.exit(0);
  } catch (err) {

    console.log({err})
    throw err;
  }
});