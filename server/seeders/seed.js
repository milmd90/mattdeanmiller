const db = require('../config/connection');
const { Chord } = require('../models');
const chords = require('./chordSeeds.json');

db.once('open', async () => {
  await Chord.deleteMany({});

  try {
    await chords.forEach(async chord => {
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
      console.log('create')

      await Chord.create({
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
      });

    //   if (
    //     first !== null &&
    //     second !== null &&
    //     third !== null &&
    //     fourth !== null &&
    //     fifth !== null &&
    //     sixth !== null
    //   ) {
    //     switch(shape) {
    //       case 'C':
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             first,
    //             second, 
    //             third, 
    //             fourth, 
    //             null, 
    //             null,
    //           ]
    //         });
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             null,
    //             second, 
    //             third, 
    //             fourth, 
    //             fifth, 
    //             null,
    //           ]
    //         });
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             first,
    //             second, 
    //             third, 
    //             null, 
    //             null, 
    //             sixth,
    //           ]
    //         });
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             null,
    //             second, 
    //             third, 
    //             fourth, 
    //             null, 
    //             sixth,
    //           ]
    //         });
    //         return;
    //       case 'A':
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             first,
    //             second, 
    //             third, 
    //             fourth, 
    //             fifth, 
    //             null,
    //           ]
    //         });
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             null,
    //             second, 
    //             third, 
    //             fourth, 
    //             fifth, 
    //             null,
    //           ]
    //         });
    //         return;
    //       case 'G':
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             first,
    //             second, 
    //             third, 
    //             fourth, 
    //             fifth, 
    //             sixth,
    //           ]
    //         });
    //         return;
    //       case 'E':
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             first,
    //             second, 
    //             third, 
    //             fourth, 
    //             fifth, 
    //             sixth,
    //           ]
    //         });
    //         return;
    //       case 'D':
    //         Chord.create({
    //           type,
    //           shape,
    //           frets: [
    //             first,
    //             second, 
    //             third, 
    //             fourth, 
    //             fifth, 
    //             sixth,
    //           ]
    //         });
    //         return;
    //     }
    //   }
    });

    process.exit(0);
  } catch (err) {

    console.log({err})
    throw err;
  }
});
