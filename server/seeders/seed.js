const db = require('../config/connection');
const { Chord } = require('../models');
const chords = require('./chordSeeds.json');


let completeDictionary = [];

const createPermutations = async (chord) => {
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  });
}

const createDictionary = async (chords) => {

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
        ]
      });

      if (
        chord.first !== null &&
        chord.second !== null &&
        chord.third !== null &&
        chord.fourth !== null &&
        chord.fifth !== null &&
        chord.sixth !== null
      ) {
        createPermutations(chord);
      }
    })

  } catch (err) {
    console.log({err})
    throw err;
  }
}


db.once('open', async () => {
  await Chord.deleteMany({});

  try {
    createDictionary(chords);
    await Chord.create(completeDictionary);

    process.exit(0);
  } catch (err) {

    console.log({err})
    throw err;
  }
});