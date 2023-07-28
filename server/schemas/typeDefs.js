const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Chord {
    _id: ID
    type: String
    shape: String
  }

  type Query {
    chords(shape: String, type: String): [Chord]
  }
`;

module.exports = typeDefs;




// fret-1: Number
// fret-2: Number
// fret-3: Number
// fret-4: Number
// fret-5: Number
// fret-6: Number
// tone-1: Number
// tone-2: Number
// tone-3: Number
// tone-4: Number
// tone-5: Number
// tone-6: Number